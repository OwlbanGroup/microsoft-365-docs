---
title: "Microsoft 365 Copilot Search usage report - Microsoft 365 admin center"
ms.author: cmcatee
author: cmcatee-MSFT
manager: scotv
ms.reviewer: kols
audience: Admin
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
ms.collection:
 - M365-subscription-management
 - Adm_O365
 - m365copilot
ms.custom: 
- GAUpdates
search.appverid:
- BCS160
- MST160
- MET150
- MOE150
ai-usage: ai-assisted
description: "Microsoft 365 Copilot Search usage report empowers admins to view active users, search trends, and user behavior to maximize Copilot value and drive adoption."
ms.date: 04/03/2026
---

# Microsoft 365 Copilot Search usage report - Microsoft 365 admin center

> [!NOTE]
> The Copilot Search usage report is currently in public preview. Deployment processes and functionality might change before this report becomes generally available. During the public preview phase, you might notice some unexpected behaviors. These observations help Microsoft improve the product before general availability.

The Microsoft 365 Copilot Search usage report provides an overview of Copilot Search usage within the Microsoft 365 Copilot app. It helps you understand adoption and engagement trends for Copilot Search capabilities.

The Copilot Search usage report provides a detailed view of both organizational and individual user activity with Copilot Search across platforms. It includes trend charts for active usage and search activity at the organization level, and insights into each user’s search behavior during a selected timeframe. The report reflects user behaviors within one hour. With these insights, you can easily track Copilot Search usage trends and make informed decisions on how to drive further adoption within your organization.

[!INCLUDE [microsoft-365-usage-reports-generic-intro](../../includes/microsoft-365-usage-reports-generic-intro.md)]

## View the Copilot Search usage report

For information about the roles needed to view usage reports, see [Microsoft 365 admin center usage reports overview](activity-reports.md).

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Reports**. If you don't see **Reports**, select **Show all**, and then select **Reports**.
1. Select <a href="https://go.microsoft.com/fwlink/p/?linkid=2074756" target="_blank">Usage</a>.
1. On the **Usage** page, under **Reports**, select **Microsoft 365 Copilot**, and then select **Copilot Search**.

## Interpret the Copilot Search usage report

Use the Microsoft 365 Copilot Search usage report to see the usage of Copilot Search in your organization.

At the top, filter by different timeframes. You can view the Copilot Search usage report over the last 7 days, 30 days, 90 days, or 180 days.

You can view several metrics for Copilot Search usage:

:::image type="content" source="../../media/copilot-search-usage-metrics.png" alt-text="Screenshot of the Copilot Search usage report." lightbox="../../media/copilot-search-usage-metrics.png":::

The following table lists the features included for active users of Copilot Search:

|Copilot app  |Features  |What's counted as active usage  |
|---------|---------|---------|
|Microsoft 365 Copilot app     |Search         |A licensed Microsoft 365 Copilot user completes at least one of the following actions:<br><br>1. Types in a query, keyword, or natural language to find information about files, people, answers, and other content and lands in the results page.<br>2. Types in a query and clicks on or engages with query suggestions in the search box.<br>3. Selects an item from the options displayed in the search box dropdown list  |

To learn more about the Copilot Search feature, see [Microsoft 365 Copilot Search](/microsoft-365/copilot/microsoft-365-copilot-search).

**Active users** shows the total number of users with a Microsoft 365 Copilot license in your organization who completed a Copilot Search query within the Microsoft 365 Copilot app over the selected timeframe.

**Average daily active users** shows the average daily number of individuals who actively used Copilot Search over the selected timeframe.

**Total searches** shows the number of distinct search queries made in Copilot Search by active users in the selected timeframe, consistent with the set of behaviors summarized in the **active users** definition.

**Average searches per user** shows the average number of distinct search queries made by active users in the selected timeframe.

You see the following trend view charts in this report as default view:

:::image type="content" source="../../media/copilot-search-usage-active-users-trend.png" alt-text="Screenshot of the Copilot Search  active users chart." lightbox="../../media/copilot-search-usage-active-users-trend.png":::

**Active users trend view** shows you the daily trend view of active usage of Copilot Search over the selected time frame. When you hover over a specific day on this chart, you see the total number of active users for that day. This interactive feature helps you quickly understand daily usage patterns with Copilot Search across your organization.

:::image type="content" source="../../media/copilot-search-usage-total-searches-trend.png" alt-text="Screenshot of the Copilot Search total searches chart." lightbox="../../media/copilot-search-usage-total-searches-trend.png":::

**Total searches trend view** shows a daily trend of searches made by active users over the selected timeframe. When you hover over a specific day on this chart, you see the total number of searches for that day. This interactive feature helps you quickly understand daily engagement patterns with Copilot search across your organization.

### User activity table

| Item | Description |
|---------|---------|
|User ID     |The user's principal ID         |
|Display name     |The user's full name       |
|Total searches     |Total number of distinct search queries the active user made during the selected timeframe         |
|Last activity date (UTC)     |The date on which the user was most recently active in Copilot Search         |

The User activity table includes user-level details about each active Copilot Search user, including their total searches and their last activity date in Copilot Search.

To export the report data into an Excel .csv file, at the top of the table, select the ellipses and then select **Export**. This function exports the Copilot Search usage data of all users and lets you do simple sorting, filtering, and searching for further analysis.

[!INCLUDE [display-user-specific-data](../../includes/display-user-specific-data.md)]

## FAQ

### What user actions count as active usage of Copilot Search?

A user is active in Copilot Search if they have a Microsoft 365 Copilot license and perform an intentional search action by using the Copilot Search feature. Simply opening the Copilot Search page doesn't count as active usage. The user is only counted as active if they interact with the search box by submitting a query, searching for people, searching for a file, or searching for content.

### What platforms does Copilot Search active usage include?

Copilot Search active usage includes user activity within the Microsoft 365 Copilot app across desktop, web, and mobile platforms. The report counts any intentional search action that you perform on any of these platforms during the selected timeframe toward active usage.

### What's the scope of the user-level table?

The user-level table in the report shows all users who were licensed for Microsoft 365 Copilot at any point over the past 180 days, even if the user removed the license or never had any Copilot active usage.
