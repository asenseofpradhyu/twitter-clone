import Image from "next/image";
import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { TbShare2 } from "react-icons/tb";

const TweetCard: React.FC = () => {
    return <div className="border border-l-0 border-r-0 border-t-0 border-gray-400 p-4 cursor-pointer hover:bg-slate-900">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image className="rounded-full" src={'https://avatars.githubusercontent.com/u/24241624?v=4'} alt="user-image" height={50} width={50} />
            </div>
            <div className="col-span-11">
                <div className="font-bold">
                    <h1>Pradhuman Padhiyar</h1>
                </div>
                <div className="mt-2">
                    <p>A good tech article will always refer you to other valuable tech resources.

                        Therefore, ensure that you include references to other helpful materials for those who want to learn more about specific tech concepts in detail.</p>
                </div>
                <div className="flex align-center justify-between mt-5 p-2  w-[90%]">
                    <div>
                        <FaRegComment />
                    </div>
                    <div>
                        <FaRetweet />
                    </div>
                    <div>
                        <AiOutlineHeart />
                    </div>
                    <div>
                        <MdOutlineAnalytics />
                    </div>
                    <div>
                        <TbShare2 />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default TweetCard;