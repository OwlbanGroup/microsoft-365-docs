---
title: Frequently asked questions about Microsoft 365 Archive
ms.author: chucked
author: chuckedmonson
manager: jtremper
audience: admin
ms.reviewer: sreelakshmi
ms.date: 07/27/2025
ms.topic: faq
ms.service: microsoft-365-archive
ms.custom: archive
search.appverid:
ms.collection:
    - m365initiative-syntex
ms.localizationpriority:  medium
description: Read frequently asked questions about Microsoft 365 Archive.
---

# Frequently asked questions about Microsoft 365 Archive

#### Why can't I see the 'archive' button for file-level archive?

The file-level archive preview allows end users to manually archive files. Starting in April 2026, the following prerequisites must be met for the Archive action to be visible:

1. **Billing enabled and Microsoft 365 Archive enabled**.  Pay-as-you-go billing must be configured, and Microsoft 365 Archive must be turned on in the tenant. These settings are required before file-level archive is available. For setup details, see [Admin setup](archive-setup.md).


1. **File-level archive (preview) enabled via PowerShell**. During public preview, file-level archive must be explicitly turned on for the tenant by using PowerShell. When file-level archive reaches general availability, this step won't be required, and file-level archive will be enabled by default when Microsoft 365 Archive is enabled. For details, see [Manage](archive-manage.md).  

   1. **Site enabled for file-level archive [enabled by default]**. File-level archive is allowed on SharePoint sites by default, but admins can disable it per site by using PowerShell. If file-level archive is disabled for a site, the Archive action isn't available for files on that site. For details, see [Manage](archive-manage.md).  
      
1. **User permissioned for archiving**. To archive a file, the user must have 'edit' permissions to the file.  

File-level archive is currently available only on SharePoint sites. Other limitations, such as certain file types, can prevent users from archiving files.  See the full list in the Limitations section of [Overview](archive-overview.md#limitations).

#### How does file-level archive (preview) affect my site-level storage?

File-level archive doesn't change site storage usage or quota behavior. Archived files are accounted for in site storage the same way as active files. Archiving a file doesn't reduce reported storage usage, change storage calculations, or affect quota enforcement. Because archived files continue to consume site storage, file-level archive can't be used to reduce storage usage or store data beyond a site's allocated quota.

#### How does file-level archive (preview) affect my tenant-level storage?

File-level archive and site-level archive affect tenant-level storage in the same way. Archived files and sites still count toward your total tenant storage. However, the archived data is counted as **archived storage** instead of active SharePoint storage. Archiving data doesn't remove it from your tenant's total storage usage. Instead, the data is reclassified from active storage to archived storage.

After files are archived:

- Active storage usage decreases.

- Archived storage usage increases by the same amount.
> [!NOTE]
> When M365 Archive is enabled, you're considered over your allotted quota only if your active storage usage exceeds your tenant quota limit.  If M365 Archive isn't enabled, then all content archived or active will count as active.

#### What is the difference between Microsoft 365 Archive and SharePoint Advanced Management?

- Microsoft 365 Archive gives the ability to archive a site in SharePoint.

- Storage for archived sites is metered and charged at a $0.05/GB/month rate vs. the normal standard storage rate of $0.20/GB/month. For more information, see [Pricing model for Microsoft 365 Archive](archive-pricing.md).

- The site lifecycle management feature in SharePoint Advanced Management is a separate licensed offering.  It helps automate and orchestrate the movement of sites into the archive tier via admin-defined policies, reducing manual operations. In other words, the site lifecycle management in SharePoint Advanced Management operates with Microsoft 365 Archive.

#### How does Azure Blob compare to Microsoft 365 Archive?

Microsoft 365 Archive allows you to keep data in place in SharePoint, providing benefits that aren't possible when data is migrated elsewhere:

- Archiving happens quickly, usually within minutes, regardless of the amount or size of content being archived.

- No need to manage data in a separate security and compliance domain, therefore allowing your security and compliance tooling to operate seamlessly-including eDiscovery, retention policies, and more.

- Admin search indexes remain intact.

- Sites are archived and rehydrated without loss of metadata, security versioning, and more.

#### What happens to versions for archived files?

Archived files retain all versions. When an archived file is reactivated, all existing versions are restored. Versions can't be archived independently of the file they belong to.

#### Can content in legal hold be archived?

Yes, nearly all Microsoft Purview features continue to operate as normal.

#### Is content in archived sites searchable?

Admin-level search and Purview-based search operate like normal. End-user search is supported.  To learn more, visit [End-user search.](search/m365-archive-search-overview.md)

#### What's the availability timing of Microsoft 365 Archive for Microsoft Government Community Cloud (GCC) customers?

Standard GCC rollout times apply.

#### If I purchase additional standard storage packs, will I get reimbursed for the cost difference?

No, if you purchase additional storage packs you won't get reimbursed for any unused additional standard storage.

#### If I am under my tenant storage quota for Archive and Standard storage combined, will I be charged?

You won't be charged for archive storage as long as your combined storage (standard storage plus archive storage) doesn't exceed your standard storage quota. For more information, see [Pricing model for Microsoft 365 Archive](archive-pricing.md).

In eligible EDU tenants, the pooled storage quota is applied. For more information, see [Education offering for Microsoft 365 Archive](archive-education-offering.md#pooled-storage-eligibility).

#### Does archived content get returned in Microsoft 365 Copilot queries?

No, archived content isn't used by Microsoft 365 Copilot. 

#### Can you delete an archived site, should you no longer need it?  

You can directly delete an archived site without the need to reactivate.

- In SharePoint admin center: Delete the site, and any associated Microsoft 365 Group is automatically deleted as well.

- Using PowerShell and Graph API: If the site is connected to a Microsoft 365 Group, then you should delete the Microsoft 365 Group, and the associated sites are automatically deleted as well. Deleting only the site (but not the group) isn't possible. If the site isn't connected to a Microsoft 365 Group, then you can delete the site directly. 

#### Can archived content in legal hold be deleted?

Content under legal hold can't be deleted. If the legal hold is removed or the retention policy has expired, the content can be deleted.

#### Does archiving a Teams-connected site also archive the Team?

Microsoft 365 Archive and Microsoft Teams archive are two independent features. Archiving a team doesn't automatically archive the corresponding site. Likewise, archiving a Teams-connected site doesn't automatically archive the associated team. Admins have to archive both the team and the site independently. 
