// this file is responsible for handling all the different tabs
// rendering the content and switching between them
import recipes from './recipes';
import home from './home';

const renderPage =  function() {

    const mainContent = document.querySelector("#container");

    const recipesTab = document.querySelector("#rinCozy");
    //error Class constructor recipes cannot be invoked without 'new'
    recipesTab.addEventListener("click", new recipes);
    //append recipes to the page

    

    const homeTab = document.querySelector("#yuruLogo");
    homeTab.addEventListener("click", function(){
        console.log("homeTab clicked");
        home();
    });


    return recipesTab;
}
 export default renderPage;