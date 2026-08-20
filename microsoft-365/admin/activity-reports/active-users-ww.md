---
title: "Active Users report - Microsoft 365 admin center"
ms.author: cmcatee
author: cmcatee-MSFT
manager: scotv
ms.reviewer: hlu
audience: Admin
ms.topic: concept-article
ms.service: microsoft-365-business
ms.localizationpriority: medium
ms.collection:
- M365-subscription-management
- Adm_O365
ms.custom:
- AdminTemplateSet
- admindeeplinkMAC
search.appverid:
- BCS160
- MET150
- MOE150
- GEA150
ms.assetid: fc1cf1d0-cd84-43fd-adb7-a4c4dfa8112d
ai-usage: ai-assisted
description: "Learn how to get an Active Users report using the Microsoft 365 Reports dashboard in the admin center and find out how many product licenses are being used."
ms.date: 04/24/2026
---

# Active Users report - Microsoft 365 admin center

The Active Users report provides details about how many product licenses individuals in your organization use. You can drill into the report for information about which users are using what products. This report helps administrators identify underutilized products or users who might need additional training or information.

[!INCLUDE [microsoft-365-usage-reports-generic-intro](../../includes/microsoft-365-usage-reports-generic-intro.md)]

## View the Active Users report

For information about the roles needed to view usage reports, see [Microsoft 365 admin center usage reports overview](activity-reports.md).

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Reports**. If you don't see **Reports**, select **Show all**, and then select **Reports**.
1. Select <a href="https://go.microsoft.com/fwlink/p/?linkid=2074756" target="_blank">Usage</a>.
1. On the dashboard homepage, select the **View more** button on the **Active users - Microsoft 365 Services** card.

## Interpret the Active users report

To view active users in the Active users report, select the **Active users** tab.

:::image type="content" source="../../media/56fe2e54-76ad-49e5-886f-1344c2697258.png" alt-text="Screenshot of the active users report." lightbox="../../media/56fe2e54-76ad-49e5-886f-1344c2697258.png":::

The **Active Users** report displays trends over the last 7, 30, 90, or 180 days. However, if you select a particular day in the report, the table shows data for up to 28 days from the current date (not the date the report was generated). The data in each report usually covers up to the last 24 to 48 hours.

The **Users** chart shows you daily active users in the reporting period separated by product. On the **Users** chart, the x axis shows the selected reporting time period and the y axis displays the daily active users separated and color coded by license type.

The **Activity** chart shows you daily activity count in the reporting period separated by product. On the **Activity** chart, the x axis shows the selected reporting time period and the y axis displays the daily activity count separated and color coded by license type.

The **Services** chart shows you count of users by activity type and Service. On the **Services** activity chart, the X axis displays the individual services your users are enabled for in the given time period and the Y axis is the Count of users by activity status, color coded by activity status.

You can filter the series you see on each chart by selecting an item in the legend. Changing this selection doesn't change the info in the grid table.

To export the report data into an Excel .csv file, select the **Export** link. This action exports data for all users and lets you do simple sorting and filtering for further analysis.

You can change what information is displayed in the grid table with column controls.

If your subscription is operated by 21Vianet, you won't see data for Viva Engage.

The table displays a breakdown of the user activities at the per-user level.

|Item|Description|
|:-----|:-----|
|Username  |The identifier of the user. |
|Last active date for Exchange |The date the user last used Exchange. |
|Last active date for OneDrive |The date the user last used OneDrive. |
|Last active date for SharePoint |The date the user last used SharePoint. |
|Last active date for Viva Engage |The date the user last used Viva Engage. |
|Last active date for Microsoft Teams |The date the user last used Microsoft Teams. |
|Exchange licenses |Is an Exchange license assigned to the user. |
|OneDrive licenses |Is a OneDrive license assigned to the user. |
|SharePoint licenses |Is a Viva Engage license assigned to the user. |
|Viva Engage licenses |Is a OneDrive license assigned to the user. |
|Microsoft Teams licenses |Is a Microsoft Teams license assigned to the user. |
|Deleted date |The date the user was deleted. |
|License assign date for Exchange  | The date an Exchange license was assigned to the user. |
|License assign date for OneDrive  | The date a OneDrive license was assigned to the user. |
|License assign date for SharePoint | The date a SharePoint license was assigned to the user. |
|License assign date for Viva Engage  | The date a Viva Engage Exchange license was assigned to the user. |
|License assign date for Microsoft Teams  | The date a Microsoft Teams license was assigned to the user. |

[!INCLUDE [display-user-specific-data](../../includes/display-user-specific-data.md)]
