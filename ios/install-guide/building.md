# Getting PojavLauncher from source

## Prerequesites

Here's what you'll need to build PojavLauncher:

* A version of Xcode that is capable of building for iOS 13.
   * So, Xcode 11.0 or later. This means you need **macOS Mojave 10.14.4** or higher.
* Java Development Kit (JDK) 8
* Homebrew
* `gradle`, `cmake`, `wget`, `ldid`, `dpkg` and `fakeroot`

## Grabbing dependencies

1. If you don't have it, install Homebrew:  
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

3. Install the build prerequesites:  
`brew install cmake wget ldid dpkg fakeroot gradle`
    * Installing Gradle from Homebrew automatically installs the JDK, if you don’t have it.

4. Clone the repository, or bring your own fork's URL:  
`git clone https://github.com/PojavLauncherTeam/PojavLauncher_iOS.git`

5. Ensure that the scripts can run:  
`cd PojavLauncher_iOS && chmod +x scripts/*.sh`

## Compiling PojavLauncher

1. First, we'll build the Java application:   
`./scripts/build_javaapp.sh`

2. Now it's time for the Storyboards and interface...  
`./scripts/build_natives_cmake.sh` or `./scripts/build_natives_clang.sh`.  

3. Next, we bring everything all together and sign the binaries!  
`./scripts/build_package.sh`

You should now have a new .dev file sitting in front of you. Go ahead and install this on your iOS device and you're all good to go!

**Note:** If you're switching from Doregon's Repository to building from source and encounter an error when trying to install, you need to uninstall the `pojavlauncher-dev` or `pojavlauncher-zink` package you installed from his repository and then run the install. 