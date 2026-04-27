---
title: "Resume"
date: 2025-03-16
draft: false
---

**GitHub:** [CesarMH](https://github.com/cesar237) | **LinkedIn:** [cesairemh](https://linkedin.com/in/cesairemh) | **Email:** [nohocesar@gmail.com](mailto:nohocesar@gmail.com)

**[Download CV (PDF)](/CV-Research.pdf)**
<!-- **[Download CV (PDF)](/CV-SE.pdf)** -->


---

## Summary

I am a PhD student in Computer Science (expected June 2026) with expertise in **operating systems, Linux kernel scheduling, performance optimization, and heterogeneous CPU architectures**. Skilled in **low-level systems programming** (C/C++), benchmarking, and prototyping secure and high-performance systems, I have strong experience in leading projects, communicating technical results, and collaborating across teams. Seeking roles as R&D Engineer, Software Engineer, System Developer, or System Architect.

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

---

<!-- ## Projects

### HookFS
[Link to Demo](https://some-link.com)  
A FUSE-based filesystem with WASM programmable hooks for per-file policy enforcement.

### TunnelR
[Link to Demo](https://some-link.com)  
A VPN-agnostic split tunneling tool for secure, context-aware routing.

### Rekindle
[Link to Demo](https://some-link.com)  
A personal relationship management app with AI-assisted reminders and notes.

--- -->

## Education

**2022 - present:** PhD at **INRIA, University of Rennes, France**

**2017 - 2022:** Engineering Degree in Computer Science, **National Advanced School of Engineering, Yaounde, Cameroon**

---

## Technical Skills

**Programming Languages:** **C/C++** (expert), **Python** (proficient), Go, Bash, JavaScript, Assembly

**Systems & Infrastructure:** **Linux Kernel Development** (scheduling, networking, drivers), FreeBSD, Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins)

**Performance & Optimization:** **Performance profiling** (perf, ftrace, eBPF), benchmarking frameworks, scalability testing, memory optimization, NUMA awareness

**Networking & Security:** **VPN technologies** (WireGuard, OpenVPN), TCP/IP stack, network performance tuning, security analysis, traffic monitoring

**Development Tools:** Git, GDB, Valgrind, QEMU, FUSE, WebAssembly, automated testing frameworks, build systems (Make, CMake)

---

## Languages

- French (Native)
- English 

---
