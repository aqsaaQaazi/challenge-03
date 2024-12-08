import { Mail, PhoneCallIcon, User, HeartIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function SubHeader() {
    return (
        <header className="bg-purple w-full h-8 text-center items-center flex justify-between text-off-purple">
            {/* right */}
            <div className="bg-purple w-full h-8 text-center items-center flex justify-center text-off-purple">
                {/* mail */}
                <div className="items-start flex align-middle text-sm font-lato mx-3">
                    <a href="mailto:exampple@abc.com" className="hover:text-pantone-purple items-start flex align-middle text-sm font-lato mx-3">
                        <Mail className="mx-1 align-middle font-thin h-5 w-4" /> example@abc.com
                    </a>
                </div>

                {/* phone */}
                <div className="items-start flex align-middle text-sm font-lato mx-3">
                    <a href="tel:+1235467890" className="hover:text-pantone-purple items-start flex align-middle text-sm font-lato mx-3">
                        <PhoneCallIcon className="mx-1 align-middle font-thin h-5 w-4" /> (123) - 4567890
                    </a>
                </div>
            </div>

            {/* left */}
            {/* dropdowns */}
            <div className="text-off-purple w-full h-8 text-center items-center flex justify-center bg-purple">
                <div className="items-start flex align-middle text-sm font-lato mx-3">
                    <select className="text-off-purple bg-purple">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>Urdu</option>
                    </select>
                </div>
                <div className="items-start flex align-middle text-sm font-lato mx-3">
                    <select className="text-off-purple bg-purple">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>PKR</option>
                    </select>
                </div>

                {/* user */}
                <div className="items-start flex align-middle text-sm font-lato mx-3">
                    <Link href="./LogIn" legacyBehavior>
                        <a className="items-start flex align-middle text-sm font-lato mx-3">
                            Login<User className="mx-1 align-middle font-thin h-5 w-4 text-off-purple" />
                        </a>
                    </Link>
                </div>

                {/* wishlist */}
                <div className="items-start flex align-middle text-sm font-lato mx-3">
                    WishList<HeartIcon className="mx-1 align-middle font-thin h-5 w-4 text-off-purple" />
                </div>
                
                {/* cart */}
                <div className="items-start flex align-middle text-sm font-lato mx-3">
                    <ShoppingCart className="h-6 w-5 -mr-1"/>
                </div>
            </div>
        </header>
    );
}
