---
number: 13
title: 'Does the iOS browser ban harm or help the web?'
date: 2021-10-07
hosts:
  - Bruce Lawson
  - Vadim Makeev
  - Stuart Langridge
chapters:
  - time: '00:44'
    title: 'Browser choice on iOS'
  - time: '15:50'
    title: 'Why should we care?'
  - time: '24:51'
    title: 'What Apple’s doing?'
  - time: '33:06'
    title: 'Developers are dissapointed'
  - time: '38:56'
    title: 'Next steps and possible future'
notes: |
  ### Links
  - [Talking to the Competition and Markets Authority about Apple](https://www.kryogenix.org/days/2021/09/06/talking-to-the-competition-and-markets-authority-about-apple/)
  - [Browser choice on Apple’s iOS: privacy and security aspects](https://kryogenix.org/code/cma-apple/)
  - [Set Safari free!](https://brucelawson.co.uk/2021/set-safari-free/)
  - [Briefing to the UK CMA on Apple’s iOS browser monopoly and PWA](https://brucelawson.co.uk/2021/briefing-to-the-uk-competition-and-markets-authority-on-apples-ios-browser-monopoly-and-progressive-web-apps/)
  - [iOS Engine Choice In Depth by Alex Russel](https://infrequently.org/2021/08/webkit-ios-deep-dive/)
---

### Intro

**Bruce:** Hello, and welcome to the F-Word.

**Vadim:** The F-Word, of course, stands for frontend, the wonderful world of web development, web standards, browsers, and some politics.

**Bruce:** I’m Bruce Lawson, coming to you from gloriously autumnal Birmingham, in the United Kingdom.

**Vadim:** I’m Vadim Makeev, coming to you from Saint Petersburg, Russia. It’s nice autumn here.

**Bruce:** Not freezing yet?

**Vadim:** Not yet.

**Bruce:** Soon.

**Vadim:** Yep. I just came from Samara, it’s south-er than Saint Petersburg. It’s raining and it’s terrible weather. So…

**Bruce:** Oh well, it’s worse than England, but there we are.

### Browser choice on iOS

**Bruce:** Talking of worse in England, I have a compatriot of mine as a guest. Fact, we live in the same city and, occasionally, have been known to drink beer in the same pub. So, I would like to introduce the flaxen-haired, FOSS Adonis, Stuart Langridge. Hello, Stuart.

**Stuart:** Hello chaps. Thank you for inviting me on your show.

**Bruce:** Well, we didn’t only invite you because of your good looks, and splendid shirts. For the obvious reasons that you possess neither.

**Stuart:** I was waiting for the other shoe to drop there.

**Bruce:** But you have been grassing up bad people to the UK government, haven’t you?

**Stuart:** I have. Not alone, I should say. Yes, I was part of a group who were invited to talk to the United Kingdom’s Competition and Markets Authority. So they’re the regulator, and they’re looking into mobile phones in general, the mobile phone ecosystems, software ecosystems there. Whether they are monopolistic and, as part of that, they were also pursuing the question of whether there is sufficient browser choice on, specifically, iOS. But their remit is to look at a whole bunch of stuff.

**Stuart:** And I was in there talking to them about Apple, and browser choice.

**Bruce:** Of course I mean, whereas they have to look at everything, there’s no restrictions on what you can install on Android, even if it’s not available in the Google Play store, you can sideload apps. It’s a bit more difficult, but on iOS, of course, what choices do you have? I mean, you can download Chrome, you can download Edge, you can download Firefox for iOS. So what’s the problem?

**Stuart:** I had to explain this to my daughter, actually. She was terribly pleased to point out to me that she hadn’t just gone with Safari, the stock browser that arrives on iOS, she was exercising her own choice, and she’d installed Chrome instead. And what I had to point out to her, that Chrome, like every other browser on iOS, is just a skin around Safari. The rendering engine, the engine that actually views the pages, has to be WebKit from Safari. You cannot ship your own engine.

**Vadim:** I just recently realized that you can actually ship your version of browser engine, but you’ll have to turn off this JIT compilation. So you’ll have the proper browser engine, but without the part that makes it fast. Is it correct, or it’s not?

**Stuart:** You see, now you’ve confused me there, Vadim, because I don’t think you can do it. I don’t think the JIT thing comes into it. Rule 2.5.6 from the App Store rules, specifically say, “Apps that browse the web must use the appropriate WebKit framework, and WebKit JavaScript.” It doesn’t say, unless you turn the Just in Time compiler off, at which point, Gecko, if you like. And part of the reason for that is that, I think, yes, jitting is important, but I don’t know, and this is where you’ll get 1,000 emails from browser engineers disagreeing with me, but I don’t know that it’s important enough that if you don’t have the JIT, you just flat out can’t do it.

**Stuart:** And, I think, at least some browser manufacturers would say, “Okay, we’d rather have our engine, and no Just in Time compilation” than would say, "Okay, we’ll just be a wrapper around WebKit.” Plus, more importantly, it would get away from what, at least some people think, Apple’s goals are with that rule. Apple, obviously, historically and notoriously, tend not to talk about why they’ve made decisions, just that they’ve. And so, there’s quite a lot of… Ha! I was about to use the word “Kremlinology” there, but I probably shouldn’t do, for someone who lives in Russia, but quite a lot of speculation about why Apple have made the choice to require that all browsers are actually just Safari.

**Stuart:** And there are a whole bunch of reasons the people, at least, believe that are around their business model, and so on. But Apple firmly claim they have technical reasons for it.

**Vadim:** Yeah. I thought that they publicly announced somewhere, the reasons why they made the choice. It’s related to performance, and security. Meaning that they’re trying to make their hardware, and software running on it as fast as possible, and as secure as possible. Meaning that they can control every aspect of it, and they won’t allow risky browsers with their engines on their platform. That’s why they banned Flash back in… what was the year? When they banned Flash?

**Bruce:** 2010, or something.

**Vadim:** They tried to introduce it to iOS, but I believe there was a problem with the energy efficiency, and some security issues. I believe, it follows the same line.

**Bruce:** Well, this is where I’ll interject, because I was one of the three people from the UK who was invited, along with Stuart, to the Competition and Marketing Authority. The other, shall remain nameless, by their own request, because like when we had James Rosewell on the show a few episodes ago, talking about Google turning off third-party cookies, a lot of iOS developers, people who specifically depend upon Apple allowing them into the App Store, etc, worry about retaliation from big companies.

**Bruce:** Now, whether or not that worry’s justified, I’m not to say because I have little to do with Apple, other than using MacBooks. So yes, the first guy who invited me and Stuart, he was talking about the problems he had, specifically trying to write apps that worked on iOS, and the bugs in WebKit, and Safari, such as IndexedDB breaking, and locaStorage, Fetch and Service Workers not working as expected. And I talked on Progressive Web Apps, and why it was unreasonable that iOS didn’t give equal rights to Progressive Web Apps, for example. If you make a PWA, you can’t have access to Bluetooth, or Push Notifications. Whereas, if you have a native app, you can.

**Bruce:** And we asked Stuart to come in to talk about exactly what you were asking there, Vadim, about whether Apple’s stated reason of only allowing the one engine on iOS, being for privacy and security, actually holds water. And what did you tell our friends at the CMA, Stuart? You wrote a blog post, so we’ll put a link to it in the show notes, of course, but give us the elevator pitch.

**Stuart:** Well, the high-level summary… Yes, Vadim, as you say, Apple have spoken in the past about how they are doing this for security, and privacy reasons, and for performance reasons. I didn’t really look at… I didn’t really talk about performance. But in terms of security, Apple certainly seem to believe that they’re protecting people’s security by not allowing other browsers. But in practice, Safari doesn’t seem to have particularly good security. The idea that Apple can produce a better, more secure browser than their competition can, on Apple’s platform, appears to be a belief that isn’t necessarily founded very much, as far as I can tell.

**Stuart:** This year, up to the point at which I did the talk, which was in early in September 2021. So from the beginning of 2021 up till September, there had been seven, in the world, zero-day vulnerabilities fixed by Apple. And five of them were in WebKit. Which means two things, first of all, I mean, everyone has bugs, right? This is the way of things. You can’t just point to a company and say, “Look! They had a security bug, therefore, they’re at fault.” Because everybody has bugs.

**Bruce:** Can I just say to any potential employers of Vadim, that he never has bugs.

**Stuart:** Then I intend to employ him as soon as possible. Or, possibly have him stuffed as an example.

**Vadim:** I would prefer the first one.

**Bruce:** I think I’d prefer the second. It sounds much more fun.

**Stuart:** And cheaper. So yes.

**Stuart:** So part of the issue with a lot of Apple’s vulnerabilities being in WebKit, which underlies Safari, is that it’s an important project, which you think would have a lot of Apple’s time and attention. And in practice, they don’t seem to be funding it well enough to stay on top of this sort of thing particularly well. But secondly, and more importantly, because every other browser is required to use this version of WebKit, a hole in WebKit, a security issue in WebKit in Safari, is also a security issue in every other browser on the platform, because they’re all the same browsers.

**Stuart:** But, more importantly, it’s not just how many bugs there are, how many exploits there are, but how they get handled. And this is where… so there’s… There’ve been quite a few studies into what’s called the “patch gap”. How long it takes from an issue being flagged, and a patch been written, to that patch actually showing up on a phone. And part of the issue there is, again, because there’s only one web browser engine, WebKit, and because it’s not shipped with the application, it’s shipped with the operating system, new versions of Safari, new versions of WebKit require a new version of the operating system. Which means that there’s inherently, a longer time limit.

**Stuart:** You may recall this, venerable, creaky old masters of the web like the two of you, and me, may remember that Internet Explorer had the same issue back in the day, where it was tied into the operating system in a way that it was difficult to disentangle, rather than being a separate application.

**Vadim:** I remember Edge doing this before they switched to Chromium. They decided to ship Edge updates separately from the operating system, at some point. But it couldn’t save them.

**Stuart:** Yeah. It is unreasonable to assume that you can match the velocity of a separate app, if you have to ship as part of the operating system. That’s just not the way it works. And there are reasons for doing that, obviously. But it does mean that you are going to lag behind in the amount of time it takes you to get things fixed, and get things shipped to people.

**Stuart:** So there’s a startup called, Theory. So, earlier in the year, Safari… or, WebKit in Safari, on iOS, released audio work clip handling, and there was an issue with it, which is fine, always bugs, and that would… it was a crasher bug in Safari. And crasher bugs are problematic because, quite often, they lead to exploits. If you can manage to crash the browser, you quite often crash the browser in such a way that it executes code for you. And so, this bug was identified, it was fixed in WebKit, but that fix didn’t show up… WebKit’s open-source, right? So you can see when the fix went into WebKit, but it didn’t show up on people’s phones in Safari, for weeks after that. And there’s nothing anyone can do about it. If you know the bug is there, and you know your web browser on iOS is vulnerable to that bug, and you want to help, and you’re prepared to put money, and time, and resources into helping, there is nothing you can do about it.

**Stuart:** Now, part of what I was attempting to get across to the Competition and Markets Authority is not just that Apple are like this, it’s that they’re attempting to blur the distinction between security issues which they’re choosing not to deal with, and security issues they’re just slow on. So they will talk quite a bit, for example, about how it doesn’t matter that there’s only one browser engine, and everyone needs to use it, because WebKit is open-source, and anyone can contribute to it. Like they specifically said, when Apple were testifying before the US Subcommittee for Antitrust, they specifically said that WebKit is an open-source web engine, and that allows third parties can contribute relevant changes into WebKit.

**Stuart:** So they end up in the WebKit engine. It’s not just a closed shop with only Apple people, everyone else can get involved. Which is, in theory, the case. But a patch goes into WebKit, and doesn’t show up in Safari for weeks, no-one can do anything about that. If you are Igalia say, who are, I think, the biggest contributors to WebKit, behind Apple themselves, and they are a third-party, and they’re fixing things that haven’t come up to the top of Apple’s list, that’s great. But getting that fix into Safari is entirely down to Apple. And Apple do not just… Apple don’t just ship the version… GetMaster of WebKit, they have a private fork of WebKit they cut some stuff out of, and put other stuff in.

**Vadim:** And the, I believe, that AV1 format is also supported in WebKit, but not supported in Safari because they insist that support should go on a hardware level. So until they released its… their new chip version, it won’t be available.

**Stuart:** No. And, I mean, again, for a lot of these things, they’ve got reasons, and you can understand those reasons. And if they say, “We’re not going to do this on the CPU because it’s going to drink battery power”, this is probably correct. And if you’re prepared to make performance compromises in order to get a shonky version of something early, then you’d be using Android. But, the fact that Apple have made that decision is okay, but it is, in my opinion, and in quite a lot of other people’s opinion, a bit disingenuous to simultaneously say, “No, web apps are great, and they’re a perfectly viable rival.” While also saying, “Yeah, you don’t get AV1 format until a new chip iteration comes out.” Which means it’s never going to happen on the iPhone that’s currently in your pocket.

**Stuart:** And well, in that case, how is a web app an adequate rival? And that, I think, is largely part of the problem.

**Stuart:** So the Epic versus Apple Games case, which is going on in the United States, this case is kind of around monopolistic behavior with the App Store. This is native apps, not the web. But one of the things that Apple specifically said was that web apps are a perfectly viable alternative on iOS to native application. And so, they can’t possibly have a monopoly, because you don’t even have to use their app store at all.

**Stuart:** But it’s hard to make that a case while also seeing that Safari lags behind other browsers. There are a whole bunch of things which they have flat-out refused to implement, and therefore, cannot be at parity with native apps. And the developers of the web app that they specifically pointed at, the Financial Times app, specifically said that the web app being held up was a terrible idea. So Ada Rose Cannon did not say it was a terrible idea, she said something else. But, I don’t know how family-friendly your show is.

**Stuart:** But, Ada Rose Cannon said the web can be an ideal place to build apps, but Apple is consistently dragging their heals on implementing the web APIs that would allow them to compete with native apps. So this is the people, actually, on the ground floor… at least, some people on the ground floor, who built the app that Apple are holding up as an exemplar, saying that is disingenuous.

### Why should we care?

**Vadim:** I would say the same thing Apple said, being on a stand in front of the judge, because yeah, they’re trying to save themselves, and they’re probably keeping partial PWA implementation just for that reason. But, you know, they’re trying to make their business model work, to make it better for consumers, better for security. And what’s the reasoning behind all of that? For web on mobile not to stall? Or? How would you explain it?

**Stuart:** My reasoning, the web is the biggest, most open, most diverse, most accessible platform for delivering information, and applications, and data, and friendships, and connections that we’ve ever built by miles, and miles, and miles. And I don’t like it when things stand in the way of that. And whether the thing standing in the way of it is someone, apparently, deliberately limiting the reach of the web on their platform, or someone… with the pendulum swinging in the other direction, someone trying to shape the direction of the web entirely for their own ends. Either of those two extremes are bad for the web’s openness, the web’s reach, the web’s accessibility.

**Vadim:** It happens all the time. Like Microsoft, Apple, Google and many other companies, they’re trying to shape the web the way they need, and it works. It still works, I mean, only because there are multiple parties involved. And one of them being Apple.

**Stuart:** Yes, absolutely. I mean, to be clear, the solution which is given by an awful lot of people to this is, Apple should be compelled to allow third-party browsers, and their own engines, on their platform. And that is one, obvious solution and I’m, kind of, okay with it. I can see why Apple don’t want to do it. Completely putting aside all of the issues about, “We think we can do better at security, we think we can do better at privacy.” They are the one place where Chrome isn’t dominant, and I can absolutely see Apple saying, “We’re staying the one place where Chrome isn’t dominant, thank you very much!”

**Stuart:** I, personally, not everyone feels like this, but I personally, would not mind anywhere near as much if browsers on iOS were limited to use the WebKit rendering engine, if Apple funded the WebKit development into make it the best browser on earth. They are perfectly capable of doing this. Apple are really good at making a thing be the best it can be. But, they’re not doing it. WebKit lags behind. And this is not just on hardware stuff. So, again, I mentioned earlier that they quite like blurring the distinction between things. So if you think that the web should be an app development platform, an app delivery platform, then you want things like web Bluetooth. Being able to talk to USB devices from web JavaScript. Google with the Chrome team and Project Fugu, all over this sort of thing. They absolutely think that’s a good idea. Apple don’t, and Mozilla don’t either.

**Stuart:** So this is not just Apple saying no to Google. Mozilla also think this is not the way. So they’re basically taking a stand for saying, “You need native apps for this sort of thing.” I, personally, don’t agree with that, but I can see why some people would think it, and fine, no problem. So leave that stuff to one side. But there’s no reason why the security issues can’t be fixed faster. There’s no reason why there can’t be more openness about which version of WebKit is going in, and when it’s going in, and why some things are cut out, and why some things are not. There is no reason why third-party browsers are not given access to APIs like Bing being able to add themselves to the Home screen.

**Stuart:** This is, in no way, a security issue. Is in no way a privacy issue. There’s a whole bunch of magical stuff which Safari can do, and no-one else can. Even if you have to be a wrapper around Safari, you should be able to do all the stuff that Safari can do.

**Bruce:** Well, that’s true. A third-party browser, Chrome, or Edge, or Firefox on iOS cannot do “Add to Home screen”, even though Safari can. And even though other apps on iOS can add things to Home screen. Those are Apple apps, rather than other browsers. We saw an interesting one, actually, last week, when iOS 15 was announced… was released. There was a zero-day exploit was actually being used in the wild, reported to Apple by Google. And of course, they noticed it because it was happening in Chrome on iOS, but Chrome on iOS is obliged to use the WebKit engine.

**Bruce:** So that’s a perfect example of how, if Chrome on iOS where using Chromium, those Chrome users would have a more secure experience than they currently do, because they’re obliged to use native WebKit.

**Bruce:** I’m not as laissez-faire as Stuart. I would not be happy if Apple were allowed to keep being the only rendering engine, because we know, Vadim and I, certainly know from our time at Opera, that being the pre-installed browser from the vendor of the device is already a huge benefit. If Safari is so great, then it shouldn’t have any problem competing with Chromium, real Chromium, and real Gecko on their device. There’s nothing to stop Apple putting their money where their mouth is and saying, “We firmly believe that Safari is so good that we’ll leave it to consumers to vote with their feet.”

**Bruce:** I don’t believe that Google have a bigger marketing budget than Apple. When Google where marketing Chrome, at Opera we were going, “Their marketing spend is bigger than our whole revenue.” Which was certainly true. But when you’ve got to behemoth’s like Apple and Google slugging it out, they should be able to make their stuff better. But the fact of the matter is, Apple are great at hardware, and shit at software. There is no good Apple software, full stop.

**Vadim:** I’m going to edit this podcast in Logic Pro. So, made by Apple. Sorry, Bruce.

**Bruce:** Fair enough, fair enough. I’d be using something decent like, Audacity, but there we go.

**Stuart:** I’m, literally, recording into Audacity as we speak. macOS is a case study, an example of exactly what you’re talking about. Because on there, Safari is the default browser. And Chrome has a pretty big market share. But it’s not entirely taken over. Safari still holds a whole bunch of market share on macOS devices. So you would assume that maybe the same would be true for iOS. It is not clear. So, again, to be clear, I would be okay with the idea of Apple providing the best browser, and attempting to provide the best browser, and then, everything being limited to it.

**Stuart:** I would rather that people got to put apps on this platform, even if those apps are web browsers with their own rendering engines in. Because, to me, it feels flagrantly anti-competitive to say, “You don’t get to do a web browser.” But, I don’t get to decide on whether things are acting competitive or not, but the Competition and Marketing Authority do, and they also have my opinion.

**Bruce:** Yeah, and I have to say, although, when they invited us to speak, we asked them, “What can we say about this procedure?” And they said well, the talks that Stuart and I and Clark gave, obviously, we can make those public. And Stuart and I have. They did ask us not to, sort of, name the people in the room, or go too deeply into the questions we were asked and-

**Stuart:** Which is perfectly fair.

**Bruce:** Perfectly fair. I’m respecting that. But, I think, not putting words into your mouth, Stuart, to say that we were very pleasantly surprised at how clued up these people were, given that lots of developers don’t know that Chrome on iOS is not running Chromium. I didn’t expect economists, and lawyers to know that, but they did. And they were asking searching, technical questions of us. It was very reassuring, I thought.

**Stuart:** It was very reassuring, yes. I was half expecting to get in there and find a bunch of people who barely understand technology at all, and had been required to regulate it. And that wasn’t the case in the slightest. As Bruce says, they were already well clued up on this subject, and had a bunch of sensible questions to ask. Which showed that they weren’t asking about the problem, they were asking what could be done about the problem, because they already understood the problem. Which was very, very encouraging.

### What Apple’s doing

**Vadim:** Apart from this hearing, apart from possible lawsuit in the future, do you think Apple are doing something to manage the problem? I mean, the recent release of Safari, they did it first time ever, or maybe in a long while, without releasing a new version of macOS. They just released Safari on its own, Safari 15. They released Safari 15 on iOS with an operating system update, and Safari 15 on macOS without releasing the next version of operating system. That was refreshing.

**Stuart:** We’ve also seen a couple more baby steps as well. So if you’re a video app, or a music app, you’re now allowed to add a link to your own website. In Japan, after the Japanese Fair Trade Commission’s investigation, which is very similar to what the CMA are doing in the UK… I’ve got to remember the exact details of this, developers of apps on iOS are now allowed, when they email users of their apps, they’re now allowed to mention payment options in the emails, that aren’t Apple’s payment options. They can’t mention them in the apps still.

**Stuart:** So this is, basically, Apple being dragged, kicking and screaming like a two-year old having a tantrum, in the direction of allowing people to compete, rather than going, “We’re not going to let anyone compete.” And then saying, “Goodness me! We seem to be doing better than everybody else.”

**Bruce:** I believe the latter thing was Vadim’s friend, Vladimir, wasn’t it? Who told off Apple, and… after complaints by Russian developers. Wasn’t it?

**Vadim:** Yeah. I don’t know much about this situation in Russia, to be honest, because it goes over my head in most cases. When something’s happening in… when Russian Government speaks to its citizens, I don’t usually listen, because it usually doesn’t make sense at all, in technical perspective. But speaking of this thing with allowing developers to nudge their users that there’s another way to pay for their services, in Russia, people who rent apartments, they don’t pay taxes usually. They usually rent for 11 months, and then, they stop renting for the 12th, because they have to pay some taxes. But they still rent but they don’t pay taxes, and they send money in cash, or on card, without mentioning it to Russian Government.

**Vadim:** Meaning that Apple is trying to keep their revenue stream to support their platform, so it won’t be the same thing as happening in Russia with apartment renting.

**Stuart:** First of all, I feel like Her Majesty’s Revenue and Customs would not let people get away with that trick in the UK. But, more importantly, I said right at the beginning of all of this that there’s a lot of people speculating on Apple’s motives for it. And when I say people are speculating, what I mean is, everybody thinks this is to do with topping up Apple’s business model, and Apple swear up and down that it’s nothing to do with that, it’s because of security, and privacy. And it’s not because they want to preserve the Niagara of cash that roars towards them from the App Store, every second of every day. To the point where I don’t think anyone actually believes them.

**Stuart:** But I don’t think it’s just a cynical play for money, and the primacy of the App Store. They genuinely do believe that what they’re doing is better for security, and better for privacy. And they have a point. What they’re saying is not wholly without merit. So the thing I talked about, about the access to hardware APIs, things like accessing USB devices from the web, which Mozilla have also stood up against. Apple’s concerns around fingerprinting, and other security issues. And as I say, they have a point there. There is a reasonable argument to be made that this should not be allowed. What’s supposed to happen in that situation is, one company goes one way, one company goes another, and then, the market sorts it out. I’m not a great believer in the market, but you are supposed to see which one does best with consumers.

**Stuart:** The issue is, obviously, that there is no level playing field on iOS. The thing I said to the CMA is, I would like to be able to build the best apps with the web, and put them on the best hardware platform, on a phone, which is iOS, and I can’t. At the moment, if I want to choose Apple hardware, I have to choose a sub-par web experience. If I want to choose a good web experience, I have to opt out of Apple hardware. And those two things should not be connected. They really shouldn’t. I see no reason why I shouldn’t be able to choose both the best hardware, and the best technology. Why would I not want to do this?

**Stuart:** And for people who would say, “The web’s not the best technology, and iOS native app is the best technology.” Then fine, you go ahead and build an iOS native app, I’m not stopping you. But in my opinion, I want to be able to work with their stuff, and I’m being prohibited from doing so. And from my point of view, I don’t mind whether Apple fix it by making Safari be best in class. Or, Apple allow other people to contribute to Safari and WebKit in a much more obvious, and directly connected way. Which means that it’s best in class, but everyone collaborates on it. Which is some kind of middle ground between Google getting to ship Chrome, and then, steal all of your users, or Apple have to hire every browser developer on earth, to make Safari the best.

**Stuart:** Maybe there’s some kind of middle ground, where lots of other people can get things into WebKit, and that process is more sped up, it’s more connected, it’s more transparent. Don’t know, right? It’s not my job to fix, this is my job to say, “Here is a problem. It’s Apple’s job to fix it.”

**Vadim:** That’s… we are talking about the market regulation. But, at the same time, you’re asking government to intervene, and stop the competition between iOS and Android, for example. So people would choose less feature-capable browsers on a better platform… they would make their own choices. And you’re asking someone to regulate this, and change the situation against the market.

**Bruce:** I’d argue though that there isn’t a genuine market. The market’s distorted by Apple insisting that other browsers cannot compete on their products. Other browsers can compete on macOS, other browsers can compete on Windows. Even Chrome OS, you can put Firefox on. Androids are free for all. So, I think, if I were to put it in economist’s terms, and I’m not an economist, but I would say, we’re not asking them to distort the market, we’re asking them to correct the market. Not in favor of Google, not in favor of Firefox, but giving Google, and Firefox, and Microsoft an opportunity. And giving Apple and opportunity to prove that it actually is able to deliver the best experience.

**Vadim:** Meaning that market couldn’t save itself from monopoly, so it should be cleaned up, or regulated, somehow.

**Bruce:** We’ve discussed this before. I mean, it’s… every company has the natural tendency to monopoly. Every company wants market share. Whether that’s good or bad. That’s like saying it’s a shame that dogs bite, or cats purr, it’s just what they do. And it’s market regulators job to ensure that nobody can have a monopoly. No company, I think, ever voluntarily reduces its market share. They might do it like Firefox do by giving their… saying to their managers, “We’ll raise your pay every time you lose 10% of users.” Nobody actually tries to divest themselves of monopoly if they built one. It has to be competition authorities, and that’s why every country has one.

### Developers are dissapointed

**Stuart:** So there’s a whole big moral argument, and a whole big legal argument, and a whole big economic argument, and a whole big philosophical argument about whether these things are good, or not. But in my experience over the last five, or six years, we’ve seen developer opinion of Apple sour a bit, I think. Apple have gone from being everyone’s kind of, “Yeah. Well, obviously, their stuff is great, I use them the whole time. I’ve got my problems with them, but they’re, basically, great.” To feeling a bit more exploitative perhaps.

**Stuart:** Now, I think, a lot of this is because people just didn’t like the MacBooks for like five years on the bounce, or something. Fine. Whatever. Don’t use them myself, but that’s fine. But when you have Epic suing Apple, and Apple saying, “No, no, web apps are just as good as native apps.” It’s looks like a massively disingenuous transparent attempt to say, “No, no, no, no, no. We’re not a monopoly. But for the App Store we should be allowed to go on charging 30%.” And, literally, everyone goes, “No, they aren’t.”

**Stuart:** Now some people might say it is good that they aren’t. A whole bunch of developers would say, “Yeah, the web shouldn’t be a platform for delivering apps. It shouldn’t be a platform for rivaling native apps. That’s not what the web is for, it’s for documents, it’s not… ” Whatever. I happen to mostly not agree with those people, there are days. But, regardless of whether you think the web should be a platform for delivering apps or not, no-one thinks that on iOS the web is as good a platform as native apps. And, therefore, it looks really off for Apple to hold it up and say that it is.

**Stuart:** So, again, standing in front of the Committee on Antitrust, Apple stood there and said, “Yeah, for web browsing, Apple offers Safari. But there’s a wide variety of browser apps on the App Store, Chrome, and Edge, and Firefox.” And that, again, it looks disingenuous, because it’s obviously not the case. And, I think, I’ve seen a lot of people in the developer community… Now, obviously, I have it one end of the developer community, and it’s towards the, “It’s not good when Apple does this sort of thing” end, so I may see more of this. But, I think, a lot of people have looked at this and gone, “Apple, you don’t have to be like this. You’re supposed to be good at stuff. Be good at stuff without doing all this double-talk stuff.”

**Stuart:** It seems almost disappointing. For the company that came up with the Think Different advert, and breaking out of the tiny annoying box that IBM have put you in.

**Vadim:** Long time ago.

**Stuart:** That was a long time ago. But, they’ve now become… they gazed into the abyss too long, and the abyss gazed back. And, I think, people feel a faint sense of disappointment that Apple shouldn’t have to win by doing stuff like this.

**Bruce:** I’ve got a great idea. I think the way we solve this, if our chums at the CMA don’t have to balls to do the regulating, I think, what we do is we just crowd fund loads of advertising hoardings around Cupertino, and just have a photograph of you there, and just saying, “Stuart is disappointed in you .”

**Stuart:** Literally am disappointed.

**Bruce:** Because, I tell you what, nobody, nobody could carry on just surrounded by pictures of you looking disappointed. Honestly, our listeners, you are so lucky that this is not a vlog, because Stuart’s disappointed look is the most… it’s like Lassie with a broken leg, having noticed that Bambi’s mum has died. It’s that sad.

**Stuart:** It’s exactly it. Tim Cook drives to work, and he just sees me looking like a kicked puppy about Safari. How is anyone not going to react?

**Bruce:** Exactly. And I’ll tell you what, I’ve spent half a day fighting with Xcode, and I never ever want to fight with Xcode again, so sort it out, Tim Cook. Don’t let Stuart be disappointed anymore.

**Vadim:** And you know, I might sound like I’m trying to explain Apple’s behavior, and I’m trying to oppose your opinion, or something. And, you know, in Russian community, people say that I’m an Apple hater because I always criticize Safari and WebKit. But in this case, I just want to be the opposite side to make our conversation a bit interesting. But I agree, that there should be competition, that Apple should invest more money, and time in WebKit, and Safari, and open the platform et cetera, et cetera. But, I think, they’re not going to do it on their own, they need some persuasion. It’s not a usual thing for people in Russia to hope that government will come and solve their problems. I’m naturally not trusting any authorities trying to fix market. I guess, you have a lot of experience with government doing the right thing. Well, not every time.

**Stuart:** I think, occasionally, they’ve wondered near the right thing, which is… I’m a believer in the power of the government to do the right thing sometimes. Hence, having the discussion.

**Bruce:** Yes. I believe the government has the power to do the right thing. Whether or not it has the will to do the right thing is another.

**Stuart:** Or the inclination.

**Bruce:** But then, of course, we weren’t actually talking to the government. We’re talking to an independent agency which is funded by the government, but not controlled by, or…

**Stuart:** Yes.

**Bruce:** It’s an arm’s length thing. And I suspect that arm’s length in the UK is possibly a little bit more independent than arm’s length in, maybe, Russia. We don’t know.

**Vadim:** I would agree.

### Next steps and possible future

**Vadim:** So what would be the next step in this process? What do you think? Is there a chance that something might change? And what would be the next step for this commission, or in this process? Do you remember any similar cases in history of UK, or Europe?

**Stuart:** UK and Europe? No. I mean, what’s interesting is, we have a case quite like this in the US, with Internet Explorer, in the late ’90s. But how that was handled was just terrible. Mandating that three of the slots on everyone’s Windows start menu had their contents decided by the US Department of Justice, was no improvement, I think. So I’m not sure exactly what the best solution is. I’m also… I’m not sure what is in the power of the Competition and Markets Authority to do. Can they say to Apple, “You now have to allow people to run whatever they like on your hardware, and there’s nothing you can do about it”?

**Vadim:** Well, they’re trying to do the same with the USB-C port, at the moment.

**Stuart:** Yes, but, with that as an example, Micro USB was required to be the charger before this. The EU did exactly the same thing then, and it was the right thing to do, and Apple went, “We don’t think we should have to do that.” And they went, “Well, we don’t care about what you think. You have to do it.” And they went, “Fine. Here’s an adapt.” Right? They didn’t actually change the phones. But that, to me, I think, is reasonable. But I don’t know whether the Competition and Markets Authority, the CMA, can demand that Apple permits sideloading, or that they demand that they drop Rule 2.5.6 and say you’re allowed to ship your own browser engine, or… They probably can’t demand that Apple make the best browser in the world.

**Vadim:** That would be funny to see.

**Stuart:** And I am skeptical about government organizations, and regulators mandating technical solutions, because they’re not good at it. And what that means is that everyone in the world has to use SOAP and XML for the next 25 years, because it was mandated. And so you end up with whatever the premium technology solution was 15 years ago, now being legally required, and it drives everyone crazy.

**Stuart:** But I, fortunately, I am not the director of the CMA, so I don’t know how to phrase this sort of thing. But, I think, the impression I have is that all these little steps that Apple is taking, because every regulator, every competition authority, anti-competition authority around the globe, appears to have a case against Apple. And every time they’re forced to take… well, not a step back, about a 16th of a step back. And, I think, eventually, Apple are going to say, “Right, okay. We’re going to come up with something which is going to make you all shut up.” And the thing they’ll come up with is probably going to be, “We’ll let Chrome on the platform.”

**Stuart:** I mean, let’s be honest about it, that’s what we’re talking about here. And people talk a big game about, “Yeah, yeah. We want to allow browser competition, and everything.” But, I think, part of the reason Apple are so resistant to that is that’s not what it means. What this means is, real Chrome on iOS. That’s the only thing that will actually change. People are not going to start using Vivaldi on iOS as their main browser, much as they might want to. Or, Opera 12, or something. And this largely comes down to what Bruce said about marketing budgets. Both Google and Apple spend more on Post-its than the rest of the world spends on marketing of browsers, because they’ve got the money.

**Stuart:** So this is, basically, going to be, nothing will change after enabling browser choice on iOS, other than, Chrome will now have 40% of iOS. And that is the only thing that will change. I’m not necessarily… part of the reason that I’m not necessarily pushing for this as an answer is because I don’t necessarily know that’s a gargantuan improvement.

**Bruce:** One way it’s an improvement because I’d be able to say, “We’d like to send you push notifications from this progressive web app, please install Chrome.” If Safari didn’t allow it anymore.

**Stuart:** But this is the thing, you’d say, “Please install Chrome.” Just like Google do on the front page of Google. com, or on Google Inbox, and we hate them for it, and rightfully so.

**Bruce:** If only Chrome were allowed, I would say, “Please install Chrome.”

**Stuart:** No, no, no, no, no. This is the point. I think every other browser will be allowed, and Chrome will get 40%, and everyone else will be less than single digits.

**Bruce:** I suspect you’re right. In which case, I’d say, “Please install something other than Safari if you want to get a push notification.”

**Stuart:** And, as I say, that’s why, I think, personally, Apple are very resistant to this. Because they see a world in which nothing has changed, apart from the fact that now, Google have got 40% of their users, and are busy funneling them into Google Properties, and signing up for Google accounts, and using Google advertising, and ceding their data to Google, and Apple don’t want them to. Partially because they want to protect people’s privacy, and partially because they just don’t want to give it all up to Google.

**Bruce:** And I can understand both.

**Vadim:** Google is default search on iOS still.

**Stuart:** Well, yeah. I mean, they pay a hysterical amount of money to keep it that way. But yeah, I mean, that’s a whole different discussion. Because it would be nice if DuckDuckGo were, but DuckDuckGo would say “we don’t have the money to pay for it, because we’re not the biggest search engine in the world”. But then, you get into a whole big discussion about people who have the money get to make the rules. Which is more than the F-Word is designed to cope with, I think.

**Bruce:** Well, oddly enough though, we do get a surprising amount of that on the F-Word. But to answer Vadim’s question more near term. They began this investigation in March this year, and it will conclude in March next year. And they’re going to release an interim report in December. But that won’t be their final report. And we, Stuart and I, and Clark Kent have offered a… we have said, “If you want us back, or you want to ask us anymore questions, we’re happy to.” But they haven’t as yet. But then, you heard how much Stuart and I can speak. They’re probably still… they probably still got tinnitus from meeting us in early September.

**Bruce:** But yeah. And I don’t believe that they can say, “Apple, you must do this, or we will come round and tell you off.” What they can do is say, “If you continue behaving like this, you don’t have the right to sell your stuff in the UK.” And given the UK is probably the second biggest market for iPhones, I don’t know, but certainly, the UK, I think, would be a big enough iOS market. Not… if you were Lichtenstein, or Lesotho saying, “Apple you can’t sell here.” Apple will go, “Okay. Well, we sell two a year, so what-evs.”

**Stuart:** Yeah. I mean, and that is an interesting thing. I suspect Apple, rather than dying the death of 1,000 cuts and giving up a tiny little bit, every time one of these cases happens, they’ll go, “Okay, we’d like to clear all of this away. What do we need to do to make you all just shut up, and leave us alone, and let us run our platform how we like?” I suspect, the answers will be something along the lines of, allow sideloading, allow browsers, and don’t charge as much as 30%. And if they did all that, everyone would kind of shut up, probably.

**Vadim:** Yeah. So basically, what you’re doing is applying another force, another pressure, on Apple in the UK.

**Stuart:** Yes. Mm-hmm (affirmative).

**Vadim:** Just like they do in US, Australia, and probably some other countries.

**Bruce:** South Korea, Japan, Russia.

**Stuart:** The UK is… it’s not a dominant market for Apple. I mean, I would find it very interesting if they came to a head, who would blink first? If the CMA said, “Okay, you have to do this stuff, otherwise you’re not allowed to sell in the UK.” Whether Apple will go, “Fine.” And then just walk out of the UK. I honestly don’t know what they’d say. Because at that point, it’s less about what makes business sense, and what kind of… more proper. Their own kind of pride, more than anything else. And we’ve seen, if you look at Apple’s stance on giving up login details, or allowing the US Law Enforcement to sign into an iPhone, or pushing a new version of iOS which allows circumvention of that, they’re were prepared to stand up, and take their lumps on that.

**Stuart:** Now, they did it, at least partially, because of the optics. It looked very good to do so, to the tech community, and to people about privacy in general. And it did a good job of underlining their new push on privacy. But you can certainly imagine them spinning it as, “Yeah, we care about you users so much, that we’re not going to allow any random developers to push things onto your phone, which can steal your data. And we believe that so much that if a country demands we allow it, we just won’t sell in that country.”

**Stuart:** And their PR people, you can see them putting that spin on it. I mean, again, it looks a bit disingenuous when, then people say, “So you’re allowed to push stuff onto our phones. Specifically, U2 albums and the like, that we don’t want.” But that’s the thing. I don’t believe it would come to that much of a head, and I don’t think Apple would face down the US government, and they, notably, have not faced down the Chinese government. And have, in fact, yielded to a whole bunch of technical requirements that the Chinese government have put in place like, “You have to run your stuff on our servers.” Which I don’t know how big a part of their market, any individual country that isn’t China, or the US, actually is.

**Stuart:** I don’t know where their breakpoint is, is for, “We don’t have to listen to you. We’ll just walk.”

**Vadim:** I don’t think it’s a matter of market share. It’s a matter of the first case. They’re not willing to make a precedent of it.

**Stuart:** Yeah, I think that’s fair. Yeah, if they yield to a regulator who… so now, what happens in iOS is decided by the iOS development team, plus the government. Every other government would go, “You have to do this too.” But, China did this already, and Apple caved. And that hasn’t, necessarily, set a precedent.

**Vadim:** Yeah. It’s a whole different case, I guess, in the case of China, because they have manufacturers all over the country. We’re being too political, at the moment.

**Stuart:** I mean, seriously, every discussion you have about whether I’m allowed to talk to a Bluetooth low-energy device from a webpage on my phone, turns into this massive geo-political discussion. It’s crazy.

**Bruce:** Well, we’ll just take it back to your kicked puppy look, Stuart. In fact, I’ll look like a kicked pup, and I’ll do a screenshot for the show notes. Aww, such a shame. I’m going to come round and buy you a pint, mate, to cheer you up.

**Bruce:** And that, dear listeners, I think, concludes the F-Word for this episode. And we’d like to say thank you, again, to the David, that is Stuart, smiting the Goliath, that is Apple.

**Stuart:** I should point out, David won. Which is not necessarily the case for here, but I appreciate the faith, don’t get me wrong.

**Bruce:** Yeah, that metaphor was a bit… It’s my age. Nobody likes premature congratulation, do they? But, on that note, from the F-Word to you, dear listeners, have a lovely month, and we’ll see you again before you know it.

**Vadim:** Cheers.

**Stuart:** Cheers.

**Bruce:** Bye.
