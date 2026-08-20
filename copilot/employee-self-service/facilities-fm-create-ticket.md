---
title: "Extend Employee Self-Service agent: Create a Facilities Ticket"
f1.keywords: NOCSH
ms.author: heidip
author: padmanabhareddy
manager: bartmand
ms.reviewer: MicrosoftHeidi
ms.date: 04/24/2026
audience: Admin
ms.topic: article
ms.service: microsoft-365-copilot
ms.subservice: ess-agent
ms.custom: ess-agent
ms.localizationpriority: medium
ms.collection: m365copilot
description: Learn about extending the Employee Self-Service Copilot agent tailored to your organization. This article describes the steps to create a facilities ticket (Facilities Management) via Employee SelfService. Example - "I want to report a water leak"
appliesto:
- ✅ Microsoft 365 Copilot
---
# Extend Employee Self-Service agent: Create a Facilities Ticket

The Employee Self-Service Copilot agent allows employees to get their queries answered from admin-configured knowledge sources, HCM, and IT systems, directly within Microsoft 365 Copilot.

An organization might seek to enhance Employee Self-Service Copilot agent by integrating additional capabilities. These additional capabilities enable organizations to maximize the benefits of Employee Self-Service and support work-related activities.

To support these needs, Employee Self-Service Copilot agent is designed to be extensible. You can create and publish your own topics that work seamlessly alongside the built-in ones. This article explains the steps to extend Employee Self-Service by adding new topics tailored to your organization.

At Microsoft, we extended Employee Self-Service Copilot agent to bring in Real Estate and Facilities related experiences. Some scenarios that this extensibility to Employee Self-Service is helping us power are:

- Create a Facilities Ticket (Facilities), for example, "I want to report a water leak"
- Register a Vehicle (Parking), for example, "I want to register my vehicle Tesla Model 3"
- View food stations or counters by cuisine (Dining), for example, "Where can I find Chinese food?"
- Invite a Guest (Lobby), for example, "I want to invite my spouse to Building 32"

The following section shows how a maker in Copilot Studio can extend Employee Self-Service to support these scenarios. Before diving into the maker experience, it's important to understand what real estate and facilities are and how they support employees.

## Real Estate & Facilities

Real Estate and Facilities (RE&F) play a pivotal role in shaping the overall employee experience within an organization. By integrating RE&F services into Employee Self-Service platforms, companies can streamline access to essential workplace amenities and administrative tasks, making daily operations more efficient and user-friendly for employees.

For instance, features like vehicle registration, facilities tickets for maintenance requests, access to café menus, and streamlined guest invitation processes, empower employees to manage their work environment proactively. These capabilities reduce administrative overhead, minimize wait times, and improve satisfaction by giving employees greater control and visibility over their workplace needs.

Moreover, such integrated experiences foster a sense of belonging and engagement, as employees feel supported by systems that anticipate and address their requirements. These integrated experiences not only enhance productivity, but also contribute to a positive organizational culture where employees can focus more on their core responsibilities rather than logistical hassles.

Ultimately, the seamless blend of real estate and facilities management with employee-centric digital solutions helps organizations attract, retain, and motivate talent by prioritizing their day-to-day comfort and efficiency.

Now that we covered the fundamentals, let’s walk through a practical example. In the following sections, we extend the Employee Self-Service Copilot agent to allow employees to perform various operations.

## Prerequisites

Before extending the Employee Self-Service Copilot agent with custom topics for your Real Estate integration, ensure the following prerequisites are met:

