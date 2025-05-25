// pages/Login.jsx
import React from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    InputAdornment,
    Link,
    Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100%',
                background: 'linear-gradient(to right, #2496a8, #1e3d67)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                pb: 0,
                position: 'relative',
            }}
        >
            {/* Logo + Texto */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <img
                    src="/logo.png"
                    alt="Logo"
                    style={{ width: '320px', marginBottom: 8 }}
                />
                <Typography
                    variant="h3"
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: 'Arial Rounded MT Bold, sans-serif',
                        lineHeight: 1.1,
                    }}
                >
                    Salvando
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'white',
                        fontWeight: 'medium',
                        letterSpacing: 1,
                        fontFamily: 'Arial Rounded MT Bold, sans-serif',
                    }}
                >
                    MÁRQUEZ
                </Typography>
            </Box>

            {/* Inputs */}
            <Box
                sx={{
                    mt: 4,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box component="form" noValidate sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '85%',
                    maxWidth: '320px', // para limitar en móviles
                }}>
                    <TextField
                        placeholder="Correo o Teléfono"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: 'white' }} />
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '30px',
                                backgroundColor: 'transparent',
                                border: '1px solid white',
                                color: 'white',
                                '& input': {
                                    color: 'white',
                                },
                            },
                        }}
                    />
                    <TextField
                        placeholder="Contraseña"
                        type="password"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon sx={{ color: 'white' }} />
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '30px',
                                backgroundColor: 'transparent',
                                border: '1px solid white',
                                color: 'white',
                                '& input': {
                                    color: 'white',
                                },
                            },
                        }}
                    />


                </Box>
            </Box>

            {/* Pie blanco con botones */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 'auto',
                    pb: 0,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '95vw', // o 95vw si prefieres
                        backgroundColor: 'white',
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        px: 4,
                        py: 4,
                        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            color: '#20587b',
                            textDecoration: 'underline',
                            mt: 1,
                            mb: 3,
                        }}
                    >
                        ¿Olvidaste tu contraseña?
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(to right, #2496a8, #1e3d67)',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            py: 1.5,
                            fontSize: '1rem',
                            textTransform: 'none',
                            mb: 2,
                            maxWidth: '320px',
                            mx: 'auto',

                        }}
                    >
                        Iniciar sesión
                    </Button>

                    <Divider>o</Divider>

                    <Button
                        href="/register"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 2,
                            backgroundColor: '#e2e8f0',
                            color: '#1e293b',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            py: 1.5,
                            fontSize: '1rem',
                            textTransform: 'none',
                            maxWidth: '320px',
                            mx: 'auto',

                            '&:hover': {
                                backgroundColor: '#d0d7e0',
                            },
                        }}
                    >
                        Crear cuenta
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
