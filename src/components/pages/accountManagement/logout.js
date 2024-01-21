import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <p
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </p>
    )
  );
};

export default LogoutButton;
