---
title: Auditing & Logging for the Employee Self-Service agent
f1.keywords: NOCSH
ms.author: semani
author: sthilkumar
manager: swgulati
ms.reviewer: semani
ms.date: 02/23/2026
audience: Admin
ms.topic: article
ms.service: microsoft-365-copilot
ms.subservice: ess-agent
ms.custom: ess-agent
ms.localizationpriority: medium
ms.collection: m365copilot
description: Learn how to setup auditing & logging for Employee Self-Service agent
appliesto:
- ✅ Microsoft 365 Copilot
---

# Auditing and logging

The Employee Self-Service agent is built on Copilot and Power Platform. You can use auditing capabilities from these platforms to log and monitor usage.

### Audit with Microsoft Purview

Microsoft Purview provides features for a comprehensive audit record of end-user activities when interacting with agents. [Learn how to audit user interactions with agents in Microsoft Purview.](/power-platform/release-plan/2024wave2/microsoft-copilot-studio/audit-user-interactions-agents-purview)

[Audit logs for Copilot and AI activities](/purview/audit-copilot).

### Audit with Azure Application Insights

You can [use Azure Application Insights to capture telemetry for custom Copilot Agents.](/microsoft-copilot-studio/advanced-bot-framework-composer-capture-telemetry?tabs=webApp)

### Security information and event management (SIEM)

For any SIEM integrations, use Application Insights or the Power Platform Dataverse auditing capabilities.

[Manage Dataverse auditing](/power-platform/admin/manage-dataverse-auditing)

[Integrate Microsoft Sentinel and Power Platform to better monitor and protect your low-code solutions.](https://www.microsoft.com/power-platform/blog/power-apps/integrating-microsoft-sentinel-and-power-platform-to-better-monitor-and-protect-your-low-code-solutions/?msockid=1614e9ffd18265002a76fcabd0016456)
