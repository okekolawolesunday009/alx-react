import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard/</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</p>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter(){
	const button = document.querySelector('button');
	const count = document.getElementById('#count');
	let num = 0;


	$(button).on('click', _.debounce(function() {
		count.innerHTML = `${++num} clicks on the button`
		
	}, 300));
}

updateCounter();




