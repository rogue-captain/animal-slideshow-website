<!-- JS VARIABLES ---------------------------------------->  
		var imgArray = new Array(10);

		var index1 = 0;

		var flag = confirm("Do you want to see pictures in order or random? OK for Ordered, Cancel for Random");

		var slideshowInterval;


		<!-- JS VARIABLES ---------------------------------------->


		function startup() <!-- Assigns & Loads all 4 index variables w image, then calls: cycle(), select()-->
		{
		  imgArray[0] = new Image;
		  imgArray[0].src = "bald_eagle.jpg";
		  imgArray[1] = new Image;
		  imgArray[1].src = "grizzly.jpg";
		  imgArray[2] = new Image;
		  imgArray[2].src = "gaboon_viper.jpg";
		  imgArray[3] = new Image;
		  imgArray[3].src = "praying_mantis.jpeg";
		  imgArray[4] = new Image;
		  imgArray[4].src = "orca.jpg";
		  imgArray[5] = new Image;
		  imgArray[5].src = "rabbit.jpg";
		  imgArray[6] = new Image;
		  imgArray[6].src = "rottweiler.jpg";
		  imgArray[7] = new Image;
		  imgArray[7].src = "giant_squid.jpg";
		  imgArray[8] = new Image;
		  imgArray[8].src = "komodo_dragon.jpg";
		  imgArray[9] = new Image;
		  imgArray[9].src = "rhino.jpg";

		  return;
		} 


		function orderedSlideShow() //ORDERED
		{
		  document.banner1.src = imgArray[index1].src; <!--increases index1, 1 unit per 2 seconds to change -->
		  index1++;
		  if (index1 > 9)
		  {
			index1 = 0;
		  }
		  slideshowInterval = setTimeout(orderedSlideShow, 2000);
		  return;
		}

		function randomSlideShow()
		{
		  index1 = Math.floor(Math.random() * 10);
		  document.banner1.src = imgArray[index1].src;
		  slideshowInterval = setTimeout(randomSlideShow, 2000);
		  return;
		}


		function doBack() {
    clearTimeout(slideshowInterval); // Clear the current slideshow interval
    
    if (index1 > 0) {
        index1--;
    } else {
        index1 = imgArray.length - 1; // Wrap around to the last image
    }
    
    document.banner1.src = imgArray[index1].src;

	if (flag === true) {
		slideshowInterval = setTimeout(orderedSlideShow, 2000);
	} else {
		slideshowInterval = setTimeout(randomSlideShow, 2000);
	}
	return;
}

function doNext() {
    clearTimeout(slideshowInterval); // Clear the current slideshow interval
    
    if (index1 < imgArray.length - 1) {
        index1++;
    } else {
        index1 = 0; // Wrap around to the first image
    }
    
    document.banner1.src = imgArray[index1].src;

	if (flag === true) {
		slideshowInterval = setTimeout(orderedSlideShow, 2000);
	} else {
		slideshowInterval = setTimeout(randomSlideShow, 2000);
	}
	return;
}



		window.onload = function() {
		  startup();
		  if (flag) {
			orderedSlideShow();
		  } else {
			randomSlideShow();
		  }
		};