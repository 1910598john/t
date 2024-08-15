const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM5NzQwMjk2YTdkNWU5YTRlYjhlZjU1ODZiMzJjMiIsIm5iZiI6MTcyMzA5NjQ1Ni4wMTE2MzksInN1YiI6IjY2YTcyZWU0YWNkYzZjZGFmYWIxOWRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TDXBSYS4CWW-MH2DE14gYRHQ5mV_un9foW8rhfWAnf8'
  }
};

fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=16&language=en&&with_original_language=ja&include_adult=false&sort_by=popularity.desc`, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));