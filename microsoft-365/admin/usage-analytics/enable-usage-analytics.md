---
title: Enable Microsoft 365 usage analytics
f1.keywords:
- CSH
ms.author: efrene
author: efrene
manager: scotv
ms.date: 04/29/2026
audience: Admin
ms.topic: how-to
ms.service: microsoft-365-business
ms.localizationpriority: medium
ms.collection:
- Tier2
- M365-subscription-management
- Adm_O365
- Adm_TOC
- operations-pod
ms.custom:
- AdminTemplateSet
- admindeeplinkMAC
search.appverid:
- BCS160
- MET150
- MOE150
ms.assetid: 9db96e9f-a622-4d5d-b134-09dcace55b6a
description: Learn how to start collecting data for your tenant by using the Microsoft 365 Usage Analytics template app in Power BI.
---

# Enable Microsoft 365 usage analytics

To enable Microsoft 365 usage analytics in a Microsoft 365 US Government Community Cloud (GCC) tenant, see [Connect to Microsoft 365 Government Community Cloud (GCC) data with Usage Analytics](connect-to-gcc-data-with-usage-analytics.md).

## Before you begin

To get started with Microsoft 365 usage analytics, you must first make the data available in the [Microsoft 365 admin center](https://go.microsoft.com/fwlink/p/?linkid=2024339), then select **Reports** > **Usage** and initiate the template app in Power BI.

## Get Power BI

If you don't already have Power BI, you can [sign up for Power BI Pro](https://go.microsoft.com/fwlink/p/?linkid=845347). Select **Try free** to sign up for a trial, or **Buy now** to get Power BI Pro.

You can also expand **Products** to buy a version of Power BI.

> [!NOTE]
>
> You must have a Power BI Pro license to install, customize, and distribute a template app. For more information, please see [Prerequisites](/power-bi/service-template-apps-install-distribute?source=docs#prerequisites).

To share your data, both you and the people who you share the data with need a Power BI Pro license. Or the content needs to be in a workspace in a [Power BI premium service](/power-bi/service-premium-what-is).

## Enable the template app

To enable the template app, you have to be a **Global administrator**.

[!INCLUDE [global-administrator-note](../../includes/global-administrator-note.md)]

For more information, see [about admin roles](../add-users/about-admin-roles.md).

1. Sign in to the [Microsoft 365 admin center](https://admin.cloud.microsoft/).

1. From the left navigation bar, select **… Show all**, and then select **Settings** to expand it.

1. Under **Settings**, select [**Org Settings**](https://admin.cloud.microsoft/?#/Settings/SecurityPrivacy).

1. In the **Org Settings** page, select the **Services** tab, and then select **Reports**.

1. Under **Microsoft 365 usage analytics** in the **Reports** panel, select the option **Make report data available to Microsoft 365 usage analytics for Power BI**.

1. Select **Save**.

The data collection process completes in two to 48 hours depending on the size of your tenant. The **Go to Power BI** button is enabled (no longer gray) when data collection is complete. Once complete, the app provides historical usage data at your organization level.

> [!NOTE]
>
> The data for the **"User Activity"** tab is only refreshed after the 15th day of the current month and the first day of the next month, so it will remain empty initially until the first refresh is completed.

## Start the template app

To start the template app, you have to have one of the following roles:

- [**Report Reader**](/entra/identity/role-based-access-control/permissions-reference#reports-reader).
- [**Exchange Administrator**](/entra/identity/role-based-access-control/permissions-reference#exchange-administrator).
- [**Skype for Business Administrator**](/entra/identity/role-based-access-control/permissions-reference#skype-for-business-administrator).
- [**SharePoint Administrator**](/entra/identity/role-based-access-control/permissions-reference#sharepoint-administrator).

1. Copy the tenant ID and select **Go to Power BI**.

1. When you get to Power BI, sign in. Then **Select Apps**->**Get apps** from the navigation menu.

1. In the **Apps** tab, type Microsoft 365 in the search box and then select **Microsoft 365 usage analytics** \> **Get it now**.

    [![Select Get it now.](../../media/78102250-9874-4a32-8365-436f13560b52.png)](https://app.powerbi.com/groups/me/getapps/services/cia_microsoft365.microsoft-365-usage-analytics)

1. Once the app is installed, open it by selecting the tile.

1. Select **Explore app** to view the app with sample data. Choose **Connect** to connect the app to your organization's data.

1. Choose **Connect**, on the **Connect to Microsoft 365 usage analytics** screen, then type in the tenant ID (without dashes) you copied in step (1), and select **Next**.

1. On the next screen, select **OAuth2** as the **Authentication method** \> **Sign in**. If you choose any other authentication method, the connection to the template app fails.

    ![Choose Microsoft account as authentication method.](../../media/ab6f0463-c3f7-4088-a605-67c699fa86adnew.png)

1. After the template app is instantiated, the Microsoft 365 usage analytics dashboard is available in Power BI on the web. The initial loading of the dashboard takes between 2 to 30 minutes.

Tenant level aggregates will be available in all reports after opting in. **User-level details will only become available around the 5th of the next calendar month after opting in**. This impacts all reports under User Activity (See [Navigate and utilize the reports in Microsoft 365 usage analytics](navigate-and-utilize-reports.md) for tips on how to view and use these reports).

## Display user-specific data

Reports provide information about your organization's usage data. By default, usernames and display names in usage reports are anonymous. Global administrators can update the settings to reveal usernames and display names if their organization's privacy practices allow it.

1. Sign in to the [Microsoft 365 admin center](https://admin.cloud.microsoft/).

1. From the left navigation bar, select **… Show all**, and then select **Settings** to expand it.

1. Under **Settings**, select [**Org Settings**](https://admin.cloud.microsoft/?#/Settings/SecurityPrivacy).

1. In the **Org Settings** page, select the **Services** tab, and then select **Reports**.

1. In the **Reports** panel, select the option **Display Concealed user, group, and site names in all reports**.

1. Select **Save**.

It takes a few minutes for these changes to take effect. Showing identifiable user information is a logged event in the Microsoft Purview portal audit log.

## Related content

- [About usage analytics](usage-analytics.md).
- [Get the latest version of usage analytics](get-the-latest-version-of-usage-analytics.md).
- [Navigate and utilize the reports in Microsoft 365 usage analytics](navigate-and-utilize-reports.md).
