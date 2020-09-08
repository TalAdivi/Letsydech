import { Image} from './gallery.model'

export interface Supporters{
    SupporterImage:Image;
    DonationTitle: string;
}

export interface HomePage{
    Title:string;
    TitleEn: string;
    TitleImage: Image;
    TitleText: string;
    TitleTextEn: string;
    SupportersTitleEn: string;
    SupportersTextEn: string;
    SupportersImages:Array<Image>;
    SupportersTitle: string;
    SupportersText: string;
    DonationTitle: string;
    DonationTitleEn: string;
    DonationText: string;
    DonationTextEn: string;
}