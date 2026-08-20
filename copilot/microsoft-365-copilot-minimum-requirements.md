---  
title: "Minimum requirements to deploy Microsoft 365 Copilot in your organization"  
author: kwekuako
ms.author: kwekua
manager: scotv
ms.date: 02/10/2026
ms.topic: overview
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.localizationpriority: medium
ms.collection: scotvorg
ms.custom: QuickDraft
audience: Admin
ai-usage: ai-assisted
description: Minimum requirements to deploy Microsoft 365 Copilot in your organization.
---

# Minimum requirements to deploy Microsoft 365 Copilot in your organization

[Microsoft 365 Copilot](microsoft-365-copilot-overview.md) is an AI-powered tool that helps with your work tasks. Microsoft 365 Copilot is integrated into Microsoft 365 apps such as Word, Excel, Outlook, and Teams. It uses the latest AI models and data from the web and your organization to answer questions, generate content and ideas, and find information. For more information, see [Microsoft 365 Copilot overview](microsoft-365-copilot-overview.md).

| Category                    | Required to deploy | Strongly recommended |
|-----------------------------|-------------------|----------------------|
| Licensing                   | ✅                |                      |
| Exchange Online mailbox     | ✅                |                      |
| Entra ID (Azure AD account) | ✅                |                      |
| Supported OS and browsers   | ✅                |                      |
| Network endpoints           | ✅                |                      |
| SharePoint governance       |                   | ✅                   |
| Purview labeling            |                   | ✅                   |
| Phased rollout              |                   | ✅                   |

Before you deploy Microsoft 365 Copilot, your organization must meet all required prerequisites in licensing, identity, mailbox location, supported platforms, and network access. You can find optional but strongly recommended readiness steps in the following articles:

- [Microsoft 365 Copilot data and compliance readiness](microsoft-365-copilot-minimum-requirements-data-compliance.md)
- [Rollout Microsoft 365 Copilot to your organization](microsoft-365-copilot-minimum-requirements-rollout.md)

## Licensing requirements

Before your users can use Microsoft 365 Copilot, they must have one of the following subscriptions or plans:

- Microsoft 365 A3/A5 (including MA3/MA5 for students, MA3/MA5 for faculty, and MA3/MA5 student-use benefit)
- Microsoft 365 Business Basic/Business Standard/Business Premium
- Microsoft 365 E3/E5
- Microsoft 365 F1/F3
- Microsoft Teams/Teams Enterprise/Teams Essentials/Teams Rooms
- Office 365 A1/A1 Plus/A3/A5
- Office 365 E1/E1 Plus/E3/E5
- Office 365 F3

Once your organization has one of these subscriptions or plans, you can purchase a Microsoft 365 Copilot license for your users. For more information, see [License plans for Microsoft 365 Copilot](microsoft-365-copilot-licensing.md).

> [!NOTE]
> Chat experiences in Word, Excel, PowerPoint vary depending on your tenant configuration and license. Learn more in [Microsoft 365 copilot overview](microsoft-365-copilot-overview.md#copilot-features-in-microsoft-365-apps).
> If you'd like to enable users with priority access to these capabilities, learn more about [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/microsoft-365-enterprise).

## Mailbox requirements

User's primary mailbox must be in Exchange Online. Copilot uses mailbox content (mailbox grounding), including emails, calendar events, and metadata to generate summaries, draft replies, and surface relevant responses. This process is only supported when the mailbox resides in Exchange Online. On-premises and hybrid mailboxes do not support this grounding.

## Sign-in requirements

Before your users can use Microsoft 365 Copilot, they must also have a [Microsoft Entra ID (Azure AD)](/entra/fundamentals/what-is-entra) account.

## Browser requirements

Any modern browser with third-party cookies enabled for online apps. Recommended browsers:

- Microsoft Edge (recommended for best compatibility and performance)
- Google Chrome
- Mozilla Firefox
- Apple Safari

## Network requirements

Microsoft 365 Copilot enables AI scenarios that access the web, so it may need to connect to specific network endpoints (domains). See the full documentation of network requirements for Microsoft 365 Copilot, which provides a complete list of domains and WebSockets (WSS) that an organization's network shouldn't block. For more information, see [Microsoft 365 app and network requirements for Microsoft 365 Copilot](microsoft-365-copilot-requirements.md).

## Mobile device requirements

- iPhone: iOS 16.0 or later
- iPad: iPadOS 16.0 or later
- Android 10 or later

## Related topics

For more information on data and compliance requirements, see [Data and compliance readiness](microsoft-365-copilot-minimum-requirements-data-compliance.md).

For more information on best practices for how to roll out Microsoft 365 Copilot in your organization, see [Rollout Microsoft 365 to your organization](microsoft-365-copilot-minimum-requirements-rollout.md).
