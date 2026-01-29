import { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">       
          <ProfilePage isDark={isDark} setIsDark={setIsDark} />
          <AboutPage isDark={isDark} />
          <SkillsPage isDark={isDark} />
      </div>
    </div>
  )
}

export default App;

