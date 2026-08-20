---
title: Overview of Loop storage
ms.author: odocspr
author: officedocspr5
manager: jtremper
audience: Admin
ms.topic: concept-article
ms.service: loop
ms.reviewer: michalbr, dancost
ms.date: 03/13/2026
ms.update-cycle: 180-days
ms.localizationpriority: medium
search.appverid: MET150
ms.collection: 
- M365-collaboration
- essentials-compliance
- magic-ai-copilot
description: Learn about Loop storage in the Microsoft 365 ecosystem.
f1.keywords:
- CSH
ms.custom: 
- NewAdminCenter_Update
- chat-teams-channels-revamp
appliesto: 
- Microsoft Teams
---

# Overview of Loop storage

## At a glance

| Key fact | Details |
|----------|--------|
| **Storage locations** | SharePoint Embedded, SharePoint sites, or OneDrive (depends on where content is created) |
| **Personal SharePoint Embedded container control** | Disable both Loop workspace creation and Copilot Pages/Notebooks creation to prevent the single user-owned container from being created |
| **Quota** | Counts against your organization's SharePoint storage quota |
| **Container limit** | 25 TB maximum per container |
| **User departure** | Personal workspace follows OneDrive cleanup schedule (30 days active → soft delete → 93 days to permanent deletion) |

## Quick storage reference

Use this simplified view to quickly identify where content is stored:

| Created in... | Stored in... |
|---------------|-------------|
| **Loop app** (any workspace) | SharePoint Embedded containers |
| **Teams chat notes** | SharePoint Embedded containers |
| **Teams private** chat or meeting | User's OneDrive |
| **Teams channel** or channel meeting | SharePoint site (channel folder or Meetings) |
| **Outlook, OneNote, Whiteboard** | User's OneDrive |

## Storage

> [!NOTE]
> The Copilot Pages and Copilot Notebooks content moved to a [dedicated article](cpcn-storage.md).

Loop content is stored in SharePoint, OneDrive, and [SharePoint Embedded](/sharepoint/dev/embedded/concepts/admin-exp/consuming-tenant-admin/cta). Where the content was originally created determines its storage location. Use the table below to understand storage locations and lifetime management for each content type:

