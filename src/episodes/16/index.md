**Bruce:** I saw a Spanish magician. He was really good. He said “Uno, dos…” and disappeared without a tres.

### Intro

**Bruce:** Hello hello and welcome to The F-Word, a podcast all about the magical world of web standards, browsers and everything in between. I’m Bruce Lawson and I’m coming to you from the planet Saturn this week.

**Vadim:** I’m Vadim and I have no idea where I am.

**Bruce:** This is normal folks and we have a special guest, Mr. Thomas Steiner. I’ve never actually tried to pronounce your surname.

**Thomas:** Most English people say Steiner in German. It’s Steiner. I’m dialed in from the Sun right now It’s a super hot place where I’m at. So yeah. Hi nice to be here.

**Bruce:** Lovely. I hope you got your factor 9 million sun cream on.

**Thomas:** I’m very very very 50 plus sunscreen person, yes.

**Bruce:** Well, I’m going on holiday next week, so I’ve got my Factor 50 in my bag, ready to go off to sunny Turkey and eat my own body weight in olives and feta cheese.

**Vadim:** You both sound so smart, I always leave my sunscreen behind, and regret about that.

### Thomas and the Fugu project

**Bruce:** So, Thomas, what do you do? Introduce yourself, please.

**Thomas:** So what is it actually you would say you do here? Well, I am working on the Chrome team as a developer relations engineer, and my core responsibilities up until now have been Project Fugu. And I recently took on Web Assembly as well, and yeah, the two go pretty well together, actually. And Project Fugu is all about enabling people to do things on the web that they couldn’t before, by adding new APIs, adding new features, making just the browser as capable as it needs to be for people’s application needs.

**Bruce:** Excellent. And you said you sit in the Chrome team rather than the Android team, for example. Why is that?

**Thomas:** Well, we talk to Android for sure. And there is a Chrome team within Android, there’s Android people in the Chrome team and vice versa and so on. But yeah, so I am part of the Chrome developer relations team, which mostly also means web relations. So if I only did Chrome relations, this would not mean I would do my job properly because in the end we’re all team web. And yeah, that’s why I’m based in the Chrome team.

**Bruce:** Gotcha. And Fugu, is it basic premise to allow browsers to do anything that a device can do? Or what’s the overarching vision before we drill down into the specifics?

**Thomas:** So I would say anything-ish. So there’s a couple of red lines that we decided to not cross. One of them being direct sockets, which would allow you to essentially tunnel through any kind of message through corporate firewalls and stuff. So there’s some red lines that we draw, but if you have an app idea we want you to be able to realize this app idea on the web.

**Bruce:** Gotcha. And why is it called Fugu? Because somebody told me or suggested over a few pints that maybe somebody had said, “Well, web shouldn’t be able to do that.” And everybody went, “Fuck you!” And that’s where the name came from, true or false.

**Thomas:** I think we should change the story just to this. I haven’t heard that before. The story that I was told is a little less attractive and a little less fun, but also it’s kind of fun still, so compare. So you know this episode where Homer Simpson eats Fugu, and people tell him, “Look, there’s this fish, and if you cut it right, it’s a delicacy. If you cut it wrong, it will kill you.” And of course, Homer thinks he’s going to die. Spoiler alert, he doesn’t. And that’s essentially what we hope people don’t do when they use Fugu APIs. So just like with Fugu Fish, some of these APIs can be potentially dangerous. Like there’s file system access, And if you open something like, et cetera, passwords, and a web application messes with it, this would be very bad for your computer and could potentially kill you. In reality, actually, you can’t. So there’s a couple of just system files that we block out from editing or even opening. So that’s the story that I was told. So we want to make sure that with these APIs, we acknowledge that they can be potentially dangerous. We want to make sure that people hold them right, cut the Fugu fish right. And yeah, that’s why we came to the project name.

**Bruce:** That’s an excellent name actually. I admire that, acknowledging that these things are very powerful, but also potentially dangerous.

**Vadim:** You mentioned mostly hardware APIs being the main focus of this project, but there’s also a Houdini project, for example, another interesting name. Where’s the line goes between Houdini project and Fugu project, for example? Do we see it? Does it exist?

**Thomas:** So I’m not an expert on Houdini. I don’t know where the project name came from. The way I understand Houdini is it’s about stuff in CSS, like enabling people to do more amazing things with CSS.

**Vadim:** Not just CSS, but like opening this black box of a browser to allow more APIs to be available to developers. So basically Houdini comes from this, like getting out of black box as a magician. So allowing developers to have more control over APIs and browser internals. So it’s ideologically close to Fugu in some ways, but I think there’s a line between them. I guess Houdini is mostly focused on CSS and probably JavaScript, but not hardware APIs. Did I get it right?

**Thomas:** I don’t want to really speak for the Houdini folks within Google, but the way I understand it is they are looking mostly at CSS and what people can do with the language and, I don’t animate properties properly by saying this is a length so you can express something and then access it via JavaScript and the browser will know this is a length that I’m modifying so yeah I do “lengthy” things things with it and not I don’t know any kind of dimension things or whatever so but like back to the original question CSS, Houdini and Project Fugu they’re distinct teams within Google there’s distinct people who work on them in the of course you need probably both when you build a web application.

But yeah, Fugu is definitely not just about hardware APIs, it’s also about file APIs, clipboard APIs, system, operating system integration, like letting you double click a file in Windows Explorer and then your web application would open, or having you share something from a web application to a native application, or vice versa. So it’s also about integrating with different parts of your computer.

**Vadim:** So basically bridging the gap between websites and native applications.

**Thomas:** So we use the term bridging the gap a lot, but mostly in the sense of bridging the API gap. So looking at native, when you build for iOS, when you build for Android, when you build for Windows, Mac OS, whatever, there’s an SDK, or there’s just a set of API’s that you build against. When you compare those, certain things used to be just not accessible from the web.

So you used to not be able to, for example, copy an image into the clipboard, which is a very natural thing to do. If you think like you’re an image editor, Apple to now, there was only this very weird DOM document exec, whatever, I even don’t know the name of this archaic API to do clipboard. It was not possible just to do certain things. We used to call this the API gap that we wanted to bridge with The Fugu project

