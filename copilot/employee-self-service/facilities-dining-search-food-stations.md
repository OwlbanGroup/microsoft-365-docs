---
title: "Extend Employee Self-Service agent: Search  food stations"
f1.keywords: NOCSH
ms.author: heidip
author: prsarnaik
manager: baradhak
ms.reviewer: MicrosoftHeidi
ms.date: 04/20/2026
audience: Admin
ms.topic: article
ms.service: microsoft-365-copilot
ms.subservice: ess-agent
ms.custom: ess-agent
ms.localizationpriority: medium
ms.collection: m365copilot
description: Learn about extending the Employee Self-Service tailored to your organization. This article describes the steps to search food by category (Dining) via Employee Self-Service. Example - "Where can I find Chinese food?"
appliesto:
  - ✅ Microsoft 365 Copilot
---

# Extend Employee Self-Service agent: Search food stations

The Employee Self-Service Copilot agent allows employees to get their queries answered from admin-configured knowledge sources, HCM, and IT systems, directly within Microsoft 365 Copilot.

An organization might seek to enhance Employee Self-Service Copilot agent by integrating additional capabilities. These additional capabilities enable organizations to maximize the benefits of Employee Self-Service and support work-related activities.

To support these needs, Employee Self-Service Copilot agent is designed to be extensible. You can create and publish your own articles that work seamlessly alongside the built-in ones. This article explains the steps to extend Employee Self-Service by adding new one tailored to your organization.

At Microsoft, we extended Employee Self-Service Copilot agent to bring in Real Estate and Facilities (RE&F) related experiences. Some scenarios that this extensibility to Employee Self-Service is helping us power are:

- Create a Facilities Ticket (Facilities), for example, "I want to report a water leak."
- Register a Vehicle (Parking), for example, "I want to register my vehicle Tesla Model 3."
- View food stations or counters by cuisine (Dining), for example, Where can I find Chinese food?
- Invite a Guest (Lobby), for example "I want to invite my spouse to Building 32."

The following section shows how a maker in Copilot Studio can extend Employee Self-Service to support Dining related scenarios. Before diving into the maker experience, it's important to understand what real estate and facilities are and how they support employees.

## Real Estate & Facilities

RE&F play a pivotal role in shaping the overall employee experience within an organization. By integrating RE&F services into Employee Self-Service platforms, companies can streamline access to essential workplace amenities and administrative tasks, making daily operations more efficient and user-friendly for employees.

For instance, features like - vehicle registration, facilities tickets for maintenance requests, access to café menus, and streamlined guest invitation processes empower employees to manage their work environment proactively. These capabilities reduce administrative overhead, minimize wait times, and improve satisfaction by giving employees greater control and visibility over their workplace needs.

Moreover, such integrated experiences foster a sense of belonging and engagement, as employees feel supported by systems that anticipate and address their requirements. These integrated experiences not only enhance productivity, but also contribute to a positive organizational culture where employees can focus more on their core responsibilities rather than logistical hassles.

Ultimately, the seamless blend of real estate and facilities management with employee-centric digital solutions helps organizations attract, retain, and motivate talent by prioritizing their day-to-day comfort and efficiency.

Now that we covered the fundamentals, let’s walk through a practical example. In the following sections, we extend the Employee Self-Service Copilot agent to allow employees to view food stations or counter by cuisine through the Employee Self-Service Copilot agent.

## Prerequisites

To extend the Employee Self-Service Copilot agent with a custom topic for your Real Estate integration, ensure the following prerequisites are met:

