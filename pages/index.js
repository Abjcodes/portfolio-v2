import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/legacy/image'
import designImg from '../images/design-presentation.png'
import sessionsImg from '../images/sessionsImg.png'
import cryptoImg from '../images/cryptoImg.png'
import budgetImg from '../images/budgetImg.png'
import animeImg from '../images/anime.webp'
import behanceIcon from '../images/behanceIcon.svg'
import dribbleIcon from '../images/dribbbleIcon.svg'
import twitterIcn from '../images/twitterIcn.svg'
import githubIcn from '../images/githubIcn.svg'
import linkedinIcn from '../images/linkedinIcn.svg'
import gmailIcn from '../images/gmailIcn.svg'

export default function Home() {
  return (
    <div className='bg-[#090C10] min-h-screen font-satoshi'>
      <Head>
        <title>Abjcodes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet"></link>
      </Head>
      <main className='mx-5 sm:mx-24'>
          <h1 className="pt-6 text-2xl font-semibold text-transparent bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900">
            Abj
          </h1>
          {/* header */}
          <div className='mt-20 '>
            <div className='text-center'>
            <p className='text-3xl leading-normal font-light text-[#D4D4D4] sm:text-4xl'>
            "The greatest glory in living lies not in never <span className='text-white font-normal'>falling</span>, but in <span className='text-white font-normal'>rising</span> every time we fall" 
            </p>
            <p className='text-[#D4D4D4] mt-7 text-2xl sm:text-3xl sm:mt-8'>
              - Nelson Mandela
            </p>
            </div>
            {/* Details */}
            <div className='flex flex-col mt-20 sm:flex-row gap-4 '>
            <div className='border border-[#454545] rounded-xl sm:w-1/2'>
              <p className='pt-16 px-4 text-xl text-white font-semibold sm:px-12 sm:text-2xl'>
              <span className="wave">👋</span> Heyy, I am Abijith Vasanthakumar
              </p>
              <p className='pt-3 text-[#9C9C9C] px-6 leading-relaxed pb-16 sm:px-14 sm:text-lg'>
              I'm a frontend web developer (full stack in the making) who loves design. I’m interested in React, Next,  UI/UX, Chrome extension development and Sarcasm.
              </p>
            </div>
            <div className='flex flex-col gap-2 sm:flex-row sm:w-1/2'>
            <div className='flex flex-col gap-3  sm:w-2/3'>
            <Link className='group border border-[#625A45] rounded-xl hover:bg-[#F5DD9D] sm:h-1/2' href='#devShowcase'>
              <p className='p-7 text-[#F5DD9D] group-hover:text-[#625A45] font-semibold text-2xl'>
                Development
              </p>
            </Link>
            <Link className='border border-[#8AB8A8] rounded-xl sm:h-1/2' href='#design-showcase'>
              <p className='p-7 text-[#8AB8A8] font-semibold text-2xl'>
                Design
              </p>
            </Link>
            </div>
            <a className='mt-2 border border-[#FFABAB] rounded-xl sm:m-0 sm:w-full' href='https://drive.google.com/file/d/1ybYPm7SoLkQCTk76_IXo-mKF2rzwP7sc/view?usp=sharing'>
              <p className='p-7 text-[#FFABAB] font-semibold text-2xl'>
                Resume
              </p>
            </a>
            </div>
            </div>
          </div>
          {/* Work experience */}
          <div className='mt-6'>
            <p className='font-semibold text-lg sm:text-xl text-white'>
              I've worked with
            </p>

            <div className='mt-5 flex flex-col gap-3 sm:flex-row sm:align-baseline sm:justify-between'>
              <div className='border border-[#454545] rounded-xl sm:w-1/2'>
                <div className='flex flex-col sm:flex-row justify-between'>
                <p className='pt-6 px-4 text-xl text-white font-semibold sm:px-12 sm:text-2xl'>
                  Growth.cx
                </p>
                <p className='py-3 px-4 text-base text-[#3e43cf] font-base sm:pt-8 sm:mx-4'>
                  Internship
                </p>
                </div>
                <p className='px-4 text-[#9C9C9C] sm:pl-12 sm:pr-16 sm:leading-relaxed sm:text-base sm:py-4'>
                Worked on their growth marketing suite Suitejar.Implemented features such as recrawling, report generation, design
                changes etc. using typescript, react, redux toolkit, tailwind css and ant
                design. Created a chrome extension for auditing web pages using react, webpack, fetch API, and tailwind css.

                </p>
                <div className='mt-4 mx-3 mb-6 sm:mx-11 rounded-full border border-[#454545] text-center w-32'>
                  <p className='py-2 text-[#C9C9C9] text-sm'>
                    Development
                  </p>
                </div>
              </div>
              
              <div className='border border-[#454545] rounded-xl sm:w-1/2'>
                <div className='flex flex-col sm:flex-row justify-between'>
                <p className='pt-6 px-4 text-xl text-white font-semibold sm:px-12 sm:text-2xl'>
                  Rajagiri Hospital
                </p>
                <p className='py-3 px-4 text-base text-[#ED2E61] font-base sm:pt-8 sm:mx-4'>
                  Part time
                </p>
                </div>
                <p className='px-4 text-[#9C9C9C] sm:pl-12 sm:pr-16 sm:leading-relaxed sm:text-base sm:py-4'>
                Worked on a discharge management system which efficiently manages their patient discharge data. Served as a UI/UX
                designer and a frontend developer. Created the web app using Vue.js.
                </p>
                {/* Fix the alignment later */}
                <div className='mt-10 mx-3 mb-6 sm:mx-11 rounded-full border border-[#454545] text-center w-32'>
                  <p className='py-2 text-[#C9C9C9] text-sm'>
                    Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-5 flex flex-col gap-3 sm:flex-row sm:align-baseline sm:justify-between'>
              <div className='border border-[#454545] rounded-xl sm:w-1/2'>
                <div className='flex flex-col sm:flex-row justify-between'>
                <p className='pt-6 px-4 text-xl text-white font-semibold sm:px-12 sm:text-2xl'>
                  Girlscript Summer of Code
                </p>
                <p className='py-3 px-4 text-base text-[#FAC22E] font-base sm:pt-8 sm:mx-4'>
                  Designer
                </p>
                </div>
                <p className='px-4 text-[#9C9C9C] sm:pl-12 sm:pr-16 sm:leading-relaxed sm:text-base sm:py-4'>
                Served as the core team member and designer of India's biggest open source program.
                Worked on creating engaging social media graphics, posters,
                certificates, company invoices etc. for 51,000+ combined followers
                and 25,000+ community members.

                </p>
                <div className='mt-4 mx-3 mb-6 sm:mx-11 rounded-full border border-[#454545] text-center w-32'>
                  <p className='py-2 text-[#C9C9C9] text-sm'>
                    Design
                  </p>
                </div>
              </div>
              
              <div className='border border-[#454545] rounded-xl sm:w-1/2'>
                <div className='flex flex-col sm:flex-row justify-between'>
                <p className='pt-6 px-4 text-xl text-white font-semibold sm:px-12 sm:text-2xl'>
                Scholarship Track
                </p>
                <p className='py-3 px-4 text-base text-[#9F36CC] font-base sm:pt-8 sm:mx-4'>
                  Volunteering
                </p>
                </div>
                <p className='px-4 text-[#9C9C9C] sm:pl-12 sm:pr-16 sm:leading-relaxed sm:text-base sm:py-4'>
                Volunteered as a graphic and content designer for the new york based community that helps student to receive 
                scholarships for both undergraduate and graduate studies. Worked with a diverse team of people from multiple 
                nationalities.
                </p>
                <div className='mt-4 mx-3 mb-6 sm:mx-11 rounded-full border border-[#454545] text-center w-32'>
                  <p className='py-2 text-[#C9C9C9] text-sm'>
                    Design
                  </p>
                </div>
              </div>
            </div>

            {/* Design Showcase */}
            <div className='mt-6' id='design-showcase'>
            <div className='mt-5  flex flex-col gap-3 sm:flex-row sm:justify-between h-1/2'>
              <div className='rounded-2xl h-60 sm:w-1/2 sm:h-80 relative' >
              <Image 
              src={designImg} 
              className = 'bg-cover rounded-2xl'
              layout='fill'
              objectFit='cover'
              />
              <div class="absolute left-0 right-0 h-full rounded-xl bg-black opacity-75 sm:opacity-75">
                <div className='mx-8 mt-14 sm:mt-20'>
                  <h1 className='text-white font-semibold text-2xl sm:text-3xl'>
                    Design
                  </h1>
                  <p className='text-white sm:text-slate-300 font-light text-lg pt-2 sm:text-2xl sm:pr-20 sm:pt-3 leading-relaxed sm:leading-relaxed'>
                  I casually designs in my free time as well. This can be graphics for
                  social media, UI/UX and anything that's related to design
                  </p>
                </div>
              </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 rounded-xl sm:w-1/2'>
                {/* For dribble and behance */}
                <div className='flex h-28 sm:h-full sm:flex-col gap-4 sm:w-1/3'>
                  <button className='flex rounded-xl w-1/2 sm:w-full sm:h-1/2 border-2 border-[#EA4C89] items-center justify-center'>
                  <Image 
                  src={dribbleIcon}
                  height={60}
                  />
                  </button>
                  <button className='flex rounded-xl w-1/2 sm:w-full sm:h-1/2 border-2 border-[#3177FF] items-center justify-center'>
                  <Image 
                  src={behanceIcon}
                  height={60}
                  />
                  </button>
                </div>
                {/* For dev daily and case study */}
                <div className='flex flex-col gap-3 sm:w-2/3'>
                  <button className='rounded-xl w-full h-1/2 border-2 border-[#0FB9EF] text-center items-center'>
                    {/* fix href */}
                    <a href='https://www.instagram.com/devdaily_insta/'>
                    <p className='py-7 text-[#0FB9EF] font-semibold text-xl'>
                      Dev daily
                    </p>
                    </a>
                  </button>
                  <button className='rounded-xl w-full h-1/2 border-2 border-[#3BA9A2] text-center'>
                    <a href='https://www.notion.so/0007/MARKS-redesign-UI-UX-task-2-3a5efc72a19d41e089037ced41e4a424'>
                    <p className=' py-7 text-[#57BFB9] font-semibold text-xl'>
                      Designing for habituation (case study)
                    </p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            </div>
            
            <div className='mt-6' id='devShowcase'>
            <p className='font-semibold text-lg sm:text-xl text-white'>
              I've built
            </p>
            <div className='mt-5 flex flex-col w-full gap-5'>

              <div className='border-2 border-[#0F5DCA] rounded-lg h-[38.72rem] sm:h-[36rem] flex flex-col sm:flex-row'>
                {/* left */}
                {/* sm:w-1/2 h-1/2  */}
                <div className='sm:h-full sm:w-1/2'>
                  <div className='mx-5 sm:ml-10 sm:mr-14 sm:my-5'>
                    <h1 className='pt-5 text-[#5EB0FF] text-2xl sm:text-3xl font-semibold'>
                      Sessions
                    </h1>
                    <p className='pt-2 sm:pt-5 sm:text-lg text-[#9DC2FF] leading-relaxed sm:leading-loose'>
                    A chrome extension for saving the currently open tabs as a session,
                    enabling users to reopen them any time they want. Won the national level Hack4bengal Hackathon, which had over
                    125+ successful submissions
                    </p>
                    <p className='py-2 sm:py-5 text-[#9DC2FF] text-lg sm:text-xl font-semibold'>
                      Stack: HTML, CSS, JS, Manifest v3
                    </p>
                  <div className='flex flex-row gap-2'>
                  {/* <div className='my-5 rounded-full border border-[#4CA7FF] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#4CA7FF] text-sm font-medium'>
                   Extension
                  </p>
                  </div> */}
                  <div className='my-5 rounded-full border border-[#4CA7FF] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#4CA7FF] text-sm font-medium'>
                    UI/UX
                  </p>
                  </div>
                  <div className='my-5 rounded-full border border-[#4CA7FF] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#4CA7FF] text-sm font-medium'>
                    Frontend
                  </p>
                  </div>
                  <div className='my-5 rounded-full border border-[#4CA7FF] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#4CA7FF] text-sm font-medium'>
                    Hackathon
                  </p>
                  </div>
                  </div>
                  <p className='pt-2 pb-4 sm:py-8 sm:text-lg text-[#99CDFF] font-light'>
                    <a href='https://github.com/Abjcodes/Sessions' className='hover:text-[#2f95f5]'>
                    View on github
                    </a>
                  </p>
                  </div>
                </div>
                {/* right */}
                <div className='relative sm:w-1/2 h-1/2 sm:h-full bg-[#0F5DCA]'>
                <Image 
                src={sessionsImg} 
                className = ''
                layout='fill'
                objectFit='cover'
                />
                </div>
              </div>
              <div className='border-2 border-[#FF7E67] rounded-lg h-[38.72rem] sm:h-[36rem] flex flex-col sm:flex-row'>
                {/* left */}
                {/* sm:w-1/2 h-1/2  */}
                <div className='sm:h-full sm:w-1/2'>
                  <div className='mx-5 sm:mx-10 sm:my-5'>
                    <h1 className='pt-5 text-[#FFA292] text-2xl sm:text-3xl font-semibold'>
                     Crypto Price Tracker
                    </h1>
                    <p className='pt-2 sm:pt-5 sm:text-lg text-[#FFA696] leading-relaxed sm:leading-loose'>
                    Developed and implemented a real-time cryptocurrency tracking web application using React and crypto tracker API to retrieve current pricing data. 
                    </p>
                    <p className='py-2 sm:py-5 text-[#FFA292] text-lg sm:text-xl font-semibold'>
                      Stack: React.js, Axios
                    </p>
                  <div className='flex flex-row gap-2'>
                  {/* <div className='my-5 rounded-full border border-[#FFA696] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFA292] text-sm font-medium'>
                    Web App
                  </p>
                  </div> */}
                  <div className='my-5 rounded-full border border-[#FFA696] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFA292] text-sm font-medium'>
                    React
                  </p>
                  </div>
                  <div className='my-5 rounded-full border border-[#FFA696] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFA292] text-sm font-medium'>
                    API
                  </p>
                  </div>
                  <div className='my-5 rounded-full border border-[#FFA696] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFA292] text-sm font-medium'>
                    Webpack
                  </p>
                  </div>
                  </div>
                  <p className='pt-2 pb-4 sm:py-8 sm:text-lg text-[#FFA292] font-light'>
                    <a href='https://github.com/Abjcodes/crypto-price-tracker' className='hover:text-[#f47058]'>
                    View on github
                    </a>
                  </p>
                  </div>
                  
                </div>
                {/* right */}
                <div className='relative sm:w-1/2 h-1/2 sm:h-full'>
                <Image 
                src={cryptoImg} 
                className = 'rounded-b-md sm:rounded-none'
                layout='fill'
                objectFit='cover'
                />
                </div>
              </div>

              <div className='border-2 border-[#FFD864] rounded-lg h-[38.72rem] sm:h-[36rem] flex flex-col sm:flex-row'>
                {/* left */}
                {/* sm:w-1/2 h-1/2  */}
                <div className='sm:h-full sm:w-1/2'>
                  <div className='mx-5 sm:mx-10 sm:my-5'>
                    <h1 className='pt-5 text-[#FFCE3D] text-2xl sm:text-3xl font-semibold'>
                     Budget Tracking App
                    </h1>
                    <p className='pt-2 sm:pt-5 sm:text-lg text-[#FFD864] leading-relaxed sm:leading-loose'>
                    Developed and implemented a budget tracker in react in which users can add their budgets, expenses and track their finances. Uses local storage to store the user data.
                    </p>
                    <p className='py-2 sm:py-5 text-[#FFD864] text-lg sm:text-xl font-semibold'>
                      Stack: React.js
                    </p>
                  <div className='flex flex-row gap-2'>
                  <div className='my-5 rounded-full border border-[#FFD864] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFD864] text-sm font-medium'>
                    Web App
                  </p>
                  </div>
                  <div className='my-5 rounded-full border border-[#FFD864] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFD864] text-sm font-medium'>
                    React
                  </p>
                  </div>
                  <div className='my-5 rounded-full border border-[#FFD864] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFD864] text-sm font-medium'>
                  Context
                  </p>
                  </div>
                  {/* <div className='my-5 rounded-full border border-[#FFD864] text-center w-24 sm:w-48'>
                  <p className='py-2 text-[#FFD864] text-sm font-medium'>
                    Local storage
                  </p>
                  </div> */}
                  </div>
                  <p className='pt-2 pb-4 sm:py-8 sm:text-lg text-[#FFD864] font-light'>
                    <a href='https://github.com/Abjcodes/Budget-Tracker' className='hover:text-[#fecb32]'>
                    View on github
                    </a>
                  </p>
                  </div>
                  
                </div>
                {/* right */}
                <div className='relative sm:w-1/2 h-1/2 sm:h-full'>
                <Image 
                src={budgetImg} 
                className = 'rounded-b-md sm:rounded-none'
                layout='fill'
                objectFit='cover'
                />
                </div>
              </div>

            </div>
            </div>

            <div className='flex flex-col py-6 sm:flex-row gap-4'>
            <div className='rounded-xl sm:w-1/2 flex flex-col gap-3'>

              <div className='sm:h-1/2 h-24 rounded-xl flex flex-row gap-5'>
                <a className='flex rounded-xl bg-blue-600 h-full w-1/3 text-center justify-center' href='https://twitter.com/AbijithVasanth1'>
                  <Image 
                  src={twitterIcn}
                  height={60}
                  width={50}
                  />
                </a>
                <a className='flex rounded-xl bg-[#4CA7FF] h-full w-1/3 text-center justify-center' href='https://www.linkedin.com/in/abijith-vasanthakumar-b87b501b0/'>
                  <Image 
                  src={linkedinIcn}
                  height={60}
                  width={50}
                  />
                </a>
                <a className='flex rounded-xl bg-purple-600 h-full w-1/3 text-center justify-center' href='https://github.com/Abjcodes'>
                  <Image 
                  src={githubIcn}
                  height={60}
                  width={60}
                  />
                </a>
              </div>

              <div className='sm:h-1/2 h-24 rounded-xl flex flex-row gap-3'>
                <a className='w-2/3 rounded-xl bg-gray-800 text-center flex justify-center items-center' href='https://linktr.ee/AbijithMV'>
                    <p className='text-gray-400 font-medium text-lg'>
                      My reading list
                    </p>
                </a>
                <a className='flex justify-center w-1/3 bg-[#BA0000] rounded-xl' href='mailto: abijithmv01@gmail.com'>
                <Image 
                  src={gmailIcn}
                  height={60}
                  width={50}
                />
                </a>
              </div>
            </div>
            <div className='rounded-2xl h-60 sm:w-1/2 sm:h-80 relative' >
              <Image 
              src={animeImg} 
              className = 'bg-cover rounded-2xl grayscale'
              layout='fill'
              objectFit='cover'
              />
              <div class="absolute left-0 right-0 h-full rounded-xl bg-black opacity-60">
                <div className='mx-8 mt-28 sm:mt-52'>
                  <p className='text-white sm:text-slate-300 font-semibold text-lg pt-10 sm:text-xl sm:pr-20 sm:pt-0 leading-relaxed sm:leading-relaxed'>
                  Ps: I loove anime
                  </p>
                  <p className='text-white sm:text-slate-300 font-light text-lg sm:text-xl sm:pr-20 sm:pt-2 leading-relaxed sm:leading-relaxed'>
                  Currently watching: Black clover
                  </p>
                </div>
              </div>
            </div>
            </div>

      </main>
    </div>
  )
}
