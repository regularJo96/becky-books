function highlight(element){
    // element.className = element.className+" highlight";
    if(element.id=="bookshelf"){
        element.className = "bookshelf";
    }
    else if(element.id=="blog"){
        element.className = "blog";
    }
    else{
        element.className = "academics";
    }
}

function removeHighlight(element){
    if(element.id=="bookshelf"){
        element.className = "bookshelf btn";
    }
    else if(element.id=="blog"){
        element.className = "blog btn";
    }
    else{
        element.className = "academics btn";
    }
}