import _ from 'lodash';
import './style/main.css'
import home from './pages/home'
import headerDiv from './pages/header';
import renderPage from './pages/landingPage';
import recipes from './pages/recipes';



function component(){
  const element = document.querySelector('#container');

  return element; 
} 

document.body.appendChild(component());
//recipes();
//home();
headerDiv();
renderPage();