import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Key, 
  Lock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Settings,
  UserCheck,
  Globe
} from "lucide-react";

export default function Security() {
  const securityEvents = [
    {
      id: "sec-001",
      type: "login",
      status: "success",
      description: "Successful login from Frankfurt, Germany",
      timestamp: "2 minutes ago",
      ip: "192.168.1.100"
    },
    {
      id: "sec-002", 
      type: "firewall",
      status: "blocked",
      description: "Blocked suspicious connection attempt",
      timestamp: "1 hour ago",
      ip: "45.123.45.67"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Security Center</h1>
            <p className="text-muted-foreground">Monitor and configure security settings</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Shield className="h-4 w-4" />
            Security Scan
          </Button>
        </div>

        {/* Security Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Score</CardTitle>
              <Shield className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">85/100</div>
              <p className="text-xs text-muted-foreground">Good security</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">detected</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Firewall Status</CardTitle>
              <CheckCircle className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">Active</div>
              <p className="text-xs text-muted-foreground">protection enabled</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SSL Certificates</CardTitle>
              <Lock className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">3</div>
              <p className="text-xs text-muted-foreground">valid certificates</p>
            </CardContent>
          </Card>
        </div>

        {/* Security Management */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Security Overview</TabsTrigger>
            <TabsTrigger value="firewall">Firewall</TabsTrigger>
            <TabsTrigger value="ssl">SSL/TLS</TabsTrigger>
            <TabsTrigger value="access">Access Control</TabsTrigger>
            <TabsTrigger value="logs">Security Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    Security Recommendations
                  </CardTitle>
                  <CardDescription>Improve your security posture</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Two-factor authentication enabled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Strong password policy active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">Consider enabling DDoS protection</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Recent Security Events
                  </CardTitle>
                  <CardDescription>Latest security activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {securityEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {event.status === "success" ? (
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-destructive" />
                        )}
                        <div>
                          <p className="text-sm font-medium">{event.description}</p>
                          <p className="text-xs text-muted-foreground">{event.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="firewall" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Firewall Configuration</CardTitle>
                <CardDescription>Configure firewall rules and protection settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Firewall management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ssl" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>SSL/TLS Certificates</CardTitle>
                <CardDescription>Manage SSL certificates and encryption settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SSL certificate management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Access Control</CardTitle>
                <CardDescription>Manage user access and authentication settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access control management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Logs</CardTitle>
                <CardDescription>View detailed security logs and events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Security logs viewer coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}