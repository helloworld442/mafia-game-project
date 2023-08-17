import { RoomTemplate } from "../features/room/component";
import { Footer, Header, Layout } from "../features/ui";

const Home = () => {
  return (
    <Layout>
      <Header />
      <RoomTemplate></RoomTemplate>
      <Footer />
    </Layout>
  );
};

export default Home;
