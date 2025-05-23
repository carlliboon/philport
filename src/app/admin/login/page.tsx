"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";
import { Loader2, EyeOff, Eye, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { LoginErrorDialog } from "./LoginErrorDialog";
import {
  browserLocalPersistence,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState<
    "default" | "error" | "success"
  >("default");

  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    const remember = localStorage.getItem("rememberMe") === "true";

    if (remember) {
      if (savedEmail) setEmail(savedEmail);
      if (savedPassword) setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    const auth = getAuth();

    try {
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
        localStorage.removeItem("rememberMe");
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      const docRef = doc(db, "roles", uid);
      const roleDoc = await getDoc(docRef);
      const role = roleDoc.exists() ? roleDoc.data().role : "user";

      if (role === "admin") {
        setLoginStatus("success");
        router.push("/admin/dashboard");
      } else {
        setLoginStatus("error");
        toast("Access denied. You are not an admin.");
      }
    } catch (error) {
      setLoginStatus("error");
      setShowDialog(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-emerald-50 flex items-center justify-between p-5 shadow-md">
        <Link href={"/"} className="flex items-center text-emerald-700">
          <ChevronLeft />
          <span>Back</span>
        </Link>
      </header>
      <LoginErrorDialog open={showDialog} onOpenChange={setShowDialog} />
      <main
        className={`flex-1 flex items-center justify-center bg-gradient-to-b from-${loginStatus === "error" ? "red" : "emerald"}-50 to-white py-12`}
      >
        <div className="container md:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-screen-xl mx-auto px-4">
          <div className="w-full lg:w-1/2 space-y-4">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Client Portal
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome Back to{" "}
              <span className="text-emerald-600">ShopifySupportPro</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              Log in to access your client dashboard, view your support tickets,
              and manage your Shopify store support services.
            </p>
          </div>
          <div className="w-full lg:w-1/2 max-w-md">
            <Card
              className={`border-${loginStatus === "error" ? "red" : "emerald"}-100 shadow-md`}
            >
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">
                  Log in to your account
                </CardTitle>
                <CardDescription>
                  Enter your email and password to access your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-emerald-200 focus-visible:ring-emerald-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Password
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-emerald-600 hover:text-emerald-700"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-emerald-200 focus-visible:ring-emerald-600 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-700"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) =>
                        setRememberMe(Boolean(checked))
                      }
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  onClick={handleLogin}
                  disabled={loading || email === "" || password === ""}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin h-4 w-4" />
                      Logging in...
                    </span>
                  ) : (
                    "Log in"
                  )}
                </Button>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Sign up
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
