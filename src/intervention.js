import desktopImg from '../assets/intervention/Page_EI_Image_5_combined.png';
import mobileImg from '../assets/intervention/Page_EI_Image_5.png';

function updateImageInApc() {
  const img = document.getElementById("apc-bottom-img1");
  const bottomText = document.getElementById("apc-bottom-text");
  if(!img) return;
  console.log(img);

  img.src = window.innerWidth <= 900 ? mobileImg : desktopImg;

  if(window.innerWidth <= 900){
    bottomText.classList.add('bg-secondary-color');
    bottomText.classList.remove('text-positioning');
  } else {
    bottomText.classList.remove('bg-secondary-color');
    bottomText.classList.add('text-positioning');
  }
  console.log("img" + img);
}

window.addEventListener('DOMContentLoaded', updateImageInApc);
window.addEventListener("resize", updateImageInApc);