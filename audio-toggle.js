AFRAME.registerComponent('audio-toggle', {
  schema: {
    playing: {
      type: 'boolean',
      default: false
    }
  },
  update: function() {
    let data = this.data
    let el = this.el
    let playing = data.playing

    if (playing === true) {
      el.components.sound.playSound()
    }
    
  }
})
