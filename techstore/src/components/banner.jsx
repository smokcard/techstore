import { memo } from 'react';

const Banner = memo(function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>Tecnología que te lleva al siguiente nivel</h1>
        <p>Potencia tu setup con componentes seleccionados de alto rendimiento.</p>
        <button type="button" className="btn-ofertas">
          EXPLORAR OFERTAS &gt;
        </button>
      </div>
      <div className="banner-image">
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Setup tecnológico premium"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
});

export default Banner;