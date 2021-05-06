function AddTrafficLights(scene)
{
    var poleGeometry = new THREE.CylinderGeometry( 0.125, 0.125, 5, 32 );
    var polematerial = new THREE.MeshBasicMaterial({color: 0xFFCC00});
    var geometry = new THREE.BoxGeometry(0.75, 1, 0.75);
    var material = new THREE.MeshBasicMaterial({color: 0xFFCC00});
    for(var i = 0; i<4 ; i++)
    {
        var mesh = new THREE.Mesh(geometry, material);
        var polemesh = new THREE.Mesh(poleGeometry, material);
        var xpos = (i%2 ? 1 : -1) * roadOffset/2; 
        var zpos = (i%3 ? 1 : -1) * roadOffset/2; 

        mesh.position.x = xpos;
        mesh.position.z = zpos;
        mesh.position.y = 4;

        polemesh.position.x = xpos;
        polemesh.position.z = zpos;
        polemesh.position.y = 2;

        scene.add(mesh);    
        scene.add(polemesh);
    }
}