---
title: Disable Raspberry pi 4 wifi power management
date: "2020-12-22T03:30:13.175Z"
template: "post"
draft: false
slug: "rpi-4-wifi-power-management"
category: "raspberry-pi"
tags:
  - "raspberry-pi"
  - "tech"
description: "Sometimes raspberry pi wifi was down. Due power saving config when idle."
socialImage: "/media/rpi-logo.png"
---

My home server running in Raspberry pi and it's connected to internet via Wi-Fi. I noticed sometimes i'm unable to access it and i need to switch it off and on. Yes, that's the only way to bring it up.

Finally figured out the issue. It happened due to Wi-Fi power saving configuration. You can run this command in Rpi terminal to check the status ```sudo iw wlan0 get power_save``` 

Here is the command to turn it off. ```sudo iw wlan0 set power_save off```

To make this permanent, add the following line to ```/etc/rc.local``` (before Exit 0)
```/sbin/iw dev wlan0 set power_save off```

> Note: Tested in my Rpi 4 with latest Raspberry Pi OS Lite