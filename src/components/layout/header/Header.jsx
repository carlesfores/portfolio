import './Header.scss';
const menuSymbol = `${"\u2630"}`;

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
      <div className='header__menu'>{menuSymbol}</div>
    </header>
  )
};

export default header;