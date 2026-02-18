# Kubernetes Observability Demo

## Overview
This project demonstrates a **fully local Kubernetes Observability and Reliability setup** using only **raw Kubernetes YAML manifests** — no Helm charts, no operators, and no cloud services.

The objective is to showcase monitoring, fault simulation, and CI/CD deployment workflows in a **portable, reproducible environment**.

---

## Tech Stack

- Kubernetes (MicroK8s)
- Docker
- Node.js
- Prometheus
- Grafana
- GitHub Actions
- YAML Manifests (No Helm / No Operators)

---

## Features

- Node.js application with multiple replicas
- Health and readiness probes
- Prometheus metrics endpoint (`/metrics`)
- Grafana dashboards for visualization
- Community dashboard integration
- Pod crash simulation
- CPU burn simulation
- Fully local deployment 
- Portable across Kubernetes clusters

---

## Project Structure

```
kubernetes-observability-demo/
├── .github/
│   └── workflows/
│       └── ci.yaml
├── kubernetes/
│   └── workflows/
│        ├── app/
│        └── monitoring/
├── src/                   
├── tests/                  
├── .dockerignore 
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md

```

---

## Prerequisites

- Linux VM (VirtualBox or similar)
- Docker installed
- MicroK8s installed and running
- kubectl configured
- Git installed

---

## Installation & Deployment

### 1. Clone Repository
```bash
git clone <repo-url>
cd kubernetes-observability-demo
```

### 2. Deploy to Kubernetes

- Create namespaces
```bash
kubectl create -f /home/rahulan/kubernetes-observability-demo/kubernetes/app/namespace.yaml
kubectl create -f /home/rahulan/kubernetes-observability-demo/kubernetes/monitoring/namespace.yaml
```

- Deploy Node.js app
```bash
kubectl create -f /home/rahulan/kubernetes-observability-demo/kubernetes/app/deployment.yaml
kubectl create -f /home/rahulan/kubernetes-observability-demo/kubernetes/app/service.yaml
```

- Deploy Prometheus
```bash
kubectl create -f /home/rahulan/kubernetes-observability-demo/kubernetes/monitoring/prometheus/
```

- Deploy Grafana
```bash
kubectl create -f /home/rahulan/kubernetes-observability-demo/kubernetes/monitoring/grafana/
```
---

## Access Services

| Service | URL |
|--------|-----|
| Node App | `http://localhost:30080` |
| Prometheus | `http://localhost:30090` |
| Grafana | `http://localhost:30090` |

**Grafana Default Login**
```
username: admin
password: admin
```

---

## Demo Scenarios

| Endpoint | Purpose |
|---------|--------|
| `/health` | Health check |
| `/ready` | Readiness check |
| `/metrics` | Prometheus metrics |
| `/crash` | Simulate application crash |
| `/burn` | Simulate CPU load |

---

## Skills Demonstrated

- Kubernetes Deployments, Services, ConfigMaps
- Observability with Prometheus & Grafana
- Reliability testing and failure simulation
- CI/CD with GitHub Actions (Self-Hosted)
- YAML-only infrastructure setup
- Dashboard customization and metrics analysis
- Local cluster management and troubleshooting

---

## Notes

- No Helm charts used
- No Kubernetes operators used
- No cloud services required
- Fully portable and reproducible

---
