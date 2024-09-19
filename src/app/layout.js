import Header from '../app/components/Header'
import Footer from './components/Footer';
import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;