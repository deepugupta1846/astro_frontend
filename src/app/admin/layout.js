import AdminChrome from "@/components/AdminChrome";

export const metadata = {
  title: "Admin — Astro Pulse",
  description: "Manage users and astrologers",
};

export default function AdminLayout({ children }) {
  return <AdminChrome>{children}</AdminChrome>;
}
