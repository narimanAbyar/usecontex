
import { useContext,createContext } from "react";
import ReactDOM from "react-dom";

const blogInfo={
  React:{
    post:'hooks',
    author:'nariman'
  },
  Sql:{
    post:'database',
    author:'ali'
  }
}
const blogInfoContext=createContext(blogInfo);

function ParentInfoComponenet(){
  return(
      <blogInfoContext.Provider value={blogInfo}>
        <h1>Component useContext</h1>
        <FirstChildInfoComponenet/>
        <SecondChildInfoComponenet/>
      </blogInfoContext.Provider>

  );
}

function FirstChildInfoComponenet(){
  const FirstChild=useContext(blogInfoContext);
  return(
    <div>
      <h3>React Blog Details</h3>
      <p>Topic: {FirstChild.React.post}</p>
      <p>Author: {FirstChild.React.author}</p>
    </div>

  );
}
function SecondChildInfoComponenet(){
  const SecondChild=useContext(blogInfoContext);
  return(
    <div>
      <h3>React Blog Details</h3>
      <p>Topic: {SecondChild.Sql.post}</p>
      <p>Author: {SecondChild.Sql.author}</p>
    </div>

  );
}


ReactDOM.render(<ParentInfoComponenet />, document.getElementById("root"));