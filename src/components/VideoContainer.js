import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    const [videos, setVideos] = useState(null);
    const searchedVideosList = useSelector((store) => store.videos.searchedVideos);
    console.log("SEARCHED VIDEOS: ", searchedVideosList);

    const getVideos = async() => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    }

    useEffect(()=>{
        getVideos();
    },[])

    if(!videos) return;

  return (
    <>
        <div className="grid grid-cols-3 mt-10 gap-4">
            {searchedVideosList?.length > 0
                ? searchedVideosList.map((video) => (
                    <Link key={video.id?.videoId || video.id} to={"/watch?v=" + video.id}>
                        <VideoCard info={video} />
                    </Link>
                ))
                : videos.map((video) => (
                    <Link key={video.id?.videoId || video.id} to={"/watch?v=" + video.id}>
                        <VideoCard info={video} />
                    </Link>
                ))}
        </div>
    </>
  )
}

export default VideoContainer