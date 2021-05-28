# Installing Fabric

## Getting ready

If you're using v1.0, make sure to read the preparation info on [this page](../switching-mc-versions). Make sure to read the mods/shaders disclaimer as well.

## Installation

You'll need a few things:

* A working terminal or SSH client
* Filza File Manager
* The Fabric installer (.jar, not the .exe)

1. Download the Fabric installer from their website.
   - iOS 13 and later users: Open Files and locate the .jar, open the share sheet, and choose Open in Filza.
   
2. Take note of where Filza put the .jar. Chances are that it's in /var/mobile/Documents, but check just in case.

3. Open a terminal or SSH client and **make sure you don't `su` and become root with the next command!**

4. Due to a known issue with the Fabric installer, you'll need to be in the launcher's directory. Let's switch you to it with

`cd /var/mobile/Documents/minecraft`

5. Next, type this command to install Fabric (if you symlinked Java as explained on the installing page, you can just type `java`), where version is the version you wish to install:

`/usr/lib/jvm/java-16-openjdk/bin/java -jar /path/to/fabric-installer.jar client -dir . -mcversion version`

**Tip:** If you don't want all of the output, add `> output.log` to the end of the command.

6. Once complete, you can exit your terminal and open Filza again, this time moving to /var/mobile/Documents/minecraft and opening a preview of `launcher_profiles.json`

7. Copy the text that's in qoutes and to the right of `lastVersionId` and paste it into the version select screen.
