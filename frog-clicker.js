var cvars = {
	clicks: 0,
	points: 0,
	points_goal: 100,
	points_not_reached: true
};

function randomint(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function clicker_handler()
{
	cvars.clicks++;
	if ((cvars.clicks % 5) == 0)
	{
		var random_point_amount = randomint(1, 6);
		if (cvars.points_goal - cvars.points < random_point_amount) cvars.points += (cvars.points_goal - cvars.points);
		else cvars.points += random_point_amount;
		cvars.points_not_reached = true;
	}
	if (cvars.points == cvars.points_goal && cvars.points_not_reached)
	{
		reward();
		cvars.points_goal += 100;
		cvars.points_not_reached = false;
	}
}

function reward()
{
	var rcontainer = document.getElementById('reward');
	rcontainer.innerHTML = `<b>Nagroda:</b> ${randomint(30, 80)} punktów EXOTICA za zdobycie ${cvars.points} punktów!`;
}

function display()
{
	var clicks_span = document.getElementById('clicks');
	var points_span = document.getElementById('points');

	clicks_span.innerHTML = `<b>Kliknięcia:</b><br>${cvars.clicks}`;

	points_span.innerHTML = `<b>Punkty:</b><br>${cvars.points}`;

	setTimeout(display, 100);
}

window.onload = function()
{
	display();
}