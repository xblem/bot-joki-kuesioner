import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Komponen ini akan menjadi "pembungkus" untuk semua halaman kita
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <Outlet> adalah tempat di mana konten halaman (HomePage, StatusPage) akan dirender */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;