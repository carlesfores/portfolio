import styles from '@/components/common/action-button/ActionButton.module.scss';

const ActionButton = ({ children, handleAction, ...buttonProps }) => {
  return (
    <button
      className={styles.actionButton}
      type="button"
      onClick={handleAction}
      {...buttonProps}
    >
      {children}
    </button>
  )
};

export default ActionButton;