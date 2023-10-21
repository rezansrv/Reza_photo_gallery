// script.js
function openPopup(imageUrl) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    var downloadLink = document.getElementById("download-link");
  
    popup.style.display = "block";
    popupImage.src = imageUrl;
    downloadLink.href = imageUrl;
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var imageElements = document.querySelectorAll('.gallery img');
  
    imageElements.forEach(function(element) {
      element.addEventListener('click', function() {
        var imageSrc = this.getAttribute('data-image-src');
        openPopup(imageSrc);
      });
    });
  });

   function loadNavbar() {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', '/path-to-your-navbar/navbar.html', true);
       xhr.onreadystatechange = function() {
           if (xhr.readyState === 4 && xhr.status === 200) {
               document.getElementById('navbar-container').innerHTML = xhr.responseText;
           }
       };
       xhr.send();
   }
   loadNavbar();
