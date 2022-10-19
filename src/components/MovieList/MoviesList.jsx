export const MoviesList = ({ moviesList }) => {
  return (
    <div>
      <aside>
        <h1>Trending today</h1>
        <ul>
          {moviesList.map(movie => {
            console.log(movie, movie.id, movie.title);
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </aside>
    </div>
  );
};
