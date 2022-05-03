var words = 0;
window.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('text-area');
    const form = document.getElementById("form");
    const button = document.getElementById("button");
    //const file = document.getElementByName('picture');
    textArea.addEventListener('input', updateWordCounter);
    //const picture = document.getElementsByName("picture")[0];
    //picture.addEventListener('change', fileUpload);
    button.addEventListener('click', fileUpload);
})

function fileUpload(){
    console.log("hi");

    const file = document.getElementsByName("picture")[0].files[0];
    
    const pic = new FileReader();
    
    const imageTag = document.getElementById("img");
    pic.onload = () => {
        var base46Pic = pic.result;
        console.log(base46Pic);
        imageTag.src = pic.result;
    }
    pic.error = (e) => {
        console.log(e)
    }
    if(pic)
        pic.readAsDataURL(file);
}

function updateWordCounter(){
    const wordCounter = document.getElementById('counter-banner');
    const textArea = document.getElementById('text-area');
    var check = textArea.value;
    try{
        var charactersIncludingWhiteSpace = check.match(/./g).length;
        var letters = check.match(/\w/g).length;
        var words = check.match(/[a-zA-Z0-9]+/g).length;
    }
    catch(e){
        if(e instanceof TypeError){
            words = 0;
            letters = 0;
            charactersIncludingWhiteSpace = 0;
        }
    }
    wordCounter.innerHTML = words + " words | " + letters + " letters | " + charactersIncludingWhiteSpace + " characters";
}
