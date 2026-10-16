import TopNav from '@/components/layout/top-nav';

import styles from '@/components/layout/top-header/TopHeader.module.scss';

const TopHeader = ({ showBrand }) => {
  const brandClass = showBrand === false ? styles['TopHeader__brand--visible'] : '';
  
  return (
    <header className={styles.TopHeader}>
      <div className={`${styles.TopHeader__brand} ${brandClass}`}>Carles Fores</div>
      <TopNav />
    </header>
  )
};

export default TopHeader;