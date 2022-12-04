
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



let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function (e) {
console.log(e);  });

gallery.on('error.simplelightbox', function (e) {
console.log(e);  });