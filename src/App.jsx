import Divider from '@/components/common/divider';
import PortfolioHeader from '@/components/layout/header';
import PortfolioFooter from '@/components/layout/footer';
import PortfolioSection from '@/components/common/section';

import '@/App.scss';

function App() {

  return (
    <div className='portfolio'>
      <div className='portfolio__content'>
        <PortfolioHeader />
        <main className='portfolio__main'>
          <Divider text="carrer"/>
          <PortfolioSection />
          <Divider text="skills"/>
        </main> 
        <PortfolioFooter />
      </div>
    </div>
  )
}

export default App;
