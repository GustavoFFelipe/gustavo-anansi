import perfil from '../assets/perfil.png';
import './Main.scss';

export function Main(){
    return(
        <div className="container">
            <img src={perfil} alt="Imagem de Perfil" />
            <div className="text-container">
                <h3 className="blue-text">FRONT-END DEVELOPER.</h3>
                <h3 className="black-text">UX/UI DESIGNER.</h3>

                <button className="pop-up">
                    VAMOS NESSA!
                </button>
            </div>
        </div>
    )
}