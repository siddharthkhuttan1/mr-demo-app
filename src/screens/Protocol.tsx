import React from 'react';
import styled from 'styled-components';
import {
  FileText,
  FlaskConical,
  Hexagon,
  Droplet,
  Syringe,
  Wind,
  Clock,
  Activity,
  Info,
  ShieldCheck
} from 'lucide-react';

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

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};
`;

const Card = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.sm};
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  .icon {
    width: 36px;
    height: 36px;
    border-radius: ${props => props.theme.borderRadius.md};
    background-color: #f1f5f9;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const StudyTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${props => props.theme.colors.background.main};
  
  &:last-child { border-bottom: none; }

  .label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: ${props => props.theme.colors.text.muted};
    font-weight: 500;
  }

  .value {
    font-size: 13px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.main};
    text-align: right;
  }
`;

const FormulationView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  .badge {
    background-color: #eff6ff;
    color: #1d5db2;
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 700;
    align-self: flex-start;
  }
`;

const FormulaGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 10px 0;
  
  .operator {
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.theme.colors.text.light};
  }
`;

const FormulaComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  
  .box {
    width: 120px;
    height: 70px;
    background-color: #f8fafc;
    border: 1px dashed ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.md};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.primary};
    background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.01) 10px, rgba(0,0,0,0.01) 20px);
  }

  span {
    font-size: 11px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.muted};
  }
`;

const ResultBox = styled.div`
  background-color: #f1f5f9;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  background-image: repeating-linear-gradient(135deg, transparent, transparent 15px, rgba(59,130,246,0.03) 15px, rgba(59,130,246,0.03) 30px);

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const TreatmentSection = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const TreatmentHeader = styled.div`
  h4 { font-size: 16px; font-weight: 700; }
  p { font-size: 12px; color: ${props => props.theme.colors.text.muted}; }
`;

const TreatmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${props => props.theme.spacing.md};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 5%;
    right: 5%;
    height: 1px;
    background: ${props => props.theme.colors.border};
  }
`;

const TreatmentStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  z-index: 1;

  .num {
    width: 24px;
    height: 24px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    border: 3px solid white;
    box-shadow: 0 0 0 1px ${props => props.theme.colors.primary}22;
  }

  .visual {
    width: 100%;
    height: 80px;
    background-color: #f8fafc;
    border: 1px dashed ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.md};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text.light};
    background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.01) 10px, rgba(0,0,0,0.01) 20px);
  }

  .info {
    h5 { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
    p { font-size: 11px; color: ${props => props.theme.colors.text.muted}; line-height: 1.4; }
  }
`;

export const Protocol: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Section 05</h2>
        <h1>Study Design & Methodology</h1>
        <p>A prospective clinical study evaluating the effect of Hypochlorous Acid (HOCl) in open wound healing.</p>
      </Header>

      <TopGrid>
        <Card>
          <CardTitle>
            <div className="icon"><FileText size={20} /></div>
            <h3>Study Profile</h3>
          </CardTitle>
          <StudyTable>
            <TableRow>
              <div className="label"><FileText size={14} /> Design</div>
              <div className="value">Prospective study</div>
            </TableRow>
            <TableRow>
              <div className="label"><Clock size={14} /> Duration</div>
              <div className="value">Jan 2023 — Jan 2024</div>
            </TableRow>
            <TableRow>
              <div className="label"><Activity size={14} /> Location</div>
              <div className="value">Bliss Hospital, Hyderabad, Telangana</div>
            </TableRow>
            <TableRow>
              <div className="label"><Activity size={14} /> Sample Size</div>
              <div className="value">10 patients</div>
            </TableRow>
            <TableRow>
              <div className="label"><Hexagon size={14} /> Ethics</div>
              <div className="value">Clearance obtained</div>
            </TableRow>
            <TableRow>
              <div className="label"><ShieldCheck size={14} /> Informed Consent</div>
              <div className="value">Received from all patients</div>
            </TableRow>
          </StudyTable>
        </Card>

        <Card>
          <CardTitle>
            <div className="icon"><FlaskConical size={20} /></div>
            <h3>Formulation (Study Protocol)</h3>
          </CardTitle>
          <FormulationView>
            <p style={{ fontSize: '13px', color: '#64748b' }}>HOCl used in ready-to-use form. Study protocol included:</p>
            <div className="badge">2 parts HOCl + 1 part honey</div>

            <FormulaGrid>
              <FormulaComponent>
                <div className="box"><FlaskConical size={32} /></div>
                <span>2 parts HOCl</span>
              </FormulaComponent>
              <span className="operator">+</span>
              <FormulaComponent>
                <div className="box" style={{ color: '#f59e0b' }}><Hexagon size={32} /></div>
                <span>1 part honey</span>
              </FormulaComponent>
            </FormulaGrid>

            <div className="operator" style={{ textAlign: 'center', marginBottom: '10px' }}>=</div>

            <ResultBox>
              <Droplet size={24} color="#3b82f6" />
              <span>HOCl + Honey study protocol</span>
            </ResultBox>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', fontSize: '11px', color: '#94a3b8' }}>
              <Info size={14} />
              This is the study protocol used for wound irrigation.
            </div>
          </FormulationView>
        </Card>
      </TopGrid>

      <TreatmentSection>
        <TreatmentHeader>
          <h4>Treatment Protocol</h4>
          <p>Step-by-step approach used in this study.</p>
        </TreatmentHeader>
        <TreatmentGrid>
          {[
            { title: 'Irrigation', desc: 'Formulation used to irrigate open wound.', icon: Syringe },
            { title: 'Moisture control', desc: 'Dry gauze used to wipe excess fluid.', icon: Wind },
            { title: 'No saline wash', desc: 'Formulation left inside the cavity.', icon: Droplet },
            { title: 'Frequency', desc: 'Applied 3 times daily.', icon: Clock },
            { title: 'Healing', desc: 'Wound monitored over time.', icon: Activity },
          ].map((step, i) => (
            <TreatmentStep key={i}>
              <div className="num">{i + 1}</div>
              <div className="visual"><step.icon size={28} /></div>
              <div className="info">
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            </TreatmentStep>
          ))}
        </TreatmentGrid>
      </TreatmentSection>
    </Container>
  );
};
