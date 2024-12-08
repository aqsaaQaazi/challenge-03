import { Facebook, Instagram, LucideTwitter } from "lucide-react";

export default function Footer() {
    return (
        <section className="bg-off-purple p-0 pt-16 px-10 lg:px-52 font-lato">
            <footer className="wrapper">
                <div className="flex flex-wrap gap-x-5 justify-between">

                    {/* First section */}
                    <div className="w-full md:w-[350px] lg:w-auto mb-8 md:mb-0">
                        <h3 className="text-black font-lato text-2xl font-extrabold">
                            Hekto
                        </h3>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <input
                                    className="w-full md:w-44 outline-none py-1 px-4 placeholder:text-xs placeholder:text-[#8a8fb9] rounded-sm"
                                    type="text"
                                    placeholder="Enter Email Address"
                                />
                                <button className="bg-pink active:bg-opacity-55 text-white text-xs px-6 py-2 md:-ml-4 rounded-[3px] mt-2 md:mt-0 md:rounded-none md:rounded-r-sm">
                                    Sign Up
                                </button>
                            </div>
                            <div className="text-xs text-[#B8BCD8] mt-5">
                                <p>Contact Info</p>
                                <p className="mt-3">
                                    17 Princess Road, London, Greater London NW1 8JR, UK
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second section */}
                    <div className="w-full md:w-[350px] lg:w-auto mb-8 md:mb-0">
                        <h4 className="text-black text-sm font-semibold tracking-wide">
                            Categories
                        </h4>
                        <div className="mt-[30px]">
                            <ul className="flex flex-col gap-y-3 text-xs leading-tight text-[#B8BCD8]">
                                <li className="hover:text-pink transition-all duration-75">Laptops & Computers</li>
                                <li className="hover:text-pink transition-all duration-75">Cameras & Photography</li>
                                <li className="hover:text-pink transition-all duration-75">SmartPhones & Tablets</li>
                                <li className="hover:text-pink transition-all duration-75">Video Games & Consoles</li>
                                <li className="hover:text-pink transition-all duration-75">Waterproof Headphones</li>
                            </ul>
                        </div>
                    </div>

                    {/* Third section */}
                    <div className="w-full md:w-[350px] lg:w-auto mb-8 md:mb-0">
                        <h4 className="text-black text-sm font-semibold tracking-wide">
                            Customer Care
                        </h4>
                        <div className="mt-[30px]">
                            <ul className="flex flex-col gap-y-3 text-xs leading-tight text-[#B8BCD8]">
                                <li className="hover:text-pink transition-all duration-75">My Account</li>
                                <li className="hover:text-pink transition-all duration-75">Discount</li>
                                <li className="hover:text-pink transition-all duration-75">Returns</li>
                                <li className="hover:text-pink transition-all duration-75">Orders History</li>
                                <li className="hover:text-pink transition-all duration-75">Order Tracking</li>
                            </ul>
                        </div>
                    </div>

                    {/* Fourth section */}
                    <div className="w-full md:w-[350px] lg:w-auto">
                        <h4 className="text-black text-sm font-semibold tracking-wide">
                            Pages
                        </h4>
                        <div className="mt-[30px]">
                            <ul className="flex flex-col gap-y-3 text-xs leading-tight text-[#B8BCD8]">
                                <li className="hover:text-pink transition-all duration-75">Blog</li>
                                <li className="hover:text-pink transition-all duration-75">Browse the Shop</li>
                                <li className="hover:text-pink transition-all duration-75">Category</li>
                                <li className="hover:text-pink transition-all duration-75">Pre-Built Pages</li>
                                <li className="hover:text-pink transition-all duration-75">Visual Composer Element</li>
                                <li className="hover:text-pink transition-all duration-75">WebCommerce Pages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="wrapper mt-10 text-[#9da0ae] w-full">
                <div className="flex flex-col gap-5 sm:flex-row items-center justify-between py-[20px] px-[10px] xl:px-0">
                    <div>
                        <p className="text-pink-600">©WebenSea - All Rights Reserved</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-[30px] h-[30px] text-white bg-off-blue hover:text-off-blue hover:bg-white transition-all duration-75 rounded-full flex items-center justify-center cursor-pointer">
                            <Facebook className="w-5 h-4" />
                        </div>
                        <div className="w-[30px] h-[30px] text-white bg-off-blue hover:text-off-blue hover:bg-white transition-all duration-75 rounded-full flex items-center justify-center cursor-pointer">
                            <Instagram className="w-5 h-4" />
                        </div>
                        <div className="w-[30px] h-[30px] text-white bg-off-blue hover:text-off-blue hover:bg-white transition-all duration-75 rounded-full flex items-center justify-center cursor-pointer">
                            <LucideTwitter className="w-5 h-4" />
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
