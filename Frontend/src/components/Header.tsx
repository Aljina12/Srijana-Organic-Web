function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[#e8dfd2] bg-[#fffaf5]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <a href="#home" className="text-2xl font-semibold text-[#285746]">
                    Srijana
                    <span className="text-[#a67c52]"> Organic Ghar</span>
                </a>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <a
                        href="#home"
                        className="text-sm font-medium text-[#285746] transition hover:text-[#a67c52]"
                    >
                        Home
                    </a>

                    <a
                        href="#categories"
                        className="text-sm font-medium text-[#285746] transition hover:text-[#a67c52]"
                    >
                        Categories
                    </a>

                    <a
                        href="#shop"
                        className="text-sm font-medium text-[#285746] transition hover:text-[#a67c52]"
                    >
                        Shop
                    </a>

                    <a
                        href="#about"
                        className="text-sm font-medium text-[#285746] transition hover:text-[#a67c52]"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="text-sm font-medium text-[#285746] transition hover:text-[#a67c52]"
                    >
                        Contact
                    </a>
                </nav>

                {/* Cart */}
                <a
                    href="#cart"
                    className="rounded-full bg-[#285746] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#173d32]"
                >
                    Cart
                </a>
            </div>
        </header>
    );
}

export default Header;