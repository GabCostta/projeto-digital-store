/* eslint-disable no-undef */
import Layout from '@components/Layout/Layout.jsx'
import Carousel from "@components/Carousel/Carousel";
import Cards from "@components/Cards/Cards";
import Cards2 from "@components/Cards/Cards2";
import IconDestaque from "@components/IconDestaque/IconDestaque";
import sapatoAzul from "@assets/img/sapato_card.png";
import flechaRosa from "@assets/img/flecha_icon.svg";
import CardDestaque from "@components/CardDestaque/CardDestaque";
import "@styles/pages/HomePage/HomePage.css";
import { Link } from "react-router-dom";
import { Destaque } from "@components/Destaque/Destaque";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://669111dd26c2a69f6e8e4d94.mockapi.io/products/products"
        );
        setCharacter(response.data);
        console.log("API response:", response.data);
        setLoading(false);
        console.log(`deu certo`);
      } catch (error) {
        console.log(`o erro foi ${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout />
      <Carousel />
      <CardDestaque />
      <IconDestaque />
      {
        <section className="container-produtos-em-alta">
          <div className="produtos-em-alta">
            <div className="topico-section">
              <h1>Produtos em alta</h1>
              <h2>
                <Link to="/ProductList" className="link-ver-todos">
                  Ver todos <img src={flechaRosa} alt="flecha" />
                </Link>
              </h2>
            </div>
            <div className="produto-em-alta-cards">
              {Array.isArray(character) &&
                character
                  .slice(0, 10)
                  .map((card) =>
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
                  )}
            </div>
          </div>
        </section>
      }
      <Destaque />
      <Layout />
    </>
  );
}

export default Home;
