let temp = 0
input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    basic.showNumber(temp)
    if (temp > 38) {
        basic.pause(100)
        for (let index = 0; index < 3; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        basic.pause(100)
        for (let index = 0; index < 3; index++) {
            music.playTone(294, music.beat(BeatFraction.Whole))
        }
        basic.pause(100)
        for (let index = 0; index < 3; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen()
        }
        basic.pause(1000)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(2000)
            basic.clearScreen()
        }
        basic.pause(1000)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen()
        }
        basic.pause(1000)
    } else {
        basic.showNumber(temp)
    }
})
