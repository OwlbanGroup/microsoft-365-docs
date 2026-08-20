---
title: "Email activity reports - Microsoft 365 admin center"
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
search.appverid:
- BCS160
- MET150
- MOE150
- GEA150
ms.assetid: 1cbe2c00-ca65-4fb9-9663-1bbfa58ebe44
ai-usage: ai-assisted
description: "The Email activity report in Microsoft 365 admin center provides detailed charts and per-user data to help you understand and manage email usage efficiently."
ms.date: 04/24/2026
---

# Email activity reports - Microsoft 365 admin center

The Email activity report provides a high-level view of email traffic within your organization. Use the Email activity report to understand the trends and per-user level details of the email activity within your organization.

[!INCLUDE [microsoft-365-usage-reports-generic-intro](../../includes/microsoft-365-usage-reports-generic-intro.md)]

## View the Email activity report

For information about the roles needed to view usage reports, see [Microsoft 365 admin center usage reports overview](activity-reports.md).

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Reports**. If you don't see **Reports**, select **Show all**, and then select **Reports**.
1. Select <a href="https://go.microsoft.com/fwlink/p/?linkid=2074756" target="_blank">Usage</a>.
1. On the **Usage** page, under **Reports**, select **Exchange**.
1. On the report page, select the **Email activity** tab.
  
## Interpret the Email activity report

You can view your users' email activity by looking at the **Activity** and **Users** charts.
  
:::image type="content" source="../../media/5eb1d9e9-8106-4843-acb7-c0238c0da816.png" alt-text="Screenshot of the email activity report." lightbox="../../media/5eb1d9e9-8106-4843-acb7-c0238c0da816.png":::

The Email activity report displays trends over the last 7, 30, 90, or 180 days. However, if you select a particular day in the report, the table shows data for up to 28 days from the current date (not the date the report was generated). The data in each report usually covers up to the last 24 to 48 hours.

The **Activity** chart helps you understand the trend of the amount of email activity going on in your organization. You can see the split of email send, email read, email received, meeting created, or meeting interacted activities. On the **Activity** chart, the Y axis is the count of activity of the type email sent, email received, email read, meeting created, and meeting interacted.

The **User** chart helps you understand the trend of the number of unique users who are generating the email activities. You can look at the trend of users performing email sending, email reading, email receiving, meeting creating, or meeting interacting activities. On the **Users** activity chart, the Y axis is the users performing activity of the type email sent, email received, email read, meeting created, or meeting interacted.

The X axis on both charts is the selected date range for this specific report.

You can filter the series you see on either chart by selecting an item in the legend.

The table shows a breakdown of the email activities at the per-user level. This data shows all users that have an Exchange product assigned to them and their email activities.

|Item|Description|
|:-----|:-----|
|Username  |The email address of the user. |
|Display name |The full name of the user. |
|Deleted |Refers to the user whose current state is deleted, but was active during some part of the reporting period of the report. |
|Deleted date |The date the user was deleted. |
|Last activity date  | The last time the user performed a read or send email activity. |
|Send actions |The number of times an email send action was recorded for the user.  |
|Receive actions  |The number of times an email received action was recorded for the user. |
|Read actions |The number of times an email read action was recorded for the user. |
|Meeting created actions  |The number of times a meeting request send action was recorded for the user. |
|Meeting interacted actions |The number of times a meeting request accept, tentative, decline, or cancel action was recorded for the user. |
|Product assigned  |The products that are assigned to this user.  |

[!INCLUDE [display-user-specific-data](../../includes/display-user-specific-data.md)]

To add or remove columns from the report, select **Choose columns**.  

:::image type="content" source="../../media/80ffa0ad-61c5-4a6f-8a1d-5f6730ff7da9.png" alt-text="Screenshot of the email activity report column options." lightbox="../../media/80ffa0ad-61c5-4a6f-8a1d-5f6730ff7da9.png":::

To export the report data into an Excel .csv file, select the **Export** link. This action exports data for all users and lets you do simple sorting and filtering for further analysis.

> [!NOTE]
> The Email activity report is only available for mailboxes that are associated with users who have licenses.
