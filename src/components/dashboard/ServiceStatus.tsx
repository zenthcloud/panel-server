import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Clock } from "lucide-react";

interface ServiceStatusProps {
  title: string;
  description?: string;
}

const services = [
  { name: "Web Hosting", status: "operational", type: "hosting" },
  { name: "VPS Servers", status: "operational", type: "server" },
  { name: "Email Service", status: "maintenance", type: "email" },
  { name: "Global CDN", status: "operational", type: "cdn" },
  { name: "DNS Management", status: "operational", type: "dns" },
  { name: "SSL Certificates", status: "operational", type: "ssl" }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="h-4 w-4 text-success" />;
    case "maintenance":
      return <AlertTriangle className="h-4 w-4 text-warning" />;
    case "degraded":
      return <Clock className="h-4 w-4 text-destructive" />;
    default:
      return <CheckCircle className="h-4 w-4 text-success" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "operational":
      return <Badge className="bg-success/10 text-success border-success/20">Operational</Badge>;
    case "maintenance":
      return <Badge className="bg-warning/10 text-warning border-warning/20">Maintenance</Badge>;
    case "degraded":
      return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Degraded</Badge>;
    default:
      return <Badge className="bg-success/10 text-success border-success/20">Operational</Badge>;
  }
};

export function ServiceStatus({ title, description }: ServiceStatusProps) {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        {services.map((service) => (
          <div key={service.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
            <div className="flex items-center space-x-3">
              {getStatusIcon(service.status)}
              <span className="font-medium">{service.name}</span>
            </div>
            {getStatusBadge(service.status)}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}