function generuj()
{
	var tekst = document.getElementById('text_grawer').value;
	var rozmiar = document.getElementsByName('rozmiar_terrarium');
	var teren = document.getElementById('rodzaj_terenu').value;
	var dodatki = document.getElementsByName('dodatek');

	var preview_container = document.getElementById('cfg-preview');

	var terrarium_anim = 'terrarium_in 1s ease';

	var terrarium_container = document.createElement('div');

	var terrarium = document.createElement('img');
	terrarium.src = 'https://p.novaskin.me/3869483074.png?class=thumbnail';

	var grawer = document.createElement('span');

	var dodatki_wybrane = [];

	for (var i = 0; i < rozmiar.length; i++)
	{
		if (rozmiar[i].checked)
		{
			rozmiar = rozmiar[i].value;
		}
	}

	for (var i = 0; i < dodatki.length; i++)
	{
		if (dodatki[i].checked)
		{
			dodatki_wybrane.push(dodatki[i].value);
		}
	}

	switch (rozmiar)
	{
		case 'SMALL':
			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '180px', '120px');
			break;
		case 'MEDIUM':
			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '300px', '200px');
			break;
		case 'LARGE':
			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '400px', '300px');
			break;
		case 'EXTRALARGE':
			dodaj_terrarium(preview_container, terrarium_container, terrarium, terrarium_anim, grawer, tekst, '600px', '400px');
			break;
	}
	
	for (var i = 0; i < dodatki_wybrane.length; i++)
	{
		switch (dodatki_wybrane[i])
		{
			case 'stone':
				dodaj_dodatek(terrarium_container, 'exotica_logo', true);
				break;
			case 'bush':
				dodaj_dodatek(terrarium_container, 'exotica_logo', true);
				break;
			case 'plant':
				dodaj_dodatek(terrarium_container, 'exotica_logo', true);
				break;
		}
	}

	console.log(tekst);
	console.log(rozmiar);
	console.log(teren);
	console.log(dodatki);
	console.log(dodatki_wybrane);
}

function dodaj_terrarium(_container, _append, _terrarium, _anim, _fgtxt, _text, _width, _height)
{
	_container.innerHTML = '';
	_container.appendChild(_append);
	_append.appendChild(_terrarium);
	_append.appendChild(_fgtxt);
	_append.style.animation = _anim;
	_fgtxt.innerHTML = _text;
	_terrarium.style.width = _width;
	_terrarium.style.height = _height;
}

function dodaj_dodatek(_container, _dodatek, _ismovable)
{
	var elem = document.createElement('img');
	elem.src = `img/${_dodatek}.png`;
	elem.id = 'draggable';
	elem.style.position = 'absolute';
	elem.style.width = '50px';
	elem.style.height = '50px';
	_container.appendChild(elem);
	if (_ismovable) enable_drag(elem);
}

function enable_drag(_elem) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(_elem.id))
	{
		document.getElementById(_elem.id).onmousedown = drag_mousedown;
	}
	else { _elem.onmousedown = drag_mousedown; }

	function drag_mousedown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = drag_element_close;
		document.onmousemove = element_drag;
	}

	function element_drag(e)
	{
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		_elem.style.top = (_elem.offsetTop - pos2) + "px";
		_elem.style.left = (_elem.offsetLeft - pos1) + "px";
	}

	function drag_element_close()
	{
		document.onmouseup = null;
		document.onmousemove = null;
	}
}