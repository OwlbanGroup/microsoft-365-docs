---
title: "Microsoft 365 admin center usage reports overview"
f1.keywords:
- NOCSH
ms.author: cmcatee
author: cmcatee-MSFT
manager: scotv
ms.reviewer: cmcatee
audience: Admin
ms.topic: overview
ms.service: microsoft-365-business
ms.localizationpriority: high
ms.collection:
 - M365-subscription-management
 - Adm_O365
ms.custom:
- adminvideo
- AdminTemplateSet
- GAUpdates
search.appverid:
- MET150
- MOE150
- GEA150
ai-usage: ai-assisted
ms.assetid: 0d6dfb17-8582-4172-a9a9-aed798150263
description: "Monitor user activity, track license usage, and identify trends with Microsoft 365 admin center usage reports. Learn how to optimize your Microsoft 365 environment and improve productivity."
ms.date: 04/03/2026
---

# Microsoft 365 admin center usage reports overview

Check out [Microsoft 365 small business help](https://go.microsoft.com/fwlink/?linkid=2197659) on YouTube.

Microsoft 365 admin center usage reports provide insight into how people in your organization use Microsoft 365 for business services. For example, you can see who uses a service to the fullest extent and who barely uses it and might not need a Microsoft 365 license. 

> [!NOTE]
> Usage reports don't include perpetual license models.
  
Usage reports are generally available for the last 7, 30, 90, and 180 days. For details about specific report availability, see [the individual usage report articles](#available-usage-reports-in-the-microsoft-365-admin-center). Data doesn't exist for all reporting periods right away. The reports typically become available within 24 to 72 hours, but might sometimes take several days to become available.

## Watch: Act on a usage report in Microsoft 365
  
Check out this and other videos on our [YouTube channel](https://go.microsoft.com/fwlink/?linkid=2198103).

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=f8007c63-a8a0-44ee-ab5b-0ac799333496]

## Before you begin

To view usage reports, you must have one of the following permissions:

- Global Administrator
    [!INCLUDE [global-administrator-note](../../includes/global-administrator-note.md)]
- Exchange Administrator
- SharePoint Administrator
- Global Reader (with no user details)
- Usage Summary Reports Reader (with no user details). By default, this role has read access to user, groups, and other settings in the Microsoft 365 admin center, because the role is based on Microsoft Entra.
- Reports Reader
- Teams Administrator
- Teams Communications Administrator
- User Experience Success Manager (with no user details)
- AI Administrator

For more information, see [About admin roles](../add-users/about-admin-roles.md) and [Assign admin roles](../add-users/assign-admin-roles.md).

## View the Reports dashboard

[!INCLUDE [office-365-operated-by-21vianet-admin-center-link](../../includes/office-365-operated-by-21vianet-admin-center-link.md)]

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Reports**. If you don't see **Reports**, select **Show all**, and then select **Reports**.
1. Select <a href="https://go.microsoft.com/fwlink/p/?linkid=2074756" target="_blank">Usage</a>.
1. Select **View more** from the at-a-glance activity card for a service (such as email or OneDrive) to see the report details page. On that page, different reports for the service are provided in tabs.

   :::image type="content" alt-text="Screenshot of the Usage dashboard showing Microsoft 365 service activity cards and analytics." source="../../media/activity-usage-analytics3.png" lightbox="../../media/4c0f966d-9d2b-4a6f-a106-a6e2b9a2de07.png":::

## Available usage reports in the Microsoft 365 admin center

Depending on your subscription, the following reports are available in all environments:

|Report|Public|GCC|GCC-High|DoD|Microsoft 365 operated by 21Vianet|
|:-----|:-----|:-----|:-----|:-----|:-----|
|[Active Users](active-users-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[Microsoft browser usage](browser-usage-report.md)|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>1</sup>|
|[Microsoft 365 Copilot readiness](microsoft-365-copilot-readiness.md)|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Microsoft 365 Copilot usage](microsoft-365-copilot-usage.md)|Yes|Yes|N/A<sup>1</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Microsoft 365 Copilot Agent usage](microsoft-365-copilot-agents.md) | Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Microsoft 365 Copilot Chat usage](microsoft-copilot-usage.md)|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Microsoft 365 Copilot credits](microsoft-365-copilot-credits.md)|Yes|N/A|N/A|N/A|N/A|
|[Microsoft Copilot Search usage](microsoft-365-copilot-search-usage.md)|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>2</sup>|
|[Email activity](email-activity-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[Email apps usage](email-apps-usage-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[Mailbox usage](mailbox-usage.md)|Yes|Yes|Yes|Yes|Yes|
|[Microsoft 365 Groups](office-365-groups-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[Microsoft 365 Apps usage](microsoft365-apps-usage-ww.md)|Yes|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|Yes|
|[Office activations](microsoft-office-activations-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[OneDrive user activity](onedrive-for-business-activity-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[OneDrive usage](onedrive-for-business-usage-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[SharePoint site usage](sharepoint-site-usage-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[SharePoint activity](sharepoint-activity-ww.md)|Yes|Yes|Yes|Yes|Yes|
|[SharePoint storage](sharepoint-storage-reports.md)|Yes|Yes|Yes|Yes|Yes|
|[Microsoft Teams user activity](microsoft-teams-user-activity-preview.md)|Yes|Yes|Yes|Yes|N/A<sup>1</sup>|
|[Microsoft Teams device usage](microsoft-teams-device-usage-preview.md)|Yes|Yes|Yes|Yes|N/A<sup>1</sup>|
|[Microsoft Teams team activity](microsoft-teams-usage-activity.md)|Yes|Yes|Yes|Yes|N/A<sup>1</sup>|
|[Viva Engage activity](viva-engage-activity-report-ww.md)|Yes|Yes|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Viva Engage device usage](viva-engage-device-usage-report-ww.md)|Yes|Yes|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Viva Engage groups activity](viva-engage-groups-activity-report-ww.md)|Yes|Yes|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Forms activity](forms-activity-ww.md)|Yes|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>1</sup>|
|[Dynamics 365 Customer Voice activity](forms-pro-activity-ww.md)|Yes|Yes|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Skype for Business Online activity](/SkypeForBusiness/skype-for-business-online-reporting/activity-report)|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2|
|[Skype for Business Online conference organized activity](/SkypeForBusiness/skype-for-business-online-reporting/conference-organizer-activity-report)|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2|
|[Skype for Business Online conference participant activity](/SkypeForBusiness/skype-for-business-online-reporting/conference-participant-activity-report)|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2|
|[Skype for Business Online peer-to-peer activity](/SkypeForBusiness/skype-for-business-online-reporting/peer-to-peer-activity-report)|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2|
|[Viva Learning activity](viva-learning-activity.md)|Yes|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|
|[Viva Insights activity](viva-insights-activity.md)|Yes|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>2</sup>|
|[Project activity](project-activity.md)|Yes|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>2</sup>|
|[Visio activity](visio-activity.md)|Yes|Yes|N/A<sup>1</sup>|N/A<sup>1</sup>|N/A<sup>2</sup>|
|[Viva Goals activity](viva-goals-activity.md)|Yes|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|N/A<sup>2</sup>|

N/A<sup>1</sup>: The report will be released in the future. The <a href="https://www.microsoft.com/microsoft-365/roadmap?filters=" target="_blank">Microsoft 365 Roadmap</a> will be updated before the release.

N/A<sup>2</sup>: The service isn't available in the environment; hence, there's no plan to release the report.

## View licensing information

To see how many licenses you assigned and unassigned, use the following steps:

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Billing** \> <a href="https://go.microsoft.com/fwlink/p/?linkid=842264" target="_blank">Licenses</a>.

To see who is licensed, unlicensed, or a guest, use the following steps:

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Users** \> <a href="https://go.microsoft.com/fwlink/p/?linkid=834822" target="_blank">Active users</a>.

## View usage information for a specific user

Use the service reports to research to what extent a specific user is using the service. For example, to find out how much mailbox storage a specific user consumed, open the Mailbox usage report, and sort the users by name. If you have thousands of users, export the report to Excel, Power BI, or use the Microsoft Graph reports API.

You can't generate a report where you enter a user's account and then get a list of which services they're using and how much.

New users sometimes display as **unknown**. This problem usually happens because of occasional delays in creating user profiles.

## Show user, group, or site details in usage reports

Reports provide information about your organization's usage data. By default, all reports hide user information such as usernames, display names, groups, and sites to help companies support local privacy laws.

By default, your user list looks like the following screenshot:

:::image type="content" source="../../media/2ed99bce-4978-4ee3-9ea2-4a8db26eef02.png" alt-text="Screenshot of the anonymized user list." lightbox="../../media/2ed99bce-4978-4ee3-9ea2-4a8db26eef02.png":::

The organization setting that hides or shows this information applies to the following properties:

|Property  |Attributes  |
|---------|---------|
|Properties for user-level in many reports|User IDs, Usernames, and User principal names         |
|Properties for OneDrive and SharePoint site usage reports     | Site IDs and Site URLs          |
|Properties for Microsoft 365 apps Group usage report     | Group IDs and Group names        |
|Properties for Viva Engage group usage report     | Group name and Group admin          |
|Properties for Teams team usage report     | Team names         |

Other reports, such as some reports in the Microsoft Teams admin center, follow this organization setting.

Global administrators can update the settings to display concealed information if your organization's privacy practices allow it.

[!INCLUDE [global-administrator-note](../../includes/global-administrator-note.md)]

It takes a few minutes for these changes to take effect. This setting also applies to the Microsoft 365 usage reports in [Microsoft Graph](/graph/api/resources/report) and [Power BI](/microsoft-365/admin/usage-analytics/usage-analytics) and to [the usage reports in Microsoft Teams Admin center](/microsoftteams/teams-analytics-and-reports/teams-reporting-reference). Showing identifiable user information is a logged event in the Microsoft Purview portal audit log.

### Use the Microsoft 365 admin center to show user, group, or site details

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Settings**. If you don't see **Settings**, select **Show all**, and then select **Settings**.
1. Select <a href="https://go.microsoft.com/fwlink/p/?linkid=2053743" target="_blank">Org Settings</a>. 
1. On the **Services** tab, select **Reports**.
1. In the **Reports** panel, select the checkbox next to **Display Concealed user, group, and site names in all reports**. 
1. Select **Save**. 

### Use adminReportSettings to show user, group, or site details

Admins can use an API in all environments to change this setting without needing to visit the Microsoft 365 admin center. For more information, see [adminReportSettings resource type](/graph/api/resources/adminreportsettings?view=graph-rest-beta&preserve-view=true).

Two methods are approved for this API:

:::image type="content" source="../../media/api-show-details.png" alt-text="Screenshot of the API methods to change settings without using the Microsoft 365 admin center." lightbox="../../media/api-show-details.png":::

The report only contains a **Privacy Setting** property. For more information about Graph API, see [Use the Microsoft Graph API](/graph/use-the-api). You can use the Software Development Kit (SDK) or directly call the API by using any programming language with network ability, like [Graph Explorer](/graph/graph-explorer/graph-explorer-overview).

## What happens to usage data when I delete a user account?

When you delete a user account, Microsoft deletes that user's usage data within 30 days. The usage chart totals still include deleted users for the periods they were active, but they don't appear in the User Details table.

However, when you select a particular day (up to 28 days from the current date), the report shows the user's usage for that day in the User Details table.

## How do I interpret the last activity date in user, group, or site details in the usage reports?

The last activity date in user, group, or site details represents the most recent date on which a user performed any intentional activity within the app, regardless of the selected time period of the past 7, 30, 90, or 180 days.

## Related content

[Microsoft 365 usage analytics](../usage-analytics/usage-analytics.md) (article)\
[Customize the reports in Microsoft 365 usage analytics](../usage-analytics/customize-reports.md) (article)\
[Working with Microsoft 365 usage reports in Microsoft Graph beta](/graph/api/resources/report?view=graph-rest-beta&preserve-view=true) (article)\
[Working with Microsoft 365 usage reports in Microsoft Graph v1.0](/graph/api/resources/report?view=graph-rest-1.0&preserve-view=true) (article)
