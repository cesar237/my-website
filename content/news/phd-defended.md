---
title: "Ph.D. Defended!"
date: 2026-06-03
draft: false
tags: ["phd"]
---

I am happy to share that I successfully defended my Ph.D. thesis, **“Understanding Linux Kernel Scheduling Bottlenecks,”** on **June 3, 2026**, at **Inria Rennes**.

This defense marks the end of an intense and rewarding research journey conducted at **Inria Rennes**, **IRISA**, and the **University of Rennes**. My thesis provides a comprehensive study of limitations in Linux kernel scheduling mechanisms and asynchronous execution APIs, and analyzes their impact on the performance of multithreaded applications and the energy efficiency of Intel heterogeneous CPUs.

I am deeply grateful to my supervisors, [**David Bromberg**](https://www.linkedin.com/in/ybromberg?originalSubdomain=fr), [**Julia Lawall**](https://who.paris.inria.fr/Julia.Lawall/), and [**Djob Mvondo**](https://djobiii2078.github.io/), for their guidance, trust, and support throughout this Ph.D. I also sincerely thank my committee members: [**Gaël Thomas**](https://pages.saclay.inria.fr/gael.thomas/) and [**Jean-Marc Menaud**](http://menaud.fr/) for reviewing the manuscript, and **Bernabé Batchakui** and [**Camélia Slimani**](https://scholar.google.com/citations?user=gfs36YEAAAAJ&hl=en) for serving as examiners and for the insightful discussion during the defense.

<!-- The first part of my work focuses on the scalability of multithreaded kernel networking workloads, using WireGuard as a case study. Through large-scale experiments, I identified a scheduling pathology that I call **Execution Order Inversion**, where the order in which kernel execution contexts are scheduled conflicts with the actual dependency order of the packet-processing pipeline. This mismatch can significantly limit throughput and increase latency under high concurrency. I evaluated several mitigations and showed that aligning execution contexts with pipeline dependencies can substantially improve performance.

The second part of my thesis investigates the performance and energy-efficiency tradeoffs of Intel heterogeneous CPUs composed of Performance cores and Efficient cores. This work studies how different core configurations, scheduling choices, and DVFS governors affect real applications and benchmarks. It also introduces **HaaTool**, a benchmarking framework designed to automate the evaluation of heterogeneous CPU configurations and help reason about performance, energy, power, temperature, and EDP tradeoffs. -->

<!-- These contributions also led to a publication at **SYSTOR 2025**, where part of this work on WireGuard scalability and Linux scheduling behavior was presented. -->

This Ph.D. has been a challenging but formative experience. It strengthened my interest in operating systems, performance analysis, kernel-level engineering, and the design of efficient computing systems.

I am now looking forward to the next step: bringing this expertise to industry, ideally in an **R&D systems engineering** role focused on operating systems, performance, infrastructure, networking, or low-level software systems.
