import { Image} from './gallery.model'

export interface ISupporters{
    SupporterImage:Image;
    DonationTitle: string;
}

export interface IHomePage{
    Title:string;
    titleImage: Image;
    titleText: string;
    SupportersImages:Array<Image>;
    SupporterTitle: string;
    SupporterText: string;
    DonationTitle: string;
    DonationText: string;

}