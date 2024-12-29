import { formatViews, timeAgo } from "../utils/helper";
const VideoCard = ({info}) => {
    const {thumbnails,title,channelTitle,publishedAt} = info.snippet;
    const { viewCount = Math.floor(Math.random() * 1000000) } = info.statistics || {};
  return (
    <div>
        <img src={thumbnails.high.url} className="w-full object-cover aspect-video rounded-lg"/>
        <div className="mt-2 flex items-start space-x-3">
            <img className="w-8 rounded-full" src="https://yt3.ggpht.com/ytc/AIdro_meYAh6NPkc3qZ9RQbztfozX2jknUqc69hcasQTLZa7CCWY6MHmzRI1I6I59gYFhEiQXA=s88-c-k-c0x00ffffff-no-rj" />
            <div>
                <h3 className="font-semibold line-clamp-2">{title}</h3>
                <p className="text-gray-600">{channelTitle}</p>
                <p className="text-gray-600 text-sm">
                    {formatViews(viewCount)} views • {timeAgo(publishedAt)}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard