import React from 'react';
import styled from 'styled-components';
import { 
  User, 
  Activity, 
  Thermometer, 
  Shield, 
  CheckCircle2, 
  Info,
  Link,
  Microscope,
  Calendar
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
  h1 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 4px;
  }
  p {
    font-size: 15px;
    color: ${props => props.theme.colors.text.muted};
    max-width: 800px;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 280px;
  gap: ${props => props.theme.spacing.md};
`;

const PatientSummary = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
    
    .icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #eff6ff;
      color: ${props => props.theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    h3 { font-size: 15px; font-weight: 700; }
  }
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child { border-bottom: none; }

  .icon { color: ${props => props.theme.colors.accent.blue}; flex-shrink: 0; }
  .text { font-size: 12px; font-weight: 600; color: ${props => props.theme.colors.text.main}; }
`;

const ProgressionGrid = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  .header {
    h3 { font-size: 15px; font-weight: 700; }
  }
`;

const ImageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const ImageSlot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  .badge {
    align-self: center;
    padding: 4px 12px;
    background-color: #eff6ff;
    color: ${props => props.theme.colors.primary};
    font-size: 11px;
    font-weight: 800;
    border-radius: 4px;
  }
  
  .label {
    text-align: center;
    font-size: 11px;
    color: ${props => props.theme.colors.text.muted};
  }

  .box {
    width: 100%;
    aspect-ratio: 3/2;
    background-color: #f8fafc;
    border: 1px dashed ${props => props.theme.colors.border};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.01) 10px, rgba(0,0,0,0.01) 20px);
    
    .link-icon { width: 18px; height: 18px; color: #f43f5e; }
    span { font-size: 9px; font-weight: 700; color: ${props => props.theme.colors.text.light}; text-transform: uppercase; }
  }

  .desc {
    font-size: 11px;
    color: ${props => props.theme.colors.text.muted};
    text-align: center;
    line-height: 1.4;
  }
`;

const InterpretationCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  padding: ${props => props.theme.spacing.md};
  
  .icon-box {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 { font-size: 14px; font-weight: 800; }
  p { font-size: 12px; color: ${props => props.theme.colors.text.muted}; line-height: 1.6; }
  
  .highlight { color: ${props => props.theme.colors.primary}; font-weight: 800; }
`;

const TimelineSection = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h4 { font-size: 15px; font-weight: 700; }
  span { font-size: 11px; color: ${props => props.theme.colors.text.muted}; }
`;

const TimelineTrack = styled.div`
  position: relative;
  padding: 24px 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 58px;
    left: 70px;
    right: 70px;
    height: 3px;
    background-color: #e2e8f0;
    z-index: 0;
  }

  .progress {
    position: absolute;
    top: 58px;
    left: 70px;
    width: 60%;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    z-index: 1;
  }
`;

const TimelineNodes = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const TimelineNode = styled.div<{ active?: boolean, completed?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;

  .point {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.completed ? props.theme.colors.primary : 'white'};
    border: 3px solid ${props => props.completed || props.active ? props.theme.colors.primary : '#e2e8f0'};
    transition: all 0.3s ease;
    z-index: 2;
  }

  .label-group {
    text-align: center;
    h5 { font-size: 12px; font-weight: 800; margin-bottom: 4px; color: ${props => props.active || props.completed ? props.theme.colors.text.main : props.theme.colors.text.light}; }
    p { font-size: 10px; color: ${props => props.theme.colors.text.muted}; line-height: 1.3; }
    .week { font-size: 10px; font-weight: 700; color: ${props => props.theme.colors.text.light}; margin-bottom: 4px; display: block; }
  }
`;

export const Case: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Section 07</h2>
        <h1>Case Highlight</h1>
        <p>A real-world case showing the impact of HOCl-based wound care.</p>
      </Header>

      <MainGrid>
        <PatientSummary>
          <div className="title">
            <div className="icon"><User size={18} /></div>
            <h3>Patient Summary</h3>
          </div>
          <SummaryItem>
            <Activity size={14} className="icon" />
            <span className="text">65-year-old male</span>
          </SummaryItem>
          <SummaryItem>
            <Activity size={14} className="icon" />
            <span className="text">Diabetic for 18 years</span>
          </SummaryItem>
          <SummaryItem>
            <Activity size={14} className="icon" />
            <span className="text">Right foot wound (diabetic foot case)</span>
          </SummaryItem>
          <SummaryItem>
            <Info size={14} className="icon" />
            <span className="text">Previously counseled for foot amputation</span>
          </SummaryItem>
          <SummaryItem>
            <Shield size={14} className="icon" />
            <span className="text">HOCl protocol introduced</span>
          </SummaryItem>
          <SummaryItem>
            <CheckCircle2 size={14} className="icon" />
            <span className="text">Near-complete closure in 15 weeks</span>
          </SummaryItem>
          <SummaryItem>
            <Activity size={14} className="icon" />
            <span className="text">Limb preserved - amputation avoided</span>
          </SummaryItem>
        </PatientSummary>

        <ProgressionGrid>
          <div className="header">
            <h3>Wound Progression</h3>
          </div>
          <ImageRow>
            <ImageSlot>
              <div className="badge">Week 0</div>
              <div className="label">Before treatment</div>
              <div className="box">
                <Link size={24} className="link-icon" />
                <span>[ clinical photo week 0 ]</span>
              </div>
              <p className="desc">Open ulcer with slough and signs of infection</p>
            </ImageSlot>
            <ImageSlot>
              <div className="badge">Week 6</div>
              <div className="label">During treatment</div>
              <div className="box">
                <Link size={24} className="link-icon" />
                <span>[ clinical photo week 6 ]</span>
              </div>
              <p className="desc">Reduced wound size with healthy granulation and less exudate</p>
            </ImageSlot>
            <ImageSlot>
              <div className="badge">Week 15</div>
              <div className="label">After treatment</div>
              <div className="box">
                <Link size={24} className="link-icon" />
                <span>[ clinical photo week 15 ]</span>
              </div>
              <p className="desc">Near-complete closure with healthy epithelial tissue</p>
            </ImageSlot>
          </ImageRow>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>
            <Info size={14} color="#64748b" />
            <span style={{ fontSize: '11px', color: '#64748b' }}>Images shown for illustrative purposes with patient consent.</span>
          </div>
        </ProgressionGrid>

        <InterpretationCard>
          <div className="icon-box"><Microscope size={28} /></div>
          <h4>Scientific Interpretation</h4>
          <p>
            In this highlighted case, <span className="highlight">HOCl-based wound care</span> was associated with infection control and near-complete wound closure over 15 weeks.
          </p>
        </InterpretationCard>
      </MainGrid>

      <TimelineSection>
        <TimelineHeader>
          <h4>Healing Journey Timeline (Weeks)</h4>
          <span>Drag the marker to scrub progress</span>
        </TimelineHeader>
        <TimelineTrack>
          <div className="progress"></div>
          <TimelineNodes>
            {[
              { week: 0, title: 'Baseline', desc: 'Open wound with infection' },
              { week: 3, title: 'Early Response', desc: 'Infection reducing, less exudate' },
              { week: 6, title: 'Significant Improvement', desc: '>95% reduction in size/volume' },
              { week: 9, title: 'Advanced Healing', desc: 'Healthy granulation and epithelialization' },
              { week: 12, title: 'Near Closure', desc: 'Wound almost completely closed' },
              { week: 15, title: 'Outcome', desc: 'Near-complete closure, limb preserved' },
            ].map((node, i) => (
              <TimelineNode key={i} completed={i < 3} active={i === 3}>
                <div className="label-group">
                  <span className="week">Week {node.week}</span>
                </div>
                <div className="point"></div>
                <div className="label-group">
                  <h5>{node.title}</h5>
                  <p>{node.desc}</p>
                </div>
              </TimelineNode>
            ))}
          </TimelineNodes>
        </TimelineTrack>
        <div style={{ padding: '12px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Info size={14} color="#3b82f6" />
          <span style={{ fontSize: '11px', color: '#64748b' }}>Clinical images should be used only with appropriate patient consent and permissions.</span>
        </div>
      </TimelineSection>
    </Container>
  );
};
