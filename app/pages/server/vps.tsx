import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Server, 
  Play, 
  Square, 
  RotateCcw, 
  Settings, 
  Trash2, 
  Plus,
  Search,
  Filter,
  MonitorSpeaker,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Globe,
  Calendar,
  Clock
} from "lucide-react";

export default function VirtualMachines() {
  const [searchTerm, setSearchTerm] = useState("");

  const vmInstances = [
    {
      id: "vm-001",
      name: "web-server-prod",
      status: "running",
      ip: "192.168.1.10",
      os: "Ubuntu 22.04",
      cpu: "4 vCPUs",
      memory: "8 GB",
      storage: "100 GB SSD",
      uptime: "15 days",
      location: "Frankfurt",
      created: "2024-01-15"
    },
    {
      id: "vm-002", 
      name: "database-server",
      status: "running",
      ip: "192.168.1.11",
      os: "CentOS 8",
      cpu: "8 vCPUs", 
      memory: "16 GB",
      storage: "500 GB SSD",
      uptime: "32 days",
      location: "Amsterdam",
      created: "2023-12-20"
    },
    {
      id: "vm-003",
      name: "test-environment",
      status: "stopped",
      ip: "192.168.1.12",
      os: "Windows Server 2022",
      cpu: "2 vCPUs",
      memory: "4 GB", 
      storage: "50 GB SSD",
      uptime: "0 days",
      location: "London",
      created: "2024-02-01"
    },
    {
      id: "vm-004",
      name: "staging-server",
      status: "restarting",
      ip: "192.168.1.13",
      os: "Ubuntu 20.04",
      cpu: "2 vCPUs",
      memory: "4 GB",
      storage: "80 GB SSD", 
      uptime: "0 days",
      location: "Frankfurt",
      created: "2024-01-28"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "running":
        return <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Running</Badge>;
      case "stopped":
        return <Badge variant="secondary">Stopped</Badge>;
      case "restarting":
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">Restarting</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getActionButton = (status: string, vmId: string) => {
    if (status === "running") {
      return (
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Square className="h-3 w-3" />
            Stop
          </Button>
          <Button size="sm" variant="outline">
            <RotateCcw className="h-3 w-3" />
            Restart
          </Button>
        </div>
      );
    } else if (status === "stopped") {
      return (
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
          <Play className="h-3 w-3" />
          Start
        </Button>
      );
    } else {
      return (
        <Button size="sm" variant="outline" disabled>
          <RotateCcw className="h-3 w-3 animate-spin" />
          {status}
        </Button>
      );
    }
  };

  const filteredVMs = vmInstances.filter(vm =>
    vm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vm.ip.includes(searchTerm) ||
    vm.os.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const vmStats = {
    total: vmInstances.length,
    running: vmInstances.filter(vm => vm.status === "running").length,
    stopped: vmInstances.filter(vm => vm.status === "stopped").length,
    totalCpu: vmInstances.reduce((acc, vm) => acc + parseInt(vm.cpu.split(" ")[0]), 0),
    totalMemory: vmInstances.reduce((acc, vm) => acc + parseInt(vm.memory.split(" ")[0]), 0)
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Virtual Machines</h1>
            <p className="text-muted-foreground">Manage your virtual machine instances</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Create VM
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total VMs</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vmStats.total}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Running</CardTitle>
              <Play className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">{vmStats.running}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stopped</CardTitle>
              <Square className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vmStats.stopped}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total CPU</CardTitle>
              <Cpu className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vmStats.totalCpu}</div>
              <p className="text-xs text-muted-foreground">vCPUs</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Memory</CardTitle>
              <MemoryStick className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vmStats.totalMemory}</div>
              <p className="text-xs text-muted-foreground">GB RAM</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search VMs by name, IP, or OS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* VM Management Tabs */}
        <Tabs defaultValue="instances" className="space-y-4">
          <TabsList>
            <TabsTrigger value="instances">VM Instances</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="snapshots">Snapshots</TabsTrigger>
          </TabsList>

          <TabsContent value="instances" className="space-y-4">
            <div className="grid gap-4">
              {filteredVMs.map((vm) => (
                <Card key={vm.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Server className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{vm.name}</CardTitle>
                          <CardDescription>ID: {vm.id}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(vm.status)}
                        {getActionButton(vm.status, vm.id)}
                        <Button size="sm" variant="ghost">
                          <Settings className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">IP Address:</span>
                          <span>{vm.ip}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MonitorSpeaker className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">OS:</span>
                          <span>{vm.os}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Cpu className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">CPU:</span>
                          <span>{vm.cpu}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MemoryStick className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Memory:</span>
                          <span>{vm.memory}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <HardDrive className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Storage:</span>
                          <span>{vm.storage}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Uptime:</span>
                          <span>{vm.uptime}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Network className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Location:</span>
                          <span>{vm.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Created:</span>
                          <span>{vm.created}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resource Monitoring</CardTitle>
                <CardDescription>Monitor CPU, memory, and disk usage across all VMs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monitoring dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>VM Templates</CardTitle>
                <CardDescription>Create and manage virtual machine templates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Template management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="snapshots" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>VM Snapshots</CardTitle>
                <CardDescription>Manage virtual machine snapshots and backups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Snapshot management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}