
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

const markup=galleryItems.map((item)=>` <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div> `).join("");
console.log (markup);
galleryContainer.insertAdjacentHTML("beforeend", markup);





galleryContainer.addEventListener("click", selectImage);
function selectImage(e) {
    e.preventDefault();
    console.log(e.target.nodeName);
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);

    instance.show();
    
    
};