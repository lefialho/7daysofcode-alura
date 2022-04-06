import Menu from "./Menu"
import Styled, { createGlobalStyle } from 'styled-components'

const HeaderStyle = createGlobalStyle`
  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--small-gap);
    position: relative;
    z-index: 1;
    padding: var(--small-size) var(--small-size);
  }

  .menu {
    overflow-x: auto;

    &__list {
      display: flex;
      gap: .5rem;
    }

    &__item {
      text-overflow: ellipsis;
      white-space: nowrap;

      &:not(:first-child) {
        &::before {
          content: '/';
          margin-right: .5rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
  .header {
    display: grid;
  }

  .menu {
    padding-bottom: var(--small-size);
  }
}
`;

function Header() {
  return (
    <>
      <HeaderStyle />
      <header className="header container">
        <div className="logo">
          <img src="/images/logo.svg" alt="Logotipo casa verde" />
        </div>
        <Menu />
      </header>
    </>
  );
}

export default Header;