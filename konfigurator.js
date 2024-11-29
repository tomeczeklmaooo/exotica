function generuj()
{
	var tekst = document.getElementById('text_grawer').value;
	var rozmiar = document.getElementsByName('rozmiar_terrarium');
	var dodatki = document.getElementsByName('dodatek');

	var preview_container = document.getElementById('cfg-preview');

	var terrarium_anim = 'terrarium_in 1s ease';

	var kwadrat = document.createElement('div');

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
			preview_container.removeChild(preview_container.children[0]);
			preview_container.appendChild(kwadrat);
			kwadrat.style.animation = terrarium_anim;
			kwadrat.innerHTML = tekst;
			kwadrat.style.width = '180px';
			kwadrat.style.height = '120px';
			break;
		case 'MEDIUM':
			preview_container.removeChild(preview_container.children[0]);
			preview_container.appendChild(kwadrat);
			kwadrat.style.animation = terrarium_anim;
			kwadrat.innerHTML = tekst;
			kwadrat.style.width = '300px';
			kwadrat.style.height = '150px';
			break;
		case 'LARGE':
			preview_container.removeChild(preview_container.children[0]);
			preview_container.appendChild(kwadrat);
			kwadrat.style.animation = terrarium_anim;
			kwadrat.innerHTML = tekst;
			kwadrat.style.width = '450px';
			kwadrat.style.height = '240px';
			break;
		case 'EXTRALARGE':
			preview_container.removeChild(preview_container.children[0]);
			preview_container.appendChild(kwadrat);
			kwadrat.style.animation = terrarium_anim;
			kwadrat.innerHTML = tekst;
			kwadrat.style.width = '600px';
			kwadrat.style.height = '300px';
			break;
	}

	console.log(tekst);
	console.log(rozmiar);
	console.log(dodatki);
	console.log(dodatki_wybrane);
}