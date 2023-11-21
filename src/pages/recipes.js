// videolink creamy-soup pasta https://www.youtube.com/watch?v=8eskh9wQyQs
// recipe https://itadakimasuanime.wordpress.com/2018/02/16/yuru-camps-creamy-soup-style-pasta-with-bacon-mushrooms-and-asparagus-perfect-for-some-laid-back-camping-or-the-comforts-of-home/


// videolink tomato sukiyaki https://www.youtube.com/watch?v=9VWjBlMnH9E
// https://itadakimasuanime.wordpress.com/2013/11/14/sukiyaki/


// https://www.youtube.com/watch?v=ymLVpn18vm0
// https://www.reddit.com/r/laidbackcamp/comments/9zyg13/i_made_nadeshikos_tantan_gyoza_nabe_from_episode/



// creating a div for each of recipes
// each one with a video, their name, a short description
// and a dropdown menu with the ingredients and instructions

/* const recipes = function(){
    const homeDiv = document.querySelector("#home");

    const recipeContainer = document.createElement('div');
    recipeContainer.id = 'recipeContainer';

    // Pasta soup recipe block
    const pastaRecipe = document.createElement('div');
    pastaRecipe.id = 'pastaRecipe';

    const pastaVideo = document.createElement('iframe');
    pastaVideo.src = 'https://www.youtube.com/embed/8eskh9wQyQs';
    pastaVideo.id = 'pastaVideo';
    pastaVideo.allowFullscreen = true;
    pastaRecipe.appendChild(pastaVideo);

    const pastaTitle = document.createElement('h2');
    pastaTitle.id = 'pastaTitle';
    pastaTitle.textContent = 'Creamy Soup Pasta';
    pastaRecipe.appendChild(pastaTitle);

    const pastaDescription = document.createElement('p');
    pastaDescription.id = 'pastaDescription';
    pastaDescription.textContent = 'A creamy soup pasta with bacon, mushrooms, and asparagus. Perfect for some laid back camping or the comforts of home.';
    pastaRecipe.appendChild(pastaDescription);

    //const pastaDropdown = document.createElement('div');

    recipeContainer.appendChild(pastaRecipe);
    homeDiv.appendChild(recipeContainer);

    return recipeContainer;
} */

class recipes {
    constructor(video, title, description) {
        this.video = video;
        this.title = title;
        this.description = description;
        
        this.createRecipeContainer = function () {

            const recipeBlock = document.createElement('div');
            recipeBlock.id = 'recipeBlock';

            const recipeVideo = document.createElement('iframe');
            recipeVideo.src = this.video;
            recipeBlock.appendChild(recipeVideo);

            const recipeTitle = document.createElement('h2');
            recipeTitle.id = 'recipeTitle';
            recipeTitle.textContent = this.title;
            recipeBlock.appendChild(recipeTitle);

            const recipeDescription = document.createElement('p');
            recipeDescription.id = 'recipeDescription';
            recipeDescription.textContent = this.description;
            recipeBlock.appendChild(recipeDescription);


        };
    }
}

const pastaRecipe = new recipes(
    'https://www.youtube.com/embed/8eskh9wQyQs',
    'Creamy Soup Pasta',
    'A creamy soup pasta with bacon, mushrooms, and asparagus. Perfect for some laid back camping or the comforts of home.'
);

pastaRecipe.createRecipeContainer();

    

export default recipes;