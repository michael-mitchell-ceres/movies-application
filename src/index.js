"use strict";

/**
 * es6 modules and imports
 */


/**
 * require style imports
 */
const {getMovies} = require('./api.js');




    $(document).ready(function () {

      function renderMovies(movies) {
        let htmlBuild = "";

        movies.forEach(({title, rating, id}) => {
          // console.log(`id#${id} - ${title} - rating: ${rating}`);


          htmlBuild += "<div id= movie-display>";
          htmlBuild += "<p> Title: </p>";
          htmlBuild += `<p> ${title} </p>`;
          htmlBuild += "<p> rating: </p>";
          htmlBuild += `<p>  ${rating} </p>`;
          htmlBuild += "</div>";


        });
        return htmlBuild;
      };

      getMovies().then((movies) => {
        // console.log('Here are all the movies:');
        // console.log(movies);


        $('#container').html(htmlBuild);

  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  }).then(() =>

          loading.style.display = 'none',
      title.style.display = "none"
  ).then(() =>

      load.style.display = 'none'
  ).then(() =>

      container.style.display = 'block'
  )});



////////////////// create new //////////////////

getMovies().then((movies) =>


    title.style.display = "block"


);


$('#user-add').click(function () {


  const input = $('#input').val();

  const input1 = $('#input1').val();

  const blogPost = {
    title: input,
    rating: input1
  };

// getMovies().then((blogPost) =>
//
//  // container.append = `<div> <p>Title: ${input}</p> <p> Rating: ${input1}</p> </div>`
//
//   // $('#container').append(userMovie)
// );



  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogPost),
  };
  fetch('/api/movies', options)
      .then(getMovies)
      .then(renderMovies)
      .catch(() => alert('Error please try again'));

  // const url = '/posts';






});




















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