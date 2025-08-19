import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Plus, 
  Settings, 
  ExternalLink,
  Shield,
  Zap,
  BarChart3,
  FileText
} from "lucide-react";

export default function Web() {
  const websites = [
    {
      id: "web-001",
      name: "company-website.com",
      status: "active",
      ssl: true,
      traffic: "2.3K visits/month",
      storage: "1.2 GB",
      lastUpdate: "2 hours ago"
    },
    {
      id: "web-002", 
      name: "blog.company.com",
      status: "active",
      ssl: true,
      traffic: "890 visits/month",
      storage: "340 MB",
      lastUpdate: "1 day ago"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Web Services</h1>
            <p className="text-muted-foreground">Manage your websites and web applications</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Add Website
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Websites</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Traffic</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2K</div>
              <p className="text-xs text-muted-foreground">visits this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SSL Certificates</CardTitle>
              <Shield className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">2/2</div>
              <p className="text-xs text-muted-foreground">secured</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.54</div>
              <p className="text-xs text-muted-foreground">GB total</p>
            </CardContent>
          </Card>
        </div>

        {/* Website Management */}
        <Tabs defaultValue="websites" className="space-y-4">
          <TabsList>
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="ssl">SSL Certificates</TabsTrigger>
            <TabsTrigger value="backups">Backups</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="websites" className="space-y-4">
            <div className="grid gap-4">
              {websites.map((site) => (
                <Card key={site.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{site.name}</CardTitle>
                          <CardDescription>ID: {site.id}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                          {site.status}
                        </Badge>
                        {site.ssl && (
                          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                            <Shield className="h-3 w-3 mr-1" />
                            SSL
                          </Badge>
                        )}
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-3 w-3" />
                          Visit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="h-3 w-3" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <BarChart3 className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Traffic:</span>
                          <span>{site.traffic}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Storage:</span>
                          <span>{site.storage}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Zap className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Last Update:</span>
                          <span>{site.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ssl" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>SSL Certificates</CardTitle>
                <CardDescription>Manage SSL certificates for your websites</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SSL certificate management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backups" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Website Backups</CardTitle>
                <CardDescription>Automated backups and restore points</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Backup management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Website Analytics</CardTitle>
                <CardDescription>Traffic statistics and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}