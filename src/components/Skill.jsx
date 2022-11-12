import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import js from '../assets/js.svg'
import react from '../assets/react.png'
import ts from '../assets/ts.svg'
import bs from '../assets/bootstrap.svg'
import sass from '../assets/sass.svg'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import git from '../assets/git.svg'



import './Skill.scss';

export function Skill(){
    return(
        <div  className="skillContainer">
            <h3>Habilidades</h3>
            <Carousel style={{padding: 4}}>
                <Carousel.Item interval={1500} className='item'>
                    <span><img src={js} alt="" /></span>
                    <span><img src={ts} alt="" /></span>
                    <span><img src={react} alt="" /></span>
                    <span><img src={sass} alt="" /></span>
                </Carousel.Item>
            
                <Carousel.Item interval={1500} className="item">
                    <span> <img src={git} alt="" /></span>
                    <span> <img src={html} alt="" /></span>
                    <span> <img src={css} alt="" /></span> 
                    <span> <img src={bs} alt="" /></span>               
                </Carousel.Item>
                
            </Carousel>
        </div>
    )
}