document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('shown.bs.dropdown', function () {
          el_overlay = document.createElement('span');
          el_overlay.className = 'screen-darken';
          document.getElementById('main-cont').appendChild(el_overlay)
      });
  
      everydropdown.addEventListener('hide.bs.dropdown', function () {
        document.getElementById('main-cont').removeChild(document.querySelector('.screen-darken'));
      });
    });
  
  }); 