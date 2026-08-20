---
title: Install the Employee Self-Service agent
f1.keywords: NOCSH
ms.author: heidip
author: MicrosoftHeidi
manager: dansimp
ms.reviewer: semani
ms.date: 11/05/2025
audience: Admin
ms.topic: article
ms.service: microsoft-365-copilot
ms.subservice: ess-agent
ms.custom: ess-agent
ms.localizationpriority: medium
ms.collection: m365copilot
description: Learn about the installation stage in the deployment process for the Employee Self-Service IT and HR agents.
appliesto:
- ✅ Microsoft 365 Copilot
---

# Install the Employee Self-Service agent

After completing the required steps in the [preparation](prepare.md) stage, you can install either or both the following Employee Self-Service agent starters in a specific Power Platform environment:

- Employee Self-Service HR agent
- Employee Self-Service IT agent

## Activities summary

|Role                      |Activities to perform |Configuration area |
|--------------------------|----------------------|-------------------|
|Environment administrator |- Select the right environment </br>- Set up a preferred solution </br>- Install the IT or HR Employee Self-Service agent (or both agents) |Microsoft Copilot Studio |

## Select the right environment

1. Sign in to [Microsoft Copilot Studio](https://copilotstudio.microsoft.com) as an assigned Environment Administrator.
1. Before installing the agent, make sure that the correct Power Platform environment is selected by verifying the name in the ribbon.

## Create a solution and set as preferred

1. Based on the application lifecycle management guidelines, create a *new solution* in the Dev environment so the customizations can be performed and exported as managed solution to a Test/UAT/PRODUCTION environment.
1. Select the ellipsis (**...**) in the left navigation pane and then select the **Solutions** option from the pop-out menu.
1. Select **+New solution** and fill in the required information:
    1. Display name
    1. Name
    1. Publisher
    1. Version
1. Provide publisher information. Make sure to provide the prefix value, which is used to create objects for this solution prefixed with the given string. For example, if your prefix is "contoso", a new object might be named "contoso_Object".
1. Select the **Create** button to finish creating the solution.
1. Select **Back to solutions** in the left navigation pane.

### Set up a preferred solution

1. Create and set a preferred solution before making any customizations. The default solution can't be exported or imported across environments, so your changes must live in a custom solution to be portable.
1. Select the ellipsis (**...**) and choose **Set preferred solution** for the new solution that you created.

> [!NOTE]
> If you intend to create both the HR and IT agents, you need to repeat this process. You must install agents one at a time.

> [!WARNING]
> Preferred solution is a per-user setting, which means every single user/maker who would like to apply any customizations must set the same solution as the preferred solution.

Learn more about [Preferred Solution](/power-apps/maker/data-platform/preferred-solution).

## Managing ESS Agent Customizations Across Environments

🧩  **The Challenge**

When customers customize their Employee Self-Service agent-adding topics, tools, knowledge sources, or flows, those changes can silently land in the Default solution if a Preferred Solution isn't set. This result makes customizations non portable, breaks Dev to Test to Production deployment, and creates unmanaged layer conflicts that override future managed updates. The result: "works in dev, breaks in production."

✅ **Step 0-Set your preferred solution (Before you customize)**

Follow the steps provided for setting your preferred solution:

> [!TIP]
> This single step prevents the most cause of deployment failures. Make it Step 0 in every Employee Self-Service deployment checklist.

🚀 **Choose your deployment path**

|Tier            |Option        | What it does    | Who sets it up        |Maker Experience        |
|----------------|--------------|-----------------|-----------------------|------------------------|
|**Basic**       |[Power Platform Pipelines](/power-platform/alm/pipelines)|Admin-configured Dev > Test > Production stages. Prevalidates dependencies, auto backs up solutions, supports rollback. |Platform Admin (one-time setup)|Select "Deploy" from Copilot Studio. No export/import or DevOps knowledge needed. |
|**Intermediate**|[Pipelines + Native Git integration](/power-platform/release-plan/2024wave2/power-apps/connect-environment-source-control)|Adds source control through Azure DevOps Git. Full audit trail, parallel development, YAML-based solution format. |Platform Admin + Azure DevOps Project Owner|Commit and pull changes in Power Platform UI. No command line required. |
|**Advanced**|[Copilot ALM Starter + CI/CD Pipelines](https://github.com/microsoft/copilot-alm-starter)|Prebuilt GitHub Actions/Azure pipelines with automated export, PR validation, environment-specific settings, and workload identity federation. |DevOps Engineer (initial setup); CI/CD runs automatically thereafter |Makers author in Copilot Studio as usual. The pipeline handles all ALM (Application Lifecycle Management) on merge. |

🏅 **Golden rules for Clean ALM**

- **Never customize directly in Test or Production** - All changes originate in Dev and flow forward as managed solutions.
- **Always export as Managed** - Managed solutions lock components in target environments, preventing accidental edits, and unmanaged layer conflicts.
- **Use Solution Layers view to troubleshoot** - If a managed import doesn't take effect, check for an active unmanaged layer overriding it, and remove it.
- **Run Add Required Objects after every change** - This rule ensures new topics, tools, flows, and knowledge sources are captured in your solution before export.  
- **Set Preferred Solution before Day 1** - This rule is non-negotiable. Without it, customizations scatter into the Default solution and become nonportable.

> [!NOTE]
> **Quick-start checklist**
>
> ✅ Create a dedicated unmanaged solution with your publisher prefix
>
> ✅ Set it as Preferred Solution
>
> ✅ Install/create your Employee Self-Service agent
>
> ✅ Run Add Required Objects after each customizations
>
> ✅ Configure Power Platform Pipelines (Dev ➡️ Test ➡️ Production)
>
> ✅ Deploy using the pipeline. Never manually export/import
>
> ✅ (Optional) Connect Azure DevOps Git for source control and audit trail
>
> ✅ (Optional) Setup Copilot ALM Starter for enterprise CI/CD

## Install the Employee Self-Service agent for customization

1. Go to the Copilot Studio home page.
1. Select **Create** in the navigation pane. You should see an **Employee Self-Service HR** agent and an **Employee Self-Service IT** agent.
1. Select the Employee Self-Service agent you wish to create, and choose **Install** in the popup.

The Employee Self-Service agent is now installed in your selected Power Platform environment with a preferred solution that can be exported and imported into another environment.

## Installation checklist

|Role                      |Verification steps |Result |
|--------------------------|-------------------|-------|
|Environment Administrator |1. Sign in to Copilot Studio. </br>2. Select Agents to confirm whether your newly created agent is listed. </br>3. Confirm the Employee Self-Service agent is listed. |Pass/Fail |
|Environment Maker         |Access the newly created agent from Copilot Studio. |Pass/Fail |
