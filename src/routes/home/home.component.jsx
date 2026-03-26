import { Outlet } from "react-router";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return <Directory />;
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
