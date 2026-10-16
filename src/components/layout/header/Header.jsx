import styles from '@/components/layout/header/Header.module.scss';

const header = ({ ref }) => {
  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.header__brand}>
        <div className={styles.header__title}>
          <span>Carles,</span>
          <span>Fores Soto</span>
        </div>
        <div className={styles.header__subtitle}>front-end developer</div>
      </div>
    </header>
  )
};

export default header;