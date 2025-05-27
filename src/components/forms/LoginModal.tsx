"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function LoginModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState<
    "default" | "error" | "success"
  >("default");
  //   const [showDialog, setShowDialog] = useState(false);
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
    setLoginStatus("default");

    try {
      // Handle remember me functionality
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
        localStorage.removeItem("rememberMe");
      }

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();

      console.log("Login response:", data);

      if (data.success) {
        setLoginStatus("success");
        router.push("/admin/dashboard");
        onOpenChange(false); // Close the modal
        // router.push("/admin/dashboard");
      } else {
        setLoginStatus("error");
      }
    } catch (error: unknown) {
      setLoginStatus("error");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="sr-only">Login</Dialog.Title>
          <Card className="border-emerald-100 shadow-lg rounded-xl">
            <CardHeader className="space-y-1 flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold">
                  Log in to your account
                </CardTitle>
                <CardDescription>
                  Enter your email and password to access your dashboard
                </CardDescription>
              </div>
              <Dialog.Close asChild>
                <button className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@examples.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border-emerald-300 focus:ring-emerald-500 mt-1 ${loginStatus === "error" ? "border-red-500 focus:border-emerald-500" : ""}`}
                  aria-invalid={loginStatus === "error"}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
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
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-emerald-300 focus:ring-emerald-500 mt-1 ${loginStatus === "error" ? "border-red-500 focus:border-emerald-500" : ""}`}
                    aria-invalid={loginStatus === "error"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
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

              <div className="flex items-center justify-between w-full">
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
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                {loginStatus === "error" && (
                  <p className="text-xs text-red-600 ml-2 whitespace-nowrap">
                    Invalid email or password.
                  </p>
                )}
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
            </CardFooter>
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
