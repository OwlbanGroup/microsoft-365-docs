---
title: "NAT support with Microsoft 365"
ms.author: scotv
author: kelleyvice-msft
manager: scotv
ms.date: 06/26/2024
audience: Admin
ms.topic: overview
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
- seo-marvel-apr2020
- network
search.appverid:
- MET150
- BCS160
ms.assetid: 170e96ea-d65d-4e51-acac-1de56abe39b9
description: This article provides details about how to approximate the number of clients you can use per IP address in your organization using NAT.
---

# NAT support with Microsoft 365

*This article applies Microsoft 365 Enterprise.*

Previously, guidance suggested that the maximum number of Exchange clients you should use per IP address to connect to Microsoft 365 was about 2,000 clients per network port.
  
## Why use NAT?

By using NAT, thousands of people on a corporate network can "share" a few publicly routable IP addresses.
  
Most corporate networks use private (RFC1918) IP address space. Private address space is allocated by the Internet Assigned Numbers Authority (IANA) and intended solely for networks that don't route directly to and from the global Internet.
  
To provide Internet access to devices on a private IP address space, organizations use gateway technologies like firewalls and proxies that provide network address translation (NAT) or port address translation (PAT) services. These gateways make traffic from internal devices to the Internet (including Microsoft 365) appear to be coming from one or more publicly routable IP addresses. Each outbound connection from an internal device translates to a different source TCP port on the public IP address. 
  
## Why do you need to have so many connections open to Microsoft 365 at the same time?

Outlook may open eight or more connections (in situations where there are add-ins, shared calendars, mailboxes, etc.). Because there are a maximum of 64,000 ports available on a Windows-based NAT device, there can be a maximum of 8,000 users behind an IP address before the ports are exhausted. If customers are using non-Windows OS-based devices for NAT, the total available ports are dependent on what NAT device or software is being used. In this scenario, the maximum number of ports could be less than 64,000. Availability of ports is also affected by other factors such as Windows restricting 4,000 ports for its own use, which reduces the total number of available ports to 60,000. There may be other applications, such as Internet Explorer, that could connect at the same time, requiring additional ports.
  
## Calculating maximum supported devices behind a single public IP address with Microsoft 365

To determine the maximum number of devices behind a single public IP address, you should monitor network traffic to determine peak port consumption per client. Also, a peak factor should be used for the port usage (minimum 4). 
  
 **Use the following formula to calculate the number of supported devices per IP address:**
  
Maximum supported devices behind a single public IP address = (64,000 - restricted ports)/(Peak port consumption + peak factor)
  
 **For example, if the following were true:**
  
- **Restricted ports:** 4,000 for the operating system
- **Peak port consumption:** 6 per device
- **Peak factor:** 4

Then, the maximum supported devices behind a single public IP address = (64,000 - 4,000)/(6 + 4) = 6,000
  
With the release of Microsoft 365 hosting pack, included in the updates from September 2011 for Microsoft Outlook 2007, or November 2011 for Microsoft Outlook 2010, or a later update, the number of connections from Outlook (both Outlook 2007 with Service Pack 2 and Outlook 2010) to Exchange can be as few as 2. You'll need to factor in the different operating systems, user behaviors, and so on, to determine the minimum and maximum number of ports that your network will require at peak.
  
If you want to support more devices behind a single public IP address, follow the steps outlined to assess the maximum number of devices that can be supported:
  
Monitor network traffic to determine peak port consumption per client. You should collect this data:
  
- From multiple locations
- From multiple devices
- At multiple times

Use the preceding formula to calculate the maximum users per IP address that can be supported in their environment.
  
There are various methods for distributing client load across additional public IP addresses. Strategies available depend on the capabilities of the corporate gateway solution. The simplest solution is to segment your user address space and statically "assign" a number of IP addresses to each gateway. Another alternative that many gateway devices offer is the ability to use a pool of IP addresses. The benefit of the address pool is that it's much more dynamic and less likely to require adjustment as your user base grows.
  
## Related content

- [Managing Microsoft 365 endpoints](managing-office-365-endpoints.md)
- [Microsoft 365 endpoints FAQ](managing-office-365-endpoints.md)
