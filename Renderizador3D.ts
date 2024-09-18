import Renderizador from "./Renderizador";

export default class Renderizador3D implements Renderizador {
    renderizarForma(forma: string): void {
        console.log('Desenhando' + {forma} + 'em 3D.');
    }
}
