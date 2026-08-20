---
title: Microsoft 365 LTI First Time Configuration
description: Learn about the first time configuration of Microsoft 365 LTI
ms.date: 01/14/2026
last.review.date: 04/09/2026
author: jennplatt
ms.author: avering
manager: michal.gideoni
audience: admin
ms.topic: how-to
ms.service: microsoft-365-education
ms.collection: 
- M365-modern-desktop
- m365initiative-edu
- tier2
- m365-education
- all-education
- mesg
ms.localizationpriority: medium
---
# Microsoft 365 LTI&reg; First-Time Configuration

> [!IMPORTANT]
> For the initial preview release of the Microsoft 365 LTI, the included experiences are Assignments, OneNote Class Notebooks, OneDrive, Reflect, Teams, and Teams Meetings. See [tips on migrating](#migration-guidance) to these new experiences from existing Microsoft LTI tools you have deployed today.

## First-time configuration by an LMS Administrator

Once the Microsoft 365 tool is installed, an LMS Administrator must complete the first-time configuration for the app. Any user with an **LMS administrator role** can launch the **Microsoft Education** tool in any course or from the admin panel and the first-time configuration experience will run.  

> [!NOTE]
> You need help from your Microsoft 365 Administrator for the second step to consent for required app privileges in your Microsoft 365 / Microsoft Entra tenant. [Learn more about administrator roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles).

1. Review and agree to the Microsoft Online Terms of service (including Preview terms of service) for the Microsoft 365 LTI application.

   :::image type="content" source="./media/terms.png" alt-text="Screenshot of terms of service." border="true":::

1. Have a Microsoft 365 Global Administrator provide consent.

   - If you're a Microsoft 365 Global Administrator, then you're able to provide consent for the app by clicking the **Admin Consent** button.
   - If you aren't a Microsoft 365 Administrator, then you can copy and paste the Admin consent URL for the app and sent it to a Microsoft 365 Global Administrator to complete this step.

   The button and messaging will change to "Reconsent" after this step is completed.

   :::image type="content" source="./media/consent.png" alt-text="Screenshot of admin setting consent." border="true":::

   > [!IMPORTANT]
   > We're aware that the consent dialog displays an Unverified status for Microsoft, and are working to resolve this. The dialog is being presented from the app at `https://m365lti.edu.cloud.microsoft` and is a first party Microsoft 365 application that complies with Microsoft 365 terms. We don't share any permissions with other apps or services, all are exclusively leveraged by Microsoft 365 LTI to provide functionality. More information on additional industry compliance and regulatory resources is available on the [Microsoft Service Trust Portal.](https://aka.ms/STP)

   > [!NOTE]
   > You can share the following instructions with your Microsoft admin to complete this step. The URL they need is: `https://m365lti.edu.cloud.microsoft/Consent`

   Selecting the **Admin Consent** button or visiting the consent link triggers a login and then the **Permissions requested** dialog. Login with a Microsoft 365 Global Administrator user role, and then select **Accept** on the dialog to complete this step.

   :::image type="content" source="./media/pick-account.png" alt-text="Screenshot of the account dialog box." border="true":::

   :::image type="content" source="./media/permissions-requested.png" alt-text="Screenshot of permissions requested." border="true":::

1. As the LMS Administrator, you can choose to enable or disable the Microsoft Education experiences available to your instructors. The **Enabled** toggle switch controls the enabled state of the application for the deployment, and the **On by default** toggle switch controls the default state of visibility for the app in a course. Instructors can change the visibility of any enabled app in their course.

   > [!IMPORTANT]
   > For Preview, we recommend you test OneDrive and Class Notebook in courses that don't have the other versions deployed. Both current and new apps can exist and create assets in the same course, but files won't be able to be copied or accessed between versions at the moment.

   :::image type="content" source="./media/applications.png" alt-text="Screenshot of applications." border="true":::

1. Choose to allow instructors to create Teams for their classes via the Microsoft 365 LTI. This enables the Create Team switch for instructors where they can choose to create a Team for their course in any LMS that doesn't have its own integration with Microsoft Teams. We suggest you leave this disabled if you're leveraging the built-in sync integration for your LMS, or other Teams sync mechanisms like Microsoft School Data Sync. Enabling/disabling this setting won't affect the functionality of other Microsoft Education tools in the LTI app like Assignments, OneDrive, or OneNote Class Notebooks.

   :::image type="content" source="./media/teams-creation.png" alt-text="Screenshot of Microsoft Teams creation." border="true":::

> [!IMPORTANT]
> Canvas, Blackboard, Moodle, and other LMSs have robust integrations to create and sync Microsoft Teams for a course. If you have one of those sync mechanisms already enabled, we recommend that you continue to use that integration and leave this setting disabled so your users don't unexpectedly end up with multiple Teams. At the current time, those integrations are more robust and are the preferred way to create and sync a Team for their courses. Allowing your instructors to create Teams via the Microsoft 365 integration results in a separate Team being created for the course.

## Considerations for Teams Sync Options

As mentioned, if you choose to allow your instructors to create teams for your use by your LMS courses, or automatically create them, you'll want to ensure that only one primary Teams sync mechanism is enabled per LMS course. Here are some considerations in choosing the right mechanism for your organizations:

**LMS Integrated Teams sync:**

- Creates a Class Team that by default has the Microsoft Teams Assignments, Gradebook, Classwork, and other apps enabled by default. These apps can be disabled by Teams App Policy in the Teams Admin Center by your Microsoft 365 administrator.
- Syncs the Team roster periodically in the background and/or based on real-time changes in the LMS. Consult the documentation for the specific sync you're using for exact information on sync timing and behavior.
- Depending on the LMS, there may be options for only instructor-led action (instructor must choose to create the Team), or admin-led (will automatically create a Team for every course).

**The Microsoft 365 Teams sync:**

- Creates a Unified Group and Team which isn't an Education Class Team type and won't include any of the Microsoft Teams apps like assignments, gradebook, classwork, and insights.
- Teams is active immediately and both owners and members have instant access.
- You can either let each instructor choose whether a Team is created for their class or enable automatic Team creation for each course on their behalf. If you have enabled automatic Team creation, the Team will be created initially after the instructor has completed their first-time configuration of the LTI app.

## Compliance and Regulatory Resources

Visit the [Microsoft Service Trust Portal](https://aka.ms/STP) for more information on certifications, regulations, and standards compliance information for Microsoft products and services.

## Migration guidance

Generally, when migrating from any legacy app that is replaced by the functionality in the Microsoft 365 LTI app, it's recommended that **Placements of the legacy app are disabled, but the app isn't uninstalled until all users are leveraging the new app, and content has been migrated to or recreated with the new app**. Because the classic LTI apps have different resource links to files and data, the process of migrating educators and their content to the new apps may be unique.

Review the guidance specific to your LMS for more information and tips for migrating from classic LTI experience to new Microsoft 365 LTI features.

- [Canvas Migration Guidance](microsoft-365-lti-canvas.md#migration-guidance)
- [Blackboard Migration Guidance](microsoft-365-lti-blackboard.md#migration-guidance)
- [Other LTI 1.3 Advantage Platform Migration Guidance](microsoft-365-lti-other.md#migration-guidance)

Learning Tools Interoperability&reg; (LTI&reg;) is a trademark of the 1EdTech Consortium, Inc. (**[**1edtech.org**](https://1edtech.org)**)
