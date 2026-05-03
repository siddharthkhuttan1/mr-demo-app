import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  height: 100%;
`;

const Header = styled.div`
  h2 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 4px;
  }
  h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    color: ${props => props.theme.colors.text.muted};
    max-width: 800px;
  }
`;

const ContentCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.sm};
  flex: 1;
  max-height: 200px;
`;

const ReferenceList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20px;
  
  li {
    font-size: 14px;
    color: ${props => props.theme.colors.text.main};
    font-weight: 500;
    line-height: 1.5;
    
    &::marker {
      font-weight: 800;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const References: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Appendix</h2>
        <h1>References & Notes</h1>
        <p>Sources cited in this clinical evidence experience.</p>
      </Header>

      <ContentCard>
        <ReferenceList>
          <li>Reference placeholder · Hypochlorous acid mechanism of action.</li>
          <li>Reference placeholder · Biofilms in chronic wounds.</li>
          <li>Reference placeholder · Diabetic foot ulcer management.</li>
          <li>Reference placeholder · Wound care protocols, prospective study.</li>
        </ReferenceList>
      </ContentCard>
    </Container>
  );
};
