---
title: "why weren't we asking for permission on macOS like this sooner?"
date: 2026-07-23
description: "i"
tags: ["macos", "appkit", "nspanel", "accessibility", "ux"]
draft: true
---

i recently saw this new permission flow pop up on some macos apps this year and i absolutely love it.

as someone who is constantly downloading and trying new apps, it is such a buzz kill to give an app accessibility or screen recording permissions.

macos has it built-in to deep link to the permissions page but then you have to dig around and find the app you just installed to give it access.

honestly, i feel like a lot of users might drop here if they're not used to doing this, but now it's so easy. the permisions page opens up, you drag the app into the list, and you're in business.

i am shocked that it's taken this long for this to pop up and now i can't stand when an app i use doesn't do this for me.

i immediately had to build it into my own apps and i think you should too.

## options

if you're building a macos app in 2026, you probably fall into three camps: native macos, tauri, or electron (maybe https://native-sdk.dev/ if you're freaky like that)

for SwiftUI, you can try implementing https://github.com/jaywcjlove/PermissionFlow
for tauri, i rolled my own hacky version but found this package https://github.com/veecore/permission-flow that works as a tauri-plugin
for electron, i wasn't able to find a solution out of the box, so i think there's an opportunity for someone to opensource a solution there ;)

## pls add to all apps

i actually get such a rush everytime an app uses this new permission flow because it's just so much better and easier to understand for every single user.
