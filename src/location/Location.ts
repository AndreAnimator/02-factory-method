import iItem from "./items/interface/iItem";

export default abstract class Location{
    startItem(): void{
        const item = this.createTransport();
        item.start();
    }

    protected abstract createTransport(): iItem;
}