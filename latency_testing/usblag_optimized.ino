#define BUTTON_PIN 7

#define ENABLE_BT 0
#include "HIDDriver.h"
#include "XInputDriver.h"
#if ENABLE_BT
#include <BTHID.h>
#endif
#include "HIDReportMask.h"

#include "desc.h"

float min = 0.0;
float max = 0.0;
float sumx = 0.0;
float sumx2 = 0.0;

unsigned long nextchange;
unsigned long time;
int total = 5000;
byte state = 0;
byte button = 0;
USB Usb;
HIDReportMask report_mask;

#define BUFFER_SIZE 64

#define PS4_VID 0x054C		// Sony Corporation
#define PS4_PID 0x05C4		// PS4 Controller
#define PS4_PID_SLIM 0x09CC // PS4 Slim Controller

uint8_t intervalPow2(uint8_t interval)
{
	if (interval <= 2)
	{
		return interval;
	}
	if (interval < 4)
	{
		return 2;
	}
	if (interval < 8)
	{
		return 4;
	}
	if (interval < 16)
	{
		return 8;
	}
	if (interval < 32)
	{
		return 16;
	}
	return 32;
}

uint8_t pollBuffer[BUFFER_SIZE];
uint8_t prevBuffer[BUFFER_SIZE];

class TimingManager
{
public:
	EpInfo *pollingEP = 0;
	uint8_t address = 0;
	USB *usbRef;
	uint8_t pollingInterval = 0;
	uint32_t nextPollingTime = 0;
	bool doPoll = false;
	uint8_t overrideInterval = 0;
	TimingManager(USB *usb) : usbRef(usb) {}
	void doInit(uint8_t interval, uint8_t bAddress, EpInfo *ep)
	{
		pollingInterval = interval;
		pollingEP = ep;
		doPoll = true;
		overrideInterval = 0;
		address = bAddress;
		nextPollingTime = 0;
		memset(prevBuffer, 0, BUFFER_SIZE);
		Serial.print(F("Interval:\t"));
		Serial.print(interval);
		Serial.println(F("ms"));
	}
	bool canPoll()
	{
		if (!doPoll || !pollingEP)
			return false;
		// do burn
		if (overrideInterval == 255)
			return true;
		if ((int32_t)((uint32_t)millis() - nextPollingTime) >= 0L)
		{
			nextPollingTime = (uint32_t)millis() + (overrideInterval > 0 ? overrideInterval : pollingInterval);
			return true;
		}
		return false;
	}
	uint8_t pollDevice()
	{
		if (!canPoll())
			return 0;

		// Serial.println("Coincoin");
		memset(pollBuffer, 0, BUFFER_SIZE);
		uint16_t buffer_size = pollingEP->maxPktSize;
		uint8_t res = usbRef->inTransfer(address, pollingEP->epAddr, &buffer_size, pollBuffer);
		if (res != 0 && res != hrNAK)
		{
			Serial.print(F("Cant poll device "));
			Serial.print(res);
			Serial.print("\n");
		}
		if (res == hrNAK)
		{
			return 0;
		}
		return doMeasure(pollingEP->maxPktSize, pollBuffer);
	}
	uint8_t doMeasure(uint8_t len, uint8_t *buf)
	{
		float diff = (micros() - time) / 1000.0;
		report_mask.apply_mask(len, buf);
		if (memcmp(buf, prevBuffer, len) != 0)
		{
			sumx += diff;
			sumx2 += (diff * diff);
			if (diff >= max)
			{
				max = diff;
			}
			if (diff <= min || min == 0.0)
			{
				min = diff;
			}
			Serial.println(diff);
			/*for (uint8_t i = 0 ; i < len; ++i) {
				print_hex(buf[i], 8);
			}
			Serial.println();
			*/
			memcpy(prevBuffer, buf, len);
			time = 0;
		}
		return 0;
	}
};

