# Audio Notifications

## to use:

```
var AudioNotifications = require('audio-notifications')
var audioNotifications = new AudioNotifications({
  'soundName': '/path/to/sound/'
})

audioNotifications.onready(function(){
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
