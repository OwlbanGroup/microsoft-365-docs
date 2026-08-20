---
# Required metadata
# For more information, see https://learn.microsoft.com/en-us/help/platform/learn-editor-add-metadata
# For valid values of ms.service, ms.prod, and ms.topic, see https://learn.microsoft.com/en-us/help/platform/metadata-taxonomies

title: Auto-assign open shifts
description: Automatically assign open shifts using past schedules, employee availability, and scheduling rules. 
author:      sjs334 # GitHub alias
ms.author: sasincla
manager: viseshag
ms.service: microsoft-365-frontline
ms.topic: feature-guide
ms.date:     04/17/2026
---

# Auto-assign open shifts

> [!NOTE]
> This feature is currently in public preview.

## Overview

Build a schedule in seconds by automatically assigning open shifts to available workers, honoring approved time off, historical scheduling patterns, and scheduling constraints. Start by creating open shifts for the number of positions you need to fill, then click the "Assign open shifts" button to begin the process of assigning to available workers.

> [!VIDEO https://learn-video.azurefd.net/vod/player?id=ced8527b-97d5-4da2-99a3-959b0a988e6c]

## How it works

1. Make sure all of the shifts you need to assign are entered into the Open Shifts area at the top of your schedule. Add an open shift like you would any other Shift block, or use copy and paste.

2. Select **Assign open shifts** in the top right corner of the Shifts app.

   :::image type="content" alt-text="Screenshot indicates Assign open shifts button." source="media/shifts/shifts-assign-1.png" lightbox="media/shifts/shifts-assign-1.png":::

3. Select a schedule group. Only schedule groups with open shifts will appear.

   :::image type="content" alt-text="Screenshot shows Assign open shifts dialog." source="media/shifts/shifts-assign-2.png" lightbox="media/shifts/shifts-assign-2.png":::

4. If desired, review the rules you'd like to use for scheduling, like maximum weekly and daily hours, maximum consecutive days worked, and minimum rest periods, by selecting **Auto assignment rules**.

   :::image type="content" alt-text="Screenshot indicates Assign open shifts rules dialog." source="media/shifts/shifts-assign-3.png" lightbox="media/shifts/shifts-assign-3.png":::

5. Make modifications to your rules as necessary, then hit **Back**. Rule changes apply to all members of your Team and take effect the next time open shifts are assigned.

6. Select **Assign open shifts**. The app automatically finds and applies a schedule that fits everyone's time off as well as the rules you provided. If it's impossible to build a schedule that works, shifts that couldn't be filled will remain as open shifts for you to deal with manually. 

   :::image type="content" alt-text="Screenshot indicates successful shift assignment." source="media/shifts/shifts-assign-4.png" lightbox="media/shifts/shifts-assign-4.png":::

7. Your schedule is now present as a draft, which you can review and edit as needed before publishing. Use **Undo** to revert to the state before you hit assign.

8. Select the "Share with team" button and follow steps to publish.
