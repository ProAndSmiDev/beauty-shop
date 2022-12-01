interface IServicesPicture {
    name: string;
    alt: string;
}

interface IServicesNavs {
    title: string;
    url: string;
    text: string;
}

export interface IServices {
    title: string;
    promo: string;
    pic: IServicesPicture;
    navs: Array<IServicesNavs>;
    isInverted?: boolean;
}
