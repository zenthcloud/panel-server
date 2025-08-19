import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Globe, 
  Plus, 
  Settings, 
  MoreHorizontal,
  Search,
  Calendar,
  Shield,
  Network,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Clock
} from "lucide-react";

const domains = [
  {
    name: "example.com",
    status: "active",
    expiryDate: "2024-12-15",
    autoRenew: true,
    nameservers: ["ns1.cloudpanel.com", "ns2.cloudpanel.com"],
    ssl: "active",
    dnsRecords: 12
  },
  {
    name: "mystore.net",
    status: "active", 
    expiryDate: "2024-11-22",
    autoRenew: true,
    nameservers: ["ns1.cloudpanel.com", "ns2.cloudpanel.com"],
    ssl: "active",
    dnsRecords: 8
  },
  {
    name: "testsite.org",
    status: "expiring",
    expiryDate: "2024-01-30",
    autoRenew: false,
    nameservers: ["ns1.cloudpanel.com", "ns2.cloudpanel.com"],
    ssl: "expired",
    dnsRecords: 5
  },
  {
    name: "newproject.io",
    status: "pending",
    expiryDate: "2025-03-10",
    autoRenew: true,
    nameservers: ["pending", "pending"],
    ssl: "pending",
    dnsRecords: 0
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <CheckCircle className="h-4 w-4 text-success" />;
    case "expiring":
      return <AlertTriangle className="h-4 w-4 text-warning" />;
    case "pending":
      return <Clock className="h-4 w-4 text-muted-foreground" />;
    default:
      return <CheckCircle className="h-4 w-4 text-success" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
    case "expiring":
      return <Badge className="bg-warning/10 text-warning border-warning/20">Expiring Soon</Badge>;
    case "pending":
      return <Badge className="bg-muted text-muted-foreground border-border">Pending</Badge>;
    default:
      return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
  }
};

const Domains = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);

  const filteredDomains = domains.filter(domain =>
    domain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Domain Management</h1>
            <p className="text-muted-foreground">Manage your domains, DNS settings, and SSL certificates</p>
          </div>
          <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary hover:bg-primary-hover">
                <Plus className="h-4 w-4 mr-2" />
                Register Domain
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Register New Domain</DialogTitle>
                <DialogDescription>
                  Search and register a new domain name for your website.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Enter domain name (e.g., mydomain.com)" />
                <Button className="w-full">Search Domain</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Domains</p>
                  <p className="text-2xl font-bold">{domains.length}</p>
                </div>
                <Globe className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Domains</p>
                  <p className="text-2xl font-bold">{domains.filter(d => d.status === 'active').length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Expiring Soon</p>
                  <p className="text-2xl font-bold">{domains.filter(d => d.status === 'expiring').length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">SSL Active</p>
                  <p className="text-2xl font-bold">{domains.filter(d => d.ssl === 'active').length}</p>
                </div>
                <Shield className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search domains..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Domains List */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Your Domains ({filteredDomains.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredDomains.map((domain) => (
                <div key={domain.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(domain.status)}
                    <div>
                      <h3 className="font-semibold text-foreground">{domain.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Expires: {domain.expiryDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          SSL: {domain.ssl}
                        </span>
                        <span className="flex items-center gap-1">
                          <Network className="h-3 w-3" />
                          {domain.dnsRecords} DNS records
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(domain.status)}
                    {domain.autoRenew && (
                      <Badge variant="outline" className="text-xs">Auto-renew</Badge>
                    )}
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Settings className="h-4 w-4 mr-2" />
                          Manage DNS
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="h-4 w-4 mr-2" />
                          SSL Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Whois Info
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="h-4 w-4 mr-2" />
                          Renewal Settings
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Domain Management Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Domain Overview</TabsTrigger>
            <TabsTrigger value="dns">DNS Management</TabsTrigger>
            <TabsTrigger value="ssl">SSL Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Domain Portfolio Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Recent Activity</h4>
                    <div className="space-y-2 text-sm">
                      <p>• example.com SSL certificate renewed</p>
                      <p>• mystore.net DNS records updated</p>
                      <p>• testsite.org renewal reminder sent</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Upcoming Renewals</h4>
                    <div className="space-y-2 text-sm">
                      <p>• testsite.org expires in 12 days</p>
                      <p>• mystore.net expires in 48 days</p>
                      <p>• example.com expires in 156 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dns" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>DNS Management</CardTitle>
                <p className="text-sm text-muted-foreground">Manage DNS records for your domains</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Network className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Select a domain from the list above to manage its DNS records</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ssl" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>SSL Certificate Management</CardTitle>
                <p className="text-sm text-muted-foreground">Manage SSL certificates for your domains</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">SSL certificates are automatically managed for all domains</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Domains;