#if ENABLE_BT
class BTController : public BTHID, public TimingManager
{
public:
	BTController(BTD *p, bool pair = false, const char *pin = "0000") : BTHID(p, pair, pin), TimingManager(NULL)
	{
	}
	virtual void OnInitBTHID()
	{
		TimingManager::doInit(0, 0, NULL);
		enable_sixaxis();
		Serial.print(F("BTHID Controller initialized\n"));
		report_mask.do_mask = false;
	}
	virtual void ParseBTHIDData(uint8_t len, uint8_t *buf)
	{
		doMeasure(10, buf + 2);
	}
	void enable_sixaxis(){
		// Command used to make the PS4 controller send out the entire output report
		/* {
						uint8_t buf[2];
						buf[0] = 0x90; // HID BT Get_report (0x40) | Report Type (Feature 0x03)
						buf[1] = 0x00; // Report ID

						HID_Command(buf, 2);
			}
			delay(150);
			{
						uint8_t buf[79];
						memset(buf, 0, sizeof(buf));

						buf[0] = 0x52; // HID BT Set_report (0x50) | Report Type (Output 0x02)
						buf[1] = 0x11; // Report ID
						buf[2] = 0x80;
						buf[4]= 0xFF;

						buf[7] = 0; // Small Rumble
						buf[8] = 0; // Big rumble

						buf[9] = 0xFF; // Red
						buf[10] = 0xFF; // Green
						buf[11] = 0xFF; // Blue

						buf[12] = 0; // Time to flash bright (255 = 2.5 seconds)
						buf[13] = 0; // Time to flash dark (255 = 2.5 seconds)

						// The PS4 console actually set the four last bytes to a CRC32 checksum, but it seems like it is actually not needed
						buf[75] = 0xFE;
						buf[76] = 0x84;
						buf[77] = 0xA3;
						buf[78] = 0x79;
						HID_Command(buf, sizeof(buf));
			}*//*{

				 uint8_t buf[] = {0x53, 0x03, 0x02, 0x00, 0xf1, 0xdf, 0xd3, 0x7b, 0x4f, 0x49, 0x0b, 0x0b, 0x7c, 0x79, 0xde, 0xad,
0x5d, 0xa3, 0x41, 0x8a, 0x9c, 0x2e, 0xaf, 0x09, 0xc4, 0xa6, 0x80, 0xb4, 0x82, 0x87, 0x2c, 0xbf,
0x86, 0xe0, 0x2a, 0x86, 0x60, 0xa0, 0x23, 0x33};
				 //memset(buf, 0, sizeof(buf));

				 HID_Command(buf, sizeof(buf));
	 }*/
	};

	void HID_Command(uint8_t *data, uint8_t nbytes)
	{
		pBtd->L2CAP_Command(hci_handle, data, nbytes, control_scid[0], control_scid[1]);
	};
};
#endif

class XBoxController : public XInputDriver, public TimingManager
{
public:
	XBoxController(USB *usb) : XInputDriver(usb), TimingManager(usb) {}
	uint8_t Init(uint8_t parent, uint8_t port, bool lowspeed)
	{
		uint8_t res = XInputDriver::Init(parent, port, lowspeed);
		if (res)
			return res;
		TimingManager::doInit(bInterval, bAddress, &epInfo[XBOX_INPUT_PIPE]);
		if (isXboxOne)
		{
			Serial.print(F("XBOX One Controller initialized\n"));

			startDevice();

			// initRumble();
		}
		else
		{
			Serial.print(F("XBOX Controller initialized\n"));
		}
		report_mask.interesting_bit_idx = 2 * 8;
		for (int i = 0; i < report_mask.interesting_bit_idx; i++)
		{
			report_mask.interesting_bits[i] = 16 + i;
		}
		report_mask.do_mask = true;
		return 0;
	}
	uint8_t Release()
	{
		XInputDriver::Release();
		TimingManager::doPoll = false;
		return 0;
	}
	uint8_t Poll() { return pollDevice(); }
};

class HIDController : public HIDDriver, public TimingManager
{
public:
	HIDController(USB *usb) : HIDDriver(usb), TimingManager(usb) {}
	uint8_t Init(uint8_t parent, uint8_t port, bool lowspeed)
	{
		uint8_t res = HIDDriver::Init(parent, port, lowspeed);
		if (res)
			return res;
		TimingManager::doInit(pollInterval, bAddress, &epInfo[hidInterfaces[0].epIndex[epInterruptInIndex]]);

		if (GetReportDescr(0, &report_mask))
		{
			Serial.println(F("Cannot read HID report"));
		}
		if (bNumIface > 1)
		{
			Serial.println(F("Warning! Multi-channel HID device not supported! Selecting only the first one."));
		}
		Serial.print(F("HID Controller initialized\n"));
		return 0;
	}
	uint8_t Release()
	{
		HIDDriver::Release();
		TimingManager::doPoll = false;
		return 0;
	}
	uint8_t Poll() { return pollDevice(); }
};

HIDController Hid(&Usb);
XBoxController xbox(&Usb);

