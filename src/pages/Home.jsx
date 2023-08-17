import { Footer, Header, Layout, Main } from "../features/ui";
import { RoomHead, RoomList } from "../features/room/component";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <RoomHead />
        <RoomList />
      </Main>
      <Footer />
    </Layout>
  );
};

export default Home;
