<template>
  <div class="container" :style="{ background: 'linear-gradient(' + angle + 'deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)' }">
    <div class="container__inner">
      <h1>Fill</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fill',
  data: function() {
    return {
      angle: 0
    }
  },
  mounted: function() {


    var _this = this;

    (function() {
        document.onmousemove = handleMouseMove;
        function handleMouseMove(event) {
            var eventDoc, doc, body;

            event = event || window.event; // IE-ism

            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                  (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                  (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                  (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                  (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }

            var dy = event.y - (window.innerHeight/2);
            var dx = event.x - (window.innerWidth/2);
            var theta = Math.atan2(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
            if (theta < 0) theta = 360 + theta; // range [0, 360)
            console.log('radius ', theta)
            _this.angle = theta + 90;

            // Use event.pageX / event.pageY here
        }
    })();

  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: rgb(255,255,255);
  // background: linear-gradient(80deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 14%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 100%);
  // background: linear-gradient(100deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23%, rgba(0,0,0,1) 23%, rgba(0,0,0,1) 100%);
  background: linear-gradient(39deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
  top: 0;
  position: absolute;
  z-index: -1;
}

.container__inner {
  width: 100vw;
  height: 100vh;
  // background-image: url('../assets/illustration.svg');
  background-size: cover;
  mix-blend-mode: difference;
}
</style>