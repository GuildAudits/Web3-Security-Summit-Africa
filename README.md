# Web3-Security-Summit-Africa


Here’s a **starter README.md** you can drop in the root of
`GuildAudits/Web3-Security-Summit-Africa` and adapt as you like.
It documents the project itself, the build/deploy flow (GitHub Actions → Proxmox VM → Cloudflare Tunnel), and basic local-dev instructions.

---

````markdown
# Web3 Security Summit Africa Website

This repository contains the source code and deployment workflow for the official **Web3 Security Summit Africa** website.  
The site is built with **Vite + React + TypeScript**, served by **Nginx** on a Proxmox VM, and published securely to the Internet through a **Cloudflare Tunnel**.

---

## 🌐 Live Site
**https://web3securitysummitafrica.com**

---

## ✨ Features
- ⚡️ **Vite + React + TypeScript** frontend
- 🖥 **Proxmox VM** hosting
- 🔒 **Cloudflare Tunnel** for HTTPS and private-IP protection
- 🤖 **GitHub Actions** CI/CD: every push to `main` automatically rebuilds and deploys

---

## 🛠 Local Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/GuildAudits/Web3-Security-Summit-Africa.git
   cd Web3-Security-Summit-Africa
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run a dev server**

   ```bash
   npm run dev
   ```

   The app is available at [http://localhost:5173](http://localhost:5173) (default Vite port).

4. **Build for production**

   ```bash
   npm run build
   ```

   Output is generated in the `dist/` folder.

---

## 🚀 Deployment Architecture

```
GitHub Repo  ──► GitHub Actions CI/CD
                   │
                   ▼
   Proxmox VM (Ubuntu)
      ├─ Node.js (for build)
      └─ Nginx serves /home/web3sec/Web3-Security-Summit-Africa/dist
                   │
                   ▼
         Cloudflare Tunnel
                   │
                   ▼
       https://web3securitysummitafrica.com
```

### Proxmox VM

* Ubuntu 22.04 guest
* Nginx configured to serve the built site:

  ```
  root /home/web3sec/Web3-Security-Summit-Africa/dist;
  ```

  Uses a loop-proof `__index.html` alias for SPA routing.

### Cloudflare Tunnel

* Provides a public hostname and free SSL without exposing the home IP.
* Config (`/etc/cloudflared/config.yml`):

  ```yaml
  tunnel: guild-audit
  credentials-file: /etc/cloudflared/<UUID>.json
  ingress:
    - hostname: web3securitysummitafrica.com
      service: http://localhost:80
    - hostname: www.web3securitysummitafrica.com
      service: http://localhost:80
    - service: http_status:404
  ```

---

## ⚙️ Continuous Deployment

**Workflow file:** `.github/workflows/deploy.yml`

* Triggers on every push to `main` or manual dispatch.
* Steps:

  1. Connects to the VM over SSH (via Cloudflare Tunnel or public IP).
  2. Ensures Node.js ≥ 18 and required packages.
  3. Pulls latest code, installs dependencies, and runs `npm run build`.
  4. Fixes file permissions and reloads Nginx.
  5. Performs a quick local health check (`curl http://localhost`).

### Required GitHub Secrets

Set these under **Settings → Secrets and variables → Actions**:

| Name             | Example                                           | Purpose                                         |
| ---------------- | ------------------------------------------------- | ----------------------------------------------- |
| `DEPLOY_HOST`    | `ssh.web3securitysummitafrica.com` (or public IP) | Hostname the runner can SSH into                |
| `DEPLOY_USER`    | `web3sec`                                         | Linux user on the VM                            |
| `DEPLOY_SSH_KEY` | *private key text*                                | SSH key that matches the VM’s `authorized_keys` |

---

## 🧩 Directory Layout

```
├─ src/               # React components & pages
├─ public/            # Static assets copied as-is
├─ index.html         # Main HTML template (edit <title> etc.)
├─ vite.config.ts     # Vite configuration
├─ package.json
└─ dist/              # Auto-generated production build
```

---

## 🔑 Maintenance Tips

* **Update dependencies** periodically:

  ```bash
  npm outdated && npm update
  ```
* **Restart tunnel** if you change config:

  ```bash
  sudo systemctl restart cloudflared
  ```
* **Check logs**:

  * Nginx: `sudo tail -f /var/log/nginx/error.log`
  * Cloudflare Tunnel: `journalctl -u cloudflared -f`

---

## 📄 License

[MIT](LICENSE)

---

### Contributors

* **Guild Audits** – Web3 Security Summit Africa Organizers
* Community contributions welcome! Submit issues or pull requests.

```

---

You can save this as `README.md` in the root of the repo.  
Adjust any details (hardware specs, maintainer list, etc.) to match your exact setup.
```