**Bruce:** A note to listeners who are not like Vadim and Thomas and me, you know, basically old men who look like Gandalf: There was a time not so long ago when basically you couldn’t access anything in hardware In fact, I think Vadim was already working opera and I certainly was in 2010 when the geolocation API Got term standardized with heart partly with the help of our old boss Lars Erik Bolstad. And that was kind of the first time that any hardware access was available to web stuff. And that’s only 13 years ago. We’ve come a long way since then. It seems to me that so much that making everything that’s possible in hardware, barring the red lines available to web browsers, is a pretty big job. And they’ve given you Wasm as well. How do you find the time? Where do you prioritize? Do you have legions of C++ people obeying your every command? How does it work?

**Thomas:** You need to differentiate between doing devrel on things and being an engineer on features. I don’t personally build stuff in Chrome. Some of my colleagues, like for example Francois, he actually is a Chrome engineer apart from being a devrel person, so that’s what separates us. I just have the pleasure of working with all these amazing engineers, and they explain things to me in a way that I can explain them to developers as a person having no idea of C, C++, Rust and all these cool languages that people use to build native applications. It’s like oh what even is Emscripten trying to tell me? So it’s a lot of just using the Google search engine to find any kind of traces which would me as a JavaScript developer help me understand what is C trying to tell me here. So that’s kind of the things that I’m working on. But you’re right, it’s a very time-consuming job and in the end, yeah, we need to prioritize certain things so there’s just also things we can’t address or where we would ask the engineers to help us out, for example, write more reference kind of documentation, which is not developer-facing articles in the sense of being a nice blog post to read, but like more, yeah, as I said, reference material that you would expect on something like MDN.

**Bruce:** Gotcha. For listeners, Thomas mentioned the Google search engine; other search engines are available.

**Thomas:** We were actually told to never say to Google because this might harm the brand so each of us typically get trained to say to use the Google search engine and you use whatever you like. “Duck Duck Go” or “Bing” dare you. But this is just “to Google” may not be used as a word because it would weaken the Google brand.

**Bruce:** That’s right, yeah, if it becomes a generic term it’s no longer copyright. You can ask László Bíró and Mr Hoover about that.

### Partners and priorities

**Vadim:** Thomas, where are priorities for the Fugu project coming from? I can imagine that you’re, as a devrel, you’re looking for inspiration or needs of the community. I can see that inside of Google there are some projects like Google Meet that we’re using right now to in this call or like Google Docs or YouTube or some other internal clients that you’re trying to solve their problems with the Fugu project. Any other directions? Am I right about those two?

**Thomas:** Yeah, absolutely right. So it’s always a mix of internal partners. So you mentioned Google Meet, There’s external partners. For example, Adobe, we’ve been very open about our collaboration with Adobe. There’s just developers in general, which is, I guess, the most pleasant part for most of us, because every one of us is a developer at heart. There’s also just the developer community, and they work at shops big and small, they work at massive corporations, they may be independent consultants.

So it’s a mix of trying to make everyone happy, internal partners. In the end, they tend to have sort of the same needs. So taking the example of Google Meet, because you mentioned it, so something hardware-ish that they work on or that they need is the capability of talking to headphones. So Google Meet is used in a lot of call centers, and people need to mute their phones, the microphones while they are getting information from their seat neighbor or something, or they use Fugu APIs now to talk to certain headphones that have these capabilities. So they press a button on their headphones and this will be translated to a hit message that goes to Google Meet and mutes the thing in software.

That’s just an example randomly chosen from Google Meet and obviously if you think Microsoft Teams or Zoom or like all these other calling applications, they have the same hardware needs in the end or like they might just discover after one of their competitors uses these kind of features that they actually want to have this as well

**Bruce:** That’s an API for that in the Fugu Pantheon?

**Thomas:** So for this particular thing, you always are with this compromise with like how specific to the task do you make the API like you could imagine something like a headphone mute API Or you could just make it as generic as possible, which is what they have chosen in this case. So there’s the hit protocol, HID, human interface device, I think.

Yeah, so these devices talk using a protocol called HID. The Web HID API, as the name suggests, makes this protocol accessible from web applications. So the thing there is you always need to understand what is the low-level hit message that a certain headphone requires to send, in order to mute, for example, the headphone microphone or something.

So it’s harder for people to understand what is going on because you need to reverse engineer the protocol or you need to be the manufacturers you know what’s going on ask someone who has done the job like a lot of open source drivers and Linux for example can serve as the source for getting these kind of underlying bytes that you need to send over the wire to talk to certain devices so yeah that’s I think the gist there.

**Vadim:** Sometime ago I remember giving talk about web bluetooth like seven years ago or something like that like the first implementation in Google Chrome and I remember buying some devices like small small drone, a small lamp, some other low-energy Bluetooth devices and there was no way to to tell how to connect I mean there was a way to connect to them but there was no way to tell which which commands to send to trigger certain events and I remember spending like days trying to figure out what they’re sending.

So basically I was like pressing buttons, switching modes and logging all the data and then reverse engineering what they’re doing actually and then sending it via browser. Has it become easier these days or we still need to reverse engineer all those commands to fully work with a hardware?

**Thomas:** It is still pretty hard I would say in most cases just because you are not the manufacturer, the manufacturer knows what they’re sending, what is required to send. I will tell you an anecdote.

So we got solar and I’m really excessive about tracking usage. We have Wall box in our garage. I’m trying to make the juice box Stop charging the car when there’s not enough Sun. So there’s several levels of hardware interactions happening there The easiest one is I have a little web light connected to a permanent monitor It just turns green when I’m producing enough and turns red when I’m consuming more than I’m producing So that’s the easy part when they are talking to these other devices even if they are on the local network and I could in theory just Sniff the traffic is a lot harder just because of certificate pinning and all these stupid things that Manufacturers do to close down their applications.

So I try to Uncompile or decompile the Android app and see what’s going on there I try to sniff the traffic but I it’s just really ridiculously hard to do that in many cases and eventually what we hope for is manufacturers to just to begin with open up their protocols and I’m a company that is very open about this is Lego actually so Lego with their models, they just chose to use Bluetooth and web serial and all these cool APIs now for their educational robots.

