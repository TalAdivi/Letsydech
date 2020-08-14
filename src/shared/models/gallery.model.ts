export interface Image {
    url: string;
    id: string;
    formats :{
        large: any,
        meduim: any,
        small: any,
        thumbnail: any
    };
    height: number;
    width: number;
    alternativeText: string;
    caption: string;
};

export interface Gallery {
    Title: string;
    Images: Array<Image>;
};

