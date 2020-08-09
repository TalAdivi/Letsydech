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