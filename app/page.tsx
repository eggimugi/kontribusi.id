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
      <section className="flex justify-between w-full gap-12 p-20">
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

      <section className="bg-white w-full p-20">
        <h1 className="text-lg text-emerald-900 font-bold text-center mb-3">
          Mengapa Kontribusi.id?
        </h1>
        <p className="text-center text-emerald-600 mb-16">
          Kami hadir untuk menjawab tantangan dalam ekosistem volunteer di
          Indonesia
        </p>

        <div className="flex justify-between gap-20">
          <SimpleCard
            title="Permasalahan"
            normalItems={[
              "Rendahnya minat masyarakat untuk terlibat dalam kegiatan sosial",
              "Organisasi kesulitan menemukan dan merekrut volunteer yang tepat",
              "Kurangnya sistem yang mempermudah matching antara volunteer dengan kegiatan",
            ]}
            color="red"
            icon={<Target />}
          />

          <SimpleCard
            title="Solusi Kami"
            normalItems={[
              "Smart matching yang mencocokkan volunteer dengan kegiatan sesuai minat & keahlian",
              "Platform intuitif yang mudah digunakan untuk volunteer dan organizer",
              "Sistem gamifikasi dengan badge dan portofolio digital untuk meningkatkan engagement",
            ]}
            color="green"
            icon={<Sparkles />}
          />
        </div>
      </section>

      <section className="p-20">
        <div className="flex justify-between gap-20">
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
              console.log("Button clicked!");
            }}
            color="green"
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
              console.log("Button clicked!");
            }}
            color="green"
          />
        </div>
      </section>

      <section className="bg-emerald-700 p-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Siap Membuat Dampak Nyata?
          </h2>
          <p className="mb-8">
            Bergabunglah dengan ribuan volunteer dan ratusan organisasi yang
            sudah menciptakan perubahan positif
          </p>
          <div className="flex justify-center">
            <Button
              href="/signup"
              variant="secondary"
            >
              Saya Volunteer
            </Button>
            <Button
              href="/signup"
              variant="secondary"
              className="ml-4 shadow-lg shadow-emerald-900/30"
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
