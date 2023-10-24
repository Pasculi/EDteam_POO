import Curso from "../components/Cursos.js"

const html = new Curso("HTML desde cero","https://edteam-media.s3.amazonaws.com/courses/big/3a60cffc-3dab-4542-acd4-517c11edb103.png", 16)
console.log(html)

const css = new Curso("CSS avanzado","https://edteam-media.s3.amazonaws.com/courses/big/262e68b3-eea2-43f2-9e9a-febc106a8295.png", 14);

console.log(css.getNombre())

console.log(css.setNombre("CSS curso avanzado"))
console.log(css.clases )