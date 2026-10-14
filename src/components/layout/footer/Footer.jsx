import './Footer.scss';

const copyright = `${"\u00A9"} Carles Forès Soto, Portfolio ${new Date().getFullYear()}`


const footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        {copyright}
      </div>
    </footer>
  )
};

export default footer;