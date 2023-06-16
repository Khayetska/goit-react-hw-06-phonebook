import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Finder from './Finder/Finder';
import MainTitle from './MainTitle/MainTitle';
import Layout from './Layout/Layout';

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
