# COS3712_Assignment1

## Project Structure
* libs
	* (libraries as described below)
* src
	* css
		* main.css (stylesheet file)
	* js
		* setup.js (sets up WebGL and the scene and calls the relavant functions to add meshes to the scene)
		* createIntersection.js (creates the roads and pavement)
		* addTrafficLights.js (builds and then adds the traffic lights to the intersection)
		* addVehicles.js (adds the vehicles to the intersection, adding the vehicle meshes to an array to be used by the animation button)
		* animation.js (handles the button press and animating of a random vehicle)
		* createBuildings.js (builds and then adds the buildings to the scene)
	* index.html (page definition)

## UI:
This project has a heading (COST3712 Assignment 1 - Johnathan Jacobs - 61009172)  
A button that will animate a random car.  
A slider, used to control camera zoom. (z distance change only as FoV change isn't as pleasent in the context)  

## Environment
* light source
* Intersection (road + curbsides)
* Vehicles at the intersection
	* Car
	* Bus
	* Truck 
* Traffic lights (with working lights)
* Buildings

## Libraries Used
All libraries are included for ease of use.
* three.js 
* three.modules.js (to use the OrbitControls and OBJLoader three.js modules)
* OBJLoader.js (used to load vehicle assets)
* OrbitControls.js (for mouse pan, rotate, and zoom to aid usability)
* TweenMax.min.js (for animating with tweens)

## Assets
As the models for the car, bus and truck weren't specified, custom models were made.  
The Traffic lights are (simplisticly) procedurally generated.  
The buildings are (simplisticly) procedurally generated to match the assignment specification.  
* car model
* bus model
* truck model

# Assignment 1 Specification
NB. You need to submit code for this assignment. Place all your files that would be required to execute your project in a zip folder and upload on myunisa.  
In this project, you have to design and construct a 3D road intersection using WebGL.  
You can make use of WebGL libraries like three.js.   
On the road intersection there must 3 different modes of transport – a car, bus and truck.  
On each corner of the intersection, you need to add a traffic light.  
On one of the corners of the intersection there must be at least one building (rectangular block, with rectangular shaped windows – any colour).  
You can add as many buildings to the scene as your wish.  
Add a button to your project where if the button is pressed one of the modes of transport will move from a starting position at the intersection and will cross the intersection.  
Add sliders to your project that will allow the user to Zoom in/out to the centre of your viewing window.  
