import React, { useState, useEffect } from 'react';
import getImageUrl from '../../patterns/utils';

export default function Ofertas() {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/Ofertas");
      const ofertas = await response.json();

      setOfertas(ofertas);
    }
    fetchData();
  }, []);

  return (
    <section className="ofertas container">
      <div className="ofertas__wrapper-title">
        <span className="ofertas__tag">
          Conheça nossas
        </span>
        <h2 className="ofertas__title">ofertas</h2>
      </div>
      <ul className="ofertas__list">
        {ofertas.map(oferta => (
          <li className="ofertas__item" key={oferta.id}>
            <img src={getImageUrl(oferta.Img)} />
            <div className="ofertas__wrapper">
              <h2 className="ofertas__subtitle">{oferta.Title}</h2>
              <span className="ofertas__price">{oferta.Price}</span>
              <button className="ofertas__btn">Comprar</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}