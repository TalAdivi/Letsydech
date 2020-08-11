export default interface Image {
    url: string;
    id: string;
};

export default interface Gallery {
    data: {
        Title: string;
        Images: Array<Image>;
    }
};

export interface IAboutUs {
    data: {
        Title: string;
        Images: Array<Image>;
        Text1: string;
        Text2: string;
        Text3: string;

    }
};

export interface IAboutUsData {
    Title: string;
    Images: Array<Image>;
    Text1: string;
    Text2: string;
    Text3: string;

};