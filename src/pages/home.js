import yurucampBackground from "../assets/yurucamp-scene.jpg";


const home = function(){
    const content = document.querySelector("#container");

    const home = document.createElement('div');
    home.id = 'home';

    const homeBackground = document.createElement('img');
    homeBackground.src = yurucampBackground;
    homeBackground.id = 'homeBackground';
    home.appendChild(homeBackground);
    
    const homeVideo = document.createElement('iframe');
    homeVideo.src = 'https://www.youtube.com/embed/pNNwudhgvEY';
    homeVideo.id = 'homeVideo';
    homeVideo.allowFullscreen = true;
    home.appendChild(homeVideo);

    content.appendChild(home);


    return home;
}

export default home;