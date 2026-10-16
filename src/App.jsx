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
    rootMargin: "200px", // header height + section mt
    threshold: 1.0
  });

  const selectSection = (section) => {
    setCurrentSection(section);
  };

  const showInfo = () => {
    return currentSection === SECTION.INFO;
  };

  const showCarrer = () => {
    return currentSection === SECTION.CARRER;
  };

  const showSkills = () => {
    return currentSection === SECTION.SKILLS;
  };

  const showContact = () => {
    return currentSection === SECTION.CONTACT;
  };

  return (
    <div className='portfolio'>
      <TopHeader
        showBrand={isElementVisible}
        currentSection={currentSection}
        selectSection={selectSection}
      />
      <main className='portfolio__main'>
        {showInfo() && (
          <>
            <Header ref={elementRef}/>
            <Section title={SECTION.INFO}> </Section>
          </>
        )}

        {showCarrer() && (
          <>
            <Header ref={elementRef} variant={SECTION.CARRER}/>
            <Section title={SECTION.CARRER}> </Section>
          </>
        )}

        {showSkills() && (
          <>
            <Header ref={elementRef} variant={SECTION.SKILLS}/>
            <Section title={SECTION.SKILLS}> </Section>
          </>
        )}

        {showContact() && (
          <>
            <Header ref={elementRef} variant={SECTION.CONTACT}/>
            <Section title={SECTION.CONTACT}> </Section>
          </>
        )}

      </main>
      <Footer />
    </div>
  )
}

export default App;
