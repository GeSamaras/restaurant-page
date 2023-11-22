// videolink creamy-soup pasta https://www.youtube.com/watch?v=8eskh9wQyQs
// recipe https://itadakimasuanime.wordpress.com/2018/02/16/yuru-camps-creamy-soup-style-pasta-with-bacon-mushrooms-and-asparagus-perfect-for-some-laid-back-camping-or-the-comforts-of-home/


// videolink tomato sukiyaki https://www.youtube.com/watch?v=9VWjBlMnH9E
// https://itadakimasuanime.wordpress.com/2013/11/14/sukiyaki/


// https://www.youtube.com/watch?v=ymLVpn18vm0
// https://www.reddit.com/r/laidbackcamp/comments/9zyg13/i_made_nadeshikos_tantan_gyoza_nabe_from_episode/



// creating a div for each of recipes
// each one with a video, their name, a short description
// and a dropdown menu with the ingredients and instructions

const recipes = function(){
    const content = document.querySelector("#container");

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


    // Sukiyaki recipe block
    const sukiyakiRecipe = document.createElement('div');
    sukiyakiRecipe.id = 'sukiyakiRecipe';

    const sukiyakiVideo = document.createElement('iframe');
    sukiyakiVideo.src = 'https://www.youtube.com/embed/9VWjBlMnH9E';
    sukiyakiVideo.id = 'sukiyakiVideo';
    sukiyakiVideo.allowFullscreen = true;
    sukiyakiRecipe.appendChild(sukiyakiVideo);

    const sukiyakiTitle = document.createElement('h2');
    sukiyakiTitle.id = 'sukiyakiTitle';
    sukiyakiTitle.textContent = 'Sukiyaki';
    sukiyakiRecipe.appendChild(sukiyakiTitle);

    const sukiyakiDescription = document.createElement('p');
    sukiyakiDescription.id = 'sukiyakiDescription';
    sukiyakiDescription.textContent = 'A hot pot dish with beef, tofu, and vegetables. Perfect for a cold winter night.';
    sukiyakiRecipe.appendChild(sukiyakiDescription);


    // Gyoza Nabe recipe block
    const gyozaNabeRecipe = document.createElement('div');
    gyozaNabeRecipe.id = 'gyozaNabeRecipe';

    const gyozaNabeVideo = document.createElement('iframe');
    gyozaNabeVideo.src = 'https://www.youtube.com/embed/ymLVpn18vm0';
    gyozaNabeVideo.id = 'gyozaNabeVideo';
    gyozaNabeVideo.allowFullscreen = true;
    gyozaNabeRecipe.appendChild(gyozaNabeVideo);

    const gyozaNabeTitle = document.createElement('h2');
    gyozaNabeTitle.id = 'gyozaNabeTitle';
    gyozaNabeTitle.textContent = 'Tantan Gyoza Nabe';
    gyozaNabeRecipe.appendChild(gyozaNabeTitle);
    
    const gyozaNabeDescription = document.createElement('p');
    gyozaNabeDescription.id = 'gyozaNabeDescription';
    gyozaNabeDescription.textContent = 'A hot pot dish with gyoza, tofu, and vegetables. Perfect for a cold winter night.';
    gyozaNabeRecipe.appendChild(gyozaNabeDescription);


    // adding all the recipe blocks to the recipe container
    recipeContainer.appendChild(gyozaNabeRecipe);
    recipeContainer.appendChild(pastaRecipe);
    recipeContainer.appendChild(sukiyakiRecipe);
    content.appendChild(recipeContainer);

    return recipeContainer;
    
}

export default recipes;