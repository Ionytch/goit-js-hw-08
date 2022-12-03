var _ = require('lodash');
 import throttle from 'lodash'; 
   const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
},1000) );
            




player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));