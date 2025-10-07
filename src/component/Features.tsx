import FeatureLists from "../FeatureList";

export default function Features() {
  return (
    <section id="feature" className="w-full pt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* header */}
        <h1 className="text-5xl font-bold mb-10 text-center md:text-left">
          Features
        </h1>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {FeatureLists.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start text-left border border-[#F4450B]  rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 px-4 py-8 "
            >
              <img
                src={feature.img}
                alt={feature.title}
                width={45}
                height={45}
                className="object-contain mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
              <p className="text-base font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
