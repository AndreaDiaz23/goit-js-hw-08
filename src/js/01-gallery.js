// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery')


function modalGallery(items) {
    return items.map(
        (item) =>
    `<li class="gallery__item"> 
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a> 
    </li>`
    )
    .join("");
}


console.log(galleryItems);

gallery.innerHTML = modalGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });