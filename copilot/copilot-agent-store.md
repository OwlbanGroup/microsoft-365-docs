---
title: Agent Store in Microsoft 365 Copilot
f1.keywords:
ms.author: erikre
author: ErikRe
manager: dansimp
ms.date: 04/17/2026
ms.update-cycle: 180-days
audience: Admin
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
ms.collection:
description: Learn about Agent Store in Microsoft 365 Copilot.
---

# Set up Agent Store in Microsoft 365 Copilot 

Agent Store is the central hub in Microsoft 365 Copilot where you can easily discover and install agents. By bringing together agents from Microsoft, trusted partners, and your own organization, Agent Store connects your team to a curated ecosystem of agents.

:::image type="content" source="media/copilot-agent-store/copilot-agent-store-01.png" alt-text="Screenshot the Agent Store in Microsoft 365 Copilot." lightbox="media/copilot-agent-store/copilot-agent-store-01.png":::

There are four ways to include agents in your Agent Store environment:

1. Deploy prebuilt agents to Agent Store
2. Create agents with Copilot Studio publish to Agent Store
3. Bring agents from external platforms to Agent Store
4. Integrate agent with the Agent 365 SDK

## Prerequisites

Before you begin, make sure you have the following:

- A Microsoft 365 Copilot license assigned to your organization
- Access to the [Microsoft 365 admin center](https://admin.microsoft.com/) with Global Admin or Teams Admin permissions
- Access to Copilot Studio (if you plan to create and publish agents to Agent Store using Copilot Studio)
- An Azure subscription and developer access (if you plan to publish agents built by your organization to Agent Store)

## Overview

The following table summarizes the three common agent deployment methods.

| Method | Use case | Performed by |
|---|---|---|
| [Deploy prebuilt agents](#deploy-prebuilt-agents) | Deploy agents from Microsoft and trusted partners. | Admin |
| [Create and publish with Copilot Studio](#create-and-publish-copilot-studio-agents-built-by-your-organization) | Create custom agents using a natural language  authoring tool. | Maker/Admin |
| [Bring agents from external platforms](#bring-agents-from-external-platforms) | Connect agents built on external platforms or custom code. | Developer/Admin |
| [Integrate agent with the Agent 365 SDK](#integrate-your-agent-with-the-agent-365-sdk) | Integrate your agent with the Agent 365 SDK. | Developer/Admin |

> [!NOTE]
> Agents built using  Agent Store.


## Deploy prebuilt agents

Prebuilt agents are available from Microsoft and trusted partners. Use this method to browse and enable agents in [Microsoft 365 admin center](https://admin.microsoft.com/) that are already built and verified. No development work is required.

### Step 1: Browse the agent catalog (Admin)

1. Go to the [Microsoft 365 admin center](https://admin.microsoft.com/).
2. Select **Agents** > **All agents** to open the agent catalog.
3. Review the available agents from Microsoft, verified third-party providers, and your organization.

### Step 2: Review agent details and configure access (Admin)

1. In the agent table, select an agent to open its details pane.
2. Review the agent’s information based on availability and capability:  
- Select **Overview** to view details, such as **Publisher**, **Channel**, and **Last updated**.
- Choose **Users** to assign and deploy to users or to allow users to install.
- Select **Data & tools** to view **Capabilities**, **Knowledge**, and **Actions**.
- Select **Security & compliance** to view agent risks and protections.
- Choose **Certification** to view the certification or publisher attestation information available for the agent.
- Select **Activity** when you’ve previously deployed the agent and want to confirm usage data. 

### Step 3: Configure agent assignment and availability (Admin)

1. After choosing an agent, select **Users** >  **Deployed to**. Choose who the agent is assigned to by selecting **Just me**, **Entire organization**, or **Specific users/groups**.
2. To restrict access to an agent, select **Block** or **Remove** from the agent details page.

### Step 4: Make the agent available in Agent Store (Admin)
1. After you’ve made an agent available from the [Microsoft 365 admin center](https://admin.microsoft.com/), it becomes available in Agent Store inside Microsoft 365 Copilot.
2. Users can find and install the agent from Agent Store, which is accessible across Microsoft 365 apps including Teams, Outlook Word, Excel, and PowerPoint.

## Create and publish Copilot Studio agents built by your organization

Use this method to create a custom agent using Copilot Studio, the native agent development platform for Microsoft 365 Copilot. Makers at your organization build and submit agents for review in Microsoft 365 admin center. Admins review and approve these agents in [Microsoft 365 admin center](https://admin.microsoft.com/) before they become available to users in Microsoft 365 Copilot.

> [!NOTE]
> In addition to building agents with Microsoft Azure AI Foundry, custom code, or third-party AI platforms, agents can also be built and shared using Agent Builder within Microsoft 365 Copilot.

### Step 1: Build the agent in Copilot Studio (Maker)

1. In Copilot Studio, select **Agents** from the menu on the left. Select **Create blank agent** in Copilot Studio and follow the prompts to define your agent using natural language instructions, articles, and actions.
2. Add and configure instructions, knowledge, search, tools, articles, and any required integrations.
3. Test the agent in the built-in test panel before publishing. Publishing makes the agent available to the Admin within [Microsoft 365 admin center](https://admin.microsoft.com/).

### Step 2: Submit the agent for admin approval (Maker)
1. In Copilot Studio, select the **Channels** tab for your agent.
2. Select **Microsoft 365 Copilot and Microsoft Teams** as the publishing channel. The related pane will show channel specific settings.
3. Confirm that **Make agent available in Microsoft 365 Copilot** has been selected.
4. Select **Edit details** to configure how your agent will be displayed. Once complete, select **Save** to return to the channel specific settings.
5. Select **Save** to send the agent for admin review. Once the agent is reviewed and published in the [Microsoft 365 admin center](https://admin.microsoft.com/), you're able to view your agent in Agent Store.

> [!NOTE]
> The agent isn't visible to users until an Admin approves the request. After approval, the agent appears under **Agents** > **All agents** > **Built by your org** in Agent Store.

### Step 3: Review and approve the agent request (Admin)
1. In the [Microsoft 365 admin center](https://admin.microsoft.com/), select **Agents** > **All agents** > **Requests**.
2. Select the pending requested agent to review agent details, including capabilities, data access, and maker information.
3. Select **Publish** to make the agent available in the **Built by your org** collection in Agent Store, or **Reject** to decline the request.

If the request is rejected, Copilot Studio notifies the maker so they can make changes and resubmit.

## Bring agents from external platforms

Use this method to bring agents built outside of Copilot Studio into Microsoft 365 Copilot and Agent Store, including those on Microsoft Azure AI Foundry, custom code, or third-party AI platforms.

### Step 1: Package the agent using the Microsoft 365 Agent Toolkit (Developer)
1. Install the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) and [Microsoft 365 Agents SDK](/microsoft-365/copilot/extensibility/m365-agents-sdk).
2. Create and configure a bot service resource in Azure.
3. Configure the agent event listeners to handle Microsoft 365 Copilot interactions.
4. Prepare the agent manifest package according to the toolkit requirements.

> [!TIP]
> For full setup instructions, see [Bring your agents into Microsoft 365 Copilot](/microsoft-365/copilot/extensibility/bring-agents-to-copilot).

### Step 2: Submit the packaged agent to the organizational catalog (Developer)
1. Once the agent is packaged using the Microsoft 365 Agent Toolkit, submit it to your organization’s agent catalog directly from the toolkit.
2. Verify that the agent appears as a pending request in the [Microsoft 365 admin center](https://admin.microsoft.com/).

### Step 3: Review and approve the agent request (Admin)
1. In the [Microsoft 365 admin center](https://admin.microsoft.com/), select **Agents** > **All agents** > **Requests**.
2. Select the agent with the pending request to review the agent details.
3. Select **Approve** to publish the agent to Agent Store, or **Reject** to decline the request.

After approval, the agent is available to users in Agent Store within Microsoft 365 Copilot.

## Integrate your agent with the Agent 365 SDK

For organizations that have already built agents on other SDKs or platforms, including Copilot Studio, Azure AI Foundry, OpenAI Agents SDK, or custom code, the Microsoft Agent 365 SDK can add enterprise capabilities without a full rebuild.

The Agent 365 SDK equips agents with Entra-backed identity, governed access to Microsoft 365 data through managed MCP servers, full observability, and the ability to receive and respond to notifications across Teams, Outlook, and Word, just like a human participant. Agents operate within an IT-approved blueprint system, meaning each agent instance inherits the compliance, governance, and security policies defined by the organization.

Once completed, these Agent 365-enabled agents appear in the "Agents for your team" collection in the Agent Store. This pathway is ideal for organizations that want to bring agents into Copilot and Agent Store while ensuring they meet the same enterprise standards as any other agent in the catalog. 

## Related content

- [Learn about Copilot Studio](/microsoft-copilot-studio/)
- [Manage agents in the Microsoft 365 Admin Center](/microsoft-365/admin/)
