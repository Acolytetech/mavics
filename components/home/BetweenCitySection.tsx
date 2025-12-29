import Image from "next/image";

export default function BetweenCitySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative w-full h-[420px] md:h-[520px]">
          <Image
            src="/images/1.jpeg" // 👉 apni image
            alt="Luxury Residence"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* dotted pattern */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] opacity-60"></div>

          <h2 className="text-3xl md:text-4xl font-normal leading-snug text-gray-900 max-w-md">
            Between the <br /> city and the silence
          </h2>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-lg">
            Set within Meydan Horizon, The Caden offers a considered approach
            to modern living. Positioned between the city and the calm, the
            development includes 21 fully furnished and fitted residences,
            providing a choice of studio, one-bedroom apartments, duplexes and
            exclusive penthouses.
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-lg">
            Every aspect of The Caden has been intuitively designed with the
            resident in mind. From smart living features to wellness-focused
            amenities, every element focuses on balance, efficiency, and quiet
            sophistication. The development is scheduled for completion in Q3
            2028, introducing a new standard in refined urban living.
          </p>

          {/* Button */}
          <button className="mt-8 px-6 py-3 border border-gray-400 text-sm text-gray-800 hover:bg-gray-900 hover:text-white transition">
            VIEW INVESTOR GUIDE
          </button>

          {/* Logos */}
          <div className="mt-10 flex items-center gap-1 grayscale opacity-80">
            <Image src="/images/abouicon1.png" alt="Badge" width={100} height={60} />
            <Image src="/images/abouicon2.png" alt="WiredScore" width={140} height={40} />
            <Image src="/images/abouicon3.png" alt="LEED" width={120} height={60} />
          </div>
        </div>

      </div>
    </section>
  );
}
