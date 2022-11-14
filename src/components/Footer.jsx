

import './Footer.scss';

export function Footer(){
    return(
        <div className='footerContainer'>
            <div className='navFooter' >
                <a href="#home">Home</a>
                <a href="#projects">Projetos</a>
                <a href="#about">Sobre mim</a>
                <a href="#contact">Contato</a>
            </div>
            <div >
                <p className='copy'>Todos os direitos reservados. 2022</p>
            </div>
            <div className='contact'>
                <span className='number'>
                    +55 (32) 9 9853-8036
                    </span>
                <a href="#contact">
                <button className='btn'>
                    Vamos nessa juntos.
                </button></a>
            </div>
        </div>
    )
}