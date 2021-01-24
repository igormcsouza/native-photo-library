# Native Photo Library

Inspired by [this](https://www.youtube.com/watch?v=71shcOjC_a4) video, I decided
to take a look on how to build apps with React Native + Typescript! Well, it's
wonderful! :) I really got the felling and could follow the instructions easily!

If you have some expirience with React, I guess this is very straight forward,
well, that was for me.

![my-app](myapp.jpg)

Next step is trying build something more robust, but for initials, it was great
then.

## Expo is amazing

Inspired by the quoted video, I decided to use [Expo](https://expo.io/) to help
on development and building steps! And I have to tell, that was the best part of
the process! I discovered with Expo you don't need to care about Android/Ios
stuff to build or develop things to it.

Let me tell you, I developed the entire app usign the browser version of it,
Expo bundled my entire application in a single Web App which I could deal with
all the matter I would on a real app.

The best part is coming though, at the end, with few clicks, I started to build
the .APK on Expo Cloud, for free!! Well, nothing is for free in this world, but
the build part is, if you want, you can pay to have priority on the build
process, but nothing to worry, a avarage non-payed version took only 14 min to
build! Is that much? Maybe, but I'm willing to take a shot, just so I won't need
to worry about installing dozens of Android Stuff, and better, I can now develop
for IOS also, whithout a Mac or Ios, I guess this is the best part! With a
simple computer you can do wonders.

Also, It deals with singing things for you, which alone is the greatest thing
for me, it's a complex stuff which I just don't want to care about.

They can help you to send the APP to Google Play and App Store.

Even though, Expo prices is not that hard, and you can have 30 days free for
testing! I'm amazed.

At the end, you just have to deal with your own code and development.

## How to develop and Build

First, you need Expo installed in you pc, follow their link with more
instructions on it.

Once cloned the repository, run:

    npm run android

Change **Android** for **Ios** if you want to run the IOS version. Follow the
step by step to start it on your phone, emulator or on web.

If you want to build your app refer to this
[link](https://docs.expo.io/distribution/building-standalone-apps/) for more
details, but you just need to run `expo build:android` or `expo build:ios`, and
follow the step by step on your console.

If you don't want to use Expo Great Building Process (Why you wouldn't?) you can
always get your code and build on the old fashion way!

## Troubleshooting

### Expo Dev Tools not loading

Expo Dev Tools wasn't loading for me, some how, for this case I search on github
and found
[this](https://github.com/expo/expo-cli/issues/866#issuecomment-757410494)
comment which fixed my issue just fine. Just copy and paste the link instead of
right-clicking on it.

### Running on device returning Timeout

When I read the QRCode I got on my cellphone the Timeout error. So, I decided to
change the method on Expo Dev Tools to **Tunnel** and read the QRcode again. It
worked perfectly.
