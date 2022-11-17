
import './Form.scss';


export function Form(){
    return (
        <div id="contact" className="contact">
            <form action="https://formsubmit.co/gustavo.ffelipedev@gmail.com" method="POST">
                <h3>Entre em contato</h3>
                <label htmlFor="name">Nome</label>
                <input name="name" type="text"  placeholder="Nome"  />
                <label htmlFor="surname">Sobrenome</label>
                <input name="surname" type="text"  placeholder="Sobrenome" />
                <label htmlFor="phone">Telefone</label>
                <input name="phone" type="text"  placeholder="Telefone" />
                <label htmlFor="email">Email</label>
                <input name="email" type="text"  placeholder="Email" />
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" placeholder="Sua Mensagem" />

                <input type="hidden" name="_autoresponse" value="Obrigado por me mandar uma mensagem, em breve vou entrar em contato com você. Gustavo Felipe"></input>
                <input className="btn" type="submit" value="ENVIAR" />

            </form>
        </div>
    )
}