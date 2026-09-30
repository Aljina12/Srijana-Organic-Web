import {
    Leaf,
    Home,
    Mountain,
} from "lucide-react";

const reasons = [
    {
        title: "100% Organic",
        text:
            "Sourced exclusively from chemical-free farms practicing eco-friendly sustainable agriculture.",
        icon: Leaf,
    },
    {
        title: "Farm to Table",
        text:
            "Guaranteeing absolute freshness by minimizing supply chains and buying directly from regional cooperatives.",
        icon: Home,
    },
    {
        title: "Authentic Nepali Heritage",
        text:
            "Honoring century-old preservation and culinary recipes unique to Nepal.",
        icon: Mountain,
    },
];

function WhyChooseUs() {
    return (
        <section
            id="about"
            className="bg-[#f5f0e7] px-5 py-20"
        >

            <div className="mx-auto mb-12 max-w-3xl text-center">

                <h2 className="font-serif text-3xl text-[#285746]">
                    Why Srijana Organic Ghar?
                </h2>

                <p className="mt-2 text-xs text-gray-500">
                    Sustaining purity through natural Nepalese heritage
                </p>

                <div className="mx-auto mt-4 h-px w-12 bg-[#a6a33a]"></div>

            </div>

            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">

                {reasons.map((reason) => {
                    const Icon = reason.icon;

                    return (
                        <div
                            key={reason.title}
                            className="rounded-lg bg-white p-8 text-center shadow-sm transition hover:-translate-y-1"
                        >

                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#d6dfd9] text-[#285746]">
                                <Icon size={19} />
                            </div>

                            <h3 className="mt-5 font-serif text-base">
                                {reason.title}
                            </h3>

                            <p className="mt-3 text-[10px] leading-5 text-gray-500">
                                {reason.text}
                            </p>

                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default WhyChooseUs;