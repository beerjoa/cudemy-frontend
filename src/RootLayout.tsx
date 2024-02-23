import Navigation from '#components/Navigation/index.tsx';
import Footer from '#components/UI/Footer.tsx';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps extends React.ComponentPropsWithoutRef<'div'> {}

const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <div className="p-4 max-md:p-2">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
