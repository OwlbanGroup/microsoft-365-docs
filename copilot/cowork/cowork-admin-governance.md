---
title: "Manage Cowork for your organization"
description: "Details on managing Microsoft 365 Copilot Cowork for organizations."
ms.date: 03/30/2026
ms.topic: overview
author: leeclontz
manager: KumarVivek
ms.author: leeclontz
ms.reviewer: angieandrews
ms.service: microsoft-365-copilot
ms.subservice: cowork
ai-usage: ai-assisted
ms.collection: bap-ai-copilot
appliesto:
- Microsoft 365 Copilot
---

# Manage Cowork for your organization

[!INCLUDE [cowork-top-note](../includes/cowork-top-note.md)]
[!INCLUDE [cowork-preview](../includes/cowork-preview.md)]

Microsoft 365 Copilot Cowork is available to all Microsoft 365 Copilot tenants. IT administrators can control who has access to it, deploy it on behalf of users, and pin it in the Copilot experience using the same governance tools in Microsoft 365 Copilot.

## Default availability

By default, Cowork is *available to all licensed users* in your tenant. This means:

- You can discover and install it yourself from the Agent Store.
- It's *not pre-installed* or pre-pinned for you&mdash;no action is required to enable it.
- If you don't want to use it, you can simply leave it uninstalled.

Admins can change this default at any time.

## How to find and install Cowork

You can discover Cowork through the **Agent Store**, the built-in marketplace within Microsoft 365 Copilot.

In Microsoft 365 Copilot (web or desktop):

1. Open Microsoft 365 Copilot.
1. In the left navigation pane, select **All agents** under the **Agents** header.
1. Search for **Cowork** and select **Add**.

In Microsoft Teams:

1. In the right navigation pane, select **Open Agents and bots**.
1. Search for **Cowork** and select **Add**.

Once you add it, **Cowork** appears in your list in the Copilot rail.

> [!NOTE]
> You can only install Cowork if your organization makes it available to you. If you restrict access to specific groups, only those users see it in the Agent Store.

Learn more about how users interact with Cowork in [Use agents in Microsoft 365 Copilot](/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide).

## Control access with the Microsoft 365 admin center

You manage Cowork the same way you manage any agent, through the **Microsoft 365 admin center**.

**Navigation:** [admin.microsoft.com](https://admin.microsoft.com) > **Copilot** > **Agents** > **All agents**.

From there, find **Cowork** and select it to manage its settings. The key availability controls are:

| Setting | Effect |
|---|---|
| **Available to all users** | All licensed Copilot users in your tenant can find and install Cowork (default). |
| **Available to specific users or groups** | Only the users or security groups you specify can find and install Cowork. |
| **Blocked** | No users in your tenant can access Cowork. |

To restrict access to specific security groups or user segments, select **Available to specific users or groups** and add the relevant groups. This approach works best for phased rollouts or departmental pilots.

> [!NOTE]
> Country or region-based scoping isn't a supported option for agent availability. Use security groups to represent geographic or organizational segments.

Get a full walkthrough of these controls in [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps).

## Pre-install Cowork for your users

Instead of waiting for users to install Cowork themselves, admins can deploy it on behalf of all users or a specific group. Deploying an agent automatically installs it, and users don't need to take any other action.

To deploy Cowork:

1. In the admin center, select **Copilot** > **Agents** > **All agents**.
1. Select **Cowork**.
1. Under **Deploy to**, select **Entire organization** or **Specific users/groups**.
1. Select **Deploy**.

When you deploy Cowork, it's installed for the target users and appears in their list. The deployment process accepts users' permissions on their behalf.

Learn more in [Deploy agents in Microsoft 365 Copilot](../agent-essentials/agent-lifecycle/agent-deploy.md).

## Pre-pin Cowork in the Copilot rail

Pinning makes Cowork persistently visible in the Copilot rail (the right-side panel) without the user needing to open the store. Pinning is a separate step from deployment&mdash;an agent must be deployed before it can be pinned.

To pin Cowork for your users:

1. In the admin center, select **Copilot** > **Agents** > **Manage pinned agents**.
1. Select **Add a pinned agent** > **Cowork**.
1. Choose whether to pin it for the entire organization or specific groups.
1. Save your changes.

You'll see **Cowork** in the Copilot rail the next time you open Copilot. If you prefer, you can unpin admin-pinned agents from your own view.

Learn more in [Manage pinned agents for Microsoft 365 Copilot](/admin/manage/agent-registry).

## Security and compliance

Microsoft 365 Copilot applies the same security and compliance controls to Cowork as it does to all agents.

### Data loss prevention

Microsoft Purview DLP policies apply to Copilot agent interactions. Copilot agents, including Cowork, block sensitive information from being processed. This sensitive information includes content that matches DLP rules or documents with sensitivity labels. Learn more in [Learn about the Microsoft 365 Copilot location for DLP](/purview/dlp-microsoft365-copilot-location-learn-about).

### Audit logs

Microsoft Purview audit logs capture all interactions with Cowork under **Copilot activities**. Log entries include the agent name, agent ID, and version. Audit Standard provides these logs at no extra cost. Learn more in [Audit log activities for Microsoft 365 Copilot](/purview/audit-copilot).

### Data residency

By default, Cowork stores conversation content in your tenant's local region geography. It also supports Advanced Data Residency (ADR) and Multi-Geo configurations. Learn more in [Data residency for Microsoft 365 Copilot](/microsoft-365/enterprise/m365-dr-service-copilot).

## Related content

- [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps)
- [Agent availability settings](/microsoft-365/copilot/agent-essentials/agent-lifecycle/agent-availability)
- [Deploy agents in Microsoft 365 Copilot](/microsoft-365/copilot/agent-essentials/agent-lifecycle/agent-deploy)
- [Microsoft 365 Copilot agent installation overview](/microsoft-365/copilot/copilot-agent-install)
- [Agents admin guide for Microsoft 365 Copilot](/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide)