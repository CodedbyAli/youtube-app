import { useEffect, useState } from "react";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";


const LiveChat = () => {
     const [liveMessage, setLiveMessage] = useState('');
     const dispatch = useDispatch();
     const chatMessages = useSelector((store) => store.chat.messages)

     useEffect(() => {
        const i = setInterval(()=>{
            // API Polling

            dispatch(
                addMessage({
                  name: generateRandomName(),
                  message: makeRandomMessage(10) + " 🚀",
                })
              );
        },2000);

        return () => clearInterval(i);

    },[]);

  return (
    <>
        {
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
        }
    </>
  )
}

export default LiveChat