window.HELP_IMPROVE_VIDEOJS = false

$(document).ready(function() {

  // 设置 IntersectionObserver
  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        // 视频进入视口时，加载并播放
        if (!video.src) {
          video.src = video.dataset.src;  // 使用 data-src 动态设置 video 的 src
          video.load();  // 加载视频资源
        }
        video.play();
      } else {
        // 视频离开视口时，暂停并卸载资源
        video.pause();
        video.removeAttribute('src');  // 卸载 src 释放资源
        video.load();  // 清理视频加载状态
      }
    });
  }, {
    threshold: 0.25  // 视口中至少 25% 的视频可见时触发
  });


  const containers = document.getElementsByClassName('carousel')

  for (let container of containers) {
    console.log(container.dataset)
    const name = container.dataset.name
    const num = Number(container.dataset.num)
    for (let i=1;i<=num;i++){
      const item = document.createElement('div')
      item.classList.add('item')
      const video = document.createElement('video')
      video.dataset.src = `./static/videos/${name}/output/video_${i.toString().padStart(2,'0')}.mp4`
      video.autoplay = false
      video.controls = true
      video.muted = true
      video.playsInline = true
      video.style.height = '100%'

      item.appendChild(video)
      container.appendChild(item)

      videoObserver.observe(video)
    }
  }

  var carouselOptions = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', carouselOptions)

  const selectElement = document.getElementById('mySelect');
  const indexedDivs = document.querySelectorAll('.indexed-div');

  // 初始加载时，根据 select 的默认选中项（这里是第一个，索引为0）显示对应的 div
  showIndexedDiv(parseInt(selectElement.value));

  selectElement.addEventListener('change', function() {
    const selectedIndex = parseInt(this.value); // 将值转换为整数
    showIndexedDiv(selectedIndex);
  });

  function showIndexedDiv(indexToShow) {
      indexedDivs.forEach((div, index) => {
          div.style.display = (index === indexToShow) ? 'block' : 'none';
      });
  }
})
