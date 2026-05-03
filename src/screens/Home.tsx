import React from 'react';
import styled from 'styled-components';
import { Play, FileText, User, ChevronRight, Droplet, Clock, Users, FlaskConical, BarChart2, CheckCircle } from 'lucide-react';
import vidasolnLogo from '../assets/vidasoln-logo.jpeg';
import productImg from '../assets/vida-med-super-oxidized.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${props => props.theme.spacing.xl};
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;
  min-height: 400px;
  background: white;
  margin: -${props => props.theme.spacing.lg} -${props => props.theme.spacing.lg} 0 -${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const BrandingLogo = styled.img`
  height: 48px;
  width: auto;
  object-fit: contain;
  align-self: flex-start;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Tagline = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  line-height: 1.1;
  color: ${props => props.theme.colors.text.main};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.text.muted};
  line-height: 1.5;
  max-width: 480px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.sm};
  max-width: 500px;
`;

const CTAButton = styled.button<{ primary?: boolean; fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 14px;
  font-weight: 700;
  transition: ${props => props.theme.transitions.default};
  box-shadow: ${props => props.theme.shadows.sm};
  grid-column: ${props => props.fullWidth ? 'span 2' : 'span 1'};

  background-color: ${props => props.primary ? props.theme.colors.primary : 'white'};
  color: ${props => props.primary ? 'white' : props.theme.colors.text.main};
  border: 1px solid ${props => props.primary ? 'transparent' : props.theme.colors.border};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
    background-color: ${props => props.primary ? props.theme.colors.primaryDark : '#f8fafc'};
  }
`;

const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 440px;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.08));
`;

const WalkthroughGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const GridHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const GridTitle = styled.div`
  h3 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.text.light};
    margin-bottom: 4px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${props => props.theme.spacing.md};
`;

const WalkthroughCard = styled.div<{ accent: string }>`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  border: 1px solid ${props => props.theme.colors.border};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: ${props => props.accent};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.accent};
  }
`;

const CardIconWrapper = styled.div<{ accent: string }>`
  width: 100%;
  height: 100px;
  background-color: ${props => props.accent}15;
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.accent};
`;

const CardInfo = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  p {
    font-size: 11px;
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.4;
  }
`;

const CardNumber = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: ${props => props.theme.colors.text.light};
`;

interface HomeProps {
  onNavigate: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const cards = [
    { id: 'challenge', icon: Clock, accent: '#f97316', title: 'Challenge', desc: 'Why chronic wounds stall - local, systemic & iatrogenic factors.' },
    { id: 'biofilms', icon: Users, accent: '#10b981', title: 'Biofilms', desc: 'Microbial fortresses that shield pathogens and sustain inflammation.' },
    { id: 'solution', icon: Droplet, accent: '#3b82f6', title: 'Solution', desc: 'How HOCl disrupts microbes while remaining tissue-safe.' },
    { id: 'protocol', icon: FlaskConical, accent: '#a855f7', title: 'Protocol', desc: 'The five-step VidaMed wound-care procedure.' },
    { id: 'results', icon: BarChart2, accent: '#22c55e', title: 'Results', desc: 'Outcomes from the 2023-2024 prospective study cohort.' },
    { id: 'case', icon: User, accent: '#f59e0b', title: 'Case', desc: 'A real-world patient progression, week by week.' },
    { id: 'conclusion', icon: CheckCircle, accent: '#3b82f6', title: 'Conclusion', desc: 'Key takeaways and next steps for clinical practice.' },
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <TextContent>
          <BrandingLogo src={vidasolnLogo} alt="Vida Solutions Logo" />
          <Tagline>Prospective Clinical Study • 2023-2024</Tagline>
          <Title>Effect of Hypochlorous<br />Acid in Open Wound<br />Healing</Title>
          <Description>
            An interactive clinical experience exploring HOCl-based wound care — mechanism, methodology, results, and a real-world case progression.
          </Description>
          <ButtonGroup>
            <CTAButton primary fullWidth onClick={() => onNavigate('challenge')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Play size={16} fill="currentColor" />
                Start interactive walkthrough
              </div>
              <ChevronRight size={18} />
            </CTAButton>
            <CTAButton onClick={() => onNavigate('results')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText size={16} />
                Study summary
              </div>
              <ChevronRight size={18} />
            </CTAButton>
            <CTAButton onClick={() => onNavigate('case')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <User size={16} />
                Case highlight
              </div>
              <ChevronRight size={18} />
            </CTAButton>
          </ButtonGroup>
        </TextContent>

        <VisualContent>
          <ProductImage src={productImg} alt="VidaMed Product" />
        </VisualContent>
      </HeroSection>

      <WalkthroughGrid>
        <GridHeader>
          <GridTitle>
            <h3>Walkthrough</h3>
            <p>Seven sections • evidence → case</p>
          </GridTitle>
        </GridHeader>
        <CardGrid>
          {cards.map((card, index) => (
            <WalkthroughCard
              key={card.id}
              accent={card.accent}
              onClick={() => onNavigate(card.id)}
            >
              <CardNumber>0{index + 1}</CardNumber>
              <CardIconWrapper accent={card.accent}>
                <card.icon size={40} strokeWidth={1.5} />
              </CardIconWrapper>
              <CardInfo>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </CardInfo>
            </WalkthroughCard>
          ))}
        </CardGrid>
      </WalkthroughGrid>
    </HomeContainer>
  );
};