And they open up the protocol so you can just go to the Lego website and somewhere there You will find a PDF that lists the hacks whatever bytes and bits that you need to send around they tell you this whatever opens the device for communication this then allows you to send a light signal this allows you to send a signal to the motors whatever so in the end we do hope that these API is eventually will cause more more manufacturers to open up their protocols and especially the hardware API’s are strong in the tinkerer communities like the Arduino kind of people they are used to this anyways and I’m like Arduino all these companies rather than semiconductor. There’s a lot of really cool companies that base their business, partly at least on these open protocols and enabling people to talk to these devices that they own.

### Mozilla’s and Apple’s positions

**Vadim:** Since we’re touching briefly on the people that are not so happy about opening their APIs and about this project Fugu maybe. Let’s dive deeper. There are definitely parties involved in standardization and browser engines that are not happy about this project and their goals. Maybe they don’t mind your goals but they’re against some specifics of the implementation or they draw different red lines not just web sockets and they’re not happy implementing all those new shiny things. Specifically Apple and Mozilla. Can you talk about their position and their priorities and their point of view on that?

**Thomas:** So I can to some extent. Obviously, I’m not an Apple employee, I’m not a Mozilla employee. But the way we communicate with them in a publicly traceable way is through their standards position repositories. So there’s a process now in place where if you want to get the opinion of a browser vendor on something, You open an issue. It’s pretty much the same for Mozilla and Apple asking them Hey, we have this proposal that does this and that you point at your spectra You point at your explainer you outline some use cases and then you just ask for an opinion And because all of this is public on GitHub.

These opinions are as Yeah as public as the company wants them to be so there might be a back channel sometimes where we get some more insights but like Yeah, sometimes very very heated debates started on some of the proposals where people just tell I don’t know.

There is something that I remember recently they tell Mozilla. Hey, you should really open up your browser for this Is that API I think it was Bluetooth That yeah people get very enthusiastic about yeah Sometimes the Mozilla folks are the Apple folks need to lock an issue if the discussion just becomes too be railed and too passionate and sometimes people just don’t respect the tone of a public discussion so that that’s also

Unfortunately, sometimes the case but I think it’s way more open than it used to be in the past and I’m by making public traceable statements about something That they like or dislike for whatever reason this gives us and developers in general way more ways to understand Why certain decisions are being taken and there’s obviously still like at some level a corporation operation thing that plays into the decisions that certain web engineers can make. But yeah, in general, the way communication happens now is very open and I’m kind of happy about this.

**Bruce:** We’ll put a link to that GitHub repo in the show notes because I agree it’s great. Back in our day, it used to be sort of you’d have to read chicken bones to work out what you thought Mozilla might be thinking about something. Actually, Mozilla has always been pretty open, but the fruitco in Cupertino was “Kremninology” or “Pyongyangology” somewhat. To your knowledge, Thomas, which of the Fugu APIs are in Firefox, for example, and which ones have they said, “Absolutely not, no way.” I could look it up, but it’s much nicer to hear it from you.

**Thomas:** Oh, that’s a very open-ended question, just because there are so many Fugu APIs. I think in general, what Mozilla and Apple and Google agree on is that the web is more than just a document web.

But to what extent it is an app web, this is where some debate starts. So in general, copying, for example, an image into an application or out of an application, that’s something that we universally agree on. Like, there might be small differences. So copying images tends to be a dangerous operation. Sometimes if there are certainly prepared images that tend to be so-called compression bombs, for example, so people might be more or less open to copying certain image formats.

But in general, the use case is an agreed on use case where we universally say, yeah, this should be just something people can do. And obviously having something like an image editor or video editor, this is not a document web. This is a web app web. But then there’s some use cases, Yeah, the hardware APIs, where the browser vendors have different opinions. Luckily, there’s there’s some movement.

So for example, web MIDI is a pretty old API by now. It technically even predates the Fugu effort, but allows you to connect your musical instruments that use the MIDI standard to your web browser. And this was a Chrome only API for the longest time. More recently, Firefox have opened up this API. But the way they chose to do this is by sort of on the fly creating an extension that would deal with some of the communication and you would have to opt in and say I want to really allow this musical instrument to connect to my browser.

Whereas in Chrome, it’s a simple regular permission prompt without any on the fly extension that is going to be installed or anything. And then Apple, they chose to not implement this API for the moment. I’m not sure about their reasoning about it at the moment out of the top of my head. But yet there’s just certain happy APIs where Apple have said very publicly we will never ever implement those.

There’s also some more like innocent-ish APIs, one of them idle detection. The quality of this API is it gives the browser a way to tell if you’re using your computer or not and not just by detecting mouse movements inside of the browser window but also by detecting mouse movements for example, outside.

So this is a heuristic that if you are outside of your browser and using your computer, that then you’re sort of actively still behind your machine. The way this is meant to be used is for kind of chat applications. So you might remember from ICQ, for example, the green bubble meant you’re online, the red bubble meant you’re offline. You could be gray and be away and like having these kind of notifications.

And of course, if you’re outside of your browser but still using your computer playing game you’re technically still actively using your computer of course the abuse there is potentially like if you want to track someone and if you want to tell if someone is actively working in the browser or just pretending to be on the computer but actually not working in the browser that’s an abuse vector you can think of a way like you talk to different sites in parallel as a tracker and then if you see the person goes idle at a specific time and this idle message coincides at the same time from both browser tabs you can say oh this must be the same person that’s using this website. So there’s some mitigations in place like there will be some randomness when idleness will be reported to different browser tabs. The potential is there for this to be abused. So they also used this as an explanation why they would not implement the idle detection API.

**Bruce:** And also, let’s be fair, every browser vendor has a different constituency of users or different levels of risk aversion and that’s to be celebrated. It’s not the law that everybody has to implement everything, particularly when, like a privacy thing, I mean Dawkins forbid that my employer should know that I’m actually looking at Pornhub instead of their fascinating documentation. Not that I do of course and other porn sites are available folks. You can use the Google search engine.

**Thomas:** Or DuckDuckGo.

**Vadim:** I mean the difference being celebrated is a good thing but you know for the most other web platform feature consensus used to be a key to moving forward for before writing any specs before starting any implementations but at some point Chrome decided not just for Fugu APIs but for some others decided to just move forward with implementation and then wait for others to catch up so I was wondering if you’re actively working on convincing other engines to support Fugu APIs or you’re just during design process, I mean, or you just implement something and waiting for them to catch up or for the community to convince them.