- Employee Self-Service Copilot agent is installed in Copilot Studio.
- Maker access to a sandbox or preproduction environment in Copilot Studio.
- Access to [Copilot Samples](https://github.com/microsoft/CopilotStudioSamples/blob/main/EmployeeSelfServiceAgent/Facilities/EmployeeSearchDiningStations/topic.yaml) in GitHub.
- Need access to the Dining API that is used to view food stations by cuisine.
  - This example assumes the Dining service is built as an independent service on Azure platform.

## Fundamentals

Extending Employee Self-Service for RE&F experiences requires an understanding of a few key building blocks: **topics, adaptive cards, and connectors**. Together, these building blocks define how conversational scenarios are designed and how they interact with RE&F services.

### Topics

In Copilot Studio, a topic is defined as a workflow of a conversation. Microsoft 365 Copilot topics are used to:

- Define trigger phrases that determine when the Dining Search Stations topic should be activated based on user’s natural language input.
- Ask questions and capture necessary inputs from the user, such as cuisine type.
- Trigger an HTTP API call to the backend Dining APIs.
- Interpret the backend API response and return the relevant outcome to the user in natural language.

### Adaptive Cards

Adaptive cards are platform-agnostic UI snippets authored in JSON. They help create interactive and visually appealing cards to capture user inputs while maintaining the conversational flow.

### Connectors

Connectors enable you to connect the agent with other apps, data, and devices in the cloud.

For this example of search food stations, we assume the Dining service is a custom solution built on Azure. The HTTP connector is used to connect to backend APIs for viewing food stations.

For supported connectors, see: [Connector reference overview](/connectors/connector-reference/)

HTTP request action reference: [HTTP with Microsoft Entra ID (preauthorized) - Connectors](/connectors/webcontents/)

## Example: Search Food Stations by Category

In this scenario, an employee needs to search food stations before ordering food, for example, search for American food stations.

Through the Employee Self-Service agent, the employee can ask - Where can I find Chinese food? The Employee Self-Service agent finds stations serving their preferred cuisine across the office campus. The employees save time, skip the hassle, and make every meal a choice they love.

The implementation includes the following steps:

- **Create a topic**: Define the conversation flow for searching food stations, including triggers, prompts, and instructions.
  Validate API responses, handle errors as required, and provide user feedback.

### Create a Topic

Steps:

- Create a new Topic named **“Dining Search Stations”**.
  - In Copilot Studio, select **\*Add a topic > From blank**.
  - Once inside the topic, select **Open code editor**.
  - Copy the topic YAML from the sample repository and paste it into the code editor: [topic.yaml](https://github.com/microsoft/CopilotStudioSamples/blob/main/EmployeeSelfServiceAgent/Facilities/EmployeeSearchDiningStations/topic.yaml), and close the editor.
  - Update the HTTP API URL in the code sample. Search for kind: HttpRequestAction. You see a code that sets a value to a variable named SearchStationsApiUrl, as in the screenshot. Update the variable value as per your backend system.

    :::image type="content" source="media/facilities-dining-update-api-url.png" alt-text="Screenshot showing how to update API url in the topic.":::

  - Resolve any validation errors, and then select Save.

- Validate
  - Open the visual representation of the topic and verify the end-to-end flow.
  - To identify any static issues, run Topic checker
  - Optionally, follow the next section (Review the topic workflow) for a guided walkthrough of what to verify.

- Test
  - In Copilot Studio, select **Test** to open the test chat.
  - Ask a question such as Where can I find Chinese food?
  - After submission, the Employee Self-Service Copilot agent displays Chinese food options.

### Review the topic workflow

- Review the Trigger node text (the description shown to users). Adjust it as needed for your scenario.

  :::image type="content" source="media/facilities-dining-validate-topic-file-start.png" alt-text="Screenshot showing the model description in the file.":::

- Confirm that the input variable named `StationCategory` is created. Select **Details** > **Input** to check that your topic has an input variable named StationCategory.

  :::image type="content" source="media/facilities-dining-validate-topic-details-input.png" alt-text="Screenshot showing the input section of the details.":::

- Validate that the output variable named SearchStationsApiResponse is created. Select **Details** > **Output** to check that your topic has an input variable named SearchStationResponse.

  :::image type="content" source="media/facilities-dining-validate-topic-details-output.png" alt-text="Screenshot showing the output section of the details.":::

- Validate the conditional block exists that checks user’s input in the input variable.

  :::image type="content" source="media/facilities-dining-validate-condition-block-category.png" alt-text="Screenshot showing the conditional block section of the topic details.":::

- The next node assigns the station category value, cuisine in our case, if the user enters a value in your input variable. For example, if the user mentions "Where can I find Italian food?", the value Italian gets assigned to the input variable.

- Validate that the HttpConnector is calling an appropriate API that belongs to your platform. Also check that the results from the API are captured in the output variable named SearchStationsApiResponse. We're collecting the response in a variable called SearchStationsApiResponse. This response has properties CafeId, CafeName, StationName, CanPurchaseonline, and so on. You should create a schema per your API response for this topic variable. Your API response can have a different structure, and you should make sure that structure is taken into consideration.

  :::image type="content" source="media/facilities-dining-validate-http-request.png" alt-text="Screenshot showing http request block.":::

- Validate that the conditional block checks if the response is nonempty before the topic ends.

- Final step is to display the result. You don't need to add any adaptive card here. In the topic description, we mention extracting information from SearchStationApiResponse output variable. The Large Language Model (LLM) follows those instructions and displays a well-formatted output.

## FAQs

### In the sample, what happens if the API fails to return results?

If the API fails, it returns an empty response. In this case, the conditional block shows an error message telling the user it was unable to find dining information for the cuisine entered, and points them to a link. You should tailor error responses based on your system.

### When I save my topic, it shows errors saying it can't find certain variables. What do I do?

Go to the **Variables** tab and verify all variables (topic and environment) are declared.

:::image type="content" source="media/facilities-dining-faq-variables.png" alt-text="Screenshot showing the way to check all the variables.":::

### How are error conditions handled?

Conditional branching is used to handle errors and send the appropriate messages to the user.

:::image type="content" source="media/facilities-dining-faq-error-conditions.png" alt-text="Screenshot showing the way to check error conditions.":::

## Additional tips

- Before testing, to identify static issues in your topic definition, use the Topic Checker in Copilot Studio.

- Test your topic using the built-in chat window and review the workflow visually to catch any misconfigurations early.
