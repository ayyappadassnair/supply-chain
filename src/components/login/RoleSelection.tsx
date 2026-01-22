"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/common/Button";
import {
  ALREADY_HAVE_AN_ACCOUNT,
  CONTINUE,
  COPYRIGHT,
  DISTRIBUTOR_DESCRIPTION,
  FIRST_TELL_US_WHO_YOU_ARE,
  I_AM_A_DISTRIBUTOR,
  I_AM_A_RETAILER,
  JOIN_OUR_NETWORK,
  LOGIN_IN,
  RETAILER_DESCRIPTION,
} from "@/constants/constants";
import { Role } from "@/constants/models";

const RoleSelectionPage = () => {
  const router = useRouter();

  const [role, setRole] = useState<Role>(null);

  const isSelected = (value: Role) =>
    role === value
      ? "border-blue-600 ring-2 ring-blue-500/30 "
      : "border-slate-200 ";

  const handleGoToRole = () => {
    if (role === "distributor") {
      router.push("/distributor/signup");
    } else if (role === "retailer") {
      router.push("/retailer/signup");
    }
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4">
      {/* CONTENT */}
      <main className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight dark:text-gray-200">
            {JOIN_OUR_NETWORK}
          </h1>
          <p className="mt-2 text-lg text-slate-500 dark:text-gray-200">
            {FIRST_TELL_US_WHO_YOU_ARE}
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Distributor */}
          <Button
            type="button"
            onClick={() => setRole("distributor")}
            className={`rounded-xl border text-left transition-all hover:border-blue-600 focus:outline-none  ${isSelected(
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
              {I_AM_A_DISTRIBUTOR}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-gray-100">
              {DISTRIBUTOR_DESCRIPTION}
            </p>
          </Button>

          {/* Retailer */}
          <Button
            type="button"
            onClick={() => setRole("retailer")}
            className={`rounded-xl border py-[1.5rem] text-left transition-all hover:border-blue-600 focus:outline-none ${isSelected(
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
              {I_AM_A_RETAILER}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-gray-100">
              {RETAILER_DESCRIPTION}
            </p>
          </Button>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center mb-14">
          <Button
            disabled={!role}
            onClick={handleGoToRole}
            className={`h-12 w-full max-w-xs rounded-lg font-bold transition-all
              ${
                role
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-300 text-white cursor-not-allowed"
              }`}
          >
            {CONTINUE}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="mb-2 text-sm text-slate-500">
            {ALREADY_HAVE_AN_ACCOUNT}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              {LOGIN_IN}
            </Link>
          </p>
          <p className="text-xs text-slate-400">{COPYRIGHT}</p>
        </div>
      </main>
    </div>
  );
};

export default RoleSelectionPage;
