import React from "react";

import Plants from "../assets/tropical_plant.glb";
import TowerHouse from "../assets/forest_house.glb";
import House2 from "../assets/vianney_house_2.glb";
import House3 from "../assets/farm_house.glb";
import House4 from "../assets/house.glb";

const AFrameScene = () => {
  return (
    <a-scene physics>
      <a-entity light="type: ambient; color: #BBB"></a-entity>
      <a-entity
        environment="preset: default; fog:0; "
        src="#skyTexture"
        // scale="10 10 10"
      ></a-entity>
      {/* Valid values: 
      none, default, contact,
       egypt, checkerboard, forest, 
       goaland, yavapai, goldmine, 
       threetowers, poison, arches, 
       tron, japan, dream, volcano, 
       starry, osiris, moon */}
      <a-sky src="#skyTexture" position="0 250 0"></a-sky>

      <a-plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"
      ></a-plane>

      <a-entity
        id="shop_obj"
        gltf-model={Plants}
        title="Plant"
        position="0 0 0"
        scale="5 5 5"
        rotation="0 0 0"
      ></a-entity>
      <a-entity
        id="shop_obj"
        gltf-model={TowerHouse}
        title="Plant"
        position="0 0 40"
        scale="2 2 2"
        rotation="0 0 0"
      ></a-entity>
      <a-entity
        id="shop_obj"
        gltf-model={House2}
        title="Plant"
        position="30 0 70"
        scale=".02 .02 .02"
        rotation="0 0 0"
      ></a-entity>
      <a-entity
        id="shop_obj"
        gltf-model={House3}
        title="Plant"
        position="-30 10 -70"
        scale=".2 .2 .2"
        rotation="0 0 0"
      ></a-entity>
      <a-entity
        id="shop_obj"
        gltf-model={House4}
        title="Plant"
        position="-30 -0.5 -40"
        scale="2 2 2"
        rotation="0 0 0"
      ></a-entity>

      <a-entity id="rig" movement-controls="constrainToNavMesh: true;">
        <a-camera
          id="camera"
          position="0 2 10"
          look-controls="pointerLockEnabled: true"
          ammo-body="type: dynamic;"
        >
          <a-entity
            cursor="fuse: false; fuseTimeout: 500"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: red; shader: flat"
            id="camera_ring"
          ></a-entity>
          <a-text
            value="Get closer and click on the door"
            color="white"
            scale="0.2 0.2 0.2"
            position="0 0 -1"
            id="camera_text"
            visible="false"
          ></a-text>
        </a-camera>
        <a-entity oculus-touch-controls="hand: left"></a-entity>
        <a-entity
          oculus-touch-controls="hand: right"
          oculus-thumbstick-controls
        ></a-entity>
      </a-entity>
    </a-scene>
  );
};

export default AFrameScene;
