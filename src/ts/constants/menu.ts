import { IMenu } from '@/ts/interfaces/IMenu';

export const menu: Array<IMenu> = [
    {
        title: 'Follow to the "Main" page',
        url: '/',
        text: 'Home',
    },
    {
        title: 'Follow to the "Makeup" page',
        url: '/makeup',
        text: 'Makeup',
        isFullBanner: true,
    },
    {
        title: 'Follow to the "Hairstyle" page',
        url: '/hairstyle',
        text: 'Hairstyle',
        isFullBanner: true,
    },
    {
        title: 'Follow to the "Dresses" page',
        url: '/dresses',
        text: 'Dresses',
        isFullBanner: true,
    },
    {
        title: 'Follow to the "Price" page',
        url: '/price',
        text: 'Price',
    },
    {
        title: 'Follow to the "About us" page',
        url: '/about-us',
        text: 'About us',
    },
];
