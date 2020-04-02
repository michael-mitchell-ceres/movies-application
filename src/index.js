"use strict";

const {getMovies} = require('./api.js');

      function renderMovies(movies) {

        let htmlBuild = "";

        movies.forEach(({title, rating, id}) => {



          htmlBuild += `<div id= ${id}>`;
          htmlBuild += "<p> Title: </p>";
          htmlBuild += `<p> ${title} </p>`;
          htmlBuild += "<p> rating: </p>";
          htmlBuild += `<p>  ${rating} </p>`;
          htmlBuild += `<button class="delete-button">DELETE ${id}</button>`;
          htmlBuild += "</div>";


        });
        return htmlBuild;
      }

      getMovies().then((movies) => {
        $('.delete-button').on('click', function () {
          console.log(id);
          beGone($(this).attr('id'))
        });

        $('#container').append(renderMovies(movies));



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

        title.style.display = "block";

      });


$('#user-add').on('click', function () {
      const input = $('#input').val();

      const input1 = $('#input1').val();

      const url = '/api/movies';

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
      fetch(url, options);
      getMovies()
        .then((movies) => {$('#container').html(renderMovies(movies))})
        .catch(() => alert('Error please try again'));
});

/////////////////////////// EDIT MOVIES /////////////////////////////////////////////////////


$('#user-edit').on('click', function () {

  function editNow(){

    const input3 = $('#input3').val();
    const input4 = $('#input4').val();
    const input5 = $('#input5').val();

    const blogPost = {
      title: input3,
      rating: input4,
      id: input5
    };

    const url = `/api/movies/${input5}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogPost),
    };
    fetch(url, options);
    getMovies()
        .then((movies) => {$('#container').html(renderMovies(movies))})
        .catch( (data) => console.log('Post unsuccessful', data) /* handle errors */);

  }
  editNow();
});


/////////////////////////// DELETE /////////////////////////////////////////////////

$('#user-delete').on('click', function () {
function beGone(id){

  const input2 = $('#input2').val();

  const url = `/api/movies/${input2}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(url, options);
      getMovies()
      .then((movies) => {$('#container').html(renderMovies(movies))})
      .catch( (data) => console.log('Post unsuccessful', data) /* handle errors */);

}

//  need to pass the id number to the begone function
beGone()

});

