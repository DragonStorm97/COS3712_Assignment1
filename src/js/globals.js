
var vehicleMeshArray = [];

// curbs & road
const curbSize = 250;
const curbHieght = 0.5;
const roadOffset = 10;



// a helper function to ease the calculation of rotating a mesh around a point
function rotateAboutPoint(obj, point, axis, theta)
{
    obj.position.sub(point); // remove the offset
    obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
    obj.position.add(point); // re-add the offset
    obj.rotateOnAxis(axis, theta); // rotate the OBJECT
}