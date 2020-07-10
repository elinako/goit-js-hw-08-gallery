import { gallery } from "./gallery-items.js";

const ulWithImages = document.querySelector(".js-gallery");
const lightBoxWrapper = document.querySelector(".lightbox");
const imgOfLightBox = document.querySelector(".lightbox__image");
const overlayWrapper = document.querySelector(".lightbox__overlay");
const button = document.querySelector(".lightbox__button");

const list = gallery.map((item) => {
  return listItemCreator(item);
});

function listItemCreator(element) {
  const li = document.createElement("li");
  const imgPrewiev = document.createElement("img");
  const hrefImage = document.createElement("a");
  li.classList.add("gallery__item");
  imgPrewiev.classList.add("gallery__image");
  hrefImage.classList.add("gallery__image");
  imgPrewiev.src = element.preview;
  imgPrewiev.dataset.source = element.original;
  imgPrewiev.alt = element.description;
  hrefImage.href = element.original;
  li.append(hrefImage, imgPrewiev);
  return li;
}

ulWithImages.append(...list);

ulWithImages.addEventListener("click", respondToTheClick);
button.addEventListener("click", closeLightBox);
overlayWrapper.addEventListener("click", closeLightBox);
window.addEventListener("keydown", closeLightBoxByEsc);

function respondToTheClick(event) {
  const element = event.target;
  lightBoxWrapper.classList.add("is-open");
  imgOfLightBox.src = element.dataset.source;
  imgOfLightBox.alt = element.alt;
}

function closeLightBox() {
  lightBoxWrapper.classList.remove("is-open");
  imgOfLightBox.src = "";
  imgOfLightBox.alt = "";
}

function closeLightBoxByEsc(event) {
  if (event.key === "Escape" && lightBoxWrapper.classList.contains("is-open")) {
    closeLightBox();
  }
}
