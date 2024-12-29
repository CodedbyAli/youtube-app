import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useState } from "react";

const Watch = () => {
    const [searchParams] = useSearchParams();
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();

    const handleChatInput = (e) => {
        e.preventDefault()

        dispatch(addMessage({
            name: "Ali Hamza",
            message: liveMessage,
        }))
    }

  return (
    <>
    <div className="w-[88rem] mx-auto flex space-x-4">
        <div className="">
            <iframe 
            className="rounded-xl"
            width="950"
            height="535"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="w-full">
        <div className="py-3 px-6 border rounded-t-xl flex justify-between">
                    <div className="flex items-center space-x-1">
                        <h1 className="">Live Chat</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-7 hover:bg-zinc-200 rounded-full cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-7 cursor-pointer hover:bg-zinc-200 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            <div className="border border-y-none w-full h-[30rem] flex flex-col-reverse overflow-y-scroll">
                <div>
                    <LiveChat />
                </div>
            </div>
            <form onSubmit={(e)=> handleChatInput(e)} className="border border-t-none rounded-b-xl py-4 px-6">
                <input onChange={(e) => setLiveMessage(e.target.value)} className="w-full bg-zinc-100 py-2 px-2 rounded-full focus:outline-none" placeholder="Chat..." />
            </form>
        </div>
    </div>
    </>
  )
}

export default Watch