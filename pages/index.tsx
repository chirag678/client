import type { NextPage } from 'next'
import CardShuffle from '../components/Home/3D/CardShuffle'
import Section_1 from '../components/Home/Section_1'
import Section_2 from '../components/Home/Section_2'
import Section_3 from '../components/Home/Section_3'
import Section_4 from '../components/Home/Section_4'
import Section_5 from '../components/Home/Section_5'

const Home: NextPage = () => {
  return (
    <div>
      <div className='flex flex-col gap-y-20 md:gap-y-48 w-full'>
        <Section_1 />
        {/* <Section_2 /> */}
        <Section_3 />
        <Section_4 />
        <Section_5 />
      </div>
    </div>
  )
}

export default Home
