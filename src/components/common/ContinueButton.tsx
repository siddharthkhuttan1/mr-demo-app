import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.xl};
  padding: ${props => props.theme.spacing.lg} 0;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
    opacity: 0.95;
  }

  &:active {
    transform: translateY(0);
  }
`;

const Label = styled.span`
  opacity: 0.8;
  font-weight: 500;
  font-size: 13px;
  margin-right: 4px;
`;

interface ContinueButtonProps {
  to: string;
  label: string;
  onNavigate: (section: string) => void;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({ to, label, onNavigate }) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={() => onNavigate(to)}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Label>Next Section</Label>
          {label}
        </div>
        <ChevronRight size={24} />
      </StyledButton>
    </ButtonWrapper>
  );
};
