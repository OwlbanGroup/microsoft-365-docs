---
title: "Microsoft 365 Copilot Chat usage report - Microsoft 365 admin center"
ms.author: cmcatee
author: cmcatee-MSFT
manager: scotv
ms.reviewer: kols
ms.update-cycle: 180-days
audience: Admin
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
ms.collection:
 - M365-subscription-management
 - Adm_O365
 - m365copilot
 - magic-ai-copilot
ms.custom:
- GAUpdates
search.appverid:
- BCS160
- MST160
- MET150
- MOE150
ai-usage: ai-assisted
description: "Learn how to view the Microsoft 365 Copilot Chat usage report to track user engagement, prompt counts, and app adoption."
ms.date: 04/03/2026
---

# Microsoft 365 Copilot Chat usage report - Microsoft 365 admin center

The Microsoft 365 Copilot Chat usage report provides insights into active usage of Microsoft 365 Copilot Chat. The report includes total active users, average daily active users, total prompts submitted, and average prompts submitted per user. You can view usage insights as totals and trends for the past 7, 30, 90, or 180-day periods. The report also shows the last activity date, prompts submitted, and active days per user, anonymized by default. To view all reports, see [Microsoft 365 Reports in the admin center overview](activity-reports.md).

> [!NOTE]
> The report currently supports only users without a Microsoft 365 Copilot license who interact with Copilot Chat in Teams, Outlook, m365.cloud.microsoft/chat, Microsoft 365 Copilot (app), Microsoft Edge, Word, Excel, PowerPoint, and OneNote.

[!INCLUDE [microsoft-365-usage-reports-generic-intro](../../includes/microsoft-365-usage-reports-generic-intro.md)]

## View the Microsoft 365 Copilot Chat usage report

For information about the roles needed to view usage reports, see [Microsoft 365 admin center usage reports overview](activity-reports.md).

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Reports**. If you don't see **Reports**, select **Show all**, and then select **Reports**.
1. Select <a href="https://go.microsoft.com/fwlink/p/?linkid=2074756" target="_blank">Usage</a>.
1. On the **Usage** page, under **Reports**, select **Microsoft 365 Copilot**, and then select **Copilot Chat**.

## Interpret the Microsoft 365 Copilot Chat usage report

Use this report to see the usage of Microsoft 365 Copilot Chat in your organization. At the top, filter by different periods. You can view the Microsoft 365 Copilot Chat report over the last 7, 30, 90, or 180 days.

You can view aggregated numbers for Microsoft 365 Copilot Chat active users, average daily active users, total prompts submitted, and average prompts submitted per user:

:::image type="content" source="../../media/copilot-chat-usage.png" alt-text="Screenshot showing the number of active users for Microsoft 365 Copilot Chat usage." lightbox="../../media/copilot-chat-usage.png":::

- **Active users** shows the total number of users who submitted at least one prompt to Microsoft 365 Copilot Chat during the selected period.
- **Average daily active users** indicates the average number of people using Microsoft 365 Copilot Chat per day over the selected period.
- **Total prompts submitted** refers to the overall number of prompts users sent to Microsoft 365 Copilot Chat during the selected period.
- **Average prompts submitted per user** represents the mean number of prompts each active user sent to Microsoft 365 Copilot Chat during the selected period.

In **Recommendations**, the recommended action card highlights where admins can update settings to pin Copilot to make it easier for users in the organization to find and use Copilot in apps like Teams and Outlook.

:::image type="content" source="../../media/microsoft-copilot-pin.png" alt-text="Screenshot showing the pop-up message to pin Copilot for all users." lightbox="../../media/microsoft-copilot-pin.png":::

You see the following summary charts in this report as default view:

:::image type="content" source="../../media/copilot-chat-summary.png" alt-text="Screenshot showing the chart to evaluate adoption by app for Microsoft 365 Copilot Chat." lightbox="../../media/copilot-chat-summary.png":::

- **Summary view** shows you the total usage of Microsoft 365 Copilot Chat of the time frame.
- **Trend view** shows you the daily time trend of Microsoft 365 Copilot Chat of the time frame.

You can switch between **Summary** view and **Trend** view. When switching to **Trend** view, you can select one or multiple entry points in the dropdown list to see daily usage or compare among entry points.

:::image type="content" source="../../media/copilot-chat-adoption.png" alt-text="Screenshot showing the chart in Trend view to analyze adoption by app for Microsoft 365 Copilot Chat." lightbox="../../media/copilot-chat-adoption.png":::

The following table shows app details for active Microsoft 365 Copilot Chat users:

