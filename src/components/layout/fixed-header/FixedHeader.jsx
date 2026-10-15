import { useState } from 'react';

import './FixedHeader.scss';

const menuSymbol = `${"\u2630"}`;

const FixedHeader = () => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  }

  const itemClassName = `fixed-header__list-item ${menu ? 'fixed-header__list-item--open' : ''}`

  return (
    <header className='fixed-header'>
      <div className='fixed-header__brand'>Carles Fores</div>

      <nav className='fixed-header__nav'>
        <button
          className='fixed-header__btn'
          onClick={toggleMenu}
        >
          {menuSymbol}
        </button>

        <ol className='fixed-header__list'>
          <li className={itemClassName}>item 1</li>
          <li className={itemClassName}>item 1</li>
          <li className={itemClassName}>item 1</li>
          <li className={itemClassName}>item 1</li>
        </ol>

      </nav>

    </header>
  )
};

export default FixedHeader;