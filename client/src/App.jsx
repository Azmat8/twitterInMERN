import MainView from "./MainView"
import Sidebar from "./Sidebar"
import Sidebar2 from "./Sidebar2"

const App = () => {

  return <div className="flex justify-center gap-10">
    <Sidebar></Sidebar>
    <MainView></MainView>
    <Sidebar2></Sidebar2>


  </div>

}

export default App



