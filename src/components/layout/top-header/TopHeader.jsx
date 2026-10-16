import TopNav from '@/components/layout/top-nav';

import styles from '@/components/layout/top-header/TopHeader.module.scss';

const TopHeader = ({ showBrand, currentSection, selectSection }) => {
  const brandClass = showBrand === false ? styles['topHeader__brand--visible'] : '';

  console.log(currentSection);

  return (
    <header className={styles.topHeader}>
      <div className={`${styles.topHeader__brand} ${brandClass}`}>Carles Fores</div>
      <TopNav currentSection={currentSection} selectSection={selectSection} />
    </header>
  )
};

export default TopHeader;