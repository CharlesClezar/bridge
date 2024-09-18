import Forma from "./Forma";
import Renderizador from "./Renderizador";

export default class Circulo extends Forma {
    constructor(renderizador: Renderizador) {
        super(renderizador);
    }

    desenhar(): void {
        this.renderizador.renderizarForma("Círculo");
    }
}
