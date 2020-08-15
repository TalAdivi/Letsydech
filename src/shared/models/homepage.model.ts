import { Image} from './gallery.model'

export interface ISupporters{
    SupporterImage:Image;
    DonationTitle: string;
}

export interface IHomePage{
    Title:string;
    TitleImage: Image;
    TitleText: string;
    SupporterImage:Array<Image>;
    SupporterTitle: string;
    SupporterText: string;
    DonationTitle: string;
    DonationText: string;

}