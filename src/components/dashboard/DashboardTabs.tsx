import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Shield, 
  Eye,
  TrendingUp,
  Clock,
  AlertTriangle
} from "lucide-react";

const performanceMetrics = [
  { metric: "Average Response Time", value: "127ms", trend: "down", good: true },
  { metric: "Uptime", value: "99.98%", trend: "up", good: true },
  { metric: "Error Rate", value: "0.02%", trend: "down", good: true },
  { metric: "Peak Traffic", value: "2.1K/min", trend: "up", good: true }
];

const securityAlerts = [
  { type: "SSL Certificate", message: "Certificate expires in 30 days", severity: "warning", time: "2 hours ago" },
  { type: "Login Attempt", message: "Failed login from unknown IP", severity: "info", time: "1 day ago" },
  { type: "Security Scan", message: "Weekly scan completed successfully", severity: "success", time: "2 days ago" }
];

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview" className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="performance" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Performance
        </TabsTrigger>
        <TabsTrigger value="security" className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          Security
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-6">
        <div className="text-sm text-muted-foreground">
          Overview content is displayed in the main dashboard area above.
        </div>
      </TabsContent>

      <TabsContent value="performance" className="mt-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {performanceMetrics.map((metric) => (
                <div key={metric.metric} className="p-4 rounded-lg bg-muted/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.metric}</p>
                      <p className="text-lg font-semibold">{metric.value}</p>
                    </div>
                    <Badge variant={metric.good ? "default" : "destructive"}>
                      {metric.trend === "up" ? "↗" : "↘"} {metric.good ? "Good" : "Poor"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="mt-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Security Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {securityAlerts.map((alert, index) => (
              <div key={index} className="flex items-start justify-between p-4 rounded-lg bg-muted/30">
                <div className="flex items-start space-x-3">
                  {alert.severity === "warning" && <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />}
                  {alert.severity === "info" && <Shield className="h-5 w-5 text-primary mt-0.5" />}
                  {alert.severity === "success" && <Shield className="h-5 w-5 text-success mt-0.5" />}
                  <div>
                    <p className="font-medium text-sm">{alert.type}</p>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                  <Clock className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}