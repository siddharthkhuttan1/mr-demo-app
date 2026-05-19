import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './theme/GlobalStyles';
import { Layout } from './components/Layout';
import { Home } from './screens/Home';
import { Challenge } from './screens/Challenge';
import { Biofilms } from './screens/Biofilms';
import { Solution } from './screens/Solution';
import { Protocol } from './screens/Protocol';
import { Results } from './screens/Results';
import { Case } from './screens/Case';
import { Conclusion } from './screens/Conclusion';
import { References } from './screens/References';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavigate = (id: string) => {
    setActiveSection(id)
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'challenge':
        return <Challenge onNavigate={handleNavigate} />;
      case 'biofilms':
        return <Biofilms onNavigate={handleNavigate} />;
      case 'solution':
        return <Solution onNavigate={handleNavigate} />;
      case 'protocol':
        return <Protocol onNavigate={handleNavigate} />;
      case 'results':
        return <Results onNavigate={handleNavigate} />;
      case 'case':
        return <Case onNavigate={handleNavigate} />;
      case 'conclusion':
        return <Conclusion onNavigate={handleNavigate} />;
      case 'references':
        return <References onNavigate={handleNavigate} />;
      default:
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#94a3b8' }}>
            <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section Under Development</h2>
          </div>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout activeSection={activeSection} onNavigate={handleNavigate}>
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
};

export default App;
