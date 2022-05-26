/* global AFRAME */
AFRAME.registerComponent('audio-on-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('click', this.onClick);
  },
  pause: function () {
    window.removeEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    var audioEl = this.el.getAttribute('src');
    if (!audioEl) { return; }
    this.sound.on = true;
    audioEl.play();
  }
});

