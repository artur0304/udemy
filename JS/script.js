const numberOfFilmes = prompt("Сколько фильмов вы уже смотрели?", "");


let personalMovieDB={
    count : numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("Один из последних просмотренных фильмов","");
const ratingLastFil = prompt("На сколько оцените его","");

personalMovieDB.movies[lastFilm]=ratingLastFil;
console.log(personalMovieDB);