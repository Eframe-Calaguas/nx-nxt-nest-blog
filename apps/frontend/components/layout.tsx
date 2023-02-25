import Navbar from './navbar';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="sm">{children}</Container>
    </React.Fragment>
  );
}

export default Layout;
