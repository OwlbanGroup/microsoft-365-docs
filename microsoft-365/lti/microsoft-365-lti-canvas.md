---
title: Deploy the Microsoft 365 LTI App in Canvas
description: Learn how to deploy the Microsoft 365 Learning Tool Interoperability (LTI) app in Canvas.
author: jennplatt
ms.author: avering
manager: michal.gideoni
ms.date: 04/03/2026
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
# Deploy the Microsoft 365 LTI&reg; app in Canvas

This guide provides steps for deploying the Microsoft 365 Learning Tool Interoperability&reg; (LTI) app in Canvas.

:::image type="content" source="./media/canvas.png" alt-text="Screenshot of Canvas." border="true":::

For an overview of the Microsoft 365 LTI integration for learning management systems (LMS), see [Integrating Microsoft products with your Learning Management System](/microsoft-365/lti/).

> [!IMPORTANT]
> The person who deploys this integration should be an Administrator role in the LMS. A person in your organization who is a Microsoft 365 Global Administrator is also needed to help complete the configuration of the app before first time use. [Learn more about administrator roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles).

By installing and using the Microsoft 365 LTI app, educators and students can transmit grades to the LMS where the terms of use and privacy policy of that application apply.

## LMS requirements for the integration

### User matching between Microsoft apps and Canvas

To fully integrate with your LMS environment and perform tasks on behalf of users like populating students and co-teachers into OneNote Class Notebooks, setting file permissions, or sending grades from Assignments to the LMS gradebook, the Microsoft 365 LTI app must be able to map Student and Teacher identities between the LMS and the Microsoft Entra ID directory services. It's required to populate the LMS user Email field with the matching Microsoft 365/Microsoft Entra User UPN or Primary Email address. Verify this for people in every course that uses the integration to ensure the Microsoft apps can match LMS users.

## One-time setup by an LMS administrator

Canvas supports multiple tool deployment for the same tool through two different methods in the LMS. You can use either or both deployment methods to control which courses the tool is available in.

**To deploy for all courses in your Canvas top-level organization or a sub-organization account:**

1. Sign into your Canvas instance as an administrator.

1. Select the **Admin** icon in the left side global navigation, and then select the organization account in Canvas that you wish to deploy into.

1. In the left-side navigation, select the **Developer Key** link, and then choose the **Inherited** tab.

1. In the apps list, search for **Microsoft Education.** If the ***Nothing Here Yet*** message is displayed after typing your search, select the **Show All Keys** button.

1. There are three Developer Keys for the Microsoft Education API app: two LTI keys and one API key.
    :::image type="content" source="./media/canvas-developer-keys.png" alt-text="Screenshot of developer keys." border="true":::
    1. Enable the API key **170000000001941** by toggling the **State** switch to **On** and then selecting the **Switch to On** button in the pop up to confirm.
    1. Decide which version of the LTI key you would like to deploy and toggle the **State** switch to **On** and then select the **Switch to On** button in the pop up to confirm. You need to know which Client ID listed in the Details column for the developer key you chose to enable for a later step.
  
    > [!NOTE]
    > The apps are identical. However, the "(Course Nav Disabled)" app has the course navigation placement disabled by default, which might be useful for testing but is less discoverable by instructors since they must locate and enable it in their course menu to leverage the apps and make visible to their students. If you decide to change this default after testing, you can disable the version you have chosen currently, and repeat these instructions for the other app. We strongly recommend using the first key with course nav enabled to help with discoverability and to drive awareness with your instructors.

1. In the left-side navigation, select the **Settings** link, and then choose the **Apps** tab.

1. Select the **View App Configurations** button at the top right, and then select the **+ App** button.

1. In the **Add App** dialog, change the **Configuration Type** dropdown to **By Client ID**.

1. In the **Client ID** textbox, enter the Client ID you chose to enable in step 5:

    - If you enabled the **Microsoft Education** app in step 5, enter Client ID **170000000001935**, and then select **Submit**.
    - If you enabled the **Microsoft Education (Course Nav Disabled)** app in step 5, enter Client ID **170000000001936**, and then select **Submit**.

