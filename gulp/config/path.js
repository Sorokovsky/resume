import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./docs`;
const srcFolder = `./src`;
export const path = {
    build: {
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/folder/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        js: `${srcFolder}/js/script.js`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        html: `${srcFolder}/*.{html,pug}`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,ico,png,gif,webp}`,
        sass: `${srcFolder}/sass/style.sass`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        sass: `${srcFolder}/sass/**/*.sass`,
        html: `${srcFolder}/**/*.{html,pug}`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,ico,png,gif,webp}`,
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}