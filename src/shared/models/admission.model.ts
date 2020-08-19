import { Image } from './gallery.model';

export interface Card {
    Title: string;
    Text: string;
}

export interface Admission {
    Title: string,
    Text: string,
    Cards: Card[];
}