import iItem from "./interface/iItem";

export default class Movie implements iItem{
    start(): void {
        this.getDescription();
        console.log("Filme iniciado.");
    }
    getDescription(): void {
        console.log("Descrição do filme.");
    }
    
}