---
title: "SharePoint site usage report - Microsoft 365 admin center"
f1.keywords:
- NOCSH
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
search.appverid:
- BCS160
- MST160
- MET150
- MOE150
ai-usage: ai-assisted
description: "The SharePoint site usage report provides key metrics on file activity, storage, and sharing in Microsoft 365. Explore trends and manage your SharePoint sites efficiently."
ms.date: 04/28/2026
---

# SharePoint site usage report - Microsoft 365 admin center 

The SharePoint site usage report provides a high-level view of the value you get from SharePoint. The report includes details about the total number of files that users store in SharePoint sites, how many files are actively used, and the storage consumed across all these sites. You can drill into the SharePoint site usage report to understand the trends and per-site level details for all sites.

[!INCLUDE [microsoft-365-usage-reports-generic-intro](../../includes/microsoft-365-usage-reports-generic-intro.md)]

## View the SharePoint site usage report

For information about the roles needed to view usage reports, see [Microsoft 365 admin center usage reports overview](activity-reports.md).

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. In the navigation menu, select **Reports**. If you don't see **Reports**, select **Show all**, and then select **Reports**.
1. Select <a href="https://go.microsoft.com/fwlink/p/?linkid=2074756" target="_blank">Usage</a>.
1. On the **Usage** page, under **Reports**, select **SharePoint**.
1. On the report page, select the **Site usage** tab.

## Interpret the SharePoint site usage report

:::image type="content" source="../../media/d1cb6200-e81c-460b-9d05-53f4bd7cf5ee.png" alt-text="Microsoft 365 reports - Microsoft SharePoint site usage report." lightbox="../../media/d1cb6200-e81c-460b-9d05-53f4bd7cf5ee.png":::

To add or remove columns from the report, select **Choose columns**.

:::image type="content" source="../../media/71ac3195-c494-40c1-9346-a858125ef6df.png" alt-text="Screenshot of the columns available for the SharePoint site usage report." lightbox="../../media/71ac3195-c494-40c1-9346-a858125ef6df.png":::

To export the report data into an Excel .csv file, select the **Export** link. This action exports data for all users and lets you do simple sorting and filtering for further analysis.

The SharePoint site usage report displays trends over the last 7, 30, 90, or 180 days. However, if you select a particular day in the report, the table shows data for up to 28 days from the current date (not the date the report was generated).

|Metric|Description|
|:-----|:-----|
|Site URL  |The full URL of the site. |
|Deleted  |The deletion status of the site. The site is marked as deleted after at least 7 days.  |
|Site owner  |The username of the primary owner of the site.   |
|Site owner principal name  |The email address of the owner of the site. |
|Last activity date (UTC)  | The most recent date when activity occurred on the site or OneDrive account within the selected reporting period. Last activity date is retained for up to 180 days. For active and inactive sites, the report shows the most recent activity date within that 180-day window. If a site is disabled, the last activity date is dropped and might no longer appear in the report.  |
|Site sensitivity label ID  | The sensitivity label on the site.  |
|External sharing  | The value of the external sharing setting for the site. This value doesn't reflect changes to the effective setting made by site sensitivity labels. If you use sensitivity labels, use the [data access governance reports](/sharepoint/data-access-governance-reports) to get the correct values.|
|Unmanaged device policy  | The site access policy for unmanaged devices.  |
|Geo location  | The Geo location of the site.  |
|Files  |The number of files on the site. |
|Active files  | The number of active files on the site. A file is active if it's saved, synced, modified, or shared within the specified time period.<br/> **NOTE:** If files were removed during the specified time period for the report, the number of active files shown in the report might be larger than the current number of files on the site.  |
|Storage used (MB)  |The amount of storage currently used on the site.  |
|Storage allocated (MB)  |The maximum amount of storage allocated for the site.  |
|Page views  |The number of times pages were viewed on the site.  |
|Pages visited  |The number of unique pages that were visited on the site.  |
|Anonymous link count  |The number of times documents or folders are shared using "Anyone with the link" on the site.  |
|Company link count  |The number of times documents or folders are shared using "People in org with the link" on the site.  |
|Secure link for guest count  |The number of times documents or folders are shared using "specific people" on the site.  |
|Secure link for member count  |The number of times documents or folders are shared using "specific people" on the site.  |
|Root Web Template  |The template used for creating the site.<br/><br/>**NOTE**: To filter the data by different site types, export the data and use the Root Web Template column. |
|Site ID | The site ID of the site. |

[!INCLUDE [display-user-specific-data](../../includes/display-user-specific-data.md)]

>[!NOTE]
>The SharePoint site URL doesn't display if [BYOK](/azure/information-protection/byok-price-restrictions) or [Customer Lockbox](/azure/security/fundamentals/customer-lockbox-overview) is enabled. If you meet the requirement, submit a request via [ODSP Site URLs Displaying Request](https://forms.office.com/r/16hLY6na5W). The site URL is visible within one week. If the requirement isn't met, you can use PowerShell. To follow the steps, see [Use PowerShell to resolve site URLs](resolve-site-urls.md).

You might see differences between the sites listed in the Site udage report and those listed on the **Sites** > <a href="https://go.microsoft.com/fwlink/?linkid=2185220" target="_blank">Active sites</a> page in the <a href="https://go.microsoft.com/fwlink/?linkid=2185219" target="_blank">SharePoint admin center</a> because certain site templates and URLs aren't included as Active sites. For more information, see [Manage sites in the SharePoint admin center](/sharepoint/manage-sites-in-new-admin-center).
