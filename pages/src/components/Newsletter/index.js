import Image from 'next/image'
import Styled from 'styled-components'

const NewsletterForm = Styled.form`
  display: flex;
  flex-wrap: wrap;
  box-shadow: var(--shadow);
  z-index: 2;
  position: relative;
  border: none;

  .newsletter__input {
    flex: 1;
    padding: ${({ theme }) => theme.spacing.small}rem;
    padding-left: ${({ theme }) => theme.spacing.large}rem;
    border: none;
    background: url(/images/mail.svg) no-repeat 1rem center, #fff;
    outline: none;
  }

  .newsletter__btn {
    border: none;
    padding: var(--small-size) var(--medium-size);
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: var(--primary-light-color);
    }

    @media (max-width: 768px) { 
      width: 100%;
    }
  }
`;

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