**Thomas:** To be fair, I would say this may be the impression that external people get who are not in depth following these APIs. But I think it’s also a problem that we as DefRel needed to address in the past.

So there have always been paper trails of people writing specs, people thinking about how can a certain feature work something just lending this is really not the way it works actually never did but um the impression that could be created externally to some extent yes that that’s a fair concern this could have been the case that this impression appears but like what we and def rel did recently is or like for the longest time now we try to always make these paper trails that exist more visible.

So if you see a blog post that announces a new API, at the end of the blog post, there will always be a related links section that points out spec discussions and w3c tag discussions where regular person lay persons who don’t really follow browser development closely can still see Oh, there actually has been some discussion about this. This didn’t just fall from heaven. There’s actually some some paper trail of discussion that happened around this.

For your concrete question, do we talk to other browser vendors? Yes, as I said before, there’s these repositories where we try to get standards arguments on or standards positions on certain standards proposals. You will see as part of the Blink shipping process, it’s actually required to ask other vendors, other browser vendors for their positions.

It’s even now mandatory to ask developers, like what is the general developer perception of a new API proposal before it ships. And if you look at the Blink dev mailing list, there’s always a very strict process of how people ship something. So there’s an intent to do X and intent to do Y, so intent to ship, intent to experiment, intent to deprecate. If you look for the intent to subjects, these are always the important emails on this mailing list because in these intents there’s always the paper trail linked again so people can see what did developers say about certain API’s that can go there and see the rational. If you see Apple was positive and Mozilla was negative and developers were positive too then this is just a visible paper trail that has been left on a certain API proposal.

**Vadim:** Yeah it’s good to have paper trail, it’s good to have discussions but when the other browser engines do not agree and you still proceed with implementation and and specing those those those new API’s that’s another thing I mean I’m sorry for pulling out this IE6 card right now

**Thomas:** but what browser do you assign it to because that’s the that’s the most exciting part

**Vadim:** yeah yeah I don’t think it’s it’s fair to call browsers new IE6 any browsers

**Bruce:** Safari!

**Vadim:** That’s your very personal opinion! I don’t think it is possible to be new IE6 like it’s been long time ago and times were different. Yeah. But still they used to they used to have numbers of APIs exclusive to IE.

I recently discovered this legacy API page on MSDN library like conditional comments, CSS expressions, behaviors like dhtml data binding and like VML, JScript like they even they used to have a create pop-up.

**Bruce:** I’ve used all of these.

**Vadim:** Oh god. So yeah and these days there are many APIs exclusive to Chromium and not even all Chromiums but sometimes exclusive to just Chrome because some browsers based on Chromium decide to not implement those or disable those. And how’s Fugu project different from IE times where Microsoft would implement whatever they want and then expect others to follow or not. They didn’t care so much.

I mean, I remember other browsers implementing like document.all just for the sake of compatibility and some other APIs and we’re, I think we got this text to line justify first implemented in IE and other browsers without specification and others, browser followed something like that. So they were definitely leading the way, but they didn’t ask anyone else’s opinions. I think that’s the main difference, but what others?

**Thomas:** So I think we need to differentiate the early, wild, wild west days of the web. It was really browser wars, in the sense of very negative browser wars. We need to look at these times differently than the current times. So now, I guess all browser vendors have very strict shipping processes. Some might be very open, like you can probably get an insight into Mozilla’s shipping process. you can definitely get an insight into Chrome shipping process.

I’m not sure about Apple. But I am very sure that internally they have a process of how to propose a new API as well that they follow. In the end, I think what is what is important is innovation still is a thing. So people use several different browsers for several different use cases, like geeks at least do. But even just like I know anecdotes of people who use one browser just for banking and the other browser for browsing adult sites and yet another browser for using as their day-to-day browser.

**Vadim:** I’m using Chrome exclusively for Google Meet because it works better and Firefox for the rest of my tasks.

**Thomas:** But you’re very much a geek, I would say. You are the minority.

**Bruce:** Ooh, fighting talk over here in The F-word corner. Vadim, a geek?

**Thomas:** So the point I was getting to is that nowadays we have very strict shipping processes and we follow those and we talk to other browser vendors as part of this process. And the way this is supposed to work, and I think also the way this actually does work is we get a paper trail of things that happened until we got to shipping an API. And we won’t most cases not let other browser vendors stop us from doing something.

There may just be different opinions that we agree to, like disagree on. I think that’s a very fair point of thing to do. I guess it becomes a little problem problematic when you cannot really as a user, as an end user, technically decide what should be the browser that you use. So I guess this is where this equation sort of stops to work.

But like on operating systems where you have full browser choice and full browser engine choice, this mechanism works. And you can say, if you are a user who is very afraid of some websites talking to your hardware, then you can use a certain browser that does not implement those API’s. And if you are a tinkerer, and you know what’s happening, and you actually understand the protocols, and you can see that this will not kill your computer and and kitten and whatever you have under your desk, then you can proceed and use a browser that implements those APIs.

So I think talking to other vendors is always a great idea. And listening to them is always a great idea too. And in many cases, actually going back to the drawing board and saying, look, they brought forward some arguments that our people didn’t think about is very much a thing that is happening. Also, sometimes just saying, oh, we will just not ship something because in the end, it didn’t meet the user’s needs. It didn’t meet developers’ needs. It may not be technically feasible anymore. That’s also part of the Fugu process in general.

So just stopping something from happening is very much part of the project as well.
So there’s a couple of proposals that we thought were initially a good idea. But then trying them out with actual users using origin trials or just behind the flag as an implementation, we sometimes saw this is not addressing the use case that it’s supposed to address.

Or there’s notification triggers is a good example. So the way this was supposed to work is you locally schedule a push notification that would not come from a server, but from local. You would then say to your calendar application, for example, the notification should be popping up five minutes before the meeting or something. The problem really is or was with this API, the way this worked on Android changed significantly. So the Chrome team could no longer guarantee that the API that they were using on Android would be there in the future.

So in the end, technical feasibility was one of the reasons where we said, look, it’s probably the best to stop this API. There is very valid use cases. But then the devil is in the details. If you have an offline application, like an offline calendar, it’s a great idea. But what if while you’re online, the meeting gets canceled, and you still receive the notification that is no longer relevant? Or the timing shifts to half an hour later, and you get the… that’s probably not the problem. But half an hour earlier, and you miss the notification because you just happen to have been offline at this particular point in time.

