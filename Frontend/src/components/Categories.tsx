const categories = [
    {
        name: "Organic Staples",
        description: "Nutritious grains, lentils, and kitchen essentials for daily wellness.",
        emoji: "🌾",
    },
    {
        name: "Herbal Teas",
        description: "Refreshing blends made from natural herbs and medicinal ingredients.",
        emoji: "🍵",
    },
    {
        name: "Natural Beauty",
        description: "Gentle self-care products made from trusted organic ingredients.",
        emoji: "🌿",
    },
];

function Categories() {
    return (
        <section className="categories-section" aria-label="Shop by category">
            <div className="mb-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[4px] text-[#285746]">
                    Categories
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-gray-900">Shop by Collection</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {categories.map((category) => (
                    <article
                        key={category.name}
                        className="rounded-2xl border border-[#f3e7d9] bg-[#fffaf5] p-6 text-center shadow-sm"
                    >
                        <div className="mb-4 text-4xl">{category.emoji}</div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">{category.name}</h3>
                        <p className="text-sm leading-6 text-gray-600">{category.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Categories;
