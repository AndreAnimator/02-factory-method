import iItem from "./interface/iItem";

export default class Game implements iItem{
    start(): void {
        this.getDescription();
        console.log("Jogo iniciado.");
    }
    getDescription(): void {
        console.log("Descrição do jogo.");
    }
}