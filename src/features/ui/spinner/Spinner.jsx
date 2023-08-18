import "./Spinner.scss";
import { Layout } from "../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatCowboy } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <Layout>
      <span className="spinner-icon">
        <FontAwesomeIcon icon={faHatCowboy} />
      </span>
    </Layout>
  );
};

export { Spinner };
