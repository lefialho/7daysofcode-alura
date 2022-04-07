import { ComoConseguirStyles } from './styles'

export default function ComoConseguir() {
  return (
    <ComoConseguirStyles>
      <div className='image'>
        <img src="/images/img-como-conseguir.jpg" />
      </div>
      <div className='list'>
        <span>Como conseguir</span>
        <h2>
          minha planta
        </h2>
        <ul>
          <li><span>Escolha suas plantas</span></li>
          <li><span>Faça seu pedido</span></li>
          <li><span>Aguarde na sua casa</span></li>
        </ul>
      </div>
    </ComoConseguirStyles>
  )
}