import Styled from 'styled-components'

export const ComoConseguirStyles = Styled.section`
  display: grid;
  grid-template-columns: auto minmax(300px, 1fr);
  max-width: 992px;
  margin: 0 auto clamp(var(--small-size), 4vw, var(--medium-size));
  box-shadow: var(--shadow);
  position: relative;
  z-index: 3;

  .list {
    background: #fff;
    padding: var(--medium-size);

    h2 {
      font-size: ${({ theme }) => theme.subtitle.fontSize};
      font-family: ${({ theme }) => theme.subtitle.fontFamily}; 
      line-height: ${({ theme }) => theme.subtitle.lineHeight}; 
      margin-bottom: var(--medium-size);
    }

    span {
      color: ${({ theme }) => theme.text.color};
      opacity: ${({ theme }) => theme.text.opacity};
      font-size: ${({ theme }) => theme.text.fontSize};
    }

    ul {
      display: grid;
      gap: 1rem;
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: var(--small-size);
      color: ${({ theme }) => theme.text.color};
      font-size: ${({ theme }) => theme.text.fontSize};

      &:before {
        content: '';
        background-color var(--primary-color);
        min-width: 2rem;
        min-height: 2rem;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 992px){ 
    margin: var(--small-size);
  }

  @media (max-width: 768px){ 
    .image { 
      flex: auto;
      
      img {
        object-fit: cover;
        height: 100%;
      }
    }
  }
`;