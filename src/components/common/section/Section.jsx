import styles from '@/components/common/section/Section.module.scss';

const section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__title}>title</div>
      <div className={styles.section__content}>content</div>
    </section>
  )
};

export default section;