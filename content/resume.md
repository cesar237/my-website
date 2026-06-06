---
title: "Resume"
date: 2026-05-24
draft: false
---

**GitHub:** [CesarMH](https://github.com/cesar237) | **LinkedIn:** [cesairemh](https://linkedin.com/in/cesairemh) | **Email:** [nohocesar@gmail.com](mailto:nohocesar@gmail.com)

**[Download CV (PDF)](/Cesaire_CV.pdf)**

---

## Summary

I am a finishing PhD student in Computer Science with expertise in **operating systems, Linux kernel scheduling, performance optimization, and heterogeneous CPU architectures**. Skilled in **low-level systems programming** (C/C++, Go), benchmarking, and prototyping secure and high-performance systems, I have strong experience in leading projects, communicating technical results, and collaborating across teams. I am also experienced in **full-stack web development** (Python/Django, React, PostgreSQL) and cloud-native deployment. Seeking roles as R&D Engineer, Software Engineer, Systems Engineer, or Solutions Architect.

---

## Publications

- **The Impact of Kernel Asynchronous APIs on the Performance of a Kernel VPN** - *Honore Cesaire Mounah, Djob Mvondo, Julia Lawall, Yerom-David Bromberg* - Proceedings of the 18th ACM International Systems and Storage Conference (SYSTOR '25), 2025. [DOI](https://doi.org/10.1145/3757347.3759133)
  
  **Abstract:** Linux kernel VPNs suffer from severe performance degradation under high load due to execution order inversion (EoI), a phenomenon where packet recombination functions preempt earlier pipeline stages. This leads to severe latency spikes and throughput reductions. We investigate kernel threads and workqueues as alternative kernel asynchronous APIs to address these limitations, achieving up to a 4.7x increase in throughput while reducing tail latency by 65%. These results demonstrate the importance of selecting appropriate kernel asynchronous APIs for kernel-level network applications.
  

---

## Work Experience

### Ph.D. Researcher in Computer Science @ Inria Rennes

**Dec. 2022 – Present**

**Topic:** Understanding Linux Scheduling Bottlenecks  
**Supervisors:** Prof. David Bromberg (University of Rennes), Dr. Julia Lawall (Inria Paris), Dr. Djob Mvondo (University of Rennes)

#### Optimizing Linux Kernel Networking (WireGuard VPN)

- Investigated performance bottlenecks in the WireGuard VPN module, identifying Execution Order Inversion (EoI) as the root cause of a **5× throughput drop**
- Designed and implemented asynchronous kernel APIs (kernel threads, workqueues) to resolve the bottleneck
- **Impact:** Achieved **4.7× higher throughput** and **65% lower tail latency**, directly improving real-world VPN performance

#### Energy Efficiency of Heterogeneous CPUs

- Built an automated benchmarking framework to evaluate Intel heterogeneous CPUs (P-cores/E-cores) across DVFS governors and workload types
- Delivered actionable insights for **scheduler design** and **CPU tuning**, balancing performance and energy efficiency

**Core responsibilities:** End-to-end project ownership (design, prototyping, benchmarking), Linux kernel instrumentation, experimental automation, and dissemination (publications, conference talks, technical reports).

### Research Intern @ IRISA Rennes

**Jun. 2022 – Sept. 2022**

**Supervisors:** Prof. David Bromberg, Dr. Djob Mvondo (University of Rennes)

#### Scalability Evaluation of WireGuard VPN

- Designed and executed large-scale experiments to test WireGuard under high-load scenarios
- **Skills gained:** Experimental design, large-scale VPN deployment, automated benchmarking, data-driven performance analysis

#### Network-based Stalkerware Detection

- Evaluated the effectiveness of **TinyCheck**, a network-based stalkerware detection tool, against commercial anti-malware solutions
- Extended TinyCheck for deployment as a **Function-as-a-Service (FaaS)** on an OpenFaaS platform
- **Skills gained:** Android automation and testing, FaaS deployment, network security evaluation

### FullStack Developer Intern @ YowYob (ENSPY)

**Jan. 2022 – Jun. 2022**

- Developed an **invoicing microservice REST API** using Python, Django REST Framework, and PostgreSQL
- Contributed to the **KSM-ERP** solution powering shop management: backend (Python/Django/PostgreSQL) and frontend (React)

### Backend Developer Intern @ Labo IA (ENSPY)

**Jun. 2021 – Sept. 2021**

- Built a **payment receipt generation microservice** for Compuclinic, a clinic management platform
- **Stack:** Python, Django (backend), React (frontend)

---

## Projects

### TunnelR

[GitHub](https://github.com/cesar237)  
A VPN-agnostic split tunneling CLI tool for secure, context-aware network routing. *Stack: Go, networking, VPN technologies.*

### HaaTool

[GitHub](https://github.com/cesar237)  
An automated framework for testing the performance and energy efficiency of heterogeneous CPUs across DVFS governors. *Stack: Bash, Python, perf, Jupyter.*

### InodeGuard

[GitHub](https://github.com/cesar237/inodeguard)  
An eBPF-based file lifecycle hook framework enabling per-file security policies and side-effect monitoring. *Stack: C, eBPF, Linux kernel.*

### PolicyFS

[GitHub](https://github.com/cesar237/PolicyFS)  
A FUSE-based filesystem with WebAssembly programmable hooks for per-file policy enforcement and programmable I/O interception. *Stack: C, FUSE, WebAssembly (Wasmtime).*

### Vente Enchères

[GitHub](https://github.com/cesar237/vente-enchere)  
A real-time auction platform enabling local agricultural producers to sell products directly to wholesalers with price control. *Stack: React, Python, Django, WebSocket, PostgreSQL.*

### LedMatrixGenerator

[GitHub](https://github.com/cesar237/led-matrix-motif-generator)  
A React application for generating binary patterns readable by EEPROMs to drive LED matrix displays. *Stack: React, JavaScript, embedded systems interfacing.*

---

## Education

**2022 – present:** PhD at **INRIA, University of Rennes, France**

**2017 – 2022:** Engineering Degree in Computer Science, **National Advanced School of Engineering, Yaounde, Cameroon**

---

## Technical Skills

**Programming Languages:** **C/C++** (expert), **Go**, **Python** (proficient), Bash, JavaScript

**Systems & Infrastructure:** **Linux Kernel Development** (scheduling, networking, drivers), Docker, Kubernetes, QEMU, FUSE, WebAssembly, CI/CD (GitHub Actions, Jenkins)

**Performance & Optimization:** **Performance profiling** (perf, ftrace, eBPF), benchmarking frameworks, scalability testing, memory optimization, DVFS analysis, energy–performance tradeoffs

**Networking & Security:** **VPN technologies** (WireGuard, OpenVPN), TCP/IP stack, network performance tuning, security analysis, traffic monitoring

**Databases:** PostgreSQL, SQLite

**Development Tools:** Git, GDB, Valgrind, automated testing frameworks, build systems (Make, CMake), Ansible

---

## Languages

- French (Native)
- English (Fluent in speaking and writing)

---
