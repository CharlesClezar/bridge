import Circulo from "./Circulo";
import Quadrado from "./Quadrado";
import Renderizador2D from "./Renderizador2D";
import Renderizador3D from "./Renderizador3D";

function main() {
    const circulo2D = new Circulo(new Renderizador2D());
    const quadrado2D = new Quadrado(new Renderizador2D());
    const circulo3D = new Circulo(new Renderizador3D());
    const quadrado3D = new Quadrado(new Renderizador3D());

    circulo2D.desenhar();
    quadrado2D.desenhar();
    circulo3D.desenhar();
    quadrado3D.desenhar();
}

main();