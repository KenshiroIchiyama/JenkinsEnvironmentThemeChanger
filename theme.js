var DEFAULT_HEADER_COLOR = '#000000';
var DEV_HEADER_COLOR     = '#00FF00';
var STAGING_HEADER_COLOR = '#0000FF';
var PROD_HEADER_COLOR    = '#FF0000';

window.addEventListener("load", function()
{
	var title =  location.href;
	var header = document.getElementById('header');
	
	if( title.match(/Dev/) )
	{
		header.style.backgroundColor = DEV_HEADER_COLOR;
	}
	else if( title.match(/Staging/) )
	{
		header.style.backgroundColor = STAGING_HEADER_COLOR;
	}
	else if( title.match(/Prod/) )
	{
		header.style.backgroundColor = PROD_HEADER_COLOR;
	}
	else
	{
		header.style.backgroundColor = DEFAULT_HEADER_COLOR;
	}
}, false);
