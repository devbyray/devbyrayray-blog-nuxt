---
title: Which Docker Images Can You Use On The Mac M1?
description: Docker Improved Their Mac M1 Support
date: '2021-08-18T10:27:36.839Z'
categories: []
tags: []
slug: /@byrayray/which-docker-images-can-you-use-on-the-mac-m1-daba6bbc2dc5
---

![](/images/1__DKfSUf4B2__vIvDWAMsmQhA.jpeg)

A few months ago, I worked with Docker on my [Macbook Pro (M1)](https://www.amazon.com/dp/B08N5N6RSS/ref=fs_a_mbt2_us2). I installed it, but sadly enough, my mac crashed immediately.

I left it alone since I didn’t need it.

Now, a couple of months later, I needed Docker. I installed it; everything was fine during the installation. Even when trying to spin the Docker tutorial container, it stayed running 🥳

#### How To Use Docker On Mac M1?

![](/images/1__ocj7HTjW6LYM4F8T__ygVAQ.png)

_Before you install Docker for Mac, run this command in your terminal for_ [_installing Rosetta 2_](https://support.apple.com/en-us/HT211861)_. If you already have it installed, you can skip this step_

```
softwareupdate --install-rosetta
```

Download [Docker for Mac](https://docs.docker.com/desktop/mac/install/) from the Docker website, and install it.

#### **What Docker Image Is Usable On Mac M1?**

Many Docker images are made available for the M1. Not every Docker image maintainer did that. Most official Docker Images created by Docker have support for ARM64.

Docker Images with the `ARM64` tag run on the Mac M1 natively. If you use Rosetta 2, you can run amd64 images, but they can cause performance issues.

Example’s of popular Docker Images with ARM64 support are:

*   [Ubuntu](https://hub.docker.com/_/ubuntu)
*   [Python](https://hub.docker.com/_/python)
*   [Redis](https://hub.docker.com/_/redis)
*   [Postgres](https://hub.docker.com/_/postgres)
*   [Nginx](https://hub.docker.com/_/nginx)
*   [NodeJS](https://hub.docker.com/_/node)
*   [Traefik](https://hub.docker.com/_/traefik)
*   [Mongo](https://hub.docker.com/_/mongo)
*   [MariaDB](https://hub.docker.com/_/mariadb)
*   [OpenJDK](https://hub.docker.com/_/openjdk)
*   [WordPress](https://hub.docker.com/_/wordpress)
*   [Consul](https://hub.docker.com/_/consul)
*   [phpMyAdmin](https://hub.docker.com/_/phpmyadmin)
*   [Ruby](https://hub.docker.com/_/ruby)
*   [and a lot more…](https://hub.docker.com/search?q=&type=image&architecture=arm%2Carm64)

If you find Docker images that don’t have ARM64 support, go to the Github issues page and open an issue to request ARM64 support, this will help everyone 👍

#### **MSSQL**

For everyone that needs to use MSSQL in their application, I found that this image doesn’t support ARM64 yet. The alternative for this Docker image is `mcr.microsoft.com/azure-sql-edge:latest`. I found this during different debugging sessions but finally got it working with this image.

#### **Are You A Docker Image Maintainer?**

> If you are a Docker Image maintainer, I would like to thank you for your fantastic work! Many people rely on your work, so a big thanks ❤_️_.

Docker Images currently can be built as multi-platform images. I don’t know how much work converting a specific image to a multi-platform one is. But, Docker is offering a simple way to build them quickly.

With the `docker buildx build` command, you can add multiple platforms to support arm64. For example

_Read more on the_ [_Docker documentation about multi-architecture images_](https://docs.docker.com/desktop/multi-arch/#build-multi-arch-images-with-buildx)_._

### Thanks!

![](/images/0__Qay6DRNLz9jUR0UQ.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁

#### [Get My Articles Via Email Click here](https://byrayray.medium.com/subscribe) | [Buy a $5 Medium Membership](https://byrayray.medium.com/subscribe)

### Read more

[**Angular stories**  
_All my Angular stories_byrayray.medium.com](https://byrayray.medium.com/list/24674407532a "https://byrayray.medium.com/list/24674407532a")[](https://byrayray.medium.com/list/24674407532a)

[**Latest JavaScript & TypeScript stories**  
_Check my latest JavaScript and TypeScript stories_byrayray.medium.com](https://byrayray.medium.com/list/0358ad941491 "https://byrayray.medium.com/list/0358ad941491")[](https://byrayray.medium.com/list/0358ad941491)

_More content at_ [**_plainenglish.io_**](http://plainenglish.io)