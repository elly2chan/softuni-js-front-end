function movies(commands) {
    let movies = {};

    for (let command of commands) {
        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ')[1];
            movies[movieName] = {};
            movies[movieName].name = movieName;
        } else if (command.includes('directedBy')) {
            let [movieName, director] = command.split(' directedBy ');
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName].director = director;
            }
        } else if (command.includes('onDate')) {
            let [movieName, date] = command.split(' onDate ');
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName].date = date;
            }
        }
    }
    for (key in movies) {
        if (movies[key].hasOwnProperty("name") && movies[key].hasOwnProperty("director") && movies[key].hasOwnProperty("date")) {
            console.log(JSON.stringify(movies[key]));
        }
    }
}

movies(
    [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
)