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
  Droplets,
  Network,
  Bandage
} from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 40px;
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

const MainGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1.2fr;
  gap: 16px;

  @media (max-width: 1130px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MiddleRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 16px;

  @media (max-width: 1130px) {
    grid-template-columns: 1fr;
  }
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;

  @media (max-width: 1130px) {
    grid-template-columns: 1fr;
  }
`;

const PatientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1130px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Box = styled.div`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
`;

const DoughnutChart = ({ percent, color, color2 = '#f1f5f9' }: { percent: number, color: string, color2?: string }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle
        cx="40"
        cy="40"
        r={radius}
        fill="transparent"
        stroke={color2}
        strokeWidth="10"
      />
      <circle
        cx="40"
        cy="40"
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
      />
    </svg>
  );
};

const TimelineGridBg = () => (
  <div style={{ position: 'absolute', top: '-10px', bottom: '-10px', left: '140px', right: '0', display: 'flex', justifyContent: 'space-between', zIndex: 0 }}>
    {[0, 3, 6, 9, 12, 15].map((w) => (
      <div key={w} style={{ width: '1px', height: '100%', backgroundColor: '#f1f5f9' }} />
    ))}
  </div>
);

import { ContinueButton } from '../components/common/ContinueButton';

interface ResultsProps {
  onNavigate: (section: string) => void;
}

export const Results: React.FC<ResultsProps> = ({ onNavigate }) => {
  return (
    <Container>
      <Header>
        <h2>Section 06</h2>
      </Header>

      <HeroContent>
        <HeroText>
          <h1>Results & Statistics</h1>
          <p>Reported outcomes observed in this prospective study evaluating Hypochlorous Acid (HOCl) in open wound healing.</p>
        </HeroText>
      </HeroContent>

      <MainGrid>
        {/* TOP ROW */}
        <TopRow>
          <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#0eaef4', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={28} />
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 800 }}>N = 10</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#334155' }}>Patients</div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '16px', marginLeft: '68px', lineHeight: 1.4 }}>
              All completed<br />the study
            </div>
          </Box>

          <Box>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', textAlign: 'center', marginBottom: '20px' }}>Gender Distribution</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#0eaef4' }}>70%</div>
                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginTop: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0eaef4' }}></span> Male
                </div>
              </div>
              <DoughnutChart percent={70} color="#0eaef4" color2="#f43f5e" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#f43f5e' }}>30%</div>
                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f43f5e' }}></span> Female
                </div>
              </div>
            </div>
          </Box>

          <Box>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', textAlign: 'center', marginBottom: '20px' }}>Wound Distribution by Region</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#0eaef4' }}>70%</div>
                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginTop: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0eaef4' }}></span> Lower Body
                </div>
              </div>
              <DoughnutChart percent={70} color="#0eaef4" color2="#10b981" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#10b981' }}>30%</div>
                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> Upper Body
                </div>
              </div>
            </div>
          </Box>

          <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', textAlign: 'center', marginBottom: '20px' }}>Study Duration</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#0eaef4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Calendar size={18} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#334155' }}>Jan 2023 – Jan 2024</div>
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>Bliss Hospital,<br />Hyderabad, Telangana</div>
              </div>
            </div>
          </Box>
        </TopRow>

        {/* MIDDLE ROW */}
        <MiddleRow>
          <Box>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', color: '#0f172a' }}>Key Reported Outcomes</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '24px' }}>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, height: '36px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Infection<br />Clearance</div>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><Shield size={32} /></div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#16a34a', marginBottom: '4px' }}>3–8</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>weeks</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '12px' }}>in almost all cases</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, height: '36px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Wound Size /<br />Volume Reduction</div>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#faf5ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><Maximize size={32} /></div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#9333ea', marginBottom: '4px' }}>&gt;95%</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>after 6 weeks</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '12px' }}>observed in this study</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, height: '36px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Final Wound<br />Closure</div>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><Clock size={32} /></div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#2563eb', marginBottom: '4px' }}>8–15</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>weeks</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '12px' }}>in most cases</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, height: '36px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Symptom Relief<br />(Fever & Pain)</div>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><Thermometer size={32} /></div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#16a34a', marginBottom: '4px' }}>100%</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>(10/10 patients)</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '12px' }}>completely subsided</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, height: '36px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Overall Outcome</div>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#0eaef4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><Users size={32} /></div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#0eaef4', marginBottom: '4px' }}>Favorable</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '30px' }}>supports infection<br />control and healing</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#94a3b8', fontWeight: 'bold' }}>i</div>
              <span style={{ fontSize: '13px', color: '#64748b' }}>All outcomes are based on observed results in this prospective study of 10 patients.</span>
            </div>
          </Box>

          <Box>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: '#0f172a' }}>Healing Progress Over Time</h3>
            <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '32px' }}>Timeline of wound healing milestones (in weeks)</div>

            <div style={{ display: 'flex', paddingBottom: '12px', borderBottom: '2px solid #e2e8f0', marginBottom: '24px', position: 'relative' }}>
              <div style={{ width: '140px', fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>Week</div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                {[0, 3, 6, 9, 12, 15].map((w, i) => (
                  <div key={w} style={{ position: 'absolute', left: `${i * 20}%`, transform: 'translateX(-50%)', fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{w}</div>
                ))}
                <div style={{ position: 'absolute', bottom: '-15px', left: 0, right: 0, height: '6px', display: 'flex', justifyContent: 'space-between' }}>
                  {[0, 3, 6, 9, 12, 15].map((w, i) => (
                    <div key={w} style={{ position: 'absolute', left: `${i * 20}%`, width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#e2e8f0', transform: 'translate(-50%, 0)' }} />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '24px', position: 'relative' }}>
              <TimelineGridBg />

              <div style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Shield size={14} /></div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#334155' }}>Infection Clearance</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>3–8 weeks</div>
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative', height: '24px' }}>
                  <div style={{ position: 'absolute', left: '20%', width: '33.3%', top: '50%', transform: 'translateY(-50%)', height: '8px', backgroundColor: '#16a34a', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#faf5ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Maximize size={14} /></div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#334155' }}>Wound Size / Volume<br />Reduction &gt;95%</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>After 6 weeks</div>
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative', height: '24px' }}>
                  <div style={{ position: 'absolute', left: '40%', width: '53.3%', top: '50%', transform: 'translateY(-50%)', height: '8px', backgroundColor: '#a855f7', borderRadius: '4px' }} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock size={14} /></div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#334155' }}>Final Wound Closure</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>8–15 weeks</div>
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative', height: '24px' }}>
                  <div style={{ position: 'absolute', left: '53.3%', width: '46.7%', top: '50%', transform: 'translateY(-50%)', height: '8px', backgroundColor: '#3b82f6', borderRadius: '4px' }} />
                </div>
              </div>

              {/* <div style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Thermometer size={14} /></div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#334155' }}>Symptom Relief<br />Fever & Pain Subsided</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>All 10 patients</div>
                  </div>
                </div>
                <div style={{ flex: 1, position: 'relative', height: '24px' }}>
                  <div style={{ position: 'absolute', left: '0%', width: '100%', top: '50%', transform: 'translateY(-50%)', height: '8px', backgroundColor: '#4ade80', borderRadius: '4px' }} />
                </div>
              </div> */}
            </div>

            <div style={{ display: 'flex', position: 'relative', marginTop: '24px' }}>
              <div style={{ width: '140px' }}></div>
              <div style={{ flex: 1, position: 'relative', height: '20px' }}>
                {[0, 3, 6, 9, 12, 15].map((w, i) => (
                  <div key={w} style={{ position: 'absolute', left: `${i * 20}%`, transform: 'translateX(-50%)', fontSize: '11px', color: '#64748b', fontWeight: 600 }}>{w}</div>
                ))}
              </div>
            </div>
          </Box>
        </MiddleRow>

        {/* BOTTOM ROW */}
        <BottomRow>
          <Box>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '20px', color: '#0f172a' }}>Patient Characteristics</h3>
            <PatientGrid>

              <div style={{ backgroundColor: '#f8fafc', padding: '20px 16px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Users size={18} color="#3b82f6" />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Age Range</span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#0f172a' }}>32 – 78 years</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>(Median 56 years)</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '20px 16px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Droplets size={18} color="#ef4444" />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Diabetes</span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#0f172a' }}>Present in 60%</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>(6/10 patients)</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '20px 16px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Network size={18} color="#8b5cf6" />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Comorbidities</span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#0f172a' }}>Present in 70%</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>(7/10 patients)</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '20px 16px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Bandage size={18} color="#f43f5e" />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Chronic Wound<br />Duration</span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#0f172a' }}>2 – 24 months</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>(Median 6 months)</div>
              </div>
            </PatientGrid>
          </Box>

          <Box style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', gap: '20px', padding: '32px 24px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#0ea5e9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Zap size={36} fill="white" />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Clinical Takeaway</h3>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6 }}>
                The reported outcomes demonstrate the potential role of HOCl formulation in supporting infection control and wound healing as part of wound care management.
              </p>
            </div>
          </Box>
        </BottomRow>

      </MainGrid>
      {/* <ContinueButton
        to="case"
        label="Case Highlight"
        onNavigate={onNavigate}
      /> */}
    </Container>
  );
};
