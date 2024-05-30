import { NextPage } from 'next';
import Link from 'next/link';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';

const Home: NextPage = () => {


  return (<>
  <div className='flex flex-row h-full w-full 
  bg-gradient-to-r from-blue-100 via-blue-400 to-violet-500'>
  
  <div className='h-full w-[60%] flex items-center'>
  <div className='h-full w-full px-[17%] py-[9%] '>
  <div className='animate-slidein300 opacity-0 box relative w-[700px] h-[700px] p-[2%] overflow-hidden'>
  <img src="/main-page-icon.jpg"
  alt="AI generated art, isometric"
  className="animate-slidein300 opacity-0 rounded-3xl h-[100%]
  "
/>
  </div>
  

</div>
</div>
<a 
  hidden={true}
  href="https://kr.freepik.com/free-vector/ai-powered-content-creation-isometric-concept-with-chatbot-on-laptop-screen-3d-vector-illustration_43868977.htm#page=7&query=%EC%B1%97%EB%B4%87&position=16&from_view=keyword&track=ais_user&uuid=0652223a-52f0-4276-955b-fd7807ffa069">작가 macrovector</a>
  
  <div className='flex flex-col w-[40%] h-full'>
  
  <div className='flex flex-row mt-[25%]'>
  <div className='flex flex-row w-full typing-demo-header'>
  <SwitchAccessShortcutAddIcon className='text-[70px] mt-[27px] text-blue-700'/>
  <div className=' text-7xl font-extrabold ml-[3%] md:leading-relaxed
  bg-gradient-to-r from-blue-700 via-blue-700 to-violet-900 bg-clip-text inline-block text-transparent'>Turing ChatBot</div>
  </div>
  </div>
  <div className='typing-demo-sub-header text-zinc-800 text-5xl font-semibold mt-[3%] ml-[5%]'>AI Chat bot</div>
  <div className='animate-slidein700 opacity-0 text-3xl text-black mt-[5%] ml-[5%]'>
  Turing Chat is a free-to-use AI system.
  </div>
  <div className='animate-slidein700 opacity-0 text-3xl text-black mt-[1%] leading-normal ml-[5%]'>
  Use it for engaging conversations, gain insights
  </div>
  <div className='animate-slidein700 opacity-0 text-3xl text-black mt-[1%] leading-normal ml-[5%]'>
  , automate tasks, and witness the future of AI!
  </div>

  <Link 
   href={'/pages/user/login'} 
  className="animate-slidein900 border-2  flex items-center justify-center opacity-0 w-[40%] h-[8%] mt-[5%] ml-[5%] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-blue-800 font-medium rounded-xl text-3xl px-[2%] py-[2%] text-center me-2 mb-2
  ">
Getting started...

</Link>
  
  </div>
 
  </div>

  </>
  );
}
export default Home;