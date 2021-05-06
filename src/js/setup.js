
// create a scene
var scene = new THREE.Scene();

// create a camera
var fov = 75;
var aspectRatio = window.innerWidth/window.innerHeight;
var nearPlane = 0.1;
var farPlace = 1000;
var camera = new THREE.PerspectiveCamera(fov,aspectRatio,nearPlane,farPlace);
camera.position.set(0,10,5);

function changeZoom(newVal)
{
    camera.position.z=newVal;
}
var zoomSlider = document.getElementById("zoomSlider");
var sliderDisplay = document.getElementById("sliderDisplay");

zoomSlider.oninput = function() 
{
    changeZoom(this.value);
    sliderDisplay.innerHTML = this.value;
}
// create the renderer
var antiAliasing = true;
var renderer = new THREE.WebGLRenderer({antialias: antiAliasing});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);

// renderer DOM element
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', ()=> 
    {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
    }
);
createIntersection(scene);
AddTrafficLights(scene);
addVehicles(scene);
createBuildings(scene);

var render = function()
{
    requestAnimationFrame(render);
    
    // can do per-frame things here
    orbitControl.update()
    renderer.render(scene, camera);
}

render();


document.getElementById("AnimateButton").onclick = doAnimate;

