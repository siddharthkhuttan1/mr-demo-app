import React from 'react';
import styled from 'styled-components';
import {
  Users,
  Calendar,
  Shield,
  Maximize,
  Clock,
  Thermometer,
  Activity,
  Zap,
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

const Card = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  gap: ${props => props.theme.spacing.md};
`;

const StatCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${props => props.theme.spacing.md};
  min-height: 120px;

  .label {
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.main};
    margin-bottom: 12px;
  }

  .value-box {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #f1f5f9;
      color: ${props => props.theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-val {
      text-align: left;
      h3 { font-size: 20px; font-weight: 800; }
      p { font-size: 11px; color: ${props => props.theme.colors.text.muted}; }
    }
  }
`;

const DoughnutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  .chart-box {
    position: relative;
    width: 60px;
    height: 60px;
  }

  .legend {
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      
      .label { margin-bottom: 0; color: ${props => props.theme.colors.text.muted}; font-weight: 500; }
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.sm};
`;

const OutcomesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: ${props => props.theme.spacing.lg};
`;

const OutcomeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${props => props.theme.spacing.sm};
`;

const OutcomeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.sm};
  gap: 12px;

  h4 {
    font-size: 11px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.muted};
    height: 32px;
    display: flex;
    align-items: center;
  }

  .icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #f8fafc;
    border: 1px solid #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.accent.blue};
  }

  .val {
    h5 { font-size: 20px; font-weight: 800; color: ${props => props.theme.colors.primary}; }
    p { font-size: 10px; font-weight: 600; color: ${props => props.theme.colors.text.muted}; }
  }

  &.overall {
    .icon-circle { background-color: #fff1f2; color: #e11d48; border-color: #ffe4e6; }
    .val h5 { color: #e11d48; }
  }
`;

const HealingChart = styled(Card)`
  padding: ${props => props.theme.spacing.md};
  
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
    h4 { font-size: 13px; font-weight: 700; }
    span { font-size: 10px; color: ${props => props.theme.colors.text.muted}; }
  }
`;

const TimelineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  
  .label-group {
    width: 120px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    .icon { color: ${props => props.theme.colors.accent.blue}; }
    .text {
      h5 { font-size: 10px; font-weight: 700; line-height: 1.1; }
      p { font-size: 9px; color: ${props => props.theme.colors.text.muted}; }
    }
  }

  .bar-container {
    flex: 1;
    height: 24px;
    background-color: #f8fafc;
    border-radius: 4px;
    position: relative;
    
    .bar {
      position: absolute;
      height: 8px;
      top: 8px;
      border-radius: 100px;
      background-color: ${props => props.theme.colors.primary}88;
      
      &.active { background-color: ${props => props.theme.colors.primary}; }
    }
  }
`;

const TimelineXAxis = styled.div`
  display: flex;
  margin-left: 132px;
  justify-content: space-between;
  padding-top: 4px;
  border-top: 1px solid #f1f5f9;
  
  span { font-size: 9px; color: ${props => props.theme.colors.text.light}; font-weight: 700; }
`;

const PatientCharsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1.5fr;
  gap: ${props => props.theme.spacing.md};
`;

const CharCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${props => props.theme.spacing.md};
  background-color: #f8fafc;
  border: none;

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.muted};
    
    .dot { width: 6px; height: 6px; border-radius: 50%; }
  }

  .val {
    h4 { font-size: 15px; font-weight: 800; }
    p { font-size: 10px; color: ${props => props.theme.colors.text.muted}; }
  }
