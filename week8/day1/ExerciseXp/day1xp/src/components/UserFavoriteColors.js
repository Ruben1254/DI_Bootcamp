import React from "react"


const Animals = (props) => {
    const ani = props.user.fav_animals
   
    return (
        <ul>
            {ani.map((anima, i) => {
                return (
                    <li key={i}>{anima}</li>
                )
            })
        }
        </ul>    
    )
}

export default Animals