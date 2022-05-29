// function expand(){
//     document.getElementById("media").className = "media-links-active";
//     document.getElementById("bookshelf").className = "bookshelf-active";
//     document.getElementById("academics").className = "academics-active";
//     document.getElementById("blog").className = "blog-active";
// }

// function reduce(){
//     document.getElementById("media").className = "media-links";
//     document.getElementById("bookshelf").className = "bookshelf";
//     document.getElementById("academics").className = "academics";
//     document.getElementById("blog").className = "blog";
// }

function highlight(element){
    // element.className = element.className+" highlight";
    if(element.id=="bookshelf"){
        document.getElementById("one").className = "highlight";
        document.getElementById("one").innerHTML = "my bookshelf";
    }
    else if(element.id=="blog"){
        document.getElementById("two").className = "highlight";
        document.getElementById("two").innerHTML = "my blog";
    }
    else{
        document.getElementById("three").className = "highlight";
        document.getElementById("three").innerHTML = "academia";
    }
}

function removeHighlight(element){
    if(element.id=="bookshelf"){
        document.getElementById("one").className = "";
        document.getElementById("one").innerHTML = "";
    }
    else if(element.id=="blog"){
        document.getElementById("two").className = "";
        document.getElementById("two").innerHTML = "";
    }
    else{
        document.getElementById("three").className = "";
        document.getElementById("three").innerHTML = "";
    }
}