import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Server, 
  Globe, 
  Database, 
  Mail, 
  FileText,
  CreditCard,
  HelpCircle
} from "lucide-react";

const quickActions = [
  { title: "New Website", icon: <Globe className="h-4 w-4" />, variant: "default" as const },
  { title: "Create VPS", icon: <Server className="h-4 w-4" />, variant: "default" as const },
  { title: "New Database", icon: <Database className="h-4 w-4" />, variant: "default" as const },
  { title: "Email Account", icon: <Mail className="h-4 w-4" />, variant: "default" as const }
];

export function QuickActions() {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {quickActions.map((action) => (
            <Button 
              key={action.title}
              variant={action.variant}
              className="w-full justify-start"
              size="sm"
            >
              {action.icon}
              <span className="ml-2">{action.title}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Usage & Billing */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Usage & Billing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Plan</span>
              <Badge variant="secondary">Pro</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Next Invoice</span>
              <span className="text-sm font-medium">€99.99</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Due Date</span>
              <span className="text-sm font-medium">Jan 15, 2024</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            View Invoice
          </Button>
        </CardContent>
      </Card>

      {/* Support */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            Support & Help
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help Center
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Mail className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}