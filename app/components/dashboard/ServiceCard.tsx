import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  status: "active" | "inactive" | "pending";
  icon: ReactNode;
  actions?: string[];
  details?: Record<string, string>;
}

export function ServiceCard({ title, subtitle, status, icon, actions = [], details = {} }: ServiceCardProps) {
  const statusColors = {
    active: "bg-success text-success-foreground",
    inactive: "bg-muted text-muted-foreground",
    pending: "bg-warning text-warning-foreground"
  };

  return (
    <Card className="shadow-card hover:shadow-hover transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className={statusColors[status]} variant="secondary">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
          {actions.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {actions.map((action) => (
                  <DropdownMenuItem key={action}>{action}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </CardHeader>
      
      {Object.keys(details).length > 0 && (
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4 text-sm">
            {Object.entries(details).map(([key, value]) => (
              <div key={key}>
                <p className="text-muted-foreground">{key}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}