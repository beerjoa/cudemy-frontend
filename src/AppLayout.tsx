import Navigation from '#layouts/Navigation';
import Footer from '#components/UI/Footer.tsx';
import { Outlet } from 'react-router-dom';

interface AppLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="p-4 max-md:p-2">
      <Navigation />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
