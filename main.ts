let Volume = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    Volume = pins.map(
    input.soundLevel(),
    0,
    100,
    0,
    12
    )
    Volume = Math.round(Volume)
    if (Volume > 0) {
        for (let index = 0; index <= Volume; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(30)
        }
        strip.clear()
        strip.show()
    }
})
