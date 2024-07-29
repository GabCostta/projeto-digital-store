import "@styles/Components/CardDestaque/CardDestaque.css"
import blusa from "@assets/img/blusa.png"
import tenis from "@assets/img/tenis.png"
import fone from "@assets/img/fone de ouvido.png"


function CardDestaque() {
    return (
        <>
            <section>
                <h1 className="titulo-colecao">Coleções em destaque</h1>
                <div className="cards-de-ofertas">
                    <div className="card-de-oferta-blusa">
                        <div className="informacao">
                            <div className="oferta">
                                <h3>30% OFF</h3>
                            </div>
                            <h2>Novo drop <br /> Supreme</h2>
                            <button>
                                <a className="button" href="">Comprar</a>
                            </button>
                        </div>
                        <div className="blusa-card">
                            <img className="blusa" src={blusa} alt="blusa com estampa" />
                        </div>
                    </div>
                    <div className="card-de-oferta-blusa">
                        <div className="informacao">
                            <div className="oferta">
                                <h3>30% OFF</h3>
                            </div>
                            <h2>Coleção <br /> Adidas</h2>
                            <button>
                                <a className="button" href="">Comprar</a>
                            </button>
                        </div>
                        <div className="blusa-card">
                            <img className="blusa" src={tenis} alt="blusa com estampa" />
                        </div>
                    </div>
                    <div className="card-de-oferta-blusa">
                        <div className="informacao">
                            <div className="oferta">
                                <h3>30% OFF</h3>
                            </div>
                            <h2>Novo <br /> Beats Bass</h2>
                            <button>
                                <a className="button" href="">Comprar</a>
                            </button>
                        </div>
                        <div className="blusa-card">
                            <img className="blusa" src={fone} alt="blusa com estampa" />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default CardDestaque;