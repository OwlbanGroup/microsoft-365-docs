---
title: "Set up the Standard or Targeted release options for Microsoft 365"
f1.keywords:
- CSH
ms.author: mabond
author: mkbond007
manager: dansimp
ms.date: 04/14/2026
audience: Admin
ms.topic: install-set-up-deploy
ms.service: microsoft-365-business
ms.localizationpriority: medium
ms.collection:
- Tier2
- M365-subscription-management
- Adm_O365
- Adm_TOC
ms.custom:
- AdminSurgePortfolio
- AdminTemplateSet
- tenant
search.appverid:
- BCS160
- MET150
- MOE150
- BEA160
- GEA150
ms.assetid: 3b3adfa4-1777-4ff0-b606-fb8732101f47
description: "Learn how to set up the targeted release option for new Microsoft 365 product and feature updates in the Microsoft 365 admin center."
appliesto:
- Outlook (new)
- OneDrive
- SharePoint in Microsoft 365
- Microsoft 365 for the web
- Microsoft 365 admin center
- Exchange Online
- Microsoft Teams
---

# Set up the Standard or Targeted release options for Microsoft 365

With Microsoft 365, you receive new product updates and features as they become available instead of doing costly updates every few years. You can manage how your organization receives these updates. For example, you can sign up for an early release so that your organization receives updates first. You can designate that only certain individuals receive the updates. Or, you can remain on the default release schedule and receive the updates later. This article explains the different release options and how you can use them for your organization.

If your organization is using targeted release for Microsoft 365 services, you can continue to do so as we drive towards our converged release strategy. We recommend configuring release preferences for frontier, standard, and deferred audiences to align with the new release model as Microsoft begins delivering an increasing number of major features through it over time. Use the Microsoft Message Center to keep up with new products and services that use the new, audience-based release model. For information about modern release options for Microsoft 365, see [Configure modern release options for Microsoft 365 Copilot](configure-release-options.md).

> [!IMPORTANT]
> The Microsoft 365 updates described in this article apply to new Outlook, OneDrive, SharePoint in Microsoft 365, Microsoft 365 for the web, Microsoft 365 admin center, some components of Exchange Online and Microsoft Teams. These release options are targeted, best effort ways to release changes to Microsoft 365 but can't be guaranteed at all times or for all updates. They don't currently apply to services other than those listed previously. For information about release options for Microsoft 365 Apps, see [Overview of update channels for Microsoft 365 Apps](/deployoffice/overview-update-channels).

## How release validation works

Any new release is first tested and validated by the feature team, then by the entire Microsoft 365 feature team, followed by all of Microsoft. After internal testing and validation, the next step is a **Targeted release** (formerly known as First release) to customers who opt in. At each release ring, Microsoft collects feedback and further validates quality by monitoring key usage metrics. This series of progressive validation is in place to make sure the worldwide-release is as robust as possible. The releases are pictured in the following figure.

![Release management validation rings for Microsoft 365.](../../media/Rings_Of_Progression.png)

