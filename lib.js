document.onkeydown = checkButton;

function checkButton(event) {

    if (event.keyCode === 38) {
        // ArrowUp: 38
        if (cube.y - cube.step > map.y) {
            cube.y -= cube.step;
        }

        else {
            cube.y = map.y;
        }
    }

    if (event.keyCode === 40) {
        // ArrowDown 40
        if (cube.y + cube.height + cube.step < map.width + map.x) {
            cube.y += cube.step;
        }

        else {
            cube.y = map.width + map.x - cube.height;
        }
    }

    if (event.keyCode === 37) {
        // ArrowLeft: 37
        if (cube.x - cube.step > map.x) {
            cube.x -= cube.step;
        }

        else {
            cube.x = map.x;
        }
    }

    if (event.keyCode === 39) {
        // ArrowRight: 39
        if (cube.x + cube.width + cube.step < map.height + map.y) {
            cube.x += cube.step;
        }

        else {
            cube.x = map.height + map.y - cube.width;
        }
    }
    
    renderCube(cube); // Рендер куба каждый сдвиг
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' +  cube.trn + 's';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.backgroundColor = cube.color;

}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
}

function spawnCube(map, cube) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cube.width;

    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cube.height;

    cube.x = Math.round(Math.random() * (mapMaxX - mapMinX) + mapMinX);
    cube.y = Math.round(Math.random() * (mapMaxY - mapMinY) + mapMinY);
    return cube;
}

function renderBots(bots) {
    bots.map(bot => {
        let div = document.createElement('div');
        div.id = 'bot_' + bot.id;
        div.className = 'bot';
        document.body.append(div);
        renderBot(bot);
        // console.log(div);
    });

}

function renderBot(bot) {
    document.getElementById('bot_' + bot.id).style.top = bot.y + 'px';
    document.getElementById('bot_' + bot.id).style.left = bot.x + 'px';
    document.getElementById('bot_' + bot.id).style.transition = 'ease ' +  bot.trn + 's';
    document.getElementById('bot_' + bot.id).style.width = bot.width + 'px';
    document.getElementById('bot_' + bot.id).style.height = bot.height + 'px';
    document.getElementById('bot_' + bot.id).style.backgroundColor = bot.color;
}

function renderBuffs(buffs) {
    buffs.map(buff => {
        let div = document.createElement('div');
        div.id = 'buff_' + buff.id;
        div.className = 'buff';
        document.body.append(div);
        renderBuff(buff);
    });

}

function renderBuff(buff) {
    document.getElementById('buff_' + buff.id).style.top = buff.y + 'px';
    document.getElementById('buff_' + buff.id).style.left = buff.x + 'px';
    document.getElementById('buff_' + buff.id).style.transition = 'ease ' +  buff.trn + 's';
    document.getElementById('buff_' + buff.id).style.width = buff.width + 'px';
    document.getElementById('buff_' + buff.id).style.height = buff.height + 'px';
    document.getElementById('buff_' + buff.id).style.backgroundColor = buff.color;
}

function timeTike() {
    buffsLogic();
    botsLogic();
}

function buffsLogic() {
    buffs.push(spawnCube(map, buff));
    
    renderBuffs(buffs);
}
function botsLogic() {
    bots.push(spawnCube(map, bot));
    renderBots(bots);
}
