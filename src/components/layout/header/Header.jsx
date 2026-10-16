import styles from '@/components/layout/header/Header.module.scss';

const header = ({ variant = null }) => {

  if (variant) {
    return (
      <header className={styles.header}>
        <h1 className={styles.header__title}>
          {variant}
        </h1>
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        <span>Carles,</span>
        <span>Fores Soto</span>
      </h1>
      <div className={styles.header__subtitle}>front-end developer</div>
    </header>
  )
};

export default header;