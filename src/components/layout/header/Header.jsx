import './Header.scss';

const header = () => {
  return (
    <header className='header'>
      <div className='header__brand'>
        <div className='header__title'>
          <span>Carles,</span>
          <span>Fores Soto</span>
        </div>
        <div className='header__subtitle'>front-end developer</div>
      </div>
    </header>
  )
};

export default header;