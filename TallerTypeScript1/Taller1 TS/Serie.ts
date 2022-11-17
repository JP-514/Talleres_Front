export class Serie {

    id: number;
    name: string;
    channel: string;
    seasons: number;
    genre: string;
    url: string;
    image: string;

    constructor(id:number, name:string, channel:string, seasons:number, genre:string, url:string, image:string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.genre = genre;
        this.url = url;
        this.image = image;
    }
}