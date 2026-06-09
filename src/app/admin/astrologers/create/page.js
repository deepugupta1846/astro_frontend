"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { adminFetch, uploadImage } from "@/lib/adminApi";

const ID_PROOF_OPTIONS = [
  { value: "aadhaar", label: "Aadhaar" },
  { value: "pan", label: "PAN" },
  { value: "passport", label: "Passport" },
  { value: "driving_license", label: "Driving license" },
  { value: "voter_id", label: "Voter ID" },
  { value: "other", label: "Other" },
];

const GENDER_OPTIONS = [
  { value: "", label: "Select gender" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const emptyForm = {
  name: "",
  phone: "",
  countryCode: "+91",
  email: "",
  gender: "",
  address: "",
  bio: "",
  education: "",
  experienceYears: "",
  specialties: "",
  languages: "",
  skills: "",
  consultationFeePerMin: "",
  birthDate: "",
  birthTime: "",
  birthPlace: "",
  idProofType: "",
  idProofNumber: "",
  chatEnabled: true,
  callEnabled: true,
  videoEnabled: false,
  isVerified: true,
  isActive: true,
};

const inputClass =
  "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground";

function parseList(raw) {
  return String(raw || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function FileField({ label, required, preview, onChange, hint }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type="file"
        accept="image/*"
        required={required && !preview}
        onChange={onChange}
        className="mt-1 block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-foreground"
      />
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
      {preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt=""
          className="mt-2 max-h-36 rounded-lg border border-border object-cover"
        />
      ) : null}
    </div>
  );
}

export default function CreateAstrologerPage() {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [profileFile, setProfileFile] = useState(null);
  const [profilePreview, setProfilePreview] = useState("");
  const [idFrontFile, setIdFrontFile] = useState(null);
  const [idFrontPreview, setIdFrontPreview] = useState("");
  const [idBackFile, setIdBackFile] = useState(null);
  const [idBackPreview, setIdBackPreview] = useState("");
  const [err, setErr] = useState("");
  const [creating, setCreating] = useState(false);

  function setField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onFileChange(setFile, setPreview) {
    return (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setFile(file);
      setPreview(URL.createObjectURL(file));
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setCreating(true);
    try {
      if (!idFrontFile) {
        throw new Error("ID proof front image is required");
      }

      const [profileUrl, idFrontUrl, idBackUrl] = await Promise.all([
        profileFile ? uploadImage(profileFile) : Promise.resolve(null),
        uploadImage(idFrontFile),
        idBackFile ? uploadImage(idBackFile) : Promise.resolve(null),
      ]);

      const body = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        countryCode: form.countryCode.trim() || "+91",
        idProofType: form.idProofType,
        idProofNumber: form.idProofNumber.trim(),
        idProofImageUrl: idFrontUrl,
        chatEnabled: form.chatEnabled,
        callEnabled: form.callEnabled,
        videoEnabled: form.videoEnabled,
        isVerified: form.isVerified,
        isActive: form.isActive,
      };

      if (form.email.trim()) body.email = form.email.trim();
      if (form.gender) body.gender = form.gender;
      if (form.address.trim()) body.address = form.address.trim();
      if (form.bio.trim()) body.bio = form.bio.trim();
      if (form.education.trim()) body.education = form.education.trim();
      if (form.experienceYears !== "") {
        body.experienceYears = Number(form.experienceYears);
      }
      if (form.consultationFeePerMin !== "") {
        body.consultationFeePerMin = Number(form.consultationFeePerMin);
      }
      if (form.birthDate) body.birthDate = form.birthDate;
      if (form.birthTime.trim()) body.birthTime = form.birthTime.trim();
      if (form.birthPlace.trim()) body.birthPlace = form.birthPlace.trim();
      if (profileUrl) body.profileImageUrl = profileUrl;
      if (idBackUrl) body.idProofBackImageUrl = idBackUrl;

      const specialties = parseList(form.specialties);
      const languages = parseList(form.languages);
      const skills = parseList(form.skills);
      if (specialties.length) body.specialties = specialties;
      if (languages.length) body.languages = languages;
      if (skills.length) body.skills = skills;

      await adminFetch("/api/v1/admin/astrologers", {
        method: "POST",
        body: JSON.stringify(body),
      });

      router.push("/admin/astrologers");
    } catch (e) {
      setErr(e.message || "Failed to create astrologer");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/admin/astrologers"
        className="text-sm font-medium text-primary hover:underline"
      >
        ← Back to astrologers
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-foreground">
        Create astrologer account
      </h1>
      <p className="mt-2 text-sm text-muted">
        Creates an astrologer profile and a linked user account with role{" "}
        <span className="font-medium text-foreground">astrologer</span>. ID
        proof and phone are required.
      </p>

      {err ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {err}
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-8 space-y-10">
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Contact & identity
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium sm:col-span-2">
              Full name *
              <input
                required
                className={inputClass}
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Country code
              <input
                className={inputClass}
                value={form.countryCode}
                onChange={(e) => setField("countryCode", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Phone *
              <input
                required
                type="tel"
                className={inputClass}
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                type="email"
                className={inputClass}
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Gender
              <select
                className={inputClass}
                value={form.gender}
                onChange={(e) => setField("gender", e.target.value)}
              >
                {GENDER_OPTIONS.map((o) => (
                  <option key={o.value || "none"} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Address
              <textarea
                rows={3}
                className={`${inputClass} resize-y`}
                placeholder="House no., street, city, state, PIN"
                value={form.address}
                onChange={(e) => setField("address", e.target.value)}
              />
            </label>
            <div className="sm:col-span-2">
              <FileField
                label="Profile photo"
                preview={profilePreview}
                onChange={onFileChange(setProfileFile, setProfilePreview)}
                hint="Optional — JPG, PNG, or WebP"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Professional profile
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium sm:col-span-2">
              Bio
              <textarea
                rows={4}
                className={`${inputClass} resize-y`}
                value={form.bio}
                onChange={(e) => setField("bio", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Education
              <input
                className={inputClass}
                placeholder="Degrees, certifications"
                value={form.education}
                onChange={(e) => setField("education", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Experience (years)
              <input
                type="number"
                min="0"
                step="0.5"
                className={inputClass}
                value={form.experienceYears}
                onChange={(e) => setField("experienceYears", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Fee (₹/min)
              <input
                type="number"
                min="0"
                step="1"
                className={inputClass}
                value={form.consultationFeePerMin}
                onChange={(e) =>
                  setField("consultationFeePerMin", e.target.value)
                }
              />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Specialties (comma separated)
              <input
                className={inputClass}
                placeholder="Vedic, Tarot, Numerology"
                value={form.specialties}
                onChange={(e) => setField("specialties", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Languages (comma separated)
              <input
                className={inputClass}
                placeholder="English, Hindi"
                value={form.languages}
                onChange={(e) => setField("languages", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Skills (comma separated)
              <input
                className={inputClass}
                placeholder="Kundli, Matchmaking, Remedies"
                value={form.skills}
                onChange={(e) => setField("skills", e.target.value)}
              />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Birth details (optional)
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Birth date
              <input
                type="date"
                className={inputClass}
                value={form.birthDate}
                onChange={(e) => setField("birthDate", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium">
              Birth time
              <input
                type="time"
                className={inputClass}
                value={form.birthTime}
                onChange={(e) => setField("birthTime", e.target.value)}
              />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Birth place
              <input
                className={inputClass}
                value={form.birthPlace}
                onChange={(e) => setField("birthPlace", e.target.value)}
              />
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            ID proof (KYC)
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Document type *
              <select
                required
                className={inputClass}
                value={form.idProofType}
                onChange={(e) => setField("idProofType", e.target.value)}
              >
                <option value="">Select document</option>
                {ID_PROOF_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Document number *
              <input
                required
                className={inputClass}
                value={form.idProofNumber}
                onChange={(e) => setField("idProofNumber", e.target.value)}
              />
            </label>
            <div className="sm:col-span-2">
              <FileField
                label="ID proof — front"
                required
                preview={idFrontPreview}
                onChange={onFileChange(setIdFrontFile, setIdFrontPreview)}
              />
            </div>
            <div className="sm:col-span-2">
              <FileField
                label="ID proof — back"
                preview={idBackPreview}
                onChange={onFileChange(setIdBackFile, setIdBackPreview)}
                hint="Optional for single-page documents"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Consultation settings
          </h2>
          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.chatEnabled}
                onChange={(e) => setField("chatEnabled", e.target.checked)}
              />
              Chat enabled
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.callEnabled}
                onChange={(e) => setField("callEnabled", e.target.checked)}
              />
              Call enabled
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.videoEnabled}
                onChange={(e) => setField("videoEnabled", e.target.checked)}
              />
              Video enabled
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.isVerified}
                onChange={(e) => setField("isVerified", e.target.checked)}
              />
              Mark verified
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => setField("isActive", e.target.checked)}
              />
              Active account
            </label>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={creating}
            className="cta-btn rounded-xl px-6 py-2.5 text-sm font-semibold disabled:opacity-60"
          >
            {creating ? "Creating account…" : "Create astrologer account"}
          </button>
          <Link
            href="/admin/astrologers"
            className="rounded-xl border border-border bg-surface px-6 py-2.5 text-sm font-medium hover:bg-accent"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
