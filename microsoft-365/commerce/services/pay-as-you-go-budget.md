---
title: "Create a budget for pay-as-you-go billing in Microsoft 365"
author: cmcatee-MSFT
ms.author: cmcatee
manager: scotv
ms.reviewer: ivchenya, clalissayi
audience: admin
ms.topic: install-set-up-deploy
ms.service: microsoft-365-business
ms.subservice: m365-commerce-payasyougo
search.appverid: MET150
ms.collection:
- scotvorg
- M365-subscription-management
- Adm_o365
ms.custom: 
ms.localizationpriority:  medium
description: "Learn how to create a billing budget for pay-as-you-go services in the Microsoft 365 admin center. Set spending limits, configure alerts, and manage costs effectively."
ms.date: 01/30/2026
---

# Create a budget for pay-as-you-go billing in Microsoft 365

This article explains how to set spending limits for pay-as-you-go billing. This feature helps you monitor usage, receive alerts as costs approach budget thresholds, and plan more effectively.

You can only set budgets at the billing policy level, not for individual users, agents, or sites. This policy means any limits or alerts apply to all services and users under the policy.

## Before you begin

To access the Microsoft 365 admin center, you must have one of the following roles:

- [Global Administrator](/entra/identity/role-based-access-control/permissions-reference#global-administrator)
- [AI Administrator](/entra/identity/role-based-access-control/permissions-reference?#ai-administrator)
- [Global Reader](/entra/identity/role-based-access-control/permissions-reference#global-reader)

  > [!NOTE]
  > Users with the [Global Reader](/entra/identity/role-based-access-control/permissions-reference#global-reader) role can view billing policies and budgets, but they can't view spending data.

[!INCLUDE [ga-roles-limitation](../../includes/ga-roles-limitation.md)]

## Create a budget

1. Sign in to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. Go to **Copilot** > **Billing & usage**.
1. On the **Billing policies** tab, select the policy you want to manage.
1. In the policy panel, select the **Budget** tab.
1. To view current expenses for services linked to the policy, select **Spending**. Consumption data can take up to four hours to appear in the graph.
1. To configure your budget and alert preferences, select **Settings**, and set the following settings:

    a. Select the **Set limits for this billing policy** checkbox.
    b. Under **Budget**, enter the dollar amount for your spending limit.
    c. Under **Reset the budget**, select when you want to reset the budget.

      - Monthly (resets on the first day of each month)
      - Quarterly (resets on January 1, April 1, July 1, and October 1)
      - Yearly (resets on January 1)

    d. Under **Send email alerts** (optional):

      - Add recipients (only [mail-enabled security groups](/microsoft-365/admin/email/create-edit-or-delete-a-security-group) are currently supported).
      - Set the budget percentage that triggers alerts.

        - If selected, 100% is enabled by default.
        - You can add up to four more thresholds (1–99%).

    > [!NOTE]
    > Email alerts can be delayed by up to 24 hours. Azure currently sends alerts, but they will transition to the Microsoft 365 admin center in a future release.

1. To apply your budget settings, select **Save**.

> [!IMPORTANT]
> The only way to stop billing is to [disconnect the payment method](pay-as-you-go-setup-copilot.md#disconnect-pay-as-you-go-billing). Reaching 100% of your budget doesn't stop the service or billing.
