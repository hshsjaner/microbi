let a = 0
basic.forever(function () {
    if (input.soundLevel() > 100) {
        a += 1
        if (a > 3) {
            a = 0
        }
        if (a == 0) {
            basic.showIcon(IconNames.Heart)
        } else if (a == 1) {
            basic.showIcon(IconNames.Happy)
        } else if (a == 2) {
            basic.showIcon(IconNames.EigthNote)
        } else {
            basic.clearScreen()
        }
    }
})
