var $ = require('jquery')
  , SoundManager2 = require('SoundManager2');


module.exports = AudioNotifications;

function AudioNotifications(sounds, options) {

  options = $.extend({
    preLoadAudio: true
  }, options)

  this.ready_defer = $.Deferred();
  this.sounds = {};

  var self = this;

  SoundManager2.setup({
    url: '/build/indabaui-SoundManager2/swf/',
    debugMode: false,
  });

  SoundManager2.onready(function() {
    for(soundId in sounds) {
      self.sounds[soundId] = soundManager.createSound({
        id: soundId,
        url: sounds[soundId]
      });
      if (options.preLoadAudio) {
        self.sounds[soundId].load();
      }
    }

    self.ready_defer.resolve();
  });
}

AudioNotifications.prototype.onready = function(callback) {
  var self = this;
  self.ready_defer.done(function(){
    callback.apply(self);
  })
}

AudioNotifications.prototype.play = function(soundId) {
  if (this.ready_defer.state() != "resolved") {
    console.error('AudioNotifications: Not ready');
  } else if (this.sounds[soundId]) {
    this.sounds[soundId].play();
  }
}
