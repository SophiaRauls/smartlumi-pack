let strip = neopixel.create(DigitalPin.P0, 128, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index < 9; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        for (let index2 = 0; index2 <= 63; index2++) {
            strip.setPixelColor(64 + index2, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(500)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(200)
        basic.showString("Stop")
    }
})
