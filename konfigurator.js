

let plant_amt = 0;
let ship_amt = 0;
let lamp_amt = 0;
let cave_amt = 0;
let wood_amt = 0;
let palm_amt = 0;
let grass_amt = 0;
let accessories = [];

function update_display() {
    document.getElementById('plant_amt').innerText = plant_amt;
    document.getElementById('ship_amt').innerText = ship_amt;
    document.getElementById('lamp_amt').innerText = lamp_amt;
    document.getElementById('cave_amt').innerText = cave_amt;
    document.getElementById('wood_amt').innerText = wood_amt;
    document.getElementById('palm_amt').innerText = palm_amt;
    document.getElementById('grass_amt').innerText = grass_amt;
    terrarium_size();
	terrain_img();
	var tekst = document.getElementById('text_grawer').value;
	var grawer = document.createElement('span');
	const terrarium = document.getElementById('cfg-preview');
	terrarium.appendChild(grawer);
	grawer.innerHTML = '';
	grawer.innerHTML = tekst;
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
            img_url = 'img/mech.png';;
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

document.getElementById('add_wood').addEventListener('click', function() {
    wood_amt++;
    update_display();
    create_dodatek('wood');
});

document.getElementById('remove_wood').addEventListener('click', function() {
    if (wood_amt > 0) {
        wood_amt--;
        update_display();
        remove_dodatek('wood');
    }
});

document.getElementById('add_palm').addEventListener('click', function() {
    palm_amt++;
    update_display();
    create_dodatek('palm');
});

document.getElementById('remove_palm').addEventListener('click', function() {
    if (palm_amt > 0) {
        palm_amt--;
        update_display();
        remove_dodatek('palm');
    }
});

document.getElementById('add_grass').addEventListener('click', function() {
    grass_amt++;
    update_display();
    create_dodatek('grass');
});

document.getElementById('remove_grass').addEventListener('click', function() {
    if (grass_amt > 0) {
        grass_amt--;
        update_display();
        remove_dodatek('grass');
    }
});

// function click_handler(dodatek, amount)
// {
// 	document.getElementById(`add_${dodatek}`).addEventListener('click', function() {
// 		amount++;
// 		update_display();
// 		create_dodatek(dodatek);
// 	});
	
// 	document.getElementById(`remove_${dodatek}`).addEventListener('click', function() {
// 		if (amount > 0) {
// 			amount--;
// 			update_display();
// 			remove_dodatek(dodatek);
// 		}
// 	});
// }

// click_handler('plant', plant_amt);
// click_handler('ship', ship_amt);
// click_handler('lamp', lamp_amt);
// click_handler('cave', cave_amt);

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