|Content originally created in|Content stored in SharePoint Embedded|Content stored in SharePoint Site|Content stored in User's OneDrive|Lifetime Management|
|-----|-----|-----|-----|-----|
|Loop application, My workspace *|✔️in user-owned container|||user account|
|Loop application, shared workspace|✔️in shared container|||workspace owners|
|Teams [channel workspace](https://techcommunity.microsoft.com/blog/microsoft365insiderblog/collaborate-in-real-time-with-workspaces-in-teams/4414334)|✔️in shared container|||Microsoft 365 Group|
|Teams [chat notes](https://support.microsoft.com/office/use-collaborative-notes-in-microsoft-teams-chats-6f19dd1f-b37a-47a2-9795-bb5deb4d0f58)|✔️in container|||Microsoft Teams Chat|
|Teams channel meeting||✔️in 📁`Meetings`||Microsoft 365 Group|
|Teams channel||✔️in Channel folder||Microsoft 365 Group|
|Teams private chat|||✔️in 📁`Microsoft Teams Chat files`|user account|
|Teams private meeting|||✔️in 📁`Meetings`|user account|
|Outlook email|||✔️in 📁`Attachments`|user account|
|OneNote for Windows or for the web|||✔️in 📁`OneNote Loop files`|user account|
|Whiteboard|||✔️in 📁`Whiteboard\Components`|user account|

\* The My workspace SharePoint Embedded container is the same physical user-owned container used by Copilot Pages and Copilot Notebooks.

## User-owned container name

Copilot Pages and Copilot Notebooks use the same user-owned SharePoint Embedded container as Loop My workspace. This container is named 'Pages' if the person visits the Microsoft 365 Copilot app first. It is named 'My workspace' (localized into the language of the user's Loop experience during creation) if the person visits the Loop application first. Refer to [listing all user-owned containers](cpcn-loop-spe-management.md#listing-all-the-user-owned-containers) to get a list, regardless of the container name.

This single user-owned container is created when a user first needs one of these experiences and at least one of the relevant creation policies allows it. If *Create Loop workspaces in Loop* is disabled but *Create and view Copilot Pages and Copilot Notebooks* is enabled, creating a Copilot Page or Notebook can still create the container. If *Create and view Copilot Pages and Copilot Notebooks* is disabled but *Create Loop workspaces in Loop* is enabled, opening Loop My workspace can still create that same container.

To prevent the single user-owned container from being created, disable both of the following policies for the same user:

1. *Create and view Copilot Pages and Copilot Notebooks*
1. *Create Loop workspaces in Loop*

In SharePoint admin center and PowerShell, the owning application for this container is shown as Loop. For more information, see the admin policies articles for [Loop](loop-admin-configuration.md) and [Copilot Pages and Copilot Notebooks](cpcn-admin-configuration.md).

## Storage quota

All Loop workspaces count against your organization's SharePoint storage quota.

SharePoint Embedded also offers a platform for developers to build their own applications. This alternate usage pattern which bills per use is different from Loop and Copilot Pages storage quota management.

## Storage limits

Loop workspaces have a maximum size of 25 TB. This limit can't be increased or decreased. Learn more about [SharePoint Embedded container limits](/sharepoint/dev/embedded/concepts/app-concepts/limits-calling).

## Storage management after user departure

### Types of Loop workspaces

Storage behaviors after user departure depends on the type of Loop workspace. There's one **personal workspace** per user in your organization, created on demand by the person when accessed. All other created Loop workspaces are **shared workspaces**. For more information, see [workspace membership and Microsoft 365 Groups](loop-permission.md#workspace-membership-and-microsoft-365-groups) on the two shared workspace types.

### Shared Workspaces

#### Tenant-owned

- A roster permissions tenant-owned shared Loop workspaces. If all owners leave the company, the workspace becomes ownerless, remains in the tenant, and isn't automatically deleted.
- You must be an owner to delete a workspace. If all the owners left the company, members can't delete the workspace until an IT administrator adds new owners.

#### Microsoft 365 Group-owned

- The Microsoft 365 Group permissions and manages the lifetime of group-owned shared Loop workspaces, similar to the management of SharePoint Team sites.

### Personal Workspaces

- Copilot Pages, Copilot Notebooks, and [My workspace](#my-workspace) store content within the same physical user-owned SharePoint Embedded container.
- This personal content is private by default, allowing users to work without forced sharing or coauthoring, similar to OneDrive.

#### My workspace

- My workspace is stored in the same user-owned SharePoint Embedded container, created through Loop application IDs. The container is lifecycle managed with the user account and is deleted when the user account is deleted from the organization.
- My workspace can't be permanently reassigned to a new owner. It follows the same cleanup schedule as OneDrive: 30 days active, then soft deleted, and permanently purged 93 days after soft deletion.
- Admins can recover content during the soft delete period using the SharePoint Admin Center or PowerShell.

> [!NOTE]
> A feature for IT admins to assign temporary custodians during the cleanup period of user-owned workspaces isn't yet available. This capability for Copilot Pages, Copilot Notebooks, and My workspace is planned (Microsoft Roadmap ID 421612).

#### Ideas

- The Ideas workspace is deprecated, no longer created by default, and replaced with the My workspace personal workspace.
- Ideas were the first default workspace, was tenant-owned, permissioned with a single-person roster.
- The Loop application doesn't delete the deprecated Ideas workspace; a user or an admin must delete it if needed.
- If a user doesn't have multiple owners on their Ideas workspace, the workspace becomes ownerless when they leave the company. It remains in the tenant and isn't automatically deleted.

### Loop components created in Microsoft 365 outside of the Loop application or Copilot Pages

See [Storage](#storage). When content is stored in OneDrive, if that user leaves the organization, the standard OneDrive IT policy is applied. When content is stored in SharePoint, the standard SharePoint IT policy is applied. Learn more about [OneDrive and SharePoint Retention and Deletion](/sharepoint/retention-and-deletion).

## Related articles

- [Summary of compliance, lifecycle, governance](loop-compliance-summary.md)
- [Requirements](loop-requirements.md)
- [Permissions](loop-permission.md)
- [Admin policies](loop-admin-configuration.md)
- [UX examples for admin policy states](loop-ux-examples.md)
- [Managing SharePoint Embedded containers](cpcn-loop-spe-management.md)
- [Purview management](cpcn-loop-purview-management.md)
- [Overview of Loop components in Microsoft 365](loop-components-teams.md)
