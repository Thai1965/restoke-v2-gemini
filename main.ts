const PCF8563_ADDRESS = 0x51

function readRTCRegister(reg: number): number {
    pins.i2cWriteNumber(
        PCF8563_ADDRESS,
        reg,
        NumberFormat.UInt8BE,
        true
    )

    return pins.i2cReadNumber(
        PCF8563_ADDRESS,
        NumberFormat.UInt8BE,
        false
    )
}

function bcdToDecimal(value: number): number {
    return ((value >> 4) * 10) + (value & 0x0F)
}

function twoDigits(value: number): string {
    if (value < 10) {
        return "0" + value
    }

    return "" + value
}

function getSeconds(): number {
    return bcdToDecimal(
        readRTCRegister(0x02) & 0x7F
    )
}

function getMinutes(): number {
    return bcdToDecimal(
        readRTCRegister(0x03) & 0x7F
    )
}

function getHours(): number {
    return bcdToDecimal(
        readRTCRegister(0x04) & 0x3F
    )
}

function getDay(): number {
    return bcdToDecimal(
        readRTCRegister(0x05) & 0x3F
    )
}

function getMonth(): number {
    return bcdToDecimal(
        readRTCRegister(0x07) & 0x1F
    )
}

function getYear(): number {
    return 2000 + bcdToDecimal(
        readRTCRegister(0x08)
    )
}

function getDateString(): string {
    return twoDigits(getDay()) + "/" +
        twoDigits(getMonth()) + "/" +
        getYear()
}

function getTimeString(): string {
    return twoDigits(getHours()) + ":" +
        twoDigits(getMinutes()) + ":" +
        twoDigits(getSeconds())
}

basic.forever(function () {

    basic.showString(
        getDateString() + " " +
        getTimeString()
    )

    basic.pause(1000)
})