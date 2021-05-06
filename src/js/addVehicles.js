function addVehicles(scene)
{

    // function called on loading a new mesh
    // this calculates the vehicles position and sets a default material
	function positionAndAddMesh(mesh,meshcenter)
	{
		const numCars = vehicleMeshArray.length+1;
		mesh.position.x = roadOffset / 4;
		mesh.position.z = - roadOffset / 2;
		mesh.position.sub(meshcenter);
		rotateAboutPoint(mesh, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0),numCars * Math.PI/2);


		vehicleMeshArray.push(mesh);
		scene.add(mesh);
	}
	
    function onLoadNewMesh (eventData)
    {
        console.log(eventData);
		var mesh = eventData.children[0];

        // we crudely get the type of vehicle and set the colour accordingly
        if(eventData.materialLibraries[0].startsWith("car"))
        {
            mesh.material = new THREE.MeshBasicMaterial({color: 0x66ff66});
        }
        else if (eventData.materialLibraries[0].startsWith("bus"))
        {
            mesh.material = new THREE.MeshBasicMaterial({color: 0xff9966});
        }
        else if (eventData.materialLibraries[0].startsWith("truck"))
        {
            mesh.material = new THREE.MeshBasicMaterial({color: 0x3385ff});
        }
        // if it isn't one of the predifined ones, then we generate a random colour
        else
        {
            mesh.material  = new THREE.MeshBasicMaterial({color: `rgb(${[1,2,3].map(x=>Math.random()*256|0)})`});
        }

		positionAndAddMesh(mesh, new THREE.Vector3(0,0,0));
    };
	// if the project isn't correctly hosted, it won't be able to access the local assets
    // here we catch that and manually create the 3 requested vehicles out of blocks
	switch(window.location.protocol) 
	{
		case 'http:':
		case 'https:':
		{
			var loader = new THREE.OBJLoader();
			loader.load("../assets/car.obj",onLoadNewMesh);
			loader.load("../assets/truck.obj",onLoadNewMesh);
			loader.load("../assets/pickupTruck.obj",onLoadNewMesh);
			loader.load("../assets/bus.obj",onLoadNewMesh);
	   }
	   break;
	   case 'file:':
	   {
			// if we couldn't access the assets (e.g. index.html was opened directly without hosting)
			// create the vehicles with generated meshes
			
			// create car
			{
				var geometry = new THREE.BoxGeometry(2, 2, 3.5);
				var material = new THREE.MeshBasicMaterial({color: 0x66ff66});
				var mesh = new THREE.Mesh(geometry, material);
				positionAndAddMesh(mesh, new THREE.Vector3(0,-1,1.75));
			}
			// create bus
			{
				var geometry = new THREE.BoxGeometry(3, 3, 7);
				var material = new THREE.MeshBasicMaterial({color: 0xff9966});
				var mesh = new THREE.Mesh(geometry, material);
				positionAndAddMesh(mesh, new THREE.Vector3(0,-1.5,3.5));
			}
			// create truck
			{
				var geometry = new THREE.BoxGeometry(3.5, 3.5, 12);
				var material = new THREE.MeshBasicMaterial({color: 0x3385ff});
				var mesh = new THREE.Mesh(geometry, material);
				positionAndAddMesh(mesh, new THREE.Vector3(0,-1.75,6));
			}
		}	
		break;
		default: 
		 //some other protocol
	}

}