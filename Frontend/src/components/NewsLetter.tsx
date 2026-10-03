function Newsletter() {
    return (
        <section className="bg-[#285746] px-5 py-16 text-center text-white">

            <div className="mx-auto max-w-2xl">

                <h2 className="font-serif text-3xl">
                    Stay Connected with Nature
                </h2>

                <p className="mt-3 text-xs leading-6 text-gray-200">
                    Subscribe to Srijana Organic Ghar and receive exclusive
                    updates on fresh seasonal products, arrivals, organic
                    lifestyle tips, and traditional recipes.
                </p>

                <form
                    className="mx-auto mt-7 flex max-w-md"
                    onSubmit={(e) => e.preventDefault()}
                >

                    <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="min-w-0 flex-1 rounded-l px-4 py-3 text-xs text-gray-700 outline-none"
                    />

                    <button
                        type="submit"
                        className="rounded-r bg-[#a6a33a] px-5 text-xs transition hover:bg-[#8d8a2e]"
                    >
                        Subscribe
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Newsletter;