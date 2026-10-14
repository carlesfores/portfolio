import './Divider.scss';

const divider = ({ text }) => {

  return (
    <div className='divider'>
      <div className='divider__start'></div>
      <div className='divider__center'>
        <div className='divider__center-text'>{text}</div>
      </div>
      <div className='divider__end'></div>
    </div>
  )
};

export default divider;