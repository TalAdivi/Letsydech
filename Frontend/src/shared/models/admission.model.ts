import { Image } from './gallery.model';

export interface Card {
  id: string;
  Title: string;
  Text: string;
  TitleEn: string;
  TextEn: string;
};

export interface Admission {
  Title: string;
  Text: string;
  TitleEn: string;
  TextEn: string;
  Cards: Card[];
};