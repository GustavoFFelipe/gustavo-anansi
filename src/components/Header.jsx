
import { List } from 'phosphor-react';
import logo from '../assets/logo.svg';
import './Header.scss';

import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, X } from 'phosphor-react';
import './MenuMobile.scss';

export function Header(){

    
    function handleOpenMenu(){
        openMenu.style.display = 'flex'
        document.documentElement.style.overflow = 'hidden';
        
    }
    function handleCloseMenu(){
        openMenu.style.display = 'none'
        document.documentElement.style.overflow = 'auto';
    }

    return(
        <header>
            <img id='logo' src={logo} alt="" />
            <nav className='nav-bar'>
                <a href="">Home</a>
                <a href="">Projetos</a>
                <a href="">Sobre mim</a>
                <a href="">Contato</a>
            </nav>
            <List className="menuMobile" onClick={handleOpenMenu} size={32} weight="fill" />
            {/* Open menu*/}
            
                <div id="openMenu" className="mobileContainer active" >
                    <X className="close" onClick={handleCloseMenu}
                        size={26} weight="bold" 
                    />
                    <nav className='nav-bar'>
                        <a href="">Home</a>
                        <a href="">Projetos</a>
                        <a href="">Sobre mim</a>
                        <a href="">Contato</a>
                    </nav>

                    <div className="midiaLinks">
                            <a className="link" href="https://github.com/GustavoFFelipe"><GithubLogo size={35} /> </a>
                            <a className="link" href="https://www.linkedin.com/in/gustavoffelipe/" ><LinkedinLogo size={35} /></a>
                            <a className="link" href="https://www.instagram.com/gu.ffelipe/" ><InstagramLogo size={35} /></a>
                            <a className="link" href="https://www.facebook.com/gu.ffelipe19" ><FacebookLogo size={35} /></a>
                    </div>
                </div>
            
        </header>
    )
}