import { galleryItems } from './gallery-items.js';

// Change code below this line
const refs = {
  galleryRef: document.querySelector(".gallery"),
};

const gallery = galleryItems.map(({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" data-actions alt="${description}" />
</a>`
})

refs.galleryRef.insertAdjacentHTML("afterbegin", gallery);


const onSlider = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return false
    
  }

  const lightbox = new SimpleLightbox('.gallery a', {

    captionsData: "alt",
    captionDelay: 250,
  })

 
};
refs.galleryRef.addEventListener("click", onSlider)



