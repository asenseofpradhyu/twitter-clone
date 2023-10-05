import TwitterLayout from "@/components/Layout/TwitterLayout";
import TweetCard from "@/components/TweetCard";
import { Tweet, User } from "@/gql/graphql";
import { useCurrentUser } from "@/hooks/user";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { graphqlClient } from "@/clients/api";
import { GetUserByIDQuery } from "@/graphql/query/user";


interface ServerProps {
    userInfo?: User
}

const UserProfilePage: NextPage<ServerProps> = (props) => {

    const router = useRouter();


    return (
        <div>
            <TwitterLayout>
                <nav className="flex items-center gap-3 py-2 px-2">
                    <AiOutlineArrowLeft className="text-3xl" />
                    <div>
                        <h1 className="text-1xl text-bold">Pradhumansinh Padhiyar</h1>
                        <h3 className=" text-slate-500">{props.userInfo?.tweets?.length} Tweets</h3>
                    </div>
                </nav>
                <div className="relative">
                    <div style={{ width: '100%', height: '150px', position: 'relative' }}>
                        <Image
                            alt="Cover image"
                            src="/cover-image.jpg"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className="p-4 absolute w-[100%] top-[105px] border-b">
                        <div className="flex items-center justify-between mb-5">
                            {props.userInfo?.profileImageURl && <Image src={props.userInfo?.profileImageURl} height={120} width={120} alt="user-profile-img" className="rounded-full border-2 border-gray-400" />}
                            <button type="button" className="border border-gray-400 bg-transparent px-3 py-2 rounded-full cursor-pointer">Edit Profile</button>
                        </div>
                        <h2 className="font-bold">Pradhumansinh Padhiyar</h2>
                        <h5 className="font-[45px] text-slate-300">@asenseofpradhyu</h5>
                        <p className="mt-2">Software Developer who loves to Learn, Write, Teach and Share on Tech</p>

                        <div className="flex items-center gap-5 mt-5">
                            <p className="font-bold">250 <span className="text-sm text-slate-300 font-normal">Following</span></p>
                            <p className="font-bold">500 <span className="text-sm text-slate-300 font-normal">Followers</span></p>
                        </div>
                    </div>
                </div>
                <div className="mt-[285px]">
                    {props.userInfo?.tweets?.map(tweets => <TweetCard data={tweets as Tweet} key={tweets?.tweetID} />)}
                </div>
            </TwitterLayout>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<ServerProps> = async (context) => {
    const id = context.query.id as string | undefined;

    if (!id) return { notFound: true, props: { user: undefined } }

    const userInfo = await graphqlClient.request(GetUserByIDQuery, { id });

    if (!userInfo.getUserByID) return { notFound: true }

    return {
        props: {
            userInfo: userInfo.getUserByID as User,
        }
    }
}

export default UserProfilePage;