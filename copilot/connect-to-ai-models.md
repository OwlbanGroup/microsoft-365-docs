---
title: "Connect to xAI's models"
ms.author: kwekua
author: kwekuako
ms.update-cycle: 180-days
manager: scotv
ms.date: 04/22/2026
audience: Admin
ms.topic: overview
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- essentials-overview
- operations-pod
- OtherAILLMs
appliesto:
- ✅ Microsoft 365 Copilot
description: "Learn about onboarding xAI for your Microsoft 365 organization."
---

# Connect to xAI's models

You can now use xAI models within your Microsoft products. These models are hosted by xAI outside of Microsoft. You can elect to use XAI's models with Copilot Studio in Microsoft 365.

xAI models can help people in your organization with some of the following:

- Summarize complex information
- Answer questions using source material
- Synthesize across multiple sources
- Idea generation, drafting and editing

When your organization chooses to use an xAI model, your organization is choosing to share your data with xAI to power Copilot Studio features. This data is processed outside all Microsoft managed environments and audit controls, therefore Microsoft’s customer agreements, including the [Product Terms](https://www.microsoft.com/licensing/terms?msockid=344e0e6ad66c6b3e19441848d7416abd) and [Data Processing Addendum](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA?lang=18&msockid=344e0e6ad66c6b3e19441848d7416abd) don't apply. In addition, Microsoft’s data residency commitments, audit and compliance requirements, service level agreements, and Customer Copyright Commitment don't apply to your use of xAI services. Instead, use of xAI's services is governed by xAI’s [Terms of service](https://go.microsoft.com/fwlink/?linkid=2356101) and [Data processing addendum](https://go.microsoft.com/fwlink/?linkid=2356200).

> [!IMPORTANT]
> Microsoft's safety and responsible AI evaluations found Grok-4.1 Fast (Non-Reasoning) to be less aligned than other models evaluated resulting in (i) higher risks that the model will produce potentially harmful content and (ii) lower scores on safety and jailbreak benchmarks. Grok-4.1 Fast (Non-Reasoning) may be capable of producing explicit content, and may do so with a higher propensity than other models. Customers must comply with both the [Microsoft Enterprise AI Services Code of Conduct](https://aka.ms/AI-CoC) and [xAI’s Enterprise Terms of Service](https://go.microsoft.com/fwlink/?linkid=2356101), including its [Acceptable Use Policy](https://go.microsoft.com/fwlink/?linkid=2356201). Additionally, there may be categories of harm this model can produce that are not covered by Microsoft’s content safety systems. Accordingly, as with all Experimental models, Grok-4.1 Fast (Non-Reasoning) is not recommended for production use and customers should review [Limitations of experimental and preview models](/microsoft-copilot-studio/authoring-select-agent-model) and conduct their own evaluations before choosing Grok-4.1 Fast (Non-Reasoning).

## Before you begin

Before users in your organization can use xAI, they need to be assigned a [Microsoft 365 Copilot license](/microsoft-365/admin/manage/assign-licenses-to-users).

## Connect to xAI in the Microsoft 365 Admin Center

Before your organization can connect to xAI AI models, you must allow access in the Microsoft 365 admin center.

You have to be a member of the Global administrator role to perform this task. For more information, see [About admin roles](/microsoft-365/admin/add-users/about-admin-roles).

1. Go to the [Microsoft 365 admin center](https://admin.microsoft.com/) and select **Copilot** -\> **Settings**.
2. On the **Copilot settings** page, select **View all**.
3. Select **AI providers for other large language models**.
4. Under **Available models for your organization**, choose **xAI**.
5. Under **Choose who can access xAI models for Copilot and generative AI experiences**, agree to the **Terms and Conditions**.
6. Under **Choose which users can access xAI models**, select the users or groups that you want to have access and choose **Save**.

    :::image type="content" source="media/ai-providers-operating-as-subprocessors-sec-group-anthropic-and-xai.png" alt-text="Screenshot of the AI providers operating as Microsoft subprocessors page with user and security group options." lightbox="media/ai-providers-operating-as-subprocessors-sec-group-anthropic-and-xai.png":::

> [!NOTE]
> You can restrict user access to AI independent providers by assigning permissions to specific users or Microsoft Entra ID security groups in the Microsoft 365 admin center. These assignments are applied at the provider level and enforced across Microsoft 365 Copilot and Copilot Studio experiences. When access is limited by user or group membership, only the assigned users can use Copilot features or agents that rely on that AI provider. Review existing user or group assignments and update policies or configurations as needed. For more information on user and security group access, see [Assign AI provider access to users and groups](copilot-ai-provider-user-sec-group-access.md). For more information on creating security groups, see [Create a security group](/microsoft-365/admin/email/create-edit-or-delete-a-security-group).

After you connect, it may take a few hours for the connection to complete.

## Controls for Copilot Studio in the Microsoft Power Platform Admin Center

Once enabled in the Microsoft 365 admin center, additional administrator controls are available in the Microsoft Power Platform admin center (PPAC) to allow xAI to be used in Copilot Studio. For more information, see [Allow external large language models (LLMs) for generative responses](/power-platform/admin/allow-llm-generative-responses).

## Disable Connection to xAI

Your organization may decide that it no longer wants users to be able to access other LLMs. You can disable the model provider:

1. Go to the [Microsoft 365 admin center](https://admin.microsoft.com/) and select **Copilot** -\> **Settings**.
2. On the **Settings** page, select **All**.
3. Select **AI providers for other large language models**.
4. Under **Available models for your organization**, choose **xAI** and select **Block provider**.

Once you disconnect xAI, users can't use xAI's AI models. After completing the steps to disconnect xAI in Microsoft 365, it may take several hours for the service to be fully disabled for your users.
