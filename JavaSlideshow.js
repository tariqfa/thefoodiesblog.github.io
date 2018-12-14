<script>
  var i = 0; // Start Point
  var images = [];
  var time = 3000;

  //  Image list
  images [0] = 'image2.jpeg';
  images [1] = 'image3.jpeg';
  images [2] = 'image4.jpeg';
  images [3] = 'image5.jpeg';

  // Change image
  function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 2){
      i++;
    } else {
      i = 0;
    }

    setTimeout("changeImg", time);
  }

  window.onload = changeImg;

</script>
<img name= "slide" width="400" height="200">