For significant updates, customers are initially notified by the [Microsoft 365 Roadmap](https://products.office.com/business/office-365-roadmap). As an update gets closer to rolling out, it's communicated through your <a href="https://go.microsoft.com/fwlink/p/?linkid=2070717" target="_blank">Microsoft 365 Message center</a>.

## Standard release

For Microsoft 365, Standard release is the default option where you and your users receive the latest updates when they're released broadly to all customers.
  
## Targeted release

With this option, you and your users can be the first to see the latest updates and help shape the product by providing early feedback. You can choose to have individuals or the entire organization receive updates early.
  
> [!IMPORTANT]
> Large or complex updates may take longer than others so that no users are adversely affected. There is no guarantee on the exact timeline of a release. Targeted release is now available for customers with either the Office 365 GCC plan or the Office 365 GCC High plan and DoD plan for the following services: new Outlook, OneDrive, SharePoint in Microsoft 365, Microsoft 365 for web, Microsoft 365 admin center, and some components of Exchange Online.

> [!NOTE]
> If you switch from targeted release back to standard release track, your users may lose access to features that haven't reached standard release yet.
  
### Targeted release for entire organization

If you [Set up the release option in the admin center](#set-up-the-release-option-in-the-admin-center) for this option, all your users will get the Targeted release experience. For organizations with more than 300 users, we recommend using a test subscription for this option. For test subscription information, reach out to your Microsoft contact.
  
### Targeted release for selected users

If you [Set up the release option in the admin center](#set-up-the-release-option-in-the-admin-center) for this option, you can define specific users, usually power users, to receive early access to features and functionality.

It's important to ensure that your help desk is opted into Targeted release so that they have access to the Targeted release features needed to support your users.

> [!IMPORTANT]
> Some features only roll out on a per-organization basis. This means that the entire organization will receive access to the feature at the same time. For features like this, it’s not possible for selected users in the targeted release program to get the feature early. This means that your organization won't be able to receive these features early if you have configured selected users in targeted release. To make sure that you see all features in targeted release, you'll need to configure targeted release for the entire organization or set up a test organization.
  
## Benefits of Targeted release

Targeted release allows admins, change managers, or anyone else responsible for Microsoft 365 updates to prepare for the upcoming changes by letting them:
  
- Test and validate new updates before they're released to all users in the organization.
- Prepare user notification and documentation before updates are released worldwide.
- Prepare internal help-desk for upcoming changes.
- Go through compliance and security reviews.
- Use feature controls, where applicable, to control the release of updates to end users.

## Best practices for Targeted release

- Keep most users in standard release and assign IT pros and power users to targeted release to evaluate new features ahead of broader rollout. Targeted release users can then prepare user notifications, documentation, and the internal help desk before updates are released worldwide.
- Only assign specific users in targeted release.
- If you need to test a feature in targeted release with a larger group of users (or a tenant), consider using a test tenant instead of putting your entire organization in targeted release.

## Set up the release option in the admin center

You can change how your organization receives Microsoft 365 updates by following these steps. You have to be a global admin in Microsoft 365 to opt in.

[!INCLUDE [global-administrator-note](../../includes/global-administrator-note.md)]
  
It can take up to 24 hours for the following changes to take effect in Microsoft 365. If you opt out of targeted release after enabling it, your users might lose access to features that haven't reached the scheduled release yet.
  
1. In the admin center, go to the **Settings** > **Org Setting**, and under the <a href="https://go.microsoft.com/fwlink/p/?linkid=2067339" target="_blank">**Organization profile** tab</a>, choose **Release preferences**.
1. To opt out of targeted release, select **Standard release**, then select **Save changes**.
1. To enable targeted release for all users in your organization, select **Targeted release for everyone**, then select **Save changes**.
1. To enable targeted release for some people in your organization, select **Targeted release for selected users**, then select **Save**.
1. Choose **Select users** to add users one at a time, or **Upload users** to add them in bulk.
1. When you're done adding users, select **Save**.

:::image type="content" alt-text="Screenshot: Showing the set up release option in the Microsoft 365 admin." source="../../media/release_option_admincenter.png" lightbox="../../media/release_option_admincenter.png":::

## Next steps

Discover how to [manage messages](/office365/admin/manage/message-center) in your <a href="https://go.microsoft.com/fwlink/p/?linkid=2070717" target="_blank">Microsoft 365 Message center</a> to get notifications about upcoming Microsoft 365 updates and releases.

## Related content

[Modern change management for Microsoft 365 - Overview](plan-for-change-management.md)

[Configure modern release options for Microsoft 365 Copilot](configure-release-options.md)

[Get started with the Microsoft Release Communications MCP Server](mrc-mcp.md)

[Prepare for Microsoft 365 updates with Message center](message-center.md)

[Release notes for Outlook for Windows (new) Targeted Release](/officeupdates/release-notes-outlook-new-targeted)
