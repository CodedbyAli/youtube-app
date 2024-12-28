import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import VideoCard from "./VideoCard";

const VideoContainer = () => {

    const [videos, setVideos] = useState(null);

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
        {videos.map(video => (
            <div key={video.id}>
                <VideoCard info={video}/>
            </div>
        ))
        }
        </div>
    </>
  )
}

export default VideoContainer