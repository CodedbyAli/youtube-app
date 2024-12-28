import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";

const Header = () => {

    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

  return (
    <>
        <div className="w-full">
            <div className="w-[93rem] mx-auto flex justify-between mt-2 mb-6">
                <div className="flex items-center space-x-4">
                    <button onClick={handleToggleMenu} className="hover:bg-zinc-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <img src="youtube-logo.png" className="w-24 object-contain"/>
                </div>
                <div className="flex items-center">
                    <input placeholder="Search" className="w-[36rem] border-2 border-zinc-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 px-4 py-2 placeholder-zinc-500"/>
                    <button className="border-2 border-l-0 border-zinc-300 rounded-r-full bg-zinc-100 px-6 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <div className="ml-4 bg-zinc-100 p-2 border-2 border-zinc-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="flex bg-zinc-100 py-2 px-4 rounded-full space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="font-semibold">Create</span>
                    </button>
                    <img className="w-8 rounded-full" src="https://yt3.ggpht.com/ytc/AIdro_meYAh6NPkc3qZ9RQbztfozX2jknUqc69hcasQTLZa7CCWY6MHmzRI1I6I59gYFhEiQXA=s88-c-k-c0x00ffffff-no-rj"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header