#if ENABLE_BT

BTD Btd(&Usb); // You have to create the Bluetooth Dongle instance like so

/* You can create the instance of the PS4BT class in two ways */
// This will start an inquiry and then pair with the PS4 controller - you only have to do this once
// You will need to hold down the PS and Share button at the same time, the PS4 controller will then start to blink rapidly indicating that it is in pairing mode
BTController btHid(&Btd);

#endif

void setup()
{

	pinMode(BUTTON_PIN, OUTPUT);
	digitalWrite(BUTTON_PIN, LOW);
	Serial.begin(115200);
#if !defined(__MIPSEL__)
	while (!Serial)
		; // Wait for serial port to connect - used on Leonardo, Teensy and other boards with built-in USB CDC serial connection
#endif
	Serial.println(F("Start"));

	if (Usb.Init() == -1)
		Serial.println(F("OSC did not start."));

	randomSeed(analogRead(0));
	delay(200);

	nextchange = micros() + uint32_t(5000) * 1000;
}
// int looptime = 0;
void loop()
{
	// Check inputs at beginning of loop
	Usb.Task();

	if (total < 1000)
	{
		if (micros() >= nextchange)
		{
			if (time != 0)
			{
				Serial.println(F("Input was dropped!"));
			}
			button = !button;
			digitalWrite(BUTTON_PIN, button);
			time = micros();
			total++;
			nextchange = micros() + random(50, 70) * 1000 + random(0, 250) * 4;
		}
	}
	else if (Serial.available())
	{
		// Serial.println(F("Waiting for input..."));
		byte inByte = Serial.read();
		uint8_t reading_interval;
		switch (inByte)
		{
		case '1':
			button = true;
			digitalWrite(BUTTON_PIN, button);
			Serial.println(F("High"));
			time = micros();
			break;
		case '0':
			button = false;
			digitalWrite(BUTTON_PIN, button);
			Serial.println(F("Low"));
			time = micros();
			break;
		case 'b':
			Hid.overrideInterval = 255;
			xbox.overrideInterval = 255;
			Serial.println(F("Switch to burn mode: disabling polling interval"));
			break;
		case 'o':
			Hid.overrideInterval = 1;
			xbox.overrideInterval = 1;
			Serial.println(F("Override polling interval to 1ms!"));
			break;
		case '2':
			Hid.overrideInterval = 2;
			xbox.overrideInterval = 2;
			Serial.println(F("Override polling interval to 2ms!"));
			break;
		case '4':
			Hid.overrideInterval = 4;
			xbox.overrideInterval = 4;
			Serial.println(F("Override polling interval to 4ms!"));
			break;
		case '8':
			Hid.overrideInterval = 8;
			xbox.overrideInterval = 8;
			Serial.println(F("Override polling interval to 8ms!"));
			break;
		case 'n':
			Hid.overrideInterval = 0;
			xbox.overrideInterval = 0;
			Serial.println(F("Back to normal polling interval!"));
			break;
		case 'p':
			reading_interval = intervalPow2(Hid.pollingInterval ? Hid.pollingInterval : xbox.pollingInterval);
			Hid.overrideInterval = reading_interval;
			xbox.overrideInterval = reading_interval;
			Serial.print(F("Override polling interval to "));
			Serial.print(reading_interval);
			Serial.print(F("ms!"));
			break;
		case 't':
			min = 0.0;
			max = 0.0;
			sumx = 0.0;
			sumx2 = 0.0;
			button = false;
			total = 0;
			digitalWrite(BUTTON_PIN, button);
			time = 0;
			Serial.println(F("Launching test"));
			randomSeed(analogRead(0));
			nextchange = micros() + random(50, 70) * 1000 + random(0, 250) * 4;
			break;
		case 's':
			reading_interval = Serial.parseInt();
			Hid.overrideInterval = reading_interval;
			xbox.overrideInterval = reading_interval;
			Serial.print(F("Override polling to "));
			Serial.print(reading_interval);
			Serial.println(F("ms!"));
			break;
		case '=':
			Serial.print(F("min: "));
			Serial.println(min);
			Serial.print(F("max: "));
			Serial.println(max);
			Serial.print(F("average: "));
			Serial.println(sumx / 1000.0);
			Serial.print(F("stddev: "));
			Serial.println(sqrt(((1000.0 * sumx2) - (sumx * sumx)) / (1000.0 * (1000.0 - 1.0))));
			break;
		}
	}
}
