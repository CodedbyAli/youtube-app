import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_LIST_API } from "../utils/constants";
import { cachedSuggestions } from "../utils/searchSlice";
import { searchedVideosList } from "../utils/videosSlice";
import { Link } from "react-router-dom";

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const cachedResults = useSelector((store) => store.search);

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json()
        console.log(json[1]);
        setSearchSuggestions(json[1]);
        dispatch(cachedSuggestions({
            [searchQuery]: json[1]
        }))
    }

    useEffect(()=>{

        if (searchQuery.trim() === "") {
            setShowSuggestions(false); // Hide suggestions if the query is empty
            return;
        }

        const timer = setTimeout(() => {
            if(cachedResults[searchQuery]){
                setSearchSuggestions(cachedResults[searchQuery]);
            }else{
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer)
        };

    },[searchQuery])


    const handleVideosSearch = async() => {
        const videos = await fetch(YOUTUBE_SEARCH_LIST_API + searchQuery + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY);
        const json = await videos.json();
        dispatch(searchedVideosList(json.items));
    }

  return (
    <>
      <div className="w-full bg-white">
        <div className="w-[93rem] mx-auto flex justify-between mt-2 mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleToggleMenu}
              className="hover:bg-zinc-100 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <img src="youtube-logo.png" className="w-24 object-contain" />
          </div>
          <div className="flex items-center">
            <input
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => setShowSuggestions(false)}
              onFocus={() => setShowSuggestions(true)}
              value={searchQuery}
              className="w-[36rem] border-2 border-zinc-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 px-4 py-2 placeholder-zinc-500"
            />
            <button
              className="border-2 border-l-0 border-zinc-300 rounded-r-full bg-zinc-100 px-6 py-2"
              onClick={() => handleVideosSearch()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            {showSuggestions && (
              <div className="fixed top-[3.3rem] bg-white border w-[36rem] rounded-lg py-4 px-4">
                {searchSuggestions?.map((suggestion, index) => (
                  /* 2. Set the searchQuery on suggestion click */
                  <div
                    key={index}
                    onMouseDown={() => {
                      setSearchQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                    className="flex space-x-4 items-center mb-2 hover:bg-zinc-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                    <p className="text-lg">{suggestion}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="ml-4 bg-zinc-100 p-2 border-2 border-zinc-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex bg-zinc-100 py-2 px-4 rounded-full space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="font-semibold">Create</span>
            </button>
            <img
              className="w-8 rounded-full"
              src="https://yt3.ggpht.com/ytc/AIdro_meYAh6NPkc3qZ9RQbztfozX2jknUqc69hcasQTLZa7CCWY6MHmzRI1I6I59gYFhEiQXA=s88-c-k-c0x00ffffff-no-rj"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header