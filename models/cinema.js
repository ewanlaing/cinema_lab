const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  const titles = this.films.map((film) => {return film.title;});
  return titles;
}

Cinema.prototype.getFilmByTitle = function (title) {
  const result = this.films.filter((film) => {return film.title === title;});
  return result[0];
}

Cinema.prototype.getFilmByGenre = function (genre) {
  const result = this.films.filter((film) => {return film.genre === genre;});
  return result;
}

Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return total;
}

Cinema.prototype.checkFilmByYear = function(year) {
  const result = this.films.filter((film) => {return film.year === year;});
  if(result.length > 0){
    return true;
  }else{
    return false;
  };
}

Cinema.prototype.isMinLength = function(length) {
  const result = this.films.filter((film) => {return film.length >= length;});
  if(result.length < this.films.length){
    return false;
  }else{
    return true;
  }
}

module.exports = Cinema;
