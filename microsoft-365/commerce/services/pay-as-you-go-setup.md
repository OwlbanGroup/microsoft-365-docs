---
title: "Set up or disconnect pay-as-you-go billing in the Setup node of the Microsoft 365 admin center"
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
description: "Learn how to set up or disconnect billing for pay-as-you-go services for document processing and Microsoft 365 Archive in the Setup node of the Microsoft 365 admin center. Configure billing policies, connect services, and manage your pay-as-you-go costs effectively."
ms.date: 01/30/2026
---

# Set up or disconnect pay-as-you-go billing in the Setup node of the Microsoft 365 admin center

This article explains how to set up or disconnect pay-as-you-go billing in the **Setup** node of the Microsoft 365 admin center for the following services:

- Document processing for Microsoft 365
- Microsoft 365 Archive

## Before you begin

- To access the Microsoft 365 admin center, you must have either the [SharePoint Administrator](/entra/identity/role-based-access-control/permissions-reference) or [Global Administrator](/entra/identity/role-based-access-control/permissions-reference) role.

  [!INCLUDE [ga-roles-limitation](../../includes/ga-roles-limitation.md)]

- You must have Owner or Contributor rights to the Azure subscription and resource group.
- The tenant must have at least one SharePoint license, or a license that includes SharePoint.
- You must have an Azure subscription in the same tenant as Microsoft 365.
- You must have an Azure resource group in that subscription.

## Activate pay-as-you-go services in the Setup node

1. Sign in to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>.
1. Go to **Setup** > **Billing and licenses**.
1. In the **Billing and licenses** section, select **Activate pay-as-you-go services**.
1. On the **Activate pay-as-you-go services** page, select **Get started**.
1. On the **Pay-as-you-go services** page, select the service you want to set up, like **Syntex services**.
1. On the **Set up billing and turn on services** panel, choose your Azure subscription, resource group, and region.  
1. Read and accept the pay-as-you-go terms of service.
1. Select **Save** to complete the setup.

## Monitor usage and costs

After setup, monitor your pay-as-you-go usage and costs in [Microsoft Cost Management for Azure](https://portal.azure.com/#blade/Microsoft_Azure_CostManagement/Menu/costanalysis). Ensure that you have at least read access to the billing resource group.

## Disconnect pay-as-you-go billing

1. Go to the <a href="https://go.microsoft.com/fwlink/p/?linkid=2024339" target="_blank">Microsoft 365 admin center</a>, and then go to **Settings** > **Org settings**.
1. Select **Pay-as-you-go services**.
1. Choose the service to disconnect, like **Syntex services**.
1. In the **Manage billing** panel, select **Edit billing information**.
1. Under **Manage billing**, select **Disconnect Azure subscription**.
1. Select **Disconnect** in the confirmation window.

If multiple services connect to a single policy, repeat the steps for each service.

After you disconnect the service, review your billing and usage to ensure no further charges are applied.
