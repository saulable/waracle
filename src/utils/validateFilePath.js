const re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;

export default fileCheck => {
	const invalidurl = fileCheck
	.split(',')
	.map(url => url.trim())
	.filter(url => url.length && re.test(url) === false);

if (invalidurl.length) {
	return 'This is an invalid URL, please enter a valid url.';
}
return;
}
