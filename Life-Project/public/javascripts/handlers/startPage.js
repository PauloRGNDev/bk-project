/* 
ALGORITMO:
 1 - pega um conjunto de imagens html
 2 - coloca um tamanho neles de forma que a imagem não fique distorcidade
  1 - com o maior lado com um tamanho relativo ao tamanho do pai
  2 - menor lado seguindo a proporção relativa ao maior lado
 3 - centraliza-os com relação ao espaço disponível no elemento pai
*/

//images variables
const imagesOffer = document.querySelectorAll('html.initial-page img.offer');
const imagesSuggestion = document.querySelectorAll('html.initial-page img.suggestion');
const images = [
...imagesOffer,
...imagesSuggestion
];

//arrow-btn variables
const arrow = document.querySelector('html.initial-page img[src*="arrow"]');
const btn = document.querySelector('html.initial-page main button');

//btn variables
const btnH = btn.clientHeight;
const computedBtn = getComputedStyle(btn);
const btnOffsetStr = computedBtn.getPropertyValue('bottom');
const btnOffset = parseFloat(btnOffsetStr);
const btnOccupiedArea = btnOffset + btnH;

//arrow variables
const arrowWidth = arrow.offsetWidth;

function basicConfigs(configsObj){
    images.forEach(image => {
        //parent variables
        const partOccupiedOfAvaliableParent = 0.8;
        const parentElement = image.parentNode;
        const parentWidth = parentElement.clientWidth;
        const parentHeight= parentElement.clientHeight;
        configsObj.av_parent_area_h = parentHeight - btnOccupiedArea;
        configsObj.av_parent_area_w = parentWidth - arrowWidth;

        //final calc
        configsObj.relative_size_w = configsObj.av_parent_area_w * partOccupiedOfAvaliableParent;
        configsObj.relative_size_h = configsObj.av_parent_area_h * partOccupiedOfAvaliableParent;
    });
}


export function setImgsSize() {
    images.forEach(image => {
        const w = image.naturalWidth;
        const h = image.naturalHeight;

        //basic configs
        let configsObj = {
            av_parent_area_w: 0,
            av_parent_area_h: 0,
            relative_size_w: 0,
            relative_size_h: 0,
        };
        basicConfigs(configsObj);
        let avaliableParentAreaH = configsObj.av_parent_area_h;
        let avaliableParentAreaW = configsObj.av_parent_area_w;
        let relativeSizeW = configsObj.relative_size_w;
        let relativeSizeH = configsObj.relative_size_h;

        if(w > h){
            const smallProportion = h / w;
            const finalW = relativeSizeW;
            const finalH = smallProportion * relativeSizeW;
            image.style.setProperty('width', `${finalW}px`);
            image.style.setProperty('height', `${finalH}px`);
        } else{
            const smallProportion = w / h;
            const finalW = relativeSizeH * smallProportion;
            const finalH = relativeSizeH;
            image.style.setProperty('width', `${finalW}px`);
            image.style.setProperty('height', `${finalH}px`);
        }
    });
}

export function alignCenterImgs(){
    images.forEach(image => {
        const w = image.clientWidth;
        const h = image.clientHeight;

        //parent configs
        const parentElement = image.parentNode;
        const parentWidth = parentElement.clientWidth;
        const parentHeight= parentElement.clientHeight;

        const wDeslocation = (parentWidth - w) / 2;
        const hDeslocation = (parentHeight - h - btnOccupiedArea) / 2;

        image.style.setProperty('left', `${wDeslocation}px`);
        image.style.setProperty('top', `${hDeslocation}px`);
    });
}