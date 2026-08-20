---
title: "Extend Employee Self-Service agent: Invite a Guest"
f1.keywords: NOCSH
ms.author: apoorvg
author: apoorvg
manager: sudhakarms
ms.reviewer: heidip
ms.date: 04/23/2026
audience: Admin
ms.topic: article
ms.service: microsoft-365-copilot
ms.subservice: ess-agent
ms.custom: ess-agent
ms.localizationpriority: medium
ms.collection: m365copilot
description: Learn about extending the Employee Self-Service Copilot agent tailored to your organization. This article describes the steps to invite a guest to offices (Lobby) via Employee Self-Service. Example - "I want to invite my spouse to Building 32"
appliesto:
- ✅ Microsoft 365 Copilot
---

# Extend Employee Self-Service agent: Invite a Guest

The Employee Self-Service Copilot agent allows employees to get their queries answered from admin-configured knowledge sources, HCM, and IT systems, directly within Microsoft 365 Copilot.

An organization may seek to enhance Employee Self-Service Copilot agent by integrating additional capabilities. These additional capabilities enable organizations to maximize the benefits of Employee Self-Service and support work-related activities.

To support these needs, Employee Self-Service Copilot agent is designed to be extensible. You can create and publish your own topics that work seamlessly alongside the built-in ones. This article explains the steps to extend Employee Self-Service by adding new topics tailored to your organization.

At Microsoft, we extended Employee Self-Service Copilot agent to bring in Real Estate and Facilities related experiences. Some scenarios that this extensibility to Employee Self-Service is helping us power are:

- Create a Facilities Ticket (Facilities), for example, "I want to report a water leak.".
- Register a Vehicle (Parking), for example, "I want to register my vehicle Tesla Model 3."
- View food stations or counters by cuisine (Dining), for example, "Where can I find Chinese food?"
- Invite a Guest (Lobby), for example, "I want to invite my spouse to Building 32."

The following section shows how a maker in Copilot Studio can extend Employee Self-Service to support these scenarios. Before diving into the maker experience, it's important to understand what real estate and facilities are and how they support employees.

## Real Estate & Facilities

Real Estate and Facilities (RE&F) play a pivotal role in shaping the overall employee experience within an organization. By integrating RE&F services into Employee Self-Service platforms, companies can streamline access to essential workplace amenities and administrative tasks, making daily operations more efficient and user-friendly for employees.

For instance, features like - vehicle registration, facilities tickets for maintenance requests, access to café menus, and streamlined guest invitation processes empower employees to manage their work environment proactively. These capabilities reduce administrative overhead, minimize wait times, and improve satisfaction by giving employees greater control and visibility over their workplace needs.

Moreover, such integrated experiences foster a sense of belonging and engagement, as employees feel supported by systems that anticipate and address their requirements. These integrated experiences not only enhance productivity, but also contribute to a positive organizational culture where employees can focus more on their core responsibilities rather than logistical hassles.

Ultimately, the seamless blend of real estate and facilities management with employee-centric digital solutions helps organizations attract, retain, and motivate talent by prioritizing their day-to-day comfort and efficiency.

Now that we covered the fundamentals, let's walk through a practical example. In the following sections, we extend the Employee Self-Service Copilot agent to allow employees to perform various operations.

## Prerequisites

To extend the Employee Self-Service Copilot agent with a custom *Invite a guest* topic, ensure the following prerequisites are met:

