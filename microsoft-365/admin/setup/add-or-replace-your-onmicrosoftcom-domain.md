---
title: Add or replace a onmicrosoft.com fallback domain
f1.keywords:
- NOCSH
ms.author: frankroj
author: frankroj
manager: scotv
ms.date: 04/23/2026
audience: Admin
ms.topic: how-to
ms.service: microsoft-365-business
ms.subservice: m365-domains
ms.localizationpriority: medium
ms.collection:
  - Tier2
  - scotvorg
  - highpri
  - M365-subscription-management
  - Adm_O365_Setup
  - Adm_O365
  - Adm_TOC
  - operations-pod
ms.custom:
- VSBFY23
- TopSMBIssues
- SaRA
- MSStore_Link
- okr_smb
- business_assist
- AdminSurgePortfolio
- AdminTemplateSet
- domains
search.appverid:
- BCS160
- MET150
- MOE150
ms.assetid:
description: Learn how to add a new onmicrosoft.com domain and set it as your fallback domain in Microsoft 365. Follow step-by-step instructions to get started.
#customer intent: As an IT admin, I want to add a new onmicrosoft.com domain so that I can customize my organization's fallback domain.
---

# Add or replace a onmicrosoft.com fallback domain in Microsoft 365

When you sign up for Microsoft 365, Microsoft provides an *onmicrosoft.com* domain. The *onmicrosoft.com* domain is your **fallback domain**. Microsoft provides the fallback domain in case you don't own a domain or don't want to connect a domain to Microsoft 365. An example of a fallback domain is:

