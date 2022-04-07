import Image from 'next/image'
import { NewsletterForm } from './styles'

export default function Newsletter() {
  return (
    <section className="newsletter container">
      <div>
        <span className="newsletter__tag">Sua casa com as </span>
        <h1 className="newsletter__title">melhores plantas</h1>
        <p className="newsletter__text">
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>
        <NewsletterForm className='newsletter__form'>
          <input className='newsletter__input' type="text" placeholder="Insira seu e-mail" />
          <button className='newsletter__btn'>Assinar newsletter</button>
        </NewsletterForm>
      </div>
    </section>
  );
}
