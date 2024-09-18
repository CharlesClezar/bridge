import Forma from "./Forma";
import Renderizador from "./Renderizador";

export default class Quadrado extends Forma {
    constructor(renderizador: Renderizador) {
        super(renderizador);
    }

    desenhar(): void {
        this.renderizador.renderizarForma("Quadrado");
    }
}
