export default interface Image {
    url: string;
    id: string;
};

export default interface Gallery {
    Title: string;
    Images: Array<Image>;
};