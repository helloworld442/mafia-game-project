import { RoomHead, RoomTemplate } from "../features/room/component";
import { Footer, Header, Layout } from "../features/ui";

const Home = () => {
  return (
    <Layout>
      <Header />
      <RoomTemplate>
        <RoomHead />
      </RoomTemplate>
      <Footer />
    </Layout>
  );
};

export default Home;
