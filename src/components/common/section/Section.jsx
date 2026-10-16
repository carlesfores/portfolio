import styles from '@/components/common/section/Section.module.scss';

const section = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>{children}</div>
    </section>
  )
};

export default section;