import React from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';
import logoImg from '../assets/biomarket.png';

const WatermarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  user-select: none;
  padding: 0 4%;
`;

const WatermarkWrapper = styled.div<{ $offset?: string }>`
  transform: translateY(${props => props.$offset || '0px'});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WatermarkImage = styled.img`
  width: 250px;
  max-width: 25vw;
  opacity: 0.3;
  transform: rotate(-25deg);
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
  min-width: 0;
  position: relative;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${props => props.theme.spacing.md};
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

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onNavigate }) => {
  return (
    <AppContainer>
      <WatermarkOverlay>
        <WatermarkWrapper $offset="-120px">
          <WatermarkImage src={logoImg} alt="Watermark Left" style={{ width: '250px', maxWidth: '25vw', opacity: 0.3, transform: 'rotate(-25deg)' }} />
        </WatermarkWrapper>
        <WatermarkWrapper $offset="0px">
          <WatermarkImage src={logoImg} alt="Watermark Center" style={{ width: '250px', maxWidth: '25vw', opacity: 0.3, transform: 'rotate(-25deg)' }} />
        </WatermarkWrapper>
        <WatermarkWrapper $offset="120px">
          <WatermarkImage src={logoImg} alt="Watermark Right" style={{ width: '250px', maxWidth: '25vw', opacity: 0.3, transform: 'rotate(-25deg)' }} />
        </WatermarkWrapper>
      </WatermarkOverlay>
      <Sidebar activeSection={activeSection} onNavigate={onNavigate} />
      <MainWrapper>
        {/* <Header /> */}
        <ContentArea>
          {children}
        </ContentArea>
        {activeSection !== 'home' && (
          <BottomNav currentSection={activeSection} onNavigate={onNavigate} />
        )}
      </MainWrapper>
    </AppContainer>
  );
};
