---
title: Manage Microsoft 365 Archive
ms.author: chucked
author: chuckedmonson
manager: jtremper
audience: admin
ms.reviewer: sreelakshmi
ms.date: 06/14/2025
ms.topic: how-to
ms.service: microsoft-365-archive
ms.custom: archive
search.appverid:
ms.collection:
    - essentials-manage
ms.localizationpriority:  medium
description: Learn how to archive, reactivate, and manage sites in Microsoft 365 Archive.
---

# Manage Microsoft 365 Archive

## Archive a file (preview)

On sites with file-level archive enabled, users can manually archive files that they have edit permissions for. Users select one or more files and choose the '***Archive***' action. After a file is archived, it requires reactivation before it can be read. Files that were recently archived can be reactivated instantly.

To learn more about archive states, see [Archive states in Microsoft 365 Archive](archive-states.md).

## Archive a site

[SharePoint Administrators](/entra/identity/role-based-access-control/permissions-reference#sharepoint-administrator) or [Global Administrators](/entra/identity/role-based-access-control/permissions-reference#global-administrator) can archive both non-group-connected sites and group-connected sites from the SharePoint admin center. When a group-connected site is archived, only the site is archived and the rest of the group remains active. After a site is archived, it stops consuming active storage quota and begins consuming Microsoft 365 Archive storage. Changes in storage usage might take time to appear in the SharePoint admin center.

[!INCLUDE [global-administrator-note](../includes/global-administrator-note.md)]

To learn more about archive states, see [Archive states in Microsoft 365 Archive](archive-states.md).

When a site is archived, compliance features such as eDiscovery and retention labels continue to apply.

1. In the SharePoint admin center, go to [**Active sites**](https://go.microsoft.com/fwlink/?linkid=2185220), and sign in with an account that has [admin permissions](/sharepoint/sharepoint-admin-role) for your organization.

2. In the left column, select one or more sites.

3. Select **Archive**, and to confirm, select **Archive**.

4. Archived sites can be seen on the **Archived sites** page in the SharePoint admin center.

    ![Screenshot of the Archived sites page in the SharePoint admin center.](../media/m365-archive/archived-sites-page.png)

    > [!NOTE]
    > To archive a hub site, you first need to unregister it as a hub site. Archiving Microsoft Teams-connected sites is only partially supported. For more information, see [Archive a site connected to Teams](archive-manage.md#archive-a-site-connected-to-teams).

### Archive a site connected to Teams

Sites associated with Teams that use only standard channels are supported for archiving.

Sites associated with Teams that include private or shared channels are only partially supported:

- SharePoint admin center: Archiving a site with channel sites is not possible. (Message: "The group connected site with channel sites associated can't be archived.")

- PowerShell and Graph API: Archiving a site with channel sites isn't blocked. Only the main site associated with the Team and its standard channels is archived. Private and shared channel sites remain active. Archiving channel sites directly isn't possible because these sites use unsupported site templates.

## Manage file-level archive (preview)

For the public preview of file-level archive starting at the end of March 2026, admins must explicitly enable file-level archiving for the tenant by using PowerShell. When file-level archive moves from public preview to general availability, this behavior changes. After general availability, file-level archiving is enabled by default for all SharePoint sites when Microsoft 365 Archive is enabled.

[SharePoint Administrators](/entra/identity/role-based-access-control/permissions-reference#sharepoint-administrator) or [Global Administrators](/entra/identity/role-based-access-control/permissions-reference#global-administrator) can choose whether to deploy file-level archiving by enabling or disabling it. Admins can allow file-level archiving for all SharePoint sites, a subset of sites, or not at all. Admins can also choose whether new sites are enabled for file-level archiving. When file-level archiving is enabled for a site, end users with edit permissions can archive files.

[!INCLUDE [global-administrator-note](../includes/global-administrator-note.md)]

To control which sites can use file-level archive, admins have three PowerShell tools they can utilize.

1. **Tenant-level enablement**. To only utilize Site archive and not allow any user to archive files, disable file-level archive entirely for your tenant.  This capability is controlled via the _**-AllowFileArchive**_ property flag of the _**Set-SPOTenant**_ cmdlet.  This property will override the site-level property with the same name.  This flag was introduced into SPO admin PowerShell starting in version 16.0.26714.12000. By default, this property is set to True, meaning that the tenant can archive files. When set to False, no new files can be archived by users, but existing archived files can be reactivated. 

   ```PowerShell
   Set-SPOTenant -AllowFileArchive $true 
   ```

1. **Site-level enablement**. To control which sites have file-level archive enabled, enable or disable specific sites from being able to archive new files.  This capability is controlled via the _**-AllowFileArchive**_ property flag of the _**Set-SPOSite**_ cmdlet. This flag was introduced into SPO admin PowerShell starting in version 16.0.26211.12000. By default, this property is set to True, meaning that the site can archive files. When set to False, no new files can be archived by users on this site, but existing archived files can be reactivated.

   ```PowerShell
    Set-SPOSite -Identity <site_url> -AllowFileArchive $true 
    ```

1. **Defaults for new sites**. To control the value of the _**-AllowFileArchive**_ flag for sites created in the future, tenants can utilize a new flag on the _**Set-SPOTenant**_ cmdlet called _**-AllowFileArchiveOnNewSitesByDefault**_.  By default, this property is set to True, meaning that new sites will be able to archive files by default. This property's value will be copied to future created sites' ***-AllowFileArchive*** property flag, dictating whether those sites allow file archive.

    ```PowerShell
    Set-SPOTenant -AllowFileArchiveOnNewSitesByDefault $true 
    ```

    Admins can also utilize PowerShell to view usage of file-level archive.  [SharePoint Administrators](/entra/identity/role-based-access-control/permissions-reference#sharepoint-administrator) or [Global Administrators](/entra/identity/role-based-access-control/permissions-reference#global-administrator) can see how much total storage is consumed by file-level archiving for a given site.  The '*ArchivedFileDiskUsed*' property of the ***Get-SPOSite*** cmdlet indicates the storage consumed by all archived files on that site in bytes. 

    ```PowerShell
    Get-SPOSite -Identity <site_url>
    ```

## Manage archived sites

Archived sites can be reactivated or deleted. Deletion of archived sites follows the same behavior as that of active sites; that is, a site doesn't need to be reactivated before being deleted. However, sites in the "Reactivating" state can't be deleted until reactivation completes.

Admins can view details of the site, such as the URL, Archive Status, or Storage, from the **Archived sites** page.

## Reactivate a file (preview)

When a user needs to regain access to an archived file, they can easily reactivate it in the web version of SharePoint or OneDrive, depending on where the file is hosted.  Any user with read access to an archived file is able to reactivate it.

There is no fee for reactivating an archived file.

## Reactivate a site

If there's a need to access the site content again, the sites need to be reactivated. The activation time depends on the archive state of the site ("Recently archived" or "Archived"). For more information, see the [Archive states in Microsoft 365 Archive](archive-states.md).

After reactivation, the site moves back to the **Active sites** page. The site resumes its normal function, and the users have the same access rights to the site and its content as they did before the site was archived. After reactivation is complete, the storage consumed by the site will accrue to your storage quota consumption.

1. In the SharePoint admin center, go to [**Active sites**](https://go.microsoft.com/fwlink/?linkid=2185220), and sign in with an account that has [admin permissions](/sharepoint/sharepoint-admin-role) for your organization.

   > [!NOTE]
   > If you have Office 365 operated by 21Vianet (China), sign in to the [Microsoft 365 admin center](https://go.microsoft.com/fwlink/p/?linkid=850627), then browse to the SharePoint admin center and open the **Active sites** page.

2. In the left column, select a site that needs to be reactivated.

3. On the command bar, select **Archive**.

4. On the **Archive** pane, select **Reactivate**.

5. If you're trying to reactivate a site from "Archived" state, you see a confirmation pop-up that shows an estimated price for reactivation. Select **Confirm** to reactivate. The site enters the "Reactivating" state. It moves to active sites once reactivation is complete.

<!---
    Update needed: Screenshot still mentions reactivation cost and does not match current message in SPO Admin Center 
--->

![Screenshot of an example site that you are reactivating in the SharePoint admin center.](../media/m365-archive/reactivate-site-example.png)

When you reactivate a site, its permissions, lists, pages, files, folder-structure, site-level policies, and other metadata will revert to the prearchival state, except if files are deleted from archived sites. The only two exceptions are when files are deleted while the site is archived:

- Content in the recycle bin expires naturally, and that expiration continues while archived.
- Content marked to be deleted by retention policies will still be deleted as normal.

Other than these two exceptions, you can expect the site to be unchanged.  

## Change the archive status of a site via PowerShell

You can archive and reactivate sites by using the PowerShell cmdlet [**Set-SPOSiteArchiveState**](/powershell/module/microsoft.online.sharepoint.powershell/set-spositearchivestate).

## Change the archive status of a site via Graph API

You can archive a site by using the Graph API **beta** endpoint [**site: archive**](/graph/api/site-archive) or reactivate it by using the Graph API **beta** endpoint [**site: unarchive**](/graph/api/site-unarchive).

## Site templates supported

|Template ID  |Template  |Template name|
|---------|---------|---------|
|1|Team site (classic experience)|STS#0|
|1|Blank Site|STS#1|
|1|Document Workspace|STS#2|
|1|Team site|STS#3|
|68|Communication site|SITEPAGEPUBLISHING#0|
|64|Teams site|GROUP#0|
|32|News site|SPSNEWS#0|
|33|News site|SPSNHOME#0|
|4|Wiki site|WIKI#0|
|56|Enterprise Wiki|ENTERWIKI#0|
|7|Document center|BDR#0|
|14483|Records Center|OFFILE#0|
|14483|Records Center|OFFILE#1|


> [!NOTE]
> OneDrive accounts (site template 21) can't be archived by admins.  Some accounts will be put into archive by the OneDrive service when they are unlicensed for 93 days or more.  When the service archives these accounts, admins can reactivate the accounts via PowerShell. [Learn more about unlicensed OneDrive accounts](/SharePoint/unlicensed-onedrive-accounts).
