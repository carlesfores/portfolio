import styles from '@/components/layout/footer/Footer.module.scss';

const copyright = `${"\u00A9"} Carles Forès Soto, Portfolio ${new Date().getFullYear()}`

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        {copyright}
      </div>
    </footer>
  )
};

export default footer;