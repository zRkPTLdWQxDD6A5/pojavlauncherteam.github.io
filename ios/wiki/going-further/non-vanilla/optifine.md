# Installing OptiFine

## Getting ready

If you're using v1.0, make sure to read the preparation info on [this page](../switching-mc-versions). Make sure to read the mods/shaders disclaimer as well.

## Installation

You'll need a few things to go manually:

* A working terminal or SSH client
* Filza File Manager
* The OptiFine installer (.jar, not the .exe)
* The OptiFine headless installer from [here](https://github.com/PojavLauncherTeam/PojavLauncher/raw/aabc278f0571e2b116a665833decada35451ac48/app_pojavlauncher/src/main/assets/components/OptiInst.jar)

1. Download the OptiFine installer and the headless installer from their websites.
   - iOS 13 and later users: Open Files and locate the .jars, open the share sheet, and choose Open in Filza.
   
2. Take note of where Filza put the .jars. Chances are that it's in /var/mobile/Documents, but check just in case. Put both of the .jars into the same folder.

3. Open a terminal or SSH client and **make sure you don't `su` and become root with the next command!**

4. Change your directory to where both of the .jar files are located.

```
cd /path/to/installers.jar

# Change /path/to/ to where the jars actually are
```

4. Next, type this command to install OptiFine (if you symlinked Java as explained on the installing page, you can just type `java`):

```
/usr/lib/jvm/java-16-openjdk/bin/java -cp OptiInst.jar optiinst.OptiInst OptiFine_version_XXX.jar /var/mobile/Documents/minecraft

# Change XXX to the name of the OptiFine installer (i.e. OptiFine_1.16.5_HD_U_G8.jar)
```

**Tip:** If you don't want all of the output, add `> output.log` to the end of the command.

5. Once complete, you can exit your terminal and open Filza again, this time moving to /var/mobile/Documents/minecraft and opening a preview of `launcher_profiles.json`

6. Copy the text that's in qoutes and to the right of `lastVersionId` and paste it into the version select screen.
