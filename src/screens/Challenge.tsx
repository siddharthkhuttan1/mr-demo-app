import React from 'react';
import styled from 'styled-components';
import {
  User,
  Clock,
  ShieldCheck,
  Droplet,
  Wind,
  Heart,
  Leaf,
  Zap,
  LayoutGrid,
  Syringe,
  Info,
  Activity,
  BarChart3,
  Layers,
  FlaskConical,
} from 'lucide-react';
import ChronicWoundImg from '../assets/chronic-wound.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
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
    font-size: 16px;
    color: ${props => props.theme.colors.text.muted};
    max-width: 800px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 280px;
  gap: ${props => props.theme.spacing.lg};
  flex: 1;
`;

const FactorColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  
  .title-group {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .icon-container {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background-color: #eff6ff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3b82f6;
    }

    div {
      h3 {
        font-size: 16px;
        font-weight: 700;
        color: #1e293b;
      }
      p {
        font-size: 12px;
        color: #64748b;
        margin-top: 2px;
      }
    }
  }

  .chevron {
    color: #94a3b8;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: #f8fafc;
  border: 1px solid transparent;
  border-radius: 12px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
    border-color: #e2e8f0;
  }

  .item-icon {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b82f6;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }
`;

const AnatomicalView = styled(Card)`
  padding: 24px;
  background-color: #ffffff;
`;

const WoundImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  background-color: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
`;

const WoundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageLabel = styled.div<{ position: 'top' | 'bottom' }>`
  position: absolute;
  padding: 4px 10px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  
  ${props => props.position === 'top' ? 'top: 20px; left: 20px;' : 'bottom: 20px; right: 20px;'}
`;

const InfoBar = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background-color: #eff6ff;
  padding: 12px;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid #dbeafe;
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primaryDark};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 12px;
`;

const StatCard = styled.div<{ accentColor: string }>`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background-color: ${props => props.accentColor};
  }

  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    .icon-container {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background-color: #eff6ff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3b82f6;
    }

    .value {
      font-size: 28px;
      font-weight: 800;
      color: #1e293b;
    }
  }

  .stat-content {
    h4 {
      font-size: 15px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 4px;
    }
    p {
      font-size: 12px;
      color: #64748b;
      line-height: 1.5;
    }
  }
`;

export const Challenge: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2 style={{ color: '#3b82f6' }}>Section 02</h2>
        <h1 style={{ color: '#1e293b' }}>The Challenge: Chronic Wounds</h1>
        <p>Chronic wounds result from a complex interaction of local and systemic factors that delay normal healing.</p>
      </Header>

      <ContentGrid>
        <FactorColumn>
          <Card>
            <CardHeader>
              <div className="title-group">
                <div className="icon-container">
                  <User size={20} />
                </div>
                <div>
                  <h3>Systemic Factors</h3>
                  <p>Whole-body conditions</p>
                </div>
              </div>
            </CardHeader>
            <ListItem><div className="item-icon"><Clock size={16} /></div> Age</ListItem>
            <ListItem><div className="item-icon"><ShieldCheck size={16} /></div> Immunity</ListItem>
            <ListItem><div className="item-icon"><Droplet size={16} /></div> Diabetes</ListItem>
            <ListItem><div className="item-icon"><Wind size={16} /></div> Smoking</ListItem>
            <ListItem><div className="item-icon"><Heart size={16} /></div> Comorbidities</ListItem>
            <ListItem><div className="item-icon"><Leaf size={16} /></div> Nutritional deficiency</ListItem>
          </Card>
        </FactorColumn>

        <AnatomicalView>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <span>Anatomical Reference</span>
            <span style={{ backgroundColor: '#eff6ff', color: '#3b82f6', padding: '4px 10px', borderRadius: '6px' }}>Cross-Section</span>
          </div>
          <WoundImageContainer>
            <ImageLabel position="top">Epidermis</ImageLabel>
            <WoundImage src={ChronicWoundImg} alt="Anatomical Wound Cross-Section" />
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', gap: '8px' }}>
              <ImageLabel position="bottom" style={{ position: 'static' }}>Subcutis</ImageLabel>
              <ImageLabel position="bottom" style={{ position: 'static' }}>Vasculature</ImageLabel>
            </div>
          </WoundImageContainer>
          <InfoBar style={{ backgroundColor: '#eff6ff', border: 'none', color: '#1e40af' }}>
            <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '13px', fontWeight: 500 }}>These interrelated factors disrupt the normal healing cascade, prolong inflammation, and impair tissue regeneration — leading to delayed or stalled healing.</p>
          </InfoBar>
        </AnatomicalView>

        <FactorColumn>
          <Card>
            <CardHeader>
              <div className="title-group">
                <div className="icon-container" style={{ backgroundColor: '#f0fdfa', color: '#0d9488' }}>
                  <Layers size={20} />
                </div>
                <div>
                  <h3>Local Factors</h3>
                  <p>Wound-bed conditions</p>
                </div>
              </div>
            </CardHeader>
            <ListItem><div className="item-icon" style={{ color: '#0d9488' }}><Zap size={16} /></div> Bacterial infection</ListItem>
            <ListItem><div className="item-icon" style={{ color: '#0d9488' }}><LayoutGrid size={16} /></div> Biofilms</ListItem>
            <ListItem><div className="item-icon" style={{ color: '#0d9488' }}><Activity size={16} /></div> Venous insufficiency</ListItem>
          </Card>

          <Card>
            <CardHeader>
              <div className="title-group">
                <div className="icon-container" style={{ backgroundColor: '#f5f3ff', color: '#7c3aed' }}>
                  <Syringe size={20} />
                </div>
                <div>
                  <h3>Iatrogenic Factors</h3>
                  <p>Treatment-induced</p>
                </div>
              </div>
            </CardHeader>
            <ListItem><div className="item-icon" style={{ color: '#7c3aed' }}><ShieldCheck size={16} /></div> Steroids</ListItem>
            <ListItem><div className="item-icon" style={{ color: '#7c3aed' }}><FlaskConical size={16} /></div> Chemotherapeutic drugs</ListItem>
          </Card>
        </FactorColumn>
      </ContentGrid>

      <StatsGrid>
        <StatCard accentColor="#3b82f6">
          <div className="stat-header">
            <div className="icon-container">
              <Clock size={22} />
            </div>
            <span className="value">Up to 2%</span>
          </div>
          <div className="stat-content">
            <h4>High Prevalence</h4>
            <p>Of the global population is affected by chronic wounds.</p>
          </div>
        </StatCard>

        <StatCard accentColor="#0d9488">
          <div className="stat-header">
            <div className="icon-container" style={{ backgroundColor: '#f0fdfa', color: '#0d9488' }}>
              <BarChart3 size={22} />
            </div>
            <span className="value" style={{ color: '#0d9488' }}>$25B+</span>
          </div>
          <div className="stat-content">
            <h4>Significant Burden</h4>
            <p>Annual healthcare costs, plus reduced quality of life and morbidity.</p>
          </div>
        </StatCard>

        <StatCard accentColor="#1e293b">
          <div className="stat-header">
            <div className="icon-container" style={{ backgroundColor: '#f8fafc', color: '#1e293b' }}>
              <ShieldCheck size={22} />
            </div>
            <span className="value" style={{ color: '#1e293b' }}>Multifactorial</span>
          </div>
          <div className="stat-content">
            <h4>Complex Management</h4>
            <p>Each factor must be addressed for effective, lasting healing.</p>
          </div>
        </StatCard>
      </StatsGrid>
    </Container>
  );
};

