/**
 * ==============================================================
 * Project     : Zenth Cloud – Zenth Panel
 * File        : Sidebar.tsx
 * Version     : 1.0.0
 * Description : Client Sidebar Component
 * Author      : Sky Genesis Enterprise
 * Created on  : 2025-07-19
 * License     : AGPLv3
 * Forked from : N/A
 * Modified by : Liam Dispa <liam.dispa@skygenesisenterprise.com> (2025-07-20)
 * ==============================================================
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaServer,
  FaGlobe,
  FaPhone,
  FaShieldAlt,
  FaQuestionCircle,
  FaCog,
  FaBars,
} from "react-icons/fa";

interface LinkItem {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const links: LinkItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { to: "/vps", label: "Mes VPS", icon: <FaServer /> },
  { to: "/webhosting", label: "Hébergement Web", icon: <FaGlobe /> },
  { to: "/telecom", label: "Télécoms", icon: <FaPhone /> },
  { to: "/security", label: "Sécurité", icon: <FaShieldAlt /> },
  { to: "/support", label: "Support", icon: <FaQuestionCircle /> },
  { to: "/settings", label: "Paramètres", icon: <FaCog /> },
];

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ${
        expanded ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {expanded && <h1 className="text-lg font-bold">Zenth Cloud</h1>}
        <button
          className="text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Réduire la sidebar" : "Développer la sidebar"}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 flex flex-col gap-1">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors rounded ${
                isActive ? "bg-gray-700 font-semibold" : ""
              }`
            }
          >
            <div className="text-lg">{icon}</div>
            {expanded && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;