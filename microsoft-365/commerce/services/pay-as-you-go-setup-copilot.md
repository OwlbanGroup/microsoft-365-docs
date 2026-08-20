---
title: "Set up or disconnect pay-as-you-go billing in the Copilot node of the Microsoft 365 admin center"
author: cmcatee-MSFT
ms.author: cmcatee
manager: scotv
ms.reviewer: clalissayi, arakesh
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
description: "Learn how to set up or disconnect billing for pay-as-you-go services for Microsoft 365 Copilot in the Copilot node of the Microsoft 365 admin center. Configure billing policies, connect services, and manage your pay-as-you-go costs effectively."
ms.date: 01/30/2026
---

# Set up or disconnect pay-as-you-go billing in the Copilot node of the Microsoft 365 admin center

This article explains how to set up or disconnect pay-as-you-go billing in the **Copilot** node of the Microsoft 365 admin center for agents.

## Before you begin

- To access the Microsoft 365 admin center, you must have one of the following roles:

  - [Global Administrator](/entra/identity/role-based-access-control/permissions-reference#global-administrator)
  - [Billing Administrator](/entra/identity/role-based-access-control/permissions-reference?#billing-administrator)
  - [AI Administrator](/entra/identity/role-based-access-control/permissions-reference?#ai-administrator)

  [!INCLUDE [ga-roles-limitation](../../includes/ga-roles-limitation.md)]

- The tenant must have at least one SharePoint license, or a license that includes SharePoint.
- You must have an Azure subscription in the same tenant as Microsoft 365.
- You must have an Azure resource group in that subscription.

## Set up pay-as-you-go billing in the Copilot node

To set up pay-as-you-go billing, first set up a billing policy, and then connect it to a pay-as-you-go service.

1. Sign in to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. Go to **Copilot** > **Billing & usage**.
1. Select **Add a billing policy**.
1. On the **Billing details** page, fill in the required information, including the following items:

   - Policy name
   - Azure subscription
   - Resource group
   - Region (determines where the tenant ID and usage data are stored)

1. Read and accept the pay-as-you-go terms of service. Select **Next**.
1. On the **Users** page, choose **All users** or a **Specific group** (search for and add a single group). Select **Next**.

    > [!NOTE]
    > When you select a group, only the first 1,000 groups are displayed in alphabetical order.

1. On the **Review and finish** page, double-check all the details you entered. If everything is correct, select **Create policy**.
1. On the **Billing & usage** page, select the **Connect a service**.
1. Select the new billing policy and link it to a pay-as-you-go service, like **Microsoft 365 Copilot Chat** or **SharePoint Agents**.

## Create a budget and monitor usage and cost

After setting up billing, you can [create a budget and monitor your usage in the Microsoft 365 admin center](pay-as-you-go-budget.md). You can also monitor your pay-as-you-go usage and costs in [Microsoft Cost Management for Azure](https://portal.azure.com/#blade/Microsoft_Azure_CostManagement/Menu/costanalysis). Ensure you have at least read access to the billing resource group.

## Disconnect pay-as-you-go billing

To disconnect agents from pay-as-you-go billing, use the following steps.

1. In the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>, go to **Copilot** > **Billing & usage**.
1. Select the **Pay-as-you-go services** tab.
1. Select the agent to disconnect, like **Microsoft 365 Copilot Chat** or **SharePoint Agents**.
1. In the **Manage billing policy connections** panel, select the check box next to the policy to disconnect, and then select **Save**.
1. View the disconnection message to confirm that your Azure subscription is successfully disconnected.

If multiple services connect to a single policy, repeat the steps for each service.

After you disconnect the service, review your billing and usage to ensure no further charges are applied.