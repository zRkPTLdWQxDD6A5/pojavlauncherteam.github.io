# Minecraft version support

With each new Minecraft release comes questions: how well does it play nice with PojavLauncher?

The iOS port supports most vanilla versions (currently all RubyDung versions, some 1.2.x, 1.4.x, and 1.17+ does not work) and some modded versions.

The Android port supports most versions (currently 1.17+ does not work)

## Pre-1.6 and modded versions on iOS: fixed!

The reason iOS port can't initially play any versions before 1.6 for vanilla and 1.16 for modded Minecraft is because of the need to use OpenJDK 16, which was already ported to iOS by [@Diatrus](https://twitter.com/diatrus). 

The team of iOS developers has ported OpenJDK 8 to iOS to bring compatibility to these versions.

## Snapshot 21w10a and higher

Mojang changed the required OpenGL Profile (the graphics backend for Minecraft) to 3.2 with the release of this snapshot. Due to how GL4ES uses OpenGL 2.1 to render, these snapshots are currently unable to be opened. 

There are many potential routes of fixing this issue.
