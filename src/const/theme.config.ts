export const THEME_CONFIG: ThemeConfig = {
    prefix: 'theme',
    storageName: 'theme-class',
    list: [
        { class: 'deeppurple-amber', color: '#673ab7', href: './assets/theme/deeppurple-amber.css' },
        { class: 'indigo-pink', color: '#3f51b5', href: './assets/theme/indigo-pink.css' },
        { class: 'pink-bluegrey', color: '#c2185b', href: './assets/theme/pink-bluegrey.css' },
        { class: 'purple-green', color: '#7b1fa2', href: './assets/theme/purple-green.css' },
    ]
};

export interface ThemeConfig {
    prefix?: string;
    suffix?: string;
    list?: ThemeItem[];
    storageName?: string;
}
export interface ThemeItem {
    class: string;
    color?: string;
    href: string;
}
