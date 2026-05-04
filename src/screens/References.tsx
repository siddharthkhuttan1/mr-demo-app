import React from 'react';
import styled from 'styled-components';
import {
  BookOpen,
  ExternalLink,
  ArrowLeft,
  Home as HomeIcon,
  ChevronRight
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

const ReferenceCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.sm};
    border-color: ${props => props.theme.colors.primary}40;
  }
`;

const ReferenceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #f1f5f9;
  color: ${props => props.theme.colors.text.light};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ReferenceContent = styled.div`
  flex: 1;
  
  .citation {
    font-size: 14px;
    line-height: 1.6;
    color: ${props => props.theme.colors.text.main};
    margin-bottom: 8px;
    
    span {
      font-weight: 700;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .meta {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    color: ${props => props.theme.colors.text.muted};
    
    .tag {
      padding: 2px 8px;
      background-color: #f1f5f9;
      border-radius: 4px;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 10px;
    }
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: ${props => props.theme.spacing.xl};
  align-self: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.theme.colors.primary}40;
    opacity: 0.9;
  }
`;

interface ReferencesProps {
  onNavigate?: (section: string) => void;
}

export const References: React.FC<ReferencesProps> = ({ onNavigate }) => {
  const references = [
    {
      id: 1,
      type: 'Clinical Study',
      citation: 'Wang, L., Bassiri, M., Najafi, R., et al. (2007). <span>Hypochlorous acid as a potential wound care agent.</span> Journal of Burns and Wounds, 6, e5.',
      link: '#'
    },
    {
      id: 2,
      type: 'Review',
      citation: 'Dissemond, J., et al. (2020). <span>Hypochlorous acid for the treatment of chronic wounds.</span> Journal of Wound Care, 29(Sup10), S4-S8.',
      link: '#'
    },
    {
      id: 3,
      type: 'Laboratory Study',
      citation: 'Sakarya, S., Gunay, N., Karakulak, M., et al. (2014). <span>Hypochlorous acid: an ideal wound care agent with powerful bactericidal, antibiofilm, and wound healing potency.</span> Wounds: a compendium of clinical research and practice, 26(12), 342-350.',
      link: '#'
    },
    {
      id: 4,
      type: 'Guidelines',
      citation: 'World Union of Wound Healing Societies (WUWHS). (2020). <span>Strategies to prevent and manage bacterial burden and biofilm.</span> Florence, Italy.',
      link: '#'
    },
    {
      id: 5,
      type: 'Case Series',
      citation: 'Nerandzic, M. M., et al. (2015). <span>Inactivation of bacterial spores and biofilms by a stabilized hypochlorous acid solution.</span> American Journal of Infection Control, 43(8), 885-891.',
      link: '#'
    }
  ];

  return (
    <Container>
      <Header>
        <h2>Section 09</h2>
      </Header>

      <HeroContent>
        <HeroText>
          <h1>Scientific References</h1>
          <p>Key literature and evidence supporting the use of Hypochlorous Acid (HOCl) in clinical wound management and biofilm disruption.</p>
        </HeroText>
      </HeroContent>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {references.map((ref) => (
          <ReferenceCard key={ref.id}>
            <ReferenceIcon>
              <BookOpen size={20} />
            </ReferenceIcon>
            <ReferenceContent>
              <div className="citation" dangerouslySetInnerHTML={{ __html: ref.citation }} />
              <div className="meta">
                <span className="tag">{ref.type}</span>
                <span>•</span>
                <a href={ref.link} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'inherit', textDecoration: 'none' }}>
                  <ExternalLink size={14} />
                  View Source
                </a>
              </div>
            </ReferenceContent>
          </ReferenceCard>
        ))}
      </div>

      <ActionButton onClick={() => onNavigate?.('home')}>
        <HomeIcon size={18} />
        Return to Home
        <ChevronRight size={18} />
      </ActionButton>

      <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginTop: '12px' }}>
        © 2024 VidaMed Clinical Education Series. All rights reserved.
      </p>
    </Container>
  );
};
