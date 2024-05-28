export const fullScreen = (video: any) => {
    if(video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
        // @ts-ignore
      } else if (video?.mozRequestFullScreen) {
        /* Firefox */
         // @ts-ignore
        video.mozRequestFullScreen();
         // @ts-ignore
      } else if (video?.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
         // @ts-ignore
        video.webkitRequestFullscreen();
         // @ts-ignore
      } else if (video?.msRequestFullscreen) {
        /* IE/Edge */
         // @ts-ignore
        video.msRequestFullscreen();
      }
    }
   
  }