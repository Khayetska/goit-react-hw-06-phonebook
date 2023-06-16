import Form from './Form';
import ContactsList from './ContactsList';
import Finder from './Finder';
import MainTitle from './MainTitle';
import Layout from './Layout';

export const App = () => {
  return (
    <Layout>
      <MainTitle />
      <Form />
      <Finder />
      <ContactsList />
    </Layout>
  );
};
