import Image from "next/image";
import { ImageDecoration } from "@/components/imageDecoration";

export default function Home() {
  const stats = [
    { value: "12,500+", label: "Volunteer Aktif" },
    { value: "850+", label: "Kegiatan" },
    { value: "45,000+", label: "Jam Kontribusi" },
  ];
  return (
    <div className="flex min-h-screen bg-[#D3FFEA] font-sans">
      <main className="flex min-h-screen w-full flex-col items-center gap-3 py-32 px-8 sm:items-start">
        <div className="bg-[#9EFFD2] px-4 py-2 rounded flex gap-3">
          <Image
            src="/multipleStars.svg"
            alt="Multiple stars image"
            width={20}
            height={10}
          />
          <span className="text-[#226546]">
            Platform Volunteer Berbasis Impact
          </span>
        </div>
        <span>Wujudkan Perubahan Nyata, Satu Kontribusi Pada Satu Waktu</span>
        <span className="border border-b w-full"></span>

        <section className="py-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-between text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-gray-800">
                  {stat.value}
                </p>
                <p className="text-gray-700 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <ImageDecoration
          imageSrc="/sampleImage.jpg"
          borderRadius="32px"
          width="60%"
          height="400px"
        />
      </main>
    </div>
  );
}
