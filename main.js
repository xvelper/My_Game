let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#f5f5f5'
}

let cube = {
    x: 0, // Случ. кординаты спавна
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


bots.push(bot);
renderMap(map);
renderCube(spawnCube(map, cube));
renderBots(bots);