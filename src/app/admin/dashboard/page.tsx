import dynamic from "next/dynamic";

const DashboardClient = dynamic(() => import("./DashboardClient"), {
  ssr: false,
});

export default function AdminDashboard() {
  // Skip rendering on the server
  if (typeof window === "undefined") {
    return null;
  }

  return <DashboardClient />;
}
