import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
let scene, camera, renderer, mixer, clock;

clock = new THREE.Clock();
                scene = new THREE.Scene();
                scene.background = new THREE.Color(0xffffff);

                camera = new THREE.PerspectiveCamera(20,window.innerWidth/window.innerHeight);
                camera.position.set(0,0,10);

                renderer = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth,window.innerHeight);
                document.body.appendChild(renderer.domElement);

                const light = new THREE.AmbientLight( 0xc1c1c1); // soft white light
                const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
                scene.add( directionalLight );
                scene.add( light );

                let loader = new GLTFLoader();
                loader.load('src/model/one1.glb', (gltf)=>{
                    scene.add( gltf.scene );

                    mixer = new THREE.AnimationMixer( gltf.scene );
        
                    gltf.animations.forEach( ( clip ) => {
          
                     mixer.clipAction( clip ).play();
          
                    } );

                } );

                window.addEventListener('resize', ()=>{
                    renderer.setSize(window.innerWidth,window.innerHeight);
                    camera.aspect = window.innerWidth/window.innerHeight;
                });

        function animate(){
            requestAnimationFrame(animate);
  
            var delta = clock.getDelta();
            
            if ( mixer ) mixer.update( delta );
          
            renderer.render( scene, camera );
        }

        animate();
