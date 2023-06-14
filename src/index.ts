import GameLocation from "./location/GameLocation"
import MovieLocation from "./location/MovieLocation";
import Location from "./location/location";

declare var process: { argv: string | string[]; };
let location : Location;

if(process.argv.includes("jogo")){
    location = new GameLocation;
    location.startItem();
}
else if(process.argv.includes("filme")){
    location = new MovieLocation;
    location.startItem();
}
else{
    console.log("Tipo de item inválido");
}

