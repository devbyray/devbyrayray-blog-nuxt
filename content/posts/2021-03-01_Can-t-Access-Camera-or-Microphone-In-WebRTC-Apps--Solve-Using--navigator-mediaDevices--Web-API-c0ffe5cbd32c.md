---
title: Can’t Access Camera or Microphone In WebRTC Apps? Solve Using
  “navigator.mediaDevices” Web API
description: How to solve this with navigator.mediaDevices Web API
date: '2021-03-01T13:08:59.137Z'
categories: []
tags: []
slug: /@byrayray/cant-access-camera-or-microphone-in-webrtc-apps-solve-using-navigator-mediadevices-web-api-c0ffe5cbd32c
---

![](/images/0__2A5Qbg802RyfMWx1.jpg)

Sometimes it happens in a WebRTC application that a browser can’t access the camera or microphone. Possibly it’s being used by another piece of software, or it doesn’t have a camera at all.

In this post, I want to show you how you can check that by using the [Web API MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices). It’s super simple, so let’s dive in. At the end of the post, you can use my code if you’re a lazy developer (_you should be_ 😅).

### List Media Input and Output devices

As a developer, we can’t make assumptions why we can’t access the user’s microphone or camera. With the `navigator.mediaDevices.enumerateDevices()` method, we can get a list of media input and output devices.

This method returns a `Promise`, so it's super simple to get that list!

navigator.mediaDevices.enumerateDevices()  
  .then(function(devices) {  
    console.log('devices: ', devices);  
  })  
  .catch(function(err) {  
    console.log(err.name + ": " + err.message);  
  });

This is my result at the moment.

\[  
   {  
      "deviceId":"default",  
      "kind":"audioinput",  
      "label":"Default - MacBook Pro Microphone (Built-in)",  
      "groupId":"8e16639392cc33ed9421836432166375ff23720fe41cfab2bf1d350b8f83f5f5"  
   },  
   {  
      "deviceId":"6e06241b89f9043e7101d5dbd2bdf91f7ba9ea78c0e5aa5efc58927e1f28c6f6",  
      "kind":"audioinput",  
      "label":"ray’s AirPods Pro (Bluetooth)",  
      "groupId":"48357ddc7bab573800fd4db4c1d9dac1d0fb800d1fb9fd21cd2608c330db9a20"  
   },  
   {  
      "deviceId":"2108da4a847ad10cf90c85af7cb29a29db54bf810afb18e58639e345fbe2abd7",  
      "kind":"audioinput",  
      "label":"MacBook Pro Microphone (Built-in)",  
      "groupId":"8e16639392cc33ed9421836432166375ff23720fe41cfab2bf1d350b8f83f5f5"  
   },  
   {  
      "deviceId":"default",  
      "kind":"audiooutput",  
      "label":"Default - ray’s AirPods Pro (Bluetooth)",  
      "groupId":"48357ddc7bab573800fd4db4c1d9dac1d0fb800d1fb9fd21cd2608c330db9a20"  
   },  
   {  
      "deviceId":"dd51ddd88220fda9209daf2dba9608b960a7539d1deac7007af734b3d30580fc",  
      "kind":"audiooutput",  
      "label":"ray’s AirPods Pro (Bluetooth)",  
      "groupId":"48357ddc7bab573800fd4db4c1d9dac1d0fb800d1fb9fd21cd2608c330db9a20"  
   },  
   {  
      "deviceId":"985ba2f44a8db0d1ef0b50f8e6f7a0b682535b91ea631cad24ae483e871cebfd",  
      "kind":"audiooutput",  
      "label":"U32J59x (DisplayPort)",  
      "groupId":"91b72f113dc19f56739a74dcd2d8a422a4e5abef6a1efa0fd2e9f17ac2216bf0"  
   },  
   {  
      "deviceId":"223700057fcf336336b3d6ab9f8dc7a281cb52b2409bec081aaeed8aa68c518a",  
      "kind":"audiooutput",  
      "label":"\[Samsung\] Soundbar J-Series (Bluetooth)",  
      "groupId":"f1b0ba1e49bf6873ee2cb14193d5e6fa29fa3fc86e4b858734d2f15e0103bd66"  
   },  
   {  
      "deviceId":"67d7d9cddb6f0cdc0fd7d13c9dd4f85f466be86d0a55c7ae572155d1383a1371",  
      "kind":"audiooutput",  
      "label":"MacBook Pro Speakers (Built-in)",  
      "groupId":"8e16639392cc33ed9421836432166375ff23720fe41cfab2bf1d350b8f83f5f5"  
   }  
\]

