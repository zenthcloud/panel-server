import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  Plus, 
  Settings, 
  Shield,
  Users,
  Inbox,
  Send,
  Archive,
  AlertTriangle
} from "lucide-react";

export default function Email() {
  const emailAccounts = [
    {
      id: "email-001",
      address: "admin@company.com",
      domain: "company.com",
      storage: "2.1 GB / 5 GB",
      status: "active",
      lastActivity: "2 minutes ago"
    },
    {
      id: "email-002", 
      address: "support@company.com",
      domain: "company.com",
      storage: "890 MB / 5 GB",
      status: "active",
      lastActivity: "1 hour ago"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Email Services</h1>
            <p className="text-muted-foreground">Manage email accounts and mail settings</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Create Email Account
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Email Accounts</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
              <Archive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.0</div>
              <p className="text-xs text-muted-foreground">GB of 10 GB</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Emails Today</CardTitle>
              <Send className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">sent/received</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Spam Blocked</CardTitle>
              <Shield className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">23</div>
              <p className="text-xs text-muted-foreground">today</p>
            </CardContent>
          </Card>
        </div>

        {/* Email Management */}
        <Tabs defaultValue="accounts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="accounts">Email Accounts</TabsTrigger>
            <TabsTrigger value="forwarders">Forwarders</TabsTrigger>
            <TabsTrigger value="aliases">Aliases</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="accounts" className="space-y-4">
            <div className="grid gap-4">
              {emailAccounts.map((account) => (
                <Card key={account.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{account.address}</CardTitle>
                          <CardDescription>{account.domain}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                          {account.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Inbox className="h-3 w-3" />
                          Webmail
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="h-3 w-3" />
                          Settings
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Archive className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Storage:</span>
                          <span>{account.storage}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Last Activity:</span>
                          <span>{account.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forwarders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Email Forwarders</CardTitle>
                <CardDescription>Forward emails from one address to another</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Email forwarder management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aliases" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Email Aliases</CardTitle>
                <CardDescription>Create alternative email addresses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Email alias management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Email Security</CardTitle>
                <CardDescription>Spam protection and security settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Security settings coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}