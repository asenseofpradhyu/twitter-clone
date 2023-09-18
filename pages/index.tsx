import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { BiHomeCircle, BiSearch, BiBell } from 'react-icons/bi'
import { MdOutlineMailOutline, MdOutlineSupervisorAccount, MdOutlineAccountCircle } from 'react-icons/md'
import { BsBookmark, BsCardList, BsCardChecklist } from 'react-icons/bs'
import { Inter } from 'next/font/google'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
const inter = Inter({ subsets: ['latin'] })

// Local Imports
import TweetCard from '@/components/TweetCard'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { graphqlClient } from '@/clients/api'
import { verifyUserGoogleOAuthTokenQuery } from '@/graphql/query/user'

interface TwitterSidebarButton {
  title: string,
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <BiSearch />
  },
  {
    title: 'Notifications',
    icon: <BiBell />
  },
  {
    title: 'Messages',
    icon: <MdOutlineMailOutline />
  },
  {
    title: 'Lists',
    icon: <BsCardChecklist />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Communities',
    icon: <MdOutlineSupervisorAccount />
  },
  {
    title: 'Verified',
    icon: <FaXTwitter />
  },
  {
    title: 'Profile',
    icon: <MdOutlineAccountCircle />
  },
  {
    title: 'More',
    icon: <BsCardList />
  },
];

export default function Home() {

  const onLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error("Error while Google Login!!!");

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleOAuthTokenQuery, { token: googleToken });
    toast.success("Account Verify Successfully");

    if (verifyGoogleToken) {
      window.localStorage.setItem("X-Auth-Token", verifyGoogleToken);
    }

  }, []);



  return (
    <div >
      <div className='grid grid-cols-12'>
        <aside className="col-span-3 pt-2 ml-28 px-4 self-start sticky top-0">
          <div className='text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all'>
            <FaXTwitter />
          </div>
          <div className="text-xl mt-1 pr-4">
            <ul>
              {sidebarMenuItems.map((menuItems) => <li className='flex items-center justify-start py-3 px-3 pr-6 gap-4 cursor-pointer hover:bg-gray-800 rounded-full w-fit' key={menuItems.title}><span className='text-2xl'>{menuItems.icon}</span><span>{menuItems.title}</span></li>)}
            </ul>
          </div>
          <div className='pr-3 mt-4'>
            <button className='bg-[#1d9bf0] p-4 w-full text-lg rounded-full font-semibold'>Post</button>
          </div>
        </aside>
        <main className="col-span-5 border-r-[1px] border-l-[1px] border-gray-400">
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </main>
        <aside className="col-span-3 sticky">
          <div className='p-5 bg-slate-800 text-center border ml-5 mt-5 rounded-lg'>
            <h1 className='mb-5'>New to X? Login with Google</h1>
            <GoogleLogin

              onSuccess={onLoginWithGoogle}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}
