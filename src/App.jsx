import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js';

import TopHeader from './components/layout/top-header';
import PortfolioHeader from '@/components/layout/header';
import PortfolioFooter from '@/components/layout/footer';
import PortfolioSection from '@/components/common/section';

import '@/App.scss';

function App() {

  const [elementRef, isElementVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "120px",
    threshold: 1.0
  });

  return (
    <div className='portfolio'>
      <TopHeader showBrand={isElementVisible} />

      <main className='portfolio__main'>
        <PortfolioHeader ref={elementRef} />
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
