import {
  ACCESS_VERIFIED_RETAILERS,
  PARTNER_WITH_US,
  REAL_TIME_INVENTORY_INSIGHTS,
  SIMPLIFIED_LOGISTICS,
  STREAMLINE_YOUR_SUPPLY_CHAIN,
} from "@/constants/constants";
import Image from "next/image";

const LeftPanel = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between p-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-black leading-tight">
          {PARTNER_WITH_US}
          <br />
          {STREAMLINE_YOUR_SUPPLY_CHAIN}
        </h1>

        <ul className="space-y-4 text-lg text-gray-600">
          <li className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#155dfc"
            >
              <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            {ACCESS_VERIFIED_RETAILERS}
          </li>
          <li className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#155dfc"
            >
              <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>{" "}
            {REAL_TIME_INVENTORY_INSIGHTS}
          </li>
          <li className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#155dfc"
            >
              <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>{" "}
            {SIMPLIFIED_LOGISTICS}
          </li>
        </ul>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden">
        <Image
          src="/distributor-banner.png"
          alt="Distributor banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LeftPanel;
