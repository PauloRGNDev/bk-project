const indexPage = document.querySelector('html.initial-page');
import {setImgsSize, alignCenterImgs} from '../handlers/startPage.js';
indexPage.addEventListener('load', setImgsSize);
indexPage.addEventListener('load', alignCenterImgs);