import Location from "./location";
import Game from "./items/Game";
import iItem from "./items/interface/iItem";

export default class GameLocation extends Location{
    protected createTransport(): iItem {
        return new Game();
    }
}