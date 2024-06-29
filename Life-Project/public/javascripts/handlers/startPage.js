const imagesOffer = document.querySelectorAll('html.initial-page img.offer');
const imagesSuggestion = document.querySelectorAll('html.initial-page img.suggestion');
const images = [
...imagesOffer,
...imagesSuggestion
];

export function setImgsSize() {
    images.forEach(image => {
        const w = image.naturalWidth;
        const h = image.naturalHeight;
        const partOccupiedOfParent = 0.8;
        const parentElement = image.parentNode;
        const relativeSizeW = parentNode.clientWidth * partOccupiedOfParent;
        const relativeSizeH = parentNode.clientHeight * partOccupiedOfParent;
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
        const parentElement = image.parentNode;
        const wParent = parentElement.clientWidth;
        const hParent = parentElement.clientHeight;
        const wDeslocation = (wParent - w) / 2;
        const hDeslocation = (hParent - h) / 2;
        image.style.setProperty('left', `${wDeslocation}px`);
        image.style.setProperty('top', `${hDeslocation}px`);
        console.log(wDeslocation);
    });
}