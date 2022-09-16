import Animeslist from "./Animeslist";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Searchpage = () => {
    let {SearchVal} = useParams();
    let {data: animes} = useFetch("https://api.jikan.moe/v4/anime");
    return ( 
        <div>
        <h1> Search{SearchVal} </h1>
        {animes && <Animeslist
        animes={animes.filter((anime)=>
            { return anime.title.toLowerCase().includes(SearchVal.toLowerCase())})} 
       
        title="Search Result"/>}
        </div>
     );
}
 
export default Searchpage;