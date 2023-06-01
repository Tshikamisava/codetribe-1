import React from "react";
import Carousel from 'carousel-react-rcdev'
import { Link } from "react-router-dom";
import "./styles.css"

const Header = () => {
    return (
        <div className="content">
            <div className="img">
            <img src="https://reactjs.org/logo-og.png" alt="React Logo" />
            </div>

            <div className="about">
                <h1 class="name">Why me</h1>
                <p>The LaPerm is a breed of cat. A LaPerm's fur is curly,<br/> 
                    with the tightest curls being on the throat <br/>and on the base of the ears.
                     LaPerms come in many colors and patterns. <br/>
                    LaPerms generally have a very affectionate personality</p><br/><br/>

                    <p>The LaPerm is a breed of cat. A LaPerm's fur is curly,<br/> 
                    with the tightest curls being on the throat <br/>and on the base of the ears.
                     LaPerms come in many colors and patterns. <br/>
                    LaPerms generally have a very affectionate personality</p>
            </div>

            <div className="button">
            <button>schedule a call</button>
            </div>

            <div className="services">
                <h1>Latest Work</h1>
                <Carousel>
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
    </Carousel>
    <a href="">view all</a>
            </div>
      </div>
   
    )
}
export default Header