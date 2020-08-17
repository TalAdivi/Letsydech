import { Image } from "./gallery.model";

export interface Story {
    Title: string;
    Text: string;
    Image: Image;
    createdAt: string;
};

export interface Stories {
    Title: string;
    Text: string;
};