---
title: Manage generative AI apps for your organization
f1.keywords: NOCSH
ms.author: deniseb
author: denisebmsft
manager: dansimp
ms.reviewer: wimcilha
ms.date: 04/08/2026
ms.update-cycle: 180-days
audience: Admin
ms.topic: article
ms.service: microsoft-365-copilot
ms.subservice: security
ms.localizationpriority: medium
ms.collection: 
- m365copilot
- magic-ai-copilot
description: Learn how to discover, monitor, and manage the generative AI apps your organization uses. 
appliesto:
- ✅ Microsoft 365 Copilot
---

# Manage generative AI apps for your organization

As people embrace and incorporate [generative AI apps](/ai/playbook/technology-guidance/generative-ai/), such as Microsoft 365 Copilot and non-Microsoft AI apps into daily work, it's important for your organization's security team to be able to manage those apps. Microsoft applies a multi-layered, defense-in-depth strategy to secure Microsoft 365 Copilot at every level (see [Security for Microsoft 365 Copilot](security-microsoft-365-copilot.md)). 

But what about non-Microsoft AI apps? 

Using capabilities in [Data Security Posture Management (DSPM) for AI](/purview/dspm-for-ai?tabs=m365) (part of Microsoft Purview), [Microsoft Defender for Cloud Apps](/defender-cloud-apps/what-is-defender-for-cloud-apps) (part of Microsoft Defender), and [Cloud Security Posture Management (CSPM)](/azure/defender-for-cloud/concept-cloud-security-posture-management) for [AI security posture management](/azure/defender-for-cloud/ai-security-posture) in [Microsoft Defender for Cloud](/azure/defender-for-cloud/defender-for-cloud-introduction), your security team can empower people in your organization to use generative AI apps more securely, including both Microsoft and non-Microsoft AI apps.

This article describes how to:

