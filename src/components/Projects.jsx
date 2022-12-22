import coffee from '../assets/coffee.png'
import fox from '../assets/fox-river.png'
import ignite from '../assets/Group-13.png'
import disney from '../assets/disney+.png';

import './Projects.scss'

export function Projects(){
    return(
        <div id="projects" className="projectContainer">
            <a href="https://coffeelandhere.netlify.app/">
            <div className="card">
                <p className="top">2021</p>
                <p>Coffeeland os melhores cafés de toda a cidade</p>
                <img src={coffee} alt="" />                
                <p className="bottom">Caso de Estudo</p>
            </div>
            </a>
            <a href="https://foxriver.netlify.app/">
            <div className="card">
                <p className="top">2021</p>
                <p>Onde você encontra os melhores NFTs.</p>
                <img src={fox} alt="" />
                <p className="bottom">Caso de Estudo</p>
            </div>
            </a>
            <a href="https://ignitefeed-ts.netlify.app/">
            <div className="card">
                <p className="top">2022</p>
                <p>Que tal compartilhar suas idéias com a comunidade?</p>
                <img src={ignite} alt="" />
                <p className="bottom">Caso de Estudo</p>
            </div>
            </a>
            <a href="https://clone-disney-two.vercel.app/">
            <div className="card">
                <p className="top">2022</p>
                <p>Clone da Home do Disney+</p>
                <img src={disney} alt="" />
                <p className="bottom">Caso de Estudo</p>
            </div>
            </a>
        </div>
    )
}