So you get a full list of all kinds of media devices. But one thing is clear; there is no camera on the list. (_My new M1 has a defective webcam which should be fixed_) If I didn’t have this issue, I probably was not looking into this issue and didn’t try to fix it from a user perspective.

Now that we know what kind of input devices the computer has attached, we can write an error message for the user. Be aware this has nothing to do with access; this is just a list of media devices connected to my computer.

### Get access to the camera and microphone.

But we want to distinguish if it has to do with an access problem, the media device is used by different software, or no camera attached.

Let’s check if we can access the camera and microphone of the user’s computer.

We can use the `navigator.mediaDevices.getUserMedia(constraints)` for this. This method also returns a `Promise` which makes it easy to implement.

async function getMedia(constraints) {  
  let stream = null;  
  const constraints = {audio: true, video: true}

  try {  
    stream = await navigator.mediaDevices.getUserMedia(constraints);  
    /\* use the stream \*/  
  } catch(err) {  
    /\* handle the error \*/  
  }  
}

With this function, we can see if we can get access to the microphone and camera. But since my computer has no camera attached, we get a `NotFoundError`But we can't see if the microphone or camera is the problem.

So we have to run the function separately for the audio and video.

### Audio and Video access

So I created a function to discover if there are audio and video devices attached to the computer and if we can access it. This function returns a `Promise` with the complete result.

function getMediaDevices() {  
  /\*  
   \* This function checks the device if it has any audio and video input.  
   \* This is purely to check, not to check if the user has allowed the application to use an audio or video input device.  
   \* The function returns a Promise with an object of what types of input devices the computer has.  
   \* Documentation can be found: [https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices)  
   \*/  
  let hasVideo = false;  
  let hasAudio = false;  
  let audioAccess = false;  
  let videoAccess = false;

  return new Promise(async (resolve, reject) => {  
    if (navigator.mediaDevices) {  
      let devices = null;

      try {  
        devices = await navigator.mediaDevices.enumerateDevices();  
        console.log(JSON.stringify(devices));  
        devices.forEach(function (device) {  
          if (device.kind === "audioinput") {  
            hasAudio = true;  
          }  
          if (device.kind === "videoinput") {  
            hasVideo = true;  
          }  
        });  
      } catch (error) {  
        console.error("There are no media devices available in this device.");  
      }

      try {  
        audioAccess = await navigator.mediaDevices.getUserMedia({  
          audio: true  
        });  
      } catch (error) {  
        console.error(  
          "The browser has no access to the microphone of the device."  
        );  
      }

      try {  
        videoAccess = await navigator.mediaDevices.getUserMedia({  
          video: true  
        });  
      } catch (error) {  
        console.error("The browser has no access to the camera of the device.");  
      }

      resolve({  
        hasAudio: hasAudio,  
        hasVideo: hasVideo,  
        audioAccess: audioAccess,  
        videoAccess: videoAccess  
      });  
    } else {  
      reject({ error: "The media devices could not be checked" });  
    }  
  });  
}

But we want to give the user a message if there is a problem with one of the devices. For example, if the camera is already used by Teams example. We can then see a video device, but we don’t have access to it.

For the error handler, I created a function that you can use if you like.

function mediaDevicesAvailable() {  
  console.log("Check Media!");  
  getMediaDevices().then((media) => {  
    const errorWrapper = document.querySelector(".error-on-initialize");  
    let errorMessage = null;

    if (!media.hasAudio && media.hasVideo) {  
      errorMessage = "Could not find your microphone.";  
    } else if (!media.hasVideo && media.hasAudio) {  
      errorMessage = "Could not find your camera.";  
    } else if (!media.hasVideo && !media.hasAudio) {  
      errorMessage = "Could not find your camera and microphone. ";  
    }

    if (!media.audioAccess && media.videoAccess) {  
      errorMessage = deviceErrorMsg("microphone");  
    } else if (media.audioAccess && !media.videoAccess) {  
      errorMessage = deviceErrorMsg("camera");  
    } else if (!media.audioAccess && !media.videoAccess) {  
      errorMessage = deviceErrorMsg("camera and microphone");  
    }

    if (errorWrapper) {  
      errorWrapper.innerHTML = errorMessage;  
    }  
  });  
}

function deviceErrorMsg(device) {  
  return \`We can not use your ${device}. Please turn off any other software that is using your ${device}.\`;  
}

Make sure that you define a selector for an existing element in the DOM. If you have, it will show an error if there is any. Otherwise, it’s not showing anything.

If you want to see this in an example, check the [CodePen](https://codepen.io/devbyrayray/pen/vYypaEJ) below.

### Conclusion

Maybe this is not your exact use-case, but use my code as an inspiration to find out why you don’t have access to an audio or video device.

If you have questions, please let me know. 😉

_Happy coding! 🚀_