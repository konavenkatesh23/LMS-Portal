import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import StatCard from "../../components/dashboard/StatCard";

export default function Dashboard() {

  return (

    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <div className="grid grid-cols-4 gap-6">

            <StatCard
              title="Total Courses"
              value="12"
            />

            <StatCard
              title="Completed"
              value="8"
            />

            <StatCard
              title="Certificates"
              value="5"
            />

            <StatCard
              title="Learning Hours"
              value="120"
            />

          </div>

        </div>

      </div>

    </div>

  );

}