- Employee Self-Service agent is installed in Copilot Studio
- Maker access to a sandbox or preproduction environment in Copilot Studio
- Access to [Copilot Samples](https://github.com/microsoft/CopilotStudioSamples/tree/main/EmployeeSelfServiceAgent/Facilities/EmployeeCreateFacilitiesManagementTicket) in GitHub.
- Access to the Facilities Management API used to create tickets in the backend system
  - This example assumes the Facilities Management ticketing system is built on Dynamics 365 using the Field Service module

## Fundamentals

Extending Employee Self-Service for RE&F experiences requires an understanding of a few key building blocks: **topics, adaptive cards,AI Prompts and Power Automate Flow**. Together, these building blocks define how conversational scenarios are designed and how they interact with RE&F services.

### Topics

In Copilot Studio, a topic is defined as a workflow of a conversation. Microsoft 365 Copilot topics are used to:

- Define trigger prompts that determine when the *Invite a guest* topic should be activated based on user’s natural language input.
- Asking questions and capturing necessary input from the employee, such as problem descriptions, building information, and location details, and so on.
- Triggering a Power Automate flow by utilizing the Dynamics connector, which is responsible for creating a facilities ticket using the Case (Incident) entity.
- Interpreting the response from the Facilities Management ticket creation process and returning the relevant outcome to the employee in a conversational format.

### Adaptive Cards

Adaptive cards are platform-agnostic UI snippets authored in JSON. They help create interactive and visually appealing cards to capture user inputs while maintaining the conversational flow.

### AI Prompts

In Copilot Studio, Prompts are essential for constructing custom AI actions using natural language. These AI prompts are used to extract and identify information form the user provided prompts.

Some examples where AI prompt can be used are:

- Creating a facility ticket
- Identifying information like a category for a reported problem
- Location of the issue being reported from the employee’s natural language input

For detailed documentation on AI Prompts, refer to the official Microsoft documentation [Prompt columns in Microsoft Dataverse](/power-apps/maker/data-platform/prompt-column).

### Power Automate Flow

Power Automate is a cloud-based automation platform that enables users to create workflows, called flows, to automate repetitive tasks across applications and services without writing code. It's part of the Microsoft Power Platform and integrates seamlessly with Microsoft 365 apps and hundreds of third-party services.

For supported connectors, see: [Connector reference overview](/connectors/connector-reference/)

HTTP request action reference: [HTTP with Microsoft Entra ID (preauthorized) - Connectors](/connectors/webcontents/)

## Example: Create a facilities ticket

In this scenario, an employee needs facilities support for an issue in the office, for example, an air conditioner that isn’t working, broken furniture, or a cleaning request.

Through the Employee Self-Service agent, the employee submits a facilities ticket by describing the issue and specifying the location. The facilities team reviews the ticket, assigns the right personnel, and tracks the work to resolution.

The implementation includes the following steps:

- **Create AI prompts:** Create prompts to extract the problem category and location from the user's request. This information helps route the ticket correctly and dispatch personnel to the right place.
- **Create a Power Automate flow:** Build a flow that calls your backend APIs using HTTP or other connectors. Use the flow to create the ticket and return the ticket status/ID to the conversation.
- **Create a topic:** Define the conversation flow for facilities ticketing, including triggers, prompts, and instructions.
  - Design an Adaptive Card to capture ticket details and bind inputs to state variables that you pass to the API request.
  - Validate API responses, handle errors as required, and provide user feedback.

## Create AI prompts

The ticket creation process uses two AI prompts: one to identify the problem category and another to extract the location.

### *AI prompt to extract the problem category*

To route facilities issues to the right technician, extract the problem category from the user's description.

1. Create a new prompt in Copilot Studio. Go to [Power Apps](https://make.powerapps.com/) and select AI Hub > Prompts > Build your own prompt.
1. Copy the prompt instructions from the Copilot Studio Samples repository: [Extract Problem category](https://github.com/microsoft/CopilotStudioSamples/blob/main/EmployeeSelfServiceAgent/Facilities/EmployeeCreateFacilitiesManagementTicket/Extract%20Problem%20category.md?plain=1), and paste them into the Instructions section. Adjust the instructions as needed for your scenario.
1. Add two input text parameters by selecting **Add content: Problem Description** (next to the Problem Description input) and **Categories** (next to the Reference Categories Data input), as shown in the screenshot.

    :::image type="content" source="media/facilities-fm-create-facilities-ticket-extract-category-prompt.png" alt-text="Screenshot that shows the Power Apps prompt builder displaying instructions to extract a problem category, with Problem Description and Categories input fields.":::

1. Update the Categories input by adding or editing the list of problem categories for your organization. If your categories are stored in Dataverse, you can use that data instead.

    :::image type="content" source="media/facilities-fm-create-facilities-ticket-extract-category-prompt-edit.png" alt-text="Screenshot that shows the expanded _Categories_ field showing an editable, comma-separated list (for example, plumbing, electrical, cleaning).":::

1. Test the prompt.
   1. Enter a sample **Problem Description** and choose a model. For consistent behavior, use the same model as your Employee Self-Service agent. Select **Test** to confirm the category returned for your scenarios.
   1. Optionally, try other available models and compare results before you standardize on one.

    :::image type="content" source="media/facilities-fm-create-facilities-ticket-extract-category-problem-desc.png" alt-text="Screenshot that shows the prompt test panel with a sample description entered and the model returning the matched category in the output pane.":::

1. Save the prompt as **Prompt to Extract Problem Category**.

### *AI prompt to extract location information*

To dispatch facility services to the right place, extract location details from the user's request.

1. Create a new prompt in Copilot Studio. Go to [Power Apps](https://make.powerapps.com/) and select **AI Hub** > **Prompts** > **Build your own prompt**.
1. Copy the prompt instructions from the sample: [Extract Location Information](https://github.com/microsoft/CopilotStudioSamples/blob/main/EmployeeSelfServiceAgent/Facilities/EmployeeCreateFacilitiesManagementTicket/Extract%20Location%20Information.md?plain=1), and paste them into the Instructions section. Adjust the instructions as needed for your scenario.
1. Add the input text parameter Facilities Description next to the Facilities Description input by selecting **Add content**, as shown in the screenshot.

    :::image type="content" source="media/facilities-fm-create-facilities-ticket-extract-location-prompt.png" alt-text="Screenshot that shows the Power Apps prompt builder with instructions to extract location details, with the Facilities Description input field.":::
1. Test the prompt and save it as **Extract Location Information**.

## Create a Power Automate flow

In this example, the Facilities Management ticketing system is built on Dynamics 365 (Field Service). The flow uses the Dataverse connector to create a ticket in the corresponding Dataverse tables.

Use the following steps to create an agent flow that the topic can call.

1. In Copilot Studio, create a new agent flow under Flows.

1. Add the trigger **When an agent calls the flow** and the action **Respond to the agent**.

1. Define the input variables the topic passes to the flow (for example: problem category, location, and description).

1. Add an action to create the ticket by calling your backend. Use the Dataverse connector (or an HTTP action if your system exposes an API).

1. Capture the result (for example: ticket ID, status, and message) and return it in Respond to the agent.

## Create a topic

Steps:

1. Create a topic named **Create Facilities Management Ticket**.

    a. In Copilot Studio, select **Add a topic > From blank**.
   
    b. Once inside the topic, select **Open code editor**.
   
    c. Copy the topic YAML from the sample repository and paste it into the code editor: [topic.yaml](https://github.com/microsoft/CopilotStudioSamples/blob/main/EmployeeSelfServiceAgent/Facilities/EmployeeCreateFacilitiesManagementTicket/topic.yaml), and close code editor.
   
    d. In the topic workflow editor, locate the **Prompt Location** reference. Select the double-arrow button to open **Add a tool**, and then choose the **Extract Location Information prompt** you created earlier.

      :::image type="content" source="media/facilities-fm-create-facilities-ticket-topic-add-location-prompt.png" alt-text="Screenshot that shows the Copilot Studio topic editor with the _Add a tool_ panel open and Extract Location Information selected.":::
   
    e. Repeat the previous step for the problem category prompt and the action (the flow).
   
    f. Resolve any validation errors, and then select **Save**.

1. Validate.

    a. Open the visual representation of the topic and verify the end-to-end flow.
   
    b. Run Topic checker to identify any static issues.
   
    c. Optionally, follow the next section (Review the topic workflow) for a guided walkthrough of what to verify.
   
1. Test the topic.
   
    a. In Copilot Studio, select Test to open the test chat.
   
    b. Enter a sample request such as  There's a water leak in the first-floor bathroom.
   
    c. Complete any required fields in the ticket form, and then submit.
   
    d. After submission, the Employee Self-Service agent confirms that the Facilities Management ticket was created.

## Review the topic workflow

1. Review the Trigger node text (the description shown to users). Adjust it as needed for your scenario.

    :::image type="content" source="media/facilities-fm-create-facilities-ticket-topic-codeeditor-trigger-queries.png" alt-text="Screenshot that shows the Topic editor with the Trigger node and example phrases such as _report a water leak_ and _request a repair_.":::
1. Confirm the next node stores the user's natural language input in a variable, and that the following message acknowledges receipt.
1. Verify the prompt node that extracts location information and confirm it maps inputs/outputs correctly.
1. Verify the prompt node that extracts the problem category and confirm it returns the expected category values.
1. Review the Adaptive Card node and ensure it shows problem category, location, and description as required fields. Users should be able to edit values and select Submit or Cancel.

    :::image type="content" source="media/facilities-fm-create-facilities-ticket-topic-adaptive-card.png" alt-text="Screenshot that shows an Adaptive Card ticket form in chat with fields for category, location, and description, and Submit and Cancel buttons.":::

1. Confirm the topic branches based on the selected action. For **Submit**, verify it calls the flow you created earlier (under Create a Power Automate flow) and handles the returned response.

## FAQs

### I'm not getting the expected results while testing an AI prompt. What should I do?

Confirm that your prompt instructions and inputs match your test scenario. If results still vary, try a different model and compare outputs.
[FAQ for prompts](/ai-builder/faqs-prompts)

### Can I use different data sources for categories defined in an AI prompt?

Yes. You can provide categories as plain text in the prompt, or populate them from a data source such as Dataverse tables.
[Prompt columns in Microsoft Dataverse](/power-apps/maker/data-platform/prompt-column)

### How are error conditions handled?

Near the end of the topic, conditional branches handle failures and send user-friendly messages. You can customize the existing conditions and add new ones as needed.

### What should I do if I get an error message while executing the topic?

Review the following areas:

- **AI prompt:** Make sure the Location and Category prompt outputs contain the values you expect. To troubleshoot, temporarily display the output variables by using a Send a message node.

  :::image type="content" source="media/facilities-fm-create-facilities-ticket-faq-prompt.png" alt-text="Screenshot that shows the topic workflow diagram with a _Send a message_ node showing extracted location and category variables for debugging.":::

- **Flow:** Check the flow run history for failed runs and validate connector configuration, inputs, and returned outputs.

  :::image type="content" source="media/facilities-fm-create-facilities-ticket-faq-flow.png" alt-text="Screenshot of the Power Automate run history listing recent runs with status, start time, and duration.":::

- **Error handling logic:** Verify your conditional branches cover common failure cases and that each branch returns a clear, actionable message.

## Additional tips

- Before testing, to identify static issues in your topic definition, use the Topic Checker in Copilot Studio.
- Test your topic using the built-in chat window and review the workflow visually to catch any misconfigurations early.
