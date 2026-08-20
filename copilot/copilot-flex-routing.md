---
title: "Flex routing (EU and EFTA)"
ms.author: kwekua
author: kwekuako
ms.update-cycle: 180-days
manager: scotv
ms.date: 03/27/2026
audience: Admin
ms.topic: overview
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
ms.collection:
- scotvorg
- Microsoft 365copilot
- magic-ai-copilot
- essentials-overview
- operations-pod
- OtherAILLMs
appliesto:
- ✅ Microsoft 365 Copilot
description: "Learn about flex routing and how it affects inferencing for Microsoft 365 Copilot and Copilot chat during times of peak load."
---

# Flex routing (EU and EFTA)

Flex routing lets customers in the European Union (EU) and the European Free Trade Association (EFTA) allow large language model (LLM) inferencing to occur outside the EU Data Boundary during periods of peak demand to help maintain a consistent Copilot experience. Inferencing is the processing step when an AI model executes the prompt to produce an output or response, such as summarizing content or answering a question.

No matter where LLM inferencing occurs, data will be encrypted in transit and at rest. Data at rest will continue to be stored inside the EU Data Boundary, except for limited pseudonymized data which may be stored outside the EU Data Boundary for security and operational purposes. For more information, see [Ongoing partial data transfers](/privacy/eudb/eu-data-boundary-ongoing-partial-transfers).

Tenant administrators can change the flex routing setting at any time in the Microsoft 365 admin center or Power Platform admin center. The Microsoft 365 admin center setting applies to Microsoft 365 Copilot and Copilot Chat. The Power Platform admin center setting applies to Copilot experiences in Dynamics 365, Power Platform, and Copilot Studio.

> [!NOTE]
> The flex routing setting in the Power Platform admin center will honor the flex routing setting in the Microsoft 365 admin center unless the current setting in the Power Platform admin center is more restrictive. For more information, see [Move data across regions for Copilots, AI agents, and generative AI features](/power-platform/admin/geographical-availability-copilot).

## Eligibility

Flex routing is available for customers with a sign-up location in a country or region in the EU or EFTA. For more information, see [EU Data Boundary countries and datacenter locations](/privacy/eudb/eu-data-boundary-learn).

Note that this setting will not be available for customers who have purchased multi-geo capabilities even if their tenant is listed as being in a country or region in the EU or EFTA. Customers can check their tenant’s country or region in the [Microsoft 365 admin center](/microsoft-365/admin/manage/change-address-contact-and-more).

## Set up flex routing

Flex routing is on by default for eligible tenants that were created after March 25, 2026. For eligible tenants that existed before March 25, 2026, please check the Message Center for more details on your tenant’s default flex routing setting.

All tenant administrators are encouraged to check their tenant's flex routing setting to ensure it aligns with their company's requirements.

**Enable flex routing**

1. Sign in to the Microsoft 365 admin center as an administrator assigned the [AI Administrator role](/entra/identity/role-based-access-control/permissions-reference).
2. Go to **Copilot** -> **Settings** -> **View all** -> **Flex routing during peak load periods**.
3. Select **Allow flex routing during periods of peak load**.
    1. This setting allows LLM inferencing and the storage of associated pseudonymized data to occur outside the EU data boundary during periods of peak demand. Typically, these periods are limited in duration and do not run continuously.
4. If you don’t want to allow flex routing, select **Do not allow flex routing**.
    1. If you select this option, LLM inferencing will occur inside the EU Data Boundary, even during periods of peak demand. All Microsoft 365 data processing and data residency commitments will continue to apply.

## Frequently asked questions

### Why can't I see the flex routing setting in the Microsoft 365 admin center?

The flex routing setting is only visible in the Microsoft 365 admin center for customers with a sign-up location in a country or region in the EU or EFTA.
For more information, see [EU Data Boundary countries and datacenter locations](/privacy/eudb/eu-data-boundary-learn). This setting is also not available for customers who have purchased multi-geo capabilities even if their tenant is listed as being in a country or region in the EU or EFTA. Customers can check their tenant’s country or region in the [Microsoft 365 admin center](/microsoft-365/admin/manage/change-address-contact-and-more).

### How does flex routing affect Microsoft’s EU data boundary commitments?

When flex routing is enabled, LLM inferencing may occur outside the EU Data Boundary during times of peak demand. Data remains encrypted in transit and at rest. Data will also continue to be stored at rest inside the EU Data Boundary except for limited pseudonymized data which may be stored outside the EU Data Boundary for security and operational purposes. For more information, see [Ongoing partial data transfers](/privacy/eudb/eu-data-boundary-ongoing-partial-transfers). EU and EFTA customers can disable flex routing in the Microsoft 365 admin center at any time.

### Where does LLM inferencing occur when flex routing is enabled?

If flex routing is enabled, LLM inferencing may occur in the United States, Canada, or Australia during times of peak demand.

### Why can't I change the flex routing setting in the Power Platform admin center?

If flex routing is not allowed in the Microsoft 365 admin center, flex routing will be off by default in the Power Platform admin center and you will not be able to change the setting. If flex routing is allowed in the Microsoft 365 admin center, then the flex routing setting in the Power Platform admin center will be configurable.
