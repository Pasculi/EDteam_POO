export default class Curso{
    constructor(nombre, poster, clases){
        this.nombre = nombre;
        this.poster = poster;
        this.clases = clases;
        this.inscritos = [];
    }
    getNombre(){
        return this.nombre
    }
    setNombre(nombreCurso){
        return this.nombre = nombreCurso;
    }
    getPoster(){
        return this.poster
    }
    setPoster(urlPoster){
        return this.poster = urlPoster;
    }
    getClases(){
        return this.clases
    }
    setClases(numClases){
        return this.clases = numClases;
    }
    getIncristos(){
        return this.clases
    }
    setInscritos(inscritos){
        return this.inscritos = inscritos;
    }
}

