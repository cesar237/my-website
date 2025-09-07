---
title: "Presenting at Systor 2025: Kernel Asynchronous APIs for VPN Performance"
date: 2025-03-16
draft: false
tags: ["personal", "blog", "research", "systor"]
---

# Exciting News: Presenting at Systor 2025

I'm thrilled to announce that I'll be presenting my work at the Systor 2025 virtual event! This is a fantastic opportunity to share my research with the systems community and connect with fellow researchers and practitioners.

## Paper Details

I'll be presenting our paper **"The Impact of Kernel Asynchronous APIs on the Performance of a Kernel VPN"** co-authored with Djob Mvondo, Julia Lawall, and Yerom-David Bromberg. The paper will be published in the Proceedings of the 18th ACM International Systems and Storage Conference (SYSTOR '25), 2025.

### Abstract

Linux kernel VPNs suffer from severe performance degradation under high load due to execution order inversion (EoI), a phenomenon where packet recombination functions preempt earlier pipeline stages. This leads to severe latency spikes and throughput reductions. We investigate kernel threads and workqueues as alternative kernel asynchronous APIs to address these limitations, achieving up to a 4.7× increase in throughput while reducing tail latency by 65%. These results demonstrate the importance of selecting appropriate kernel asynchronous APIs for kernel-level network applications.

Stay tuned for more details about the presentation schedule. Looking forward to engaging discussions and valuable feedback from the Systor community!