- [Use DSPM for AI to discover and manage AI app usage](#use-dspm-for-ai-to-discover-and-manage-ai-app-usage); and 
- [Use Defender for Cloud Apps to discover, monitor, or block generative AI apps](#use-defender-for-cloud-apps-to-discover-monitor-or-block-generative-ai-apps); and
- [Use Defender for Cloud's CSPM to assess and manage AI security posture](/azure/defender-for-cloud/ai-security-posture).

Discovering, monitoring, and managing AI apps is essential to prevent data leaks, maintain compliance, enforce governance, and uphold trust in enterprise AI adoption. This article describes how to perform these tasks using DSPM for AI, Defender for Cloud Apps, and CSPM for AI security posture management.

## Before you begin

- **Make sure you have appropriate permissions assigned** to perform the tasks in this article.
   - See [Microsoft Purview permissions](/purview/purview-permissions#microsoft-purview-permissions)
   - See [Microsoft 365 and Microsoft Entra roles with access to Defender for Cloud Apps](/defender-cloud-apps/manage-admins#microsoft-365-and-microsoft-entra-roles-with-access-to-defender-for-cloud-apps)

- **To use DSPM for AI, configure Purview**. Select one or more of the [Microsoft Purview deployment models](/purview/deploymentmodels/depmod-overview), which include:
   - [Secure by default](/purview/deploymentmodels/depmod-securebydefault-intro)
   - [Purview Data Security Posture Management](https://aka.ms/DSPMBlueprintPDF)

- **To use Defender for Cloud Apps, [set up Microsoft Defender XDR](/defender-xdr/pilot-deploy-overview)**, including these components:
   - [Microsoft Defender for Cloud Apps](/defender-xdr/pilot-deploy-defender-cloud-apps) for discovering, monitoring, and blocking specific AI applications
   - [Microsoft Defender for Endpoint](/defender-xdr/pilot-deploy-defender-endpoint) for preventing unsanctioned AI apps from running on onboarded devices

## Use DSPM for AI to discover and manage AI app usage

:::image type="content" source="media/manage-generative-ai-apps/use-dspm-for-ai-to-discover-manage-ai-app-usage.png" alt-text="Diagram depicting DSPM for AI capabilities and uses." lightbox="media/manage-generative-ai-apps/use-dspm-for-ai-to-discover-manage-ai-app-usage.png":::

DSPM for AI provides your security and compliance team to discover AI activity, protect data in AI prompts, and govern data handling. [Learn more about DSPM for AI](/purview/dspm-for-ai?tabs=m365).

1. **Create or activate Purview policies**. DSPM for AI includes default policies that you can activate. See [One-click policies from Data Security Posture Management for AI](/purview/dspm-for-ai-considerations#one-click-policies-from-data-security-posture-management-for-ai).

2. **After your policies are deployed, you can view generative AI events in the activity explorer and in audit logs**. Examples of such events include:

   - User interactions with a generative AI site
   - Data Loss Prevention (DLP) rules matched during user interactions with a generative AI site
   - Sensitive information types were found in user interactions with a generative AI site

   For more information, see [Activity explorer events](/purview/dspm-for-ai-considerations#activity-explorer-events) and [Audit logs for Copilot and AI applications](/purview/audit-copilot).

3. **Configure DLP policies for the Microsoft Edge browser** and [block other browsers](/deployedge/microsoft-edge-management-service-customizations#block-other-browsers). This action prevents users from accessing unmanaged AI apps in unprotected browsers. For more information, see [Activate your DLP policy in Microsoft Edge](/deployedge/microsoft-edge-dlp-purview-configuration).

## Use Defender for Cloud Apps to discover, monitor, or block generative AI apps

With Defender for Cloud Apps, you can discover, monitor, or block generative AI applications in your organization, as described in the following sections.

### Use the cloud app catalog to discover AI apps

You can use the Microsoft Defender portal to see a list of AI apps your organization is using. Defender for Cloud Apps provides a catalog of apps with security and compliance risk scores. See [Cloud app discovery overview](/defender-cloud-apps/set-up-cloud-discovery).

1. Go to the [Microsoft Defender portal](https://security.microsoft.com) and sign in.

2. In the navigation pane, expand **Cloud apps**, and then select **Cloud app catalog**.

3. In the **Category** filter, select **Generative AI**. 

4. Review the list of apps, along with their risk scores. Make a note of the apps you might want to monitor or block. For more information about risk scores, see [Find your cloud app and calculate risk scores](/defender-cloud-apps/risk-score).

### Create a policy to monitor AI apps

:::image type="content" source="media/manage-generative-ai-apps/create-policy-monitor-ai-apps.png" alt-text="Diagram depicting how to create a policy to monitor AI apps." lightbox="media/manage-generative-ai-apps/create-policy-monitor-ai-apps.png":::

Make sure to review the [prerequisites](/defender-cloud-apps/governance-discovery#prerequisites). Also see [Control cloud apps with policies](/defender-cloud-apps/governance-discovery#control-cloud-apps-with-policies).

Create a new [custom policy](/defender-cloud-apps/app-governance-app-policies-create#custom-policies), specifying the following settings:

- For **Policy template**, choose **No template**.
- For **Policy name**, type a name, like *New Generative AI Apps*.
- For **Policy severity**, select the level 2 option.
- Provide a description, like *Generate an alert when a new Generative AI app is used*.
- In the **Apps matching all of the following** section, specify **Category equals Generative AI**.
- In the **Apply to** list, select **All continuous reports**.

### Create a policy to block specific AI apps

:::image type="content" source="media/manage-generative-ai-apps/create-policy-block-specific-ai-apps.png" alt-text="Diagram depicting the steps to create a policy to block specific AI apps." lightbox="media/manage-generative-ai-apps/create-policy-block-specific-ai-apps.png":::

Make sure to review the articles [Control cloud apps with policies](/defender-cloud-apps/governance-discovery#control-cloud-apps-with-policies) and [Create app governance policies](/defender-cloud-apps/app-governance-app-policies-create#custom-policies).

1. In the [Microsoft Defender portal](https://security.microsoft.com), in the navigation pane, select **Cloud apps** > **Cloud discovery**. 

2. On the **Discovered apps** tab, in the **Category** filter, select **Generative AI**.

3. In the list of results, select an AI app that you want to block. At the end of its row, select the three dots, and then select **Unsanctioned**. This action adds an *Unsanctioned* tag that enables you to monitor the app.

   > [!IMPORTANT]
   > When an app is marked as unsanctioned, it's automatically blocked across devices that are onboarded to Defender for Endpoint. However, your security team can specify whether to warn and educate users instead of blocking apps. See [Educate users when accessing risky apps](/defender-cloud-apps/mde-govern#educate-users-when-accessing-risky-apps).

4. In the navigation pane, select **Cloud apps** > **App governance**.

1. Select the **Policies** tab, and then create a new [custom policy](/defender-cloud-apps/app-governance-app-policies-create#custom-policies), specifying the following settings:

   - For **Policy template**, choose **No template**.
   - For **Policy name**, type a name, like *Unsanctioned AI Apps*.
   - Provide a description, like *Block unsanctioned AI apps*.
   - In the **Apps matching all of the following** section, specify a condition, such as **Category equals Generative AI** and **Tag equals Unsanctioned**.
   - In the **Apply to** list, select **All continuous reports**. 

## Use Defender for Cloud's CSPM for AI Security Posture Management

[Cloud Security Posture Management (CSPM)](/azure/defender-for-cloud/concept-cloud-security-posture-management) for [AI security posture management](/azure/defender-for-cloud/ai-security-posture) in Microsoft Defender for Cloud helps you discover, assess, and improve the security posture of your generative AI applications. Defender for Cloud provides visibility into your AI workloads, identifies vulnerabilities and misconfigurations, and helps you prioritize and remediate risks across your environment.

### Discover AI workloads and models

Use the cloud security explorer to identify generative AI workloads and models running in your environment.

1. Go to the [Azure portal](https://portal.azure.com/) and sign in.

2. Search for and select **Microsoft Defender for Cloud** > **Cloud Security Explorer**.

3. Select the **AI workloads and models in use** query template.

4. Select **Search**.

5. Select a result to review its details, including deployed models and specific model metadata regarding those deployments.

6. Select a node to review the findings.

### Identify vulnerable generative AI container images

Use the cloud security explorer to identify containers running generative AI container images with known vulnerabilities.

1. Go to the [Azure portal](https://portal.azure.com/) and sign in.

2. Search for and select **Microsoft Defender for Cloud** > **Cloud Security Explorer**.

3. Select the **Container running container images with known Generative AI vulnerabilities** query template.

4. Select **Search**.

5. Select a result to review its details.

6. Select a node to review the findings.

7. In the insights section, select a CVE ID from the drop-down menu.

8. Select **Open the vulnerability page**.

9. [Remediate the recommendation](/azure/defender-for-cloud/implement-security-recommendations).

### Identify vulnerable generative AI code repositories

Use the cloud security explorer to identify vulnerable generative AI code repositories that provision Azure OpenAI.

1. Go to the [Azure portal](https://portal.azure.com/) and sign in.

2. Search for and select **Microsoft Defender for Cloud** > **Cloud Security Explorer**.

3. Select the **Generative AI vulnerable code repositories that provision Azure OpenAI** query template.

4. Select **Search**.

5. Select a result to review its details.

6. Select a node to review the findings.

7. In the insights section, select a CVE ID from the drop-down menu.

8. Select **Open the vulnerability page**.

9. [Remediate the recommendation](/azure/defender-for-cloud/implement-security-recommendations).

### Review and remediate IaC misconfigurations

DevOps security detects Infrastructure as Code (IaC) misconfigurations that can expose generative AI applications to security vulnerabilities, such as overexposed access controls or inadvertently publicly exposed services. To prevent complex problems later, remediate detected misconfigurations early in the development cycle.

Defender for Cloud assesses your generative AI apps configuration and provides security recommendations. Review and remediate the following IaC AI security checks:

- Use Azure AI Service Private Endpoints
- Restrict Azure AI Service Endpoints
- Use Managed Identity for Azure AI Service Accounts
- Use identity-based authentication for Azure AI Service Accounts

To review and remediate recommendations:

1. Go to the [Azure portal](https://portal.azure.com/) and sign in.

2. Search for and select **Microsoft Defender for Cloud** > **Recommendations**.

3. Filter recommendations by **Resource type** to find generative AI-related resources (such as Azure OpenAI Service).

4. Review each recommendation and select it to understand the security posture issue.

5. Follow the remediation steps provided in each recommendation to address the misconfiguration.

### Explore risks with attack path analysis

Attack path analysis detects and mitigates risks to AI workloads by identifying weaknesses and potential vulnerabilities. Data might be exposed during the grounding of AI models to specific data and the fine-tuning of a pretrained model on a specific dataset to improve its performance on a related task.

By continuously monitoring AI workloads, attack path analysis can identify potential attack paths and follow up with recommendations. This extends to cases where the data and compute resources are distributed across Azure, AWS, and GCP.

To explore attack paths:

1. Go to the [Azure portal](https://portal.azure.com/) and sign in.

2. Search for and select **Microsoft Defender for Cloud** > **Attack path analysis**.

3. Review identified attack paths that could expose your AI workloads and data.

4. Select an attack path to review the details and recommended remediations.

5. Follow the recommendations to remediate the identified risks.

 
## See also

- [AI Security Posture Management](/azure/defender-for-cloud/ai-security-posture)
- [Identify AI Workload Model](/azure/defender-for-cloud/identify-ai-workload-model)
- [Explore AI Risk](/azure/defender-for-cloud/explore-ai-risk)
- [Microsoft Purview data security and compliance protections for generative AI apps](/purview/ai-microsoft-purview)
- [App governance in Microsoft Defender for Cloud Apps](/defender-cloud-apps/app-governance-manage-app-governance)
- [Tech Community blog: Discover, monitor, and protect the use of Generative AI apps](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/discover-monitor-and-protect-the-use-of-generative-ai-apps/3999228)
- [Considerations to manage Microsoft 365 Copilot and Channel Agent in Teams for security and compliance](/purview/ai-m365-copilot-considerations)
- [Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot and Copilot Chat](/purview/dlp-microsoft365-copilot-location-learn-about)
