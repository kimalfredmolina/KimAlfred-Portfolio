import { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">       
          <ProfilePage isDark={isDark} setIsDark={setIsDark} />
          <AboutPage isDark={isDark} />
      </div>
    </div>
  )
}

export default App;

