---
title: Zero Query Logging Overview 
description: Overview of a control that allows admins to prevent query data from being logged during web grounding processes through Copilot when using Copilot or Copilot Chat.
ms.author: davidedwards
author: davidedwards
manager: scotvorg
ms.date: 03/17/2026
ms.update-cycle: 180-days
audience: Admin
ms.reviewer: suparekh; davidedwards
ms.topic: overview
ms.service: microsoft-365-copilot
ms.subservice: security
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- essentials-overview
- trust-pod
ms.custom: [copilot-learning-hub]
customer-intent: As an admin, I want to prevent query data from being logged in Microsoft 365 Copilot and Copilot Chat to align with my organization's policies.
robots: NOINDEX, NOFOLLOW
appliesto:
- ✅ Microsoft 365 Copilot
---

# Zero Query Logging Overview 

Zero Query Logging (ZQL) provides enhanced privacy and compliance when web grounding is enabled in Microsoft 365 Copilot and Copilot Chat.

## Zero Query Logging offers:

- **Privacy assurance:** Eliminates query retention in Bing and reduces compliance risks.
- **Control & transparency:** Admins can explicitly choose ZQL via a simple enable/disable toggle in the [Cloud Policy Service for Microsoft 365](/microsoft-365-apps/admin-center/overview-cloud-policy).
- **Enable web grounding safely:** ZQL eliminates data retention concerns during the Bing grounding process. Customers who previously disabled web search in Copilot because of data retention concerns can now enable web grounding with confidence that Bing doesn't retain any Query Data.

## What is Zero Query Logging?

When ZQL is enabled, no Query Data is logged in Bing during web grounding processes through Microsoft 365 Copilot, Copilot Chat, and the Researcher agent. In other words, Query Data and identifiers aren't logged by Bing when using web search through Copilot.

To make ZQL possible, Microsoft created a separate search index for web queries through Copilot. This index curates a subset of the full index used for Bing with the most popular answer types. Once ZQL is turned on, web grounding for Copilot only occurs from this curated web index.

ZQL doesn't impact the information logged in the Purview Audit Log. The prompts, responses, and web search keywords continue to be logged in Purview Audit log. They can be accessed through Purview eDiscovery, Purview DSPM, and they remain protected by [enterprise data protection](/microsoft-365/copilot/enterprise-data-protection).

## How to enable ZQL

Customers can **Enable Zero Query Logging for Copilot web searches** policy via the [Cloud Policy Service for Microsoft 365](/microsoft-365-apps/admin-center/overview-cloud-policy). The policy can be applied at the tenant level or for specific users for testing purposes.

Customers who currently have web search turned off should turn on the **Allow web search in Copilot policy** in [Cloud Policy Service for Microsoft 365](/microsoft-365-apps/admin-center/overview-cloud-policy) by following the instructions here: [Data, privacy, and security for web search in Microsoft 365 Copilot and Microsoft 365 Copilot Chat | Microsoft Learn.](/microsoft-365/copilot/manage-public-web-access#it-admin-control-for-both-microsoft-365-copilot-and-microsoft-365-copilot-chat)

:::image type="content" source="media/zql-screenshot-800.png" alt-text="Screenshot showing zero query logging in the admin center." lightbox="media/zql-screenshot-1200.png":::

## Policy activation timeline

Once enabled, the **Enable Zero Query Logging for Copilot web searches** may take up to 24 hours to fully propagate. Once in effect, ZQL prevents the storage of any data related to web grounding queries in Copilot in Bing. End users see no indication that ZQL is enabled in the Copilot Chat user experience.

We recommend that you first **Enable Zero Query Logging for Copilot web searches** policy, wait 24 hours, and then enable the **Allow web search in Copilot policy** in [Cloud Policy Service for Microsoft 365](/microsoft-365-apps/admin-center/overview-cloud-policy).

## More resources

- [Privacy and security of generated search queries](/copilot/privacy-and-protections#privacy-and-security-of-generated-search-queries)
- [Manage web search queries](/copilot/manage#manage-web-search-queries-in--chat)
- [Data, privacy, and security for web search in Microsoft 365 Copilot and Copilot Chat](/microsoft-365/copilot/manage-public-web-access)


