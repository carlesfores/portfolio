import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js';

import FixedHeader from './components/layout/fixed-header';
import PortfolioHeader from '@/components/layout/header';
import PortfolioFooter from '@/components/layout/footer';
import PortfolioSection from '@/components/common/section';

import '@/App.scss';

function App() {

  const [elementRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "120px",
    threshold: 1.0
  })

  console.log(isVisible)

  return (
    <div className='portfolio'>
      <FixedHeader isHeaderVisible={isVisible}/>
      <main className='portfolio__main'>
        <PortfolioHeader ref={elementRef}/>
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
