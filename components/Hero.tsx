import Image from 'next/image';
import Button from './Button';
const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className="hero-map">

      </div>
      <div className="relative z-20 flex-1 flex flex-col xl:w-1/2">
        <Image
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
          src='/camp.svg'
          width={50}
          height={50}
          alt='camp' />
        <h1 className='bold-52 lg:bold-88'>CAMP DEMO</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          キャンプの楽しさを最大限に引き出す。アウトドア愛好者のための究極のツール。アプリでキャンプスポットを探し、友達と家族と楽しい時間を過ごしましょう。当アプリで、新たなキャンプの醍醐味を体験する
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex item-center gap-2">
            {Array(5).fill(1).map((_,index) => (
              <Image
                src='/star.svg'
                width={24}
                height={24}
                key={index}
                alt='star'
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className='regular-16 lg:regular-20 ml-1'>
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title='Download App'
            variant='btn_green'
          />
          <Button
            type="button"
            title='How we work'
            icon='/play.svg'
            variant='btn_white'
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

          <div className="flex flex-col ">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                src='/close.svg'
                width={24}
                height={24}
                alt='close' />
            </div>
            <p className='bold-20 text-white'>Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className='regular-16 block text-gray-20'>Distance</p>
              <p className='bold-20 text-white'>173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className='regular-16 block text-gray-20'>Elevation</p>
              <p className='bold-20 text-white'>2.040 km</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
