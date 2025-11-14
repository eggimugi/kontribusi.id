"use client";
import VolunteerNavbar from "@/components/navbar/volunteer-navbar";
import ToggleButtonGroup from "@/components/toggleButtonGroup";
import { ActivityVolunteerCard } from "@/components/activityVolunteerCard";
import SimpleCard from "@/components/simpleCard";
import {
  Search,
  Award,
  Clock,
  CheckCircle2,
  Trophy,
  Medal,
} from "lucide-react";
import Badge from "@/components/badge";
import Badge2 from "@/components/badge2";
import Badge3 from "@/components/badge3";

export default function VolunteerPortofolioPage() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <VolunteerNavbar />
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10">
        <ToggleButtonGroup
          buttons={[
            {
              id: "kegiatan",
              label: "Temukan Kegiatan",
              icon: <Search size={16} />,
              href: "/volunteer",
            },
            {
              id: "portofolio",
              label: "Portofolio Saya",
              icon: <Award size={16} />,
              href: "/volunteer/portofolio",
            },
          ]}
          defaultActive="portofolio"
          onChange={(id) => console.log("Selected tab:", id)}
        />

        <div className="mt-6 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <SimpleCard
            icon={<Clock size={40} />}
            title="12"
            bigTitle={true}
            description="Total Jam Kontribusi"
            className="px-6 py-4 bg-emerald-600 text-white"
            iconClassName="text-white/80"
          />
          <SimpleCard
            icon={<CheckCircle2 size={40} />}
            title="3"
            bigTitle={true}
            description="Kegiatan Selesai"
            className="px-6 py-4 bg-teal-600 text-white"
            iconClassName="text-white/80"
          />
          <SimpleCard
            icon={<Medal size={40} />}
            title="3"
            bigTitle={true}
            description="Kegiatan Selesai"
            className="px-6 py-4 bg-emerald-700 text-white"
            iconClassName="text-white/80"
          />
          <SimpleCard
            icon={<Trophy size={40} />}
            title="Level 3"
            bigTitle={true}
            description="Kegiatan Selesai"
            className="px-6 py-4 bg-orange-500 text-white"
            iconClassName="text-white/80"
          />
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10">
        <ActivityVolunteerCard
          title="Progress ke Community Hero"
          organization="12 dari 50 jam kontribusi"
          volunteersNeeded={50}
          volunteersJoined={12}
          tertiaryTitle="Kontribusi 38 jam lagi untuk mendapat badge Community Hero! 🏆"
        />
      </section>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10">
        <div className="p-4 md:p-8 border border-emerald-200 bg-white rounded-2xl">
          <h3 className="text-lg md:text-xl font-semibold">Koleksi Badge</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            {[
              {
                id: 1,
                title: "Eco Warrior",
                subtitle: "Ikut 5 kegiatan lingkungan",
                icon: "🌱",
                locked: false,
              },
              {
                id: 2,
                title: "Community Hero",
                subtitle: "Kontribusi 50 jam",
                icon: "🦸",
                locked: false,
              },
              {
                id: 3,
                title: "Orphan Guardian",
                subtitle: "Bantu 3 kegiatan sosial panti asuhan",
                icon: "👶",
                locked: false,
              },
              {
                id: 4,
                title: "Disaster Helper",
                subtitle: "Ikut 2 kegiatan penanggulangan bencana",
                icon: "🛡️",
                locked: true,
              },
              {
                id: 5,
                title: "Blood Donor",
                subtitle: "Donor darah minimal 1 kali",
                icon: "🩸",
                locked: true,
              },
              {
                id: 6,
                title: "Health Advocate",
                subtitle: "Ikut 3 kegiatan kesehatan masyarakat",
                icon: "❤️",
                locked: true,
              },
            ].map((b) => (
              <Badge2
                key={b.id}
                title={b.title}
                subtitle={b.subtitle}
                icon={b.icon || "🏅"}
                locked={b.locked}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10">
        <div className="p-4 md:p-8 border border-emerald-200 bg-white rounded-2xl">
          <h3 className="text-lg md:text-xl font-semibold">Riwayat Kegiatan</h3>
          <div className="mt-4 md:mt-6 grid grid-cols-1 gap-4 md:gap-6">
            {[
              {
                id: 1,
                title: "Program Penanaman Pohon",
                organization: "GreenAction",
                date: "15 September 2025",
                time: "6 jam",
                badgeTitle: "Eco Warrior",
              },
              {
                id: 2,
                title: "Bakti Sosial di Panti Asuhan",
                organization: "Care4Kids",
                date: "20 Oktober 2025",
                time: "5 jam",
                badgeTitle: "Orphan Guardian",
              },
              {
                id: 3,
                title: "Kampanye Pengurangan Sampah Plastik",
                organization: "CleanSea",
                date: "5 November 2025",
                time: "4 jam",
                badgeTitle: "Eco Warrior",
              },
            ].map((b) => (
              <Badge3
                key={b.id}
                className="bg-emerald-50 border border-emerald-200"
                icon={<CheckCircle2 size={28} />}
                iconClassName="p-4 bg-emerald-600 text-white"
                title={b.title}
                organization={b.organization}
                date={b.date}
                time={b.time}
                badgeTitle={b.badgeTitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10">
        <div className="min-h-40 md:min-h-56 bg-white p-4 md:p-8 border border-emerald-200 rounded-2xl flex flex-col justify-between gap-3 md:gap-4">
          <h3 className="text-lg md:text-xl font-semibold">
            Setifikat Digital
          </h3>
          <p className="text-sm md:text-base">
            Download sertifikat untuk setiap kegiatan yang telah kamu selesaikan
          </p>
          <Badge
            icon={<Award size={16} />}
            text="Lihat Semua Sertifikat"
            bgColor={false}
            border={true}
            color="green"
            className="w-full flex items-center justify-center"
          />
        </div>
      </section>
    </main>
  );
}
