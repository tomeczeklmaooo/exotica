function generuj()
{
	var tekst = document.getElementById('text_grawer').value;
	var rozmiar = document.getElementsByName('rozmiar_terrarium');
	var teren = document.getElementById('rodzaj_terenu').value;
	var dodatki = document.getElementsByName('dodatek');

	var preview_container = document.getElementById('cfg-preview');

	var terrarium_anim = 'terrarium_in 1s ease';

	var terrarium = document.createElement('img');
	terrarium.src = 'img/terrarium.png';

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
			dodaj_terrarium(preview_container, terrarium, terrarium_anim, grawer, tekst, '180px', '120px');
			break;
		case 'MEDIUM':
			dodaj_terrarium(preview_container, terrarium, terrarium_anim, grawer, tekst, '300px', '200px');
			break;
		case 'LARGE':
			dodaj_terrarium(preview_container, terrarium, terrarium_anim, grawer, tekst, '400px', '300px');
			break;
		case 'EXTRALARGE':
			dodaj_terrarium(preview_container, terrarium, terrarium_anim, grawer, tekst, '600px', '400px');
			break;
	}

	console.log(tekst);
	console.log(rozmiar);
	console.log(teren);
	console.log(dodatki);
	console.log(dodatki_wybrane);
}

function dodaj_terrarium(_container, _append, _anim, _fgtxt, _text, _width, _height)
{
	_container.innerHTML = '';
	_container.appendChild(_append);
	_container.appendChild(_fgtxt);
	_append.style.animation = _anim;
	_fgtxt.innerHTML = `Tekst, który zostanie wygrawerowany: ${_text}`;
	_append.style.width = _width;
	_append.style.height = _height;
}