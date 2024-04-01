'use client'
import LoginImage from '../assests/hero.jpg'


export default function Gift() {
 
  return (
    <div className="w-full flex items-center justify-center bg-slate-50 ">
      <div className="w-[80%]  relative flex flex-col-2 m-6  bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 overflow-hidden">
        <section className=" relative w-full ">
          <img
            src={LoginImage}
            alt="Login page "
            className="w-full h-full  hidden rounded-3xl p-3 md:block object-cover"
          />
        </section>

        <section className="w-full flex flex-col justify-center p-8 md:p-14">
        <div className='py-0'>
          <h2 className=''>How about a gift card?</h2>
          <p className='py-4 text-xl leading-6'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium, expedita natus possimus ea labore. Cumque non ut excepturi repudiandae omnis a! Vitae optio illo doloremque dolores dolorum tempora quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste dignissimos corrupti aspernatur, cumque ratione. Nihil voluptate laborum pariatur reprehenderit eum magnam blanditiis, enim atque praesentium temporibus quis? Voluptatem, expedita?
          </p>
        </div>
         
        </section>
      </div>
    </div>
  )
}
