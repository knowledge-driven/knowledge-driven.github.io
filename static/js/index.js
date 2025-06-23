window.HELP_IMPROVE_VIDEOJS = false

// var INTERP_BASE = "./static/interpolation/stacked";
// var NUM_INTERP_FRAMES = 240;

// var interp_images = [];
// function preloadInterpolationImages() {
//   for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
//     var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
//     interp_images[i] = new Image();
//     interp_images[i].src = path;
//   }
// }

// function setInterpolationImage(i) {
//   var image = interp_images[i];
//   image.ondragstart = function() { return false; };
//   image.oncontextmenu = function() { return false; };
//   $('#interpolation-image-wrapper').empty().append(image);
// }


$(document).ready(function() {
    // // Check for click events on the navbar burger icon
    // $(".navbar-burger").click(function() {
    //   // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //   $(".navbar-burger").toggleClass("is-active");
    //   $(".navbar-menu").toggleClass("is-active");

    // });

    const containers = document.getElementsByClassName('carousel')

    for (let i=0;i<containers.length;i++){
      const container = containers[i]
      console.log(container.dataset)
      const name = container.dataset.name
      const num = Number(container.dataset.num)
      for (let i=1;i<=num;i++){
        const item = document.createElement('div')
        item.classList.add('item')
        const video = document.createElement('video')
        video.src = `./static/videos/${name}/output/video_${i.toString().padStart(2,'0')}.mp4`
        video.autoplay = true
        video.controls = true
        video.muted = true
        // video.loop = true
        video.playsInline = true
        video.style.height = '100%'
        // video.preload="none"
        item.appendChild(video)
        console.log(container, item)
        container.appendChild(item)
      }
    }

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options)

    // // Loop on each carousel initialized
    // for(var i = 0; i < carousels.length; i++) {
    // 	// Add listener to  event
    // 	carousels[i].on('before:show', state => {
    // 		console.log(state);
    // 	});
    // }

    // // Access to bulmaCarousel instance of an element
    // var element = document.querySelector('#my-element');
    // if (element && element.bulmaCarousel) {
    // 	// bulmaCarousel instance is available as element.bulmaCarousel
    // 	element.bulmaCarousel.on('before-show', function(state) {
    // 		console.log(state);
    // 	});
    // }

    // bulmaSlider.attach();

})
