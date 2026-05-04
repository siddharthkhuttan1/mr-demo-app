import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BottomNavContainer = styled.div`
  height: 64px;
  width: 100%;
  background-color: white;
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.lg};
  justify-content: space-between;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.02);
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  flex: 1;
  justify-content: center;
`;

const StepList = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.background.main};
  padding: 4px;
  border-radius: 100px;
  border: 1px solid ${props => props.theme.colors.border};
`;

interface StepItemProps {
  active?: boolean;
}

const StepItem = styled.div<StepItemProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  
  background: ${props => props.active
    ? `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.primaryLight} 100%)`
    : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text.muted};

  &:hover {
    background: ${props => props.active
    ? `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.primaryLight} 100%)`
    : props.theme.colors.background.accent};
  }
`;

const StepNumber = styled.span<StepItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 10px;
  background-color: ${props => props.active ? 'rgba(255,255,255,0.2)' : 'white'};
  border: 1px solid ${props => props.active ? 'transparent' : props.theme.colors.border};
`;

const IconButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.muted};
  transition: ${props => props.theme.transitions.default};
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colors.background.main};
    color: ${props => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.background.main};
  }
`;

interface BottomNavProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentSection, onNavigate }) => {
  const steps = [
    { id: 'challenge', label: 'Challenge' },
    { id: 'biofilms', label: 'Biofilms' },
    { id: 'solution', label: 'Solution' },
    { id: 'protocol', label: 'Protocol' },
    { id: 'results', label: 'Results' },
    { id: 'case', label: 'Case' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  const currentIndex = steps.findIndex(s => s.id === currentSection);

  const handlePrev = () => {
    if (currentIndex > 0) onNavigate(steps[currentIndex - 1].id);
  };

  const handleNext = () => {
    if (currentIndex < steps.length - 1) onNavigate(steps[currentIndex + 1].id);
  };

  return (
    <BottomNavContainer>
      <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
        <ChevronLeft size={18} />
      </IconButton>

      <NavContent>
        {/* <NavLabel>Step Navigation</NavLabel> */}
        <StepList>
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              active={currentSection === step.id}
              onClick={() => onNavigate(step.id)}
            >
              <StepNumber active={currentSection === step.id}>{index + 1}</StepNumber>
              {step.label}
            </StepItem>
          ))}
        </StepList>
      </NavContent>

      <IconButton onClick={handleNext} disabled={currentIndex === steps.length - 1}>
        <ChevronRight size={18} />
      </IconButton>
    </BottomNavContainer>
  );
};
