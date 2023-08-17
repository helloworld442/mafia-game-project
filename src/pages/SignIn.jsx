import { Footer, Layout, Main } from "../features/ui";
import { Login } from "../features/user/component";

const SignIn = () => {
  return (
    <Layout>
      <Main>
        <Login />
      </Main>
    </Layout>
  );
};

export default SignIn;
