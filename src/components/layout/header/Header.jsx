import styles from '@/components/layout/header/Header.module.scss';

const header = ({ ref, variant = null }) => {

  if (variant) {
    const formatVariant = variant.toLowerCase();

    return (
      <header className={`${styles.HeaderVariant} ${styles[`HeaderVariant__${formatVariant}`]}`} ref={ref}>
        <h1>
          {variant}
        </h1>
      </header>
    )
  }

  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.header__brand}>
        <h1 className={styles.header__title}>
          <span>Carles,</span>
          <span>Fores Soto</span>
        </h1>
        <div className={styles.header__subtitle}>front-end developer</div>
      </div>
    </header>
  )
};

export default header;