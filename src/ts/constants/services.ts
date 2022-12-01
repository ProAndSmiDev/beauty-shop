import { IServices } from '@/ts/interfaces/IServices';

export const services: Array<IServices> = [
    {
        title: 'In our works we use high quality cosmetics and well known brands',
        promo: "Luxio, KEUNE, Barbara and<br/> Aravia.<br/> Our masters are constantly improving and<br/> taking advanced training courses, so you don't<br/> have to worry about the quality of our work",
        navs: [
            {
                title: 'Follow to the page "Makeup"',
                link: '/makeup',
                text: 'See more',
            },
            {
                title: 'Follow to the page "Price"',
                link: '/price',
                text: 'Price',
            },
        ],
        isInverted: true,
    },
    {
        title: 'Our team of expert at frenchbradings are skilled in giving you the style you want',
        promo: 'During your consultation your hairstylist will talk to you about the look you want. Making sure your hair not only looks great when you leave the salon but it works for you every day.',
        navs: [
            {
                title: 'Follow to the page "Hairstyle"',
                link: '/hairstyle',
                text: 'See more',
            },
            {
                title: 'Follow to the page "Price"',
                link: '/price',
                text: 'Price',
            },
        ],
    },
    {
        title: 'Choosing a wedding dress is an enchanting moment',
        promo: 'The bride will remember not only the ceremony itself, but also the preparations for it, and especially the first fitting of the wedding dress. That is why it is so important to choose the right wedding dress salon. At Frenchbraiding, the bride will be able to get advice from experts and try on stunning looks, each of which will emphasize her individuality.',
        navs: [
            {
                title: 'Follow to the page "Dresses"',
                link: '/dresses',
                text: 'See more',
            },
            {
                title: 'Follow to the page "Price"',
                link: '/price',
                text: 'Price',
            },
        ],
    },
    {
        title: 'Price and services',
        promo: 'Check out our best prices and offers for your celebration, wedding day, party.',
        navs: [
            {
                title: 'Follow to the page "Price"',
                link: '/price',
                text: 'See more',
            },
        ],
        isInverted: true,
    },
];
