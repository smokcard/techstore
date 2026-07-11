import React from 'react';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>Tecnología que te LLeva al siguiente nivel</h1>
        <p>Potencia tu setup con componentes seleccionados de alto rendimiento.</p>
        <button className="btn-ofertas">EXPLORAR OFERTAS &gt;</button>
      </div>
      <div className="banner-image">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tech Setup" />
      </div>
    </section>
  );
}

export default Banner;