import React from "react";
import Layout from "../ui/components/Layout/Layout";

const HomePage = () => {
  return ( 
    <Layout>
      <div>
      <h1>Bem-vindo à Digital Store!</h1>
      {
        <section className="colecao-destaque-icons">
        <div className="colecao-destaque-icons-escopo">
          <div className="titulo-colecao-destaque">
            <h1>Coleções em destaque</h1>
          </div>
          <div className="cards-colecao-destaque">
            <div className="blusa-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="calcas-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="bone-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="headphone-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="tenis-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
          </div>
        </div>
      </section>
      }
      </div>
    </Layout>

   );
}
 
export default HomePage;