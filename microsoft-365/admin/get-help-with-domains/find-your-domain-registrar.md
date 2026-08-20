---
title: Find your domain registrar and DNS hosting provider
f1.keywords:
- CSH
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
  - Adm_O365
  - Adm_O365_Setup
  - operations-pod
ms.custom:
- VSBFY23
- AdminSurgePortfolio
search.appverid:
- BCS160
- MET150
- MOE150
- GEA150
ms.assetid: b5b633ba-1e56-4a98-8ff5-2acaac63a5c8
description: Find your domain registrar and DNS hosting provider using the ICANN Lookup tool. Follow these steps to look up registration, nameserver, and DNS details.
#customer intent: As an admin, I want to find my domain registrar so that I can manage my domain settings effectively.
---

# Find your domain registrar and DNS hosting provider

Your domain registrar and DNS hosting provider are often the same company, but they can be different. The registrar manages your domain registration, while the DNS hosting provider manages the DNS records that route traffic for your domain.

## Use the ICANN Lookup tool

Use the ICANN Lookup tool to find your domain registrar and DNS hosting provider. The Internet Corporation for Assigned Names and Numbers (ICANN) provides this free lookup page where you can view registration and nameserver details for any domain name.

> [!NOTE]
>
> The ICANN website is a non-Microsoft site. Microsoft doesn't control the information provided on the ICANN site. The information provided on the ICANN website might be inaccurate or out of date. Additionally, ICANN might change their website and tools so that the steps in this article are no longer valid. Microsoft isn't responsible for the accuracy or reliability of the information provided on the ICANN website.

To find your domain registrar and DNS hosting provider at the ICANN site, follow these steps:

1. Go to the [ICANN Lookup](https://lookup.icann.org/) page.

    Once at the ICANN Lookup page, use the **Registration data lookup tool** to find your domain registrar and identify the nameservers that host your DNS.

1. In the **Lookup** text box, enter your domain name and then select **Lookup**. For example, *contoso.com*.

1. The **Registrar Information** section of the results page lists the registrar for your domain.

1. In the **Domain Information** section of the results page, look for **Nameservers:**. The domain name shown in the nameserver entries (NS records) indicates which provider hosts your DNS records.

    If you need more details about the DNS hosting provider, perform a second lookup using one of the nameservers:

    1. Copy the domain name of one of the nameservers (NS) in the list. For example, if a nameserver is *ns1.contoso.com*, copy only the root domain name (*contoso.com*).

    1. Paste the copied domain name into the **Lookup** text box at the top of the page and then select **Lookup**.

    1. Information about the DNS hosting provider is listed in the **Contact Information** section of the results page. Additional information about the DNS hosting provider might also be listed in other sections of the results page.

## Get support

 **[Check the Domains FAQ](../setup/domains-faq.yml)** if you don't find what you're looking for.

[!INCLUDE [How to get tech support for SMB](../../includes/smb-how-to-get-tech-support.md)]

## Related content

- [Small business help & learning](https://go.microsoft.com/fwlink/?linkid=2224585).
