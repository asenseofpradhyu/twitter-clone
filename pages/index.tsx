import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { BiHomeCircle, BiSearch, BiBell, BiImage } from 'react-icons/bi'
import { MdOutlineMailOutline, MdOutlineSupervisorAccount, MdOutlineAccountCircle } from 'react-icons/md'
import { BsBookmark, BsCardList, BsCardChecklist } from 'react-icons/bs'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Local Imports
import TweetCard from '@/components/TweetCard'
import { useCallback, useState } from 'react'
import { useCurrentUser } from '@/hooks/user'
import { useCreateTweetMutation, useGetAllTweets } from '@/hooks/tweet'
import { Tweet } from '@/gql/graphql'
import TwitterLayout from '@/components/Layout/TwitterLayout'
import { GetServerSideProps } from 'next'
import { graphqlClient } from '@/clients/api'
import { getAllTweetQuery, getSignedURLForTweetQuery } from '@/graphql/query/tweet'
import axios from 'axios'
import toast from 'react-hot-toast'

interface homeProps {
  tweets?: Tweet[]
}

export default function Home(props: homeProps) {

  const { user } = useCurrentUser();
  // const { tweets = [] } = useGetAllTweets();
  const { mutateAsync } = useCreateTweetMutation();
  const { tweets = props.tweets as Tweet[] } = useGetAllTweets();

  const [content, setContent] = useState('');
  const [imageURL, setimageURL] = useState('');


  const handleInputChange = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault();

      const files: File | undefined | null = input.files?.item(0);

      if (!files) return;

      const { getSignedURLForTweet } = await graphqlClient.request(getSignedURLForTweetQuery, {
        imageName: files.name,
        imageType: files.type
      });

      if (getSignedURLForTweet) {
        toast.loading('Uploading...', { id: '1' });
        await axios.put(getSignedURLForTweet, files, {
          headers: {
            'Content-Type': files.type
          }
        })
        toast.success('Uploaded Done', { id: '1' });
        const url = new URL(getSignedURLForTweet);
        const myFilePath = `${url.origin}${url.pathname}`;
        setimageURL(myFilePath);
      }
      console.log(input.files);
    }
  }, []);



  const onSelectImage = useCallback(() => {

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    const handler = handleInputChange(input);

    input.addEventListener('change', handleInputChange(input));

    input.click();
  }, [handleInputChange]);

  const onCreateTweet = useCallback(async () => {
    mutateAsync({
      content,
      imageURL
    })
    setContent("");
    setimageURL("");
  }, [content, mutateAsync, imageURL]);



  return (
    <div >
      <TwitterLayout>
        <div className='border border-l-0 border-r-0 border-t-0 border-gray-400 p-4 cursor-pointer hover:bg-slate-900"'>
          <div className='grid grid-cols-12'>
            <div className='col-span-1'>
              {user?.profileImageURl && <Image
                src={user.profileImageURl}
                height={40}
                width={40}
                alt='User Profile Image'
                className='rounded-full mr-1'
              />}
            </div>
            <div className='col-span-11 px-2'>
              <textarea name="shareTweet" id="shareTweet" className='w-full text-lg bg-transparent focus:outline-none' placeholder="What's Happening" rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              {imageURL && <Image src={imageURL} alt='Image' width={400} height={400} />}
              <div className='flex justify-between items-center text-[22px]'>
                <BiImage onClick={onSelectImage} />
                <button className='bg-[#1d9bf0] px-4 py-2 text-sm rounded-full font-semibold'
                  onClick={onCreateTweet}>Post</button>
              </div>
            </div>
          </div>
        </div>

        {
          tweets?.map(tweet => <TweetCard key={tweet?.tweetID} data={tweet as Tweet} />)
        }

      </TwitterLayout>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<homeProps> = async (context) => {

  const tweet = await graphqlClient.request(getAllTweetQuery);

  return {
    props: {
      tweets: tweet.getAllTweets as Tweet[]
    }
  }
}