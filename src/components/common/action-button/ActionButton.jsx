import styles from '@/components/common/action-button/ActionButton.module.scss';

const ActionButton = ({ children, handleAction, ...props }) => {
  return (
    <button
      className={styles.actionButton}
      type="button"
      onClick={handleAction}
      {...props}
    >
      {children}
    </button>
  )
};

export default ActionButton;