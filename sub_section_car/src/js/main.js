import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';






window.addEventListener('load', function () {
  init();
});



function init() {

 

  //renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha : true,
  });

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );



  //scene
  const scene = new THREE.Scene();







  //camera
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500, );

  camera.position.set( 5,0,15 );







  //OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

  controls.autoRotate = true;

  controls.autoRotateSpeed = 3;






  






  //directionalLight
  // White directional light at half intensity shining from the top.
  const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  directionalLight.position.set(1, 1, 3);
  scene.add( directionalLight );


  //AmbientLight
  const light = new THREE.AmbientLight( 0x404040 ); // soft white light
  light.position.set(-5, -5, -5);
  scene.add( light );









  //반응형
  render();

  function render() {
    renderer.render(scene, camera);

    controls.update();

    requestAnimationFrame(render);}

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', handleResize);



}