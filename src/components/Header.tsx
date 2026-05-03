import React from 'react';
import styled from 'styled-components';
import { Wifi, Battery } from 'lucide-react';

const HeaderContainer = styled.header`
  height: 40px;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: ${props => props.theme.colors.text.main};
  font-size: 13px;
  font-weight: 500;
  z-index: 10;
`;

const StatusGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const Time = styled.span`
  font-weight: 700;
`;

const AppName = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  color: ${props => props.theme.colors.text.muted};
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <StatusGroup>
        <Time>9:41</Time>
        <span>Wed Apr 29</span>
      </StatusGroup>
      
      <AppName>VidaMed</AppName>

      <StatusGroup>
        <Wifi size={14} />
        <Battery size={14} />
        <span>100%</span>
      </StatusGroup>
    </HeaderContainer>
  );
};
