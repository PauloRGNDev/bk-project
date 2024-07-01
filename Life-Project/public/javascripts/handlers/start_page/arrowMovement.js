export function leftArrowMovement(e){
    const arrowEl = e.target;
    const parentArticle = arrowEl.parentNode;
    const articleWidth = parentArticle.clientWidth;
    const classArticle = parentArticle.getAttribute('class');
    const divs = document.querySelectorAll(`html.initial-page article.${classArticle} div`);
    let moveAmount;
    for(let i = 0; i < divs.length; i++){
        const rightOffset = divs[i].getAttribute('right');
        const leftOffset = divs[i].getAttribute('left');
        let finalPosRight = rightOffset;
        let finalPosLeft = leftOffset;
        let moveDir = true; //false-> left, true -> right
        if(rightOffset + leftOffset != 0) continue;
        if(i == 0) {
            //move all divs to left
            moveAmount = -articleWidth * (divs.length - 1);
            moveDir = false
        } 
        else {
            //move divs to right
            moveAmount = articleWidth;
        } 
        document.documentElement.style.setProperty('--move-amount', `${moveAmount}px`);
        divs.forEach(div => {
            const curElementLeftOffset = div.getAttribute('right');
            const curElementRightOffset = div.getAttribute('left');
            div.classList.add('move');
            div.addEventListener('animationend', (e) => {
                if(e.name == 'move'){
                    div.classList.remove('move');
                    if(moveDir){
                        finalPosRight = curElementRightOffset + moveAmount;
                        div.setProperty('left',`${finalPosRight}px`);
                        return;
                    } 
                    finalPosLeft = curElementLeftOffset + moveAmount;
                    div.setProperty('right',`${finalPosLeft}px`);
                }
            });
        });
        break;
    }
}

export function rightArrowMovement(e){
    
}