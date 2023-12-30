<p align="center">
  <a href="https://gp2040-ce.info">
    <img alt="GP2040-CE" src="https://raw.githubusercontent.com/OpenStickCommunity/Site/main/docs/assets/images/gp2040-ce-logo.png" />
  </a>
</p>

<p align="center">
  Multi-Platform Gamepad Firmware for RP2040
</p>

<p align="center">
  Latency testing methodology and results
</p>

## Summary

<p>
  This section provides a transparent overview of how we do latency testing for the GP2040-CE project.  It includes information about the hardware setup we use as well has how we calculate our results and copies of those results.  
</p>

<p>
  We encourage others to test via these methods and get in touch if they find major differences in results.
</p>

## Setup

<p>
  The setup used for testing is comprised of an Sunfounder Arduino MEGA 2560 with a generic USB Host Shield addon and an RP2040 Advanced Breakout Board v5.4E Passthrough Edition.  The RP2040 Advanced Breakout Board v5.4E Passthrough Edition is connected to the USB Host Shield addon with a 3.3' Ugreen USB-C to USB-A cable.  The USB Host Shield addon is connected to the Ardunio MEGA 2560 directly via available header stack.  The Arduino MEGA 2560 is connected to an M1 MacBook Air with a 3' Ugreen USB-C to USB-B cable.  A 1' female to female Depont wire is connected between pin 7 on the USB Host Shield and pin 19 on the RP2040 Advanced Breakout Board v5.4E Passthrough Edition's 20 pin header which is the `up` direction by default.  No other wires or cables are needed.
</p>

<p>
  Serial monitoring can be done via a number of programs.  I use `CoolTerm` for serial monitoring on the M1 MacBook Air because it allows me to copy and past result sets easily.
</p>

<p>
  Links to everything mentioned above can be found below:
</p>

* Arduino MEGA 2560 [Link](https://www.amazon.com/s?k=arduino+mega+2560&crid=2J2XP0ONNYGL2&sprefix=arduino+mega+2560%2Caps%2C96&ref=nb_sb_noss_1)
* USB Host Shield [Link](https://www.amazon.com/s?k=arduino+host+shield&crid=3LKKHMBPUVXLS&sprefix=arduino+host+shield%2Caps%2C82&ref=nb_sb_noss_1)
* RP2040 Advanced Breakout Board v5.4E Passthrough Edition [Link](https://github.com/OpenStickCommunity/Hardware/tree/main/RP2040%20Advanced%20Breakout%20Board%20-%20Passthrough)
* USB-C to USB-A 3.3' cable [Link](https://a.co/d/2USECGQ)
* USB-C to USB-B 3' cable [Link](https://a.co/d/7vAX8nV)
* Female to female Dupont wire [Link](https://www.amazon.com/s?k=dupont+cable&crid=TZGT87HBYSIS&sprefix=dupont+cable%2Caps%2C138&ref=nb_sb_noss_1)

## Arduino Sketch


A copy of the optamized USB Lag sketch we use can be found [HERE](https://raw.githubusercontent.com/OpenStickCommunity/GP2040-CE/main/site/latency_testing/usblag_optimized.ino) in our latency_testing folder directly, or can be downloaded from FeralAI's original repo [HERE](https://github.com/FeralAI/usblag_optimized?tab=readme-ov-file).  We follow the methodology and setup outlined by inputlag.science which can be found [HERE](https://inputlag.science/controller/methodology). 


The changes in this optamized version of the USB Lag sketch are:
  * Tuned core input loop logic to reduce unnecessary overhead - Test results will be around ~0.1ms faster than the original sketch, and very close the results from the MiSTer Input Latency Tester [Link](https://github.com/misteraddons/inputlatency)
  * See test results immediately after test by pressing =


## Result collection methodology

<p>
  By default the optamized USB Lag sketch will run a series of 1,000 inputs and measure their latency.  We have found through testing that there can be very small variances in results when comparing mutiple 1,000 input tests together.  As such, we run the optamized USB Lag sketch 10 times in a row and average the averages of each 1,000 individual tests to come up with our average latency.  It is important to note that we still look at the overall highest latency input as our high number, and the lowest overall low latency input as our low number.  We do not average these two results.
</p>

<p>
  It is also important to note that these 10 runs are always conducted back-to-back.  We do not cherry pick good runs which could lead to a deflated and unrealistic overall average latency number.  
</p>