`;

const TakeawayCard = styled(Card)`
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  
  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: ${props => props.theme.borderRadius.md};
    background-color: ${props => props.theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .content {
    h4 { font-size: 13px; font-weight: 800; margin-bottom: 4px; }
    p { font-size: 11px; color: ${props => props.theme.colors.text.muted}; line-height: 1.4; }
  }
`;

const DoughnutChart = ({ percent, color, color2 = '#f1f5f9' }: { percent: number, color: string, color2?: string }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle
        cx="30"
        cy="30"
        r={radius}
        fill="transparent"
        stroke={color2}
        strokeWidth="8"
      />
      <circle
        cx="30"
        cy="30"
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 30 30)"
      />
    </svg>
  );
};

export const Results: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Section 06</h2>
        <h1>Results & Statistics</h1>
        <p>Reported outcomes observed in this prospective study evaluating Hypochlorous Acid (HOCl) in open wound healing.</p>
      </Header>

      <SummaryGrid>
        <StatCard>
          <div className="label">Patients</div>
          <div className="value-box">
            <div className="icon"><Users size={20} /></div>
            <div className="main-val">
              <h3>N = 10</h3>
              <p>All completed the study</p>
            </div>
          </div>
        </StatCard>

        <StatCard>
          <div className="label">Gender Distribution</div>
          <DoughnutContainer>
            <div className="chart-box">
              <DoughnutChart percent={70} color="#1d5db2" color2="#f43f5e" />
            </div>
            <div className="legend">
              <div className="item">
                <span className="dot" style={{ backgroundColor: '#1d5db2' }}></span>
                70% <span className="label">Male</span>
              </div>
              <div className="item">
                <span className="dot" style={{ backgroundColor: '#f43f5e' }}></span>
                30% <span className="label">Female</span>
              </div>
            </div>
          </DoughnutContainer>
        </StatCard>

        <StatCard>
          <div className="label">Wound Distribution by Region</div>
          <DoughnutContainer>
            <div className="chart-box">
              <DoughnutChart percent={70} color="#1d5db2" color2="#60a5fa" />
            </div>
            <div className="legend">
              <div className="item">
                <span className="dot" style={{ backgroundColor: '#1d5db2' }}></span>
                70% <span className="label">Lower</span>
              </div>
              <div className="item">
                <span className="dot" style={{ backgroundColor: '#60a5fa' }}></span>
                30% <span className="label">Upper</span>
              </div>
            </div>
          </DoughnutContainer>
        </StatCard>

        <StatCard>
          <div className="label">Study Duration</div>
          <div className="value-box">
            <div className="icon"><Calendar size={20} /></div>
            <div className="main-val">
              <h3 style={{ fontSize: '14px' }}>Jan 2023 – Jan 2024</h3>
              <p>Bliss Hospital, Hyderabad</p>
            </div>
          </div>
        </StatCard>
      </SummaryGrid>

      <div>
        <SectionTitle>Key Reported Outcomes</SectionTitle>
        <OutcomesGrid>
          <OutcomeCards>
            <OutcomeCard>
              <h4>Infection Clearance</h4>
              <div className="icon-circle"><Shield size={24} /></div>
              <div className="val">
                <h5>3–8</h5>
                <p>in almost all cases</p>
              </div>
            </OutcomeCard>
            <OutcomeCard>
              <h4>Wound Size / Volume</h4>
              <div className="icon-circle"><Maximize size={24} /></div>
              <div className="val">
                <h5>&gt;95%</h5>
                <p>after 6 weeks</p>
              </div>
            </OutcomeCard>
            <OutcomeCard>
              <h4>Final Wound Closure</h4>
              <div className="icon-circle"><Clock size={24} /></div>
              <div className="val">
                <h5>8–15</h5>
                <p>in most cases</p>
              </div>
            </OutcomeCard>
            <OutcomeCard>
              <h4>Symptom Relief</h4>
              <div className="icon-circle"><Thermometer size={24} /></div>
              <div className="val">
                <h5>100%</h5>
                <p>fever and pain subsided</p>
              </div>
            </OutcomeCard>
            <OutcomeCard className="overall">
              <h4>Overall Outcome</h4>
              <div className="icon-circle"><Activity size={24} /></div>
              <div className="val">
                <h5>Favorable</h5>
                <p>supports infection control & healing</p>
              </div>
            </OutcomeCard>
          </OutcomeCards>

          <HealingChart>
            <div className="chart-header">
              <h4>Healing Progress Over Time</h4>
              <span>Timeline of wound healing milestones (in weeks)</span>
            </div>

            <TimelineRow>
              <div className="label-group">
                <Shield size={14} className="icon" />
                <div className="text">
                  <h5>Infection clearance</h5>
                  <p>3–8 weeks</p>
                </div>
              </div>
              <div className="bar-container">
                <div className="bar active" style={{ left: '20%', width: '30%' }}></div>
              </div>
            </TimelineRow>

            <TimelineRow>
              <div className="label-group">
                <Maximize size={14} className="icon" />
                <div className="text">
                  <h5>Wound size reduction</h5>
                  <p>after 6 weeks</p>
                </div>
              </div>
              <div className="bar-container">
                <div className="bar" style={{ left: '40%', width: '30%' }}></div>
              </div>
            </TimelineRow>

            <TimelineRow>
              <div className="label-group">
                <Clock size={14} className="icon" />
                <div className="text">
                  <h5>Final wound closure</h5>
                  <p>8–15 weeks</p>
                </div>
              </div>
              <div className="bar-container">
                <div className="bar" style={{ left: '50%', width: '40%' }}></div>
              </div>
            </TimelineRow>

            <TimelineRow>
              <div className="label-group">
                <Thermometer size={14} className="icon" />
                <div className="text">
                  <h5>Fever & pain</h5>
                  <p>all 10 patients</p>
                </div>
              </div>
              <div className="bar-container">
                <div className="bar" style={{ left: '0%', width: '100%', backgroundColor: '#22c55e44' }}></div>
              </div>
            </TimelineRow>

            <TimelineXAxis>
              {[0, 3, 6, 9, 12, 15].map(w => <span key={w}>{w}</span>)}
            </TimelineXAxis>
          </HealingChart>
        </OutcomesGrid>
      </div>

      <div>
        <SectionTitle>Patient Characteristics</SectionTitle>
        <PatientCharsGrid>
          <CharCard>
            <div className="header">
              <span className="dot" style={{ backgroundColor: '#3b82f6' }}></span>
              Age Range
            </div>
            <div className="val">
              <h4>32 – 78 years</h4>
              <p>(Median 56 years)</p>
            </div>
          </CharCard>
          <CharCard>
            <div className="header">
              <span className="dot" style={{ backgroundColor: '#f43f5e' }}></span>
              Diabetes
            </div>
            <div className="val">
              <h4>Present in 60%</h4>
              <p>(6/10 patients)</p>
            </div>
          </CharCard>
          <CharCard>
            <div className="header">
              <span className="dot" style={{ backgroundColor: '#14b8a6' }}></span>
              Comorbidities
            </div>
            <div className="val">
              <h4>Present in 70%</h4>
              <p>(7/10 patients)</p>
            </div>
          </CharCard>
          <CharCard>
            <div className="header">
              <span className="dot" style={{ backgroundColor: '#64748b' }}></span>
              Chronic Wound
            </div>
            <div className="val">
              <h4>2 – 24 months</h4>
              <p>(Median 6 months)</p>
            </div>
          </CharCard>
          <TakeawayCard>
            <div className="icon-box"><Zap size={24} /></div>
            <div className="content">
              <h4>Clinical Takeaway</h4>
              <p>The reported outcomes demonstrate the potential role of HOCl formulation in supporting infection control and wound healing.</p>
            </div>
          </TakeawayCard>
        </PatientCharsGrid>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '10px' }}>
        <Activity size={14} color="#94a3b8" />
        <span style={{ fontSize: '11px', color: '#64748b' }}>All outcomes are based on observed results in this prospective study of 10 patients.</span>
      </div>
    </Container>
  );
};
