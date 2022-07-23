import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Indeep London</title>
        <meta name='description' content='Indeep London' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-full h-[80vh] flex justify-center items-center'>
        <div className='w-[10rem] h-10 relative '>
          <Image src='/indeep.svg' alt='Indeep London Logo' layout='fill' />
        </div>
      </main>

      <footer className='flex justify-center items-center h-[10vh]'>
        <a
          className='text-color'
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        >
          Developed by{' '}
          <span className='text-primary uppercase font-semibold'>
            Sayyed Abrar Akhtar
          </span>
        </a>
      </footer>
    </div>
  );
}
