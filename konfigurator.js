// function generuj()
// {
// 	var tekst = document.getElementById('text_grawer').value;
// 	var rozmiar = document.getElementsByName('rozmiar_terrarium');
// 	var teren = document.getElementById('rodzaj_terenu').value;
// 	var dodatki = document.getElementsByName('dodatek');

// 	var preview_container = document.getElementById('cfg-preview');

// 	var terrarium_anim = 'terrarium_in 1s ease';

// 	var terrarium_container = document.createElement('div');

// 	var terrarium = document.createElement('img');
// 	terrarium.src = 'https://p.novaskin.me/3869483074.png?class=thumbnail';

// 	var grawer = document.createElement('span');

// 	var dodatki_wybrane = [];

// 	for (var i = 0; i < rozmiar.length; i++)
// 	{
// 		if (rozmiar[i].checked)
// 		{
// 			rozmiar = rozmiar[i].value;
// 		}
// 	}

// 	for (var i = 0; i < dodatki.length; i++)
// 	{
// 		if (dodatki[i].checked)
// 		{
// 			dodatki_wybrane.push(dodatki[i].value);
// 		}
// 	}

// 	switch (rozmiar)
// 	{
// 		case 'SMALL':
// 			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '180px', '120px');
// 			break;
// 		case 'MEDIUM':
// 			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '300px', '200px');
// 			break;
// 		case 'LARGE':
// 			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '400px', '300px');
// 			break;
// 		case 'EXTRALARGE':
// 			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '600px', '400px');
// 			break;
// 	}
	
// 	for (var i = 0; i < dodatki_wybrane.length; i++)
// 	{
// 		switch (dodatki_wybrane[i])
// 		{
// 			case 'stone':
// 				dodaj_dodatek(terrarium_container, 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/34/Stone_JE4.png', true);
// 				break;
// 			case 'bush':
// 				dodaj_dodatek(terrarium_container, 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b3/Jungle_Bush.png', true);
// 				break;
// 			case 'plant':
// 				dodaj_dodatek(terrarium_container, 'https://64.media.tumblr.com/695f50770f11116cb414a3aec35ca56e/c60befcf7978d30e-c7/s1280x1920/ebfad22ef14ebd572464408d85d4708c40040d9d.png', true);
// 				break;
// 		}
// 	}

// 	console.log(tekst);
// 	console.log(rozmiar);
// 	console.log(teren);
// 	console.log(dodatki);
// 	console.log(dodatki_wybrane);
// }

// function dodaj_terrarium(_container, _append, _terrarium, _anim, _fgtxt, _text, _width, _height)
// {
// 	_container.innerHTML = '';
// 	_container.appendChild(_append);
// 	_append.appendChild(_terrarium);
// 	_append.appendChild(_fgtxt);
// 	_append.style.animation = _anim;
// 	_fgtxt.innerHTML = _text;
// 	_fgtxt.style.fontFamily = 'Comic Sans MS';
// 	_fgtxt.style.fontSize = '24pt';
// 	_terrarium.style.width = _width;
// 	_terrarium.style.height = _height;
// }

// function dodaj_dodatek(_container, _dodatek, _ismovable)
// {
// 	var elem = document.createElement('img');
// 	elem.src = `${_dodatek}`
// 	elem.id = 'draggable';
// 	elem.style.position = 'absolute';
// 	elem.style.width = '50px';
// 	elem.style.height = '50px';
// 	_container.appendChild(elem);
// 	if (_ismovable) enable_drag(elem);
// }

// function enable_drag(_elem) {
// 	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
// 	if (document.getElementById(_elem.id))
// 	{
// 		document.getElementById(_elem.id).onmousedown = drag_mousedown;
// 	}
// 	else { _elem.onmousedown = drag_mousedown; }

// 	function drag_mousedown(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		pos3 = e.clientX;
// 		pos4 = e.clientY;
// 		document.onmouseup = drag_element_close;
// 		document.onmousemove = element_drag;
// 	}

// 	function element_drag(e)
// 	{
// 		e = e || window.event;
// 		e.preventDefault();
// 		pos1 = pos3 - e.clientX;
// 		pos2 = pos4 - e.clientY;
// 		pos3 = e.clientX;
// 		pos4 = e.clientY;
// 		_elem.style.top = (_elem.offsetTop - pos2) + "px";
// 		_elem.style.left = (_elem.offsetLeft - pos1) + "px";
// 	}

// 	function drag_element_close()
// 	{
// 		document.onmouseup = null;
// 		document.onmousemove = null;
// 	}
// }



