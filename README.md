# Zenth Cloud Panel Client

**Zenth Cloud Panel Client** is the web-based administration and management interface for the Zenth Cloud ecosystem, developed by Sky Genesis Enterprise. It offers a comprehensive and user-friendly UI for managing users, services, network configurations, and monitoring across all Zenth components.

## 🖥️ Features

- ✅ Responsive web UI for cloud administration
- ✅ User and group management via `ldap-server`
- ✅ Service provisioning and monitoring (mail, SIP, VPN, DHCP, DNS)
- ✅ Role-based access control and permissions
- ✅ Integrated dashboards with real-time metrics from `status-server`
- ✅ CLI-first tooling complement
- ✅ Integration with `api-server` for backend operations
- ✅ Multi-tenant and multi-org support

## 📦 Part of the Zenth Cloud Stack

Zenth Cloud Panel acts as the centralized management console for:

- `ldap-server` – User and access management
- `api-server` – Backend API for all services
- `status-server` – Service health and incidents
- `vpn-server` and `firewall-server` – Network configuration and policies
- `dns-server` and `dhcp-server` – Network infrastructure control
- `mail-server` and `sip-server` – Communications service management

## 🛠️ Technology

- Modern web stack: React or Svelte frontend
- Backend API integration via RESTful calls to `api-server`
- Containerized for easy deployment (Docker, Kubernetes, Proxmox)
- Supports OAuth2 and SSO authentication flows
- Designed for extensibility with plugin support

## 📖 Documentation

Full installation instructions, UI guides, and API references available in `/docs` or on [Documentations](https://docs.zenthcloud.com).

## 🛡️ License

Zenth Panel Server is licensed under the **GNU Affero General Public License v3 (AGPLv3)**. See `./LICENSE` for details.

---

Contributions and feedback are welcome! Visit [Github Organisation](https://github.com/zenthcloud) to get involved.