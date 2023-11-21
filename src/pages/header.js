import yurucampLogo from '../assets/yurucamp-logo.png';
import rin2 from '../assets/rin2.png';
import nade2 from '../assets/nade2.png';


// this will create the menu bar for navigation, some pictures and functionality

const headerDiv = function(){
    // main html element to append everything to
    const content = document.querySelector("#container");
    
    // creating the parent div for the other elements to be appended to
    const header = document.createElement('div');
    header.id = 'header';
    
    
    const nadeshikoCozy = document.createElement('img');
    nadeshikoCozy.src = nade2;
    nadeshikoCozy.id = 'nadeCozy';
    header.appendChild(nadeshikoCozy);

   
    const yuruLogo = document.createElement('img')
    yuruLogo.src = yurucampLogo;
    yuruLogo.id = 'yuruLogo';
    header.appendChild(yuruLogo);

    
    const rinCozy = document.createElement('img');
    rinCozy.src = rin2;
    rinCozy.id = 'rinCozy';
    header.appendChild(rinCozy);
    

    
    content.appendChild(header);

    return header;
}




export default headerDiv;