import FixedHeader from './components/layout/fixed-header';
import PortfolioHeader from '@/components/layout/header';
import PortfolioFooter from '@/components/layout/footer';
import PortfolioSection from '@/components/common/section';

import '@/App.scss';

function App() {

  return (
    <div className='portfolio'>
      <FixedHeader />
      <main className='portfolio__main'>
        <PortfolioHeader />
        <PortfolioSection />
        <PortfolioSection />
        <PortfolioSection />
        <PortfolioSection />
        <PortfolioSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}

export default App;
