document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    id: 'cube',
    width: 56,
    height: 56,
    trn: .50,
    step: 6,
    color: 'gray',
}

let map = {
    width: 900,
    heitght: 900,

}

function checkButton(event) {

    if (event.keyCode === 38) {
        // key: "ArrowUp"
        if (cube.y > 0) {
            cube.y -= cube.step;
        }
    }

    else if (event.keyCode === 40) {
        // key: "ArrowDown"

        if (cube.y < map.height) {
            cube.y += cube.step;
        }
    }

    else if (event.keyCode === 39) {
        // key: "ArrowRight"
        if (cube.x < map.width) {
            cube.x += cube.step;
        }
    }

    else if (event.keyCode === 37) {
        // key: "ArrowLeft"
        if (cube.x > 0) {
            cube.x -= cube.step;
        }
    }
    render(cube);
}

function render(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'ease' + cube.trn + 's';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}
render(cube);