import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { BiHomeCircle, BiSearch, BiBell, BiImage } from 'react-icons/bi'
import { MdOutlineMailOutline, MdOutlineSupervisorAccount, MdOutlineAccountCircle } from 'react-icons/md'
import { BsBookmark, BsCardList, BsCardChecklist } from 'react-icons/bs'
import { Inter } from 'next/font/google'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { IoIosAddCircleOutline } from 'react-icons/io'




// Local Imports
import { useCallback, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { graphqlClient } from '@/clients/api'
import { verifyUserGoogleOAuthTokenQuery } from '@/graphql/query/user'
import { useCurrentUser } from '@/hooks/user'
import { QueryClient, useQueryClient } from '@tanstack/react-query'
import { useCreateTweetMutation, useGetAllTweets } from '@/hooks/tweet'
import { Tweet } from '@/gql/graphql'
import TweetCard from '../TweetCard'
import Link from 'next/link'

interface TwitterLayoutProps {
    children: React.ReactNode
}
interface TwitterSidebarButton {
    title: string,
    icon: React.ReactNode
    link: string
}

const TwitterLayout: React.FC<TwitterLayoutProps> = (props) => {

    const { user } = useCurrentUser();

    const sidebarMenuItems: TwitterSidebarButton[] = useMemo(() => [
        {
            title: 'Home',
            icon: <BiHomeCircle />,
            link: '/'
        },
        {
            title: 'Explore',
            icon: <BiSearch />,
            link: '/'
        },
        {
            title: 'Notifications',
            icon: <BiBell />,
            link: '/'
        },
        {
            title: 'Messages',
            icon: <MdOutlineMailOutline />,
            link: '/'
        },
        {
            title: 'Lists',
            icon: <BsCardChecklist />,
            link: '/'
        },
        {
            title: 'Bookmarks',
            icon: <BsBookmark />,
            link: '/'
        },
        {
            title: 'Communities',
            icon: <MdOutlineSupervisorAccount />,
            link: '/'
        },
        {
            title: 'Verified',
            icon: <FaXTwitter />,
            link: '/'
        },
        {
            title: 'Profile',
            icon: <MdOutlineAccountCircle />,
            link: `${user?.id}`
        },
        {
            title: 'More',
            icon: <BsCardList />,
            link: '/'
        },
    ], [user?.id]);


    const { tweets = [] } = useGetAllTweets();

    const queryClient = useQueryClient();
    const { mutate } = useCreateTweetMutation();

    const [content, setContent] = useState('');

    const onSelectImage = useCallback(() => {

        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
    }, []);

    const onCreateTweet = useCallback(() => {
        mutate({
            content
        })
    }, [content, mutate]);

    const onLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
        const googleToken = cred.credential;
        if (!googleToken) return toast.error("Error while Google Login!!!");

        const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleOAuthTokenQuery, { token: googleToken });
        toast.success("Account Verify Successfully");

        if (verifyGoogleToken) {
            window.localStorage.setItem("X-Auth-Token", verifyGoogleToken);
        }

        await queryClient.invalidateQueries(['current-user']);
    }, [queryClient]);



    return (
        <div> <div className='grid grid-cols-12'>
            <aside className="col-span-2 sm:col-span-3 pt-2 sm:px-4 flex sm:justify-end pr-4 sticky top-0 h-screen relative">
                <div>
                    <div className='text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all'>
                        <FaXTwitter />
                    </div>
                    <div className="text-xl mt-1 pr-4">
                        <ul>
                            {sidebarMenuItems.map((menuItems) =>

                                <li key={menuItems.title}>
                                    <Link href={menuItems.link} className='flex items-center justify-start py-3 px-3 pr-6 gap-4 cursor-pointer hover:bg-gray-800 rounded-full w-fit'>
                                        <span className='text-2xl'>{menuItems.icon}</span><span className='hidden sm:inline'>{menuItems.title}</span>
                                    </Link>

                                </li>

                            )}
                        </ul>

                    </div>
                    <div className='pr-3 mt-4'>
                        <button className='hidden sm:block bg-[#1d9bf0] p-4 w-full text-lg rounded-full font-semibold'>Post</button>
                        <button className='block sm:hidden bg-[#1d9bf0] p-5 w-full text-[25px] rounded-full font-semibold'><IoIosAddCircleOutline /></button>
                    </div>
                </div>

                {user && user.profileImageURl && <div className='flex items-center absolute bottom-0 p-2 rounded-full hover:bg-slate-800 cursor-pointer'>
                    <Image
                        src={user.profileImageURl}
                        height={50}
                        width={50}
                        alt='User Profile Image'
                        className='rounded-full mr-1'
                    />
                    <h3 className='hidden sm:block overflow-hidden truncate'>{user.firstName} {user.lastName}</h3>
                </div>}
            </aside>
            <main className="col-span-10 sm:col-span-5 border-r-[1px] border-l-[1px] border-gray-400">
                {props.children}

            </main>
            <aside className="col-span-0 sm:col-span-3 sticky">
                {user ? (
                    <div className="p-5  rounded-lg">
                        <h1 className="my-2 text-2xl">New to Twitter?</h1>
                        <GoogleLogin onSuccess={onLoginWithGoogle} />
                    </div>
                ) : (
                    <div className="px-4 py-3 bg-slate-800 ml-3 rounded-lg">
                        <h1 className="my-2 text-xl mb-5">{user?.recommendedUsers.length > 0 ? "Users you may know" : "Login to view recommended users"}</h1>
                        {user?.recommendedUsers?.map((el: any) => (
                            <div className="flex items-center gap-3 mt-2" key={el?.id}>
                                {el?.profileImageURL && (
                                    <Image
                                        src={el?.profileImageURL}
                                        alt="user-image"
                                        className="rounded-full"
                                        width={60}
                                        height={60}
                                    />
                                )}
                                <div>
                                    <div className="text-lg">
                                        {el?.firstName} {el?.lastName}
                                    </div>
                                    <Link
                                        href={`/${el?.id}`}
                                        className="bg-white text-black text-sm px-5 py-1 w-full rounded-lg"
                                    >
                                        View
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </aside>
        </div></div>
    );
}

export default TwitterLayout;