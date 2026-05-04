import React from 'react';
import styled from 'styled-components';
import { 
  Droplet, 
  Sparkles, 
  LayoutGrid, 
  Minus, 
  Wind, 
  ShieldCheck, 
  Zap, 
  RefreshCcw, 
  CheckCircle,
  Heart,
  Info
} from 'lucide-react';

import hocl1 from '../assets/hocl1.png';
import hocl2 from '../assets/hocl2.png';
import hocl3 from '../assets/hocl3.png';
import hocl4 from '../assets/hocl4.png';
import hocl5 from '../assets/hocl5.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xxl};
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .text-content {
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
      max-width: 600px;
    }
  }
`;

const HighlightBox = styled.div`
  background-color: #f8fafc;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.md};
  max-width: 350px;
  box-shadow: ${props => props.theme.shadows.sm};

  h4 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.theme.colors.text.muted};
  }
`;

const DiagramSection = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  position: relative;
`;

const DiagramHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  h3 { font-size: 16px; font-weight: 700; }
  .info {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.light};
    text-transform: uppercase;
  }
`;

const StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${props => props.theme.spacing.lg};
  position: relative;
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const StepHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-height: 48px;

  h5 {
    font-size: 13px;
    font-weight: 600;
    color: ${props => props.theme.colors.text.main};
    margin: 0;
    line-height: 1.3;
    padding-top: 4px;
  }
`;

const StepCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StepIconWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: transparent;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

const StepImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DashedArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -25px; /* Adjust based on your gap */
  width: 30px;
  height: 2px;
  background-image: linear-gradient(to right, #0f172a 50%, transparent 50%);
  background-size: 6px 100%;
  transform: translateY(-50%);

  &::after {
    content: '';
    position: absolute;
    right: -2px;
    top: -3.5px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #0f172a;
    border-right: 2px solid #0f172a;
    transform: rotate(45deg);
  }
`;

const StepInfo = styled.div`
  p {
    font-size: 12px;
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.5;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${props => props.theme.spacing.md};
`;

const SmallCard = styled.div<{ accent: string }>`
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    border-color: ${props => props.accent};
  }

  .icon {
    width: 32px;
    height: 32px;
    border-radius: ${props => props.theme.borderRadius.md};
    background-color: ${props => props.accent}15;
    color: ${props => props.accent};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 11px;
    font-weight: 700;
    line-height: 1.3;
    color: ${props => props.theme.colors.text.main};
  }
`;

export const Solution: React.FC = () => {
  return (
    <Container>
      <Header>
        <div className="text-content">
          <h2>Section 04</h2>
          <h1>The Solution: <span>Hypochlorous Acid</span></h1>
          <p>A naturally occurring molecule with broad-spectrum antimicrobial activity that may support wound healing.</p>
        </div>

        <HighlightBox>
          <h4>
            <Sparkles size={16} />
            HOCl is a natural part of the innate immune response
          </h4>
          <ul>
            <li><CheckCircle size={14} color="#10b981" /> Supports infection control</li>
            <li><CheckCircle size={14} color="#10b981" /> Helps reduce microbial burden</li>
            <li><CheckCircle size={14} color="#10b981" /> May support wound healing as part of wound care</li>
          </ul>
        </HighlightBox>
      </Header>

      <DiagramSection>
        <DiagramHeader>
          <h3>How Hypochlorous Acid (HOCl) works</h3>
          <div className="info">
            <Info size={14} />
            mechanism overview
          </div>
        </DiagramHeader>

        <StepGrid>
          {[
            { id: 1, title: 'HOCl contacts microbes', desc: 'HOCl penetrates the microbial cell.', image: hocl1 },
            { id: 2, title: 'Oxidative damage to cell walls', desc: 'HOCl oxidizes cell wall components.', image: hocl2 },
            { id: 3, title: 'Disruption of membrane, proteins & DNA', desc: 'Essential structures are damaged and functions are impaired.', image: hocl3 },
            { id: 4, title: 'Microbial breakdown / reduced burden', desc: 'Microorganisms are inactivated and burden is reduced.', image: hocl4 },
            { id: 5, title: 'Cleaner wound environment', desc: 'Supports a healthier wound environment for healing.', image: hocl5 },
          ].map((step, index) => (
            <StepItem key={step.id}>
              <StepHeader>
                <StepCircle>{step.id}</StepCircle>
                <h5>{step.title}</h5>
              </StepHeader>
              <ImageContainer>
                <StepIconWrapper>
                  <StepImage src={step.image} alt={step.title} />
                </StepIconWrapper>
                {index < 4 && <DashedArrow />}
              </ImageContainer>
              <StepInfo>
                <p>{step.desc}</p>
              </StepInfo>
            </StepItem>
          ))}
        </StepGrid>
      </DiagramSection>

      <FooterGrid>
        <SmallCard accent="#3b82f6">
          <div className="icon"><ShieldCheck size={18} /></div>
          <span>Broad-spectrum antimicrobial activity</span>
        </SmallCard>
        <SmallCard accent="#10b981">
          <div className="icon"><Zap size={18} /></div>
          <span>Helps disrupt biofilms</span>
        </SmallCard>
        <SmallCard accent="#94a3b8">
          <div className="icon"><Minus size={18} /></div>
          <span>Helps reduce microbial burden</span>
        </SmallCard>
        <SmallCard accent="#22c55e">
          <div className="icon"><RefreshCcw size={18} /></div>
          <span>Supports infection control</span>
        </SmallCard>
        <SmallCard accent="#f43f5e">
          <div className="icon"><Heart size={18} /></div>
          <span>May support wound healing as part of care</span>
        </SmallCard>
      </FooterGrid>
    </Container>
  );
};
