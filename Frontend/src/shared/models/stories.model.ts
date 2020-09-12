import { Image } from "./gallery.model";

export interface Story {
  id: string;
  Title: string;
  TitleEn: string;
  Text: string;
  TextEn: string;
  Image: Image;
  createdAt: string;
};

export interface Stories {
  Title: string;
  TitleEn: string;
  Text: string;
  TextEn: string;
};