So that’s kind of the devil in the details. Things that sometimes also just make us stop implementing something. And yeah, you can see the paper trail. We started. We implemented. we wrote a blog post, we asked other vendors, and yeah, sometimes it just doesn’t work out and stops and that’s fine.

**Bruce:** Interesting that what you mentioned about notification triggers the concept that somebody might be offline. Baffling. What a baffling idea.

**Thomas:** This doesn’t happen in the developed world.

**Bruce:** I’m also interested, Thomas, just doing a bit of tuppeny-ha’penny psychology here, that You accused Vadim of being a geek, but earlier you described yourself as a tinkerer, and the assumption there that geek is bad but tinkerer is good. What’s the difference between tinkerer and geek?

**Thomas:** I would not say that I accused Vadim of being a geek. I would say…

**Bruce:** We’ve got the transcripts, mate.

**Thomas:** I would say I applauded Vadim for being a geek. The thing that I was trying to convey is that Vadim is very happy to suffer, I guess, just because he’s a geek. So he knows computers are computers, and I’m certain things will just sometimes not work. But he’s happy to decompile an Android application to understand why it doesn’t work the way it’s supposed to work, or he wants it to work. When I say geek to someone, this is very much not a negative thing.

**Bruce:** Wow, this is great. You’re like the Henry Kissinger of web diplomacy. Well done, sir. Very good.

### Support realms

**Vadim:** You mentioned the web notifications and I remember that Apple recently allowed websites to use Web Push API but only if they’re installed as web apps to iOS home screen. So basically they limited the implementation of this API to certain mode and basically they said like if it’s something that’s installed then it’s a bit more secure. It’s not a random website sending you push notifications or tricking you into subscribing to one but it’s like something that you installed it yourself. They can still trick you into installing it but that’s another level.

And I guess they’re limiting potential of this API, I don’t know, they probably have some reasoning behind this. Maybe they’re trying to protect their iOS users or maybe app store revenues, who knows, but I always thought this kind of a limitation of APIs might be an answer for, at least for Safari and Firefox. Like imagine this spectrum. On one hand, there is a Electron application with full access to everything, like basically as a native application, but it’s running on web technologies. on the other side of the spectrum, there’s a random website, like some spam or malicious website. Somewhere in the middle, there’s an installed PWA. And they all have their different domains or their different security models and a different list of available Fugu APIs. What do you think about this model? Could it help progressing this Fugu API project?

**Thomas:** So I can’t speak for Apple, but what I think was happening is that they were very, very afraid of people abusing this API for spam. And if you take any layperson’s Android phone and you swipe through the past notifications, chances are that you will have the layperson tell you, “I never signed up for these notifications. I have no idea how to turn them off,” but they just reappear.

So I think this experience, and just in general, people being very annoyed by push notifications in general, is what made Apple consider having this API because there was a lot of user demand for it, because there’s a lot of very valid use cases. But then, yeah, the abuse potential is massive.

So I think by being conservative and allowing this API only installed context, maybe at least to begin with, they try to see, yeah, what what will people do with this API? If you use the Twitter PWA and install it, and Twitter then can send you push notifications, that’s great. But like any random news website that you just occasionally use whenever you use the DuckDuckGoGo engine to find a news article you end up at whatever the Guardian they should not be able to tell you to send you a push notification.

So I think what is what is happening there is they were playing it safe and I think that’s a that’s a very valid approach. Hopefully once they see people use this API mostly for good or people learn how to turn notifications down and off, maybe then in the end, they will open up this API. And just allow it to the what we call the drive by web. Another interesting case where they chose to have some additional obstacle is the clipboard API. So I mentioned clipboard before.

But what is interesting about Apple’s implementation is when you paste something using the clipboard API, they just on the the fly insert an additional button where you need to press command V for example to like the keyboard shortcut to paste something but then you also additionally on top have to press this on the fly generated paste button that will actually confirm a second time that you really meant to paste in there so it’s it’s very in your face that a paste operation is happening.

This is not part of the spec this is just something that they did as their user agent differentiation to make this API more secure to their users to prevent unexpected things from happening. I think in general, this is also why what Bruce said in the very beginning is super important. Having different user agents, different browsers use the same and respect the same specs is great and letting some leeway for interpreting how certain spec steps should be executed is a great way to just differentiate also browser vendors in between themselves.

**Bruce:** I agree. People, certainly in the early days of HTML5, people would ask me, you know, why don’t the browsers have a standard way of showing input type equals date or whatever. And I’d say, you know, they deliberately don’t try to standardize UI because that is a legitimate and necessary and important part of differentiation. And inevitably consensus occurs, but that consensus occurs sort of organically.

And I have to say, I mean, putting my cards on the table, I’m not always a fan of Apple’s decisions on iOS, and I know that might come as a surprise to many, but I actually think they’ve done the right thing with limiting push notifications to things that are installed and with the on-the-fly confirmation of a Control V. I think this is a good thing, and it’s why a lot of people choose iOS devices. who are incredibly rich, you want to throw money away, they choose iOS devices. Right, Vadim?

**Vadim:** Sure. I mean, at the same time, from Mozilla point of view, you mentioned this MIDI API, so like on-the-fly extension to support it. I used to have a drone practice pad with some MIDI output built in, and they used Web MIDI API to set it up so I could connect it via USB and access some internals.

But at some point I had to use Chrome to do everything but having an option to install some sort of extension or to do something weird but still be able to achieve my tasks is better than nothing. installing it as PWA or installing extra extensions or going into some deep dive into some settings and set it up it’s it’s better than nothing so I think this this kind of approach might work but I was I was wondering if like limiting API’s realms seems like a good way to go or it would just destroy the the compatibility and every browser would implement their own obstacles. This

**Thomas:** This is a very, very interesting discussion there that we are entering. So an interesting API is the local font access API for giving your application access to the locally installed forms on your computer. It might sound harmless, but actually it turns out fonts that you have installed very, very much are identifying you amongst others, because it tends to be pretty unique. Like this one font that you installed for your daughter’s birthday card, and that you forgot about and that’s still around. This sets you apart from all the others who did not install this, for example.

