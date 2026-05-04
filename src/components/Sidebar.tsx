import React from 'react';
import styled from 'styled-components';
import vidaLogo from '../assets/vida.png';
import Home from '@mui/icons-material/Home';
import LandSlide from '@mui/icons-material/Landslide';
import Bacteria from '@mui/icons-material/Coronavirus';
import Bulb from '@mui/icons-material/EmojiObjects';
import Assignment from '@mui/icons-material/Assignment';
import Assessment from '@mui/icons-material/Assessment';
import MedicalInformation from '@mui/icons-material/MedicalInformation';
import TaskAlt from '@mui/icons-material/TaskAlt';
import MenuBook from '@mui/icons-material/MenuBook';


const SidebarContainer = styled.nav`
  width: 100px;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.lg} 0;
  z-index: 100;
`;

const BrandingIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  flex: 1;
`;

interface NavItemProps {
  active?: boolean;
}

const NavItem = styled.li<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: ${props => props.theme.spacing.sm} 0;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  position: relative;

  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text.muted};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const IconWrapper = styled.div<NavItemProps>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${props => props.active ? props.theme.colors.primary : 'inherit'};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: ${props => props.theme.transitions.default};
`;

const NavLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  text-transform: capitalize;
`;

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'challenge', icon: LandSlide, label: 'Challenge' },
    { id: 'biofilms', icon: Bacteria, label: 'Biofilms' },
    { id: 'solution', icon: Bulb, label: 'Solution' },
    { id: 'protocol', icon: Assignment, label: 'Protocol' },
    { id: 'results', icon: Assessment, label: 'Results' },
    { id: 'case', icon: MedicalInformation, label: 'Case' },
    { id: 'conclusion', icon: TaskAlt, label: 'Conclusion' },
    { id: 'references', icon: MenuBook, label: 'References' },
  ];

  return (
    <SidebarContainer>
      <BrandingIcon>
        <img src={vidaLogo} alt="Vida" />
      </BrandingIcon>
      <NavList>
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            active={activeSection === item.id}
            onClick={() => onNavigate(item.id)}
          >
            <IconWrapper active={activeSection === item.id}>
              <item.icon sx={{ fontSize: 24 }} />
            </IconWrapper>
            <NavLabel>{item.label}</NavLabel>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};
