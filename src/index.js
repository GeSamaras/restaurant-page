import _ from 'lodash';
import './style/main.css'
import home from './pages/home'
import headerDiv from './pages/header';
import renderPage from './pages/landingPage';
import recipes from './pages/recipes';


// !!! todo: add eslint and prettier
// npm i D eslint prettier eslint-config-prettier eslint-plugin-node eslint-config-node
// npx install-peerdeps --dev eslint-config-airbnb-base
// sudo npm install -g eslint
// eslint --init


function component(){
  const element = document.querySelector('#container');

  return element; 
} 

document.body.appendChild(component());
//recipes();
home();
headerDiv();
renderPage();