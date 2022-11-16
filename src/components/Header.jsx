
import { List } from 'phosphor-react';
import logo from '../assets/logo.svg';
import './Header.scss';

export function Header(){
    return(
        <header>
            <img id='logo' src={logo} alt="" />
            <List 
            onClick={()=> Toggle()}
            className="menuMobile" size={32} weight="bold" 
            />
            <nav className='nav-bar'>
                <a href="">Home</a>
                <a href="">Projetos</a>
                <a href="">Sobre mim</a>
                <a href="">Contato</a>
            </nav>
        </header>
    )
}