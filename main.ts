let weatherbit_pressure = 0
let weatherbit_humidity = 0
let weatherbit_temperature = 0
let microbit_lightlevel = 0
let microbit_temperature = 0
// serial.writeLine("microbit_temperature, microbit_lightlevel")
serial.writeLine("microbit_temperature, microbit_lightlevel, weatherbit_temperature, weatherbit_humidity, weatherbit_pressure")
weatherbit.startWeatherMonitoring()

basic.forever(function () {
    microbit_temperature = input.temperature()
    microbit_lightlevel = input.lightLevel()
    weatherbit_temperature = weatherbit.temperature()
    weatherbit_humidity = weatherbit.humidity()
    weatherbit_pressure = weatherbit.pressure()
    // serial.writeNumbers([microbit_temperature, microbit_lightlevel])
    serial.writeNumbers([microbit_temperature, microbit_lightlevel, weatherbit_temperature, weatherbit_humidity, weatherbit_pressure])
    basic.pause(10000)
})
