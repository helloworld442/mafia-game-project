import { Footer, Header, Layout, Main } from "../features/ui";
import { RoomList } from "../features/room/component";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <RoomList />
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
