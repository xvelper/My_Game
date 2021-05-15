document.onkeydown = checkButton;

function checkButton(event) {

    cube.oldX = cube.x;
    cube.oldY = cube.y;

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;

    let mapRight = map.x + map.width;
    let mapBottom = map.y + map.height;


    if (event.keyCode === 38) {
        // key: "ArrowUp"
        if (map.y < cube.y) {
            if ((cube.y - map.y) < cube.step) {
                cube.y -= cube.y - map.y;
            }

            else {
                cube.y -= cube.step;
            }
        }
    }

    else if (event.keyCode === 40) {
        // key: "ArrowDown"
        if (cubeBottom < mapBottom) {
            if ((mapBottom - cubeBottom) < cube.step) {
                cube.y += mapBottom - cubeBottom;
            }

            else {
                cube.y += cube.step;
            }
        }
    }

    else if (event.keyCode === 37) {
        // key: "ArrowLeft"
        
        if (map.x < cube.x) {
            if ((cube.x - map.x) < cube.step) {
                cube.x -= cube.x - map.x;
            }

            else {
                cube.x -= cube.step;
            }
        }
    }

    else if (event.keyCode === 39) {
        // key: "ArrowRight"
        if (cubeRight < mapRight) {
            if ((mapRight - cubeRight) < cube.step) {
                cube.x += mapRight - cubeRight;
            }

            else {
                cube.x += cube.step;
            }
        }
    }

    renderCube(cube);

    initShot();
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trn + 's';
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

    cube.x = Math.round(
        mapMinX +
        Math.random() * (mapMaxX - mapMinX)
        );

    cube.y = Math.round(
        mapMinY +
        Math.random() * (mapMaxY - mapMinY)
        );
    return cube;
}

function renderBots(bots) {
    bots.map(bot => {
        if (!document.getElementById('bot_' + bot.id)) {
            let div = document.createElement('div');
            div.id = 'bot_' + bot.id;
            div.className = 'bot';
            document.body.append(div);
        }

        renderBot(bot);
    });
}

function renderBot(bot) {
    document.getElementById('bot_' + bot.id).style.top = bot.y + 'px';
    document.getElementById('bot_' + bot.id).style.left = bot.x + 'px';
    document.getElementById('bot_' + bot.id).style.transition = 'ease ' + bot.trn + 's';
    document.getElementById('bot_' + bot.id).style.width = bot.width + 'px';
    document.getElementById('bot_' + bot.id).style.height = bot.height + 'px';
    document.getElementById('bot_' + bot.id).style.backgroundColor = bot.color;
}

function renderBuffs(buffs) {
    buffs.map(buff => {
        if (!document.getElementById('buff_' + buff.id)) {
            let div = document.createElement('div');
            div.id = 'buff_' + buff.id;
            div.className = 'buff';
            document.body.append(div);
        }

        renderBuff(buff);
    });
}

function renderBuff(buff) {
    document.getElementById('buff_' + buff.id).style.top = buff.y + 'px';
    document.getElementById('buff_' + buff.id).style.left = buff.x + 'px';
    document.getElementById('buff_' + buff.id).style.transition = 'ease ' + buff.trn + 's';
    document.getElementById('buff_' + buff.id).style.width = buff.width + 'px';
    document.getElementById('buff_' + buff.id).style.height = buff.height + 'px';
    document.getElementById('buff_' + buff.id).style.backgroundColor = buff.color;
}

function timeTike() {
    // console.log(new Date().getSeconds());
    buffsLogic();
    // botsLogic();
}

function buffsLogic() {
    buffs.push(spawnCube(map, buff));
    renderBuffs(buffs);
}

function botsLogic() {
    bots.push(spawnCube(map, bot));
    renderBots(bots);
}


function initShot() {

    let cubeBottom = cube.y + cube.height;
    let cubeRight = cube.x + cube.width;

    buffs.map((buff, index) => {

        let buffBottom = buff.y + buff.height;
        let buffRight = buff.x + buff.width;

        if ((buff.y > cube.oldY && buff.y < cube.y) ||
        (buff.y > cube.y && buff.y < cube.oldY)) {
            if ((cube.x < buffRight && cube.x > buff.x) || 
            (cubeRight < buffRight && cubeRight > buff.x)) {
                shotBuff(buff);
                buffs.splice(index, 1);
                
                console.log(buffs);
            }
        }
        if ((buff.x > cube.oldX && buff.x < cube.x) || 
        (buff.x > cube.x && buff.x < cube.oldX)) {

            if ((cube.y < buffBottom && cube.y > buff.y) || 
            (cubeBottom < buffBottom && cubeBottom > buff.y)) {
                shotBuff(buff);
                buffs.splice(index, 1);

                console.log(buffs);
            }
        }
    });
}

function shotBuff(buff) {
    console.log('shotBuff');
    document.getElementById('buff_' + buff.id).remove();
}