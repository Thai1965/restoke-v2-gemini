// Initialize TFT Display
RBTFT18.init()


// Clear screen - replaces whole screen with a black rectangle
RBTFT18.clearScreen()

// Show white text with black background
RBTFT18.showString("I am your RB-TFT1.8!", 10, 20, 2, Color.White, Color.Black)
basic.pause(1000)

// Turn off display
RBTFT18.turnOff()
basic.pause(1000)

// Turn on display
RBTFT18.turnOn()
