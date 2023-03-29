import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
console.log(galleryEl)
const makeGalleryItem = ({ preview, original, description } = {}) => {
    return `
    <li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
         <img src='${preview}' alt='${description}' class='gallery__image'>
        </a>
    </li>`   
}

const galleryPhotosArr = galleryItems.map(photo => {
    return makeGalleryItem(photo);
}).join('')
galleryEl.insertAdjacentHTML('beforeend', galleryPhotosArr)
const galleryImageEl = document.querySelector('.gallery__image');
console.log(galleryImageEl)
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',

});
