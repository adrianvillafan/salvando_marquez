// pages/ForgotPassword.jsx
import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const ForgotPassword = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          ¿Olvidaste tu contraseña?
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          No te preocupes, te enviaremos instrucciones de restablecimiento
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Correo Electrónico"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Restablecer Contraseña
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;