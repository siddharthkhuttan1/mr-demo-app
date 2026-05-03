import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

const pageEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.background.main};
  overflow: hidden;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${props => props.theme.spacing.lg};
  overflow-y: auto;
  background-color: ${props => props.theme.colors.background.main};
  position: relative;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: 10px;
  }
`;

const AnimatedPage = styled.div`
  animation: ${pageEnter} 0.4s ease-out forwards;
  height: 100%;
  width: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onNavigate }) => {
  return (
    <AppContainer>
      <Sidebar activeSection={activeSection} onNavigate={onNavigate} />
      <MainWrapper>
        {/* <Header /> */}
        <ContentArea>
          <AnimatedPage key={activeSection}>
            {children}
          </AnimatedPage>
        </ContentArea>
        {activeSection !== 'home' && (
          <BottomNav currentSection={activeSection} onNavigate={onNavigate} />
        )}
      </MainWrapper>
    </AppContainer>
  );
};
