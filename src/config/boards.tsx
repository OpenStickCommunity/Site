import React from 'react';

const boards = {
	'Microcontroller Boards': [
		{
			name: 'Raspberry Pi Pico',
			configName: 'Pico',
			pinout: '/controller-build/wiring#raspberry-pi-pico',
			website: 'https://www.raspberrypi.com/products/raspberry-pi-pico/',
			image: '/img/boards/Pico.jpg',
			supported: true,
			desc: () => (
				<p>
					The Raspberry Pi Pico is a powerful, low-cost board based on the
					Raspberry Pi RP2040 microcontroller. This build is the reference
					implementation for GP2040-CE.
				</p>
			),
		},
		{
			name: 'Raspberry Pi Pico W',
			configName: 'PicoW',
			pinout: '/controller-build/wiring#raspberry-pi-pico',
			website: 'https://www.raspberrypi.com/products/raspberry-pi-pico/',
			image: '/img/boards/PicoW.jpg',
			supported: true,
			desc: () => (
				<p>
					The Raspberry Pi Pico W is a powerful, low-cost board based on the
					Raspberry Pi RP2040 microcontroller.
				</p>
			),
		},
		{
			name: 'Adafruit KB2040',
			configName: 'KB2040',
			pinout: '/controller-build/wiring#adafruit-kb2040',
			website: 'https://learn.adafruit.com/adafruit-kb2040',
			image: '/img/boards/KB2040.jpg',
			supported: true,
			desc: () => (
				<p>
					Another RP2040 board in the Pro Micro form factor, with 2 additional
					pins for USB data. This build is configured for DIY gamepad mods.
				</p>
			),
		},
		{
			name: 'Liatris',
			configName: 'SparkFunProMicro',
			pinout: '/controller-build/wiring#sparkfun-pro-micro---rp2040',
			website:
				'https://splitkb.com/products/liatris',
			image: '/img/boards/Liatris.jpg',
			supported: true,
			desc: () => (
				<p>
					Drop in RP2040 replacement for Pro Micro builds by {' '}
					<a href="SplitKB.com">
						SplitKB.com
					</a>
					.
				</p>
			),
		},
		{
			name: 'SparkFun Pro Micro',
			configName: 'SparkFunProMicro',
			pinout: '/controller-build/wiring#sparkfun-pro-micro---rp2040',
			website:
				'https://learn.sparkfun.com/tutorials/pro-micro-rp2040-hookup-guide',
			image: '/img/boards/SparkFunProMicro.jpg',
			supported: true,
			desc: () => (
				<p>
					An RP2040 board in the Pro Micro form factor. This build is a drop-in
					replacement for the{' '}
					<a href="https://github.com/MickGyver/DaemonBite-Arcade-Encoder">
						Daemonbite Arcade Encoder
					</a>
					.
				</p>
			),
		},
		{
			name: 'Waveshare RP2040-Zero',
			configName: 'WaveshareZero',
			pinout: '/controller-build/wiring#waveshare-rp2040-zero',
			website: 'https://www.waveshare.com/wiki/RP2040-Zero',
			image: '/img/boards/WaveshareZero.jpg',
			supported: true,
			desc: () => (
				<p>
					The{' '}
					<a href="https://www.waveshare.com/rp2040-zero.htm">
						Waveshare RP2040-Zero
					</a>{' '}
					is a small form factor board with castellated pins and USB-C, making
					this a popular choice for custom built PCBs without the need for SMT
					assembly.
				</p>
			),
		},
	],
	'Community Devices': [
		{
			name: 'ARC Accessibility Controller',
			configName: 'ARCController',
			pinout: null,
			website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/ARC%20Accessibility%20Controller',
			image: '/img/boards/ARCController.jpg',
			category: 'official',
			desc: () => (
				<p>
					The ARC Controller is an accessibility controller.{' '}
					This was designed by TheTrain taking some design ideas from <a href="https://github.com/jfedor2">jfedor2</a>{' '}
					as well as the universal standards for accessibility controller connectors.
				</p>
			),
		},
		{
			name: 'Flatbox Rev 4',
			configName: 'FlatboxRev4',
			pinout: null,
			website: 'https://github.com/jfedor2/flatbox/tree/master/hardware-rev4',
			image: '/img/boards/FlatboxRev4.jpg',
			category: 'open',
			desc: () => (
				<p>
					Stickless PCB designed by{' '}
					<a href="https://github.com/jfedor2">jfedor2</a> using an embedded
					RP2040 chip.
				</p>
			),
		},
		{
			name: 'Flatbox Rev 5',
			configName: 'FlatboxRev5',
			pinout: null,
			website: 'https://github.com/jfedor2/flatbox/tree/master/hardware-rev5',
			image: '/img/boards/FlatboxRev5.jpg',
			category: 'open',
			desc: () => (
				<p>
					Stickless PCB designed by{' '}
					<a href="https://github.com/jfedor2">jfedor2</a> using the Waveshare
					RP2040-Zero.
				</p>
			),
		},
		{
			name: 'Flatbox Rev 5 Southpaw',
			configName: 'FlatboxRev5Southpaw',
			pinout: null,
			website: 'https://github.com/SkylaHila/flatbox-southpaw',
			image: '/img/boards/FlatboxRev5Southpaw.jpg',
			category: 'open',
			desc: () => (
				<p>
					Mirrored version of the Flatbox Rev 5 by SkylaHila. Based on the Flatbox Rev 5 by 
					<a href="https://github.com/jfedor2">jfedor2</a>.
				</p>
			),
		},
		{
			name: 'Flatbox Rev 5 RGB',
			configName: 'FlatboxRev5RGB',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Flatbox%20Rev%205%20RGB',
			image: '/img/boards/FlatboxRev5RGB.jpg',
			category: 'open',
			desc: () => (
				<p>
					Stickless PCB designed by{' '}
					<a href="https://github.com/jfedor2">jfedor2</a> and{' '}
					<a href="https://github.com/TheTrainGoes">TheTrain</a> using the
					Waveshare RP2040-Zero.
				</p>
			),
		},
		{
			name: 'Flatbox Rev 5 USB Passthrough',
			configName: 'FlatboxRev5USBPassthrough',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Flatbox%20Rev%205%20Passthrough',
			image: '/img/boards/FlatboxRev5USBPassthrough.jpg',
			category: 'open',
			desc: () => (
				<p>
					Stickless PCB designed by{' '}
					<a href="https://github.com/jfedor2">jfedor2</a> and{' '}
					<a href="https://github.com/TheTrainGoes">TheTrain</a> using the
					Waveshare RP2040-Zero.
				</p>
			),
		},
		{
			name: 'GP2040-CE Keyboard Converter',
			configName: 'KeyboardConverter',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/Supported%20Boards/GP2040%20Keyboard%20Converter/Waveshare%20Zero-PCB',
			image: '/img/boards/KeyboardConverter.jpg',
			category: 'open',
			desc: () => (
				<p>
					The GP2040-CE Keyboard Converter Case is designed to be a USB Host
					Device for the use of a keyboard with the GP2040-CE project.
				</p>
			),
		},
		{
			name: 'Granola Summit',
			configName: 'Granola',
			pinout: null,
			website: 'https://granola.games/collections/controllers',
			image: '/img/boards/Granola.jpg',
			category: 'open',
			desc: () => (
				<p>
					Configuration for the {' '}
					<a href="https://granola.games/">
					   Granola Summit
					</a>
					. PCB and design files can be found <a href="https://github.com/michaelswitzer/granola-summit">here</a>.
				</p>
			),
		},
		{
			name: 'Haute42 Series',
			configName: 'Haute42COSMOX',
			pinout: null,
			website: 'https://haute42.com/',
			image: '/img/boards/Haute42.jpg',
			category: 'closed',
			desc: () => (
				<p>
					Configuration for the {' '}
					<a href="https://haute42.com/">
					   Haute42 Series
					</a>
					. The Haute42 products are all compatible with the same configuration file.
					These products include the Haute42 Pad M Series, T Series, G Series, and mini. 
				</p>
			),
		},
		{
			name: 'Mavercade Rev1',
			configName: 'MavercadeRev1',
			pinout: null,
			website:
				'https://mavercade.com/',
			image: '/img/boards/MavercadeRev1.jpg',
			category: 'closed',
			desc: () => (
				<p>
					Configuration for the{' '}
					<a href="https://mavercade.com/">
						Mavercade Rev1
					</a>
					. These revisions use a Waveshare RP2040-Zero board.
				</p>
			),
		},
		{
			name: 'Mavercade Rev2',
			configName: 'MavercadeRev2',
			pinout: null,
			website:
				'https://mavercade.com/',
			image: '/img/boards/MavercadeRev2.jpg',
			category: 'closed',
			desc: () => (
				<p>
					Configuration for the{' '}
					<a href="https://mavercade.com/">
						Mavercade Rev2
					</a>
					. These revisions use a Waveshare RP2040-Zero board.
				</p>
			),
		},
		{
			name: 'MiSTercadeV2',
			configName: 'MiSTercadeV2',
			pinout: null,
			website:
				'https://github.com/misteraddons/MiSTercadeV1',
			image: '/img/boards/MistercadeV2.jpg',
			category: 'closed',
			desc: () => (
				<p>
					Configuration for the{' '}
					<a href="https://misteraddons.com/products/mistercade-v2-kit-mister-fpga-jamma-arcade-kit">
						Mistercade V2
					</a>
					. MiSTercade is the original JAMMA extension for MiSTer FPGA.
				</p>
			),
		},
		{
			name: 'Open Core0',
			configName: 'OpenCore0',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Open_Core0',
			image: '/img/boards/OpenCore0.jpg',
			category: 'official',
			desc: () => (
				<p>
					Open source stickless controller designed by {' '}
					<a href="https://github.com/TheTrainGoes">
						TheTrain
					</a>.
				</p>
			),
		},
		{
			name: 'Open Core0 WASD',
			configName: 'OpenCore0WASD',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Open_Core0%20WASD',
			image: '/img/boards/OpenCore0WASD.jpg',
			category: 'official',
			desc: () => (
				<p>
					Open source stickless WASD controller designed by {' '} 
					<a href="https://github.com/TheTrainGoes"> 
						TheTrain
					</a>.
				</p>
			),
		},
		{
			name: 'OSUMGP-RP2040',
			configName: 'OSUMGP-RP2040',
			pinout: null,
			website:
				'https://github.com/NickGuyver/OSUMGP-RP2040',
			image: '/img/boards/OSUMGP-RP2040.jpg',
			category: 'open',
			desc: () => (
				<p>
					OSUMGP-RP2040: Open Source Universal Modern Game Pad - RP2040 Edition by
					<a href="https://github.com/NickGuyver/OSUMGP-RP2040"> 
						NickGuyver
					</a>.
				</p>
			),
		},
		{
			name: 'Pico Fighting Board',
			configName: 'PicoFightingBoard',
			pinout: null,
			website: 'https://github.com/FeralAI/PicoFightingBoard',
			image: '/img/boards/PicoFightingBoard.jpg',
			category: 'open',
			desc: () => (
				<p>
					Arcade encoder board designed by {' '}
					<a href="https://github.com/FeralAI">FeralAI</a> using a Raspberry Pi
					Pico or pin-equivalent RP2040 board.
				</p>
			),
		},
		{
			name: 'PXP-Gamepad',
			configName: 'PXPGamepad',
			pinout: null,
			website: 'https://github.com/MegaBitmap/PXP-Gamepad',
			image: '/img/boards/PXPGamepad.png',
			category: 'open',
			desc: () => (
				<p>
					DIY universal controller pocket gamepad by {' '}
					<a href="https://github.com/MegaBitmap/PXP-Gamepad">MegaBitmap</a> using
					an RP2040-Zero MCU soldered onto a custom PCB.
				</p>
			),
		},
		{
			name: 'Reflex Encode v1.2',
			configName: 'ReflexEncodeV1.2',
			pinout: null,
			website: 'https://github.com/misteraddons/ReflexFightingBoard',
			image: '/img/boards/ReflexEncode_v1.2.jpg',
			category: 'open',
			desc: () => (
				<p>
					Arcade encoder board designed and sold by{' '}
					<a href="https://github.com/misteraddons">MiSTerAddons</a> using an
					embedded RP2040 chip.
				</p>
			),
		},
		{
			name: 'Reflex Encode v2.0',
			configName: 'ReflexEncodeV2.0',
			pinout: null,
			website: 'https://github.com/misteraddons/ReflexFightingBoard',
			image: '/img/boards/ReflexEncode_v2.0.jpg',
			category: 'open',
			desc: () => (
				<p>
					Arcade encoder board designed and sold by {' '}
					<a href="https://github.com/misteraddons">MiSTerAddons</a> using an
					embedded RP2040 chip.
				</p>
			),
		},
		{
			name: 'Reflex CTRL Genesis 6',
			configName: 'ReflexCtrlGenesis6',
			pinout: null,
			website: 'https://github.com/misteraddons/Reflex-CTRL',
			image: '/img/boards/ReflexCTRLGenesis6.png',
			category: 'open',
			desc: () => (
				<p>
					Reflex Board Open source PCB for Sega Genesis 6 button Controller replacement PCBs
					designed and sold by{' '}
					<a href="https://github.com/misteraddons">MiSTerAddons</a> using an
					embedded RP2040 chip.
				</p>
			),
		},
		{
			name: 'Reflex CTRL NES',
			configName: 'ReflexCtrlNES',
			pinout: null,
			website: 'https://github.com/misteraddons/Reflex-CTRL',
			image: '/img/boards/ReflexCTRLNES.png',
			category: 'open',
			desc: () => (
				<p>
					Reflex Board Open source PCB for NES Controller replacement PCBs
					designed and sold by{' '}
					<a href="https://github.com/misteraddons">MiSTerAddons</a> using an
					embedded RP2040 chip.
				</p>
			),
		},
		{
			name: 'Reflex CTRL SNES',
			configName: 'ReflexCtrlSNES',
			pinout: null,
			website: 'https://github.com/misteraddons/Reflex-CTRL',
			image: '/img/boards/ReflexCTRLSNES.png',
			category: 'open',
			desc: () => (
				<p>
					Reflex Board Open source PCB for SNES Controller replacement PCBs
					designed and sold by{' '}
					<a href="https://github.com/misteraddons">MiSTerAddons</a> using an
					embedded RP2040 chip.
				</p>
			),
		},
		{
			name: 'Reflex CTRL Saturn',
			configName: 'ReflexCtrlSaturn',
			pinout: null,
			website: 'https://github.com/misteraddons/Reflex-CTRL',
			image: '/img/boards/ReflexCTRLSaturn.png',
			category: 'open',
			desc: () => (
				<p>
					Reflex Board Open source PCB for Sega Saturn Controller replacement PCBs
					designed and sold by{' '}
					<a href="https://github.com/misteraddons">MiSTerAddons</a> using an
					embedded RP2040 chip.
				</p>
			),
		},
		{
			name: 'Reflex CTRL Virtual Boy',
			configName: 'ReflexCtrlVB',
			pinout: null,
			website: 'https://github.com/misteraddons/Reflex-CTRL',
			image: '/img/boards/ReflexCTRLVB.png',
			category: 'open',
			desc: () => (
				<p>
					Reflex Board Open source PCB for Virtual Boy Controller replacement PCBs
					designed and sold by{' '}
					<a href="https://github.com/misteraddons">MiSTerAddons</a> using an
					embedded RP2040 chip.
				</p>
			),
		},
		{
			name: 'RP2040 Advanced Breakout',
			configName: 'RP2040AdvancedBreakoutBoard',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Boards/RP2040%20Advanced%20Breakout%20Board/RP2040%20Advanced%20Breakout%20Board',
			image: '/img/boards/RP2040AdvancedBreakoutBoard.jpg',
			category: 'official',
			desc: () => (
				<p>
					Arcade encoder board designed by {' '}
					<a href="https://github.com/TheTrainGoes">TheTrain</a> using an
					embedded RP2040, and is the official board of the GP2040-CE project.
				</p>
			),
		},
		{
			name: 'RP2040 Advanced Breakout (USB Passthrough)',
			configName: 'RP2040AdvancedBreakoutBoardUSBPassthrough',
			pinout: null,
			website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Boards/RP2040%20Advanced%20Breakout%20Board/RP2040%20Advanced%20Breakout%20Board%20-%20Passthrough',
			image: '/img/boards/RP2040AdvancedBreakoutBoardUSBPassthrough.jpg',
			category: 'official',
			desc: () => 
				<p>
					Official USB Passthrough Board of the Open Stick project.  Updated version of 
					the RP2040 Advanced Breakout Board with USB passthrough included on the board.
				</p>,
		},
		{
			name: 'RP2040 Mini Breakout Board',
			configName: 'RP2040MiniBreakoutBoard',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Boards/RP2040%20Mini%20Breakout%20Board/RP2040%20Mini%20Breakout%20Board',
			image: '/img/boards/RP2040MiniBreakoutBoard.jpg',
			category: 'open',
			desc: () => (
				<p>
					A reduced-footprint spin off of the RP2040 Advanced Breakout Board designed by {' '}
					<a href="https://github.com/TheTrainGoes">
						TheTrain
					</a>.
				</p>
			),
		},
		{
			name: 'ScrubTier BentoBox',
			configName: 'BentoBox',
			pinout: null,
			website:
				'https://github.com/OpenStickCommunity/GP2040-CE/tree/main/configs/BentoBox',
			image: '/img/boards/BentoBox.jpg',
			category: 'closed',
			desc: () => (
				<p>
					Configuration for the{' '}
					<a href="https://https://scrubtier.co.uk/">
						ScrubTier BentoBox v1 and v2 as well as the GGEZStick Keebfighters
					</a>
					.
				</p>
			),
		},
		{
			name: 'SGF Devices',
			configName: 'SGFDevices',
			pinout: null,
			website: 'https://sgfdevices.com/collections/controllers',
			image: '/img/boards/SGFFaust.jpg',
			category: 'closed',
			desc: () => (
				<p>
					The SGF stickless controllers are inspired by the open-source
					flatbox rev4 design by jfedor.
				</p>
			),
		},
		{
			name: 'Stress',
			configName: 'Stress',
			pinout: null,
			website: 'https://github.com/GroooveBob/Stress',
			image: '/img/boards/Stress.jpg',
			category: 'open',
			desc: () => (
				<p>
					A small and portable PCB-as-a-controller designed by{' '}
					<a href="https://github.com/GroooveBob">GroooveBob</a> using the
					Waveshare RP-2040-Zero.
				</p>
			),
		},
		{
			name: 'Zero Rhythm',
			configName: 'ZeroRhythm',
			pinout: null,
			website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Zero%20Rhythm',
			image: '/img/boards/Zero_Rhythm.jpg',
			category: 'official',
			desc: () => (
				<p>
					The Zero Rhythm is a controller for the Theatrhythm game on the Nintendo Switch.{' '}
					 It allows you to play rhythm as well as dual stick games in a double WASD layout.
				</p>
			),
		},
	],
};

export default boards;
