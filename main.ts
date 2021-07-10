input.onButtonPressed(Button.A, function () {
    range = strip.range(0, 4)
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
    while (true) {
        for (let index = 0; index < 4; index++) {
            range.shift(-1)
            strip.show()
            basic.pause(200)
        }
        range.showColor(neopixel.colors(NeoPixelColors.Orange))
        range.show()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    range2 = strip.range(7, 4)
    range2.showColor(neopixel.colors(NeoPixelColors.Orange))
    while (true) {
        for (let index = 0; index < 4; index++) {
            range2.shift(1)
            range2.show()
            basic.pause(200)
        }
        range2.showColor(neopixel.colors(NeoPixelColors.Orange))
        range2.show()
        basic.pause(500)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    range3 = strip.range(4, 3)
    range4 = strip.range(11, 3)
    range3.showColor(neopixel.colors(NeoPixelColors.White))
    range4.showColor(neopixel.colors(NeoPixelColors.White))
    range3.show()
    range4.show()
})
let range4: neopixel.Strip = null
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 14, NeoPixelMode.RGB)
strip.setBrightness(40)
strip.show()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
