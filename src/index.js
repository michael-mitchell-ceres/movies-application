"use strict";

const {getMovies} = require('./api.js');

function renderMovies(movies) {

    getMovies().then((movies) => {

        $('#loading').html('').css('display', 'none');
        $('.movies').html('');

        $('.addMovieInputs').css('display', 'block').css('text-align', 'center');

        movies.forEach(({title, rating, id})=> {
            let movieItems = '';

            movieItems += `<div class="card">
                                <div class="card-body d-flex flex-column align-items-center justify-content-center p-1">
                                    <h4 class="card-title"> ${title}</h4>
                                        <div class="mt-auto">
                                            <div class="card-text ">
                                                    Rating: ${rating}
                                            </div>
                                <!-- Button trigger modal -->
                                            <button type="button" class="btn btn-primary editBtn justify-content-end" data-toggle="modal" data-target="#exampleModal">
                                                Edit
                                            </button>
                                        </div>
                            </div>`;
            $('.movies').append(movieItems);
            })
    });
}





























































//     let htmlBuild = "";
//
//     movies.forEach(({title, rating, id}) => {
//
//
//
//         htmlBuild += `<div id= ${id}>`;
//         htmlBuild += "<p> Title: </p>";
//         htmlBuild += `<p> ${title} </p>`;
//         htmlBuild += "<p> rating: </p>";
//         htmlBuild += `<p>  ${rating} </p>`;
//         htmlBuild += `<button class="delete-button">DELETE ${id}</button>`;
//         htmlBuild += "</div>";
//
//
//     });
//     return htmlBuild;
// }
//
// getMovies().then((movies) => {
//     $('.delete-button').on('click', function () {
//         console.log(id);
//         beGone($(this).attr('id'))
//     });
//
//     $('#container').append(renderMovies(movies));
//
//
//
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.');
//     console.log(error);
// }).then(() =>
//
//         loading.style.display = 'none',
//     title.style.display = "none"
// ).then(() =>
//
//     load.style.display = 'none'
// ).then(() =>
//
//     container.style.display = 'block'
// );
//
// ////////////////// create new //////////////////
//
// getMovies().then((movies) => {
//
//     title.style.display = "block";
//
// });
//
//
// $('#user-add').on('click', function () {
//     const input = $('#input').val();
//
//     const input1 = $('#input1').val();
//
//     const url = '/api/movies';
//
//     const blogPost = {
//         title: input,
//         rating: input1
//     };
//
//
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(blogPost),
//     };
//     fetch(url, options);
//     getMovies()
//         .then((movies) => {$('#container').html(renderMovies(movies))})
//         .catch(() => alert('Error please try again'));
// });
//
// /////////////////////////// EDIT MOVIES /////////////////////////////////////////////////////
//
//
// $('.editBtn').on('click', function () {
//     let targetedMovieTitle = $(this).parents('.card-body').children('.card-title').text();
//
//     // Adds movie title to the modal input value
//     $('#editTitle').val(targetedMovieTitle.trim());
//
//
//     function getIdNumber() {
//         return fetch('api/movies').then(data => {
//             return data.json()
//         })
//             .then(data => {
//                 for (let i = 0; i < data.length; i++) {
//                     if (data[i].title === targetedMovieTitle.slice(1)) {
//                         return data[i].id
//                     }
//                 }
//             });
//     }
//
//
// /////////////////////////// DELETE /////////////////////////////////////////////////
//
//     function beGone(id){
//
//         // const input2 = $('#input2').val();
//
//         const url = `/api/movies/${id}`;
//         const options = {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };
//         fetch(url, options);
//         getMovies()
//             .then((movies) => {$('#container').html(renderMovies(movies))})
//             .catch( (data) => console.log('Post unsuccessful', data) /* handle errors */);
//
//     }
//
//     $('#user-delete').on('click', function () {
// //  need to pass the id number to the begone function
//         beGone();
//
//     });
// });