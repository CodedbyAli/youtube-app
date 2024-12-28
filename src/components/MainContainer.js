import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {

  
  return (
    <>
      <div className="ml-4">
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  )
}

export default MainContainer