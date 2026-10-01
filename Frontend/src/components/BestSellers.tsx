import { ShoppingCart } from "lucide-react";

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
        <section
            id="shop"
            className="bg-[#f7f1e8] py-16"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                    <div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-[#a67c52]">
                            Our Products
                        </p>

                        <h2 className="text-4xl font-bold text-[#285746]">
                            Best Sellers
                        </h2>
                    </div>

                    <a
                        href="#shop"
                        className="text-sm font-bold text-[#285746] transition hover:text-[#a67c52]"
                    >
                        View All Products →
                    </a>

                </div>

                {/* Product Cards */}
                <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {products.map((product) => (
                        <article
                            key={product.name}
                            className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* Product Image */}
                            <div className="h-60 w-full overflow-hidden bg-[#e8f3e8]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Product Content */}
                            <div className="flex flex-1 flex-col p-5">

                                {/* Category */}
                                <p className="text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                                    {product.category}
                                </p>

                                {/* Product Name */}
                                <h3 className="mt-2 min-h-[56px] text-lg font-bold leading-7 text-[#285746]">
                                    {product.name}
                                </h3>

                                {/* Bottom Area */}
                                <div className="mt-auto flex items-center justify-between gap-3 pt-5">

                                    {/* Price */}
                                    <span className="text-lg font-bold text-[#285746]">
                                        {product.price}
                                    </span>

                                    {/* Add to Cart */}
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 rounded-full bg-[#285746] px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-[#173d32]"
                                    >
                                        <ShoppingCart size={15} />
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