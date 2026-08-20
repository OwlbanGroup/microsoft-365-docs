---
title: "Plan for network devices that connect to Microsoft 365 services"
ms.author: scotv
author: kelleyvice-msft
manager: scotv
ms.date: 06/27/2024
audience: ITPro
ms.topic: article
ms.service: microsoft-365-enterprise
ms.subservice: network
ms.localizationpriority: medium
ms.collection: 
- scotvorg
- Ent_O365
- must-keep
f1.keywords:
- CSH
ms.custom: 
- Adm_O365
- network
search.appverid:
- MET150
- MOE150
- BCS160
ms.assetid: 073433ca-3511-4db9-b173-7a2edca57691
description: "Summary: Describes considerations for network capacity, WAN accelerators, and load balancing devices that are used to connect to Microsoft 365."
---

# Plan for network devices that connect to Microsoft 365 services

*This article applies to both Microsoft 365 Enterprise and Office 365 Enterprise.*
  
Some network hardware may have limitations on the number of concurrent sessions that are supported. For organizations having more than 2,000 users, we recommend that they monitor their network devices to ensure they're capable of handling the additional Microsoft 365 service traffic. Simple Network Management Protocol (SNMP) monitoring software can help you do this.

This article is part of [Network planning and performance tuning for Microsoft 365](./network-planning-and-performance.md).

On-premises outgoing Internet proxy settings also affect connectivity to Microsoft 365 services for your client applications. You must also configure your network proxy devices to allow connections for Microsoft cloud services URLs and applications. Every organization is different.
  
## Determining Network Capacity

Every network device that exists on a connection has its capacity limit. These devices include the client and server network adapters, routers, switches, and hubs that interconnect them. Adequate network capacity means that none of them are saturated. Monitoring network activity is essential to help ensure that the actual loads on all network devices are less than their maximum capacity. Network capacity affects proxy device performance.
  
In most situations, the Internet connection bandwidth sets the limit for the amount of traffic. Weak performance during peak traffic hours is probably caused by excessive use of the Internet link. This situation also applies to a branch office scenario, where branch office proxy server computers are connected to the proxy device at the branch's headquarters over a slow Wide Area Network (WAN) link.
  
To test network capacity, monitor the network activity on the proxy network interface. If it's more than 75 percent of the maximum bandwidth of any network interface, consider increasing the bandwidth of the network infrastructure that's inadequate. Or, consider using advanced features, such as HTTP compression.
  
## WAN Accelerators

If your organization uses wide area network (WAN) acceleration proxy appliances, you may encounter issues when you access the Microsoft 365 services. You may need to optimize your network device or devices to ensure that your users have a consistent experience when accessing Microsoft 365. For example, Microsoft 365 services encrypt some Microsoft 365 content and the TCP header. Your device may not be able to handle this kind of traffic.
  
Read our support statement about [Using WAN Optimization Controller or Traffic/Inspection devices with Microsoft 365](/troubleshoot/microsoft-365-apps/office-suite-issues/office-365-third-party-network-devices).
  
## Hardware and Software Load-balancing Devices

Your organization needs to use a hardware load balancer (HLB) or a Network Load Balancing (NLB) solution to distribute requests to your Active Directory Federation Services (AD FS) servers and/or your Exchange hybrid servers. Load-balancing devices control the network traffic to the on-premises servers. These servers are crucial in helping to ensure the availability of single sign-on and Exchange hybrid deployment.
  
We provide a software-based NLB solution built into Windows Server. Microsoft 365 supports this solution to achieve load balancing.
  
## Firewalls and proxies

For more details on configuring firewalls and proxies to connect to Microsoft 365, see [Managing Microsoft 365 endpoints](/microsoft-365/enterprise/managing-office-365-endpoints) and [Assessing Microsoft 365 network connectivity](assessing-network-connectivity.md).

## Related content

- [Setup guides for Microsoft 365 services](setup-guides-for-microsoft-365.md)
- [Microsoft 365 Enterprise overview](microsoft-365-overview.md)