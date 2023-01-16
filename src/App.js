import { Fragment } from "react";
import ActorsList from "./component/actorList";
import AllList from "./component/allList";
import AllMovie from "./component/movieList";
import AllTV from "./component/tvList";
export const App = () => {
  return (
    <Fragment>
      <AllList title="بهترین های فیلم و سریال" />
      <AllMovie title="بهترین فیلم‌ها" />
      <AllTV title="بهترین سریال ها" />
      <ActorsList title="بهترین بازیگرها" />
    </Fragment>
  );
};
export default App;
