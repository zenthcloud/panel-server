import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ServiceStatus } from "@/components/dashboard/ServiceStatus";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { 
  Server, 
  Globe, 
  HardDrive, 
  Activity
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Active Websites"
            value="12"
            change={{ value: "+2 this month", trend: "up" }}
            icon={<Globe className="h-4 w-4" />}
            description="All operational"
          />
          <MetricCard
            title="VPS Servers"
            value="4"
            change={{ value: "All operational", trend: "up" }}
            icon={<Server className="h-4 w-4" />}
          />
          <MetricCard
            title="Databases"
            value="8"
            change={{ value: "MySQL, PostgreSQL", trend: "up" }}
            icon={<HardDrive className="h-4 w-4" />}
          />
          <MetricCard
            title="Monthly Traffic"
            value="2.4M"
            change={{ value: "+12% vs last month", trend: "up" }}
            icon={<Activity className="h-4 w-4" />}
          />
        </div>

        {/* Navigation Tabs */}
        <DashboardTabs />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Left Content - Service Status & Activity */}
          <div className="xl:col-span-3 space-y-6">
            <ServiceStatus 
              title="Service Status"
              description="Real-time status of your cloud services"
            />
            <RecentActivity />
          </div>

          {/* Right Sidebar - Quick Actions */}
          <div className="xl:col-span-1">
            <QuickActions />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