1. Select **Install** to complete the installation.

1. *Recommended:* Before leaving the app list, locate the app in the installed app list, and toggle the **Add to RCE Toolbar** to ensure the app icon appears in the Rich Content Editor for easy discoverability.

**To deploy for a single course:**

If you choose not to install the app for all courses as described in *Option 1: Deploy for all courses in an organization*, then the LMS Admin or each course teacher must install the app for individual courses.

1. To install the app for an individual course, select the **Settings** link in the course navigation, and then choose the **Apps** tab.

1. Select the **View App Configurations** button, and then select the **+ App** button.

1. In the **Add App** screen, change the **Configuration Type** dropdown to **By Client ID**.

1. In the **Client ID** textbox, enter the Client ID: **170000000001935**, and then select **Submit**.

1. Select **Install** to complete the installation.

1. *Recommended:* Before leaving the app list, locate the app in the installed app list, and toggle the **Add to RCE Toolbar** to ensure the app icon appears in the Rich Content Editor for easy discoverability.

1. A Canvas Administrator must complete the steps for **First-time Configuration by an LMS Administrator.** (This configuration only must be done once for the Canvas and Microsoft 365 tenant).

## First-time configuration by an LMS administrator

You must launch the app for the first time as a user with the **Canvas Administrator** role to complete the configuration for your deployment and activate the tool. Users won't have access until you complete this step!

1. As a Canvas Administrator, select the **Admin** icon on the left bar, and then select the top-level account where the tool was deployed.

1. Select the **Settings** link in the left side navigation, and then select the **Apps** tab at the top to show the **External Apps** page. Select the **View App Configurations** button in the header to show the list of your deployed apps.

1. Locate the **Microsoft Education** app that you deployed in previous steps and select the Gear icon on the right to show the menu. Select the **Configure** option to show the Microsoft Education admin configuration dialog.

    :::image type="content" source="./media/configure.png" alt-text="Screenshot of the Configure option in the Gear icon menu." border="true":::

1. Continue with the [**Microsoft 365 LTI first-time configuration steps**](microsoft-365-lti-first-time-configuration.md) to complete the configuration for your organization.

The Microsoft Education app is now deployed, configured, and ready to use in your Canvas courses!

## Ongoing use by educators and students in a course

On first access, users must sign in using their Microsoft 365 (Microsoft Entra) account.

