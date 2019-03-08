var DEFAULT_HEADER_COLOR = '#757575';
var DEV_HEADER_COLOR     = '#04B45F';
var STAGING_HEADER_COLOR = '#2E2EFE';
var PROD_HEADER_COLOR    = '#FF0000';

window.addEventListener("load", function()
{
	var title =  location.href;
	var header = document.getElementById('header');
	
	if( title.match(/Dev/) )
	{
		header.style.backgroundColor = DEV_HEADER_COLOR;
	}
	else if( title.match(/Staging/) || title.match(/DeployGate/) )
	{
		header.style.backgroundColor = STAGING_HEADER_COLOR;
	}
	else if( title.match(/Prod/) || title.match(/D_Database.*Reset/) )
	{
		header.style.backgroundColor = PROD_HEADER_COLOR;
	}
	else
	{
		header.style.backgroundColor = DEFAULT_HEADER_COLOR;
	}
	
	if( title.match(/Prod.*build\?/) )
	{
		alert('本番環境に対しての操作をしようとしています。注意してください！');
	}
	
	if( title.match(/D_Database.*Reset.*build\?/) )
	{
		alert('開発環境のデータベースをリセットしようとしています。注意してください！');
	}
}, false);
