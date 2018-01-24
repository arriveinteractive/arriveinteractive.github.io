AFRAME.registerComponent('move-marker', {
  schema: {
    on: {type: 'string'},
    src: {type: 'string'},
    markers: {type: 'string'},
    reset: {type:'boolean', default: true},
    dur: {type: 'number', default: 300}
  },
  init: function () {
    var data = this.data;
    var el = this.el;

    if(data.reset === true) {
      var dispatcher = document.querySelector("#dispatcher");
      
      dispatcher.addEventListener('reset-marker-visibility', function() {
        el.setAttribute("visible",false);
      });      
      
      el.addEventListener('mouseenter', function() {
        el.setAttribute('scale', "0.693 0.193 0.693")
      });
      
      el.addEventListener('mouseleave', function() {
        el.setAttribute('scale', "0.493 0.493 0.493")
      });
    }
    

    el.addEventListener('click', function () {
      var sky = document.querySelector("#image-360");
    
      var dispatcher = document.querySelector("#dispatcher");
      
      dispatcher.emit('reset-marker-visibility');
                  
      sky.emit('set-image-fade');
      
      setTimeout(function () {
        // Set image.
        sky.setAttribute('material', 'src', data.src);
        
        var marker = document.querySelector(data.markers);
        
        if(marker !== null) {
          var list = marker.getChildren();
          
          for (var i = 0; i < list.length; i++) {
            list[i].setAttribute("visible",true);
          }              
        }
        
      }, 300);
    });
  }
});