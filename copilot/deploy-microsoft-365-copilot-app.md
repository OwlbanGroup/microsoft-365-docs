---
title: Deployment overview for the Microsoft 365 Copilot app
description: Enterprise and company IT Admins can use this guide to manage the deployment of the Microsoft 365 Copilot app to devices in their organization.
author:      frankroj
ms.author:   frankroj
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.topic: how-to
ms.date:     04/06/2026
manager: scotv
---

# Deployment overview for the Microsoft 365 Copilot app

The Microsoft 365 Copilot app helps Microsoft 365 users be more productive by providing a single place to access [Microsoft 365 Copilot](microsoft-365-copilot-overview.md) features and capabilities, including search, chat, agents, and more.

## Download and install the app for a single user

The app is available as a [web app](https://m365.cloud.microsoft/), as a desktop app that can be installed on [Windows and Mac Devices](https://www.microsoft.com/microsoft-365/copilot/download-copilot-app), and an Android app for [Android](https://support.microsoft.com/office/microsoft-365-copilot-app-for-android-0383d031-a1c6-46c9-b734-53cd1d22765b) and [iOS](https://support.microsoft.com/office/microsoft-365-copilot-app-for-ios-c8880c05-883a-46b6-ad32-9bffa31228d0) devices.

For organizations that disable access to the Windows Store, the installer can be directly accessed from [this link](https://get.microsoft.com/installer/download/9WZDNCRD29V9).

To install for a single user, follow these steps:

1. Download the [.exe installer](https://get.microsoft.com/installer/download/9WZDNCRD29V9).
1. Navigate to where the exe file is located.
1. Run the downloaded installer manually to install the app.

   ```powershell
   .\Microsoft 365 Copilot Installer.exe
   ```

## Deploy the app across your organization using Intune

To deploy the Microsoft 365 Copilot app to a group of computers, or your entire organization, follow the steps mentioned here to deploy the app using [Intune](/intune/intune-service/apps/store-apps-microsoft).

> [!NOTE]
> This method works regardless of whether the Microsoft Store is enabled or disabled for the user.

## Deploy the app automatically with Microsoft 365 Apps

> [!IMPORTANT]
> Due to a technical issue, we have temporarily disabled the automatic installation of the Microsoft 365 Copilot app to eligible devices with the Microsoft 365 desktop apps. We will provide another update once we re-enable these installations.

Windows devices with the Microsoft 365 desktop apps automatically install the Microsoft 365 Copilot app. The installation happens in the background and doesn't interrupt the user.

To install, devices must have Microsoft 365 Apps Version 2511. Version 2511 was released in the Current Channel in early December 2025 and in the Monthly Enterprise Channel in January 2026.

Devices on the Semi-Annual Enterprise Channel don't automatically install the Microsoft 365 Copilot app.

> [!NOTE]
> The installation of the Microsoft 365 Copilot app to devices with Microsoft 365 Apps isn't enabled for customers in the European Economic Area (EEA).

### Prevent automatic installation

To prevent the app from installing to devices with existing installations of Microsoft 365 Apps:

1. Sign in to the [Microsoft 365 Apps admin center](https://config.office.com/deploymentsettings) with an admin account.
1. Go to **Customization** > **Device Configuration** > **Modern App Settings**.
1. Select **Microsoft 365 Copilot app**, then clear the **Enable automatic installation of Microsoft 365 Copilot app** check box.

## Updating the Microsoft 365 Copilot app

The Microsoft 365 Copilot app can update automatically through the Microsoft Store and via its own built-in updater.

## Related content

- [Frequently asked questions about deploying the Microsoft 365 Copilot app](faq-deploy-microsoft-365-copilot-app.yml).
