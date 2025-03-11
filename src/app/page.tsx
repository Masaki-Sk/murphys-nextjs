import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './globals.css';
import TopMenu from '@/components/TopMenu';
import Middle from '@/components/Middle';
import BottomMenu from '@/components/BottomMenu';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Container fluid id="footer">
        <TopMenu />
        <Middle />
        <BottomMenu />
      </Container>
    </Container>
  </main>
);

export default Home;
