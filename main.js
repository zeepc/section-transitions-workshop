let hide = document.getElementsByClassName('hidden');
let show = document.getElementsByClassName('show');
let images = document.getElementsByTagName('img');
let paras = document.getElementsByTagName('p');
let quote = document.getElementsByClassName('quote');

window.addEventListener('scroll', function(e) {

		for(i=0;i < hide.length;i++){
		if (document.documentElement.scrollTop > 125) {
		hide[i].className ='show';
		}
	}
});

console.log(hide);
