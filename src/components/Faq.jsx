import React from 'react'


const Faq = () => {

    const faq =[

        {
            question:'Books',
            answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. Lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium, expedita natus possimus ea labore. Cumque non ut excepturi repudiandae omnis a! Vitae optio illo doloremque dolores dolorum tempora quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste dignissimos corrupti aspernatur, cumque ratione. Nihil voluptate laborum pariatur reprehenderit eum magnam blanditiis, enim atque praesentium temporibus quis? Voluptatem, expedita?"
        },
        {
            question:'Author',
            answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. Lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium, expedita natus possimus ea labore. Cumque non ut excepturi repudiandae omnis a! Vitae optio illo doloremque dolores dolorum tempora quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste dignissimos corrupti aspernatur, cumque ratione. Nihil voluptate laborum pariatur reprehenderit eum magnam blanditiis, enim atque praesentium temporibus quis? Voluptatem, expedita?"
        },
        {
            question:'Genre',
            answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. Lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium, expedita natus possimus ea labore. Cumque non ut excepturi repudiandae omnis a! Vitae optio illo doloremque dolores dolorum tempora quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste dignissimos corrupti aspernatur, cumque ratione. Nihil voluptate laborum pariatur reprehenderit eum magnam blanditiis, enim atque praesentium temporibus quis? Voluptatem, expedita?"
        },
        {
            question:'Getting Premium membership',
            answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. Lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium, expedita natus possimus ea labore. Cumque non ut excepturi repudiandae omnis a! Vitae optio illo doloremque dolores dolorum tempora quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste dignissimos corrupti aspernatur, cumque ratione. Nihil voluptate laborum pariatur reprehenderit eum magnam blanditiis, enim atque praesentium temporibus quis? Voluptatem, expedita?"
        }
    
    ]
  return (
    <div>
      <div className='w-full text-center p-4 flex flex-col items-center justify-center bg-slate-50'>
                <h1>FAQ</h1>
                <p className='py-4'>Frequently Asked Questions</p>
                <div className='w-[90%]  lg:col-span-2 flex flex-col-2 items-start '>
                    <ul class="w-[70%] divide-y  shadow-md shadow-blue-600 rounded-xl bg-white">
                        <li>
                            { faq.map(({ question, answer }, index) => {
                                return (
                            <details class="w-full">
                                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg>
                                    <span>{question}</span>
                                </summary>

                                <article class=" px-4 pb-4">
                                    <p>{answer}</p>
                                </article>
                            </details>
                                )
                            })
                        }
                        </li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Faq