> [!IMPORTANT]
> To prevent misuse and help improve deliverability of customer email, we recommend that onmicrosoft.com domains should only be used for testing purposes, not sending regular email.
>
> Starting **October 15, 2025**, we are introducing limits that might restrict your Microsoft 365 environment from sending to more than 100 external recipients per 24 hours, see: [Limiting Onmicrosoft Domain Usage for Sending Emails](https://techcommunity.microsoft.com/blog/exchange/limiting-onmicrosoft-domain-usage-for-sending-emails/4446167).

When you sign up for Microsoft 365, Microsoft provides an *onmicrosoft.com* domain - your **fallback domain** - in case you don't own a domain, or don't want to connect it to Microsoft 365 (for example, tailspintoys.onmicrosoft.com). Your fallback domain is used by default in:

Use your fallback domain by default in:

- Usernames and email addresses.
- Microsoft 365 teams and groups email aliases.
- Automatic domain dependency moves.

The fallback domain serves as a default email routing address for your Microsoft 365 environment. When you set up a user with a mailbox, email routes to the fallback domain. If you use a custom domain, for example, `tailspintoys.com`, and you delete that custom domain from your Microsoft 365 environment, the fallback domain ensures that your user's email is successfully routed.

You can change your fallback domain in the Microsoft 365 admin center. Common reasons customers change their fallback domain include:

- They didn't know the company name to use when they first signed up for Microsoft 365. Now that they know the company name, they want their users to have sign in account names that are appropriate.

- They want to change how their SharePoint URLs look when they create a new site. SharePoint URLs in your Microsoft 365 environment are created based on your fallback domain name. If you didn't use the correct company name when you first signed up, your SharePoint URLs for your sites continue to use that name when you create new SharePoint sites.

While you can add more onmicrosoft.com domains, you can use only one onmicrosoft.com domain as your fallback domain. The steps in this article describe how to:

- Create a new onmicrosoft.com domain.
- Assign it as your fallback domain.

> [!WARNING]
>
> You're limited to a total of five onmicrosoft.com domains in your Microsoft 365 environment. Once created, onmicrosoft.com domains can't be deleted.

## Before you begin

To add, modify, or remove domains, you must be a **Domain Name Administrator** of a [business or enterprise plan](https://products.office.com/business/office). These changes affect the whole tenant. *Custom admin roles* or *regular users* can't make these changes.

## Add a new onmicrosoft.com domain

To add a new onmicrosoft.com domain, follow these steps:

1. Sign in to the [Microsoft 365 admin center](https://go.microsoft.com/fwlink/p/?linkid=2024339).

1. From the left navigation bar, select **… Show all**, and then select **Settings** to expand it.

1. Under **Settings**, select [**Domains**](https://go.microsoft.com/fwlink/p/?linkid=834818).

1. In the **Domains** page, select your onmicrosoft.com default domain.

    :::image type="content" source="../../media/onmicrosoft-domains.png" alt-text="Screenshot of the Domains page showing the onmicrosoft.com default domain." lightbox="../../media/onmicrosoft-domains.png":::

1. On the domain properties page, in the **About this domain** section, select **Add onmicrosoft domain**.

    :::image type="content" source="../../media/add-onmicrosoft-domain-link.png" alt-text="Screenshot of the About this domain section with the Add onmicrosoft domain link." lightbox="../../media/add-onmicrosoft-domain-link.png":::

1. In the **Add onmicrosoft domain** page, in the **Domain name** box, type the name for your new onmicrosoft.com domain.

    :::image type="content" source="../../media/add-an-onmicrosoftcom-domain-page.png" alt-text="Screenshot of the Add onmicrosoft domain page with the Domain name box." lightbox="../../media/add-an-onmicrosoftcom-domain-page.png":::

    > [!IMPORTANT]
    >
    > Make sure to verify the spelling and accuracy of the domain name you entered. You're limited to five onmicrosoft.com domains, and currently you can't delete them once you create them.

1. Select **Add domain**. When you add the domain successfully, you see a message stating that it was successfully added.

    :::image type="content" source="../../media/domain-added.png" alt-text="Screenshot of the confirmation message indicating the domain was added successfully." lightbox="../../media/domain-added.png":::

## Make your new onmicrosoft.com domain your fallback domain

> [!TIP]
>
> Before changing your fallback domain to a new onmicrosoft.com domain, consider changing your onmicrosoft.com SharePoint domain. Creating another onmicrosoft.com domain and using it as your fallback domain doesn't rename SharePoint in Microsoft 365. Your existing SharePoint and OneDrive URLs stay the same.
>
> You can change your.onmicrosoft.com SharePoint domain through the PowerShell steps provided in [SharePoint domain rename preview](/sharepoint/change-your-sharepoint-domain-name).

After you create your new onmicrosoft.com domain, change your fallback domain:

1. Sign in to the [Microsoft 365 admin center](https://go.microsoft.com/fwlink/p/?linkid=2024339).

1. From the left navigation bar, select **… Show all**, and then select **Settings** to expand it.

1. Under **Settings**, select [**Domains**](https://go.microsoft.com/fwlink/p/?linkid=834818).

1. In the **Domains** page, select the new onmicrosoft.com domain that you created.

    :::image type="content" source="../../media/onmicrosoft-domains-added.png" alt-text="Screenshot of the Domains page showing the newly added onmicrosoft.com domain." lightbox="../../media/onmicrosoft-domains-added.png":::

1. On the domain's property page, select **Make fallback domain**.

    :::image type="content" source="../../media/new-fallback.png" alt-text="Screenshot of the domain property page with the Make fallback domain option." lightbox="../../media/new-fallback.png":::

1. A message displays on the page stating that your fallback domain changed to the new domain.

    :::image type="content" source="../../media/fallback-success.png" alt-text="Screenshot of the confirmation message indicating the fallback domain was successfully changed." lightbox="../../media/fallback-success.png":::

## Support

[!INCLUDE [How to get tech support for SMB](../../includes/smb-how-to-get-tech-support.md)]

## Related content

- [Domains FAQ](domains-faq.yml).
- [What is a domain?](../get-help-with-domains/what-is-a-domain.md).
- [Buy a domain name in Microsoft 365](../get-help-with-domains/buy-a-domain-name.md).
- [Connect your domain by adding DNS records](../get-help-with-domains/create-dns-records-at-any-dns-hosting-provider.md).
- [Change nameservers to set up Microsoft 365 with any domain registrar](../get-help-with-domains/change-nameservers-at-any-domain-registrar.md).
- [Small business help & learning](https://go.microsoft.com/fwlink/?linkid=2224585).
