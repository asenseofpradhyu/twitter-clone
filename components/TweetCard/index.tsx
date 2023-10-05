import Image from "next/image";
import React from "react";
import { FaRegComment, FaRetweet } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { TbShare2 } from "react-icons/tb";
import { Tweet } from "@/gql/graphql";


interface TweetCardProps {
    data: Tweet
}

const TweetCard: React.FC<TweetCardProps> = (props) => {

    const { data } = props;

    return <div className="border border-l-0 border-r-0 border-t-0 border-gray-400 p-4 cursor-pointer hover:bg-slate-900">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                {
                    data.tweetUser?.profileImageURl && <Image className="rounded-full" src={data.tweetUser.profileImageURl} alt={`${data.tweetUser.firstName} ${data.tweetUser.lastName} Twitter Profile`} height={50} width={50} />
                }
            </div>
            <div className="col-span-11">
                <div className="font-bold">
                    <h1>{`${data.tweetUser?.firstName} ${data.tweetUser?.lastName}`}</h1>
                </div>
                <div className="mt-2">
                    <p>{data.content}</p>
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