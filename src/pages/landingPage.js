// this file is responsible for handling all the different tabs
// rendering the content and switching between them
import recipes from './recipes';
import home from './home';
import { head } from 'lodash';
import headerDiv from './header';

const renderPage =  function() {
    const recipesTab = document.querySelector("#rinCozy");
    recipesTab.addEventListener("click", function(){
        clearContent();
        headerDiv();
        recipes();
    });
    

    const homeTab = document.querySelector("#yuruLogo");
    homeTab.addEventListener("click", function(){
        clearContent();
        headerDiv();
        home();
    });

    return renderPage;
}

function clearContent(){
    const mainContent = document.querySelector("#container");
    mainContent.innerHTML = "";
    return mainContent;
}


 export default renderPage;