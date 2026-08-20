---
title: Manage tools for agents in Microsoft 365 admin center
description: Manage tools for agents in Microsoft 365 admin center.
#customer intent:
f1.keywords:
- NOCSH
ms.author: frankroj
author: frankroj
manager: scotv
ms.date: 05/01/2026
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

# Manage tools for agents in Microsoft 365 admin center

> [!IMPORTANT]
>
> This feature is available for Frontier tenants only. The ability to allow or disallow MCP servers in Microsoft 365 admin center is in the process of rolling out and might not be available in your region yet.

## Overview

The **Tools** page in the [Microsoft 365 admin center](https://admin.microsoft.com/) provides a centralized view of all AI-powered tools and Model Context Protocol (MCP) servers available in your organization. These tools enable administrators to manage interactions with user data, workflows, and requests in a secure and consistent manner.

Each tool listed here represents a service that supports Copilot experiences across Microsoft 365 apps. Administrators can monitor availability, manage access, and ensure compliance with organizational policies.

## Key components on the Tools page

### Toolbar Actions

**Block Tool** - Prevents the selected tool from being used by agents or workflows.
**Unblock Tool** - Restores access to a previously blocked tool.

### Filters

- **Status** - Filter tools by their current state, for example **Available** or **Blocked**.
- **Type** - Narrow down tools by type, for example **MCP Server**.
- **Publisher** - View tools published by Microsoft or other providers.

### Columns

- **Name** - The tool's display name, for example **Microsoft Teams MCP Server**.
- **Status** - Indicates whether the tool is **Available** or **Blocked**.
- **Type** - Identifies the tool category, for example **MCP Server**.
- **Publisher** - Shows the publisher, for example Microsoft for first-party tools.

### Common MCP servers

The following are examples of MCP servers:

- [**Work IQ Copilot**](/microsoft-agent-365/mcp-server-reference/searchtools): Chat with Microsoft 365 Copilot, start a conversation, continue multi‑turn threads, and ground responses with files.
- [**Work IQ Calendar**](/microsoft-agent-365/mcp-server-reference/calendar): Provides scheduling and calendar integration. Create, list, update, and delete events; accept and decline; resolve conflicts.
- [**Work IQ Mail**](/microsoft-agent-365/mcp-server-reference/mail): Powers Copilot for email workflows. Create, update, and delete messages; reply and reply all; semantic search.
- [**Work IQ SharePoint**](/microsoft-agent-365/mcp-server-reference/sharepoint): Enables Copilot to interact with SharePoint content. Upload files; get metadata; search; manage lists.
- [**Work IQ OneDrive**](/microsoft-agent-365/mcp-server-reference/onedrive): Supports file-based Copilot actions in OneDrive. Manage files and folders in user's personal OneDrive.
- [**Work IQ Teams**](/microsoft-agent-365/mcp-server-reference/teams): Enables Copilot to manage chats, channels, and user interactions in Teams. Create, update, and delete chat; add members; post messages; channel operations.
- [**Work IQ User**](/microsoft-agent-365/mcp-server-reference/me): Create and read documents; add comments; reply to comments.
- [**Work IQ Word**](/microsoft-agent-365/mcp-server-reference/word): Supports Copilot features in Word documents.
- [**Dataverse and Dynamics 365**](/microsoft-agent-365/mcp-server-reference/dataverse): CRUD operations and domain-specific actions.

For more information, see [Agent 365 tools catalog](/microsoft-agent-365/tooling-servers-overview#agent-365-tools-catalog).

### Status indicators

- **Available** - Tool is active and ready for use.
- **Blocked** - Tool is disabled and can't be accessed by agents.
