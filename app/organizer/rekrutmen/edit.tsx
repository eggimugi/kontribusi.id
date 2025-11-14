"use client";

import { FormEvent, useState } from "react";
import { BASE_API_URL } from "@/global";
import { getCookie } from "@/lib/client-cookies";
import { put, get, post } from "@/lib/api-bridge";

import { InputGroupComponent, TextGroupComponent } from "@/components/Input";
import { Application, Portfolio } from "@/app/types";

export default function EditPortfolio({
  selectedApplicant,
}: {
  selectedApplicant: Application;
}) {
  const [portfolio, setPortfolio] = useState({
    application_id: selectedApplicant?.id || 0,
    certificate: "",
    badge: "",
    feedback: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const url = `${BASE_API_URL}/portofolio`;
      const TOKEN = getCookie("token") || "";
      const { application_id, certificate, badge, feedback } = portfolio;
      const payload = {
        application_id,
        certificate,
        badge,
        feedback,
      };
      const res = await post(url, JSON.stringify(payload), TOKEN);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 p-14 w-full max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-4xl text-center text-slate-700 font-light tracking-tight mb-[2vh]">
        Edit applicant&apos;s{" "}
        <span className="text-darkBlue font-black italic underline">
          portfolio
        </span>{" "}
        📝
      </h3>

      {/* Certificate URL */}
      <div>
        <label className="text-gray-800 font-medium">Certificate URL</label>
        <InputGroupComponent
          placeholder="https://example.com/certificates/file.pdf"
          value={portfolio.certificate}
          onChange={(val) => setPortfolio({ ...portfolio, certificate: val })}
          type="text"
          id="certificate"
        />
      </div>

      {/* Badge */}
      <div>
        <label className="text-gray-800 font-medium">Badge Title</label>
        <InputGroupComponent
          placeholder="e.g. Health Champion 2024"
          value={portfolio.badge}
          onChange={(val) => setPortfolio({ ...portfolio, badge: val })}
          type="text"
          id="badge"
        />
      </div>

      {/* Feedback */}
      <div>
        <label className="text-gray-800 font-medium">Feedback</label>
        <TextGroupComponent
          placeholder="Feedback from the organization..."
          value={portfolio.feedback}
          onChange={(val) => setPortfolio({ ...portfolio, feedback: val })}
          type="text"
          id="feedback"
        />
      </div>

      {/* buttons */}
      <div className="flex flex-row justify-center gap-x-2 mt-4">
        <button className="w-1/2" type="submit">
          Save
        </button>

        <button className="w-1/2" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}
