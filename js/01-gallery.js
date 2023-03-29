import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
console.log(galleryEl)
const makeGalleryItem = ({ preview, original, description } = {}) => {
    return `
    <li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
         <img src='${preview}' alt='${description}' data-source='${original}' class='gallery__image'> 
        </a>
    </li>`   
}
const galleryPhotosArr = galleryItems.map(photo => {
    return makeGalleryItem(photo);
}).join('')

galleryEl.insertAdjacentHTML('beforeend', galleryPhotosArr)

const galleryImageEl = document.querySelector('.gallery__image');
console.log(galleryImageEl)
let modalEl = null;

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    modalEl = basicLightbox.create(`
        <img src='${event.target.dataset.source}' width='1280' height='855'>`, {});
    modalEl.show();
    document.addEventListener('keydown', onEscapeClose);
}

function onEscapeClose(event) {
    if (event.code === 'Escape') {
    modalEl.close();
    }
}



