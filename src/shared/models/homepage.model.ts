import { Image} from './gallery.model'

export interface Supporters{
    SupporterImage:Image;
    DonationTitle: string;
}

export interface HomePage{
    Title:string;
    TitleImage: Image;
    TitleText: string;
    SupportersImages:Array<Image>;
    SupporterTitle: string;
    SupporterText: string;
    DonationTitle: string;
    DonationText: string;
}