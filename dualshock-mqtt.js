var dualshock = require('dualshock-controller')
  , controller
  , mqtt = require('mqtt')


module.exports = function (type, broker, pubTopic, auth) {
  // to use dualshock4, type = "dualshock4-generic-driver"
  // to use dualshock3, type = 'dualShock3'
  var topic = pubTopic
  controller = dualshock({ config : type
                         , accelerometerSmoothing : true
                         , analogStickSmoothing : false
                         })
  
  client = mqtt.connect(broker)
  client.on('connect', function () {
    console.log('connected to', broker)
  })

  controller.on('error', function(data) {
    //...someStuffDidNotWork()
  })

  //add event handlers:
  controller.on('left:move', function(data) {
    console.log('sending',data)
    data.name = 'left-axis'
    client.publish(topic, JSON.stringify(data))
  })

  controller.on('right:move', function(data) {
    console.log('sending',data)
    data.name = 'right-axis'
    client.publish(topic, JSON.stringify(data))
  })

  controller.on('l1:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'l1-press'}))
  })

  controller.on('l2:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'l2-press'}))
  })

  controller.on('r1:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'r1-press'}))
  })

  controller.on('r2:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'r2-press'}))
  })

  controller.on('triangle:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'triangle-press'}))
  })

  controller.on('x:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'x-press'}))
  })

  controller.on('circle:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'circle-press'}))
  })

  controller.on('square:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'square-press'}))
  })
  controller.on('square:release', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'square-release'}))
  })

  controller.on('rightLeft:motion', function (data) {
    console.log(data)
  })

  //forward-back movement
  controller.on('forwardBackward:motion', function (data) {
     console.log(data)
  })
  //up-down movement
  controller.on('upDown:motion', function (data) {
     console.log(data)
  })

  controller.on('dpadUp:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'dpadUp-press'}))
  })

  controller.on('dpadDown:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'dpadDown-press'}))
  })

  controller.on('dpadLeft:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'dpadLeft-press'}))
  })

  controller.on('dpadRight:press', function (data) {
    console.log(data)
    client.publish(topic, JSON.stringify({'name':'dpadRight-press'}))
  })

  return controller
}
