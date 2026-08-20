---
title: Minimum requirements for Microsoft 365 Copilot Chat 
f1.keywords:
- NOCSH
ms.author: efrene 
author: efrene
manager: scotv
ms.date: 02/18/2026
ms.update-cycle: 180-days
audience: Admin
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- operations-pod
description: Microsoft 365 admins can learn about the minimum requirements for using Microsoft 365 Copilot Chat in their organizations. 
ms.custom: [copilot-learning-hub]
appliesto:
- ✅ Microsoft 365 Copilot
---

# Minimum requirements for Microsoft 365 Copilot Chat

This document outlines the minimum technical and licensing requirements for using Microsoft 365 Copilot Chat in your organization.

[Microsoft 365 Copilot Chat](/copilot/overview) is an AI chat tool that is included in your Microsoft 365 subscription and is integrated into Microsoft 365 apps such as Outlook, and Teams. It uses the latest AI models and data from the web to answer your questions, generate content and ideas, and find information. Since it's included in your Microsoft 365 subscription, it is the entry point into the Microsoft 365 Copilot experience.

> [!NOTE]
> Chat experiences in Word, Excel, PowerPoint vary depending on your tenant configuration and license. Learn more in [Microsoft 365 copilot overview](microsoft-365-copilot-overview.md#copilot-features-in-microsoft-365-apps).
>
> If you'd like to enable users with priority access to these capabilities, learn more about [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/microsoft-365-enterprise).

## Minimum requirements

| Category | Required | Strongly Recommended |
|---|---|---|
| Eligible Microsoft 365 license | ✅ | |
| Entra ID (Azure AD account) | ✅ | |
| Turn on web search | ✅ | |
| Assign the AI administrator role |  | ✅ |
| Pin Copilot Chat in Microsoft 365 apps | | ✅ |


### License eligibility

Copilot Chat is only available to you in eligible Microsoft 365 licenses.

- Microsoft 365 A1/A3/A5 (including MA3/MA5 for students, MA3/MA5 for faculty, and MA3/MA5 student-use benefit)
- Microsoft 365 Business Basic/Business Standard/Business Premium
- Microsoft 365 E3/E5
- Microsoft 365 F1/F3
- Microsoft Teams/Teams Enterprise/Teams Essentials/Teams Rooms
- Office 365 A1/A1 Plus/A3/A5
- Office 365 E1/E1 Plus/E3/E5
- Office 365 F3
- Government Community Cloud (GCC) High and Department of Defense customers with one of the following licenses:
    - Microsoft 365 F1, F3, G3, or G5
    - Office 365 F1, F3, G3, or G5

For more detailed information about licenses that include Copilot Chat, see [Microsoft 365 Copilot Chat eligibility](/copilot/manage#microsoft-365--chat-eligibility).

### Sign-in requirements
Before your users can use Microsoft Copilot Chat, they must have a [Microsoft Entra ID (Azure AD)](/entra/fundamentals/what-is-entra) account. 

### Turn on web search for Copilot Chat
When web search is enabled, Microsoft 365 Copilot Chat may fetch information from the Bing search service when information from the web helps to provide a better, more grounded response. IT admins can control access to web search by using the Allow web search in Copilot policy, which is available only in [Cloud Policy service for Microsoft 365](/microsoft-365-apps/admin-center/overview-cloud-policy). 

### Assign the AI administrator role
The AI Administrator role lets organizations manage Copilot Chat and AI experiences using least‑privilege access, without requiring Global Administrator permissions. This role includes access to the Copilot Control System admin settings as well as reports to help track adoption.

### Pin Copilot Chat in Microsoft 365 apps
Admins can [pin Copilot Chat in their users Microsoft 365 apps](/microsoft-365/copilot/pin-copilot-chat-navbar) so it’s easy to find, consistently available, and used as the organization’s secure, compliant AI entry point across Microsoft 365 apps. This setting is turned on by default.
