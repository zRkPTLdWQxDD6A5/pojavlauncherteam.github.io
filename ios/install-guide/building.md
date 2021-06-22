# Getting PojavLauncher from source

PojavLauncher is open-source, and whether it be that you wish to tet code changes or try out the newest features manually, you can!

## Prerequesites
We've recently overhauled our build system to use Makefiles rather than shell scripts, so regardless of the build OS, you're going to need `make`.

Since you can compile PojavLauncher on more than one operating system, you'll need to get the required dependencies according to your setup.

**macOS**  
- Xcode 11.7 or higher  
	- This version runs on macOS Catalina 10.15.2 or later.  
- Homebrew dependencies  
	- `cmake`, `ldid`, `fakeroot`, `dpkg`, and `gradle`.  

**iOS**  
- A jailbreak
	- We recommend using Procursus
	- `clang`, `dpkg-dev`, and `openjdk-16-jdk` on Procursus
	- `clang` and `dpkg-perl` on others
	- Make sure you have `openjdk-16-jdk`, not `openjdk-16-jre`. Other jailbreaks without Procursus do not have `openjdk-16-jdk`.
- An SDK for iOS 14 or higher
	- You can get usable SDKs from [xybp888/iOS-SDKs](https://github.com/xybp888/iOS-SDKs).
	- You need to put this in `/usr/share/SDKs` as `iPhoneOS.sdk`. Symlinking also works here.

## Building
It's time to get through the actual building process and cover each option.

**macOS Note:** If you wish to use some of these options, run `export DEVICE_IP=<your.idevice.ip.here> DEVICE_PORT=<your ssh port>`. This way you can take full advantage of the Makefile.
### make
The option simply runs everything else (except deploy). 

### make native
This option compiles the Objective-C code that is used to draw the UI and interface with Java (located in `Natives`). 

### make java
This option compiles the Java code that is used to interface with Minecraft itself (located in `JavaApp`).

**Note:** If compiling on iOS, you cannot use this option unless you have a Procursus bootstrap.

### make extras
This options compiles the assets and storyboards that are used as the foundation of the app (located in `Natives/Assets.xcassets` and `Natives/en.lproj`).

**Note:** If compiling on iOS, this option is disabled as the required tools are not available. Pre-compiled versions are used instead when packaging.

### make package
This option creates a .deb package from the completed app. It requires that you have compiled native, java, and extra before packaging. 

**Note:** If compiling with an M1 Mac, you may have issues with `fakeroot` not being available due to Homebrew dropping support. We recommend you use Procursus' macOS bootstrap instead

### make deploy
This option "piggybacks" an existing install of PojavLauncher and only copies the newly built natives. It requires that you have compiled native. If you're on macOS, it connects to your iDevice and copies to there.

### make install
This option uninstalls any other versions and installe your newly compiled .deb. This required that you have compiled package. If you're on macOS, it connects to your iDevice and installs there.

**Note:** If this option fails, you can still manually copy the package contents and run `uicache -p /Applications/PojavLauncher.app`