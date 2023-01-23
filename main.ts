input.onButtonPressed(Button.A, function () {
	
})
let tellen = 0
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(tellen)
    tellen += 1
})
