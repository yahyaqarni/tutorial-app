import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css'
import theme from '../theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   return (
    <html lang="en" className={roboto.variable}>
       <body className={`${roboto.variable} font-sans antialiased`}>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
              {children}
           </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
