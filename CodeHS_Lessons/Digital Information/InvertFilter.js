// Constants for the image
var IMAGE_URL = "https://codehs.com/static/img/zebra.jpg";
var IMAGE_WIDTH = 350;
var IMAGE_HEIGHT = 250;
var IMAGE_X = getWidth() / 2 - IMAGE_WIDTH / 2;
var IMAGE_Y = getHeight() / 2 - IMAGE_HEIGHT / 2;

// Constants for the pixel array
var RED = 0;
var GREEN = 1;
var BLUE = 2;

// Constants for the pixel filter
var MAX_COLOR_VALUE = 255;

// We need to wait for the image to load before modifying it
var IMAGE_LOAD_WAIT_TIME = 50;

// Inverts the colors of each pixel in the WebImage image
function invert(image) {
    for(var x = 0; x < image.getWidth(); x++) {
        for (var y = 0; y < image.getHeight(); y++) {
            // Get the current pixel
            var pixel = image.getPixel(x, y);
            
            // Modify the current pixel
            pixel = invertPixel(pixel);
            
            // Update the image with the modified pixel
            image.setRed(x, y, pixel[RED]);
            image.setGreen(x, y, pixel[GREEN]);
            image.setBlue(x, y, pixel[BLUE]);
        }
    }
}

// Given a pixel array with 3 values [R, G, B]
// Modifies the pixel array such that each value is inverted ie:
// R = 255 - R
// G = 255 - G
// B = 255 - B
// Returns the modified pixel array
function invertPixel(pixel) {
    // Get the RGB values from this pixel array
    var red = pixel[RED];
    var green = pixel[GREEN];
    var blue = pixel[BLUE];
    
    // Modify the pixel array so that each value is inverted
    pixel[RED] = MAX_COLOR_VALUE - red;
    pixel[GREEN] = MAX_COLOR_VALUE - green;
    pixel[BLUE] = MAX_COLOR_VALUE - blue;
    
    // Return the modified pixel array
    return pixel;
}

function start() {
    // Set up the image
    var image = new WebImage(IMAGE_URL);
    image.setSize(IMAGE_WIDTH, IMAGE_HEIGHT);
    image.setPosition(IMAGE_X, IMAGE_Y);
    
    // Add it to the canvas
    add(image);
    
    // Wait for it to load before applying the filter
    setTimeout(function(){
        invert(image);
    }, IMAGE_LOAD_WAIT_TIME);
}