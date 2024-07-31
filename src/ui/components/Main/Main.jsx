import "@styles/Components/Main/Main.css"
import { Link } from "react-router-dom"
import gmail from "@assets/img/gmail.svg"
import facebook from "@assets/img/facebook.svg"
import sapatos from "@assets/img/dois_tenis_nike.png"


function Main() {

  return (
    <>
      <main>
        <div className="formulario card-formulario">
          <div className="title">
            <h1>Acesse sua conta</h1>
            <p>Novo cliente? Então registre-se <Link to="/Registrar">aqui</Link>.</p>
          </div>
          <div className="conta">
            <h4>Login *</h4>
            <input type="text" placeholder="Insira seu login ou email" />
            <h4>Senha *</h4>
            <input type="text" placeholder="Insira sua senha" />
            <Link to="/Error">Esqueci minha senha</Link>
            <button type="button">Acessar Conta</button>
          </div>
          <div className="outrologin">
            <p>Ou faça login com</p>
            <div className="img">
              <Link to="https://www.google.com/intl/pt-BR/gmail/about/"><img src={gmail} alt="gmail" /></Link>
              <Link to="https://www.facebook.com/"><img src={facebook} alt="facebook" /></Link>
            </div>
          </div>
        </div>
        <div className="fotoSapatos">
          <img src={sapatos} />
        </div>
      </main>
    </>
  )
}

export default Main