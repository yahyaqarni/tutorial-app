import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Lato } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css'
import theme from '../theme';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   return (
    <html lang="en" className={lato.variable}>
       <body className={`${lato.variable} font-sans antialiased`}>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
              {children}
           </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
