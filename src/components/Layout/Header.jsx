import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import LoginButton from '../pages/accountManagement/login';
import LogoutButton from '../pages/accountManagement/logout';

const { primary_accent_color } = colors;

function HeaderContent() {
  const token = localStorage.getItem('token');

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
          {token ? (
            <>
              <Link to="/profile" style={{ color: '#E2F0F7' }}>
                Profile
              </Link>
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </Link>
      </div>
    </div>
  );
}

export { HeaderContent };
