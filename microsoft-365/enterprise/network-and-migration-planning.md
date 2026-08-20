---
title: "Network and migration planning for Microsoft 365"
ms.author: scotv
author: kelleyvice-msft
manager: scotv
ms.date: 04/15/2024
audience: Admin
ms.topic: upgrade-and-migration-article
ms.service: microsoft-365-enterprise
ms.subservice: network
ms.localizationpriority: medium
ms.collection:
- scotvorg
- Ent_O365
- Strat_O365_Enterprise
- must-keep
f1.keywords:
- CSH
ms.custom: 
- Adm_O365
- seo-marvel-apr2020
- network
search.appverid:
- MET150
- BCS160
ms.assetid: f5ee6c33-bcd7-4b0b-b0f8-dc1d9fb8d132
description: This article contains links to information about network planning, testing, and migration to Microsoft 365.
---

# Network and migration planning for Microsoft 365

*This article applies to Microsoft 365 Enterprise*

This article contains links to information about network planning and testing, and migration to Microsoft 365.
  
Before you deploy for the first time or migrate to Microsoft 365, you can use the information in these articles to estimate the bandwidth you need and then to test and verify that you have enough bandwidth to deploy or migrate to Microsoft 365.

This article is part of [Network planning and performance tuning for Microsoft 365](./network-planning-and-performance.md).

For the steps to optimize your network for Microsoft 365 and other Microsoft cloud platforms and services, see the [Microsoft Cloud Networking for Enterprise Architects](/previous-versions/microsoft-365/solutions/cloud-architecture-models) poster.

## Estimate network bandwidth requirements
<a name="EstimateBandwidthRequirements"> </a>

Using Microsoft 365 might increase the utilization of your organization's internet circuit. It's important to determine if the amount of bandwidth currently available is enough to handle the estimated increase once Microsoft 365 is fully deployed while leaving at least 20% capacity to handle the busiest of days.
  
To estimate the bandwidth, use the following steps:
  
1. Assess the number of clients that will use each internet egress. Let our multi-terabit network handle as much of the connection as possible.

1. Determine which Microsoft 365 services and features will be available for clients to use. You'll likely have groups of people with different services or usage profiles.

1. Measure the network use for a pilot group of clients. Ensure the pilot clients are representative of the different profiles of people in the organization and the different geographic locations. You can cross-check your results against our old calculators for [Exchange](https://techcommunity.microsoft.com/t5/exchange-team-blog/announcing-the-exchange-client-network-bandwidth-calculator-beta/ba-p/601744) and [Microsoft Teams](/microsoftteams/prepare-network).

1. Use the measurements from the pilot group to extrapolate the entire organization's needs and retest to validate the estimations before making any changes to your network.

## Test your existing network
<a name="calculators"> </a>

 **Network tools.** Test and validate your internet bandwidth to determine download, upload, and latency constraints. These tools will help you determine the capabilities of your network for migration as well as after you're fully deployed.

- [Microsoft Remote Connectivity Analyzer](https://go.microsoft.com/fwlink/p/?LinkId=517243): Tests connectivity in your Exchange Online environment.
- Use the [Microsoft Support and Recovery Assistant for Microsoft 365](https://diagnostics.office.com/#/Download?env=SOC) to fix Outlook and Microsoft 365 problems. 
- [Microsoft 365 network connectivity test tool](/microsoft-365/enterprise/office-365-network-mac-perf-onboarding-tool): Tests Microsoft 365 network connectivity.

## Best practices for network planning and improving migration performance for Microsoft 365
<a name="BestPractices"> </a>

Dig a little deeper into these best practices for more information about improving your Microsoft 365 experience.
  
1. Want to get started helping your users right away? See [Best practices for using Microsoft 365 on a slow network](best-practices-for-using-office-365-on-a-slow-network.md) for tips on using Microsoft 365, including SharePoint, Exchange Online, and Lync Online, when your network just isn't cooperating. This article links out to loads of content on TechNet and Support.office.com for optimizing your Microsoft 365 experience and includes information on easy ways to customize your web pages and how to set your internet Explorer settings for the best Microsoft 365 experience.

1. Read [Microsoft 365 Network Connectivity Principles](./microsoft-365-network-connectivity-principles.md) to understand the connectivity principles for securely managing Microsoft 365 traffic and getting the best possible performance. This article will help you understand the most recent guidance for securely optimizing Microsoft 365 network connectivity.

1. Improve mail migration performance by carefully managing the schedule for Windows Updates. You can update your client computers in batches and ensure that all client computers are updated before migrating to Microsoft 365 to regulate the use of network bandwidth. For more information, see [Manually update and configure desktops for Microsoft 365 for the latest updates](https://support.microsoft.com/gp/office-2013-365-update).

1. Microsoft 365 network traffic performs best when it's treated as a trusted internet service and allowed to bypass much of the traditional filtering and scanning that some organizations place on network traffic to untrusted internet services. This typically includes removing outbound processing such as proxy user authentication and packet inspection, as well as ensuring local egress to the internet with the proper Network Address Translation (NAT) and enough bandwidth capacity to handle the increased network requests. Refer to [Managing Microsoft 365 endpoints](managing-office-365-endpoints.md)for additional guidance on configuring your network to handle Microsoft 365 as a trusted internet service on your network.

1. Ensure [Managing Microsoft 365 endpoints](managing-office-365-endpoints.md). The additional traffic going to Microsoft 365 results in an increase of outbound proxy connections and an increase in secure traffic over TLS/SSL.

1. If your outbound proxies require user authentication you might experience slow connectivity or a loss of functionality. Bypassing the authentication requirement for the Microsoft 365 domains can reduce this overhead.

1. If you have a large number of shared calendars and mailboxes, you might see an increase in the number of connections from Outlook to Exchange. For instance, the Outlook client may open up to two additional connections for each shared calendar in use. In this situation, ensure that the egress proxy can handle the connections, or bypass the proxy for connections to Microsoft 365 for Outlook.

1. Determine the maximum number of supported devices for a public IP address and how to load balance across multiple IP addresses. For more information, see [NAT support with Microsoft 365](nat-support-with-microsoft-365.md).

1. If you're inspecting outbound connections from computers on your network, bypassing this filtering to the Microsoft 365 domains will improve connectivity and performance. Additionally, bypassing outbound inspection often removes the need for a single internet egress and enables local internet egress for Microsoft 365 destined network requests.

1. Some customers find internal network settings can affect performance. Settings such as maximum transmission unit (MTU) size, network autonegotiation or autodetection, and suboptimal routes to the internet are common places to look.

## Network planning reference for Microsoft 365
<a name="NetReference"> </a>

These articles contain detailed Microsoft 365 network reference information.
  
- [Managing Microsoft 365 endpoints](managing-office-365-endpoints.md)
- [Content delivery networks](content-delivery-networks.md)
- [External Domain Name System records for Microsoft 365](external-domain-name-system-records.md)
- [IPv6 support in Microsoft 365 services](ipv6-support.md)
- [Microsoft 365 Network Connectivity Principles](./microsoft-365-network-connectivity-principles.md)
- [Plan for network devices that connect to Microsoft 365 services](plan-for-network-devices.md)
- [Setup guides for Microsoft 365 services](setup-guides-for-microsoft-365.md)

## Related content

[Microsoft 365 Enterprise overview](microsoft-365-overview.md)
