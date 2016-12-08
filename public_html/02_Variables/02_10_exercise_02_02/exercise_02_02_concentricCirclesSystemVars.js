/*************************
 * Foundations in Coding *       
 *************************
 *  IACT ** www.iact.ie  *
 *************************/


/**************************************
 * Concentric Circles
 ***************************************
 
 
 Draws 6 concentric circles. Variables are 
 used to store the center position, rather 
 than 'hard coding' the values as args.
 The positions of the circles 
 can be changed more easily by 
 changing the values of the variables.
 
 Liam O'Sullivan - lmosulli@tcd.ie
 
 */

var xPosition; //variable for x coordinate of circles, as they are concentric
var yPosition; //variable for y coordinate


function setup() {
    createCanvas(400, 400);
    xPosition = width/2;
    xPosition = height/2;
    background(0);
    fill(0);
    stroke(255);
    ellipse(xPosition, yPosition, width, width);
    ellipse(xPosition, yPosition, 3/4*width, 3/4*width);
    ellipse(xPosition, yPosition, 2/4*width, 2/4*width);
    ellipse(xPosition, yPosition, 1/4*width, 1/4*width);
}