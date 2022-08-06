import './App.css';
import Catalog from './components/Catalog';
function App() {
  // const BlueButton = styled(Button)(({theme}) => ({
  //   backgroundColor: theme.palette.otherColor.main,
  //   color: "#888",
  //   variant: "container",
  //   size: "medium",
  // }))
  return (
    <div className="App">
      <Catalog />
    </div>
  );
}

export default App;
