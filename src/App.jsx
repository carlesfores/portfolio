import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js';

import TopHeader from './components/layout/top-header';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Section from '@/components/common/section';

import '@/App.scss';
import { SECTION } from '@/utils/enums';

function App() {

  const [currentSection, setCurrentSection] = useState(SECTION.INFO)

  const [elementRef, isElementVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "120px",
    threshold: 1.0
  });

  const sectionMap = {
    [SECTION.INFO]: <Section title={SECTION.INFO}> </Section>,
    [SECTION.CARRER]: <Section title={SECTION.CARRER}> </Section>,
    [SECTION.SKILLS]: <Section title={SECTION.SKILLS}> </Section>,
    [SECTION.CONTACT]: <Section title={SECTION.CONTACT}> </Section>,
  };

  const selectSection = (section) => {
    setCurrentSection(section);
  }

  return (
    <div className='portfolio'>
      <TopHeader
        showBrand={isElementVisible}
        currentSection={currentSection}
        selectSection={selectSection}
      />
      <main className='portfolio__main'>
        <Header ref={elementRef} />
        {sectionMap[currentSection]}
      </main>
      <Footer />
    </div>
  )
}

export default App;
