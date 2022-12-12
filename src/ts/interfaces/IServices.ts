interface IServicesPicture {
    readonly name: string;
    readonly alt: string;
}

interface IServicesNavs {
    readonly title: string;
    readonly url: string;
    readonly text: string;
}

export interface IServices {
    readonly title: string;
    readonly promo: string;
    readonly pic: IServicesPicture;
    readonly navs: Array<IServicesNavs>;
    readonly isInverted?: boolean;
}
