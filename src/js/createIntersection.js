function createIntersection(scene)
{
    //road
    var roadgeometry = new  THREE.BoxGeometry(1000, 2, 1000);
    var roadmaterial = new THREE.MeshBasicMaterial({color: 0x262626});
    var roadmesh = new THREE.Mesh(roadgeometry, roadmaterial);
    roadmesh.position.y = -1;      
    scene.add(roadmesh);

    // curbs
    var curbGeometry = new THREE.BoxGeometry(curbSize, curbHieght, curbSize);
    var curbmaterial = new THREE.MeshBasicMaterial({color: 0x808080});

    for(var i = 0; i<4 ; i++)
    {
        var curbmesh = new THREE.Mesh(curbGeometry, curbmaterial);
        curbmesh.position.x = (i%2? 1 : -1) *(curbSize+roadOffset)/2; 
        curbmesh.position.z = (i%3? 1 : -1) *(curbSize+roadOffset)/2; 
            
        scene.add(curbmesh);
    }

}