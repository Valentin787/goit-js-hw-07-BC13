
import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const refs = {
  container: document.querySelector(".gallery")
};

const gallery = galleryItems.map(({original, preview, description}) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
}).join("")

refs.container.insertAdjacentHTML("afterbegin", gallery)

const onModalWindow = (event) => {
  event.preventDefault();


  if (event.target.tagName !== "IMG") {
    return false
  };
  console.log(event.target.dataset.source);

  let instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)

  instance.show()
  
window.document.addEventListener("keydown", event => {
  if (event.code === "Escape") {
    return instance.close()
  }
  console.log(event.code);
})
}
refs.container.addEventListener("click", onModalWindow)