let plant_amt = 0;
let ship_amt = 0;
let lamp_amt = 0;
let cave_amt = 0;
let accessories = [];

function update_display() {
    document.getElementById('plant_amt').innerText = plant_amt;
    document.getElementById('ship_amt').innerText = ship_amt;
    document.getElementById('lamp_amt').innerText = lamp_amt;
    document.getElementById('cave_amt').innerText = cave_amt;
    terrarium_size();
}

function terrarium_size() {
    const size = document.getElementById('size').value;
    const terrarium = document.getElementById('cfg-preview');

    switch (size) {
        case 'small':
            terrarium.style.width = '400px';
            terrarium.style.height = '300px';
            break;
        case 'medium':
            terrarium.style.width = '600px';
            terrarium.style.height = '400px';
            break;
        case 'large':
            terrarium.style.width = '700px';
            terrarium.style.height = '500px';
            break;
        case 'extralarge':
            terrarium.style.width = '800px';
            terrarium.style.height = '600px';
            break;
    }
}

function terrain_img() {
    const terrain = document.getElementById('terrain').value;
    const teren = document.getElementById('teren');

    let img_url = '';

    switch (terrain) {
        case 'sand':
            img_url = 'img/podloze.png';
            break;
        case 'gravel':
            img_url = 'img/podloze.png';;
            break;
        case 'grass':
            img_url = 'img/dirt.png';;
            break;
        case 'moss':
            img_url = 'img/podloze.png';;
            break;
    }

    teren.style.backgroundImage = `url(${img_url})`;
	teren.style.backgroundSize = 'cover';
}

document.getElementById('add_plant').addEventListener('click', function() {
    plant_amt++;
    update_display();
    create_dodatek('plant');
});

document.getElementById('remove_plant').addEventListener('click', function() {
    if (plant_amt > 0) {
        plant_amt--;
        update_display();
        remove_dodatek('plant');
    }
});

document.getElementById('add_ship').addEventListener('click', function() {
    ship_amt++;
    update_display();
    create_dodatek('ship');
});

document.getElementById('remove_ship').addEventListener('click', function() {
    if (ship_amt > 0) {
        ship_amt--;
        update_display();
        remove_dodatek('ship');
    }
});

document.getElementById('add_lamp').addEventListener('click', function() {
    lamp_amt++;
    update_display();
    create_dodatek('lamp');
});

document.getElementById('remove_lamp').addEventListener('click', function() {
    if (lamp_amt > 0) {
        lamp_amt--;
        update_display();
        remove_dodatek('lamp');
    }
});

document.getElementById('add_cave').addEventListener('click', function() {
    cave_amt++;
    update_display();
    create_dodatek('cave');
});

document.getElementById('remove_cave').addEventListener('click', function() {
    if (cave_amt > 0) {
        cave_amt--;
        update_display();
        remove_dodatek('cave');
    }
});

function create_dodatek(type) {
    const terrarium = document.getElementById('cfg-preview');
    const accessory = document.createElement('div');
    
    accessory.classList.add('add-on', type);
    accessory.title = `Kliknij, aby przesunąć (${type})`;

    const maxX = terrarium.clientWidth - 30;
    const maxY = terrarium.clientHeight - 30;
    const posX = Math.random() * maxX;
    const posY = Math.random() * maxY;

    accessory.style.left = `${posX}px`;
    accessory.style.top = `${posY}px`;

    terrarium.appendChild(accessory);

    enable_drag(accessory);
    accessories.push(accessory);
}

function remove_dodatek(type) {
    const terrarium = document.getElementById('cfg-preview');
    const last_dodatek = accessories.reverse().find(el => el.classList.contains(type));

    if (last_dodatek) {
        terrarium.removeChild(last_dodatek);
        accessories = accessories.filter(el => el !== last_dodatek);
    }
}

function enable_drag(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        const terrariumRect = document.getElementById('cfg-preview').getBoundingClientRect();

        if (x < terrariumRect.left) x = terrariumRect.left;
        if (x + element.offsetWidth > terrariumRect.right) x = terrariumRect.right - element.offsetWidth;
        if (y < terrariumRect.top) y = terrariumRect.top;
        if (y + element.offsetHeight > terrariumRect.bottom) y = terrariumRect.bottom - element.offsetHeight;

        element.style.left = `${x - terrariumRect.left}px`;
        element.style.top = `${y - terrariumRect.top}px`;
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        element.style.cursor = 'pointer';
    });
}