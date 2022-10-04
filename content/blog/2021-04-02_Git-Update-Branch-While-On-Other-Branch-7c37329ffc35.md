---
title: Git Update Branch While On Other Branch
description: No need to stash your changes anymore!
date: '2021-04-02T19:54:46.001Z'
categories: []
keywords: []
slug: /@byrayray/git-update-branch-while-on-other-branch-7c37329ffc35
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__ehS0__kNlLWxq33Ym.jpg)

I have those moments quite frequently, I need to update my `develop` branch, but I don't want to switch to it in git.

Well, I discovered a way to fetch another branch you’re working in, but you don’t need to switch.

git fetch origin develop:develop

With this command, you can continue to work in your feature branch and update the `develop` or `master` branch. No need to stash your current changes because you need to switch branches anymore!

It’s super easy and valuable to me. I thought It might be helpful to you as well 👍

### Git 101

If you want to grow your Git skills on the terminal, then check out these posts (with videos 📹):

1.  [Setup Git, create repo local and remote repository](https://devbyrayray.medium.com/git-101-step-1-setup-create-repo-local-and-remote-repository-4e15fcad89b6)
2.  [Add, stage, commit & push](https://devbyrayray.medium.com/git-101-step-2-add-stage-commit-push-aab3afeece55)
3.  [Branches](https://devbyrayray.medium.com/git-101-step-3-branches-634055e32ec)
4.  [Merging branches, merge conflicts & cherry-pick](https://devbyrayray.medium.com/git-101-step-4-merging-branches-merge-conflicts-cherry-pick-67cc1ff0edb7)

### [Get my weekly newsletter “Developer Underdogs” with the best developer content created by aspiring developers.](https://www.getrevue.co/profile/devbyrayray)