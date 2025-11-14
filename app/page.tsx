"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/main-navbar";
import { ImageDecoration } from "@/components/imageDecoration";
import Button from "@/components/button";
import SimpleCard from "@/components/simpleCard";
import {
  Target,
  Sparkles,
  Users,
  Award,
  ChartColumn,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const stats = [
    { value: "12,500+", label: "Volunteer Aktif" },
    { value: "850+", label: "Kegiatan" },
    { value: "45,000+", label: "Jam Kontribusi" },
  ];
  return (
    <main className="min-h-screen bg-emerald-50">
      <Navbar />
      <section className="flex flex-col lg:flex-row justify-between w-full gap-6 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20">
        {/* Kiri */}
        <div className="flex-1 lg:max-w-[50%] py-6 md:py-12">
          <div className="bg-emerald-100 px-3 md:px-4 py-2 rounded-full flex gap-2 md:gap-3 w-fit">
            <Image
              src="/multipleStars.svg"
              alt="Multiple stars image"
              width={20}
              height={10}
            />
            <span className="text-[#226546] font-medium text-xs sm:text-sm md:text-base">
              Platform Volunteer Berbasis Impact
            </span>
          </div>

          <p className="text-[#226546] font-medium my-4 md:my-5 text-base sm:text-lg md:text-xl">
            Wujudkan Perubahan Nyata, Satu Kontribusi Pada Satu Waktu
          </p>

          <p className="text-emerald-800 leading-relaxed text-sm md:text-base">
            Kontribusi.id menghubungkan jiwa-jiwa yang ingin berbagi dengan
            organisasi yang membutuhkan. Temukan kegiatan volunteer yang sesuai
            dengan passion kamu, atau rekrut relawan terbaik untuk kampanye
            sosial Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mt-4 md:mt-6">
            <Button
              href="/volunteer"
              variant="primary"
              className="text-sm md:text-base"
            >
              Mulai Berkontribusi
            </Button>
            <Button
              href="/organizer"
              variant="secondary"
              className="text-sm md:text-base"
            >
              Rekrut Volunteer
            </Button>
          </div>

          <div className="border-b border-emerald-200 my-6 md:my-8" />

          <section className="py-4 md:py-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg md:text-xl font-semibold text-gray-800">
                    {stat.value}
                  </p>
                  <p className="text-gray-700 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Kanan */}
        <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <ImageDecoration
            imageSrc="/sampleImage.jpg"
            borderRadius="32px"
            width="100%"
            height="300px"
            rotate={3}
          />
        </div>
      </section>

      <section className="bg-white w-full p-4 sm:p-8 md:p-12 lg:p-20">
        <h1 className="text-base md:text-lg text-emerald-900 font-bold text-center mb-2 md:mb-3">
          Mengapa Kontribusi.id?
        </h1>
        <p className="text-center text-emerald-600 mb-8 md:mb-16 text-sm md:text-base px-4">
          Kami hadir untuk menjawab tantangan dalam ekosistem volunteer di
          Indonesia
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 lg:gap-20">
          <SimpleCard
            title="Permasalahan"
            normalItems={[
              "Rendahnya minat masyarakat untuk terlibat dalam kegiatan sosial",
              "Organisasi kesulitan menemukan dan merekrut volunteer yang tepat",
              "Kurangnya sistem yang mempermudah matching antara volunteer dengan kegiatan",
            ]}
            icon={<Target />}
            className="border-red-200 bg-red-50 text-red-700 p-8"
            iconClassName="bg-red-100 text-red-600 p-4"
          />

          <SimpleCard
            title="Solusi Kami"
            normalItems={[
              "Smart matching yang mencocokkan volunteer dengan kegiatan sesuai minat & keahlian",
              "Platform intuitif yang mudah digunakan untuk volunteer dan organizer",
              "Sistem gamifikasi dengan badge dan portofolio digital untuk meningkatkan engagement",
            ]}
            icon={<Sparkles />}
            className="border-emerald-200 bg-emerald-50 text-emerald-700 p-8"
            iconClassName="bg-emerald-100 text-emerald-600 p-4"
          />
        </div>
      </section>

      <section className="p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-12 lg:gap-20">
          <SimpleCard
            icon={<Users />}
            title="Untuk Volunteer"
            description="Temukan kegiatan volunteer yang sesuai dengan passion dan jadwal kamu"
            iconItems={[
              {
          icon: <Target />,
          title: "Smart Matching System",
          description:
            "Algoritma cerdas mencocokkan kamu dengan kegiatan berdasarkan minat, lokasi, keahlian, dan waktu luang",
              },
              {
          icon: <Award />,
          title: "Journey & Portofolio",
          description:
            "Profil digital dengan riwayat kegiatan, badge prestasi, jam kontribusi, dan sertifikat digital",
              },
            ]}
            buttonText="Lihat Dashboard Volunteer"
            onButtonClick={() => {
              window.location.href = "/volunteer";
            }}
            className="border-emerald-200 bg-white text-emerald-700 p-8"
            iconClassName="bg-emerald-600 text-white p-4"
            subIconClassName="bg-emerald-100"
            buttonClassName="bg-emerald-600 text-white hover:bg-transparent hover:border hover:border-emerald-600 hover:text-black"
          />
          <SimpleCard
            icon={<ChartColumn />}
            title="Untuk Event Organizer"
            description="Kelola rekrutmen volunteer dan ukur dampak sosial dengan mudah"
            iconItems={[
              {
          icon: <TrendingUp />,
          title: "Organization Dashboard",
          description:
            "Buka rekrutmen, kelola absensi, lihat statistik partisipasi, dan analisis feedback relawan",
              },
              {
          icon: <ChartColumn />,
          title: "Impact Analysis",
          description:
            "Ukur dan visualisasi total kontribusi, jam kerja, penerima manfaat, dan wilayah terdampak",
              },
            ]}
            buttonText="Lihat Dashboard Organizer"
            onButtonClick={() => {
              window.location.href = "/organizer";
            }}
            className="border-emerald-200 bg-white text-emerald-700 p-8"
            iconClassName="bg-emerald-600 text-white p-4"
            subIconClassName="bg-emerald-100"
            buttonClassName="bg-emerald-600 text-white hover:bg-transparent hover:border hover:border-emerald-600 hover:text-black"
          />
        </div>
      </section>

      <section className="bg-emerald-700 p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            Siap Membuat Dampak Nyata?
          </h2>
          <p className="mb-6 md:mb-8 text-sm md:text-base">
            Bergabunglah dengan ribuan volunteer dan ratusan organisasi yang
            sudah menciptakan perubahan positif
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              href="/volunteer"
              variant="secondary"
              className="text-sm md:text-base"
            >
              Saya Volunteer
            </Button>
            <Button
              href="/organizer"
              variant="secondary"
              className="shadow-lg shadow-emerald-900/30 text-sm md:text-base"
            >
              Saya Organizer
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-emerald-900 text-white text-center p-6">
          &copy; {new Date().getFullYear()} Kontribusi.id. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