- Employee Self-Service agent is installed in Copilot Studio.
- Access to [Copilot Samples](https://github.com/microsoft/CopilotStudioSamples/tree/main/EmployeeSelfServiceAgent/Facilities/EmployeeInviteGuest) in GitHub.
- Maker access to a sandbox or preproduction environment in Copilot Studio.
- Access to the Guest Management APIs that is used to fetch the list of buildings and create guest invitations.
  - For this example of inviting a guest to office, we assume the Guest Management system is a custom solution built on the Azure platform.

## Fundamentals

Extending Employee Self-Service for RE&F experiences requires an understanding of a few key building blocks: **topics, adaptive cards, and connectors**. Together, these building blocks define how conversational scenarios are designed and how they interact with RE&F services.

### Topics

In Copilot Studio, a topic is defined as a workflow of a conversation. Microsoft 365 Copilot topics are used to:

- Define trigger prompts that determine when the *Invite a guest* topic should be activated based on user’s natural language input.
- Ask questions and capture necessary inputs from the user, such as building information and guest details like name, email, and purpose of visit.
- Present a guest registration form where users can fill in required details.
- Trigger an HTTP API call to the backend Guest Management APIs.
- Interpret the backend API response and return the relevant outcome to the user in natural language.

### Adaptive Cards

Adaptive cards are platform-agnostic UI snippets authored in JSON. They help create interactive and visually appealing cards to capture user inputs while maintaining the conversational flow.

### Connectors

Connectors enable you to connect the agent with other apps, data, and devices in the cloud.

For this example of inviting a guest to office, we assume the Guest Management system is a custom solution built on Azure. The HTTP connector is used to connect to backend APIs for creating a guest invitation.

Learn more about [Available connectors](/connectors/connector-reference/).

Learn more about [HTTP request node](/microsoft-copilot-studio/authoring-http-node).

## Example: Invite a Guest

In the **Invite a Guest** scenario, an employee can preregister a visitor such as a business partner, vendor, interview candidate, or personal guest.

Through the Employee Self-Service platform, the employee can initiate a guest invitation by providing essential details like the guest’s name, contact information, visit date, time, and purpose. The system validates the request and registers the guest with visitor management system. The system also sends an invitation mail with arrival instructions to the guest, and notifies the reception team about their arrival. All these steps ensure a smooth check-in experience for the guest while maintaining workplace security and operational efficiency.

This process involves only one step:

- **Creating a topic**: Define the workflow, trigger prompts, and instructions for the guest invite scenario.
  - Design an Adaptive card to capture guest visit details, and to build binding inputs to state variables for API requests.
  - Validate API responses, handle errors as required, and provide user feedback.

### Create a Topic

- Create a topic named **Invite a guest**
  - In Copilot Studio, select **Add a topic > From blank**.
  - Once inside the topic, select **Open code editor**.
  - Use the code from the Copilot Samples repository [Invite a Guest topic YAML](https://github.com/microsoft/CopilotStudioSamples/blob/main/EmployeeSelfServiceAgent/Facilities/EmployeeInviteGuest/topic.yaml) and paste in the code editor.
  - Update the HTTP API URL in the code sample. Search for "kind: HttpRequestAction" and update the URL property as per your backend system.
  - Save the topic.

- Validate
  - Open the visual representation of the topic definition and validate the workflow of the topic.
  - Select **Topic Checker** for any static issues with the definition.
  - Optionally, go through the following section, "Review the topic workflow", to understand and validate the steps.

- Now, let's test the newly added topic
  - Using the Test button in **Copilot Studio**, open the test chat window.
  - Invite guest using the prompt "Invite my guest to the office". This prompt opens an Adaptive card where you can fill the required details like guest name, purpose of visit, date, and time of visit, etc.
  - Upon successful submission, the Employee Self-Service system displays a confirmation that the guest invite is created.

### Review the topic workflow

- The Trigger node captures the topic description, which is visible from the user interface. You can use Microsoft 365 copilot to fine-tune as per your requirements.

    :::image type="content" source="media/facilities-lobby-invite-guest-validate-topic-trigger.png" alt-text="Diagram that shows the trigger node configuration where you can change the trigger description.":::

- The next few nodes enforce certain limitations - like supporting only single guest visits and supporting only new visits and not edit/cancellation of existing visits.
  - Enforcing these limitations is an optional step. To enforce these limitations, few variables are maintained based on the user query. These variables are then used in a group of conditional statements for enforcing the required limitations.
  - If these limitations aren't required, remove them by deleting the corresponding variables and condition nodes.

- The next node is to make an HTTP call to the backend API to fetch all buildings. These buildings are prepopulated in the guest registration form that gets rendered in the following steps. We use HttpRequestAction component for making the HTTP call. The HTTP call can be alternatively configured in several other ways described in the connectors section previously.

- The next node is a Customize Response node to determine the guest visit purpose and location from the user query to autopopulate in the guest invite form. This node is added for an enriched user experience; however, this node is optional and the corresponding nodes can be omitted as per requirements.

    :::image type="content" source="media/facilities-lobby-invite-guest-validate-topic-response-instructions.png" alt-text="Diagram that shows the Customize Response nodes for determining visit purpose and location.":::

- The next node is the guest invite adaptive card with action buttons. Verify the existing fields. Currently the required input parameters for creating a guest visit are - guest first name, last name, email, meeting purpose, and meeting location (name of the building). Users can add or modify input fields as needed.

    :::image type="content" source="media/facilities-lobby-invite-guest-validate-topic-adative-card.png" alt-text="Diagram that shows the adaptive card fields for the guest invitation form. Adjust the fields as required.":::

- The next node is to make an HTTP call to the backend create invite API with all the collected information forwarded with the request.

- The following steps determine if the visit creation was successful and displays a message to the user accordingly.
  - Upon successful submission, the Employee Self-Service system displays a confirmation of the visit creation for the user’s guest.
  - In case the request failed due to any reason, a failure message is sent to the user. These messages can be customized by modifying the corresponding SendActivity components.

    :::image type="content" source="media/facilities-lobby-invite-guest-validate-topic-error-handling.png" alt-text="Diagram that shows the handling of success and failure conditions in the topic.":::

## FAQs

### I need to configure the API call as per my requirement. What should I do?

We use *HttpRequestAction* component for making the HTTP calls. As a start, you can use the same and modify it as per your needs. There are also several other ways to configure the HTTP call as described in the connectors section previously.

- Expand the HttpRequestAction node, and in the URL section select **Select variable** > **Formula** to update your backend API URL. Select **Insert** to save the URL.

    :::image type="content" source="media/facilities-lobby-invite-guest-httprequest.png" alt-text="Diagram that shows the HttpRequestAction component configuration for updating URL.":::

- Select the appropriate HTTP request method from the method dropdown.

- Add the required headers, request body, and error handling as per your backend API definition.
    :::image type="content" source="media/facilities-lobby-invite-guest-httprequest-headers-body.png" alt-text="Diagram that shows the headers and body configuration in HttpRequestAction.":::

- Select the appropriate Response data type as per your backend contracts from the dropdown.
- Save the response in a state variable. This state variable allows you to access the response in the later steps.

### How are error conditions handled?

Towards the end of the topic, you see conditional branching as shown in the following image, which is used to handle errors and send the appropriate messages to the user. These conditions can be customized, and any additional conditions can be added to the same condition group as required.

:::image type="content" source="media/facilities-lobby-invite-guest-conditional-branching.png" alt-text="Diagram that shows conditional branching for error handling in the topic.":::

### What should I do if I get an error message?

Depending on the error message, check the following nodes:

- **API configuration**: Ensure the HTTP API URL in your topic definition is correct and points to the intended backend system. Double-check for typos or outdated endpoints.
- **Request method**: Verify that the HTTP request method (GET, POST, PUT) matches the expected operation for your backend API.
- **Headers and body**: Confirm that all required headers (for example, authentication scope, content type) and request body parameters are correctly set as per your backend API specification.
- **Response data type**: Make sure the response data type in your topic matches what your backend API returns (for example, Record, Table, String).
- **State variables**: Check that responses from API calls are being saved to the correct state variables for use in subsequent steps.
- **Error handling logic**: Review the conditional nodes at the end of your topic to ensure error conditions are properly handled and user-friendly messages are displayed.

### The guest registration form isn't showing the list of buildings. Why?

- Confirm that the API call to fetch buildings is correctly configured and the response is being saved to the appropriate variable.
- Check for any changes in the backend API contract or endpoint.

### My API call returns a blank or unexpected response. What could be wrong?

- Validate the request headers and body parameters.
- Validate the response data type and ensure it matches the backend API output.
- Validate the backend API logs and check for errors or contract mismatches.

### Additional tips

- Before testing, to identify static issues in your topic definition, use the Topic Checker in Copilot Studio.
- Test your topic using the built-in chat window and review the workflow visually to catch any misconfigurations early.
