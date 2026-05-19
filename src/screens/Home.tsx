import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Play, FileText, User, ChevronRight, Droplet, Clock, Users, FlaskConical, BarChart2, CheckCircle } from 'lucide-react';
import productImg from '../assets/vidamed1.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${props => props.theme.spacing.xl};
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #eef7ff 0%, #d4eaf7 100%);
  margin: -${props => props.theme.spacing.md} -${props => props.theme.spacing.md} -${props => props.theme.spacing.md} -${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  @media (max-width: 1024px) {
    //grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xxl};
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl};
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  height: 100%;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
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

const HighlightText = styled.span`
  color: ${props => props.theme.colors.primary};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.text.muted};
  line-height: 1.5;
  max-width: 480px;
  margin-bottom: ${props => props.theme.spacing.lg};

  @media (max-width: 1024px) {
    max-width: 600px;
  }
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
  font-size: 18px;
  font-weight: 700;
  transition: ${props => props.theme.transitions.default};
 /// box-shadow: ${props => props.theme.shadows.sm};
  grid-column: ${props => props.fullWidth ? 'span 2' : 'span 1'};

  background: ${props => props.primary
    ? `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.primaryLight} 100%)`
    : 'white'};
  color: ${props => props.primary ? 'white' : props.theme.colors.text.main};
  border: 1px solid ${props => props.primary ? 'transparent' : props.theme.colors.border};
  height: 80px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
    opacity: ${props => props.primary ? 0.9 : 1};
    background: ${props => !props.primary ? '#f8fafc' : undefined};
  }
`;

const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 60px;
  }
`;

const DiagramSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
    @media (max-width: 1024px) {
    display: none;
  }
`;

const DiagramText = styled.div`
  text-align: center;
  color: #0eaef4;
  h2 {
    font-size: 52px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
    letter-spacing: -1px;
  }
  h3 {
    font-size: 24px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
  }
  p {
    font-size: 11px;
    font-weight: 700;
    margin: 6px 0 0 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #4a749e;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProductCard = styled.div`
  background: transparent;
  border-radius: 32px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  max-height: 820px;
  width: 280px;
  position: relative;

  @media (max-width: 1024px) {
    height: 60vh;
    padding: 0;
  }
`;

const ProductImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  // animation: ${floatAnimation} 4s ease-in-out infinite;
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
        <TextContent style={{ marginTop: "16px" }}>
          <Tagline>Prospective Clinical Study • 2023-2024</Tagline>
          <Title style={{ marginTop: "60px" }}>Effect of <br /><HighlightText>Hypochlorous<br />Acid</HighlightText><br />in Open Wound<br />Healing</Title>
          <Description>
            An interactive clinical experience exploring HOCl-based wound care — mechanism, methodology, results, and a real-world case progression.
          </Description>
          <ButtonGroup>
            <CTAButton primary fullWidth onClick={() => onNavigate('challenge')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: "16px" }}>
                <Play size={16} fill="currentColor" />
                Start interactive walkthrough
              </div>
              <ChevronRight size={18} />
            </CTAButton>
            <CTAButton onClick={() => onNavigate('results')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: "16px" }}>
                <FileText size={16} />
                Study summary
              </div>
              <ChevronRight size={18} />
            </CTAButton>
            <CTAButton onClick={() => onNavigate('case')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: "16px" }}>
                <User size={16} />
                Case highlight
              </div>
              <ChevronRight size={18} />
            </CTAButton>
          </ButtonGroup>
        </TextContent>

        <VisualContent>
          <DiagramSection>
            <DiagramText>
              <h2>HOCl</h2>
              <p>HYPOCHLOROUS ACID</p>
            </DiagramText>

            <svg width="200" height="100" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.04))' }}>
              <line x1="60" y1="80" x2="120" y2="40" stroke="#bae6fd" strokeWidth="4" strokeLinecap="round" />
              <line x1="120" y1="40" x2="180" y2="80" stroke="#bae6fd" strokeWidth="4" strokeLinecap="round" />

              <circle cx="50" cy="85" r="24" fill="white" stroke="#e0f2fe" strokeWidth="2" />
              <text x="50" y="92" fontSize="22" fontWeight="800" fill="#2c4c70" textAnchor="middle">H</text>

              <circle cx="120" cy="35" r="28" fill="white" stroke="#e0f2fe" strokeWidth="2" />
              <text x="120" y="43" fontSize="24" fontWeight="800" fill="#2c4c70" textAnchor="middle">O</text>

              <circle cx="190" cy="85" r="24" fill="white" stroke="#e0f2fe" strokeWidth="2" />
              <text x="190" y="92" fontSize="22" fontWeight="800" fill="#2c4c70" textAnchor="middle">Cl</text>
            </svg>

            <DiagramText>
              <h3>HOCl</h3>
              <p style={{ fontSize: '9px' }}>CHEMICAL COMPOSITION DIAGRAM</p>
            </DiagramText>
          </DiagramSection>

          <ProductCard>
            <ProductImage src={productImg} alt="VidaMed Product" />
          </ProductCard>
        </VisualContent>
      </HeroSection>

      {/* <WalkthroughGrid>
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
      </WalkthroughGrid> */}
    </HomeContainer>
  );
};
