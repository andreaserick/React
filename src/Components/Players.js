import React from "react"
import Counter from "./Counter"

const Players=props =>{


    return (
        <div class="player">
        <span class="player-name" >
        <button class="remove-player">✖</button>{props.name}</span>
        <Counter/>
        </div>
          

          

          );
          
        
          
    
};
export default Players;