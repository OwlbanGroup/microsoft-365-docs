---
title: Agent management roles and permissions in Microsoft 365 admin center
description: Understand agent management roles and permissions within Microsoft 365 admin center.
#customer intent: As an IT admin, I must understand roles and permissions as they apply to agent management in Microsoft 365 admin center.
f1.keywords:
- NOCSH
ms.author: erikre
author: erikre
manager: scotv
ms.date: 04/21/2026
ms.update-cycle: 180-days
audience: Admin
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.subservice: agent-management
ms.localizationpriority: medium
ms.collection:
- Tier2
- scotvorg
- M365-subscription-management
- Adm_O365
- Adm_TOC
- m365copilot
- magic-ai-copilot
- operations-pod
ms.custom:
- AdminSurgePortfolio
- AdminTemplateSet
search.appverid:
- BCS160
- MET150
- MOE150
---

# Agent management roles and permissions in Microsoft 365 admin center

Access to agent management in Microsoft 365 admin center is controlled by [Microsoft Entra admin roles](/entra/identity/role-based-access-control/permissions-reference). 

While several administrative and security roles can view agent-related information for monitoring and reporting purposes, only select roles are authorized to perform governance actions such as approving agent requests or assigning ownership.

The following table provides agent management capabilities in the Microsoft 365 admin center:

| Role | View insights and organization   data | View agent registry information | Install, modify, approve, and manage agent configurations |
|:---:|:---:|:---:|:---:|
| Global Administrator | ✔ | ✔ | ✔ |
| AI Administrator | ✔ | ✔ | ✔ |
| Global Reader | ✔ | ✔ | ✖ |
| AI Reader | ✔ | ✔ | ✖ |
| Security Administrator | ✔ | ✔ | ✖ |
| Security Reader | ✔ | ✔ | ✖ |
| Security Operator | ✔ | ✔ | ✖ |
| Reports Reader | ✔ | ✔ | ✖ |
| User Experience Success Manager | ✔ | ✔ | ✖ |
| User Account Administrator | ✔ | ✖ | ✖ |

The **AI Administrator** and **Global Administrator** roles have tenant‑wide visibility and governance authority, where-as by contrast, product-specific admin roles allow governance only within the boundaries of their products (such as Power Platform Administrator and Fabric Administrator).

> [!IMPORTANT]
>
> Use and assign roles with the fewest permissions to accomplish tasks. Accounts with lower permission roles help improve security for your organization. Global Administrator is a highly privileged role. Limit its use to emergency scenarios when you can't use an existing role. For more information, see [About admin roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles).

For more information about roles and permissions related to agents, see [About administrator roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles).