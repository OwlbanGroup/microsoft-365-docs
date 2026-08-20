---
title: "Modern change management for Microsoft 365 - Overview"
ms.author: mabond
author: mkbond007
manager: dansimp
ms.date: 04/15/2026
ms.reviewer: pamelaar
audience: Admin
ms.topic: overview
ms.service: microsoft-365-business
ms.localizationpriority: medium
ms.collection:
- Tier2
- M365-subscription-management
- Adm_O365
- Adm_TOC
ms.custom:
search.appverid: MET150
description: "Proactively plan for change using AI-enabled tools to help your organization assess impact, prioritize work, and make informed decisions."
appliesto: 
- Microsoft 365 admin center
---

# Modern change management for Microsoft 365 - Overview

Organizations now operate in an environment of continuous change. Managing continuous service change using traditional management models can be a challenge for IT admins trying to keep pace.

Microsoft is building modern change management solutions, so that IT admins can enable their organizations to proactively plan for change. By using AI enabled tools, admins can assess impact, prioritize work, and make informed decisions. Modern change management capabilities help IT admins manage risk, meet compliance requirements, and adopt Microsoft 365 features with confidence.

This model gives IT admins [configurable release options](#customize-your-organizations-release-experience-for-microsoft-365) to control rollout timing, an [enhanced Message center](#updated-message-center-interface) for clearer and more actionable communications, and two MCP (Model Context Protocol) Servers&mdash;[Microsoft Release Communications MCP Server](#microsoft-release-communications-mcp-server) and [Microsoft MCP for Enterprise](#microsoft-mcp-server-for-enterprise)&mdash;for AI-assisted change planning.

## Customize your organization's release experience for Microsoft 365

From the Microsoft admin center, you can choose between various release options for Microsoft 365 updates, either during general availability or before general availability.

### General availability

Microsoft thoroughly tests and validates all features and services before release.

**Standard release** delivers fully supported features to your organization at general availability (GA). Standard is the default release option, and Microsoft recommends it for most organizations. If you need to delay features for some users, you can choose standard release for your organization and assign specific users to deferred release.

**Deferred release** delays deferred-capable GA features for up to 30 days, giving admins additional preparation time. After 30 days, the features appear to your deferred release users. If your organization has additional validation requirements, you can assign some or all users to deferred release. You can identify deferred-capable features in the Message center. To test and validate changes before they reach your deferred release users, add select users to standard release so they receive deferred-capable feature updates earlier.

For more information about modern release options and how to configure them, see [Configure Standard and Deferred release options for Microsoft 365](configure-release-options.md).

> [!NOTE]
> Currently, the modern release options of standard and deferred release channels aren’t available for GCC, GCC High, and DoD cloud environments. Check this article for updates regarding future support.

### Before general availability

As an IT admin, you can opt in to use features *before* general availability by assigning users to specific release audiences.

The **Microsoft Frontier program** gives organizations early access to innovative and emerging AI capabilities in Microsoft 365 before those features reach general availability. By opting in to Frontier program, IT administrators can evaluate new Copilot agents and AI-powered experiences, determine readiness for broader deployment across their tenant, and provide feedback about Frontier feature capabilities to Microsoft.

The Frontier program supports early experimentation, but the features aren't fully supported, might change, and might not reach GA. They’re intended for evaluation and readiness, not production use.

For more information on the Frontier program, see [Get started with the Microsoft Frontier program](get-started-frontier.md).

## Updated Message center interface

The updated Message center experience helps you deliver timely, relevant, and actionable change communications. It provides:

- Launch-day announcements with brief summaries and links to supporting resources.
- A consistent post format that includes the change description, rollout timeline, affected users and platforms, recommended actions, and compliance considerations.

For more information, see [What’s new in Message center](message-center-updates.md) and [Message center in the Microsoft 365 admin center](message-center.md).

## Microsoft Release Communications MCP Server

AI-enabled organizations use intelligent tooling to accelerate their internal processes. By integrating the Microsoft Release Communications (MRC) MCP Server with your AI tools, you can connect to the latest release information for updates on Microsoft 365 Roadmap and Azure Roadmap to create the infrastructure for AI-assisted reasoning over upcoming changes, priorities, and business impact.

For information on how to start using MRC MCP server, see [Get started with Release Communications MCP Server](mrc-mcp.md).

## Microsoft MCP Server for Enterprise

Shift from passively reviewing service updates to actively reasoning over change data. With Microsoft MCP Server for Enterprise, you can give AI agents conversational, read-only access to your organization's Message center and Service Health Dashboard data. The server queries Microsoft Graph using your delegated permissions, so Microsoft Entra security, access controls, and compliance requirements stay in place.

Use Microsoft MCP Server for Enterprise to:

- Summarize tenant-relevant Message center posts through natural language
- Identify changes that affect your organization and determine actions to take
- Prioritize work by reasoning over change data without leaving your AI workflow

For more information, see [Overview of Microsoft MCP Server for Enterprise - Microsoft Graph](/graph/mcp-server/overview).

## Available workloads for modern change management

This is the first step in our modernization change management journey. We're starting the modern change management experience with Microsoft 365 Copilot. Not all Microsoft 365 workloads are available in this new model. Existing and traditional change management tools and methodologies can still be used for these experiences.

| Modern change management | Traditional change management |
| ----- | ----- |
| - [Modern change management - Overview](plan-for-change-management.md) <br/> - [Configure modern release options](configure-release-options.md) <br/> - [Modern release options FAQ](release-options-faq.md) <br/> - [Release Communications MCP server](mrc-mcp.md) <br/> - [What's new in Message Center](message-center-updates.md) | - [Set up the Standard or Targeted release options](release-options-in-office-365.md) <br/> - [Microsoft 365 change guide - Microsoft 365 Apps](/microsoft-365-apps/best-practices/microsoft-365-change-guide) <br/> - [Stay on top of changes](stay-on-top-of-updates.md) |

## Communication channels for Microsoft 365 updates

The following table shows various communication channels we have that you can use to help manage change:

| Communication channel | Description | Documentation |
| ----- | ----- | ----- |
| Microsoft 365 Roadmap | - Understand what features are coming, when they’re expected to release, and which environments they apply to.<br/>- Provides early planning signals that complement Message center announcements and supports proactive change management across Microsoft 365. | [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap) |
| Message center | - Learn about official service announcements and feature changes.<br/>- Read these messages in the Microsoft 365 admin center, the admin mobile app, or receive a weekly digest in email.<br/>- Share these messages with others in your organization when you see a message someone else should act on. | [Message center in the Microsoft 365 admin center](message-center.md) |

## Related articles

[Get started with the Microsoft Release Communications MCP Server](mrc-mcp.md)

[Overview of Microsoft MCP Server for Enterprise - Microsoft Graph](/graph/mcp-server/overview)

[Configure modern release options for Microsoft 365](configure-release-options.md)

[Release options FAQ](release-options-faq.md)

[What's new in Message center](message-center-updates.md)
