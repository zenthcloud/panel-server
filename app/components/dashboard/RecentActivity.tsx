import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Server, Globe, CreditCard, AlertTriangle } from "lucide-react";

const activities = [
  {
    id: 1,
    action: "Domain renewed",
    target: "example.com",
    time: "2 hours ago",
    type: "domain",
    status: "success"
  },
  {
    id: 2,
    action: "Server backup completed",
    target: "web-server-01",
    time: "4 hours ago",
    type: "server",
    status: "success"
  },
  {
    id: 3,
    action: "Invoice generated",
    target: "#INV-2024-001",
    time: "1 day ago",
    type: "billing",
    status: "pending"
  },
  {
    id: 4,
    action: "SSL certificate expiring",
    target: "api.example.com",
    time: "2 days ago",
    type: "security",
    status: "warning"
  },
  {
    id: 5,
    action: "Storage upgraded",
    target: "hosting-plan-premium",
    time: "3 days ago",
    type: "server",
    status: "success"
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "domain":
      return <Globe className="h-4 w-4" />;
    case "server":
      return <Server className="h-4 w-4" />;
    case "billing":
      return <CreditCard className="h-4 w-4" />;
    case "security":
      return <AlertTriangle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "bg-success/10 text-success border-success/20";
    case "warning":
      return "bg-warning/10 text-warning border-warning/20";
    case "pending":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export function RecentActivity() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-card border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {getIcon(activity.type)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.target}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className={getStatusColor(activity.status)}>
                {activity.status}
              </Badge>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}