import './ActionButton.scss';

const ActionButton = ({ text, handleAction }) => {
  return (
    <button className='action-button' onClick={handleAction}>
      {text}
    </button>
  )
};

export default ActionButton;