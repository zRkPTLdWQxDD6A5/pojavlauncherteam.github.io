# Create a Minecraft server

Although PojavLauncher is mainly client-side, you still can launch a server with it!

Currently, PojavLauncher supports servers up to Minecraft version 1.16.5.

# How to launch a Minecraft server

### Step 1: Download the server launcher

You can use PaperMC for the best experience. Download it [here](https://papermc.io/downloads).

### Step 2: Launch Paper for the first time

You can launch Paper directly from the launcher by going to Options -> Run a mod installer.

### Step 3: Run the server

After the first launch, you need to accept the EULA. Go to /games/PojavLauncher/.minecraft and edit the eula.txt file as follows:
`<something_here>‘
`eula=true`

### Step 4: Run the server

Simply redo step 2. Isn't it easy?

Want to configure the server? Let's go to the next step instead.

### Step 5 (optional): Configure the server

Before launching the server, you can configure how the server runs.

First, go to `/games/PojavLauncher/.minecraft/server.properties`. There are many options for you to configure, like the server port, game mode, height limit for building, ... 

After that, go to Options -> Run a mod installer (with custom arguments) and type this:

`-jar <path_to_file> [<custom_arguments>]`

With:
`<path_to_file>` is the path to the downloaded jar,
`[<custom_arguments>]` is a set of JVM arguments for the launch.

Example:

`-jar /sdcard/Download/paper-1.16.5-785.jar -Xms1G -Xmx1G`

(The availability of -Xms and -Xmx options has not been tested yet.)

Now simply press OK, the launcher will now launch Paper.

**You have read all the steps! Now just enjoy the created server!**

When you want to shut down the server, simply close the mod installer.

