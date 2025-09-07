---
title: "Papers"
date: 2025-09-08
draft: false
tags: ["kernel", "VPN", "performance", "asynchronous APIs", "Linux", "networking", "SYSTOR"]
---

## Publications

### 2025

- **The Impact of Kernel Asynchronous APIs on the Performance of a Kernel VPN** - *Honore Cesaire Mounah, Djob Mvondo, Julia Lawall, Yerom-David Bromberg* - Proceedings of the 18th ACM International Systems and Storage Conference (SYSTOR '25), 2025. [DOI](https://doi.org/10.1145/3757347.3759133)
  
  **Abstract:** Linux kernel VPNs suffer from severe performance degradation under high load due to execution order inversion (EoI), a phenomenon where packet recombination functions preempt earlier pipeline stages. This leads to severe latency spikes and throughput reductions. We investigate kernel threads and workqueues as alternative kernel asynchronous APIs to address these limitations, achieving up to a 4.7\texttimes{} increase in throughput while reducing tail latency by 65\%. These results demonstrate the importance of selecting appropriate kernel asynchronous APIs for kernel-level network applications.
