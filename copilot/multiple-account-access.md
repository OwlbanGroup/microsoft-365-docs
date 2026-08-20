---
title: "Multiple account access to Microsoft 365 Copilot for work and school documents"
description: "Learn about multiple account access to Copilot for work and school documents."
ms.author: danbrown
author: DHB-MSFT
manager: dansimp
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.subservice: m365-privacy
ms.collection: 
- privacy-microsoft365
- privacy-microsoft365-copilot
- m365copilot
- magic-ai-copilot
- must-keep
hideEdit: true
ms.date: 04/13/2026
ms.update-cycle: 180-days
---

# Multiple account access to Microsoft 365 Copilot for work and school documents

> [!NOTE]
> - Multiple account access to Microsoft 365 Copilot is available for some apps on specific types of devices. For more information, see [Apps where multiple account access to Microsoft 365 Copilot is available](#apps-where-multiple-account-access-to-microsoft-365-copilot-is-available).
> - For information about turning off multiple account access by using a policy setting, see [Manage multiple account access to Microsoft 365 Copilot using Cloud Policy](#manage-multiple-account-access-to-microsoft-365-copilot-using-cloud-policy).

## What is multiple account access to Microsoft 365 Copilot?

In Microsoft 365 apps that support signing in with multiple accounts (desktop versions and mobile versions, if available, of Word, Excel, PowerPoint, Outlook, and OneNote), users can use their Microsoft 365 Copilot access from one account on documents from a different account.

This means that when multiple account access to Copilot is enabled, your users can use Copilot on work documents without a Microsoft 365 Copilot license assigned from your organization.

When multiple account access to Copilot is disabled, if the user only has access to Copilot through an account outside of your organization, such as from a personal Microsoft 365 subscription, they can’t use Copilot on work or school documents.

> [!NOTE]
> Multiple account access to Microsoft 365 Copilot is always disabled for the following customers: Microsoft 365 GCC (Government Community Cloud), Microsoft 365 GCC High, Microsoft 365 DoD, and Microsoft 365 operated by 21Vianet.

## Data protection

Microsoft 365 Copilot data protection is always based on the identity used to access the file. This ensures enterprise data protection for files in your organization, regardless of which account grants Copilot access.

The setting for [web search in Microsoft 365 Copilot](manage-public-web-access.md) is also based on the identity used to access the file. If you disable web search in Copilot for a user in your organization, that user isn't able to use web search even when using Copilot access from another account.

Users using multiple account access to Copilot on work and school documents also have limited access to Copilot as shown in the following table.

| Copilot capability| When multiple account access to Microsoft 365 Copilot is enabled | When the user is assigned an internal Microsoft 365 Copilot license |
|---------------------------------------------------------------------------------------------|------------------------------------|----------------------------------------|
| Access the organization’s Microsoft Graph                                                   |No |Yes|
| Ask Copilot questions about the current open document and make Copilot assisted edits       |Yes|Yes|
| Ask Copilot questions about other documents that aren't the currently opened document      |No|Yes|
| Ask Copilot questions that can be answered through web searches ([if web search is enabled](manage-public-web-access.md))|Yes|Yes|
| Generate drafts by referencing specific documents the active user has access to                     |Yes|Yes|

## Manage multiple account access to Microsoft 365 Copilot using Cloud Policy

You can use the "Multiple account access to Copilot for work documents" policy setting to control whether your users can use multiple account access to Microsoft 365 Copilot on work and school documents. This policy only applies to Microsoft 365 apps that allow signing in with multiple accounts (Word, Excel, PowerPoint, Outlook, and OneNote desktop and mobile apps).

To configure this policy setting, you need to use [Cloud Policy service for Microsoft 365](/microsoft-365-apps/admin-center/overview-cloud-policy).

> [!NOTE]
> Microsoft 365 GCC customers can see the policy setting in Cloud Policy, but the policy has no effect on them because multiple account access to Microsoft 365 Copilot is always disabled for Microsoft 365 GCC customers.

If you enable or don't configure this policy setting, your users can use Copilot on work and school documents with a Microsoft 365 Copilot license that is from outside your organization.

If you disable this policy setting, your users can't use Copilot on work and school documents with a Microsoft 365 Copilot license that is from outside your organization.

## Apps where multiple account access to Microsoft 365 Copilot is available

Multiple account access is available in the following apps.

### On Android devices

- Outlook
- PowerPoint
- Word

### On iOS devices

- OneNote
- Outlook
- PowerPoint
- Word

### On iPad devices

- Excel
- PowerPoint

### On Mac devices

- Excel
- OneNote
- Outlook
- PowerPoint
- Word

### On Windows devices

- Excel
- OneNote
- Outlook (new)
- PowerPoint
- Word
