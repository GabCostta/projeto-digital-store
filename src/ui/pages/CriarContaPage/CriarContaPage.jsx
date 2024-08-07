import Layout from "@components/Layout/Layout";
import "@styles/Components/Main/MainCriarConta.css";
import gmail from "@assets/img/gmail.svg";
import facebook from "@assets/img/facebook.svg";
import sapatos from "@assets/img/dois_tenis_nike.png";
import { Link } from "react-router-dom";

function CriarContaPage() {
  return (
    <>
      <Layout>
        <main>
          <div className="formulario">
            <div className="title">
              <h1>Crie sua conta</h1>
              <p>
                Já possui uma conta? Entre <Link to="/Login">aqui</Link>.
              </p>
            </div>
            <div className="conta">
              <h4>Email *</h4>
              <input type="email" placeholder="Insira seu email" />
              <button type="button">Criar Conta</button>
            </div>
            <div className="outrologin">
              <p>Ou faça login com</p>
              <div className="img">
                <Link to="https://www.google.com/intl/pt-BR/gmail/about/">
                  <img src={gmail} alt="gmail" />
                </Link>
                <Link to="https://www.facebook.com/">
                  <img src={facebook} alt="facebook" />
                </Link>
              </div>
            </div>
          </div>
          <div className="fotoSapatos">
            <img src={sapatos} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default CriarContaPage;
