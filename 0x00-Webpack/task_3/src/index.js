import $ from 'jquery';
import _ from 'lodash'; // Import lodash for _.debounce

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>'); // Corrected button tag
$('body').append('<p id="count"></p>'); // Corrected id attribute
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
    const button = document.querySelector('button');
    const count = document.getElementById('count'); // Corrected getElementById parameter
    let num = 0;

    $(button).on('click', _.debounce(function() {
        count.innerHTML = ++num;
    }, 300));
}

updateCounter(); // Call the updateCounter function to attach the event listener

