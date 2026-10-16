import TopNav from '@/components/layout/top-nav';

import './TopHeader.scss';

const TopHeader = ({ showBrand }) => {
  const brandClassName = `top-header__brand ${showBrand === false ? 'top-header__brand--visible' : ''}`;

  return (
    <header className='top-header'>
      <div className={brandClassName}>Carles Fores</div>
      <TopNav />
    </header>
  )
};

export default TopHeader;