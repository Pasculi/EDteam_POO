export default class Curso{
    constructor(nombre, poster, clases){
        this.nombre = nombre;
        this.poster = poster;
        this.clases = clases;
        this.inscritos = [];
    }
    _getTemplate() {
        const cardTemplate = document.querySelector('template').content;
        const cardElement = cardTemplate.querySelector('.card-container').cloneNode(true);
        const section = document.querySelector('.section');
        cardElement.querySelector('.card__img').src = `${this.poster}`;
        cardElement.querySelector('.card__img').alt = `${this.nombre}`;
        cardElement.querySelector('.card-title').textContent = `${this.nombre}`;
        cardElement.querySelector('.num-clases').textContent = `clases: ${this.clases}`;
        section.prepend(cardElement);
    }
}


