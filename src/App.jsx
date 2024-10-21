import "./App.css";
import "./components/navbar";
import Navigation from "./components/navbar";

import Heroesection from "./components/hero";

const App = ()=>{

  return(
<div>
<Navigation />
<Heroesection />
</div>
  );
};

export default App;