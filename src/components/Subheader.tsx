import { Mail, PhoneCallIcon, User, HeartIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function SubHeader() {
    return (
        <header className="bg-purple w-full h-8 text-center items-center flex justify-evenly text-off-purple">
            {/* right */}
            <div className="flex items-center justify-start lg:pl-44">
                <div className="flex items-center text-sm font-lato sm:mx-1 md:mx-2 lg:mx-3">
                    <a href="mailto:exampple@abc.com" className="hover:text-pantone-purple flex items-center">
                        <Mail className="mx-1 align-middle font-thin h-5 w-4" />
                        <span className="hidden md:inline ml-1">example@abc.com</span>
                    </a>
                </div>
                <div className="flex items-center text-sm font-lato sm:mx-1 md:mx-2 lg:mx-3">
                    <a href="tel:+1235467890" className="hover:text-pantone-purple flex items-center">
                        <PhoneCallIcon className="mx-1 align-middle font-thin h-5 w-4" />
                        <span className="hidden md:inline ml-1">(123) - 4567890</span>
                    </a>
                </div>
            </div>

            {/* left */}
            <div className="flex items-center justify-end lg:pr-44 sm:justify-evenly ">
                <div className="items-center flex text-sm font-lato sm:mx-1 md:mx-2 lg:mx-3">
                    <select className="text-off-purple bg-purple">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>Urdu</option>
                    </select>
                </div>
                <div className="items-center flex text-sm font-lato sm:mx-1 md:mx-2 lg:mx-3">
                    <select className="text-off-purple bg-purple">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>PKR</option>
                    </select>
                </div>
                <div className="flex items-center text-sm font-lato sm:mx-1 md:mx-2 lg:mx-3">
                    <Link href="./LogIn" legacyBehavior>
                        <a className="flex items-center">
                            <User className="mx-1 align-middle font-thin h-5 w-4 text-off-purple" />
                            <span className="hidden md:inline ml-1">Login</span>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center text-sm font-lato sm:mx-1 md:mx-2 lg:mx-3">
                    <HeartIcon className="mx-1 align-middle font-thin h-5 w-4 text-off-purple" />
                    <span className="hidden md:inline ml-1">WishList</span>
                </div>
                <div className="flex items-center text-sm font-lato sm:mx-1 md:mx-2 lg:mx-3">
                    <ShoppingCart className="h-6 w-5 -mr-1" />
                </div>
            </div>
        </header>
    );
}
