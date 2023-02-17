import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}
const data = imageData().map(ele =>(<img key={ele.id} src={ele.img}></img>))

function App() {
  return <div className="main-div">{data}</div>
  // code here
}

export default App;

