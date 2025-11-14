"use client";
import { useEffect, useState } from "react";
import VolunteerNavbar from "@/components/navbar/volunteer-navbar";
import Button from "@/components/button";
import ToggleButtonGroup from "@/components/toggleButtonGroup";
import { ActivityVolunteerCard } from "@/components/activityVolunteerCard";
import { Search, Award, Target, Filter } from "lucide-react";
import { VolunteerOpportunity } from "@/app/types";

export default function VolunteerPage() {
  const [data, setData] = useState<VolunteerOpportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const base =
          process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";
        const res = await fetch(`${base}/opportunity`, {
          // credentials: "include" // jika perlu cookie
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        // Jika response dibungkus {data: [...]}
        const list = Array.isArray(json) ? json : json.data;
        setData(list || []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

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
          defaultActive="kegiatan"
          onChange={(id) => console.log("Selected tab:", id)}
        />

        <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-between gap-4 md:gap-6 p-4 md:p-8 bg-emerald-600 rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Target size={20} className="md:w-6 md:h-6" color="white" />
              <h2 className="text-white text-xs sm:text-sm ml-2 md:ml-4">
                Bergabunglah sebagai Volunteer dan Buat Dampak Positif!
              </h2>
            </div>
            <div className="mt-3 md:mt-4 max-w-4xl">
              <h1 className="font-semibold text-white text-base md:text-xl mb-2 md:mb-4">
                Kegiatan yang Cocok Untukmu
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/20 p-4 md:p-5 rounded-lg min-w-[120px] md:min-w-[140px]">
            <h1 className="text-white font-semibold text-3xl md:text-4xl mb-2 md:mb-4">
              {loading ? "…" : data.length}
            </h1>
            <p className="text-white text-sm md:text-base">Kegiatan</p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10">
        <div className="flex items-center justify-center gap-3 md:gap-6">
          <div className="w-full flex items-center p-3 md:p-4 rounded-lg bg-white border border-emerald-300">
            <Search className="mr-2 mb-1 text-emerald-400" size={16} />
            <input
              type="text"
              placeholder="Cari kegiatan..."
              className="w-full outline-none text-sm md:text-base"
              // Bisa tambahkan state filter di sini
            />
          </div>
          <Button
            icon={<Filter size={16} />}
            variant="secondary"
            className="flex items-center justify-center py-3 md:py-4 px-4 md:px-6 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </div>

        {loading && (
          <p className="mt-6 text-center text-emerald-700">Memuat data…</p>
        )}
        {error && (
          <p className="mt-6 text-center text-red-600">Gagal memuat: {error}</p>
        )}
        {!loading && !error && data.length === 0 && (
          <p className="mt-6 text-center text-emerald-700">
            Tidak ada kegiatan.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8">
          {data.map((op) => {
            const start = new Date(op.startDate);
            const end = new Date(op.endDate);
            const dateText = start.toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const timeText =
              start.toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              }) +
              " - " +
              end.toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              });

            return (
              <ActivityVolunteerCard
                key={op.id}
                image={"/sampleImage.jpg"} // placeholder sementara
                type={op.category || "Umum"}
                matchPercentage={undefined} // belum ada di model
                title={op.title}
                organization={op.organization?.name || "Organisasi"}
                location={op.location || "-"}
                date={dateText}
                time={timeText}
                volunteer={true}
                volunteersNeeded={op.capacity}
                volunteersJoined={op.applications?.length || 0}
                tags={op.requiredSkills || []}
                onRegister={() =>
                  console.log(`Register opportunity id=${op.id}`)
                }
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
