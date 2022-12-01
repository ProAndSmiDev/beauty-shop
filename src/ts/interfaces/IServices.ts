interface IServicesNavs {
    title: string;
    link: string;
    text: string;
}

export interface IServices {
    title: string;
    promo: string;
    navs: Array<IServicesNavs>;
    isInverted?: boolean;
}
