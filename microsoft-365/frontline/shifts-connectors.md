---
title: Shifts connectors
author: lana-chin
ms.author: jtremper
manager: jtremper
ms.topic: article
audience: admin
ms.reviewer: harrywong
ms.service: microsoft-365-frontline
search.appverid: MET150
description: Learn about Shifts connectors and how to use them to connect Shifts to your workforce management system. 
ms.localizationpriority: high
ms.collection: 
  - M365-collaboration
  - m365-frontline
  - highpri
  - teams-1p-app-admin
appliesto: 
  - Microsoft Teams
  - Microsoft 365 for frontline workers
ms.date: 02/05/2026
---

# Shifts connectors

## Overview

Shifts connectors enable you to integrate Shifts, the schedule management tool in Microsoft Teams, with your workforce management (WFM) system. After you set up a connection, your frontline workers can seamlessly view and manage their schedules in your WFM system from within Shifts.

Connecting your WFM system to Teams empowers your frontline workforce to manage schedules more effectively and streamlines everyday processes for higher engagement and productivity. Your frontline workers have one place for their scheduling, communication, and collaboration needs to get work done, from anywhere, on any device.

This article gives you an overview of the Reflexis Shifts connector and how it works.

> [!NOTE]
> You can also create your own custom solution to integrate Shifts with your WFM system using the Microsoft Graph API. To learn more, see [Create a custom integration to sync your workforce management system with Shifts](shifts-custom-wfm-integration.md).

## How Shifts connectors work

Connectors sync schedule data between your WFM system and Shifts, bringing your organization's schedules into Teams. Shifts is where your frontline workers engage for their scheduling needs. Your WFM system is the system of record for business rules, compliance, and intelligence.

Data flows via the connector both ways to ensure schedules are always up to date. Schedules in your WFM system are synced to Shifts, and changes made to schedules in Shifts are synced back to your WFM system. As the system of record, all business rules are enforced by your WFM system before data is saved to Shifts.

## Reflexis Shifts connector for Microsoft Teams

The Reflexis Shifts connector for Microsoft Teams is hosted and managed by Zebra. With this connector, you can integrate Shifts with Reflexis Workforce Management (WFM) to manage your schedules and keep them up to date.

Frontline workers have access to their schedule in Shifts in Teams, and their requests are synchronized from Shifts to Reflexis WFM. The status of requests and shifts created in Reflexis WFM are synced to Shifts in Teams. This solution is available in Reflexis WFM versions 4.3.2, 4.4, and 4.5.

To learn more, go to <https://connect.zebra.com/microsoft-connectors>.

:::image type="content" source="media/shifts-connector-reflexis.png" alt-text="Screenshot showing list of shifts on a mobile device and a schedule in Reflexis." lightbox="media/shifts-connector-reflexis.png":::

Frontline managers can:

- Publish shifts and schedules in Reflexis WFM and view them in Shifts.
- Edit shifts in Reflexis WFM.
- Create, manage, and assign open shifts in Reflexis WFM and view them in Shifts.
- View shifts in both Reflexis WFM and Shifts.
- Create, edit, and delete time off in Reflexis WFM and view in Shifts.
- View and approve schedule requests from workers in both Reflexis WFM and Shifts.

Frontline workers can:

- See their own and their team's shifts and schedules in Shifts.
- Request time off, request open shifts, and swap and offer shifts in Shifts.
- View time off information in Shifts.
- View their team's open shifts in Shifts.

The following actions are currently not supported:

- Add, edit, delete, save, or publish shifts in Shifts.
- Add, edit, delete, save, or publish time off in Shifts.
- Add, edit, delete, save, or publish open shifts in Shifts.
- Set and update worker availability in Reflexis WFM and view in Shifts (frontline managers)
- Assign open shifts that were created in Reflexis WFM in Shifts (frontline managers)
- Set availability in Shifts (frontline workers)
- View and post timecard entries in Shifts (frontline workers)

### Example scenario

Diego, a manager, publishes a schedule in Reflexis WFM, which is synced to Shifts in Teams through the connector. Hayden, a staff member, gets notified in Teams on their mobile device, and views their (and their team's) new schedule. Hayden can also see detailed information, such as tasks set by the manager, within the assigned shifts.

Hayden wants to take a short vacation and requests a day off using Shifts. The request is sent to Reflexis WFM through the connector. Reflexis WFM ensures that the request is compliant with business rules and then creates the request. Diego sees and approves the request in Reflexis, and the approval is synced to Teams. (Diego can also see and approve the request in Shifts). Hayden is notified in Teams that the request has been approved and reviews their updated schedule.

In another example, Hayden wants to swap a shift with a coworker. In Shifts, Hayden sees a list of swap-eligible shifts based on business parameters set in Reflexis WFM. Hayden selects a shift that's currently assigned to Joanna. Joanna is notified in Teams on her phone and accepts the swap request in the app. Diego sees and approves the request in Shifts, and the approval is synced with Reflexis WFM. (Diego can also see and approve the request in Reflexis WFM). Hayden and Joanna are each notified in Teams and view their respective updated schedules.

### Connection setup overview

Prerequisites for setting up a connection

- Reflexis WFM version 4.3.2 or later
- Microsoft Teams and the Shifts app
- All workers' data is in sync between Reflexis WFM and Teams

Here's an overview of the connection setup process.

1. Register a new app in Microsoft Entra ID, which will be used to communicate with Shifts.
1. Take a note of the client ID and secret that's generated by registration.
1. Give permissions for Microsoft Graph API to the app that you registered.
1. Use the client ID and secret to configure the WFM app to connect with Teams through the connector.
1. Do a one-time sync to import basic data to map entities between Teams and Reflexis WFM.
1. Sign in to Teams and go to the Shifts app.

   Schedule data is synced from Reflexis WFM to Shifts when a schedule is published and workers' schedules and shifts are displayed in Shifts. Shifts communicates with Reflexis WFM to sync changes that happened in Shifts.

> [!IMPORTANT]
> Microsoft-managed shift connectors were retired on December 7, 2025.

## Related articles

- [Shifts for your frontline organization](shifts-for-teams-landing-page.md)
