AFRAME.registerComponent('play-ambi', {
    init: function (){
      this.onClick = this.onClick.bind(this);
  },
play: function () {
    window.addEventListener('mousedown', this.onClick);
    document.addEventListener('touchstart', this.onClick);
},
pause: function () {
    window.removeEventListener('mousedown', this.onClick);
    document.removeEventListener('touchstart', this.onClick);
},
onClick: function () {
    {
    var el = this.el;
      var components = this.el.components;
      console.log(el);
      var playButton = document.getElementById("play");
      
      if(playButton.onclick){
          components.sound.playSound();
      }
  }
});
