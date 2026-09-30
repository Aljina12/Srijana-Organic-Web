import img7 from "../assets/img 7.jpg";
import img8 from "../assets/img 8.jpg";
import img4 from "../assets/img 4.jpg";
import img6 from "../assets/img 6.jpg";

function BestSellers() {
    const products = [
        {
            name: "Pure Organic Honey",
            price: "Rs. 850",
            category: "Honey",
            image: img7,
        },
        {
            name: "Traditional Mixed Pickle",
            price: "Rs. 450",
            category: "Pickles",
            image: img8,
        },
        {
            name: "Organic Turmeric Powder",
            price: "Rs. 300",
            category: "Spices",
            image: img6,
        },
        {
            name: "Timur",
            price: "Rs. 350",
            category: "Traditional Masala",
            image: img4,
        },
    ];

    return (
        <section id="shop" className="bg-[#f7f1e8] py-16">
            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-[3px] text-[#a67c52]">
                            Our Products
                        </p>

                        <h2 className="text-3xl font-semibold text-[#285746] md:text-4xl">
                            Best Sellers
                        </h2>
                    </div>

                    <a
                        href="#shop"
                        className="text-sm font-medium text-[#285746] transition hover:text-[#a67c52]"
                    >
                        View All Products →
                    </a>
                </div>

                {/* Products */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {products.map((product) => (
                        <article
                            key={product.name}
                            className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* Product Image */}
                            <div className="h-56 overflow-hidden bg-[#e8f3e8]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-5">

                                <p className="text-xs uppercase tracking-wider text-[#a67c52]">
                                    {product.category}
                                </p>

                                <h3 className="mt-2 text-lg font-semibold text-[#285746]">
                                    {product.name}
                                </h3>

                                <div className="mt-4 flex items-center justify-between">

                                    <span className="font-semibold text-[#285746]">
                                        {product.price}
                                    </span>

                                    <button
                                        type="button"
                                        className="rounded-full bg-[#285746] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#173d32]"
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            </div>

                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default BestSellers;