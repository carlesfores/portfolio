import { useState } from 'react';

import ActionButton from '@/components/common/action-button';

import './TopNav.scss';

const TopNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const itemClass = `top-nav__item ${isOpen ? 'top-nav__item--open' : ''}`

  const navItems = [
    {
      text: 'Info',
      class: itemClass,
      action: null
    },
    {
      text: 'Carrer',
      class: itemClass,
      action: null
    },
    {
      text: 'Skills',
      class: itemClass,
      action: null
    },
    {
      text: 'Contact',
      class: itemClass,
      action: null
    }
  ]

  return (
    <nav className='top-nav'>
      <ActionButton text="&#9776;" handleAction={() => setIsOpen((prev) => !prev)} />
      <ol className='top-nav__list'>
        {navItems.map(item => <li className={item.class}>{item.text}</li>)}
      </ol>
    </nav>
  )
};

export default TopNav;