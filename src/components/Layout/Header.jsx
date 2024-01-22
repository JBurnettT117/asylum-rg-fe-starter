import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LoginButton from '../pages/accountManagement/login';
import LogoutButton from '../pages/accountManagement/logout';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div className="header-nav">
        <Link to="/" style={{ color: '#E2F0F7' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>

        <Link style={{ color: '#E2F0F7' }}>
          {isAuthenticated ? (
            <div className="profile-logout">
              <Link to="/profile" style={{ color: '#E2F0F7' }}>
                Profile
              </Link>
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </Link>
      </div>
    </div>
  );
}

export { HeaderContent };
