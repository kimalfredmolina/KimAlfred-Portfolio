import { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div>
      <div className="relative z-10">       
          <ProfilePage isDark={isDark} setIsDark={setIsDark} />
          <AboutPage isDark={isDark} />
          <SkillsPage isDark={isDark} />
          <ProjectsPage isDark={isDark} />
      </div>
    </div>
  )
}

export default App;

