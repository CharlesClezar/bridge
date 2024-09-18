import Renderizador from "./Renderizador";

export default class Renderizador2D implements Renderizador {
    renderizarForma(forma: string): void {
        console.log('Desenhando' + {forma} + 'em 2D.');
    }
}