| App               | Details | More information |
|-------------------|---------|------------------|
| Edge         | Microsoft 365 Copilot Chat was used from the sidebar in the Microsoft Edge browser.                     | [Copilot - Microsoft Edge](https://www.microsoft.com/edge/features/copilot) |
| Microsoft 365 Copilot (app) | Microsoft 365 Copilot Chat was used in the desktop, mobile, or web version of the Microsoft 365 Copilot (app), including the following entry points: Microsoft365.com, Office.com, M365Copilot.com, Microsoft 365 desktop app, Microsoft 365 mobile app, M365.cloud.microsoft | [Overview of Microsoft 365 Copilot Chat](/copilot/overview) |
| Teams    | Microsoft 365 Copilot Chat was used in Teams.                | [Manage Copilot Chat in Teams](/copilot/manage#manage--chat-in-teams) |
| Outlook    | Microsoft 365 Copilot Chat was used in Outlook.                | [Manage Copilot Chat on the web, in the Microsoft 365 Copilot app, and in Outlook](/copilot/manage#manage--chat-on-the-web-in-the-microsoft-365--app-and-in-outlook) |
| m365.cloud.microsoft/chat     | Microsoft 365 Copilot Chat was used in m365.cloud.microsoft/chat.                | [Manage Microsoft 365 Copilot Chat](/copilot/manage#how-to-ensure-users-access--chat) |
| Word | Microsoft 365 Copilot Chat was used in Word. | [Overview of Microsoft 365 Copilot Chat](/copilot/overview) |
| Excel | Microsoft 365 Copilot Chat was used in Excel. | [Overview of Microsoft 365 Copilot Chat](/copilot/overview) |
| PowerPoint | Microsoft 365 Copilot Chat was used in PowerPoint. | [Overview of Microsoft 365 Copilot Chat](/copilot/overview) |
| OneNote | Microsoft 365 Copilot Chat was used in PowerPoint. | [Overview of Microsoft 365 Copilot Chat](/copilot/overview) |

You can export the report data into an Excel .csv file by selecting the ellipses and then **Export** in the top-right corner.

You can view a table that shows each active user who accessed Microsoft 365 Copilot Chat over the past 180 days.

:::image type="content" source="../../media/microsoft-copilot-export.png" alt-text="Screenshot showing the table list of data for active users for Microsoft 365 Copilot Chat." lightbox="../../media/microsoft-copilot-export.png":::

To export the report data into an Excel .csv file, select **Export**. This action exports the Microsoft 365 Copilot Chat usage data of all users and enables you to do simple sorting, filtering, and searching for further analysis.

### User last activity table

| Item                        | Description      |
|-----------------------------|------------------|
| Username               | The user's principal name.  |
| Display name          | The full name of the user.      |
| Prompts submitted      | The total number of prompts this user submitted to Microsoft 365 Copilot Chat during the specified period. |
| Active days            | The total number of days the user submitted prompts to Microsoft 365 Copilot Chat within the specified timeframe. |
| Last activity date (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in Teams, Outlook, m365.cloud.microsoft/chat, Microsoft Edge, the Microsoft 365 Copilot (app), Word, Excel, PowerPoint, or OneNote. This date remains fixed even if the timeframe of the report is changed. |
| Last activity date of Teams (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in Teams. This date remains fixed even if the timeframe of the report is changed. |
| Last activity date of Outlook (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in Outlook. This date remains fixed even if the timeframe of the report is changed.  |
| Last activity date of m365.cloud.microsoft/chat (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in m365.cloud.microsoft/chat. This date remains fixed even if the timeframe of the report is changed. |
| Last activity date of Microsoft 365 Copilot (app) (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in Microsoft 365 Copilot (app). This date remains fixed even if the timeframe of the report is changed.  |
| Last activity date of Edge (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat from the sidebar in the Microsoft Edge browser. This date remains fixed even if the timeframe of the report is changed.  |
| Last activity date of Word (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in Word. This date remains fixed even if the timeframe of the report is changed. |
| Last activity date of Excel (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in Excel. This date remains fixed even if the timeframe of the report is changed. |
| Last activity date of PowerPoint (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in PowerPoint. This date remains fixed even if the timeframe of the report is changed. |
| Last activity date of OneNote (UTC) | The most recent date on which the user sent a message to Microsoft 365 Copilot Chat in OneNote. This date remains fixed even if the timeframe of the report is changed. |

[!INCLUDE [display-user-specific-data](../../includes/display-user-specific-data.md)]

## FAQ

### Does this report include only the Copilot Chat usage for users without a Microsoft 365 Copilot license in the organization?

Yes. To view Copilot Chat usage for Microsoft 365 Copilot licensed users in the organization, see the [Microsoft 365 Copilot usage report](microsoft-365-copilot-usage.md) in the Microsoft 365 admin center.
