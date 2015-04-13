Dualshock-MQTT
==============

Dualshock-MQTT is a Node.js module that send command from a dualshock controller to
a MQTT broker.

Install
-------

Install from gitlab

```
$ git clone git@voyager.orientsoft.cn:INOC603/dualshock-mqtt.git
$ cd dualshock-mqtt
$ npm i
```

Usage
-----

```
var dualshockMqtt = require('dualshock-mqtt')
  , controller = dualshockMqtt( CONTROLLER_TYPE
                              , MQTT_BROKER
                              , TOPIC)
```

Command Specifications
----------------------