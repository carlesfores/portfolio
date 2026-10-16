import styles from '@/components/common/section/Section.module.scss';

const section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.section__title}>{title}</div>
      <div className={styles.section__content}>{children}</div>
    </section>
  )
};

export default section;