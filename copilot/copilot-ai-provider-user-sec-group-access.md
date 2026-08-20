---
title: "Assign AI provider access to users and groups"
ms.author: kwekua
author: kwekuako
ms.update-cycle: 180-days
manager: scotv
ms.date: 04/22/2026
audience: Admin
ms.topic: overview
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- essentials-overview
- operations-pod
- OtherAILLMs
appliesto:
- ✅ Microsoft 365 Copilot
description: "Learn about Anthropic as a subprocessor for Microsoft."
---

# Assign AI provider access to users and groups

Organizations that use third-party AI providers with Microsoft 365 Copilot or Copilot Studio can restrict access to those AI providers by assigning permissions to specific users or Microsoft Entra ID security groups.

## AI provider user and group access

You can assign AI providers to selected users or groups in the Microsoft 365 admin center. For more information, see:

- [Anthropic as a subprocessor for Microsoft Online Services](connect-to-ai-subprocessor.md)
- [Connect to xAI's models](connect-to-ai-models.md)

This allows your organization to control which users can access specific AI providers that are enabled for use with Microsoft 365 Copilot experiences, agents, or Copilot Studio.

Administrators can assign access to:

- Individual users
- Microsoft Entra ID security groups
- Nested security groups

Up to **999 combined user and group assignments** are supported per AI provider.

When access is restricted by user or group assignment, only the specified users or group members can use Copilot features that rely on that AI provider.

AI provider assignments are:

- Applied at the AI provider level, not the AI model level
- Enforced across:
  - Microsoft 365 admin center
  - Power Platform admin center (PPAC)
  - Copilot Studio

User and security group access will apply to AI subprocessors and AI independent processors for all current and future third‑party model providers.

## Enforcement across Copilot experiences

Provider-level assignments are enforced across Microsoft 365 Copilot and Copilot Studio experiences. If a user isn't assigned access to an AI provider, they might:

- Be unable to access Copilot features or capabilities that depend on that provider
- Experience agent behavior changes where access to a model provider is required

This enforcement applies across:

- Microsoft 365 Copilot apps
- Custom agents built in Copilot Studio
- Experiences managed through Power Platform admin center
