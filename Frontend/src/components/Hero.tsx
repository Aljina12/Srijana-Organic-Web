import image from "../assets/img 0.png";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[520px] items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-white">

                <p className="mb-3 text-xs tracking-[4px]">
                    SRIJANA ORGANIC GHAR
                </p>

                <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
                    Pure Taste.
                    <br />
                    Natural Goodness.
                </h1>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-200">
                    Discover authentic organic and traditional products
                    sourced directly from Srijana Organic Ghar.
                </p>

                <div className="mt-7 flex gap-3">

                    <a
                        href="#shop"
                        className="rounded bg-[#285746] px-6 py-3 text-xs font-medium transition hover:bg-[#173d32]"
                    >
                        Shop Now
                    </a>

                    <a
                        href="#about"
                        className="rounded border border-white px-6 py-3 text-xs font-medium transition hover:bg-white hover:text-[#285746]"
                    >
                        Explore Our Story
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Hero;