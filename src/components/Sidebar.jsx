import {GithubLogo, FacebookLogo, InstagramLogo, LinkedinLogo} from 'phosphor-react'
import largeLine from '../assets/line-large.svg';
import smallLine from '../assets/line-small.svg';


import '../components/Sidebar.scss'

export function Sidebar(){
    return(
        <div className="sidebar-container">
            <div className="midias">
                <img id="smallLine" src={smallLine} alt="" />
                <div className="midiaLinks">
                    <a className="link" href="https://github.com/GustavoFFelipe"><GithubLogo size={26} /> </a>
                    <a className="link" href="https://www.linkedin.com/in/gustavoffelipe/" ><LinkedinLogo size={26} /></a>
                    <a className="link" href="https://www.instagram.com/gu.ffelipe/" ><InstagramLogo size={26} /></a>
                    <a className="link" href="https://www.facebook.com/gu.ffelipe19" ><FacebookLogo size={26} /></a>
                </div>
                <img id="largeLine" src={largeLine} alt="" />
            </div>
        </div>
    )
}