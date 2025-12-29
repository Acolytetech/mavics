import Image from "next/image";

export default function BrowseCategories() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
            Browse Listings By <br /> Categories
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Curated by expert real estate agents!
          </p>
          <div className="w-16 h-[2px] bg-yellow-500 mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Apartment (Big Left Card) */}
          <div className="relative md:col-span-2 md:row-span-2 h-[420px] rounded-lg overflow-hidden group">
            <Image
              src="/images/1.jpeg"
              alt="Apartment"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-medium">Apartment</h3>
              <p className="text-sm opacity-90">186 Properties</p>
            </div>
          </div>

          {/* Farmhouse */}
          <div className="relative h-[200px] rounded-lg overflow-hidden group">
            <Image
              src="/images/4.jpeg"
              alt="Farmhouse"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-sm font-medium">Farmhouse</h3>
              <p className="text-xs">5 Properties</p>
            </div>
          </div>

          {/* Condominium (Tall Right Card) */}
          <div className="relative md:row-span-2 h-[420px] rounded-lg overflow-hidden group">
            <Image
              src="/images/2.jpeg"
              alt="Condominium"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-medium">Condominium</h3>
              <p className="text-sm">5 Properties</p>
            </div>
          </div>

          {/* Bungalow */}
          <div className="relative h-[200px] rounded-lg overflow-hidden group">
            <Image
              src="/images/5.jpeg"
              alt="Bungalow"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-sm font-medium">Bungalow</h3>
              <p className="text-xs">8 Properties</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
