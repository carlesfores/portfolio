import styles from '@/components/common/section/Section.module.scss';

const section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles.section__content}>{children}</div>
    </section>
  )
};

export default section;