// import ReduxProvider from "@/redux/provider";
// import Navbar from "@/components/layout/Navbar";
// import Sidebar from "@/components/layout/Sidebar";
// import Footer from "@/components/layout/Footer";
// import { Box, Toolbar } from "@mui/material";

// const drawerWidth = 240;

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <ReduxProvider>
        
//           <Navbar />

//           <Box display="flex">
            
//             <Sidebar />

            
//             <Box
//               component="main"
//               sx={{
//                 flexGrow: 1,
//                 p: 3,
//                 ml: `${drawerWidth}px`, // space for sidebar
//               }}
//             >
              
//               <Toolbar />

//               {children}

//               <Footer />
//             </Box>
//           </Box>
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }



// import ReduxProvider from "@/redux/provider";
// import Navbar from "@/components/layout/Navbar";
// // import Sidebar from "@/components/layout/Sidebar";
// import Footer from "@/components/layout/Footer";
// import { Box, Toolbar } from "@mui/material";

// import theme from "@/theme/theme";

// import { ThemeProvider, CssBaseline } from "@mui/material";
// import Sidebar from "@/components/layout/Sidebar";
// const drawerWidth = 240;

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <ReduxProvider>
//           <ThemeProvider theme={theme}></ThemeProvider>
//           {/* NAVBAR */}
//            <ThemeProvider theme={theme}>
//             <CssBaseline /> {/* normalize styles */}
//           <Navbar />

//           {/* MAIN LAYOUT */}
//           <Box sx={{ display: "flex", minHeight: "100vh" }}>
//             {/* SIDEBAR – visible on ALL pages */}
//             <Sidebar />

//             {/* PAGE CONTENT */}
//             <Box
//               component="main"
//               sx={{
//                 flexGrow: 1,
//                 ml: `${drawerWidth}px`,
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               {/* Space for fixed navbar */}
//               <Toolbar />

//               {/* Page body */}
//               <Box sx={{ flexGrow: 1, p: 3 }}>
//                 {children}
//               </Box>
 
//               {/* FOOTER */}
//               <Footer />
//             </Box>
//           </Box>
//            </ThemeProvider>
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }



"use client";

import ReduxProvider from "@/redux/provider";
import Navbar from "@/components/layout/Navbar";
// import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

import theme from "@/theme/theme";

import {
  ThemeProvider,
  CssBaseline,
  Box,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {/* ✅ SINGLE ThemeProvider */}
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* NAVBAR */}
            <Navbar />

            {/* MAIN LAYOUT */}
            <Box sx={{ display: "flex", minHeight: "100vh" }}>
              {/* SIDEBAR */}
              {/* <Sidebar /> */}

              {/* PAGE CONTENT */}
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  // ml: `${drawerWidth}px`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Space for fixed navbar */}
                <Toolbar />

                {/* Page body */}
                <Box sx={{ flexGrow: 1, p: 3 }}>
                  {children}
                </Box>

                {/* FOOTER */}
                <Footer />
              </Box>
            </Box>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
