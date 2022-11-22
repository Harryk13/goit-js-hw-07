import { galleryItems } from './gallery-items.js';

const imagesMarkup = galleryItems.reduce((str, { preview, original, description }) => {
    return `${str}
        <ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>
     
    </ul>`;
}, '');
document.querySelector('.gallery').insertAdjacentHTML('afterbegin', imagesMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionType: 'alt',
});