On Google’s computers, there’s a font called Google Sans that is essentially Arial, but like branded with Google. So we don’t have to pay Helvetica or whoever some fonts, fees, whatever. If you detect someone has Google Sans installed, this means this person is a Google employee. The way this works is technically, the API allows you to get access to the locally installed fonts. How browsers implement this could be a very interesting approach for making this API just less scary. A browser could say, “We give out all the fonts after you say I want to grant access.” This would be the most identifying case.

A browser could also implement a subset, say the locally installed fonts are just the fonts that we know every Mac user, every Windows user, whatever has installed by default. So it would be a little less identifying variable. But if you then essentially wanted to grant access to this one font that you installed for your daughter’s birthday, then of course this would not work.

Another way to address this could be to just show an intermediate picker where you say, “From all my installed fonts, I want to grant the web application access to this particular one font that I installed for my daughter’s birthday.” So there’s ways how browsers can implement this.

Back to notifications real quick. So people tend to think notifications are annoying, so they block them. They know once they found out how to block notifications from one particular site, or even just globally, this is a signal that browser vendors can use. It’s actually happening in Chrome now that if we detect that at scale, if you go to example.com and everyone opts into notifications, but then opts out or blocks them some days later, this is a good signal that in general, these notifications might be considered spamming.

So you can use your knowledge about the web in general that people use on your browser as a way to say this seems to be a non-spammy site, so I show the notification prompt, or this seems to be a very spammy site. And the way it works in Chrome now is you get a less obtrusive notification that says this site might want to ask you for push notifications, but it’s not a modal prompt anymore that gets in your way. But it’s something that is is sort of hidden in the URL.

So I think this is also a way how Apple could have treated, or maybe they eventually will, treated this notification spam question. So permissions in general, this is a very, very hot topic with some… actually, with all, I guess, without Fugu APIs. Just following some of the implementation bugs where you can see how the engineers implement a given Fugu API, in many cases, the way the prompt question that they ask you like this app would want to use X on your computer, it could kill you or it could kill a kitten under your desk.

Like the way the security team within Chrome wants the notification prompt message to be formulated, this is a very, very heated debate in many cases. And we’re always balancing can lay persons understand this? Like something asking for HID access, like people would be like what versus hardware access? this seems a little clearer, but might sound too scary because people think, oh, this can then block my keyboard or whatever.

So also, in short, permissions, this is a very, very important topic. And getting permissions right, getting permissions in a way that regular people will understand them is very much an art. And we might not have arrived at a super success story yet. But I can tell you within Google, there’s just in general the browser community, there’s a lot of innovation happening there.

You will see this like Safari being like the goldfish when it comes to geolocation. They will ask you every single time you use the Google search engine if you want to grant Google access to your location. It’s very annoying because some people might always want to, some people might never want to, but you’re asking every single time.

Probably this is what causes prompt fatigue and that’s also very dangerous because if you see a prompt pop up and you just default no or default yes, then you no longer make this double negation. Let’s leave it in. You don’t no longer make an educated choice, you just click to prompt the way. So yeah, that’s just something to consider. Mozilla, I think they sort of came up first with this idea of having prompts that expire. So you could say, “I want to grant geolocation access to the site, but only for a day or so.” And then the next day they would ask again, but not within the same hour.

**Bruce:** Yeah, I always wanted the geolocation prompting an opera to say, “Not between 9 PM and 8 AM. So, because that’s probably where I live. Um, I actually want to give that away, but you’re right. I mean, permissions. You ask the average non-tinkerer, what’s the dangers of telling a website which fonts I’ve got and they’re going to be, well, how could that possibly be dangerous? But those of us who are tinkerers know that it’s a really great way of fingerprinting. That’s just, we know this, but you try and explain that to a non-tinkerer and time-consuming?

**Thomas:** So permissions tend to respect something that we call in browser land the line of death. I think Eric Lawrence from Microsoft invented this term. So essentially the idea is websites can paint in the actual browser window but they cannot paint in your bookmarks area or in your tabs area and so on.

So permissions would show above the line of death so that it’s non-spoofable UI. And if you ever saw any kind of these fake notification prompts or something or where people try to make a notification that looks like “oh your system is infected by a virus and it looks just like an actual Windows error message, we wanted to make sure that this UI spoofing could not happen with permissions”.

Line of death of course is a desktop concept, on mobile it’s different, so on mobile you have like these kind of very modal and also by that very annoying prompts that you just you need to do something you can’t do, you can’t get away with ignoring them or something.

I think this is what makes permissions also very interesting and this is why moving them around freely may be dangerous but also like there is there’s some aspect to it. Like if I ask for camera access and the camera access does not happen like where I see myself in the preview window for example, this is not the context that I have right now. So maybe there is a chance of innovating there and saying I want to show the notification of the prompt closer to where the actual event will happen and not always in the line of death area.

**Bruce:** I had no idea that browsing was such a dangerous occupation, the line of death, puffer fish poisoning, it’s fraught with terror actually.

### Web vs native competition

**Bruce:** Talking of terror, there’s got to be some degree of conflict inside Google because we’re as we all can guess at Apple’s rationale for not wanting the the browsers to be as powerful as apps. Google makes a lot of money from Android apps? Do you never worry that as you’re wandering through the streets of Dusseldorf late at night that Sergei and Larry might jump you and beat you up and push you in a ditch because you’re losing billions of pounds of app store revenue? Play store revenue, sorry.

**Thomas:** So I would actually be really happy if this happened just because, you know, it’s been a while that I’ve seen them. I used to be once in Mountain View and stand in the queue at the food corner behind Larry. These days, I guess it’s just a very, very rare event for them to show up. So I guess these days it would rather be Sundar who would be killing me with a knife. I guess he would also send someone and not come himself.

But anyway, so to your question, it’s a very interesting relationship that the Chrome team has with the Android folks. And as I said, there’s a Chrome Android team that sits in Android and we talk regularly. There’s a Play Store team which is part of Android but also sort of distinct. but then the Play Store people also talk to the Chrome OS people because you can access the Chrome, the Play Store from Chrome OS devices these days.

