
function createBuildings(scene)
{
    function createBuilding(loc)
    {
        // Add main building
        var buildingHeight = (vehicleMeshArray.length*Math.random() + 3)*10;
        var buildingSize = curbSize/4;
        loc.y += buildingHeight/2;

        {
            var geometry = new THREE.BoxGeometry(buildingSize, buildingHeight, buildingSize);
            var material = new THREE.MeshBasicMaterial({color: 0xFFCC00});
            var mesh = new THREE.Mesh(geometry, material);
            
            mesh.position.add(loc);
            scene.add(mesh);
        }

        // window dimensions
        var windowWidth = buildingSize/6;
        var windowHeight = buildingHeight/5;
        var windowDepth = 1;
        // Add Windows
        for (var side = 0; side < 5; side++)
        {
            var bottomLeftLoc = new THREE.Vector3(0,0,0);
            bottomLeftLoc.x = loc.x+(buildingSize)/2- windowWidth/2 - windowWidth/4; 
            bottomLeftLoc.y = loc.y-(buildingHeight)/2 + windowHeight; 
            bottomLeftLoc.z = loc.z-(buildingSize)/2; + windowDepth
            var windowLoc = new THREE.Vector3(0,0,0);
            windowLoc.z = bottomLeftLoc.z;

            for (var sidey = 0; sidey < 3; sidey++)
            {
                // height
                windowLoc.y = bottomLeftLoc.y + (sidey*(windowHeight+windowHeight/2)); 

                //width
                for (var sidex = 0; sidex < 4; sidex++)
                {
                    windowLoc.x = bottomLeftLoc.x - (sidex*(windowWidth+windowWidth/2)); 

                    var geometry = new THREE.BoxGeometry(windowWidth, windowHeight, windowDepth);
                    var material = new THREE.MeshBasicMaterial({color: 0x00bfff});
                    var mesh = new THREE.Mesh(geometry, material);                            
                    mesh.position.add(windowLoc);

                    rotateAboutPoint(mesh, loc, new THREE.Vector3(0,1,0),side * Math.PI/2);

                    scene.add(mesh);
                }   
            }   
        }


    }

    // each of the curbs
    for(var i = 0; i<4 ; i++)
    {
        var curbCentre = new THREE.Vector3((i%2 ? 1 : -1) * curbSize/2, 0.25, (i%3 ? 1 : -1) * curbSize/2);

        // 9 buildings on each of the curbs 
        for(var x = -1 ; x < 2 ; x++)
        {
            for(var z = -1 ; z < 2 ; z++)
            {
                createBuilding(new THREE.Vector3(curbCentre.x + (x * curbSize/3), 0.2, curbCentre.z + (z * curbSize/3)));
            }
        }
    }
}