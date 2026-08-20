---
title: "Monitor Microsoft 365 connectivity"
ms.author: scotv
author: kelleyvice-msft
manager: scotv
ms.date: 05/01/2024
audience: ITPro
ms.topic: article
ms.service: microsoft-365-enterprise
ms.subservice: administration
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
- MOE150
- BCS160
ms.assetid: 53cdb60c-a6b2-4848-b3ff-e7b75dc3fd1f
description: "In this article, learn about the tools and techniques you can use to monitor and maintain Microsoft 365 connectivity."
---

# Monitor Microsoft 365 connectivity

Once you've deployed Microsoft 365, you can maintain Microsoft 365 connectivity using some of the tools and techniques below. You should understand the official [Service Health and Continuity](/office365/servicedescriptions/office-365-platform-service-description/service-health-and-continuity) guidelines and our [Best practices for using Microsoft 365 on a slow network](best-practices-for-using-office-365-on-a-slow-network.md). You might also want the [Microsoft 365 admin app](https://blogs.office.com/2015/03/13/administer-on-the-go-with-the-updated-office-365-admin-app/).
  
## Monitoring Microsoft 365 Connectivity

|Type of monitoring |Description |
|:-----|:-----|
|**Getting notified of new Microsoft 365 endpoints** <br/> |If you're [Managing Microsoft 365 endpoints](managing-office-365-endpoints.md) and want to receive notifications when we publish new endpoints, you can subscribe to our RSS feed using your favorite RSS reader. Here's how to [subscribe via Outlook](https://go.microsoft.com/fwlink/p/?LinkId=532416) or you can [have the RSS feed updates emailed to you](https://go.microsoft.com/fwlink/p/?LinkId=532417).  <br/> |
|**Use System Center to Monitor Microsoft 365** <br/> |If you're using Microsoft System Center, you can download the [Microsoft System Center Operations Manager Management Pack for Microsoft 365](https://www.microsoft.com/download/details.aspx?id=103379) to begin monitoring Microsoft 365 today. For more detailed guidance, see the management pack operations guide. <br/> |
|**Monitoring the health of Azure ExpressRoute** <br/> |If you're connecting to Microsoft 365 using Azure ExpressRoute for Microsoft 365, you'll want to ensure that you're using both the Microsoft 365 Service Health Dashboard and [Azure Resource health](https://azure.microsoft.com/blog/reduce-troubleshooting-time-with-azure-resource-health/) <br/> |
|**Using Microsoft Entra Connect Health with AD FS** <br/> |If you're using AD FS for single sign-on with Microsoft 365, you'll want to begin [using Microsoft Entra Connect Health to monitor your AD FS infrastructure](/azure/active-directory/hybrid/how-to-connect-health-adfs).  <br/> |
|**Programmatically monitor Microsoft 365** <br/> |Refer to our guidance on the [Microsoft 365 Management API](/office/office-365-management-api/office-365-management-apis-overview).  <br/> |

## Related content

- [Configure Microsoft 365 Enterprise services and applications](configure-services-and-applications.md)
- [Get your organization ready for Microsoft 365 Enterprise](get-your-organization-ready-for-office-365.md)
- [Network planning and performance tuning for Microsoft 365](network-planning-and-performance.md)
- [Microsoft 365 integration with on-premises environments](microsoft-365-integration.md)
- [Managing Microsoft 365 endpoints](managing-office-365-endpoints.md)
