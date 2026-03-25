import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail } from "lucide-react";

type Mode = "login" | "signup" | "forgot";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<Mode>("login");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (mode === "forgot") {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        toast({ title: "Reset failed", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Email sent", description: "Check your inbox for the password reset link." });
        setMode("login");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast({ title: "Login failed", description: error.message, variant: "destructive" });
      } else {
        navigate("/admin");
      }
    }
    setLoading(false);
  };

  const icon = mode === "forgot" ? <Mail className="h-6 w-6 text-primary" /> : <Lock className="h-6 w-6 text-primary" />;
  const title = mode === "forgot" ? "Reset Password" : "Admin Login";
  const subtitle = mode === "forgot" ? "Enter your email to receive a reset link" : "Sign in to access the admin dashboard";
  const buttonLabel = mode === "signup" ? (loading ? "Creating account..." : "Create Account") : mode === "forgot" ? (loading ? "Sending..." : "Send Reset Link") : (loading ? "Signing in..." : "Sign In");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-warm">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <CardTitle className="font-heading text-2xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@fehub.ch" />
            </div>
            {mode !== "forgot" && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" minLength={6} />
              </div>
            )}
            <Button type="submit" variant="hero" className="w-full" disabled={loading}>
              {buttonLabel}
            </Button>
          </form>
          <div className="mt-4 text-center space-y-1">
            {mode === "login" && (
              <>
                <button type="button" onClick={() => setMode("forgot")} className="block w-full text-sm text-muted-foreground hover:text-primary hover:underline">
                  Forgot your password?
                </button>
                <button type="button" onClick={() => setMode("signup")} className="block w-full text-sm text-primary hover:underline">
                  Need an account? Sign up
                </button>
              </>
            )}
            {mode === "signup" && (
              <button type="button" onClick={() => setMode("login")} className="text-sm text-primary hover:underline">
                Already have an account? Sign in
              </button>
            )}
            {mode === "forgot" && (
              <button type="button" onClick={() => setMode("login")} className="text-sm text-primary hover:underline">
                Back to sign in
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
