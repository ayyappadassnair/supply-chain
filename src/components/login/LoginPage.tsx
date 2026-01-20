"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const [authMethod, setAuthMethod] = useState<"password" | "otp">("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full h-dvh custom-container">
      <div className="flex flex-col md:flex-row h-full rounded-xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/20 bg-background-light dark:bg-background-dark w-full ">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-gray-900 relative flex flex-col justify-end p-8 md:p-12 rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/login-banner.png')" }}
          />
          <div className="relative z-10 text-white flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">
                webhook
              </span>
              <h1 className="text-2xl font-bold">ChainLink</h1>
            </div>
            <p className="text-4xl lg:text-5xl font-black tracking-tighter">
              Connecting Your Supply Chain, Seamlessly.
            </p>
            <p className="text-gray-300 max-w-md">
              The unified platform for distributors and retailers to optimize
              logistics, manage inventory, and drive growth.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 flex h-full items-center p-8 lg:p-16">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center gap-6">
            {/* Top */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-3xl font-black text-slate-800 dark:text-slate-200">
                  Welcome Back
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Enter your credentials to access your dashboard.
                </p>
              </div>

              {/* Auth Switch */}
              <div className="flex h-12 rounded-lg bg-slate-200/80 dark:bg-slate-800/50 p-1">
                <label className="flex grow items-center justify-center cursor-pointer rounded-md has-[:checked]:bg-background-light has-[:checked]:dark:bg-slate-700/80 has-[:checked]:shadow">
                  <span>Password</span>
                  <input
                    type="radio"
                    className="invisible w-0"
                    checked={authMethod === "password"}
                    onChange={() => setAuthMethod("password")}
                  />
                </label>
                <label className="flex grow items-center justify-center cursor-pointer rounded-md has-[:checked]:bg-background-light has-[:checked]:dark:bg-slate-700/80 has-[:checked]:shadow">
                  <span>OTP</span>
                  <input
                    type="radio"
                    className="invisible w-0"
                    checked={authMethod === "otp"}
                    onChange={() => setAuthMethod("otp")}
                  />
                </label>
              </div>
            </div>

            {/* Middle (Fixed height area) */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {/* Email */}
              <label className="flex flex-col">
                <span className="text-sm font-medium pb-2 text-slate-800 dark:text-slate-200">
                  Email Address
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="form-input h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-4 focus:ring-2 focus:ring-primary/50"
                />
              </label>

              {authMethod === "password" ? (
                <label className="flex flex-col">
                  <span className="text-sm font-medium pb-2 text-slate-800 dark:text-slate-200">
                    Password
                  </span>
                  <div className="flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="form-input h-12 flex-1 rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-4 focus:ring-2 focus:ring-primary/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-4 border border-l-0 border-slate-300 dark:border-slate-700 rounded-r-lg text-slate-400 hover:text-primary"
                    >
                      <span className="material-symbols-outlined">
                        {showPassword ? (
                          <Image
                            src="/visibility.png"
                            alt="visibility-on"
                            height={24}
                            width={24}
                          />
                        ) : (
                          <Image
                            src="/visibility-off.png"
                            alt="visibility-off"
                            height={24}
                            width={24}
                          />
                        )}
                      </span>
                    </button>
                  </div>
                </label>
              ) : (
                <label className="flex flex-col">
                  <span className="text-sm font-medium pb-2 text-slate-800 dark:text-slate-200">
                    OTP
                  </span>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="form-input h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark px-4 text-center tracking-widest focus:ring-2 focus:ring-primary/50"
                  />
                </label>
              )}
            </div>

            {/* Bottom (Reserved space – NO JUMP) */}
            <div
              className={`flex justify-between items-center transition-opacity ${
                authMethod === "password"
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Remember me
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="button"
              className="mt-4 h-12 w-full bg-blue-600 text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Login
            </button>

            {/* CTA */}
            <p className="text-sm text-slate-500 dark:text-slate-400 pt-4 flex justify-between">
              Need an account?{" "}
              <Link
                href="/role-selection"
                className="font-medium text-blue-600 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
