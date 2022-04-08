import Image from 'next/image'
import { NewsletterForm } from './styles'
import isEmail from 'validator/lib/isEmail';
import { useState, useRef, useEffect } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const inputElement = useRef(null);
  const message = useRef(null);

  function AlertMessage() {
    if(email) alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
  }

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <section className="newsletter container">
      <div>
        <span className="newsletter__tag">Sua casa com as </span>
        <h1 className="newsletter__title">melhores plantas</h1>
        <p className="newsletter__text">
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>
        <NewsletterForm>
          <input type="email" placeholder="Insira seu e-mail" ref={inputElement}
            onChange={(e) => {
              if (isEmail(e.currentTarget.value))
                setEmail(e.currentTarget.value);
            }} required/>
          <button onClick={AlertMessage} type="submit">Assinar newsletter</button>
        </NewsletterForm>
      </div>
    </section>
  );
}
