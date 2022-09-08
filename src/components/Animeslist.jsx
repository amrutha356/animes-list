import { useState } from "react";
import { useEffect } from "react";
import wishlist from "../images/wishlist.png"

const Animeslist = ({animes}) => {
                   
    const[wish,setWish]= useState([]);


                useEffect(()=>{
                            if (localStorage.getItem("wish")==null)            //if wish is not present before 
                            {
                                localStorage.setItem("wish","[]");              // then only you add wish array
                            }
              
                },[])
                let handleWishlist= (id)=>{
                    let x= localStorage.getItem("wish");
                    x = JSON.parse(x);                           //converting of json to js

                    if(!x.includes(id))                         // if id is not present then we added
                    {
                        alert("Added to wishlist");
                        x.push(id);
                        x= JSON.stringify(x);
                        localStorage.setItem("wish",x);
                        console.log(x, typeof x);
                        
                    }
                    else
                    {
                           alert("removed from the wishlist");
                           let i =   x.indexOf(id);
                           x.splice(i,1);
                           x= JSON.stringify(x);
                           localStorage.setItem("wish",x);
                    }
                  
                }
                   
    return ( 
           <div className="div1">
                {
                animes.map((anime)=>{
                       return(
                        <div key={anime.mal_id} className="div2">
                            <img src={anime.images.jpg.image_url} alt=" poster not found" />
                            {/* <iframe src={anime.trailer.embed_url} frameborder="0"></iframe> */}
                            <h2>TITLE: {anime.title}</h2>
                            <h2> TYPE: {anime.type}</h2>
                            <h2>YEAR: {anime.year}</h2>

                           <button id="btn" onClick={()=>{handleWishlist(anime.mal_id)}}>&#10084;</button>
                           {/* <img src={wishlist} onClick={ ()=>handleWishlist(anime.mal_id) }/> */}
                           
                        </div>
                       )
                })
                }
           </div>
     );
}
 
export default Animeslist;