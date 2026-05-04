import React from 'react';
import styled from 'styled-components';
import { Network, ShieldAlert, Activity, AlertCircle } from 'lucide-react';
import Shield from '@mui/icons-material/HealthAndSafety';
import Biotech from '@mui/icons-material/Biotech';
import Search from '@mui/icons-material/Search';

import biofilm1 from '../assets/biofilm-1.png';
import biofilm2 from '../assets/biofilm-2.png';
import biofilm3 from '../assets/biofilm-3.png';
import biofilm4 from '../assets/biofilm-4.png';
import biofilm5 from '../assets/biofilm-5.png';
import staphAureus from '../assets/Staphylococcus_aureus.jpg';
import pseudoAeruginosa from '../assets/Pseudomonas-Aeruginosa.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20px;
`;

const TopSection = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  align-items: stretch;
`;

const HeroContent = styled.div`
  flex: 1;
  position: relative;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  background-color: white;
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.border};
`;

const HeroText = styled.div`
  max-width: 500px;
  position: relative;
  z-index: 10;
  
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
    max-width: 380px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  height: auto;
  object-fit: contain;
  opacity: 0.95;
`;

const InfoBox = styled.div`
  width: 380px;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const InfoItem = styled.div`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ToastIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  flex-shrink: 0;
`;

const ToastContent = styled.div`
  flex: 1;
  h3 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
    color: ${props => props.theme.colors.text.main};
  }
  p {
    font-size: 12px;
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.4;
  }
`;

const FormationSection = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
`;

const SectionHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.main};
  }
`;

const StepsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.md};
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background-color: #f8fafc;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.sm};
`;

const StepImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.sm};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StepBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  z-index: 2;
`;

const StepText = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
    color: ${props => props.theme.colors.text.main};
  }
  p {
    font-size: 12px;
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.4;
  }
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${props => props.theme.spacing.lg};
  flex: 1;
`;

const PathogensContainer = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${props => props.theme.colors.text.main};
  }
  
  .cards-row {
    display: flex;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const PathogenCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  flex: 1;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  
  img {
    width: 48px;
    height: 48px;
    border-radius: ${props => props.theme.borderRadius.md};
    object-fit: cover;
  }
  
  div {
    h4 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    p {
      font-size: 12px;
      color: ${props => props.theme.colors.text.muted};
    }
  }
`;

const TakeawayCard = styled.div`
  background-color: #f0f9ff;
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  border: 1px solid #bae6fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  
  .icon-wrapper {
    width: 36px;
    height: 36px;
    background-color: #38bdf8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: #0c4a6e;
  }
  
  p {
    font-size: 14px;
    color: #0c4a6e;
    line-height: 1.5;
  }
`;

export const Biofilms: React.FC = () => {
  return (
    <Container>
      <TopSection>
        <HeroContent>
          <HeroText>
            <h1>The Barrier: Biofilms</h1>
            <p>Biofilms are structured microbial communities embedded in a self-produced matrix that protect pathogens, sustain inflammation, and delay wound healing.</p>
          </HeroText>
          <HeroImage src={biofilm1} alt="Biofilm illustration" />
        </HeroContent>

        <InfoBox>
          <InfoItem>
            <ToastIconContainer>
              <Search fontSize="medium" />
            </ToastIconContainer>
            <ToastContent>
              <h3>What are Biofilms?</h3>
              <p>Structured communities of microorganisms encased in a protective extracellular matrix.</p>
            </ToastContent>
          </InfoItem>

          <InfoItem>
            <ToastIconContainer>
              <ShieldAlert size={20} />
            </ToastIconContainer>
            <ToastContent>
              <h3>Why are they difficult to treat?</h3>
              <p>The matrix protects bacteria from antibiotics and host immune responses.</p>
            </ToastContent>
          </InfoItem>

          <InfoItem>
            <ToastIconContainer>
              <Activity size={20} />
            </ToastIconContainer>
            <ToastContent>
              <h3>How do they impair healing?</h3>
              <p>They sustain inflammation, increase tissue damage, and delay wound repair.</p>
            </ToastContent>
          </InfoItem>
        </InfoBox>
      </TopSection>

      <FormationSection>
        <SectionHeader>
          <h2>How Biofilms Form in Wounds</h2>
        </SectionHeader>
        <StepsContainer>
          <StepItem>
            <StepImageContainer>
              <StepBadge>1</StepBadge>
              <img src={biofilm1} alt="Step 1" style={{ objectFit: "contain" }} />
            </StepImageContainer>
            <StepText>
              <h4>Bacteria attach to wound surface</h4>
              <p>Microorganisms adhere to the wound bed.</p>
            </StepText>
          </StepItem>

          <StepItem>
            <StepImageContainer>
              <StepBadge>2</StepBadge>
              <img src={biofilm2} alt="Step 2" style={{ objectFit: "contain" }} />
            </StepImageContainer>
            <StepText>
              <h4>Protective extracellular matrix forms</h4>
              <p>Bacteria produce a matrix that encases and protects the community.</p>
            </StepText>
          </StepItem>

          <StepItem>
            <StepImageContainer>
              <StepBadge>3</StepBadge>
              <img src={biofilm3} alt="Step 3" style={{ objectFit: "contain" }} />
            </StepImageContainer>
            <StepText>
              <h4>Persistent inflammation develops</h4>
              <p>Biofilms trigger continuous immune response and tissue irritation.</p>
            </StepText>
          </StepItem>

          <StepItem>
            <StepImageContainer>
              <StepBadge>4</StepBadge>
              <img src={biofilm4} alt="Step 4" style={{ objectFit: "contain" }} />
            </StepImageContainer>
            <StepText>
              <h4>Infection reservoir remains</h4>
              <p>Biofilms act as a reservoir for bacteria, leading to chronic infection.</p>
            </StepText>
          </StepItem>

          <StepItem>
            <StepImageContainer>
              <StepBadge>5</StepBadge>
              <img src={biofilm5} alt="Step 5" style={{ objectFit: "contain" }} />
            </StepImageContainer>
            <StepText>
              <h4>Healing is delayed</h4>
              <p>Ongoing inflammation and tissue damage prevent normal healing.</p>
            </StepText>
          </StepItem>
        </StepsContainer>
      </FormationSection>

      <BottomSection>
        <PathogensContainer>
          <h3>Common Pathogens in Biofilms</h3>
          <div className="cards-row">
            <PathogenCard>
              <img src={staphAureus} alt="Staphylococcus aureus" />
              <div>
                <h4>Staphylococcus aureus <AlertCircle size={14} color="#94a3b8" /></h4>
                <p>Gram-positive cocci. Common in chronic wounds and difficult to eradicate.</p>
              </div>
            </PathogenCard>

            <PathogenCard>
              <img src={pseudoAeruginosa} alt="Pseudomonas aeruginosa" />
              <div>
                <h4>Pseudomonas aeruginosa <AlertCircle size={14} color="#94a3b8" /></h4>
                <p>Gram-negative rod. Associated with chronic wounds and biofilm formation.</p>
              </div>
            </PathogenCard>
          </div>
        </PathogensContainer>

        <TakeawayCard>
          <div className="icon-wrapper">
            <Shield size={24} />
          </div>
          <div>
            <h3>Key Takeaway</h3>
            <p>Biofilms protect bacteria from treatment and immune defense, sustain inflammation, and are a major barrier to effective wound healing.</p>
          </div>
        </TakeawayCard>
      </BottomSection>
    </Container>
  );
};
