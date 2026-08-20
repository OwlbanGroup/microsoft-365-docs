---
title: Share Microsoft 365 Calendars with users outside your organization
f1.keywords:
- NOCSH
ms.author: dansimp
author: dansimp
manager: dansimp
ms.date: 03/16/2026
audience: Admin
ms.topic: how-to
ms.service: microsoft-365-business
ms.localizationpriority: medium
ms.collection:
  - Tier1
  - scotvorg
  - M365-subscription-management
  - Adm_O365
  - Adm_TOC
  - must-keep
  - operations-pod
ms.custom:
- MSStore_Link
- AdminSurgePortfolio
- AdminTemplateSet
description: Enable external calendar sharing in the Microsoft 365 admin center so users can share free/busy times with people outside your organization. Try it now.
#customer intent: As an IT admin, I want to enable external calendar sharing in Microsoft 365 so that users can collaborate with people outside the organization.
---

# Share Microsoft 365 calendars with people outside your organization

Your users might need to schedule meetings with people outside your organization. To simplify the process of finding mutually agreeable meeting times, Microsoft 365 enables you to make calendars available to people outside your organization. These people need to see free and busy times for users in your organization, but don't have user accounts for your Microsoft 365 organization.

As the admin, you can enable external calendar sharing for all users in your organization. Once sharing is enabled, users can use Outlook on the web to share their calendars with anyone inside or outside the organization. People inside the organization can view the shared calendar along with their own calendar. People outside the organization are sent a URL that they can use to view the calendar. Users decide when to share, how much to share, and when to keep their calendars private.

> [!NOTE]
>
> If you want to share calendar information with an on-premises Exchange organization, the Exchange administrator must configure an authentication relationship (federation) between the on-premises environment and Exchange Online. Federation requires supported Exchange versions and specific configuration. For more information, see [Sharing](/exchange/sharing-exchange-2013-help).

## Enable calendar sharing in the Microsoft 365 admin center

1. Sign in to the [Microsoft 365 admin center](https://go.microsoft.com/fwlink/p/?linkid=2024339).

1. From the left navigation bar, select **… Show all**, and then select **Settings** to expand it.

1. Under **Settings**, select **Org Settings**.

1. On the **Services** tab of the **Org Settings** page, select **Calendar**.

1. In the **Calendar** pane:

    - To allow your users to share their calendars with external Microsoft 365 or Exchange users, select **Let your users share their calendars with people outside of your organization who have Office 365 or Exchange**.

    - To allow sharing with people who don't sign in, select **Allow anyone to access calendars with an email invitation**. This option only becomes available after you enable sharing with external Microsoft 365 or Exchange users.

    - If you allow anonymous users outside of your organization access to your users' calendars, choose what type of calendar information to make available to your users:

      - **Show calendar free/busy information with time only**.
      - **Show calendar free/busy information with time, subject, and location**.
      - **Show all calendar appointment information**.

## How users share their calendars

After you enable external calendar sharing, users can choose whether to share their own calendars with external people. Users control who they share with, what level of detail they share, and when to stop sharing.

For step-by-step instructions, see [Share your calendar in Outlook on the web](https://support.microsoft.com/office/7ecef8ae-139c-40d9-bae2-a23977ee58d5).
