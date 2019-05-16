import { Image } from './image';

export class Game {
    public name: string;
    public id: number;
    public cover: Image;
    public releaseDate: Date;
    public summary: string;
    public genres: string[];
}
