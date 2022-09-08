import { useEffect } from "react";
import useFetch from "./useFetch";
import Animeslist from "./Animeslist";
import { useState } from "react";

const Wishlist = () => {
    let {data : animes ,pending,error}= useFetch("https://api.jikan.moe/v4/anime");
    
    const [wish, setWish] = useState(null);

       useEffect(()=>{

                  var wish= localStorage.getItem("wish");
                  wish= JSON.parse(wish);
                  setWish(wish);
           
                    
       },[])
    return ( 
        <div>
               {pending && <h1 >Loding....</h1>}
                {animes && <Animeslist animes= {animes.filter((anime)=> {return wish.includes(anime.mal_id)})}/>}
                 {error && <h1>{error}</h1>}
        </div>
     );
}
 
export default Wishlist;