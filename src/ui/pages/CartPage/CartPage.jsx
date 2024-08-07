import React, { useState, useEffect } from "react";
import Layout from "@components/Layout/Layout";
import Cards2 from "@components/Cards/Cards2";
import Cards from "@components/Cards/Cards";
import sapatoAzul from "@assets/img/sapato_card.png";
import axios from "axios";
import "@styles/pages/Cartpage/Cartpage.css";

function CartItem() {
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={sapatoAzul} alt="Tênis Nike Revolution 6 Next Nature Masculino" />
        <div className="item-info">
          <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
          <p>Cor: Vermelho / Branco</p>
          <p>Tamanho: 42</p>
        </div>
      </div>
      <div className="item-quantity">
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <a href="#" className="remove-item">Remover item</a>
      </div>
      <div className="item-pricing">
        <p className="original-price">R$ 219,00</p>
        <p className="discounted-price">R$ 219,00</p>
      </div>
      <div className="item-pricing">
        <p className="original-price">R$ 219,00</p>
        <p className="discounted-price">R$ 219,00</p>
      </div>
    </div>
  );
}

function CartSummary() {
  return (
    <div className="cart-summary">
      <h2>RESUMO</h2>
      <div className="summary-details">
        <p>Subtotal: <span>R$ 219,00</span></p>
        <p>Frete: <span>R$ 0,00</span></p>
        <p>Desconto: <span>R$ 30,00</span></p>
        <p>Total: <span className="total-price">R$ 219,00</span></p>
        <p className="installments">ou 10x de R$ 21,00 sem juros</p>
        <button className="continue-button">Continuar</button>
      </div>
    </div>
  );
}

function CartPage() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products");
        setCharacter(response.data);
        console.log("API response:", response.data);
      } catch (error) {
        console.log(`o erro foi ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <div className="cart-page">
          <div className="cart-content">
            <div className="cart-header">
              <h2>MEU CARRINHO</h2>
              <h2>QUANTIDADE</h2>
              <h2>UNITÁRIO</h2>
              <h2>TOTAL</h2>
            </div>
            <CartItem />
            <div className="discount-shipping">
              <div className="discount">
                <input type="text" placeholder="Insira seu código" />
                <button>OK</button>
              </div>
              <div className="shipping">
                <input type="text" placeholder="Insira seu CEP" />
                <button>OK</button>
              </div>
            </div>
          </div>
          <CartSummary />
        </div>
        <section className="produtos_relacionados">
          <h5>Produtos relacionados</h5>
          <div className="produto-em-alta-cards">
            {Array.isArray(character) && character.slice(0, 4).map(card => (
              card.desconto === true ? (
                <Cards2
                  key={card.id}
                  oferta={card.valordesconto}
                  foto={sapatoAzul}
                  titulo={card.titulo}
                  descricao={card.descricao}
                  valorantigo={card.valorantigo}
                  valoratual={card.valoratual}
                />
              ) : (
                <Cards
                  key={card.id}
                  foto={sapatoAzul}
                  titulo={card.titulo}
                  descricao={card.descricao}
                  valorantigo={card.valorantigo}
                  valoratual={card.valoratual}
                />
              )
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default CartPage;