Learn more about [Microsoft 365 LTI application scenarios for Instructors and Students](https://support.microsoft.com/topic/learning-management-systems-lms-integrations-ebc683e4-2b5a-4e07-8823-858f0e10c318).

## Browser settings

- Cookies should be allowed for Microsoft apps.

- Popups shouldn't be blocked for Microsoft apps.

If you receive an error message regarding cookies being blocked, check your browser's address bar for an icon to allow third-party cookies and popups. If this issue persists, review your settings related to cookies and popups to make sure they're allowed for this app.

## Migration Guidance

When migrating from any legacy app that is replaced by the functionality in the Microsoft 365 LTI app, it's recommended that **Placements of the classic app are disabled, but the app isn't uninstalled until all users are leveraging the new app, and content has been migrated to or recreated with the new app**. Because the classic LTI apps have different resource links to files and data, the process of migrating educators and their content to the new apps may be unique.

### Migrating from classic Microsoft OneDrive LTI

The classic Microsoft OneDrive LTI will retire on **September 17, 2026**.  

After that date, any content links in courses from the classic LTI will stop working; however, files created by the classic app will continue to be accessible through the Microsoft 365 Group and SharePoint site for the course. There are resources for [locating Microsoft 365 Groups associated with LMS courses on GitHub](https://aka.ms/LTIScripts) to assist your Microsoft 365 Administrators in locating these assets. Any Microsoft OneDrive files submitted as part of Canvas assignments as External Tool submission types will remain available in [SpeedGrader](https://community.instructure.com/en/kb/articles/661156-how-do-i-get-to-speedgrader-from-an-assignment-quiz-or-graded-discussion), and are managed in Canvas storage.

#### Microsoft OneDrive LTI Migration Tool

A migration tool to help teachers migrate content links in Canvas courses from classic OneDrive LTI to Microsoft 365 LTI is available in Preview. The tool  migrates classic Microsoft OneDrive LTI file links to Microsoft 365 LTI file links within a Canvas course.

> [!IMPORTANT]
> The migration tool relies on data and services from the classic Microsoft OneDrive LTI app. The migration tool will retire with the classic Microsoft OneDrive LTI on September 17, 2026.

#### Prerequisites for deploying the OneDrive Migration Tool

1. Microsoft 365 LTI must be deployed and set up in Canvas, and the OneDrive app must be enabled so that all instructors can access the new Microsoft Education OneDrive app in courses they'll migrate.

   1. To confirm the OneDrive app is enabled, sign in as a Canvas root admin, go to **Admin > `<your root account>` > Apps > View App Configurations** and select the Gear icon menu for the **Microsoft Education** app.

   1. Select the **Configure** option to open the Microsoft 365 LTI **Admin Settings** page.

       :::image type="content" source="media/configure-option.png" alt-text="Screenshot showing configure option.":::

   1. Verify the OneDrive app is enabled.

       :::image type="content" source="media/migrate-applications.png" alt-text="Screenshot showing applications.":::

   1. It's also recommended that you toggle On the **Add to RCE** Toolbar switch for the new Microsoft Education app so that its icon is pinned in the Canvas Rich Text Editors for users to easily discover.

       :::image type="content" source="media/rce.png" alt-text="Screenshot of RCE toolbar toggle.":::

1. The classic Microsoft OneDrive app must also be deployed and enabled (do **not** delete it!). However, once the migration tool is released for instructors, the placements for the classic OneDrive app should be disabled so no further files are attached using this tool during/after migration.

    The classic Microsoft OneDrive app placements can be disabled by a Canvas root account admin in **Admin > `<your root account>` > Settings > Apps > View App Configurations** by selecting the Gear icon drop-down for the **Microsoft OneDrive** app and toggling off all the placements listed.

    :::image type="content" source="media/migrate-app-placement.png" alt-text="Screenshot of app placements.":::

#### Deploying the OneDrive Migration Tool

The migration tool is a separate LTI app defined as an Inherited Developer Key, which must be deployed to your Canvas root account (or courses for testing).

To deploy the classic OneDrive LTI to Microsoft 365 LTI migration tool, follow these steps:

1. As a Canvas root account admin, go to **Admin  Developer Keys** and select the **Inherited** tab.
1. Search for **Microsoft OneDrive Migration Tool** and select the **Show All Keys** button to display results. The ID should be **170000000002010**.
1. Toggle the **State** to **on**.

   :::image type="content" source="media/key.png" alt-text="Screenshot of the ID.":::

1. Copy the ID to your clipboard as we need to paste it in a future step.
1. Navigate to **Admin  Settings** and select the **Apps** tab.  
1. Select the **View App Configurations** button, then select the **+ App** button to add a new app.
1. Change the **Configuration Type** to **By Client ID** and paste **170000000002010** into the **Client ID** field.
1. Select **Submit** to add the app.

#### Using the OneDrive Migration Tool

You must have a teacher role or Canvas admin role to have access to the migration tool in a course. The course doesn't need to be Published in order to run the tool.

1. There are two ways to access the OneDrive Migration Tool in a course:
   - Through the course **Home** page

     :::image type="content" source="media/course-home.png" alt-text="Screenshot of the Course Home page in Canvas showing the OneDrive Migration Tool button.":::

   - Through the course **Settings** page

     :::image type="content" source="media/course-setting.png" alt-text="Screenshot of the Course Settings page in Canvas showing the OneDrive Migration Tool button.":::

1. Selecting the **OneDrive Migration Tool** button launches the migration tool which verifies the tenant and initializes any required course resources to complete the migration. This process might take a few seconds if initialization of group and SPO resources is required.

    :::image type="content" source="media/migrate-course-content.png" alt-text="Screenshot of initialization.":::

1. If this is the first time you have run the migration tool in a course, an authorization is required to call Canvas APIs to scan and migrate courses.
   - Select the **Authorize** button to grant access to the required APIs to locate and update file links for migration.

     :::image type="content" source="media/authorize-api.png" alt-text="Screenshot of authorize button.":::

   - A dialog pops up to confirm your authorization for the app to access Canvas APIs on your behalf to complete the migration. Select **Authorize** to continue.

     :::image type="content" source="media/authorize-key.png" alt-text="Screenshot of an authorize button.":::

1. The migration tool scans your course for classic OneDrive LTI file links and displays the content items containing file links that can be migrated. The content type (for example: Assignments, Pages), name, and number of file links found are displayed. You can choose to deselect a content item to exclude it from migration.

   :::image type="content" source="media/migrating-list.png" alt-text="Screenshot of migrating course content.":::

   > [!NOTE]
   > The OneDrive Migration Tool scans for classic OneDrive LTI file links that are linked or embedded in Assignments, Modules, Pages, Announcements, Discussions, Syllabus, and Quizzes (original).

   > [!IMPORTANT]
   > Course Collaborations created with the classic Microsoft OneDrive LTI aren't migrated and should be re-created using the Microsoft 365 LTI (Microsoft Education) app in Canvas courses. Old Collaborations will fail to launch after September 17, 2026; however, the files will remain on the class Microsoft OneDrive Sharepoint site for archive access and retention.

1. Confirm the content items to be migrated and select the **Migrate** button.  

   A popup appears to confirm you wish to proceed with the migration. Select **Migrate** to continue.

   :::image type="content" source="media/migrate-button.png" alt-text="Screenshot of migrate button.":::

   Progress indicators appear for each item and for overall progress until the migration is completed.

   :::image type="content" source="media/migrate-progress.png" alt-text="Screenshot of a migration progress.":::

1. When the migration is finished, a summary appears confirming success for all files that were migrated.

   :::image type="content" source="media/migrate-complete.png" alt-text="Screenshot showing migration complete.":::

1. Select **Done** to close the view and return to the migration tool start page. The migration tool start page scans the course to confirm there aren't any additional files to migrate and lets you know if none were found. If you chose to skip any files listed for migration, those files appear as candidates for migration again and can be ignored.

   :::image type="content" source="media/migrate-all-set.png" alt-text="Screenshot of completion.":::

> [!NOTE]
> There's no limit to the number of files that can be migrated in a course. However, you can choose to migrate one content type at a time (for example, Assignments only) to break up the time it takes to migrate many files and also be able to confirm migration by content type.

> [!IMPORTANT]
> The migration tool relies on data and services from the classic Microsoft OneDrive LTI app. The migration tool will retire with the classic Microsoft OneDrive LTI on September 17, 2026.

### Migrate from classic OneNote Class Notebook LTI 1.1 app

The classic OneNote Class Notebook LTI 1.1 app will be sunset on September 17, 2026.

All notebooks created by the classic LTI 1.1 app will continue to be available directly in the educator owner's OneDrive or through the [OneNote web app](https://onenote.cloud.microsoft).

There's no way to automatically migrate a classic OneNote LTI 1.1 Class Notebook to a Microsoft 365 LTI OneNote Class Notebook. However, you can create a new notebook using the Microsoft 365 LTI OneNote app and copy content from any previous Class Notebooks in OneNote on Windows using the right-click menu option on Sections and Pages to move or copy to another OneNote Notebook. There are also copy options in OneNote for [Mac](https://support.microsoft.com/office/move-or-copy-notes-in-onenote-for-mac-7faf1c7f-d6c6-420e-a65c-5ac7c6f6ec27), [iOS](https://support.microsoft.com/office/move-or-copy-notes-between-notebooks-and-sections-in-onenote-for-ipad-or-iphone-94a516da-35f1-46b4-9ed6-a7c712324bab), or [Android](https://support.microsoft.com/office/move-or-copy-notes-between-notebooks-and-sections-in-onenote-for-ipad-or-iphone-94a516da-35f1-46b4-9ed6-a7c712324bab). Students can also [export a copy of their work from OneNote Class Notebooks](https://support.microsoft.com/topic/students-export-a-copy-of-your-work-from-onenote-class-notebook-teams-and-onedrive-deb62dce-c441-41b0-b2fc-fccd3cc99c1b).

We suggest that after deploying Microsoft 365 LTI with OneNote Class Notebooks enabled that you leave the classic Microsoft OneNote Class Notebook LTI 1.1 app installed to keep existing notebooks accessible in active courses, but disable the Placements of the classic LTI, so no new links are created using the classic tool.

The classic Microsoft OneNote Class Notebook LTI 1.1 app can be removed, or placements can be disabled by a Canvas root account admin in **Admin > *`<your root account>`* > Settings > Apps > View App Configurations** by selecting the Gear icon drop-down for the **OneNote Class Notebook** app and deleting or toggling off all the placements listed.

### Migrating from Office 365 LTI 1.1 (Instructure legacy app)

Currently, there's no direct migration path or copy available from Microsoft Office 365 LTI 1.1 file links to Microsoft Education file links used in rich text editors, as External Tool assignment templates for student submission, or in Collaborations.

After deploying the Microsoft 365 LTI, we recommend that you leave the Office 365 app installed to keep existing files and links accessible in active courses, but disable the Placements, so new links are only created using the Microsoft 365 LTI app via Microsoft Education menu items.

The Office 365 LTI app placements can be disabled by a Canvas root account admin in **Admin > *`<your root account>`* > Settings > Apps > View App Configurations** by selecting the Gear icon drop-down for the **Office 365** app and toggling off all the placements listed.

:::image type="content" source="./media/app-placement.png" alt-text="Screenshot of app placement." border="true":::

It's also recommended that you toggle on the **Add to RCE** Toolbar switch for the new Microsoft Education app so that it's featured in the Canvas Rich Text Editors for users to easily discover.

### Migrate from classic OneNote Class Notebook LTI 1.1 app

The classic OneNote Class Notebook LTI 1.1 app will be sunset on September 17, 2026.

All notebooks created by the classic LTI 1.1 app will continue to be available directly in the educator owner's OneDrive or through the [OneNote web app](https://onenote.cloud.microsoft).

There's no way to automatically migrate a classic OneNote LTI 1.1 Class Notebook to a Microsoft 365 LTI OneNote Class Notebook. However, you can create a new notebook using the Microsoft 365 LTI OneNote app and copy content from any previous Class Notebooks in OneNote on Windows using the right-click menu option on Sections and Pages to move or copy to another OneNote Notebook. There are also copy options in OneNote for [Mac](https://support.microsoft.com/office/move-or-copy-notes-in-onenote-for-mac-7faf1c7f-d6c6-420e-a65c-5ac7c6f6ec27), [iOS](https://support.microsoft.com/office/move-or-copy-notes-between-notebooks-and-sections-in-onenote-for-ipad-or-iphone-94a516da-35f1-46b4-9ed6-a7c712324bab), or [Android](https://support.microsoft.com/office/move-or-copy-notes-between-notebooks-and-sections-in-onenote-for-ipad-or-iphone-94a516da-35f1-46b4-9ed6-a7c712324bab). Students can also [export a copy of their work from OneNote Class Notebooks](https://support.microsoft.com/topic/students-export-a-copy-of-your-work-from-onenote-class-notebook-teams-and-onedrive-deb62dce-c441-41b0-b2fc-fccd3cc99c1b).

We suggest that after deploying Microsoft 365 LTI with OneNote Class Notebooks enabled that you leave the classic Microsoft OneNote Class Notebook LTI 1.1 app installed to keep existing notebooks accessible in active courses, but disable the Placements of the classic LTI, so no new links are created using the classic tool.

The classic Microsoft OneNote Class Notebook LTI 1.1 app can be removed, or placements can be disabled by a Canvas root account admin in **Admin > *`<your root account>`* > Settings > Apps > View App Configurations** by selecting the Gear icon drop-down for the **OneNote Class Notebook** app and deleting or toggling off all the placements listed.

### Migrating from classic Microsoft Teams Assignments LTI

Teams Assignments created by the classic Teams Assignments LTI app can be reused as Microsoft 365 LTI (Microsoft Education) Assignments. Any Team Assignment created in the LMS or via the assignments app in Microsoft Teams for Education can be copied and reused using the copy **From Existing** functionality in the **Create Assignment** instructor flow.

After deploying the Microsoft 365 LTI, we recommend that you leave the classic Teams Assignments app installed to keep existing files and links accessible in active courses, but disable the Placements, so new assignments are only created using the Microsoft 365 LTI app via Microsoft Education menu items.

The classic Teams Assignments LTI app placements can be disabled by a Canvas root account admin in **Admin > *`<your root account>`* > Settings > Apps > View App Configurations** by selecting the Gear icon drop-down for the **Teams Assignments** app and toggling off all the placements listed. Once all assignments have been copied into new courses and courses with existing classic Teams Assignments have been archived, the classic Teams Assignments app can be removed.

### Migrating from Reflect LTI

There's no migration required for reflections created in the legacy LTI 1.3 app. The new Reflect app in Microsoft 365 LTI will continue to work with any existing reflections. We suggest that you uninstall the classic app as soon as you install the new Microsoft Education LTI. To remove the classic app, locate the Microsoft Reflect app in **Admin > *`<your root account>`* > Settings > Apps > View App Configurations** and use the Gear icon drop-down to delete the app deployment.

### Migrating from classic Teams Classes LTI

[The classic Teams Classes app has sunset as of September 15, 2025.](https://support.microsoft.com/topic/teams-learning-tools-interoperability-lti-sunset-faq-7e071764-f5bf-420a-b4a1-6070cd6b9aa2) There's no required migration of the Teams created by the Canvas [Microsoft Teams sync](https://community.instructure.com/kb/articles/661147-unknown) integration or for any Team connected to a course by the classic Teams Assignments LTI's Manage Connected Teams feature. The new Teams app that is included in the Microsoft 365 LTI app (Microsoft Education) is backwards compatible and displays any previously connected Teams, as well as any Teams created by the Canvas Teams Sync or Microsoft 365 LTI Team sync going forward. Review the additional [guidance on choosing a Teams sync option](/microsoft-365/lti/microsoft-365-lti-first-time-configuration?#considerations-for-teams-sync-options).
We suggest that you uninstall the classic app by locating the app in **Admin > Settings > *`<your root account>`* > Apps > View App Configurations** and use the Gear icon drop-down for the **Microsoft Teams classes** app to delete the app deployment.

### Migrating from classic Teams Meetings LTI

[The legacy Teams Meetings has sunset as of September 15, 2025.](https://support.microsoft.com/topic/teams-learning-tools-interoperability-lti-sunset-faq-7e071764-f5bf-420a-b4a1-6070cd6b9aa2) All meetings created by the classic Teams Meetings LTI will continue to be displayed in Outlook and Teams calendars, but only the previous six months and upcoming six months of meetings scheduled will display in the new Meetings app that is part of Microsoft 365 LTI. Course meetings should be created in the new Meetings app going forward.

We suggest that you uninstall the classic app by locating the app in **Admin > *`<your root account>`* > Settings > Apps > View App Configurations** and use the Gear icon drop-down for the **Microsoft Teams Meetings** app to delete the app deployment.

## Getting help and giving feedback

- LMS and Microsoft 365 admins can contact Microsoft [Education Support](https://aka.ms/edusupport) to help resolve configuration and deployment issues, for themselves or on behalf of users.

- Educators and Learners can contact support or give feedback directly from the app through the help and feedback menu.

:::image type="content" source="./media/help-and-feedback.png" alt-text="Screenshot of link to send feedback for Microsoft 365 LTI." border="true":::

Learning Tools Interoperability&reg; (LTI&reg;) is a trademark of the 1EdTech Consortium, Inc. (**[**1edtech.org**](https://1edtech.org)**).
