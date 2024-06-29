/* ALGORITMO:
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

function basicConfigs(){
    images.forEach(image => {
        //parent variables
        const partOccupiedOfAvaliableParent = 0.8;
        const parentElement = image.parentNode;
        const parentWidth = parentElement.clientWidth;
        const parentHeight= parentElement.clientHeight;
        const avaliableParentAreaH = parentHeight - btnOccupiedArea;
        const avaliableParentAreaW = parentWidth - arrowWidth;

        //final calc
        const relativeSizeW = avaliableParentAreaW * partOccupiedOfAvaliableParent;
        const relativeSizeH = avaliableParentAreaH * partOccupiedOfAvaliableParent;
    });
}

basicConfigs();

export function setImgsSize() {
    images.forEach(image => {
        const w = image.naturalWidth;
        const h = image.naturalHeight;

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
            console.log(finalW);
        }
    });
}

export function alignCenterImgs(){
    images.forEach(image => {
        const w = image.clientWidth;
        const h = image.clientHeight;
        const wParent = avaliableParentAreaW;
        const hParent = avaliableParentAreaH;
        const wDeslocation = (wParent - w) / 2;
        const hDeslocation = (hParent - h) / 2;
        image.style.setProperty('left', `${wDeslocation}px`);
        image.style.setProperty('top', `${hDeslocation}px`);
        console.log(wDeslocation);
    });
}