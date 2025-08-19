import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database as DatabaseIcon, 
  Plus, 
  Settings, 
  Download,
  Upload,
  Activity,
  HardDrive,
  Users,
  Lock
} from "lucide-react";

export default function Database() {
  const databases = [
    {
      id: "db-001",
      name: "production-app",
      type: "PostgreSQL",
      version: "15.4",
      status: "running",
      size: "2.1 GB",
      connections: "12/100",
      lastBackup: "2 hours ago"
    },
    {
      id: "db-002", 
      name: "staging-db",
      type: "MySQL",
      version: "8.0",
      status: "running",
      size: "512 MB",
      connections: "3/50",
      lastBackup: "6 hours ago"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Databases</h1>
            <p className="text-muted-foreground">Manage your database instances and backups</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Create Database
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Databases</CardTitle>
              <DatabaseIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
              <HardDrive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.6</div>
              <p className="text-xs text-muted-foreground">GB used</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">total connections</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Latest Backup</CardTitle>
              <Download className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">2h</div>
              <p className="text-xs text-muted-foreground">ago</p>
            </CardContent>
          </Card>
        </div>

        {/* Database Management */}
        <Tabs defaultValue="instances" className="space-y-4">
          <TabsList>
            <TabsTrigger value="instances">Database Instances</TabsTrigger>
            <TabsTrigger value="backups">Backups</TabsTrigger>
            <TabsTrigger value="users">Users & Access</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="instances" className="space-y-4">
            <div className="grid gap-4">
              {databases.map((db) => (
                <Card key={db.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <DatabaseIcon className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{db.name}</CardTitle>
                          <CardDescription>{db.type} {db.version}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                          {db.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Activity className="h-3 w-3" />
                          Monitor
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
                          <span>{db.size}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Connections:</span>
                          <span>{db.connections}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Last Backup:</span>
                          <span>{db.lastBackup}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Lock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">ID:</span>
                          <span>{db.id}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backups" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Database Backups</CardTitle>
                <CardDescription>Automated backups and restore points for your databases</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Backup management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Database Users & Access</CardTitle>
                <CardDescription>Manage database users and their permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Database Monitoring</CardTitle>
                <CardDescription>Performance metrics and health monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monitoring dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}