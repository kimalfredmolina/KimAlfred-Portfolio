import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import AllProjectsPage from './components/AllProjectsPage';
import CertificatesPage from './components/CertificatesPage';
import AllCertificatesPage from './components/AllCertificatesPage';
import Footer from './components/Footer';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ProfilePage isDark={isDark} setIsDark={setIsDark} />
            <AboutPage isDark={isDark} />
            <SkillsPage isDark={isDark} />
            <ProjectsPage isDark={isDark} />
            <CertificatesPage isDark={isDark} />
            <Footer isDark={isDark} />
          </>
        }
      />

      <Route
        path="/allprojects"
        element={<AllProjectsPage isDark={isDark} />}
      />

      <Route
        path="/allcertificates"
        element={<AllCertificatesPage isDark={isDark} />}
      />
    </Routes>
  );
};

export default App;