So it’s complicated to begin with, in a, I guess, mostly positive sense. On the Play Store, they do allow PWAs that are wrapped using something called Trusted Web Activity, which is essentially a full screen web view that you can filled with whatever content you like. But then when it comes to submitting these applications to the Play Store, of course, you need to play by the Play Store rules, which means it’s very complex when it comes to kids content. So if your content is targeted at kids, but you make random web requests, these random web requests could end up loading, you know, any kind of adult entertainment imagery. So it could be not tailored for kids.

So when it comes to these kind of experiences, It’s pretty, pretty interesting, and you need to be very careful. And before you start that approach, assess what is your app doing? Can it actually survive in the Play Store? Also, the Play Store obviously is a store where people can leave reviews. And if you submit your app and it’s not really well made, people might just leave one star reviews and say, “This is just a website. It’s not an app.” Of course, there’s something that you don’t want to happen to your brand. I

t has happened repeatedly where people just submit web apps that are really not well made. They get these one-star reviews. So, yes, I think the store question, to what extent does this lose money because people just go to the web or does it make money because people submit PWA to the stores? It’s a very complex question. I think openness is the best part to address this, so being welcoming.

But then of course also as a store owner, you have to enforce the store rules eventually. So if you let in any kind of example.com submission, don’t be surprised when you get a one-star review. So I think this is very much giving and taking there. Overall, people always say, “I want to be in the store with my, or whatever, App Store, Play Store with my PWA, because people will discover me more.” and I’m getting a like three letter whatever, s-e-x dot com, domain name versus having the term in your name and then people searching you on the Play Store and within the thousands of other apps that are listed there, competing with the stores, showing ads for a competition. Like this whole discoverability argument, I don’t know if I buy it that much.

So I have a… like I played with the technology, of course. I have an app called SVGcode, which is a very unique name. No other application on the Play Store uses this name. But if you search for SVG Code, it’s super non-discoverable, just because other applications that have more installs or that also deal with SVG or whatever, they get listed before my app. Even if my term is super unique, but my domain name is something that is unique to me. and I can even buy typo domains that would end up there as well. So I think the discoverability aspect, yeah, I don’t know.

So we have for sure educated people to look for apps on stores. So it’s definitely on us to say, we need to reeducate them to, with a pandemic everyone has learned to scan QR codes. So maybe QR codes are good. If you look at the many apps ecosystem in Asia, they have some sort of barcodes that are not technically QR codes, but barcodes that you need to scan with WeChat or with all these other super apps. So you know from the start as a user, “Oh, this looks like something that I can use WeChat to scan and then something will happen. I will end up in an experience that will allow me to rent a bike or whatever.” So I think it’s just rethinking that is required to address this discoverability question.

**Vadim:** But apart from discoverability, I think it’s beneficial for app stores, play stores, market places to allow PWAs because it definitely lowers the barrier for new developers. Like I have no idea how to publish Kotlin or Java or Swift based application to the app store or play store.

**Thomas:** If you were a geek you would know that.

**Vadim:** I mean that’s how we discovered that I’m just a tinkerer, not a geek. But still, I can create some website or a web application and wrap it into PWA and publish it to Microsoft Marketplace and Google’s Play Store as TWA, but not on Apple Store. And I guess there’s no competition between web applications and Play Stores, Marketplaces apart from App Store case.

**Thomas:** So if you’d Duck-Duck-Went and searched for something like, should I build a native app? You would definitely find answers in both directions. And I think it very much also depends on what is the skill set that you have in-house already. So if you have a cohort of Android developers, it’s probably a good idea to build an Android app. And if you want to address the web then, and this is where something that I’ve been talking at the very beginning comes in, if you want to address the web then, And maybe compiling your Android app that might be written in Kotlin to Web Assembly and then running this thing on the web might be a feasible alternative. And I’m very new to all of this.

But there’s a breed of new sort of compiled applications from other platforms that render everything on a canvas, throw away everything we have learned from building for the web. There’s no DOM. There’s no find and cite. There’s no extensions. There’s no accessibility, there’s no translate. It’s like all these affordances and browsers have given you. These things don’t work anymore.

But on the other end, you also need to think of if it were not for these new technologies like compiling with Kotlin after Web Assembly, certain experiences would not be on the web to begin with. So I think there’s also an argument to be made there. Like what is the end positive? Is it having more apps on the web? Is it having one app less just because I don’t know, it’s not accessible to non-sighted users. And I am very much an advocate for making things accessible.

Like if you look at a Flutter application and you debug it a bit and you see there is this button that enables accessibility, it’s like, what? Come on, how can accessibility be something you need to enable? Maybe we’re in this phase in between where it’s early days, we should not maybe bash immediately on any app that comes to the web and that is rendered to a canvas and say it’s a bad thing. Maybe the technology needs to mature a little bit until we can actually use this for more apps in production.

And to be fair, like the Flutter team, for example, they say we’re not meant for content apps. Like if you build a new site, you should not build that in Flutter, even the Flutter team themselves say so. Like the pure existence of having this enable accessibility shows at least they have recognized that this is a problem. But going back to the initial argument, what you have in house might very much determine what you can do. So if you have web developers maybe going to the Play Store with a TWA and going to the Windows Store with just a PWA built app that you can then submit to the Windows Store as the way to go.

I think very much always carefully assess what is the use case that you want to address. Be sure that you respect local laws, like if accessibility is required by law, and I think that’s a very, very good thing to require by law, then definitely abide to this law. And yeah, be sure you are open to some of the limits of the technology today, but at the same time, also be open to playing with it and asking these vendors, “Hey, we really need a way to figure out what does this canvas say in text so can you somehow convey the information from the canvas pixels to the accessibility object model.

**Bruce:** For example I mean not really part of this interview/ discussion but maybe useful for listeners I we made in my last job we made a new PWA we didn’t actually make a PWA it does happen to be easily bag-uppable as one. And just for experimentation, I ran it through Capacitor.js, which is a free thing from Ionic, and it became a complete iOS app that you could send to the App Store. It was an app, but when I put it on my iOS device, it was still a PWA, with all of the HTML semantics working perfectly well with voiceover.

So it wasn’t a native iOS app or a native Android app will have a heading but it’s only a type something’s either a heading or a not a heading. In HTML you get h1, h2, h3, h4 etc. And apart from the week-long download of Xcode and learning how to use Xcode which capacitor required it was really really easy to do. So yeah if you ever need to do that listen as you heard it here.

