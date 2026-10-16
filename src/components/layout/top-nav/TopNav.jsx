import { useState } from 'react';
import ActionButton from '@/components/common/action-button';
import styles from '@/components/layout/top-nav/TopNav.module.scss';
import { SECTION } from '@/utils/enums';

const TopNav = ({ currentSection, selectSection }) => {

  const [isOpen, setIsOpen] = useState(false);

  const getClasses = (section) => {
    let classes = `${styles.TopNav__item}`;

    if (currentSection === section) {
      classes = `${classes} ${styles['TopNav__item--active']}`
    }

    if (isOpen) {
      classes = `${classes} ${styles['TopNav__item--open']}`
    }

    return classes;
  }

  const navItems = [
    {
      section: SECTION.INFO,
      class: getClasses(SECTION.INFO),
    },
    {
      section: SECTION.CARRER,
      class: getClasses(SECTION.CARRER),
    },
    {
      section: SECTION.SKILLS,
      class: getClasses(SECTION.SKILLS),
    },
    {
      section: SECTION.CONTACT,
      class: getClasses(SECTION.CONTACT),
    }
  ];

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const hanldeClick = (section) => {
    selectSection(section);
    toggleOpen();
  }

  return (
    <nav className={styles.TopNav}>
      <ActionButton
        handleAction={toggleOpen}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="top-nav-list"
      >
        &#9776;
      </ActionButton>
      <ol id="top-nav-list" className={styles.TopNav__list}>
        {navItems.map(item => (
          <li
            key={item.section}
            className={item.class}
            onClick={() => hanldeClick(item.section)}
          >
            {item.section}
          </li>
        ))}
      </ol>
    </nav>
  )
};

export default TopNav;