let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#f5f5f5'
}

let cube = {
    x: 0, 
    y: 0,
    id: "cube",
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black'
}

let bots = []

let bot = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red'
}



let buffs = [];

let buff = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'green'
};

renderMap(map);
renderCube(spawnCube(map, cube));

let tike = setInterval(timeTike, 1000);
