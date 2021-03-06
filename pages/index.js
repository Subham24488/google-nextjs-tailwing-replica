import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from 'next/image'
import {MicrophoneIcon, SearchIcon } from '@heroicons/react/outline'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Google2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* header-section */}
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
    {/* div left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
    {/* DIV RIGHT */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

    {/* icons */}


    {/* avatar */}
    {/* <Avatar url="https://i.pinimg.com/474x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"/> */}

      </div> 
    </header>
    {/* body-section */}
    <form className="flex flex-col items-center mt-44 flex-grow">
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl">
          <SearchIcon 
            className="h-5 mr-3 text-gray-500"
          />
          <input type="text" className="focus:outline-none flex-grow "/>
          <MicrophoneIcon className="h-5" />

        </div>

        {/* buttons */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm-x-4">
        <button className="btn">Google Search</button>
        <button className="btn">I'm feeling lucky</button>
        </div>
      
    </form>

    {/* footer-section */}
    
     
    </div>
  )
}
