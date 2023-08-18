import { Layout, Main, WriteHeader } from "../features/ui";
import { RoomForm } from "../features/room/component";

const Write = () => {
  return (
    <Layout>
      <Main>
        <WriteHeader />
        <RoomForm />
      </Main>
    </Layout>
  );
};

export default Write;
