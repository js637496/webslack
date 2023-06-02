
let webSlackLink = $('a:contains("open this link in your browser")');
if (!!webSlackLink && webSlackLink.length > 0)
	webSlackLink[0].click();
