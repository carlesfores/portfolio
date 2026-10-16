import TopNav from '@/components/layout/top-nav';

import styles from '@/components/layout/top-header/TopHeader.module.scss';

const TopHeader = ({ showBrand = false, currentSection, selectSection }) => {

  // TODO: use intersection observer or use scroll lib to show brand
  const brandClass = () => {
    let classes = [styles.topHeader__brand];

    if (showBrand) {
      classes.push(styles['topHeader__brand--visible']);
    }

    return classes.join(" ");
  };

  return (
    <header className={styles.topHeader}>
      <div className={brandClass()}>Carles Fores</div>
      <TopNav currentSection={currentSection} selectSection={selectSection} />
    </header>
  )
};

export default TopHeader;