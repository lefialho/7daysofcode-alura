import Styled from 'styled-components'

export const NewsletterForm = Styled.form`
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