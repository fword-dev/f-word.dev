---
number: 12
title: 'Theme-color and extensions in Safari 15, testing a11y in React Native, :has pseudo class'
date: 2021-06-25
hosts:
  - Bruce Lawson
  - Vadim Makeev
chapters:
  - time: '01:12'
    title: 'Theme-color and extensions in Safari 15'
  - time: '14:24'
    title: 'Testing a11y in React Native app'
  - time: '24:40'
    title: 'You can :has pseudo class'
notes: |
  ### Theme-color and extensions in Safari 15
  - [Safari 15 Beta Release Notes](https://developer.apple.com/documentation/safari-release-notes/safari-15-beta-release-notes)
  - [WebKit Features in Safari at WWDC21](https://webkit.org/blog/11700/webkit-features-in-safari-at-wwdc21/)
  - [Design for Safari 15](https://developer.apple.com/videos/play/wwdc2021/10029/)
  - [Meet Safari Web Extensions on iOS](https://developer.apple.com/videos/play/wwdc2021/10104/)
  - [The web developer’s toolkit](https://developer.apple.com/news/?id=kffgj3af)

  ### Testing a11y in React Native app
  - [Facebook roadmap to improve a11y](https://github.com/facebook/react-native/projects/15)
  - [Random Expo.io tips](https://brucelawson.co.uk/2021/random-expo-io-tips/)
  - [React Native to web](https://github.com/necolas/react-native-web/issues/1651)

  ### You can :has pseudo class
  - [Can I :has()](https://bkardell.com/blog/canihas.html)
  - [Meet :has, A Native CSS Parent Selector](https://www.smashingmagazine.com/2021/06/has-native-css-parent-selector/)
---

## Intro

**Bruce:** Hello, and welcome to The F-Word. The F-Word of course stands for frontend. The marvelous, a magical, mysterious cosmos of browsers, web standards and everything in between. I’m Bruce Lawson. And I am speaking to you from sunny Birmingham in the blue skied United Kingdom,

**Vadim:** I’m Vadim Makeev, coming to you from St. Petersburg, Russia. It’s summer and it’s +23°C here as well. And I’m shocked.

**Bruce:** +23° Kelvin?

**Vadim:** Oh no. It’s not a winter. Yeah. I’m stuck in this tiny studio. And yeah, I’m going to run out of air soon. So we better go to some news.

**Bruce:** Indeed. Listeners, I can see Vadim on Zoom and he’s basically in a place that makes the Kremlin look tiny.

**Vadim:** Not really. Home studio. Anyway, we have some news and we decided to discuss it together. And we’ll have some guests next time, but this time you’ll have to stick with just two of us.

## Theme-color and extensions in Safari 15

**Bruce:** What’s the news, Vadders?

**Vadim:** So there was a big Apple conference called WWDC where they usually present some software. And this time they presented their operating systems for Mac and iPad and iPhone and Apple Watch and all kind of devices they have.

**Vadim:** But among that, I heard something about Safari. So they’re promising to release Safari 15 this fall, and it’s going to be a pretty big release in terms of user interface and web capabilities as well.

**Vadim:** So currently they have a Safari 15 beta for developers. I think they’re going to release a public beta of iOS and macOS 15 somewhere in July. And in a couple of months, they’re going to release it.

**Vadim:** So I encourage you to test it because it’s… Yeah, it’s a pretty popular browser. So what about the user interface? They introduced something new for users.

**Vadim:** And I have a couple of friends who are big fans of Safari, both as users and developers. That’s a rare thing these days. So they’re happy about a user interface because they introduced this seamless translucent tab bar with the support of top grouping and vertical tabs.

**Vadim:** And the whole panel is now filled with a website background. So it looks quite modern. And funny thing that Firefox released their new updated UI just a week before Apple released their own.

**Vadim:** And I’m not comparing, but they look somewhat similar. There was floating tabs, not connected to the page itself, look quite similar. But I guess they haven’t influenced each other in any way.

**Bruce:** No. No, not at all.

**Vadim:** So how they managed to fill those tabs and the whole interface of a browser with some background color of a page. So if you don’t have anything special on your webpage, they try to guess background color of your page.

**Vadim:** But not just background color of a body element, but something that goes on top of your page. It might be header or some… Anything you have at the top, they’ll try to pick this color and fill the whole browser UI with this color so be careful, and definitely test your website. It might look ugly because of that.

**Vadim:** Imagine if you have some blue color as the main theme, and you have some green line at the very top, the whole site might become green. But if you’d like to take control over this UI background fill, you can use standard theme-color meta element with content attribute and some color value.

**Vadim:** And also the added support for media attributes on this element. So you could switch your theme color based on a preferred color scheme, dark or light.

**Vadim:** If the user would switch their theme color, theme from light to dark or vice versa, you’ll have your colors switched as well. So make sure you’ll have it to have full control over this color fill for Safari users.

**Bruce:** Quick question. Is it only testing the dark mode media element, a media query, or can it test anything? So can you change it for different device width, for example, or prefers high contrast?

**Vadim:** Okay. I believe they support the attribute media and you can use any media feature in there.

**Bruce:** Okay, cool.

**Vadim:** So I guess you can change color based on your device width or rotation or pixel density even. I haven’t tested myself, but I would be surprised to see if they support just a single media feature for that.

**Vadim:** Apart from HTML meta tag, you can use web manifest actually. So this file used for PWAs, which aren’t officially supported by Apple, but from time to time, they look inside of this file and they take information, but not officially. No specs, no explanations.

**Vadim:** So if you have theme underscore color key in your web manifest, they look for it and they’ll try to pick color from there because light and dark things variations are not supported in web manifest yet. There is a discussion about that. You can specify colors for dark and light modes. So if you need this flexibility, use HTML element.

**Bruce:** I didn’t realize that the web manifest didn’t allow you to choose between dark and light theme. But yeah, because the web manifest spec was written before those things were standardized and existed. What else is in the Safari 15 beta, PWAs?

**Vadim:** No, no, no. What is PWA anyway? They actually added a very big thing. They were using this common spec available, both in Chrome and Firefox as the basis for their extensions model.

**Vadim:** But this time, they introduced extensions for their mobile devices. So iOS and iPad OS, they both get web extensions. And it was a big challenge for them because having extensions on mobile, it’s not a common thing, even in Chrome and Firefox.

**Vadim:** There were some attempts to add it to browsers. I’m not sure what’s the current state because I’m iOS user. We don’t have it yet. But I think they did all right with those challenges, because you have less screen estate on your phones and tablets.

**Vadim:** So it’s not possible to have everything you can do with web extensions on desktop. But they introduced this model and it will be shipped in a few months. So if you have your extensions, it’s possible to convert it and publish, but there’s a catch.

**Bruce:** Really?

**Vadim:** Guess what?

**Bruce:** It has to be in the App Store and Apple take 30%?

**Vadim:** Yep.

**Bruce:** Really?

**Vadim:** Yeah. Yeah. So to be able to have your extensions installed in iOS, it has to be an application you built with Swift, and the Xcode and published and moderated through all those processes, and yeah, installed as an application.

**Vadim:** So basically they’re saying that the extension is some sort of way for existing apps to get their way into users’ browsers, which is totally fine because if you need some presence on iOS, you don’t have a choice really. You need to have an app.

**Vadim:** It is possible to have your application installed as PWA, but it’s not… I wouldn’t say it’s a viable solution. So if you have your business and you have some user based on iOS, you already have an iOS application.

**Vadim:** So you can have your extension. And it works for businesses, but it wouldn’t work for… I have my own extensions I use for productivity and some developer needs.

**Vadim:** I can install it into Firefox or Chrome without any problem, but to be able to install it on mobile Safari, I’ll need to get developer access, 100 bucks a year. I will need to install Xcode, build an application, and then go through the App Store moderation process.

**Vadim:** And then they might allow my extension to be there. And they actually support the whole variety of APIs, the one that you would expect from extensions these days.

**Vadim:** You can even allow your extension to hijack the new tab, so you’ll be able to have your page opened as a new tab every time user hits new tab button. I was really surprised to see that Apple allows it.

**Vadim:** I guess it might be good for some companies giving away their iPads to their employees so they could work, and things like that. So it makes sense. And they even have popups on iPad.

**Vadim:** They look like real popup from the button you can have on your toolbar. And on iOS, they replaced those pop-ups because the screen is much smaller. They replaced it with sheets that overlay the whole thing, but it still looks like something valuable.

**Bruce:** I guess I’m not surprised because extensions on mobile was always a tricky thing because of the page real estate is so much smaller. A lot of things, like you say, popups actually become iOS sheets.

**Bruce:** So I can imagine it would be really, really easy for a bad actor to masquerade as a real iOS thing and ask for a password or something like that. But yeah, I haven’t really thought it through in any great depth.

**Bruce:** But I’m not surprised that they’re policing it a lot more than Chrome desktop extensions or something like that because, A, that’s what Apple do. But also the potential to do something malicious is, I imagine, huge. I’m not an evil hacker. You’re Russian. Tell me about evil hacking.

**Vadim:** They actually have a video from WWDC session on web extensions, where they explain the very same thing. Because every extensions you install on a typical browser like Chrome or Firefox, they immediately get access to everything, all your mouse tracking cookies, and you have to really trust them.

**Vadim:** In Apple’s case, even if you go through moderation process, they don’t trust you right away. So every time you’re enabling your extension, the permission dialog would pop up and you’ll have to specifically choose whatever you’re giving away to this extension.

**Vadim:** And this permission list would be attached to particular website, not the whole browser experience. So they’re being pretty strict about the privacy here, but it makes sense, to be honest.

**Bruce:** I hate to admit it because I hate to say anything good about Apple, but it does actually make sense. Yeah.

**Vadim:** Speaking of sessions, video sessions, and they posted on their website. This year, they have around 10 or 12 videos related to web technologies, and one of them is Designing for Safari 15 by Jen Simmons.

**Vadim:** It’s good to see her back as a public person. It’s hard to be public being at Apple. Apart from this video, they have a number of sessions on dev tools, new Safari extensions models, so I’m encouraging you to at least see those videos.

**Vadim:** They’re pretty professionally made. And they’re not as funny as Google I/O’s videos, but still… As for change log, the formal one, first of all, they released it the moment they introduced Safari on WWDC.

**Vadim:** And it usually takes a week or a couple of weeks for them to release the change log, this time published it immediately, so some things are changing.

**Vadim:** And they introduced support for aspect ratio, CSS properties, some new color models like Lap, LCH, HWB and some predefined color spaces and color functions.

**Vadim:** So a lot of things related to colors because they have displaced. They actually support those color remodels, so they want developers to use the whole variety of colors so they would look beautiful on their devices.

**Bruce:** That went straight over my head. HWB colors is entirely new to me, but then I’m a middle-aged man so I can vaguely tell the difference between green and red. You held a gun to my head.

**Vadim:** I would encourage you to go look what’s the difference between RGB and LCH color models, because RGB is something that represents how a computer works.

**Vadim:** So you have three diodes, red, green, blue. And this is the way you can emit the color using those little diodes. But if you’re using LCH color model, it tries to mimic the human perception.

**Vadim:** So when you’re mixing colors, for example, you’ll get much more smoother transition between colors, for example. The way human eye would see it. So if you need to transform your colors, not just represent those color models are so much superior than the ones we used to have.

**Bruce:** I didn’t even realize that RGB stood for red, green, blue. I thought it was really groovy background or something like that.

**Vadim:** Yeah, yeah. Today you learned something.

**Bruce:** TIL. Anything else exciting in the merry world of iOS and Safari 15?

**Vadim:** I think I’m going to stop here. I’m not going to tell you about top level awaits in JavaScript because it excites many other people in many other podcasts. So I told you the story I’m excited about.

**Bruce:** That’s good.

**Vadim:** So we can move on and wait for the real browser to actually test everything we’ve just described. So somewhere in July and final release in September, I guess, or October even.

**Bruce:** Well, it’s good to see they’re actually opening up, and Jen Simmons is allowed to talk, and Sam Sneddon, who we used to work with, he’s working with the WebKit team at Apple, and he’s allowed to tweet. So maybe a bit of glasnost is happening over in the Democratic People’s Republic of Apple.

## Testing a11y in React Native app

**Vadim:** I heard that you’re playing around with React Native bridge, and you were swearing and crying with joy on Twitter about it. What’s going on there?

**Bruce:** Well, don’t tell anybody, but I don’t actually hate React Native.

**Vadim:** Wow.

**Bruce:** I know. I know. So the company I’m working for has some React Native apps, and I am lead accessibility QA. So of necessity, I’m checking the actual output on iOS and Android.

**Bruce:** And because they’ve got it set up in a fabulous way with something called Expo that I’d never heard of 10 days ago, but I am actually willing to go and sleep with every developer who’s ever worked on Expo because it’s brilliant.

**Bruce:** It’s really easy to test. It’s not easy to test if you’re not happy with VoiceOver and TalkBack, but it makes it considerably easier to test. And of course, so I’m testing locally.

**Bruce:** So I’ve got the repo on my work machine. And because I’m just an old coder from the COBOL and Fortran days, I can’t resist looking at the code to try and work out what it’s doing.

**Bruce:** And yeah, I don’t hate it. I feel simultaneously, a little bit liberated and yet terribly grubby for confiding with you that I don’t hate React Native, but there we are. My name’s Bruce and I do React Native a bit.

**Vadim:** So what is React Native anyway? It’s a web technologies based on typical React stack, like JSX and some React libraries as well, ReactDOM and everything. And those web technologies, they get converted into native code that could be run on your Apple device or Android device, or some other platforms they support.

**Bruce:** That’s exactly it. And I think that’s why I don’t hate it. The reason I don’t hate it is that it’s not even pretending to be the web, like React does. Because React is just loads of JavaScripts squirted into the browser, which then has to make it into a DOM and show you a loading spinner and just be annoying.

**Bruce:** But React Native isn’t even trying to pretend that it’s the web, because it gets compiled into whatever technology actually runs on Android and iOS. So therefore, it doesn’t offend me as much because it’s not depending on JavaScript, for example, because JavaScript is irrelevant to the target of the compilation.

**Vadim:** No. Actually, there is a JavaScript inside, running somewhere in background and communicating everything, but it’s just a process. They don’t use JavaScript to build interfaces, so it’s not just WebKit web view plus JavaScript running your React components. No, it’s native code.

**Bruce:** Exactly. And it’s unclear to me at the moment, because I’m quite new to it. It’s unclear to me at the moment what in the stack is React Native purely. And what in the stack I’m using is my employer’s component library, but I’m actually working on checking the component library because the component library is going to be farmed out to everybody else.

**Bruce:** So if we’re giving these components to everybody else, they have to be perfect out of the box. But what I like about it is… Okay, forget about HTML. It’s not in the equation. It’s, nevertheless, declarative.

**Bruce:** The code is, by any standards, ugly. I’m not just talking ugly, I’m talking about… You’ve seen my face, Vadim, I’m talking Bruce Lawson level of ugliness.

**Bruce:** But you couldn’t work out what it’s doing. It’s passing props around, which get translated into the accessibility resources are available on the native platform. And they’re not identical.

**Bruce:** And through the magic of this thing called Expo, which is an open source thing, it’s just been really easy to use. So basically Expo, I don’t really know what’s it is, but you hook into your React Native project.

**Bruce:** Yarn starts, up it pops, and then a QR code appears in your terminal. And if you’re on the same Wi-Fi network, you just photograph the QR code with the Expo Go app on iOS and Android, and the app runs on your device.

**Bruce:** And if you’re not on the same wifi network, you can choose to go through a tunnel and it’ll just squirt it through ngrok, and you literally just photograph the QR code.

**Bruce:** And you do a change in Visual Studio, you hit save. You wait a little while for all the cogs to turn, maybe 10, 15 seconds. And the changes on your device, it’s absolutely magic.

**Vadim:** So you have this app inside of your application? So it’s not the real application installed on your device?

**Bruce:** It isn’t the fully compiled version. It’s the JavaScript version, but it is nevertheless constructing the native components so that… If you are given this or that prop, it is manifested as this or that prop on the native device.

**Bruce:** Quite what voodoo magic it works with, I can’t begin to guess. But then you can actually open it up in VoiceOver or TalkBack and test it and it’s as it would be on the end device. It’s really, really good.

**Vadim:** Interesting. I didn’t know it is possible to stream your native code to your app via local network. Typical way of developing such things is to have Xcode running and your emulator or iPhone connected to your device via some cable.

**Vadim:** And in this case, the actual application will be sent through the wire or to the emulator and rebuilt every time you save your code. But there’s no React Native there, it’s just native Swift APIs of Apple.

**Vadim:** But in React Native case, yeah, you need to have your code converted to a native code. I wonder if it’s actual HTML and JavaScript rendering, or it’s native on your device’s screen.

**Bruce:** I’m pretty sure it’s native because of what VoiceOver and TalkBack says to me. I would not put my hand on my heart and swear that to you in a court of law, but I’m pretty certain it’s native, but I’ve no idea how it does it. It is just voodoo magic, but I’m very glad that the people who make it, make it less…

**Vadim:** You’re probably not a native developer, but you’re a native QA tester.

**Bruce:** Mm-hmm (affirmative).

**Vadim:** How does it feel coming from a web background to develop or test applications like that? You just said that the developer experience is wonderful, but otherwise… You don’t have URLs, you don’t have typical web things there. It’s different world in terms of UI.

**Bruce:** When I said the developer experience is wonderful, and I believe you’re misquoting me here, I meant compared with the normal native app experience, which is basically like having your testicles repeatedly beaten with a baseball bat by Tim Cook and whatever the guy’s head of Google is. It is less bad than having your testicles repeatedly beaten with a baseball bat, which is not the equivalent of wonderful.

**Vadim:** I would agree.

**Bruce:** Native development is shit because at the end of the day, the only proper test is installing something from an App Store. And somebody says to you, “It’s this screen,” and you’d laboriously go through all of the steps to that screen.

**Bruce:** And you have to actually listen to it in VoiceOver or TalkBack. And if you’re not a person who uses those things for real, that’s a chore and a laborious experience. So yeah, it’s nowhere near as great as a web…

**Bruce:** Just like, “Can you send me the URL?” is a wonderful thing. “Can you talk me through the 28-stage process to get to this particular screen?” is grim and sad, but nevertheless, they give me money to do it.

**Bruce:** And like every other person in the world, I will do grim and sad for a third of every day, five days out of seven, until I eventually drop dead through an overdose of grim and sadness, just in order to have enough money to eat and buy a beer once or twice. And oh my God, you’ve made me critique capitalism. Thanks, Vadim.

**Vadim:** Yeah, for the first time.

**Bruce:** Yeah. Yeah. Exactly, the first time. But yeah, this Expo thing’s pretty cool. I put some tips on my website, just some random things that weren’t clear to me in the docs…

**Bruce:** Well, actually, I lie. Like everybody else, I didn’t read the docs. I just tried to muddle through, and then realized that I should have read the docs, but it’s not terrible.

**Bruce:** And I am going to try and make my very own native app. I’m going to make the same app that I made with Opera widgets back in the day, which is the… Yay. Yeah.

**Bruce:** I’m going to remake the love calculator, which is where you type in your name and it adds up the digits. And then adds up the digits of the person you like’s name and subtracts them. And if it’s within plus or minus five, it says you’re compatible or not, which is basically science.

**Vadim:** You sound like you’re five. I’m sorry,.

**Bruce:** Mate, that’s science. This is going to be the new Tinder. You’re on 50%, buddy, if you can do the UI.

**Vadim:** Sure.

**Bruce:** Yeah. Yeah. But you can do the UI, but you have to tolerate me doing double spaces in markdown.

**Vadim:** Never. Never.

**Bruce:** Live a little.

**Vadim:** Our good old friend, Brian Kardell posted his 'Can I :has?' post, at the beginning of May, I believe. So he announced the intent to implement for the :has pseudo-class, which is a rather shocking thing to hear because I think it’s already 10 years old, this idea, and they used to have it in jQuery.

**Bruce:** They still have it in jQuery, yeah.

**Vadim:** Yeah. It sounds like… And it’s a thing to do, and it’s a thing to implement, but it used to be a holy grail of CSS lecture, which is very tempting to have and very hard to implement.

**Vadim:** And one company approached Igalia and I guess, Brian personally, which is Eyeo. Never heard about it. But then Brian explained that they have AdBlock browser and AdBlock extensions.

**Vadim:** I realized that our old friend Shwetank from Opera Devrel days is working there. So I guess he is somehow related to this intent to implement.

**Vadim:** And at the beginning of June, we have it implemented in Chrome Canary. To be honest, I haven’t played with it personally. And I think I’m going to record a video for my blog in the next few days, just trying it out.

**Vadim:** But after Brian published his announcement, one month later, we have it in Chrome Canary. And there was a really nice blog post published a few days ago on Smashing magazine explaining why on earth you would need a :has pseudo-class.

**Vadim:** You would think that everyone knows what it’s for and how we would use it. To be able to explain this :has selector, it’s really important to have really good use cases for that and to show some UIs and some code.

**Vadim:** And that’s what Adrian Bece actually did. He tried to explain not how the actual selector works, but where it could be applied in your interfaces.

**Vadim:** And only from his blog post, I realized that we actually have something similar in our CSS already. For example, empty pseudo-class actually checks if there’s anything inside of this element.

**Vadim:** And if element is empty, certain styles are applied. The same goes to focus within. It actually checks if there’s anything focused inside of certain element and applies styles to the actual element.

**Vadim:** So we used to have selectors and we’ll still have the majority of selectors working the way that you have your target selector on the right. So you’re applying styles to the part of a selector that goes to the right.

**Vadim:** Now we have selectors that could be calculated, vice versa. So you can have your selector on the left side and the colon :has  function. And then everything will be applied to the actual element with a :has  pseudo-class, not to the right part of your selector.

**Vadim:** A typical example, you can check if your link has IMG element inside and apply some styles, not to IMG but to a element so every link without image who would get certain styles.

**Vadim:** I have a really good example that might help our listeners to understand this selector even better. Typical situation when you’re trying to replace your checkbox with some fancy graphics, you’ll have to hide your checkbox and replace with some graphics.

**Vadim:** And then you’ll have to put some span next to our input. So you can use a plus selector to change the styling for your element. In this case, you can wrap your input with some tack and change its styles based on if something inside of it like input element is checked or not. Much more flexible, or you can change the way your forum looks based on validity of any input.

**Bruce:** That’s it. You could have your entire form go red if one thing is invalid.

**Vadim:** So it’s like focused within but…

**Bruce:** Much more power.

**Vadim:** Yeah, much more power. That’s true. So I think because they implemented focus within, I’m not exactly sure, but I think that it helped them to implement the same thing for :has  element.

**Vadim:** And the problem used to be that this thing is full of circular dependencies. It’s really hard to calculate certain things to be at 60 frames per second, but they managed to overcome this issue. It’s still in Canary.

**Vadim:** I guess it’s still behind a flag. It’s not implemented in Firefox, Safari or anywhere else, but all of a sudden, it is possible. All of a sudden, container queries are possible. All of a sudden, :has  pseudo-class is possible. I wonder what’s going on these days.

**Bruce:** I was thinking about this after our talk with Miriam Suzanne last time. I’m thinking with my gut. And when you think with your gut, you have to acknowledge that sometimes you’ve got shit for brains.

**Bruce:** But I think what it is, is we have different people who can think around a problem. So when you only have browser engineers, for example, working out whether something was possible, they’re fixing a certain mindset.

**Bruce:** And I don’t mean to disparage or in any way denigrate their brains because obviously, they’ve done fantastic things. But when you have other people like Brian and Miriam and Jen and Rachel who are not thinking only of, “How would I write the C++ to this?” you just get a different perspective.

**Bruce:** Like Miriam said to us last time, Brian said to her, “So you want to get rid of the cascade by adding to the cascade?” And she said, “Yeah, I do.” And that basically opened up container queries.

**Bruce:** And I’m pretty convinced it’s to do with the fact that we’re getting not better minds at all, just minds that think differently about the problem, suddenly opening up different thought processes. But I might be completely wrong. I don’t know.

**Vadim:** I don’t want to sound cheesy, but they’re there to dream, they’re there to experiment. They don’t know limitations.

**Bruce:** I think you might be right, MLK. So that about concludes it for episode 12, folks. But before we go, I want to pay tribute to a titan of the web who has left us, Alex Russell.

**Bruce:** Known to many of you as Big Al. He hasn’t died. He’s at this moment in a car doing a road trip with his wife Francis, but Alex has left Google, which surprised everybody because Alex not only pioneered service workers, Chrome frame…

**Vadim:** Web Components.

**Bruce:** Web Components, Alex is basically thinking great thoughts. And 10 years later, the rest of the web caught up, but also is a thoroughly nice bloke who many, many times has taken the trouble to sit down with me personally, either in person or over the web and explain things to me without visibly touching or rolling his eyes or just punishing me. And he’s left Google. He’s left the web in a much better place. So thank you, Big Al.

**Vadim:** Yeah. I had a chance to meet him in person in California many years ago while working for Opera, and then discussing some web extensions and the PWAs back in the days when they just introduced the thing.

**Vadim:** He seemed like a really nice guy. And I was really enjoying his rants about performance the last couple of years, trying to explain to frontend developers why browser diversity’s important and why Apple is hurting the web by not allowing alternative browser engines on iOS. I hope he’ll keep doing this in some other place, in some other role, but I think we still need a person like him.

**Bruce:** We do. And I have no idea what Big Al is doing next, but I can’t believe he’s stepping back from the web. So I look forward to his next incarnation. Just as an FYI, Vadim, your English is brilliant, but you keep using the word rant and what you actually mean is measured discussion. I just think you’re reading the wrong dictionary here, mate. So on this sad note of saying goodbye to Big Al and this appallingly rude correction of Vadim’s English, we bid you farewell from The F-Word episode 12. Stay cool and groovy wherever you are. Goodbye. Toodles.
