function addVehicles(scene)
{

    // function called on loading a new mesh
    // this calculates the vehicles position and sets a default material
    function onLoadNewMesh (eventData)
    {
            var mesh = eventData.children[0];
            
            const numCars = vehicleMeshArray.length+1;
            mesh.position.x = roadOffset / 4;
            mesh.position.z = - roadOffset / 2;

            rotateAboutPoint(mesh, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0),numCars * Math.PI/2);

            mesh.material  = new THREE.MeshBasicMaterial({color: 0x66ff66});

            vehicleMeshArray.push(mesh);
            scene.add(mesh);
    };

    var loader = new THREE.OBJLoader();
    loader.load("../assets/car.obj",onLoadNewMesh);
    loader.load("../assets/truck.obj",onLoadNewMesh);
    loader.load("../assets/pickupTruck.obj",onLoadNewMesh);
    loader.load("../assets/bus.obj",onLoadNewMesh);
}