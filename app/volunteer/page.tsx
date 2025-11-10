"use client";
import VolunteerNavbar from "@/components/navbar/volunteer-navbar";
import Button from "@/components/button";
import ToggleButtonGroup from "@/components/toggleButtonGroup";
import { ActivityVolunteerCard } from "@/components/activityVolunteerCard";
import { Search, Award, Target, Filter } from "lucide-react";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <VolunteerNavbar />
      <section className="px-20 pt-10">
        <ToggleButtonGroup
          buttons={[
            {
              id: "kegiatan",
              label: "Temukan Kegiatan",
              icon: <Search size={16} />,
            },
            {
              id: "portofolio",
              label: "Portofolio Saya",
              icon: <Award size={16} />,
            },
          ]}
          defaultActive="kegiatan"
          onChange={(id) => console.log("Selected tab:", id)}
        />

        <div className="mt-10 flex justify-between p-8 bg-emerald-600 rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Target size={24} color="white" />
              <h2 className="text-white text-sm ml-4">
                Bergabunglah sebagai Volunteer dan Buat Dampak Positif!
              </h2>
            </div>
            <div className="mt-4 max-w-4xl">
              <h1 className="font-semibold text-white text-xl mb-4">
                Kegiatan yang Cocok Untukmu
              </h1>
              <p className="text-white">
                Berdasarkan minat (Lingkungan, Pendidikan), lokasi (Jakarta &
                sekitarnya), dan waktu luang (Weekend), kami menemukan 3
                kegiatan sempurna untuk kamu!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/20 p-5 rounded-lg">
            <h1 className="text-white font-semibold text-4xl mb-4">3</h1>
            <p className="text-white">Kegiatan</p>
          </div>
        </div>
      </section>

      <section className="px-20 py-10">
        <div className="flex items-center justify-center space-x-6">
          <div className="w-full flex items-center p-4 rounded-lg bg-white border border-emerald-300">
        <Search className="mr-2 mb-1 text-emerald-400" size={16} />
        <input
          type="text"
          placeholder="Cari kegiatan..."
          className="w-full outline-none"
        />
          </div>
          <Button
        icon={<Filter size={16} />}
        variant="secondary"
        className="flex items-center justify-center py-4"
          >
        Filter
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          {[
        {
          id: 1,
          type: "Lingkungan",
          image: "/sampleImage.jpg",
          matchPercentage: 85,
          title: "Bersih-Bersih Pantai di Ancol",
          organization: "Green Earth Indonesia",
          location: "Jakarta Utara",
          date: "Sabtu, 15 Juli 2024",
          time: "08:00 - 12:00",
          volunteersNeeded: 50,
          volunteersJoined: 30,
          tags: ["Lingkungan", "Pantai", "Ancol"],
        },
        {
          id: 2,
          type: "Pendidikan",
          image: "/sampleImage.jpg",
          matchPercentage: 90,
          title: "Mengajar Anak-Anak di Panti Asuhan",
          organization: "Pendidikan untuk Semua",
          location: "Jakarta Selatan",
          date: "Minggu, 16 Juli 2024",
          time: "10:00 - 14:00",
          volunteersNeeded: 20,
          volunteersJoined: 15,
          tags: ["Pendidikan", "Anak-Anak", "Panti Asuhan"],
        },
        {
          id: 3,
          type: "Lingkungan",
          image: "/sampleImage.jpg",
          matchPercentage: 78,
          title: "Penanaman Pohon di Taman Kota",
          organization: "Indonesia Hijau",
          location: "Jakarta Barat",
          date: "Sabtu, 22 Juli 2024",
          time: "06:00 - 10:00",
          volunteersNeeded: 100,
          volunteersJoined: 65,
          tags: ["Lingkungan", "Penghijauan", "Taman"],
        },
          ].map((activity) => (
        <ActivityVolunteerCard
          key={activity.id}
          image={activity.image}
          type={activity.type}
          matchPercentage={activity.matchPercentage}
          title={activity.title}
          organization={activity.organization}
          location={activity.location}
          date={activity.date}
          time={activity.time}
          volunteersNeeded={activity.volunteersNeeded}
          volunteersJoined={activity.volunteersJoined}
          tags={activity.tags}
          onRegister={() => console.log(`Registered for ${activity.title}`)}
        />
          ))}
        </div>
      </section>
    </main>
  );
}
