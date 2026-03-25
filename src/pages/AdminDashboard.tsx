import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogOut, Users, Handshake, Clock, CheckCircle, XCircle } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type PartnerSubmission = Tables<"partner_submissions">;
type ProgramApplication = Tables<"program_applications">;

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  reviewed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  accepted: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  rejected: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

const StatusBadge = ({ status }: { status: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status] || statusColors.pending}`}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { isAdmin, loading: authLoading } = useAdminAuth();
  const [partners, setPartners] = useState<PartnerSubmission[]>([]);
  const [applications, setApplications] = useState<ProgramApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    setLoading(true);
    const [partnersRes, appsRes] = await Promise.all([
      supabase.from("partner_submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("program_applications").select("*").order("created_at", { ascending: false }),
    ]);
    if (partnersRes.data) setPartners(partnersRes.data);
    if (appsRes.data) setApplications(appsRes.data);
    setLoading(false);
  };

  const updatePartnerStatus = async (id: string, status: string) => {
    await supabase.from("partner_submissions").update({ status }).eq("id", id);
    setPartners((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  const updateAppStatus = async (id: string, status: string) => {
    await supabase.from("program_applications").update({ status }).eq("id", id);
    setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <h1 className="font-heading text-xl font-bold text-foreground">FE Hub Admin</h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{applications.length}</p>
                <p className="text-xs text-muted-foreground">Applications</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Handshake className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{partners.length}</p>
                <p className="text-xs text-muted-foreground">Partners</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {applications.filter((a) => a.status === "pending").length}
                </p>
                <p className="text-xs text-muted-foreground">Pending</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {applications.filter((a) => a.status === "accepted").length}
                </p>
                <p className="text-xs text-muted-foreground">Accepted</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="applications">
          <TabsList className="mb-6">
            <TabsTrigger value="applications">Program Applications</TabsTrigger>
            <TabsTrigger value="partners">Partner Submissions</TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Program Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {applications.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No applications yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Name</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Email</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Tech Interest</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Date</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-3 px-2 font-medium text-foreground">{app.full_name}</td>
                            <td className="py-3 px-2 text-muted-foreground">{app.email}</td>
                            <td className="py-3 px-2 text-muted-foreground">{app.tech_interest || "—"}</td>
                            <td className="py-3 px-2 text-muted-foreground">
                              {new Date(app.created_at).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-2">
                              <StatusBadge status={app.status} />
                            </td>
                            <td className="py-3 px-2">
                              <Select value={app.status} onValueChange={(v) => updateAppStatus(app.id, v)}>
                                <SelectTrigger className="w-28 h-8 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="reviewed">Reviewed</SelectItem>
                                  <SelectItem value="accepted">Accepted</SelectItem>
                                  <SelectItem value="rejected">Rejected</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Partner Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {partners.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No partner submissions yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Organization</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Contact</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Email</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Type</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Date</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                          <th className="text-left py-3 px-2 font-medium text-muted-foreground">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {partners.map((p) => (
                          <tr key={p.id} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-3 px-2 font-medium text-foreground">{p.org_name}</td>
                            <td className="py-3 px-2 text-muted-foreground">{p.contact_name}</td>
                            <td className="py-3 px-2 text-muted-foreground">{p.email}</td>
                            <td className="py-3 px-2 text-muted-foreground">{p.org_type}</td>
                            <td className="py-3 px-2 text-muted-foreground">
                              {new Date(p.created_at).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-2">
                              <StatusBadge status={p.status} />
                            </td>
                            <td className="py-3 px-2">
                              <Select value={p.status} onValueChange={(v) => updatePartnerStatus(p.id, v)}>
                                <SelectTrigger className="w-28 h-8 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="reviewed">Reviewed</SelectItem>
                                  <SelectItem value="accepted">Accepted</SelectItem>
                                  <SelectItem value="rejected">Rejected</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
