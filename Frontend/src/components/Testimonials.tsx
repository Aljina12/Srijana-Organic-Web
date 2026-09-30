const reviews = [
    {
        name: "Ananya Sharma",
        location: "Kathmandu, Nepal",
        text:
            "The Himalayan Wild Honey is pure gold. It has a beautiful aroma and you can really feel its authenticity.",
    },
    {
        name: "Rojish Sharma",
        location: "Itahari, Nepal",
        text:
            "Finding genuine Lapsi pickle that tastes like my grandmother's recipe was impossible until I found Srijana Organic Ghar.",
    },
    {
        name: "Reema Karki",
        location: "Pokhara, Nepal",
        text:
            "Their Timur pepper adds the perfect authentic mountain touch to our family dinners.",
    },
];

function Testimonials() {
    return (
        <section className="bg-white px-5 py-20">

            <div className="mx-auto mb-12 max-w-3xl text-center">

                <h2 className="font-serif text-3xl text-[#285746]">
                    What Our Customers Say
                </h2>

                <p className="mt-2 text-xs text-gray-500">
                    Every bite, naturally pure that keeps customers returning
                </p>

                <div className="mx-auto mt-4 h-px w-12 bg-[#a6a33a]"></div>

            </div>

            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">

                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="rounded-lg border border-gray-100 p-6 shadow-sm"
                    >

                        <div className="flex justify-end text-xs text-yellow-500">
                            ★★★★★
                        </div>

                        <p className="mt-5 font-serif text-xs leading-6 text-gray-600">
                            “{review.text}”
                        </p>

                        <h4 className="mt-5 text-xs font-semibold">
                            {review.name}
                        </h4>

                        <p className="mt-1 text-[9px] text-gray-400">
                            {review.location}
                        </p>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Testimonials;