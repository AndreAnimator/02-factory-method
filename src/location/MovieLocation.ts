import Movie from "./items/Movie";
import Location from "./location";
import iItem from "./items/interface/iItem";

export default class MovieLocation extends Location{
    protected createTransport(): iItem {
        return new Movie();
    }
    
}