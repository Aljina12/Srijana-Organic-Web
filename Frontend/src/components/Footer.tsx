import {
    Globe,
    MessageCircle,
    Send,
} from "lucide-react";

function Footer() {
    return (
        <footer
            id="contact"
            className="bg-[#173d32] px-5 pb-5 pt-14 text-gray-300"
        >

            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">

                {/* About */}
                <div>
                    <h3 className="font-serif text-base text-white">
                        Srijana Organic Ghar
                    </h3>

                    <p className="mt-4 text-[10px] leading-5 text-gray-400">
                        Providing premium, pure, and traditionally crafted
                        organic products while preserving Nepalese heritage.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-serif text-base text-white">
                        Quick Links
                    </h3>

                    <div className="mt-4 space-y-2 text-[10px]">
                        <a href="#home" className="block hover:text-white">
                            Home
                        </a>

                        <a href="#shop" className="block hover:text-white">
                            Shop
                        </a>

                        <a href="#categories" className="block hover:text-white">
                            Categories
                        </a>

                        <a href="#about" className="block hover:text-white">
                            About Us
                        </a>

                        <a href="#contact" className="block hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="font-serif text-base text-white">
                        Customer Service
                    </h3>

                    <div className="mt-4 space-y-2 text-[10px]">
                        <a href="#contact" className="block hover:text-white">
                            Shipping & Delivery
                        </a>

                        <a href="#contact" className="block hover:text-white">
                            Returns & Refunds
                        </a>

                        <a href="#contact" className="block hover:text-white">
                            Privacy Policy
                        </a>

                        <a href="#contact" className="block hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-serif text-base text-white">
                        Contact With Us
                    </h3>

                    <div className="mt-4 space-y-2 text-[10px] text-gray-400">
                        <p>📍 Itahari, Koshi, Nepal</p>
                        <p>📞 +977 9847286516</p>
                        <p>✉️ info@srijanaorganic.com</p>
                    </div>

                    <div className="mt-5 flex gap-2">

                        <a
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-[#173d32]"
                        >
                            <Globe size={14} />
                        </a>

                        <a
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-[#173d32]"
                        >
                            <Send size={14} />
                        </a>

                        <a
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-[#173d32]"
                        >
                            <MessageCircle size={14} />
                        </a>

                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-[#294d41] pt-5 text-[8px] text-gray-500 sm:flex-row">

                <span>
                    © 2026 Srijana Organic Ghar. All rights reserved.
                </span>

                <span>
                    Handcrafted in Nepal
                </span>

            </div>

        </footer>
    );
}

export default Footer;