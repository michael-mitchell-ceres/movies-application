"use strict";

const {getMovies} = require('./api.js');


      function renderMovies(movies) {

        let htmlBuild = "";

        movies.forEach(({title, rating}) => {


          htmlBuild += "<div id= movie-display>";
          htmlBuild += "<p> Title: </p>";
          htmlBuild += `<p> ${title} </p>`;
          htmlBuild += "<p> rating: </p>";
          htmlBuild += `<p>  ${rating} </p>`;
          htmlBuild += "</div>";


        });
        console.log(htmlBuild);
        return htmlBuild;
      }

      getMovies().then((movies) => {

        $('#container').append(renderMovies);


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
      );


////////////////// create new //////////////////

      getMovies().then((movies) => {

        title.style.display = "block"
      });


      const input = $('#input').val();

      const input1 = $('#input1').val();

      const blogPost = {
        title: input,
        rating: input1
      };


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
          .catch(() => alert('Error please try again')


    );
  // const url = '/posts';




















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









// onst $ = require('jquery')
// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('World');
//
// /**
//  * require style imports
//  */
// const {getMovies} = require('./api.js');
//
// function refreshMovies(){
//   getMovies().then((movies) => {
//     $('#loading').html('');
//
//     console.log('Here are all the movies:');
//     movies.forEach(({title, rating, id}) => {
//       let movieItems = '';
//
//       movieItems += `<div class="card">
//                         <div class="card-body">
//                             <h4 class="card-title"> ${title}</h4>
//                             <div class="card-text">
//                             Rating: ${rating}
//                             </div>
//                             <button class="editButton">Edit Movies</button>
//                             <div class="editBox">
//                               <input class="editMovie" type="text">
//                               <select name="editRating" class="editRating">
//                                 <option value="1">1</option>
//                                 <option value="2">2</option>
//                                 <option value="3">3</option>
//                                 <option value="4">4</option>
//                                 <option value="5">5</option>
//                               </select>
//                               <button class="submitMovieEdit">Submit Changes</button>
//                             </div>
//                         </div>
//                     </div>`;
//
//       $('.movies').append(movieItems);
//       console.log(title, rating, id);
//     });
//     $(".editBox").hide(); // Hide edit input and select on load
//
//     $('.editButton').on('click', function () {
//       // console.log('Fired!')
//       $(this).next().slideToggle();
//     });
//
//
//   })
//       .catch((error) => {
//         alert('Oh no! Something went wrong.\nCheck the console for details.');
//         console.log(error);
//       });

// } // End of refreshMovies
//
// refreshMovies(); //Initial call
//
// function newMovie(movieTitle, movieRating) {
//
//   const blogPost = {title: movieTitle, rating: movieRating};
//   const url = '/api/movies';
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
//   };
//   fetch(url, options)
//       .then( (data) => console.log('Post was successful', data)/* post was created successfully */)
//       .catch( (data) => console.log('Post unsuccessful', data) /* handle errors */);
//
//
//   refreshMovies(); // Updates movies when submit is clicked
//   $('#movieTitle').val(''); // Clears out the input
//   $('#rating').val(''); // Clears out the drop down
// } // End of newMovie()
//
//
// // newMovie($('#movieTitle').val(), $('#rating').val() )
//
//
//
// $('#btn').on('click',() => newMovie($('#movieTitle').val(), $('#rating').val()) );
//
// function modify(){
//   const blogPost = {title: 'Star Wars: A New Hope Directors Cut', rating: '4'};
//   const url = '/api/movies/1';
//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
//   };
//   fetch(url, options)
//       .then( (data) => console.log('Post was successful', data)/* post was created successfully */)
//       .catch( (data) => console.log('Post unsuccessful', data) /* handle errors */);
//
// }


// $('.btn').on('click',() =>  console.log('FIRE!!!'));