import { useState } from 'react';

import './FixedHeader.scss';

const FixedHeader = ({ isHeaderVisible }) => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  }

  const brandClassName = `fixed-header__brand ${
    isHeaderVisible === false ? 'fixed-header__brand--visible' : ''
  }`
  const itemClassName = `fixed-header__list-item ${menu ? 'fixed-header__list-item--open' : ''}`

  return (
    <header className='fixed-header'>
      <div className={brandClassName}>Carles Fores</div>

      <nav className='fixed-header__nav'>
        <button
          className='fixed-header__btn'
          onClick={toggleMenu}
        >
          {"\u2630"}
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