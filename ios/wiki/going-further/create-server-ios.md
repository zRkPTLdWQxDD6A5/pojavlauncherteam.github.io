# Create a Minecraft server

Although PojavLauncher is mainly client-side, you still can launch a server with it!

Currently, PojavLauncher iOS supports servers up to the latest Minecraft version.

# How to launch a Minecraft server using terminal

Before doing all the steps below, make sure you installed a terminal.

### Step 1: Download the server launcher

You can use PaperMC for the best experience. Download it [here](https://papermc.io/downloads).

### Step 2: Launch Paper for the first time

Type these commands:
`cd /var/mobile/Documents/minecraft/`

`/usr/lib/jvm/java-16-openjdk/bin/java -jar <path_to_file>`

With:

`<path_to_file>` is the path to the downloaded jar.

(Pro tip: create a symbolic link for `/usr/lib/jvm/java-16-openjdk/bin/java` as `java`.)

### Step 3: Before running the server...

After the first launch, you need to accept the EULA. Go to /var/mobile/Documents/minecraft and edit the eula.txt file as follows:
`<something_here>
eula=true`

### Step 4: Run the server

Before launching the server, you can configure how the server runs.

First, go to `/var/mobile/Documents/minecraft/server.properties`. There are many options for you to configure, like the server port, game mode, height limit for building, ... 

After that, type these commands to start the server (type `java` instead of `/usr/lib/jvm/java-16-openjdk/bin/java` if you created the symbolic link as above):

`cd /var/mobile/Documents/minecraft`

`/usr/lib/jvm/java-16-openjdk/bin/java -Xmx<a_number>[<suffix>] -Xms<another_number>[<suffix>] -jar <path_to_file> --nogui`

With:

`[<suffix>]` can be (nothing) for bytes, `K` for kilobytes, `M` for megabytes, `G` for gigabytes.

`<path_to_file>` is the path to the downloaded jar for Paper.

Example:

`java -jar /sdcard/Download/paper-1.17.1-165.jar -Xms1G -Xmx1G --nogui`

The server will be launched after some time.

**You have read all the steps! Now just enjoy the created server!**

To shut down the server, run this command:

`sudo killall -9 java`

### Known issues with this method

- May cause a respring loop if a server is created and after that, there is too little memory left. If you experience this issue, you can reboot the device, or SSH to your device and run the `killall` command.

# Other methods

- The ability to run Paper on the new mod installer is being tested. An instruction will be made if the tests are successful.
