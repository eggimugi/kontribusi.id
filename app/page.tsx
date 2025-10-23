import Image from "next/image";
import { ImageDecoration } from "@/components/imageDecoration";
import Button from "@/components/button";
import SimpleCard from "@/components/simpleCard";
import { OctagonAlert } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "12,500+", label: "Volunteer Aktif" },
    { value: "850+", label: "Kegiatan" },
    { value: "45,000+", label: "Jam Kontribusi" },
  ];
  return (
    <main className="min-h-screen">
      <section className="flex justify-between bg-emerald-50 w-full gap-12 p-20">
        {/* Kiri */}
        <div className="flex-1 max-w-[50%] py-12">
          <div className="bg-emerald-100 px-4 py-2 rounded-full flex gap-3 w-fit">
            <Image
              src="/multipleStars.svg"
              alt="Multiple stars image"
              width={20}
              height={10}
            />
            <span className="text-[#226546] font-medium">
              Platform Volunteer Berbasis Impact
            </span>
          </div>

          <p className="text-[#226546] font-medium my-5">
            Wujudkan Perubahan Nyata, Satu Kontribusi Pada Satu Waktu
          </p>

          <p className="text-emerald-800 leading-relaxed">
            Kontribusi.id menghubungkan jiwa-jiwa yang ingin berbagi dengan
            organisasi yang membutuhkan. Temukan kegiatan volunteer yang sesuai
            dengan passion kamu, atau rekrut relawan terbaik untuk kampanye
            sosial Anda.
          </p>

          <div className="flex gap-6 mt-6">
            <Button
              href="/events"
              variant="primary"
              className="shadow-lg shadow-emerald-200"
            >
              Mulai Berkontribusi
            </Button>
            <Button href="/events" variant="secondary">
              Rekrut Volunteer
            </Button>
          </div>

          <div className="border-b border-emerald-200 my-8" />

          <section className="py-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-semibold text-gray-800">
                    {stat.value}
                  </p>
                  <p className="text-gray-700 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Kanan */}
        <div className="flex-1 flex justify-end">
          <ImageDecoration
            imageSrc="/sampleImage.jpg"
            borderRadius="32px"
            width="80%"
            height="500px"
            rotate={3}
          />
        </div>
      </section>

      <section className="bg-white w-full px-8 py-16">
        <h1 className="text-lg text-emerald-900 font-bold text-center mb-3">
          Mengapa Kontribusi.id?
        </h1>
        <p className="text-center text-emerald-600 mb-16">
          Kami hadir untuk menjawab tantangan dalam ekosistem volunteer di
          Indonesia
        </p>

        <SimpleCard
          title="Permasalahan"
          items={[
            "Rendahnya minat masyarakat untuk terlibat dalam kegiatan sosial",
            "Organisasi kesulitan menemukan dan merekrut volunteer yang tepat",
            "Kurangnya sistem yang mempermudah matching antara volunteer dengan kegiatan",
          ]}
          color="red"
          icon={<OctagonAlert />}
        />
      </section>
    </main>
  );
}
