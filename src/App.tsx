import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './theme/GlobalStyles';
import { DeviceSimulator } from './components/layout/DeviceSimulator';
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
        return <Challenge />;
      case 'biofilms':
        return <Biofilms />;
      case 'solution':
        return <Solution />;
      case 'protocol':
        return <Protocol />;
      case 'results':
        return <Results />;
      case 'case':
        return <Case />;
      case 'conclusion':
        return <Conclusion />;
      case 'references':
        return <References />;
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
      <DeviceSimulator>
        <Layout activeSection={activeSection} onNavigate={handleNavigate}>
          {renderContent()}
        </Layout>
      </DeviceSimulator>
    </ThemeProvider>
  );
};

export default App;