**Thomas:** Yeah, PWA builder definitely helps with that. I wrote an article about this. It’s a cool open source project from, or open source-ish, I guess, a project from Microsoft that allows you to convert your PWA into a Windows app, into even an Oculus app. So you can submit your PWA to the Oculus store and have people like that in VR.

I think that’s the way to go. But like, I fully agree. Like, when I looked into Apple development. The hardest part was not building an experience like I built an extension, but the hardest part was figuring out what is the signing profile and submitting and all these matter steps that they make you do. Yes.

### Fugu’s future plans

**Vadim:** Let’s maybe finalize with this one. What’s the next big thing for Project Fugu going forward? Because I remember you started this project with this certain goal to implement some APIs and you were doing so for many years, are you going to keep doing this? Or there’s a bigger plan for that? Or maybe it comes to an end at some point?

**Thomas:** So the pace of the team releasing new APIs definitely has slowed down. So I would say right now we’re in this phase where you can build a lot of applications on the web platform. We’ve seen amazing apps like Photoshop that work thanks to VASM as well, but also just thanks to regular DOM, they they work on the web. And you can do a lot of amazing things with these applications on the web already.

But then also, there are certain API’s that are released, but they are not perfect yet. So if you go to vscode.dev, Visual Studio code on the web, you can open a project file from your hard disk and make any kind of changes and edits. But then if you reload the application, the next day, you need to re grant access to the files that I’ve already granted access to. So that’s kind of a not nice experience as a developer because like, you know that vscode.dev, should have access to documents slash JavaScript or something.

Even if you install it as PWA on desktop via Chromium, it will still ask for permission next day. It will right now still ask for permission. Yeah. Right. So one of the things we are trying to do is We’re thinking of persisting the permissions so that you can say, look, vscode.dev can always have access to C projects or whatever. It’s fine. I fully acknowledge that. Versus this kind of, I don’t know, convert A to B things that you use the Bing search engine for to find any kind of random thing that can convert your A to B that you only use once. This should probably only have once access to your C pictures, whatever folder, but not for the eternity of your lifetime.

So I think these kind of refinements are very important for these APIs to be started. I think with that, refining existing APIs, shipping the one or the other new API for sure. If you look at the Fugu API tracker, there’s a long list of things that people have requested that the team just didn’t get to yet. There’s a long, long list of things to do. There’s also something that is going to happen.

So there will be some partners that will request a certain API, and this partner will be important enough, or the use case will be important enough, being asked by enough developers that in the end, the engineering team will pick it up and address it. But then we talked earlier about these red lines.

There’s also a new breed of applications that we were thinking about in the Chrome team, which is isolated web apps. And the The idea there is we have a couple of really interesting use cases for like direct sockets. As I said in the beginning, it’s a very dangerous API to grant access to in general, because it could be used to bypass firewalls.

But in the end, we have a lot of partners in the application streaming business that have existing applications that stream apps and entire upgrading systems to a browser window. They need direct sockets, because this is just how their streaming works. the use cases is very, very valid. If you think of the use case a little closer, there’s a lot of by use cases.

So if you think you go to a browser tab and you connect to a stream to Windows instance, you can full screen your browser tab, but at the same time, you still have in the end a window in a window. So windows in a window that has windows. One idea would be if we can make a seamless experience where just the Chrome tab or the browser tab that this experience runs in becomes seamless and sort of says, I followed all my closing notifications, like I’m getting close now, I’m getting maximized, I’m getting minimized. You forward these click notifications over to the hosting operating system from the streamed operating system.

That’s a very interesting use case. Long story short, a lot of use cases that have some security constraints, like we said, direct sockets, bad idea. Also, I would not be in the position to formulate this in a way that a layperson would understand why this is dangerous and why should I even allow this in a prompt.

But yeah, so for these kind of apps, there’s this proposal to have isolated web apps that are apps that are technically built with web technologies, but they are not part of the web in a sense of that you can’t go to whatever app.com and be there, but they would be installed from a store or they would be installed from a Chrome enterprise admin like that rolling out to regular users.

We brainstormed this idea first at the W3 °C TPAC and to I think most people’s surprise Apple and Mozilla were very interested in listening to these discussions actually kind of open to it so there might just be this opportunity for having some use cases addressed with web technology but just not on the open web. Yeah I think this could close down the discussion there. So there’s use cases.

Project Fugu is not over, absolutely not. There’s a lot of refinement work to do. The pace of new APIs has slowed down a little. But yeah, we’re also just discovering new use cases, like going back to Web Assembly. There was OpenOffice compiled to WebAssembly, so you could run OpenOffice in a web browser. There’s Audacity, like this audio editor that someone has compiled to WebAssembly.

And obviously, there’s a lot of Fugu APIs that you could address with those, like opening an actual file, saving back to it, request the File System Access API, or being able to paste a WAV file into this would require a new Fugu API for pasting and copying WAV files to the clipboard, which I think today is not technically feasible. So there’s definitely, even with this new WebAssembly kind of mind-blowing apps that people build or compile to the web. There’s new Fugu use cases that we will only just discover once we get there.

**Bruce:** Streaming operating systems. Science has gone too far. Thomas, thank you very much for your time. It’s really interesting to hear from the horse’s mouth. Really appreciate it.

**Thomas:** Thanks for having a fellow geek with you, even if you are just tinkerers. But yeah, it was fun talking to you.

**Bruce:** You too, and I shall have a word with Sergei and Larry, so I think you’re safe on the streets of Dusseldorf while they’re still listening to me.

**Thomas:** Tell them to come back from their island and just, you know, make Google great again.

**Bruce:** Make Google great again. 2024.

**Bruce:** Well, that’s it folks. All from Saturn and Berlin and the surface of the sun. Says Bruce signing off from The F-Word.

**Thomas:** All right, yeah, thank you very much for having me. Signing off to, going back to the sun, going back to the hot places. And I’m developing new food work, so you all can hopefully cut the Fubo fish right and not wrong and not die.

**Vadim:** Not dying is a good plan for the weekend, so we will meet you soon in the next episode of The F-Word, somewhere in May.

**Bruce:** Bye y’all!

**Vadim:** Cheers!
