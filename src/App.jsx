import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import AllProjectsPage from './components/AllProjectsPage';
import CertificatesPage from './components/CertificatesPage';

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
          </>
        }
      />

      <Route
        path="/allprojects"
        element={<AllProjectsPage isDark={isDark} />}
      />
    </Routes>
  );
};

export default App;
