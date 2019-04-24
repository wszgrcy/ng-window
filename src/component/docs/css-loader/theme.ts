export const PRISM_OBJ = { classname: 'prism-theme-' }
export interface ThemeObj {
    name?: string;
    classPrefix?: string;
    index?: number;
    url?: string
}
export const PRISM_THEME: ThemeObj[] = [
    { name: 'default', classPrefix: 'default', index: 1, url: './css/prism.css' },
    { name: 'coy', classPrefix: 'coy', index: 2, url: './css/prism-coy.css' },
    { name: 'dark', classPrefix: 'dark', index: 3, url: './css/prism-dark.css' },
    { name: 'funky', classPrefix: 'funky', index: 4, url: './css/prism-funky.css' },
    { name: 'okaidia', classPrefix: 'okaidia', index: 5, url: './css/prism-okaidia.css' },
    { name: 'solarizedlight', classPrefix: 'solarizedlight', index: 6, url: './css/prism-solarizedlight.css' },
    { name: 'tomorrow', classPrefix: 'tomorrow', index: 7, url: './css/prism-tomorrow.css' },
    { name: 'twilight', classPrefix: 'twilight', index: 8, url: './css/prism-twilight.css' },
]
