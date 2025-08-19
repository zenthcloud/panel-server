import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  HardDrive, 
  Plus, 
  Settings, 
  Download,
  Upload,
  Zap,
  Globe,
  BarChart3,
  Folder,
  Cloud
} from "lucide-react";

export default function Storage() {
  const storageInstances = [
    {
      id: "storage-001",
      name: "web-assets",
      type: "Object Storage",
      size: "15.2 GB",
      used: "12.8 GB",
      files: "2,847",
      status: "active",
      region: "Frankfurt"
    },
    {
      id: "storage-002", 
      name: "database-backups",
      type: "Block Storage",
      size: "100 GB",
      used: "45.2 GB",
      files: "156",
      status: "active",
      region: "Amsterdam"
    }
  ];

  const cdnStats = {
    bandwidth: "2.3 TB",
    requests: "1.2M",
    cachingRatio: "87%",
    regions: "15"
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Storage & CDN</h1>
            <p className="text-muted-foreground">Manage storage volumes and content delivery</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Create Storage
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
              <HardDrive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">115</div>
              <p className="text-xs text-muted-foreground">GB allocated</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Used Storage</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">58</div>
              <p className="text-xs text-muted-foreground">GB used (50.4%)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CDN Requests</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2M</div>
              <p className="text-xs text-muted-foreground">this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cache Hit Rate</CardTitle>
              <Globe className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">87%</div>
              <p className="text-xs text-muted-foreground">cache efficiency</p>
            </CardContent>
          </Card>
        </div>

        {/* Storage Management */}
        <Tabs defaultValue="storage" className="space-y-4">
          <TabsList>
            <TabsTrigger value="storage">Storage Volumes</TabsTrigger>
            <TabsTrigger value="cdn">CDN Settings</TabsTrigger>
            <TabsTrigger value="backup">Backup & Sync</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="storage" className="space-y-4">
            <div className="grid gap-4">
              {storageInstances.map((storage) => (
                <Card key={storage.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <HardDrive className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{storage.name}</CardTitle>
                          <CardDescription>{storage.type} • {storage.region}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                          {storage.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Upload className="h-3 w-3" />
                          Upload
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="h-3 w-3" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <HardDrive className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Size:</span>
                          <span>{storage.size}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <BarChart3 className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Used:</span>
                          <span>{storage.used}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Folder className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Files:</span>
                          <span>{storage.files}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Region:</span>
                          <span>{storage.region}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cdn" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    CDN Performance
                  </CardTitle>
                  <CardDescription>Content delivery network statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Bandwidth Used:</span>
                      <span className="text-sm">{cdnStats.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Total Requests:</span>
                      <span className="text-sm">{cdnStats.requests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Cache Hit Rate:</span>
                      <span className="text-sm text-emerald-600">{cdnStats.cachingRatio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Edge Locations:</span>
                      <span className="text-sm">{cdnStats.regions}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CDN Configuration</CardTitle>
                  <CardDescription>Manage CDN settings and cache rules</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">CDN configuration interface coming soon...</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="backup" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Backup & Synchronization</CardTitle>
                <CardDescription>Automated backups and sync settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Backup management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Storage Analytics</CardTitle>
                <CardDescription>Usage statistics and performance metrics</CardDescription>
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