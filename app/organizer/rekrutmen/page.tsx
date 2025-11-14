"use client";

import { useEffect, useState } from "react";
import { getCookie } from "@/lib/client-cookies";
import { get } from "@/lib/api-bridge";
import { Application } from "@/app/types";
import { BASE_API_URL } from "@/global";
import Modal from "@/components/modal";

import OrganizerNavbar from "@/components/navbar/organizer-navbar";
import ToggleButtonGroup from "@/components/toggleButtonGroup";
import { LayoutDashboard, Users, TrendingUp, Star } from "lucide-react";
import EditPortfolio from "./edit";

export default function RekrutmenPage() {
  const [applicants, setApplicants] = useState<Application[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<Application>();
  const [isShowEdit, setIsShowEdit] = useState(false);

  const getApplicant = async () => {
    try {
      const url = `${BASE_API_URL}/application`;
      const TOKEN = getCookie("token") || "";
      const res = await get(url, TOKEN);
      setApplicants(res.data?.data);
      console.log("token:", TOKEN);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchApplicants = async () => {
      await getApplicant();
    };
    fetchApplicants();
  }, []);

  //   {
  //     id: "AS",
  //     name: "Ahmad Syarif",
  //     kegiatan: "Bersih-Bersih Pantai Ancol",
  //     tags: ["Outdoor Activity", "Leadership"],
  //     rating: 4.8,
  //   },
  //   {
  //     id: "SN",
  //     name: "Siti Nurhaliza",
  //     kegiatan: "Bersih-Bersih Pantai Ancol",
  //     tags: ["Team Work", "Communication"],
  //     rating: 4.9,
  //   },
  //   {
  //     id: "BS",
  //     name: "Budi Santoso",
  //     kegiatan: "Program Penanaman 1000 Pohon",
  //     tags: ["Environmental Care"],
  //     rating: 4.7,
  //   },
  //   {
  //     id: "DL",
  //     name: "Dewi Lestari",
  //     kegiatan: "Program Penanaman 1000 Pohon",
  //     tags: ["Coordination", "Planning"],
  //     rating: 4.8,
  //   },
  // ];

  return (
    <main className="min-h-screen bg-emerald-50">
      <OrganizerNavbar />

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-700 mb-2">
          Yayasan Laut Bersih
        </h1>
        <p className="text-sm md:text-base text-emerald-600 mb-6 md:mb-8">
          Dashboard organisasi untuk mengelola rekrutmen applicant dan mengukur
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
          defaultActive="rekrutmen"
          onChange={(id) => console.log("Selected tab:", id)}
        />

        {/* Kelola Rekrutmen applicant Banner */}
        <div className="mt-6 md:mt-10 bg-teal-600 rounded-2xl p-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                Kelola Rekrutmen applicant
              </h2>
              <p className="text-sm md:text-base text-white/90">
                Lihat pendaftar baru, kelola absensi, dan analisis feedback dari
                applicant untuk meningkatkan kualitas kegiatan
              </p>
            </div>
            <button className="flex items-center gap-2 bg-white hover:bg-emerald-50 text-teal-700 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
              <span className="text-lg">+</span>
              Buka Rekrutmen
            </button>
          </div>
        </div>

        {/* Pendaftar Terbaru */}
        <div className="mt-6 md:mt-8 bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
          <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-4 md:mb-6">
            Pendaftar Terbaru
          </h3>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-emerald-200">
                  <th className="text-left py-3 px-2 text-xs md:text-sm font-semibold text-teal-700">
                    Nama applicant
                  </th>
                  <th className="text-left py-3 px-2 text-xs md:text-sm font-semibold text-teal-700">
                    Kegiatan
                  </th>
                  <th className="text-left py-3 px-2 text-xs md:text-sm font-semibold text-teal-700">
                    Keahlian
                  </th>
                  <th className="text-left py-3 px-2 text-xs md:text-sm font-semibold text-teal-700">
                    Rating
                  </th>
                  <th className="text-left py-3 px-2 text-xs md:text-sm font-semibold text-teal-700">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((applicant) => (
                  <tr
                    key={applicant.volunteer?.user?.name}
                    className="border-b border-emerald-100 hover:bg-emerald-50/50"
                  >
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold shrink-0">
                          {applicant.id}
                        </div>
                        <span className="text-sm md:text-base text-teal-700 font-medium">
                          {applicant.volunteer?.user?.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-xs md:text-sm text-emerald-600">
                        {applicant.opportunity?.title}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex flex-wrap gap-1">
                        {applicant?.volunteer?.skills?.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      {/* <div className="flex items-center gap-1">
                        <Star
                          className="text-yellow-500 fill-yellow-500"
                          size={16}
                        />
                        <span className="text-sm md:text-base font-semibold text-teal-700">
                          {applicant.rating}
                        </span>
                      </div> */}
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setIsShowEdit(true);
                            setSelectedApplicant(applicant);
                          }}
                          className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs md:text-sm font-medium transition-colors"
                        >
                          Make Portofolio
                        </button>
                        <button className="px-3 md:px-4 py-1.5 md:py-2 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-xs md:text-sm font-medium transition-colors">
                          Detail
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Grid - Kelola Absensi & Laporan */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Kelola Absensi */}
          <div className="bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-teal-100 rounded-xl p-3 shrink-0">
                <Users className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-1">
                  Kelola Absensi
                </h3>
                <p className="text-xs md:text-sm text-emerald-600">
                  Tracking kehadiran applicant
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {/* Kegiatan 1 */}
              <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                <div>
                  <p className="text-sm md:text-base font-medium text-teal-700">
                    Bersih-Bersih Pantai Ancol
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-teal-600 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <span className="text-base md:text-lg font-bold text-teal-700 ml-4">
                  24/40
                </span>
              </div>

              {/* Kegiatan 2 */}
              <div className="flex justify-between items-center py-2 border-b border-emerald-100">
                <div>
                  <p className="text-sm md:text-base font-medium text-teal-700">
                    Program Penanaman 1000 Pohon
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-teal-600 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <span className="text-base md:text-lg font-bold text-teal-700 ml-4">
                  18/40
                </span>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-sm font-medium transition-colors">
              Lihat Detail Absensi
            </button>
          </div>

          {/* Laporan & Feedback */}
          <div className="bg-white rounded-2xl p-4 md:p-6 border border-emerald-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-emerald-100 rounded-xl p-3 shrink-0">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-teal-700 mb-1">
                  Laporan & Feedback
                </h3>
                <p className="text-xs md:text-sm text-emerald-600">
                  Evaluasi kegiatan applicant
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Rating */}
              <div>
                <p className="text-sm text-emerald-600 mb-2">
                  Rating Rata-rata
                </p>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500 fill-yellow-500" size={24} />
                  <span className="text-2xl md:text-3xl font-bold text-teal-700">
                    4.8
                  </span>
                  <span className="text-sm text-emerald-600">/5.0</span>
                </div>
                <p className="text-xs text-emerald-500 mt-1">125 Reviews</p>
              </div>

              {/* Feedback Positif */}
              <div>
                <p className="text-sm text-emerald-600 mb-2">
                  Feedback Positif
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-emerald-600 h-3 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-base md:text-lg font-bold text-teal-700">
                    94%
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg text-sm font-medium transition-colors">
              Lihat Semua Laporan
            </button>
          </div>
        </div>
      </section>

      <Modal isShow={isShowEdit} onClose={() => setIsShowEdit(false)}>
        {selectedApplicant && (
          <EditPortfolio selectedApplicant={selectedApplicant} />
        )}
      </Modal>
    </main>
  );
}
