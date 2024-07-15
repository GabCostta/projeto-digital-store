import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <img src="/assets/images/logo.svg" alt="Digital Store Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar produto..." />
        </div>
        <div className="user-actions">
          <button>Cadastre-se</button>
          <button>Entrar</button>
        </div>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Categorias</li>
          <li>Meus Pedidos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;