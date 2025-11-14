"use client";
import OrganizerNavbar from "@/components/navbar/organizer-navbar";
import ToggleButtonGroup from "@/components/toggleButtonGroup";
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Clock,
  Target,
  Globe,
} from "lucide-react";

export default function RekrutmenPage() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <OrganizerNavbar />

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-700 mb-2">
          Yayasan Laut Bersih
        </h1>
        <p className="text-sm md:text-base text-emerald-600 mb-6 md:mb-8">
          Dashboard organisasi untuk mengelola rekrutmen volunteer dan mengukur
          dampak sosial
        </p>

        <ToggleButtonGroup
          buttons={[
            {
              id: "dashboard",
              label: "Dashboard",
              icon: <LayoutDashboard size={16} />,
              href: "/organizer",
            },
            {
              id: "rekrutmen",
              label: "Rekrutmen",
              icon: <Users size={16} />,
              href: "/organizer/rekrutmen",
            },
            {
              id: "analisis",
              label: "Analisis Dampak",
              icon: <TrendingUp size={16} />,
              href: "/organizer/analisis-dampak",
            },
          ]}
          defaultActive="analisis"
          onChange={(id) => console.log("Selected tab:", id)}
        />

        {/* Analisis Dampak Social Banner */}
        <div className="mt-6 md:mt-10 bg-teal-600 rounded-2xl p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-white mb-2">
            Analisis Dampak Sosial
          </h2>
          <p className="text-sm md:text-base text-white/90">
            Ukur dan visualisasi dampak nyata dari kegiatan volunteer Anda. Data
            ini dapat dibagikan kepada publik dan mitra untuk meningkatkan
            transparansi dan kredibilitas organisasi.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
            <div className="flex items-start justify-between mb-3">
              <Clock className="text-teal-600" size={32} />
              <TrendingUp className="text-emerald-500" size={20} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">
              8.800
            </h3>
            <p className="text-sm md:text-base text-emerald-600 mb-2">
              Total Jam Kerja Volunteer
            </p>
            <p className="text-xs md:text-sm text-emerald-500 font-medium">
              +24% dari bulan lalu
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
            <div className="flex items-start justify-between mb-3">
              <Target className="text-teal-600" size={32} />
              <TrendingUp className="text-emerald-500" size={20} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">
              3.310
            </h3>
            <p className="text-sm md:text-base text-emerald-600 mb-2">
              Total Penerima Manfaat
            </p>
            <p className="text-xs md:text-sm text-emerald-500 font-medium">
              +18% dari bulan lalu
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
            <div className="flex items-start justify-between mb-3">
              <Globe className="text-teal-600" size={32} />
              <TrendingUp className="text-emerald-500" size={20} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">
              12
            </h3>
            <p className="text-sm md:text-base text-emerald-600 mb-2">
              Wilayah Terdampak
            </p>
            <p className="text-xs md:text-sm text-emerald-500 font-medium">
              4 provinsi di Indonesia
            </p>
          </div>
        </div>

        {/* Dampak per Wilayah Chart */}
        <div className="mt-6 md:mt-8 bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
          <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-4 md:mb-6">
            Dampak per Wilayah
          </h3>

          <div className="space-y-6">
            {/* Jakarta */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base font-medium text-teal-700">
                  Jakarta
                </span>
                <span className="text-xs md:text-sm text-emerald-600">
                  Total: 4.600
                </span>
              </div>
              <div className="flex gap-2 h-16 md:h-20">
                <div className="flex-1 bg-emerald-600 rounded-lg flex items-end justify-center pb-2">
                  <span className="text-white text-xs md:text-sm font-medium">
                    1.200
                  </span>
                </div>
                <div
                  className="flex-1 bg-teal-500 rounded-lg flex items-end justify-center pb-2"
                  style={{ height: "95%" }}
                >
                  <span className="text-white text-xs md:text-sm font-medium">
                    3.400
                  </span>
                </div>
              </div>
            </div>

            {/* Jawa Barat */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base font-medium text-teal-700">
                  Jawa Barat
                </span>
                <span className="text-xs md:text-sm text-emerald-600">
                  Total: 3.000
                </span>
              </div>
              <div className="flex gap-2 h-16 md:h-20">
                <div
                  className="flex-1 bg-emerald-600 rounded-lg flex items-end justify-center pb-2"
                  style={{ height: "60%" }}
                >
                  <span className="text-white text-xs md:text-sm font-medium">
                    900
                  </span>
                </div>
                <div
                  className="flex-1 bg-teal-500 rounded-lg flex items-end justify-center pb-2"
                  style={{ height: "70%" }}
                >
                  <span className="text-white text-xs md:text-sm font-medium">
                    2.100
                  </span>
                </div>
              </div>
            </div>

            {/* Jawa Tengah */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base font-medium text-teal-700">
                  Jawa Tengah
                </span>
                <span className="text-xs md:text-sm text-emerald-600">
                  Total: 2.300
                </span>
              </div>
              <div className="flex gap-2 h-16 md:h-20">
                <div
                  className="flex-1 bg-emerald-600 rounded-lg flex items-end justify-center pb-2"
                  style={{ height: "35%" }}
                >
                  <span className="text-white text-xs md:text-sm font-medium">
                    650
                  </span>
                </div>
                <div
                  className="flex-1 bg-teal-500 rounded-lg flex items-end justify-center pb-2"
                  style={{ height: "55%" }}
                >
                  <span className="text-white text-xs md:text-sm font-medium">
                    1.650
                  </span>
                </div>
              </div>
            </div>

            {/* Jawa Timur */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm md:text-base font-medium text-teal-700">
                  Jawa Timur
                </span>
                <span className="text-xs md:text-sm text-emerald-600">
                  Total: 2.800
                </span>
              </div>
              <div className="flex gap-2 h-16 md:h-20">
                <div
                  className="flex-1 bg-emerald-600 rounded-lg flex items-end justify-center pb-2"
                  style={{ height: "30%" }}
                >
                  <span className="text-white text-xs md:text-sm font-medium">
                    550
                  </span>
                </div>
                <div
                  className="flex-1 bg-teal-500 rounded-lg flex items-end justify-center pb-2"
                  style={{ height: "75%" }}
                >
                  <span className="text-white text-xs md:text-sm font-medium">
                    2.250
                  </span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 border-t border-emerald-200">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-600 rounded"></div>
                <span className="text-xs md:text-sm text-emerald-600">
                  Jam Kontribusi
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-teal-500 rounded"></div>
                <span className="text-xs md:text-sm text-emerald-600">
                  Penerima Manfaat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Dampak Section */}
        <div className="mt-6 md:mt-8 bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
          <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-4 md:mb-6">
            Highlight Dampak
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 - Pantai Bersih */}
            <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50/50">
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 rounded-xl p-3 shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">
                    Pantai Bersih, Laut Sehat
                  </h4>
                  <p className="text-xs md:text-sm text-emerald-600 mb-3">
                    450 jam kontribusi menghasilkan 2.5 ton sampah plastik
                    terangkat dari 8 pantai di Jakarta
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      2.500 kg sampah
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      8 lokasi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Hijau untuk Masa Depan */}
            <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50/50">
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 rounded-xl p-3 shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">
                    Hijau untuk Masa Depan
                  </h4>
                  <p className="text-xs md:text-sm text-emerald-600 mb-3">
                    3.200 pohon ditanam di 5 wilayah dengan survival rate 87%,
                    menyerap 12 ton CO2/tahun
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      3.200 pohon
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      12 ton CO2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Pendidikan untuk Semua */}
            <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50/50">
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 rounded-xl p-3 shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">
                    Pendidikan untuk Semua
                  </h4>
                  <p className="text-xs md:text-sm text-emerald-600 mb-3">
                    320 jam mengajar membantu 450 anak di daerah terpencil
                    meningkatkan kemampuan literasi
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      450 anak
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      15 sekolah
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Sehat untuk Masyarakat */}
            <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50/50">
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 rounded-xl p-3 shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">
                    Sehat untuk Masyarakat
                  </h4>
                  <p className="text-xs md:text-sm text-emerald-600 mb-3">
                    280 jam pelayanan kesehatan gratis menjangkau 890 warga di 6
                    desa terpencil
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      890 warga
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      6 desa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagikan Dashboard Section */}
        <div className="mt-6 md:mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 md:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-2">
                Bagikan Dashboard Dampak Anda
              </h3>
              <p className="text-xs md:text-sm text-emerald-600">
                Tingkatkan transparansi dan kredibilitas organisasi dengan
                membagikan visualisasi dampak sosial kepada publik dan mitra
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
              <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm font-medium transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Publikasikan Dashboard
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-teal-700 border border-teal-600 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm font-medium transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Laporan PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
