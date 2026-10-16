import TopNav from '@/components/layout/top-nav';

import styles from '@/components/layout/top-header/TopHeader.module.scss';

const TopHeader = ({ showBrand, currentSection, selectSection }) => {
  const brandClass = showBrand === false ? styles['TopHeader__brand--visible'] : '';

  return (
    <header className={styles.TopHeader}>
      <div className={`${styles.TopHeader__brand} ${brandClass}`}>Carles Fores</div>
      <TopNav currentSection={currentSection} selectSection={selectSection} />
    </header>
  )
};

export default TopHeader;