const loginIcon = document.querySelector('html.initial-page .user-info');

import {signupClick} from '../handlers/userInfo.js';
loginIcon.addEventListener('click', signupClick);

console.log("Test");