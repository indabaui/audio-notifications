var $ = require('jquery')
  , SoundManager2 = require('SoundManager2');


module.exports = {

  ready_defer: $.Deferred(),

  sounds: {},

  prepare: function(options) {
    var self = this;

    this.options = $.extend({
      preLoadAudio: true,
      volume: 100
    }, options || {})

    SoundManager2.setup({
      url: '/build/indabaui-SoundManager2/swf/',
      debugMode: false,
      defaultOptions: {
        volume: this.options.volume || 100
      }
    });

    SoundManager2.onready(function(){
      self.ready_defer.resolve();
    });

    return this.ready_defer.promise();
  },

  addSound: function(soundId, soundPath) {
    this.sounds[soundId] = SoundManager2.createSound({
      id: soundId,
      url: soundPath
    });
    
    if (this.options.preLoadAudio) {
      this.sounds[soundId].load();
    }
  },

  addSounds: function(sounds) {
    for(soundId in sounds) {
      this.addSound(soundId, sounds[soundId]);
    }
  },

  play: function(soundId) {
    if (this.ready_defer.state() != "resolved") {
      console.error('AudioNotifications: Not ready');
    } else if (this.sounds[soundId]) {
      this.sounds[soundId].play();
    }
  }
}
