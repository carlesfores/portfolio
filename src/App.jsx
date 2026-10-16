import { useState } from 'react';

import TopHeader from './components/layout/top-header';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Section from '@/components/common/section';

import styles from '@/App.module.scss';
import { SECTIONS_ENUM } from '@/utils/enums';

function App() {

  const [currentSection, setCurrentSection] = useState(SECTIONS_ENUM.INFO)

  const selectSection = (section) => {
    setCurrentSection(section);
  };

  const showInfo = () => {
    return currentSection === SECTIONS_ENUM.INFO;
  };

  const showCarrer = () => {
    return currentSection === SECTIONS_ENUM.CARRER;
  };

  const showSkills = () => {
    return currentSection === SECTIONS_ENUM.SKILLS;
  };

  const showContact = () => {
    return currentSection === SECTIONS_ENUM.CONTACT;
  };

  return (
    <div className={styles.portfolio}>
      <TopHeader
        currentSection={currentSection}
        selectSection={selectSection}
      />
      <main className={styles.portfolio__main}>
        {showInfo() && (
          <>
            <Header />
            <Section title={SECTIONS_ENUM.INFO}> </Section>
          </>
        )}

        {showCarrer() && (
          <>
            <Header variant={SECTIONS_ENUM.CARRER} />
            <Section title={SECTIONS_ENUM.CARRER}> </Section>
          </>
        )}

        {showSkills() && (
          <>
            <Header variant={SECTIONS_ENUM.SKILLS} />
            <Section title={SECTIONS_ENUM.SKILLS}> </Section>
          </>
        )}

        {showContact() && (
          <>
            <Header variant={SECTIONS_ENUM.CONTACT} />
            <Section title={SECTIONS_ENUM.CONTACT}> </Section>
          </>
        )}

      </main>
      <Footer />
    </div>
  )
}

export default App;
