import React from 'react'
import Signup from '../assests/hero.jpg'

const Registration = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="relative flex flex-col m-5 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
                <section className=" relative">
                    <img
                        src={Signup}
                        alt="Signup page "
                        className="w-[450px] h-full hidden rounded-3xl p-3 md:block object-cover"
                    />
                </section>

                <section className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl font-bold">Welcome to TRAVEL</span>
                    <span className="font-light text-gray-700 mb-8">
                        Create your account
                    </span>
                    <form action="#" className="flex flex-col">
                        <input
                            className="w-full border border-neutral-400 p-2 rounded-lg text-black text-sm mt-5"
                            id="email"
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            className="w-full border border-neutral-400 p-2 rounded-lg text-black text-sm mt-5"
                            id="email"
                            type="text"
                            placeholder="Email"
                            required
                        />
                        <input
                            className="w-full border border-neutral-400 p-2 rounded-lg text-black text-sm mt-5"
                            id="password"
                            type="text"
                            placeholder="Password"
                            required
                        />

                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24">
                                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                                <span className="text-md">
                                    I accept{' '}
                                    <span className="text-blue-600 font-bold">
                                        Terms of service and privacy policy
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Create Account</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Registration
