/* v1.1.0 */
(function () {
  'use strict';

  let Fullscreen = {
      isFullscreenEnabled() {
            return document.fullscreenEnabled || document.msFullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        },

      isFullscreen() {
            return !!(document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement);
        },

      toggleFullScreen () {
            if (!this.isFullscreen()) {
                var requestFullscreen = document.body.requestFullscreen || document.body.msRequestFullscreen || document.body.mozRequestFullScreen || document.body.webkitRequestFullscreen;
                requestFullscreen.call(document.body);
            } else {
                var exitFullscreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen;
                exitFullscreen.call(document);
            }
        },
    };

  for (let prop in Fullscreen) {
      if (Fullscreen.hasOwnProperty(prop)) {
          IDRViewer[prop] = Fullscreen[prop];
        }
    }

  ['fullscreenchange', 'MSFullscreenChange', 'mozfullscreenchange', 'webkitfullscreenchange'].forEach((type) => {
      document.addEventListener(type, () => {
          IDRViewer.fire('fullscreenchange', {
              isFullscreen: Fullscreen.isFullscreen(),
            });
        });
    });
}());
