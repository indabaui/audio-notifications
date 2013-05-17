# Audio Notifications

Uses https://github.com/indabaui/SoundManager2. See SoundManager2 for supported sound formats.

## to use:

```javascript
var audioNotifications = require('audio-notifications')

audioNotifications.prepare.then(function(){
  
  audioNotifications.addSound('soundName', '/path/to/sound.wav');
  // or
  audioNotifications.addSounds({
    'soundName': /path/to/sound.wav'
  });

  audioNotifications.play('soundName');

})
```


## to run:

```
make
npm install serve -g
serve
open http://localhost:3000/examples/indaba.html
open http://localhost:3000/examples/soundcloud.html
```
