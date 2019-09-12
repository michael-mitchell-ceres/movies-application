"use strict";

/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');




getMovies().then((movies) => {
  console.log('Here are all the movies:');
  console.log(movies);

    $(document).ready(function () {
      let htmlBuild = "";

      movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);


        htmlBuild += "<div id= movie-display>";
        htmlBuild += "<h1> Title: </h1>";
        htmlBuild += `<p> ${title} </p>`;
        htmlBuild += "<h1> rating: </h1>";
        htmlBuild += `<p>  ${rating} </p>`;
        htmlBuild += "</div>";


      });
      $('#container').html(htmlBuild);
  });


}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
}).then(() =>

    loading.style.display = 'none',
    title.style.display = "none",
    rating.style.display = "none"

).then(() =>

    load.style.display = 'none'

).then(() =>

    container.style.display = 'block'

);


////////////////// create new //////////////////

getMovies().then((movies) =>


    title.style.display = "block",
    rating.style.display = "block"


);




















/////////////////////////////// notes ////////////////////////
//
// function renderCoffee(coffee) {
//
//   var html = '';
//   html += '<div class="col s6 roast-out"><h5 class="coffee-name text">' + coffee.name;
//   html += ' <small class="coffee-roast">' + coffee.roast + '</small></h5></div>';
//   return html;
// }
//
// function renderCoffees(coffees) {
//   var html = '<div>';
//   for (var i = coffees.length - 1; i >= 0; i--) {
//     html += renderCoffee(coffees[i]);
//     html += '</div>'
//   }
//   return html;
// }
//
// function updateCoffees(e) {
//   var selectedRoast = roastSelection.value;
//   var filteredCoffees = [];
//   if (e === 'all') {
//     coffees.forEach(function (coffee) {
//       filteredCoffees.push(coffee);
//     })
//   } else coffees.forEach(function (coffee) {
//     if (coffee.roast === selectedRoast) {
//       filteredCoffees.push(coffee);
//     }
//   });
//   content.innerHTML = renderCoffees(filteredCoffees);
// }
//
// function searchCoffees(value) {
//   var filteredCoffees = [];
//   for (var i = 0; i < coffees.length; i++) {
//     if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
//       filteredCoffees.push(coffees[i]);
//     }
//   }
//   content.innerHTML = renderCoffees(filteredCoffees);
// }
//
// function addCoffee() {
//   var coffee = {
//     id: '',
//     name: '',
//     roast: ''
//   };
//   var temp = document.getElementById('add-coffee-name').value;
//   coffee.id = coffees.length + 1;
//   coffee.name = formatNewCoffee(temp);
//   coffee.roast = document.getElementById('add-coffee-roast-select').value;
//   coffees.push(coffee);
//   arrangeCoffees();
//   showAllCoffees();
// }