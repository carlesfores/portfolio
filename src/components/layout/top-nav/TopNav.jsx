import { useState } from 'react';
import ActionButton from '@/components/common/action-button';
import styles from '@/components/layout/top-nav/TopNav.module.scss';
import { SECTIONS_ENUM } from '@/utils/enums';

const TopNav = ({ currentSection, selectSection }) => {

  const [isOpen, setIsOpen] = useState(false);

  const navItemClass = (section) => {
    let classes = [styles.topNav__item];

    if (currentSection === section) {
      classes.push(styles['topNav__item--active']);
    }

    if (isOpen) {
      classes.push(styles['topNav__item--open']);
    }

    return classes.join(" ");
  }

  const navItems = [
    {
      section: SECTIONS_ENUM.INFO,
      class: navItemClass(SECTIONS_ENUM.INFO),
    },
    {
      section: SECTIONS_ENUM.CARRER,
      class: navItemClass(SECTIONS_ENUM.CARRER),
    },
    {
      section: SECTIONS_ENUM.SKILLS,
      class: navItemClass(SECTIONS_ENUM.SKILLS),
    },
    {
      section: SECTIONS_ENUM.CONTACT,
      class: navItemClass(SECTIONS_ENUM.CONTACT),
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
    <nav className={styles.topNav}>

      <ActionButton
        handleAction={toggleOpen}
        aria-label={isOpen ? 'close menu' : 'open menu'}
        aria-expanded={isOpen}
        aria-controls="top-nav-buttons"
      >
        &#9776;
      </ActionButton>
      
      <ul id="top-nav-buttons" className={styles.topNav__list}>
        {navItems.map(item => (
          <li
            key={item.section}
            className={item.class}
            onClick={() => hanldeClick(item.section)}
          >
            {item.section}
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default TopNav;