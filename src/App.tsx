import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { Smartphone, RotateCw } from 'lucide-react';
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

const BlockedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: ${props => props.theme.colors.background.main};
  padding: ${props => props.theme.spacing.xl};
  font-family: ${props => props.theme.typography.fontFamily};
  text-align: center;
  color: ${props => props.theme.colors.text.main};
`;

const BlockedCard = styled.div`
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xxl};
  max-width: 500px;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.md};
`;

const BlockedTitle = styled.h1`
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.accent.red};
`;

const BlockedMessage = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.text.muted};
  margin: 0;
`;

// Animations for Screen Width Warning UI
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const rotatePulse = keyframes`
  0% { transform: rotate(0deg); }
  30% { transform: rotate(-90deg); }
  70% { transform: rotate(-90deg); }
  100% { transform: rotate(0deg); }
`;

// Styled Components for Landscape Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
  padding: ${props => props.theme.spacing.lg};
`;

const ModalCard = styled.div`
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xxl};
  max-width: 440px;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.round};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  svg.phone {
    width: 36px;
    height: 36px;
    animation: ${rotatePulse} 4s ease-in-out infinite;
  }
`;

const ModalTitle = styled.h2`
  font-family: ${props => props.theme.typography.headings};
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.main};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ModalMessage = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${props => props.theme.colors.text.muted};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ModalButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.primaryDark} 100%);
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(14, 174, 244, 0.25);
  transition: ${props => props.theme.transitions.default};
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(14, 174, 244, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Styled Components for Orientation Block view
const BlockScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: ${props => props.theme.colors.background.main};
  padding: ${props => props.theme.spacing.xl};
  font-family: ${props => props.theme.typography.fontFamily};
  text-align: center;
  color: ${props => props.theme.colors.text.main};
  animation: ${fadeIn} 0.3s ease-out;
`;

const BlockScreenCard = styled.div`
  background: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xxl};
  max-width: 440px;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ACCESS_TIME_IN_HRS = 1; //todo: change to 72 before sharing

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isBlocked, setIsBlocked] = useState<boolean>(() => {
    // 1. Date Check: Exceeds 23rd May 2026 6pm (18:00)
    const LIMIT_DATE = new Date(2026, 4, 23, 18, 0, 0); // Month is 0-indexed: May is 4
    const now = new Date();
    if (now > LIMIT_DATE) {
      return true;
    }

    // 2. 72-Hour Trial Check from first load
    try {
      const firstLoad = localStorage.getItem('aflt');
      if (!firstLoad) {
        localStorage.setItem('aflt', now.toISOString());
      } else {
        const firstLoadDate = new Date(firstLoad);
        const hoursPassed = (now.getTime() - firstLoadDate.getTime()) / (1000 * 60 * 60);
        if (hoursPassed > ACCESS_TIME_IN_HRS) {
          return true;
        }
      }
    } catch (e) {
      console.warn('LocalStorage access failed:', e);
    }
    return false;
  });

  // State variables for screen-width orientation check
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [hasDismissedWarning, setHasDismissedWarning] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // 1. Viewport height fix for iOS Safari
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();

    // 2. Initial screen width check on app load
    const initialWidth = window.innerWidth;
    if (initialWidth < 1024) {
      setShowWarning(true);
    } else {
      setHasDismissedWarning(true);
    }

    // 2. Access Expiration & Trial Checks
    const checkBlockedStatus = () => {
      const LIMIT_DATE = new Date(2026, 4, 23, 18, 0, 0);
      const now = new Date();
      if (now > LIMIT_DATE) {
        setIsBlocked(true);
        return;
      }

      try {
        const firstLoad = localStorage.getItem('aflt');
        if (firstLoad) {
          const firstLoadDate = new Date(firstLoad);
          const hoursPassed = (now.getTime() - firstLoadDate.getTime()) / (1000 * 60 * 60);
          if (hoursPassed > ACCESS_TIME_IN_HRS) {
            setIsBlocked(true);
            return;
          }
        }
      } catch (e) {
        console.warn('LocalStorage access failed:', e);
      }
      setIsBlocked(false);
    };

    // Check periodically (every 2 seconds) to handle active time expiration
    const interval = setInterval(checkBlockedStatus, 2000);

    // Listen to localStorage changes across tabs/windows
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'aflt') {
        checkBlockedStatus();
      }
    };
    window.addEventListener('storage', handleStorage);

    // Dynamic screen width check on resize / orientation change
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
      setVh();
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', setVh);

    // Intercept manual console calls to localStorage.setItem in the same window/tab
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, [key, value]);
      if (key === 'aflt') {
        checkBlockedStatus();
      }
    };

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', setVh);
      localStorage.setItem = originalSetItem;
    };
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
  };

  const handleDismissWarning = () => {
    setShowWarning(false);
    setHasDismissedWarning(true);
  };

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

  // 1. Expiration check takes precedence
  if (isBlocked) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BlockedContainer>
          <BlockedCard>
            <BlockedTitle>Access Expired</BlockedTitle>
            <BlockedMessage>
              Free access for the app is over, please contact the owner of the app to get access
            </BlockedMessage>
          </BlockedCard>
        </BlockedContainer>
      </ThemeProvider>
    );
  }

  // 2. Warning overlay if showWarning is active
  // 3. Block Screen check if dismissed but width remains < 1024px
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {showWarning && (
        <ModalOverlay>
          <ModalCard>
            <IconContainer>
              <Smartphone className="phone" />
            </IconContainer>
            <ModalTitle>Landscape Mode Recommended</ModalTitle>
            <ModalMessage>
              Please turn your device to landscape mode for the best user experience.
            </ModalMessage>
            <ModalButton onClick={handleDismissWarning}>Okay</ModalButton>
          </ModalCard>
        </ModalOverlay>
      )}

      {hasDismissedWarning && currentWidth < 1024 ? (
        <BlockScreenContainer>
          <BlockScreenCard>
            <IconContainer>
              <RotateCw className="phone" />
            </IconContainer>
            <ModalTitle>Please Rotate Your Device</ModalTitle>
            <ModalMessage>
              This application is optimized for landscape viewing. Please rotate your device or expand your screen to continue.
            </ModalMessage>
          </BlockScreenCard>
        </BlockScreenContainer>
      ) : (
        <Layout activeSection={activeSection} onNavigate={handleNavigate}>
          {renderContent()}
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
