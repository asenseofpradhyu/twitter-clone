import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { BiHomeCircle, BiSearch, BiBell } from 'react-icons/bi'
import { MdOutlineMailOutline, MdOutlineSupervisorAccount, MdOutlineAccountCircle } from 'react-icons/md'
import { BsBookmark, BsCardList, BsCardChecklist } from 'react-icons/bs'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Local Imports
import TweetCard from '@/components/TweetCard'

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
        <aside className="col-span-3 sticky"></aside>
      </div>
    </div>
  )
}
