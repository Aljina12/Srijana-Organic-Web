import img1 from "../assets/img 1.jpg";
import img2 from "../assets/img 2.jpg";
import img3 from "../assets/img 3.jpg";
import img4 from "../assets/img 4.jpg";
import img5 from "../assets/img 5.jpg";
import img6 from "../assets/img 6.jpg";

const categories = [
    {
        name: "Organic Spices",
        image: img1,
    },
    {
        name: "Pure Honey",
        image: img2,
    },
    {
        name: "Traditional Pickles",
        image: img3,
    },
    {
        name: "Herbal Tea",
        image: img4,
    },
    {
        name: "Dried Fruits & Nuts",
        image: img5,
    },
    {
        name: "Cooking Oils",
        image: img6,
    },
];

function Categories() {
    return (
        <section
            id="categories"
            className="bg-[#f5f0e7] px-5 py-20"
        >

            {/* Heading */}
            <div className="mx-auto mb-12 max-w-3xl text-center">

                <h2 className="font-serif text-3xl text-[#285746]">
                    Shop by Category
                </h2>

                <p className="mt-2 text-xs text-gray-500">
                    Carefully preserved authentic Nepalese tastes and profiles
                </p>

                <div className="mx-auto mt-4 h-px w-12 bg-[#a6a33a]"></div>

            </div>

            {/* Categories */}
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

                {categories.map((category) => (
                    <a
                        key={category.name}
                        href="#shop"
                        className="rounded-lg bg-white p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >

                        <img
                            src={category.image}
                            alt={category.name}
                            className="aspect-square w-full rounded-full object-cover"
                        />

                        <p className="mt-3 font-serif text-xs">
                            {category.name}
                        </p>

                    </a>
                ))}

            </div>
        </section>
    );
}

export default Categories;