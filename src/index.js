import _ from 'lodash';
import './style/main.css'
import home from './pages/home'
import headerDiv from './pages/header';
import recipes from './pages/recipes';
import renderPage from './pages/landingPage';



function component(){
  const element = document.querySelector('#container');

  return element; 
} 

document.body.appendChild(component());
home();
//recipes();
headerDiv();
renderPage();