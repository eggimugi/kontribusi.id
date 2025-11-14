"use client";
import OrganizerNavbar from "@/components/navbar/organizer-navbar";
import ToggleButtonGroup from "@/components/toggleButtonGroup";
import SimpleCard from "@/components/simpleCard";
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Activity,
  Clock,
  Target,
} from "lucide-react";

export default function OrganizerPage() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <OrganizerNavbar />

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10">
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
          defaultActive="dashboard"
          onChange={(id) => console.log("Selected tab:", id)}
        />

        <div className="mt-6 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <SimpleCard
            icon={<Users size={40} />}
            title="275"
            bigTitle={true}
            description="Total Volunteer"
            className="px-4 md:px-6 py-4 bg-teal-600 text-white"
            iconClassName="text-white/80"
          />
          <SimpleCard
            icon={<Clock size={40} />}
            title="8.800"
            bigTitle={true}
            description="Total Jam Kontribusi"
            className="px-4 md:px-6 py-4 bg-emerald-600 text-white"
            iconClassName="text-white/80"
          />
          <SimpleCard
            icon={<Target size={40} />}
            title="3.310"
            bigTitle={true}
            description="Penerima Manfaat"
            className="px-4 md:px-6 py-4 bg-emerald-700 text-white"
            iconClassName="text-white/80"
          />
          <SimpleCard
            icon={<Activity size={40} />}
            title="2"
            bigTitle={true}
            description="Kegiatan Aktif"
            className="px-4 md:px-6 py-4 bg-teal-700 text-white"
            iconClassName="text-white/80"
          />
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Tren Partisipasi Volunteer */}
          <div className="bg-white p-4 md:p-6 rounded-2xl border border-emerald-200">
            <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-4 md:mb-6">
              Tren Partisipasi Volunteer
            </h3>
            <div className="relative h-64 md:h-80">
              {/* Chart Area */}
              <svg viewBox="0 0 700 300" className="w-full h-full">
                {/* Grid Lines */}
                <line
                  x1="60"
                  y1="240"
                  x2="660"
                  y2="240"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                <line
                  x1="60"
                  y1="180"
                  x2="660"
                  y2="180"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                <line
                  x1="60"
                  y1="120"
                  x2="660"
                  y2="120"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                <line
                  x1="60"
                  y1="60"
                  x2="660"
                  y2="60"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />

                {/* Y-axis labels */}
                <text
                  x="40"
                  y="245"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="end"
                >
                  0
                </text>
                <text
                  x="40"
                  y="185"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="end"
                >
                  30
                </text>
                <text
                  x="40"
                  y="125"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="end"
                >
                  60
                </text>
                <text
                  x="40"
                  y="65"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="end"
                >
                  90
                </text>
                <text
                  x="40"
                  y="25"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="end"
                >
                  120
                </text>

                {/* Line Chart */}
                <polyline
                  points="60,240 160,190 260,90 360,100 460,170 560,150 660,30"
                  fill="none"
                  stroke="#14B8A6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                <circle cx="60" cy="240" r="5" fill="#14B8A6" />
                <circle cx="160" cy="190" r="5" fill="#14B8A6" />
                <circle cx="260" cy="90" r="5" fill="#14B8A6" />
                <circle cx="360" cy="100" r="5" fill="#14B8A6" />
                <circle cx="460" cy="170" r="5" fill="#14B8A6" />
                <circle cx="560" cy="150" r="5" fill="#14B8A6" />
                <circle cx="660" cy="30" r="5" fill="#14B8A6" />

                {/* X-axis labels */}
                <text
                  x="60"
                  y="265"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="middle"
                >
                  Apr
                </text>
                <text
                  x="160"
                  y="265"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="middle"
                >
                  Mei
                </text>
                <text
                  x="260"
                  y="265"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="middle"
                >
                  Jun
                </text>
                <text
                  x="360"
                  y="265"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="middle"
                >
                  Jul
                </text>
                <text
                  x="460"
                  y="265"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="middle"
                >
                  Agu
                </text>
                <text
                  x="560"
                  y="265"
                  fill="#10B981"
                  fontSize="12"
                  textAnchor="middle"
                >
                  Sep
                </text>

                {/* Legend */}
                <circle cx="300" cy="290" r="4" fill="#14B8A6" />
                <text x="310" y="295" fill="#10B981" fontSize="12">
                  Volunteers
                </text>
              </svg>
            </div>
          </div>

          {/* Jam Kontribusi per Kategori */}
          <div className="bg-white p-4 md:p-6 rounded-2xl border border-emerald-200">
            <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-4 md:mb-6">
              Jam Kontribusi per Kategori
            </h3>
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              {/* Pie Chart */}
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-xs">
                <defs>
                  <filter id="shadow">
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="3"
                      floodOpacity="0.2"
                    />
                  </filter>
                </defs>

                {/* Lingkungan: 450h (37.5%) */}
                <path
                  d="M 200 200 L 200 50 A 150 150 0 0 1 325.98 106.7 Z"
                  fill="#10B981"
                  filter="url(#shadow)"
                />

                {/* Pendidikan: 320h (26.7%) */}
                <path
                  d="M 200 200 L 325.98 106.7 A 150 150 0 0 1 325.98 293.3 Z"
                  fill="#14B8A6"
                  filter="url(#shadow)"
                />

                {/* Kesehatan: 280h (23.3%) */}
                <path
                  d="M 200 200 L 325.98 293.3 A 150 150 0 0 1 106.7 325.98 Z"
                  fill="#0D9488"
                  filter="url(#shadow)"
                />

                {/* Sosial: 210h (17.5%) */}
                <path
                  d="M 200 200 L 106.7 325.98 A 150 150 0 0 1 200 50 Z"
                  fill="#059669"
                  filter="url(#shadow)"
                />
              </svg>

              {/* Labels */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                    <span className="text-teal-700 whitespace-nowrap">
                      Lingkungan: 450h
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#14B8A6]"></div>
                    <span className="text-teal-700 whitespace-nowrap">
                      Pendidikan: 320h
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#059669]"></div>
                    <span className="text-teal-700 whitespace-nowrap">
                      Sosial: 210h
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#0D9488]"></div>
                    <span className="text-teal-700 whitespace-nowrap">
                      Kesehatan: 280h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10 pb-6 md:pb-10">
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-emerald-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-semibold text-teal-700">
              Kegiatan Saya
            </h3>
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <span className="text-lg">+</span>
              Buat Kegiatan Baru
            </button>
          </div>

          <div className="space-y-4">
            {/* Kegiatan 1 - Aktif */}
            <div className="border border-emerald-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-base md:text-lg font-semibold text-teal-700">
                      Bersih-Bersih Pantai Ancol
                    </h4>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      Aktif
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-emerald-600 mb-3">
                    <div className="flex items-center gap-1">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>25 Oktober 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Jakarta Utara</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <p className="text-xs text-emerald-600 mb-1">
                        Volunteer Terdaftar
                      </p>
                      <p className="text-base md:text-lg font-semibold text-teal-700">
                        25/50
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-teal-600 h-2 rounded-full"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-600 mb-1">
                        Pendaftar Baru
                      </p>
                      <p className="text-base md:text-lg font-semibold text-teal-700">
                        42 orang
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-600 mb-1">
                        Status Rekrutmen
                      </p>
                      <p className="text-base md:text-lg font-semibold text-teal-700">
                        Dibuka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2">
                  <button className="flex-1 sm:flex-none px-4 py-2 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-sm font-medium transition-colors">
                    Kelola
                  </button>
                </div>
              </div>
            </div>

            {/* Kegiatan 2 - Aktif */}
            <div className="border border-emerald-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-base md:text-lg font-semibold text-teal-700">
                      Program Penanaman 1000 Pohon
                    </h4>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      Aktif
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-emerald-600 mb-3">
                    <div className="flex items-center gap-1">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>15 November 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Bogor</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <p className="text-xs text-emerald-600 mb-1">
                        Volunteer Terdaftar
                      </p>
                      <p className="text-base md:text-lg font-semibold text-teal-700">
                        18/40
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-teal-600 h-2 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-600 mb-1">
                        Pendaftar Baru
                      </p>
                      <p className="text-base md:text-lg font-semibold text-teal-700">
                        28 orang
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-600 mb-1">
                        Status Rekrutmen
                      </p>
                      <p className="text-base md:text-lg font-semibold text-teal-700">
                        Dibuka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2">
                  <button className="flex-1 sm:flex-none px-4 py-2 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-sm font-medium transition-colors">
                    Kelola
                  </button>
                </div>
              </div>
            </div>

            {/* Kegiatan 3 - Selesai */}
            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow bg-gray-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-base md:text-lg font-semibold text-gray-600">
                      Donor Darah Massal
                    </h4>
                    <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-medium">
                      Selesai
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>5 September 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Jakarta Pusat</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Volunteer Terdaftar
                      </p>
                      <p className="text-base md:text-lg font-semibold text-gray-600">
                        30/30
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-gray-600 h-2 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Pendaftar Baru
                      </p>
                      <p className="text-base md:text-lg font-semibold text-gray-600">
                        35 orang
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Status Rekrutmen
                      </p>
                      <p className="text-base md:text-lg font-semibold text-gray-600">
                        Ditutup
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2">
                  <button className="flex-1 sm:flex-none px-4 py-2 border border-gray-400 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors">
                    Kelola
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
