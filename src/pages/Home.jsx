import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"
import { searchMovies,getPopularMovies } from "../services/api";

function Home({}){
    const [searchQuery,setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const laodPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }finally{
                setLoading(false)
            }
        }
        laodPopularMovies()
    },[])





    const handleSearch = (e) => {
        e.preventDefault()
        // setSearchQuery(value)
    }


    
    return <>
    <div className="home flex flex-col justify-center items-center">
        
        
        <form onSubmit={handleSearch} className="search-form text-2xl mt-20">
            <input  type="text"
             placeholder="Search for movies..." 
             className="search-input"
             value = {searchQuery} 
             onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button className="search-button" type="submit">Search</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ?  <div className="loading">Loading...</div>: <div className="movie-grid text-xl">
            {movies.map((movie)=>(
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>}

        


    </div>
    </>
}

export default Home