import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScale } from '../../hooks/useScale';
import { Wifi, Battery, Signal } from 'lucide-react';

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #eaf1f8; /* Updated to match design image */
  overflow: hidden;
`;

const IpadBezel = styled.div<{ scale: number }>`
  width: 1414px; /* 1366 + 48 bezel */
  height: 1072px; /* 1024 + 48 bezel */
  background-color: #0b1220;
  border-radius: 48px;
  padding: 24px; /* Bezel thickness */
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4), inset 0 0 0 2px #333;
  transform: scale(${props => props.scale});
  transform-origin: center center;
  display: flex;
  flex-direction: column;
`;

const ScreenArea = styled.div`
  flex: 1;
  background-color: #F4F8FD; /* Soft blue background */
  border-radius: 32px; /* Inner screen border radius */
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StatusBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #1a2b3c;
  background-color: transparent;
  z-index: 100;
`;

const StatusLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <StatusBarContainer>
      <StatusLeft>
        <span>{formattedTime}</span>
        <span style={{ opacity: 0.7 }}>{formattedDate}</span>
      </StatusLeft>
      <StatusRight>
        <Signal size={16} />
        <Wifi size={16} />
        <span style={{ fontSize: '12px' }}>100%</span>
        <Battery size={16} />
      </StatusRight>
    </StatusBarContainer>
  );
};

interface DeviceSimulatorProps {
  children: React.ReactNode;
}

export const DeviceSimulator: React.FC<DeviceSimulatorProps> = ({ children }) => {
  const scale = useScale();

  return (
    <OuterContainer>
      <IpadBezel scale={scale}>
        <ScreenArea>
          <StatusBar />
          {children}
        </ScreenArea>
      </IpadBezel>
    </OuterContainer>
  );
};
