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
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
}).then(() =>

    loading.style.display = 'none',

).then(() =>

    load.style.display = 'none'

).then(() =>

    container.style.display = 'block'

);
