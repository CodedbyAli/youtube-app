import { useSelector } from "react-redux"
import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"
import CollapsableSidebar from "./CollapsableSidebar";

const Body = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  return (
    <>
        <div className="flex">
            {isMenuOpen ? (<CollapsableSidebar />) : (<Sidebar />)}
            <MainContainer />
        </div>
    </>
  )
}

export default Body