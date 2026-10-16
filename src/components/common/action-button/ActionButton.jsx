import styles from '@/components/common/action-button/ActionButton.module.scss';

const ActionButton = ({ text, handleAction }) => {
  return (
    <button className={styles.actionButton} onClick={handleAction}>
      {text}
    </button>
  )
};

export default ActionButton;