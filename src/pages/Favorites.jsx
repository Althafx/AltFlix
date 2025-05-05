import "../css/Favorites.css"
import { useMovieContext } from "../contexts/movieContext"
import MovieCard from "../components/MovieCard";


function Favorites(){
    const {favorites} = useMovieContext();

    if(favorites.length > 0){
        return <div className="favorites">
            <h1>YOUR FAVORITE MOVIES</h1>
        <div className="movie-grid text-xl">
        {favorites.map((movie)=>(
            <MovieCard movie={movie} key={movie.id}/>
        ))}
    </div>
    </div>
    
    }
    else{
    return <div className="favorites-empty">
        <h1>No favorite movies yet</h1>
        <p>added movies will appear here...start adding your favorite movies</p>
    </div>
    }
}

export default Favorites