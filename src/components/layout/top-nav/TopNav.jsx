import { useState } from 'react';

import ActionButton from '@/components/common/action-button';

import styles from '@/components/layout/top-nav/TopNav.module.scss';

const TopNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const itemModifierClass = isOpen ? styles['TopNav__item--open'] : '';

  const navItems = [
    {
      text: 'Info',
      class: `${styles.TopNav__item} ${itemModifierClass}`,
      action: null
    },
    {
      text: 'Carrer',
      class: `${styles.TopNav__item} ${itemModifierClass}`,
      action: null
    },
    {
      text: 'Skills',
      class: `${styles.TopNav__item} ${itemModifierClass}`,
      action: null
    },
    {
      text: 'Contact',
      class: `${styles.TopNav__item} ${itemModifierClass}`,
      action: null
    }
  ]

  return (
    <nav className={styles.TopNav}>
      <ActionButton text="&#9776;" handleAction={() => setIsOpen((prev) => !prev)} />
      <ol className={styles.TopNav__list}>
        {navItems.map((item, index) => <li key={index} className={item.class}>{item.text}</li>)}
      </ol>
    </nav>
  )
};

export default TopNav;