export const MoviesList = ({ title, moviesList }) => {
  return (
    <div>
      <aside>
        <h1>{title}</h1>
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
