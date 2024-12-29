import { useSelector } from "react-redux"
import Sidebar from "./Sidebar"
import CollapsableSidebar from "./CollapsableSidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  return (
    <>
        <div className="flex">
            {isMenuOpen ? (<CollapsableSidebar />) : (<Sidebar />)}
            <Outlet />
        </div>
    </>
  )
}

export default Body