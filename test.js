var options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzM5NzQwMjk2YTdkNWU5YTRlYjhlZjU1ODZiMzJjMiIsIm5iZiI6MTcyMzA5NjQ1Ni4wMTE2MzksInN1YiI6IjY2YTcyZWU0YWNkYzZjZGFmYWIxOWRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TDXBSYS4CWW-MH2DE14gYRHQ5mV_un9foW8rhfWAnf8'
  }
};


//https://image.tmdb.org/t/p/w400/
fetch(`https://api.themoviedb.org/3/discover/movie?with_companies=10342&include_adult=false&language=en`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  const fetchImageUrls = async () => {
  
    const requests = [
      fetch('https://api.themoviedb.org/3/search/tv?query=jujutsu&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/tv?query=family%20guy&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/movie?query=deadpool%20%26%20wolverine&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/tv?query=a%20love%20so%20beautiful&first_air_date_year=2017&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/movie?query=howl%27s%20moving%20castle&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/movie?query=kuyang&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/tv?query=alchemy%20of%20souls&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/movie?query=65&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/movie?query=trigger%20warning&include_adult=false&language=en-US&page=1', options),
      fetch('https://api.themoviedb.org/3/search/movie?query=the%20wall&include_adult=false&language=en-US&page=1', options)
    ];
  
    try {
      const responses = await Promise.all(requests);
      const jsonResponses = await Promise.all(responses.map(res => res.json()));
      
      // Extract the first image URL from each response
      const imageUrls = jsonResponses.map(response => {
        if (response.results && response.results.length > 0) {
          return `https://image.tmdb.org/t/p/w500${response.results[0].poster_path}`;
        }
        return null;
      });
  
      // Filter out null values (in case no image was found)
      const validImageUrls = imageUrls.filter(url => url !== null);
      
      for (let i = 0; i < validImageUrls.length; i++) {
        document.body.insertAdjacentHTML("beforeend", `
          <div>
            <img src="${validImageUrls[i]}"/>
          </div>`)
      }
      // Now you can do something with the image URLs, such as displaying them
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchImageUrls();
  