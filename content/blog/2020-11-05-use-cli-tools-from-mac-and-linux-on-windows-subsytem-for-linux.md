---
title: Use CLI tools From Mac/Linux On Windows Subsystem for Linux
description: WSL2 is so powerful to make the switch from Mac a breeze.
date: '2020-11-05'
categories: ['Workflow']
published: true
tags: ['CLI', 'WSL', 'Linux', 'Mac', 'Windows', 'Programming', 'Software Development']
image: devbyrayray/blog/use-cli-tools-from-mac-linux-on-windows-subsystem-for-linux
---


I’m a fan of Apple products for a long time! I love the ecosystem, the way everything works together without any problems.

But I’ve seen that the Microsoft of the current time is working hard to embrace opensource. They don’t discriminate Linux or mac systems with their software and tooling.

I leaped faith and switch from a Macbook Pro to a Windows 10 machine. The reason I did this was because of work. I could choose a Macbook Pro again, but with the current Windows laptops on the market, you’ll get a lot more bang for your buck.

What pulled me over the line? _Windows Subsystem for Linux_

## Windows 💕 Linux

Around the year 2001, Steve Balmer, former CEO of Microsoft [called Linux cancer](https://www.zdnet.com/article/ballmer-i-may-have-called-linux-a-cancer-but-now-i-love-it/). Well, that was a rude argument! And not true!

With the current CEO Satya Nadella, Microsoft loves Linux. And those were not only words, but they also wear followed by actions!

They took over Github, made Microsoft Teams available for Linux, and even implemented WSL. Even their Azure service is running 20% on Linux.

If that’s not loving, I don’t know what is!

## Windows Subsystem for Linux (WSL)

So what the hell is WSL you ask?

Well if you have Windows 10 Pro you can install a Linux distro which will run on your Windows machine.

You can install Ubuntu, Debian, Kali, Fedora, and more from the Windows Store for free!

You don’t need to dual-boot your computer. Just running Windows 10 and having the option to use your Mac or Linux CLI tools on the Windows Terminal 👍

> The Windows Subsystem for Linux lets developers run a GNU/Linux environment — including most command-line tools, utilities, and applications — directly on Windows, unmodified, without the overhead of a traditional virtual machine or the dual-boot setup. **Source**: Microsoft Documentation

If you want to know what you can do with Windows Subsystem for Linux, check this [nice video from Microsoft](https://youtu.be/MrZolfGm8Zk).

<Youtube url="https://youtu.be/MrZolfGm8Zk" />

## 1. Install Windows Subsystem for Linux

### 1.1 Enable Windows Subsystem for Linux

First, we have to enable WSL via PowerShell. Open it as Administrator and run the following command.
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

### 1.2 Enable Virtual Machine Feature

Now we need to enable the “Virtual Machine” feature. Open the PowerShell as an administrator and run the following command.
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

### 1.3 Update to WSL2

After this you must restart your computer to complete the update from WSL1 to WSL2.

### 1.4 Install Linux kernel

Before we can install our favorite Linux distro, we need to install the Linux kernel update package. Download it here and install it.

### 1.5 Set WSL2 as default

If you just want to use WSL1, skip this step. But I recommend using WSL2 as your default version.
Open PowerShell as Administrator and run this command.

```
wsl --set-default-version 2
```


### 1.6 Install Linux Distro

![Windows Linux Distro][https://miro.medium.com/max/700/1*qD4y4C6fl85wnRWpIKPtJA.png]

Open the Microsoft Store and select your favorite Linux distribution. Click the “Get” button, wait until it’s downloaded, then click the “Open” button.

Doing this for the first time, the terminal will ask you to create a user account and password. Fill this in like any other credentials.

Yeah, you have your favorite Linux distro running on your Windows computer!! 

## 2. Install Windows terminal

![Windows Terminal Source: [Microsoft](https://docs.microsoft.com/en-us/windows/terminal/)](https://miro.medium.com/max/700/1*VDJKVXlxxyJ7Cf8N33hq8w.png)

To get the most out of WSL, I recommend installing the new Windows Terminal. No, this is not the PowerShell. This is a new terminal with great features and support for WSL.

Download the Windows Terminal from the Windows Store. When that is done, start the new terminal.

It will start the first tab with PowerShell. If you click the arrow next to that you can choose between all the different Linux distro’s you’ve installed.

If you want to change some settings in this terminal. Click the arrow and select “settings”.

The settings file will be opened in a text editor. Here you can change your default Linux distro you would like to be opened when clicking the + icon in the terminal.

It is also possible to change the theme by setting your colors!

I love this terminal! 

## 3. Install oh-my-zsh

![Source: [oh-my-zsh](https://ohmyz.sh/)](https://miro.medium.com/max/673/0*Vu7VAJ7im3RtjcTi.jpg)

Open the Windows Terminal with your Linux distro of choice. First, we need to download all the package information from all configured courses by running `sudo apt update`. When that is done, run `sudo apt upgrade`. This command will install all the available upgrades from packages that are already installed.

Now we can install ZSH by running `sudo apt install git zsh -y`. When that is done we run this command to install "Oh-my-ZSH".

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)
```

When asked to switch your terminal to ZSH hit "Yes".

Open the zsh config by running `nano ~/.zshrc` here you can change the theme of choice `ZSH_THEME="agnoster"`.

## 4. Install NodeJS via NVM in WSL

To make updating NodeJS easier, we use NVM. Run this command to install NVM.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

When the installation is done, check if your .zshrc has the following text. Otherwise, you can't run nvm in the terminal.

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

To install a NodeJS version you need to run `nvm install 15.0.1`. When the installation is done, check with `node -v` if the current version is equal to the one you've installed. 

## 5. Install Python in WSL

Using Python on WSL was not working for me out of the box. So I had to dive a bit more into it. But I found a solution.

To install Python, you have to use `pyenv` which lets you simply install different versions of Python. (_If you like to learn more about [pyenv](https://github.com/pyenv/pyenv), check their Github repo_)

It is a good idea to make sure all the dependencies and build tools are installed by running this command.

```bash
sudo apt install -y build-essential git libexpat1-dev libssl-dev zlib1g-dev \
libncurses5-dev libbz2-dev liblzma-dev \
libsqlite3-dev libffi-dev tcl-dev linux-headers-generic libgdbm-dev \ libreadline-dev tk tk-dev
```

After that, we can install pyenv by running `curl https://pyenv.run | bash`.

When the installation is done, open your `.zshrc` file and paste the lines below in it. Then open a new terminal tab so the new configuration is used.

```
# Load pyenv automatically by adding
# the following to ~/.zshrc:

export PATH="/home/{USERNAME}/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

Now we need to make sure that the command `python`, `python2`, and `python3` are using the correct versions. If you don't do this you can have problems when installing npm packages that are depending on these commands.

```
pyenv install 2.7.15
pyenv install 3.7.2
```

Run these commands after each other.

Now we need to make them available for execution.

```
pyenv global 3.7.2 2.7.15
```

Check the versions by running these commands `python —version`, `python2 —version`, and `python3 —version`.

Now everything should work as intended!

## Conclusion

I hope this post has helped you to set up everything in your Windows Subsystem for Linux, so you can start using the CLI tools you’ve used in Mac or Linux.

If you had any difficulties setting things up or discovered issues along the way, feel free to share them in the comments ;-)

_Happy Coding 🚀_
