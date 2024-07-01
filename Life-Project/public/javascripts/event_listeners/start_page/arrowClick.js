const rightArrows = document.querySelectorAll('html.initial-page img[src^="arrow-right"]');
const leftArrows = document.querySelectorAll('html.initial-page img[src^="arrow-left"]');
import {rightArrowMovement, leftArrowMovement} from '../../handlers/start_page/arrowMovement.js';

rightArrows.forEach(rightArrow => {
    rightArrow.addEventListener('click', rightArrowMovement);
});

leftArrows.forEach(leftArrow => {
    leftArrow.addEventListener('click', leftArrowMovement);
});