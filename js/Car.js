AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" }
  },
  init: function() {
    window.addEventListener("click", (e) => {
      this.data.moveX = this.data.moveX + 0.005;
    });
    if(this.data.clickcounter ===1){
      const rotation = {x:0,y:20,z:0};
      this.el.setAttribute("rotation",rotation);
    }else if(this.data.clickcounter === 2)
    {
  const rotation ={x:0,y:100,z:0};
    }
  }
});
