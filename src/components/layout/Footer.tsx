// import { Box, Typography } from "@mui/material";

// export default function Footer() {
//   return (
//     <Box textAlign="center" py={3}>
//       <Typography variant="body2">
//         © 2025 Grocery Store
//       </Typography>
//     </Box>
//   );
// }



import {
    Box, Container, Typography,
    Divider,
    Paper,
    useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import React from 'react'

const Footer = () => {
   
    const theme = useTheme();
    return (
        <Box
            sx={{
                bgcolor: theme.palette.mode === 'dark' ? '#179712ff' : '#0f3009ff',
                color: 'white',
                py: 6,
                mt: 2,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            Grocery
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: 260 }}>
                            India&apos;s modern, trusted online bus ticket booking platform.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            About
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                           <Typography>Aboutus</Typography>
                           <Typography>Contactus</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            Info
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                           


                            <Typography>Terms &amp; Conditions</Typography>
                            <Typography> Privacy Policy</Typography>
                            <Typography> FAQs</Typography>

                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            Contact
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.85 }}>
                            Email: support@products.com
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.85 }}>
                            Phone: 1800-123-4567
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 4, bgcolor: 'hsla(130, 81%, 48%, 0.12)' }} />
                <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
                    © {new Date().getFullYear()} Products. All rights reserved.
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer
