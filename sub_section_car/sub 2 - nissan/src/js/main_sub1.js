import * as THREE from 'three';

import {GLTFLoader} from 'gltf';

import {OrbitControls} from 'orbit';





window.addEventListener('load', function () {
  init();
});



async function init() {

  const canvas = document.querySelector( "#canvas" );

  //renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha : true,
    canvas,
  });

  const rtWidth = 800;
  const rtHeight = 600;

  const renderTarget = new THREE.WebGLRenderTarget(rtWidth, rtHeight);

  renderer.setSize(rtWidth, rtHeight);


  renderer.shadowMap.enabled = true;//1. 그림자 사용

  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  renderer.outputEncoding = THREE.sRGBEncoding;

  // document.body.appendChild( renderer.domElement );








  //secen
  const scene = new THREE.Scene();
  









  //camera
  const camera = new THREE.PerspectiveCamera( 75, rtWidth / rtHeight, 1, 500, );

  camera.position.set( 9, 4, 12 );


  //CameraHelper
  // const helper = new THREE.CameraHelper( camera );
  // scene.add( helper );






  //progress-bar-container
  const progressBar = document.querySelector( '#progress-bar' );

  const progressBarContainer = document.querySelector( '#progress-bar-container' );

  const loadingManager = new THREE.LoadingManager();
  //LoadingManager() : THREE.js에서 제공되는 태그

  loadingManager.onProgress = ( url, loaded, total ) => {
    progressBar.value = ( loaded / total ) * 100; //현재진행률
  };

  loadingManager.onLoad = () => {
    //loadingManager가 모두 load 되면( = : 대입연산자 )
    progressBarContainer.style.display = 'none';
  };
  
  
  











  //object
  const gltfLoader = new GLTFLoader( loadingManager );

  const gltf = await gltfLoader.loadAsync('./src/models/nissan_300zx_z32/scene.gltf');

  const car = gltf.scene;

  car.position.set( 0, 0, 0 );

  car.castShadow = true;//2. object에 castShadow 넣기

  car.traverse( object => {
    if( object.isMesh ){ object.castShadow = true; }
  });//gltf을 사용할경우 해당 코드를 넣어야 그림자가 만들어짐

  car.scale.set( 1.5, 1.5, 1.5 );

  scene.add( car );








  //light
  //directionalLight
  // White directional light at half intensity shining from the top.
  const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 0.8 );

  //3. 조명에 그림자 만들기
  directionalLight1.castShadow = true;
  directionalLight1.shadow.mapSize.width = 1024;
  directionalLight1.shadow.mapSize.height = 1024;
  directionalLight1.shadow.radius = 20;

  directionalLight1.position.y = 20;


  scene.add( directionalLight1 );



  //lighthelper
  // const lighthelper = new THREE.DirectionalLightHelper( directionalLight1, 5 );
  // scene.add( lighthelper );



  const light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 15, 15, 20 );
  light.castShadow = true;
  scene.add( light );

  light.shadow.mapSize.width = 1024; // default
  light.shadow.mapSize.height = 1024; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 500; // default


  //PointLightHelper
  // const sphereSize = 1;
  // const pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
  // scene.add( pointLightHelper );







  //그림자를 받을 object
  const geometry = new THREE.PlaneGeometry( 8, 19, 24, 24 );

  const material = new THREE.MeshPhongMaterial( {color: "#ffffff",} );

  const plane = new THREE.Mesh( geometry, material );

  plane.rotation.x = -Math.PI /2
  //바닥면을 눕힘(반시계방향으로 돌림)

  plane.position.y = 0;  
  plane.position.x = 0;
  plane.position.z = -1;

  plane.receiveShadow = true;//4. 그림자를 받을 object

  scene.add( plane );









  //OrbitControls
  const controls = new OrbitControls( camera, renderer.domElement );

  controls.autoRotate = true;//자동회전

  controls.autoRotateSpeed = 1.0; // 30 seconds per orbit when fps is 60

  controls.enableZoom = true;

  controls.enableDamping = true; //컨트롤을 부드럽게함

  controls.minDistance = 15; //줌의 최소거리

  controls.maxDistance = 20; //줌의 최대거리

  controls.maxPolarAngle = Math.PI /2; //최대각도










  //반응형
  render();

  function render() {
    renderer.render(scene, camera);

    controls.update(10);//자동회전

    requestAnimationFrame(render);
  }

  function handleResize() {
    camera.aspect = rtWidth / rtHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(rtWidth, rtHeight);

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', handleResize);
}