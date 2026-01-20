"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Role = "distributor" | "retailer" | null;

const RoleSelectionPage = () => {
  const router = useRouter();

  const [role, setRole] = useState<Role>(null);

  const isSelected = (value: Role) =>
    role === value
      ? "border-blue-600 ring-2 ring-blue-500/30 "
      : "border-slate-200 ";

  const handleGoToRole = () => {
    if (role === "distributor") {
      router.push("/distributor");
    } else if (role === "retailer") {
      router.push("/retailer");
    }
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4">
      {/* CONTENT */}
      <main className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight dark:text-gray-200">
            Join Our Network
          </h1>
          <p className="mt-2 text-lg text-slate-500">
            First, tell us who you are.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Distributor */}
          <button
            type="button"
            onClick={() => setRole("distributor")}
            className={`rounded-xl border p-6 text-left transition-all hover:border-blue-600 focus:outline-none ${isSelected(
              "distributor",
            )}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
              <Image
                src="/warehouse-small.png"
                alt="Warehouse"
                width={24}
                height={24}
                className="w-6 h-6"
              />{" "}
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-gray-200">
              I am a Distributor
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Manage inventory, fulfill orders, and supply to a network of
              retailers.
            </p>
          </button>

          {/* Retailer */}
          <button
            type="button"
            onClick={() => setRole("retailer")}
            className={`rounded-xl border p-6 text-left transition-all hover:border-blue-600 focus:outline-none ${isSelected(
              "retailer",
            )}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
              <Image
                src="/storefront.png"
                alt="Storefront"
                width={24}
                height={24}
                className="w-6 h-6"
              />{" "}
            </div>
            <p className="text-lg font-bold text-slate-900 dark:text-gray-200">
              I am a Retailer
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Place orders from distributors, manage stock, and sell to
              consumers.
            </p>
          </button>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center mb-14">
          <button
            disabled={!role}
            onClick={handleGoToRole}
            className={`h-12 w-full max-w-xs rounded-lg font-bold transition-all
              ${
                role
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-300 text-white cursor-not-allowed"
              }`}
          >
            Continue
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="mb-2 text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Log in
            </Link>
          </p>
          <p className="text-xs text-slate-400">© 2024 SupplyChain App, Inc.</p>
        </div>
      </main>
    </div>
  );
};

export default RoleSelectionPage;
