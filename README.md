# water-level-indicator
ELET 3402 final project

## Prerequisites
* Arduino Uno x1
* Wingoneer Water Level Sensor x1

## Installing
1. Download and install Node.js (https://nodejs.org/en/download/)
2. Downloand and install the Arduino IDE (https://www.elegoo.com/download/)

## Schematic
![Image of Schematic](https://github.com/neville-li/water-level-indicator/blob/master/markdown-images/schematic.png?raw=true)

## Getting Started
1. Open Arduino IDE. In the menu, click Tools>Port, and select the port that is connected to the computer.
2. Go to File>Examples>Frimata>StandardFirmata, and upload StandardFirmata to the Arduino.
2. Get a copy of the project from (https://github.com/neville-li/water-level-indicator). 
3. Open Powershell/CMD(for Windows) or Terminal(for Linux), and go to the root folder of the project.
4. Inside your terminal/Powershell, type "npm install express ejs johnny-five" (without quotes) to install all the modules needed.
5. Run "node app.js" (without quotes) to start the program.
6. Open a browser, go to address bar, then type "localhost:3000" (without quotes). Then hit enter.
7. At this time, you should see the data that is being sent back to the arduino on the website.

## Video Demo

[![Thumbnail](https://github.com/neville-li/water-level-indicator/blob/master/markdown-images/youtube-thumbnail.jpg?raw=true)](https://www.youtube.com/watch?v=ppatY1Qm7Tw)



