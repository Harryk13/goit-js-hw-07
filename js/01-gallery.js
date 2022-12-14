import { galleryItems } from "./gallery-items.js";

const $gallery = document.querySelector('.gallery');
const imagesMarkup = galleryItems.reduce((str, { preview, original, description }) => {
    return `${str}
        <div class="gallery__item">
          <a class="gallery__link" href="${original.value}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
}, '');
$gallery.insertAdjacentHTML('afterbegin', imagesMarkup);

const onContainerClick = (event) => {
    event.preventDefault();

    if (!event.target.classList.contains("gallery")) {
        let onEsc;

        const source = event.target.dataset.source;
        const instance = basicLightbox.create(
            `<img src="${source}"width="800" height="600">`,
            {
                onShow: () => window.addEventListener('keydown', onEsc),
                onClose: () => window.removeEventListener('keydown', onEsc)
            }
        );

        onEsc = (event) => {
            if (event.code.toLowerCase() === 'escape') {
                instance.close();
            }
        }

        instance.show();
    }
};

$gallery.addEventListener("click", onContainerClick);
