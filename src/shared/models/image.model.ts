export default interface Image{
    url: string;
};

export default interface Gallery{
    title: string;
    images: Array<Image>;
};