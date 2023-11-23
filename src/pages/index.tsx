import Link from 'next/link';

const Home = () => (
  <div className='z-10 h-full w-full items-center justify-center font-mono text-sm lg:flex'>
    <Link href='/facts/1' className='bg-sky-500 hover:bg-sky-700 p-5 rounded-2xl'>
      Go to facts
    </Link>
  </div>
);

export default Home;
