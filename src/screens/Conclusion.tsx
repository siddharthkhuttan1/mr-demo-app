import React from 'react';
import styled from 'styled-components';
import {
  Droplet,
  BarChart2,
  Users,
  User,
  Shield,
  Search,
  FileText,
  Download,
  MessageSquare,
  ArrowRight,
  Info
} from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  height: 100%;
  overflow-y: auto;
  padding-bottom: ${props => props.theme.spacing.xl};
`;

const Header = styled.div`
  h2 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 4px;
  }
`;

const HeroContent = styled.div`
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  background-color: white;
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.border};
  flex-shrink: 0;
`;

const HeroText = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 12px;
    color: ${props => props.theme.colors.text.main};
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.5;
    max-width: 600px;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const SectionLabel = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};
`;

const SummaryCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 4px solid ${props => props.theme.colors.primary};

  .icon-box {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f1f5f9;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 { font-size: 14px; font-weight: 800; color: ${props => props.theme.colors.primary}; }
  p { font-size: 12px; color: ${props => props.theme.colors.text.muted}; line-height: 1.5; }
`;

const RecommendationCard = styled(SummaryCard)`
  border-bottom-color: #4f46e5;
  .icon-box { color: #4f46e5; }
  h3 { color: #4f46e5; }
  
  ul {
    padding-left: 18px;
    li {
      font-size: 12px;
      color: ${props => props.theme.colors.text.muted};
      margin-bottom: 8px;
      line-height: 1.4;
      &::marker { color: #4f46e5; }
    }
  }
`;

const EvidenceSection = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  text-align: center;
  
  h3 { font-size: 14px; font-weight: 800; }
`;

const CTAContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.md};
  width: 100%;
`;

const CTAButton = styled.button<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .icon { flex-shrink: 0; }
  .label { font-size: 14px; font-weight: 700; flex: 1; text-align: left; }
  .arrow { flex-shrink: 0; opacity: 0.7; }
`;

import { ContinueButton } from '../components/common/ContinueButton';

interface ConclusionProps {
  onNavigate: (section: string) => void;
}

export const Conclusion: React.FC<ConclusionProps> = ({ onNavigate }) => {
  const handleAction = (action: string) => {
    alert(`${action} feature simulated for this demo.`);
  };
  return (
    <Container>
      <Header>
        <h2>Section 08</h2>
      </Header>

      <HeroContent>
        <HeroText>
          <h1>Conclusion & Recommendations</h1>
          <p>Key takeaways and next steps from this prospective study on HOCl in open wound healing.</p>
        </HeroText>
      </HeroContent>

      <div>
        <SectionLabel>Study Summary</SectionLabel>
        <SummaryGrid>
          <SummaryCard>
            <div className="icon-box"><Droplet size={20} /></div>
            <h3 style={{ fontSize: "16px" }}>HOCl Demonstrated Potential</h3>
            <p style={{ fontSize: "14px" }}>Stabilized HOCl demonstrated potential as a wound care agent in this prospective case series.</p>
          </SummaryCard>
          <SummaryCard>
            <div className="icon-box"><BarChart2 size={20} /></div>
            <h3 style={{ fontSize: "18px" }}>Observed Outcomes</h3>
            <p style={{ fontSize: "14px" }}>Observed outcomes included infection clearance, wound reduction, final wound closure, and symptom relief.</p>
          </SummaryCard>
          <SummaryCard>
            <div className="icon-box"><Users size={20} /></div>
            <h3 style={{ fontSize: "18px" }}>Need for Future Studies</h3>
            <p style={{ fontSize: "14px" }}>The results support the need for future large-scale, multi-center studies to validate and standardize HOCl-based wound care.</p>
          </SummaryCard>
        </SummaryGrid>
      </div>

      <div>
        <SectionLabel>Recommendations</SectionLabel>
        <SummaryGrid>
          <RecommendationCard>
            <div className="icon-box"><User size={20} /></div>
            <h3 style={{ fontSize: "18px" }}>1. Clinical Integration</h3>
            <ul>
              <li style={{ fontSize: "14px" }}>Consider stabilized HOCl as a first-line option for biofilm-associated chronic wounds.</li>
              <li style={{ fontSize: "14px" }}>Integrate into standard wound care protocols.</li>
            </ul>
          </RecommendationCard>
          <RecommendationCard>
            <div className="icon-box"><Shield size={20} /></div>
            <h3 style={{ fontSize: "18px" }}>2. Targeted Application</h3>
            <ul>
              <li style={{ fontSize: "14px" }}>Highly recommended for diabetic foot ulcers and venous leg ulcers.</li>
              <li style={{ fontSize: "14px" }}>Supports infection control and wound healing.</li>
            </ul>
          </RecommendationCard>
          <RecommendationCard>
            <div className="icon-box"><Search size={20} /></div>
            <h3 style={{ fontSize: "18px" }}>3. Future Directions</h3>
            <ul>
              <li style={{ fontSize: "14px" }}>Initiate large-scale, multi-center clinical studies.</li>
              <li style={{ fontSize: "14px" }}>Establish standardized treatment protocols and long-term outcomes.</li>
            </ul>
          </RecommendationCard>
        </SummaryGrid>
      </div>

      <EvidenceSection>
        <h3 style={{ fontSize: "18px" }}>Explore the Full Evidence</h3>
        <CTAContainer>
          <CTAButton bgColor="#2563eb" onClick={() => handleAction('View Full Study')}>
            <FileText size={20} className="icon" />
            <span className="label">View Full Study</span>
            <ArrowRight size={18} className="arrow" />
          </CTAButton>
          <CTAButton bgColor="#2dd4bf" onClick={() => handleAction('Download Evidence Summary')}>
            <Download size={20} className="icon" />
            <span className="label">Download Evidence Summary</span>
            <ArrowRight size={18} className="arrow" />
          </CTAButton>
          <CTAButton bgColor="#6366f1" onClick={() => handleAction('Request Clinical Discussion')}>
            <MessageSquare size={20} className="icon" />
            <span className="label">Request Clinical Discussion</span>
            <ArrowRight size={18} className="arrow" />
          </CTAButton>
        </CTAContainer>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '8px', width: '100%', marginTop: '8px' }}>
          <Info size={14} color="#64748b" />
          <span style={{ fontSize: '11px', color: '#64748b' }}>For educational and scientific communication purposes only. Not intended as medical advice. Treatment decisions should be made by qualified healthcare professionals.</span>
        </div>
      </EvidenceSection>
      {/* <ContinueButton
        to="references"
        label="Scientific References"
        onNavigate={onNavigate}
      /> */}
    </Container >
  );
};
