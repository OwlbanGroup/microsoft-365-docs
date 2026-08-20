---
title: Send Email as a Distribution List
f1.keywords:
- NOCSH
ms.author: kwekua
author: kwekuako
manager: scotv
ms.date: 04/29/2026
audience: Admin
ms.topic: how-to
ms.service: microsoft-365-business
ms.localizationpriority: medium
ms.collection:
 - Tier3
 - scotvorg
 - Adm_O365
 - operations-pod
ms.custom:
- MSStore_Link
- AdminSurgePortfolio
- AdminTemplateSet
description: Send email as a distribution list so replies come from the group address. Learn how to use Outlook or Outlook on the web.
#customer intent: As a distribution list member, I want to send email as the distribution list so that replies appear to come from the group instead of my personal address.
---

# Send email as a distribution list

You can send email as a distribution list so replies appear to come from the group instead of an individual member. This article explains how to do it in Outlook and Outlook on the web.

## Before you begin

Before you perform the steps in this article, make sure the following prerequisites are met:

- You're added to a Microsoft 365 distribution list and you're granted **Send as** permission on it.

- An administrator follows the steps in the following articles:

  - [Add a user or contact to a Microsoft 365 distribution group](../email/add-user-or-contact-to-distribution-list.md).
  - [Allow members to send email as a group](/previous-versions/microsoft-365/solutions/allow-members-to-send-as-or-send-on-behalf-of-group#allow-members-to-send-email-as-a-group).

- The correct people are added to the distribution list.

## Outlook on the web

1. Open Outlook on the web and go to your inbox.

1. Open a message that was sent to the distribution list.

1. Select **Reply**.

1. At the bottom of the message, select **More** > **Show from**.

1. Right-click on the **From** address, such as `john@contoso.com`, and select **Remove**.

1. In the **From** field, enter the distribution list address, such as `support@contoso.com`, and then send the message. The next time you reply from the distribution list, its address appears as an option in the **From** list.

## Outlook

1. Open Outlook desktop client.

1. Select **New Email**.

1. Select the **From** field and then select **Other email address**.

    If you don't see the **From** field, go to **Options** and then select **From** in the **Show fields** section.

1. Select the **Distribution List** address.

1. Send the email.
