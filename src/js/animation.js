
// create a function that the button will call to animate a random child of the scene
function doAnimate()
{
    // first see if there are any left to animate
    if(vehicleMeshArray.length == 0)
    {
        alert("waiting for vehicles to circle back");
        return;
    }

    // get random mesh (testing)
    var rndindex =vehicleMeshArray.length * Math.random() | 0;
    var rndMesh = vehicleMeshArray[rndindex];
    vehicleMeshArray.splice(rndindex, 1);

    // get vehicle direction
    var matrix = new THREE.Matrix4();
    matrix = matrix.extractRotation( rndMesh.matrix );
    var direction = new THREE.Vector3( 0, 0, 1 );
    direction = direction.applyMatrix4( matrix );

    var dir2 = Object.create(direction);
    // create target positions
    var moveDistance = curbSize+roadOffset + roadOffset/2;
    var origPos = Object.create(rndMesh.position);
    var endPos1 = Object.create(origPos);
    endPos1.add(direction.multiplyScalar(moveDistance));
    
    var endPos2 = Object.create(endPos1);
    direction.applyAxisAngle(new THREE.Vector3(0,1,0) , -Math.PI/2);
    endPos2.add(direction);

    var endPos3 = Object.create(endPos2);
    direction.applyAxisAngle(new THREE.Vector3(0,1,0) , -Math.PI/2);
    endPos3.add(direction);
    endPos3.add(direction);

    var endPos4 = Object.create(endPos3);
    direction.applyAxisAngle(new THREE.Vector3(0,1,0) , -Math.PI/2);
    endPos4.add(direction);

    var curRot = Object.create(rndMesh.rotation);
    
    var turn1 = rndMesh.rotation.y;
    turn1-=Math.PI/2;
    var turn2 = turn1;
    turn2-=Math.PI/2;
    var turn3 = turn2;
    turn3-=Math.PI/2;
    var turn4 = turn3;
    turn4-=Math.PI/2;

    var t1 = new TimelineMax({paused: true});  
    t1.eventCallback("onComplete",(vehicleMeshArray, rndMesh) => {vehicleMeshArray.push(rndMesh);},[vehicleMeshArray,rndMesh])
    
    t1.to(rndMesh.position, 10, {x: endPos1.x});
    t1.to(rndMesh.position, 10, {z: endPos1.z},"=-10");

    t1.to(rndMesh.rotation, 1, {y: turn1});
    t1.to(rndMesh.position, 10, {x: endPos2.x});
    t1.to(rndMesh.position, 10, {z: endPos2.z},"=-10");

    t1.to(rndMesh.rotation, 1, {y: turn2});
    t1.to(rndMesh.position, 20, {x: endPos3.x});
    t1.to(rndMesh.position, 20, {z: endPos3.z},"=-20");

    t1.to(rndMesh.rotation, 1, {y: turn3});
    t1.to(rndMesh.position, 10, {x: endPos4.x});
    t1.to(rndMesh.position, 10, {z: endPos4.z},"=-10");

    t1.to(rndMesh.rotation, 1, {y: turn4});
    t1.to(rndMesh.position, 10, {x: origPos.x});
    t1.to(rndMesh.position, 10, {z: origPos.z},"=-10");

    t1.play();
}