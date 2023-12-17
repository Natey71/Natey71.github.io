


let gamecanvas = document.getElementById("gamecanvas");

var rect = document.getElementById("movingBox");

rect_x = gamecanvas.offsetLeft;
rect_y = gamecanvas.offsetTop;


document.addEventListener('keydown', (event) => {


    switch(event.key){
        case 'ArrowDown':
            rect_y -= 10;
            break;
        case 'ArrowRight':
            rect_x += 10;
            break;
    }

    rect.style.top = rect_x + 'px';
    rect.style.left = rect_y + 'px';

});


