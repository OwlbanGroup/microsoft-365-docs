---
title: "Resolve subscriptions detached from CSP partners in the Microsoft 365 admin center"
f1.keywords:
- CSH
- MACGlobalDetachedSubscriptions
author: cmcatee-MSFT
ms.author: cmcatee
manager: scotv
ms.reviewer: patyc
audience: Admin
ms.topic: how-to
ms.service: microsoft-365-business
ms.subservice: m365-commerce-acquisition
ms.localizationpriority: medium
ms.collection:
- Tier1
- scotvorg
- M365-subscription-management
- Adm_O365
ms.custom:
- commerce_subscriptions
- QuickDraft
- AdminTemplateSet
- campaignIDs-batch1
search.appverid: MET150
ROBOTS: NOINDEX, NOFOLLOW
description: "Learn how to fix detached subscriptions in the Microsoft 365 admin center. Find a new CSP partner or buy directly from Microsoft to maintain your services."
ms.date: 02/27/2026
---

# Resolve subscriptions detached from CSP partners

When you buy a subscription from a Microsoft Cloud Solution Provider (CSP), and that partner is no longer part of the CSP network, they no longer manage your subscription on your behalf. We call these subscriptions *detached subscriptions*. Without an associated partner, the subscription is unmanaged, and access to services is disrupted when the process to delete the subscription starts. This article explains your options for resolving these subscriptions, either by finding a new partner or buying a subscription directly from Microsoft.

## Find a new partner

If you choose to find a new partner, you can explore available partners through the [Partner Directory on AppSource](https://appsource.microsoft.com/marketplace/partner-dir?filter=services%3DLicensing). This site lets you search for partners based on your specific products and requirements. When you contact a new partner, make sure to ask if they're a CSP. To learn more about working with a partner, see [Manage Microsoft-certified solution provider partner relationships](../manage-partners.md).

## Buy a subscription directly from Microsoft

- When you buy a subscription from Microsoft, you get direct billing and support. For more information, see [Learn how to buy a new subscription](../try-or-buy-microsoft-365.md) and [Explore Microsoft 365 for business support plans](https://www.microsoft.com/microsoft-365/business/microsoft-365-for-business-support-options?msockid=15af1489bfd667952f27000abefb66ef).

- If you bought your subscription through a Microsoft representative, contact them to explore consolidating your subscriptions under an existing agreement. 

> [!IMPORTANT]
> If you choose to move and buy your subscription directly from Microsoft, to avoid service disruptions, you must buy a subscription for the same product or service that you currently have with a CSP partner and assign the licenses to the same users.

## Frequently asked questions (FAQs)

### Why am I receiving an "[ACTION REQUIRED] Subscription(s) at risk of deletion" email? What does deprovisioning mean for my subscription?

You receive this notice because your subscription is associated with a partner who is no longer authorized to transact as a CSP. Deprovisioning means if you don’t take the necessary action, your access to the subscription will be terminated and your data will be at risk of deletion. To avoid service disruption and data deletion, you must follow the guidance on [transferring your subscriptions to another CSP partner](#find-a-new-partner) or [buy directly from Microsoft](#buy-a-subscription-directly-from-microsoft).

### I want to continue my service. What options do I have?  

To continue your service, [transfer your subscriptions to another CSP partner](#find-a-new-partner) or [buy directly from Microsoft](#buy-a-subscription-directly-from-microsoft).

- If your indirect reseller was deauthorized, the distributor (details shared with you in the email) can also assist you in identifying a new indirect reseller to work with.
- If your distributor was deauthorized, work with your indirect reseller to make sure they take action to engage with a new distributor.   
- If your deauthorized partner is a direct bill partner, the new direct bill partner you select can advise you on the steps you need to take.

If you're unsure which partner type applies to you, refer to the "[ACTION REQUIRED] Subscription(s) at risk of deletion" email.

### Can I extend or renew my subscription to avoid deprovisioning?

No, extension or renewal isn't available in this scenario. Follow the guidance on [transferring your subscriptions to another CSP partner](#find-a-new-partner) or [buy directly from Microsoft](#buy-a-subscription-directly-from-microsoft).

### Where can I see the date when my subscriptions will be canceled in the Microsoft 365 admin center and Azure portal?

In the Microsoft 365 admin center and Azure portal, the date appears at the top of the subscription details page in a banner for subscriptions that are attached to a partner that's being deauthorized.

### How does this affect my business processes, integrations, or users?

Disabled subscriptions affect your workflows, integrations, and user access. To minimize disruption, follow the guidance on [transferring your subscriptions to another CSP partner](#find-a-new-partner) or [buy directly from Microsoft](#buy-a-subscription-directly-from-microsoft).

### I'm having trouble accessing my account to retrieve my data before deprovisioning.

If you can't access your account, contact your transacting partner for support immediately for step-by-step assistance.

> [!NOTE]
> You must have at least one subscription bought through Microsoft to access Microsoft support. If you bought all your subscriptions through a partner, contact your partner for support.

### What happens to my data? Can I export or migrate my information before deprovisioning?

Yes, you can back up, export, or migrate your data before your subscription is deprovisioned. To avoid data loss, make sure you back up, export, or migrate your data within the specified period. You must complete this step before your expiration date. For more information, see [What happens to my data and access when my Microsoft 365 for business subscription ends?](what-if-my-subscription-expires.md)

### Where can I find information about the terms and conditions that apply to deprovisioning?

You can find relevant terms and conditions in your service agreement and in the documentation linked in your notice.

### Will I receive a refund for my pre-paid subscriptions?

Your billing relationship is with the CSP partner through whom you purchased the subscriptions. Work with your partner to determine if you're eligible for a prorated refund. If applicable, take action after you receive notification of your partner's deauthorization.

## Related content

[Find your Microsoft 365 partner or reseller - Microsoft 365 admin](../../admin/manage/find-your-partner-or-reseller.md) (article)\
[Azure Partners – Find an Azure Expert Partner | Microsoft Azure](https://azure.microsoft.com/partners/) (resource)\
[Try or buy a Microsoft 365 for business subscription - Microsoft 365 admin](../try-or-buy-microsoft-365.md) (article)\
[Add, change, or delete a Microsoft 365 subscription advisor partner - Microsoft 365 admin](../../admin/misc/add-partner.md) (article)\
[Transfer subscriptions under an Azure plan from one partner to another - Microsoft Cost Management | Microsoft Learn](/azure/cost-management-billing/manage/azure-plan-subscription-transfer-partners) (article)\
[Flexible Purchasing Options for Azure | Microsoft Azure](https://azure.microsoft.com/pricing/purchase-options/?msockid=142c08295c736ddf26821d165d996c73) (resource)\
[Get support for Microsoft 365 for business](../../admin/get-help-support.md) (article)\
[Subscription Lifecycle States - Partner Center | Microsoft Learn](/partner-center/customers/subscription-lifecycle) (article)\
[About administrator roles in the Microsoft 365 admin center](../../admin/add-users/about-admin-roles.md) (article)\
[Home | Microsoft Licensing Resources](https://www.microsoft.com/licensing#mca) (resource)
