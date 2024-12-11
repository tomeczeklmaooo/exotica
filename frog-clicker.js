var cvars = {
	clicks: 0,
	experience: 0,
	experience_required: 100,
	experience_total: 0,
	level: 1,
	level_multiplier: 2.4
};

function randomint(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function clicker_handler()
{
	cvars.clicks++;
	if ((cvars.clicks % 5) == 0)
	{
		cvars.experience += randomint(1, 6);
	}
	if (cvars.experience >= cvars.experience_required)
	{
		cvars.level++;
		cvars.experience_total += cvars.experience;	
		cvars.experience = 0;
		cvars.experience_required = Math.floor(cvars.experience_required * cvars.level_multiplier);
	}
}

function display()
{
	var elClicks = document.getElementById('clicks');
	var elExperience = document.getElementById('experience');
	var elLevel = document.getElementById('level');

	elClicks.innerHTML = `Clicks:<br>${cvars.clicks}`;

	elExperience.innerHTML = `Experience:<br>${cvars.experience}/${cvars.experience_required}`;

	elLevel.innerHTML = `Level:<br>${cvars.level}`;

	setTimeout(display, 100);
}

window.onload = function()
{
	display();
}