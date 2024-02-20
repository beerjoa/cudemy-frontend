import Discounts from '#components/Discounts';

interface HomeProps extends React.ComponentPropsWithoutRef<'div'> {}

const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <Discounts />
    </main>
  );
};
export default Home;
