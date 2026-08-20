---
ms.date: 03/13/2026
ms.update-cycle: 180-days
title: "Requirements for Copilot Pages and Copilot Notebooks"
ms.reviewer: dancost, tonchan
ms.author: odocspr
author: officedocspr5
manager: jtremper
recommendations: true
audience: Admin
f1.keywords:
- NOCSH
ms.service: loop
ms.localizationpriority: medium
ms.topic: how-to
ms.collection:
- Strat_SP_admin
- Microsoft 365-collaboration
- Tier3
- essentials-manage
- magic-ai-copilot
search.appverid:
- SPO160
- MET150
description: "Requirements for Copilot Pages and Copilot Notebooks in your organization"
ai-usage: ai-assisted
---

# Requirements for Copilot Pages and Copilot Notebooks

## At a glance

| Requirement | Details |
| --- | --- |
| **Copilot Pages license** | OneDrive license (requires OneDrive site) |
| **Copilot Notebooks license** | Microsoft 365 Copilot license |
| **Network** | Allow connections per [Office 365 URLs and IP address ranges](/microsoft-365/enterprise/urls-and-ip-address-ranges) |
| **Real-time collaboration** | Allow WebSocket traffic to `*.svc.ms` and `*.office.com` |
| **Full features** | Exchange Online mailbox required for @mentions |

## Overview

Copilot Pages create `.page` files and Copilot Notebooks create `.pod` files, both stored in the same user-owned SharePoint Embedded container used by Loop My workspace. Storage counts against your organization's SharePoint quota. For details, see [storage](cpcn-storage.md). To control creation, see [admin policies](cpcn-admin-configuration.md).

## Network requirements

### URLs and IP address ranges

Verify that required network connections are allowed. Copilot Pages and Copilot Notebooks rely on core Microsoft 365 and SharePoint infrastructure. Configure your firewall or proxy settings according to [Office 365 URLs and IP address ranges](/microsoft-365/enterprise/urls-and-ip-address-ranges).

### WebSocket connections

Allow WebSocket traffic to `*.svc.ms` and `*.office.com` endpoints. WebSocket connections enable real-time collaboration features including live editing, presence indicators, and shared cursors.

## License requirements

### Copilot Pages

Users need a OneDrive license and an active OneDrive site. If a OneDrive site exists and the license is later removed, Copilot Pages continue to work.

### Copilot Notebooks

Users need the [Microsoft 365 Copilot license](/microsoft-365/copilot/microsoft-365-copilot-licensing).

## Exchange Online requirement

For full functionality including @mentions, users need an Exchange Online mailbox. Users with Exchange On-Premises mailboxes have limited capabilities.

## Relationship to Loop components

Copilot Pages and Copilot Notebooks are independent of Loop. You can enable or disable them separately from Loop in your organization. Their personal content uses the same user-owned SharePoint Embedded container as Loop My workspace. The container is named either "Pages" or "My workspace" depending on which app creates it first.

The single user-owned container is created when a user first needs one of these experiences and at least one of the relevant creation policies allows it. If *Create Loop workspaces in Loop* is disabled but *Create and view Copilot Pages and Copilot Notebooks* is enabled, creating a Copilot Page or Notebook can still create the container. If *Create and view Copilot Pages and Copilot Notebooks* is disabled but *Create Loop workspaces in Loop* is enabled, opening Loop My workspace can still create that same container.

To prevent the single user-owned container from being created, disable both policies for the same user.

To share Copilot Pages as interactive components in Teams, Outlook, Whiteboard, OneNote, or the Loop app, Loop components must be enabled. Without Loop components enabled in the Microsoft 365 ecosystem, Copilot Pages are only interactive within the Microsoft 365 Copilot app and supported chat experiences. For details on enabling Loop components, see [Loop admin policies](loop-admin-configuration.md).

## Related articles

- [Admin policies](cpcn-admin-configuration.md)
- [Storage](cpcn-storage.md)
- [Permissions](cpcn-permission.md)
- [Summary of compliance capabilities](cpcn-compliance-summary.md)
- [Managing SharePoint Embedded containers](cpcn-loop-spe-management.md)
