### Intro

**Bruce:** Hi. Bruce here with a quick note after the recording of the conversation. Between recording and release of this particular episode of The F-Word, Apple’s lawyers have successfully appealed against the CMA’s market investigation of the browser monopoly. They didn’t appeal upon merits. They appealed upon technical and procedural aspects, saying that the CMA didn’t obey the correct process and the correct time scale. That isn’t the end of the story for the CMA, and it’s certainly not the end of the story for other regulators such as the EU and the Digital Markets Act. So, nothing that we’re saying in the ensuing conversation is actually invalidated, just perhaps postponed or made slightly more difficult in the United Kingdom. Thanks. See you!

**Bruce:** Hello everybody and welcome to The F-word. The wonderful world of browsers, web standards and everything in between. I’m Bruce Lawson coming to you from Birmingham in the United Kingdom.

**Vadim:** I’m Vadim coming to you from Berlin, Germany. We welcome back Mr Alex Russell, sinister mastermind from Microsoft, who regaled us recently with lots of anecdotes about clowns and cars and ditches. Alex, I think we established that a lot of the problem with Frameworks is mismatched expectations, problems, structural problems in the market rather than anybody is intrinsically evil here. But now I’d like to turn our conversation towards the intrinsically evil. I refer, of course, to the beast of Cupertino, Apple.

### Origins or Apple browser ban

**Alex:** Oh man, can I dissent early in the podcast? I just, for all of my erstwhile friends and colleagues on the webkit team, I hope you know that no one thinks you’re evil.

**Bruce:** No, no, I exaggerate for comedic effect. The WebKit team who I’ve met have all been delightful and highly intelligent, good citizens of the web. And Tess O’Connor, their rep on the standards body is a friend of mine who does great work. However, the WebKit team are the WebKit team and they are not Apple management. Apple management, as you know, has decreed that the only browsers that are allowed on iOS and the iPad are WebKit-based. They’re basically skins over Safari-branded, skins over the Safari engine. Times have changed a lot.

The last beta, I think it’s iOS 16, has lots of cool stuff in Safari. There’s lots of declarative shadow DOM and web components niceness. Other browsers can add things to the home screen. They’re still WebKit, but they can add things to the home screen. It’s not purely Safari that can do that anymore. And regular listeners will know that I’ve been whining to regulatory bodies across the world for them to change this. Alex, you have, to my knowledge, not whined to regulatory bodies, but then you wouldn’t tell me. But I gather that you have opinions about the Apple browser ban. Do you have opinions?

**Alex:** Whatever would give you that thought, Bruce.

**Bruce:** Would you care to share one of your opinions with us?

**Alex:** I would just note that this is a form of market failure. You’ve had me on for one episode and now you’re having more. You clearly did not price the popularity of this kind of a sell, though. Do I have opinions? I like functional markets. I think markets work as a tool. They’re a terrible ideology, but a pretty sharp tool applied to some domains. Normally, when goods are actually substitutable, and the cool thing about standards that I think some of us have spent a lot of our careers helping to build is that they grease the skids for substitutability.

Interoperability is the baseline for lowering the price of things to businesses and to consumers and everybody else. And so to the extent that there is a socially defensible place for that kind of thing, it is in order to facilitate a true competition. And so when that competition is less than fulsome, when the break lines of choice are cut, then it’s much more challenging for progress to take on a competitive frame, and that slows it down. And so to the extent that I care about what’s going on with iOS, it is because our rate of progress has demonstrably slowed in terms of what the platform can offer. Part of that also pushes us back into heavyweight JavaScript frameworks on the client side because if the platform isn’t moving forward at a quick clip, you may not expect that the browser can do what you need.

Obviously, there are some intrinsic capabilities that are not just things you can paper over in JavaScript plan, but a lot of the reason that I think we piled into the JavaScript clown car, that there is a JavaScript industrial complex now, is that so many web developers, rightly or wrongly, lost hope that we were going to deliver real progress quickly through the platform itself. And so I kind of see these as connected or related questions, and I am keen to get us back to a place where the platform is iterated quickly.

**Vadim:** Bruce just mentioned before that Safari recently have changed its pace, and they’re moving faster, delivering more features, I mean, five to six years later, but still. And would you be happy or happier if Safari would be still, or WebKit as an engine, would be still the only available engine on iOS, for example, if they would move with the same pace as Chromium does these days, implementing the same features?

**Alex:** Would I be happy? No. Would all of us be less cheesed? I think yes, right? So there is a space, and the argument against Safari by many folks who make it, not against Safari, against iOS. It’s not against Safari, sorry, I should correct my language. The argument against iOS and iOS policies are grounded in the reality that WebKit has been a significantly lower quality implementation of the web platform for us to try to target as developers for, you know, I think 2013, 2015, somewhere in there.

And I maybe even might put it a little bit earlier, but it has been challenging to imagine that given the staffing of the WebKit team, that even the heroic individuals who can each carry the weight of five humans, I mean, they’re just being out-invested end to end, and that has all kinds of consequences. And so, to the extent that Apple is willing to create many more spots on the fruity bus for more people to work on Safari and WebKit, look, there’s kind of two aspects to this.

One is, would the status quo get good? What we see with Safari 16.4 beta is that yes, when unleashed, when unlocked, when given some more resources, not even as many as I think they definitely need, that team can do extraordinary things. At the same time, we also have now a yawning deficit of trust. So let’s roll back, if you will, with me in the stands of time, back to 2007, when Steve Jobs unveils the iPhone at Moscone Center.

I happened to be in the room for that. That was kind of surreal and tells everyone that the platform is web apps. Now, it’s actually a little unclear to me. I thought it was revealing core papers or discovery, that the decision had been made before the conference to move away from the web as the primary development platform. It might have been just after, “I need to go check my dates.” But it was not a plan that was long for the world.

And with iOS 2.0 introducing the App Store and 3.0 introducing push notifications along with the App Store, it was possible to make another browser for something like a dozen years. and for that browser not to be able to be the default browser. So that’s an anti-competitive behavior at the first moment. But it may have been explicable at the time because there weren’t a lot of other mobile browsers. We definitely hadn’t gotten around to building Chrome for Android at Google until 2013, 2014.

So there was a big window there where I think all of this was reasonable. And it was paired with WebKit being a leading browser. There was definitely a lot of momentum coming out of the obviously intense R&D period before the iPhone’s release. You may remember Safari dropped a whole pile of new stuff at the time. It dropped the home screens metadata, all per page, of course, but it dropped accelerated and composited transitions and animations, it dropped touch events, it dropped viewport meta information.

Just so many things that allowed you to adapt that weren’t there before.

**Vadim:** From my perspective, they just invented mobile browser.

**Alex:** They did a very large fraction of that. There were other folks who were pushing on it, specifically at Nokia.

**Vadim:** Even Opera.

**Alex:** Yeah, Opera, yes, of course. And so the original iPhone was a single-core 32-bit in-order ARM chip, I think paired to, was it 128 MB of RAM? Something like that. Or maybe less. I have to go look it up. It wasn’t a lot. So the idea of running multiple browsers at the same time concurrently seemed like a bad idea. Just for the code page savings alone, having a single engine made a lot of sense. Just the constraints of that environment.

We weren’t going to be able to bring multiprocessing and sandboxing to that. Apple hadn’t, and they didn’t for many years. And so fast forward to 2015, Apple finally cut spate and they start customizing their own chips. They really go to town with the iPhone 5S, with the first new chip. They skip 64-bit ARM, and then ever since then, they have been off to the races and they have been just expanding their lead.

Top-of-the-line iPhones are, by my estimation, something like two, two and a half years consistently ahead of the nearest competitor, depending on looking at multi-core or single-core scores from anything in the Android ecosystem. Then it’s just an astonishing lead in terms of performance, which means that those devices, they’re now paired with gigabytes of memory and, you know, verging on a dozen cores, all of which are extremely fast.

There’s no reason, from a resource constraint perspective, to continue the policies that were set under that old regime. So to address the deficit of trust, I think we definitely need browser engine choice, even in a world where Apple does eventually kind of come back up to par.

### The reasons behind the ban

**Vadim:** They did a lot of stuff to open their platform. First it was an app store, obviously, but then many years later they allowed email clients on the platform. Changing default email client, I mean. They used to be allowed as an apps, but they weren’t functional. But for some reason, they’re still holding to the browser. Is there a reason for that from your perspective?

**Alex:** There’s definitely one, but we can only guess. So if we deal only in the reasons that Apple have offered… So, Bruce, I think you mentioned obliquely that suddenly, regulators are starting to ask these questions themselves. And what that means is that now a lot of things that previously had been sub-Rosa, folks just kind of inventing things out of thin air about what Apple might be thinking, which I guess is a whole pastime.

Instead of that, we now kind of have arguments on the record from folks in Cupertino or the lawyers that they pay from white shoe law firms. So some of those arguments are related to security. And I can tell you that, you know, working on a browser, I would be stressed out about security. I think everyone should be stressed out about security.

The idea that security could potentially be imperiled by a bad actor who lists a browser in a store and then doesn’t update it when there’s a critical vulnerability is not an idle concern. It’s not a theoretical issue. But that doesn’t mean that the way it’s being addressed right now is the only or even the best way to address it.

So is there an argument there? Yeah, I think there’s a legitimate argument there, and I think we should have it out. Now, I will say, Apple has also not demonstrated that Safari and WebKit are the most secure browsers. And so this leaves the other opening, which is to say, engines with an even better reputation are not available on iOS today, which probably isn’t great for iOS users.

And so the best that you could do would probably be from an end-to-end mobile security perspective is to get an iPhone with a modern Chromium runtime on it and hope you do most of your browsing there. That would be pretty good.

**Vadim:** One would argue that having multiple engines and multiple vectors of attack on a single platform is worse than having just a single one?

**Alex:** That’s a theoretical problem, yes. But again, if I move most of my browsing over to the browser that I prefer, like my default browser, and it doesn’t have a problem, the fact that the OS default one might have a problem is often an issue for things like web views, but Apple will pay no more or less price in order to improve that. Now, the other example going the other way is to say, “Well, maybe there’s a bug that WebKit doesn’t have, but these other browsers do.”

And at that point, I think the reputation of browsers is important. This is a key marketing issue. We all market about security. And I do think that there’s recourse. For instance, you can imagine all kinds of policies. I don’t want to invent policy for anyone, but we have statistics now. The Product Zero is publishing them about patch gaps or delays in doing this stuff. And it doesn’t have to actually be that woolly.

The US government has started to put in place standards for critical software, and browsers are considered to be critical software. And so you could simply say, maybe there is some class of vendors who are going to sign up to and be judged to be in compliance with these critical software guidelines and some who are not. And maybe that should ring fence who can make this critical software for your users. That doesn’t seem absolutely implausible to me.

So there are lots of ways that creative policies can be built to try to understand and manage for these risks, but I would always suggest that when it comes to security, the evidence of a single bug is not the game. The thing that’s important is your structural orientation towards risk. And so, for instance, Apple through WebKit have been slower to patch many bugs over the years, their patch gap has been larger, their rollout time from when things actually hit the source code repository is largely because it often involves an entire OS update.

Even if you were to take the point that we will now have potentially a larger number of exploitable issues in the system, the fact of more aggressive sandboxing for Chromium and, to a lesser extent, Gecko has already proven valuable, and the choice has already proven valuable in other operating systems. If, for instance, something was terrible about Chromium On Windows, folks can move their browsing over to Firefox in the interim while we get stuff sorted out.

And so the monocultural alone heightens the potential exploitability and downside risk to any security issue that is discovered in WebKit today. And so while I take the point, I think it’s important that we kind of keep all of the aspects that frame someone’s risk posture in view while we’re talking about this.

**Vadim:** Are browser engines somehow regulated on Android, controlled in any way? Or you can just ship anything you want?

**Alex:** I mean, you can ship what you like, but that doesn’t mean anyone has to use it.

**Vadim:** I mean, in terms of the platform, some rules, regulations, or security concerns?

**Alex:** I’m not up to date with the latest for what Android is doing here, but I will say that security is something that app stores, to the extent that they have a legitimate place in the software landscape, are important to help manage. The point of an app store is not to be just a knockoff search engine. They kind of do that, they are just kind of knockoff search engines, but it is also to provide some sort of management of the risks that are inherent in native apps.

Like, browsers are a form of native app. They are an expansionist form, of course, but they are just another form of native app. And native apps are extremely scary. One of the best things you can do for security overall is to move your computing out of native apps and into browsers. And so app stores are, at that level, kind of a different way of getting at the same thing, in theory, where you put up a big “Deware of dogs” sign up in front of the store for developers, and then hopefully they don’t do bad stuff, and then you apply some spot checking to see if it works.

Everyone who runs an app store will tell you that they do “Sophisticated static analysis” and blah, blah, blah. And so the threat is delisting. The threat is not that you will be caught. It is that once you are caught, there will be a recourse. And that can be just as true in browser land as it would be for any other class of applications. So to the extent that the app stores are doing anything important for user security, no one is offering to take that away. There would have to be some accommodation for browsers.

But I assume that on Android, they’re paying attention to reputation ratings and security reports and discussing those things with vendors. Again, I don’t know and I certainly don’t recall how those details work, if I ever knew, which I don’t think I did. But yeah, so that’s the role that App Store can play to help improve the security posture of the industry. If they’re doing it, that is.

**Bruce:** One of the things with my open web advocacy hat on here, one of the things that I shall be talking with regulators about, is the idea of a trusted browser policy, whereby you can’t be evil.ru and just make a Chromium browser and stick it on the iOS app store and then let it rot on the vine or suck up information somehow that a trusted browser could go in the app store if it were, you know, from a large vendor, one with a proven track record, etc.

So that would require a regulator to basically tell Apple to come up with some criteria. It’s hard to know how that would work. For listeners, we’re recording this on Sunday the 5th of March, so I’ll be talking to the EU on Tuesday and the UK regulator, the CMA, on Wednesday about this. But I have to admit, the details of this policy are mysterious to me because cleverer people in our organisation have come up with its idea, but it seems to me a workable idea. The devil, of course, lies in the details.

**Alex:** Absolutely.

**Vadim:** I wonder what’s the difference between desktop and mobile in terms of allowing different kinds of browsers. I can definitely see how these platforms are regulated differently, but I don’t quite get why it is so. Is it possible to have different browsers on macOS just for historical reasons? Or the way people use and the way people interact with their interfaces on mobile screens, for their personal devices is different from desktop? What’s the reason for that?

**Bruce:** I think personally that there is a difference between desktop machines and mobile devices. And it’s to do with the amount of personal data that’s on your mobile device. I mean, I’m a really bad mobile user because I just use it for phone calls, texts, and the occasional tweeting. But I know some of a glamorous millennials like Alex, for example, will have their Fitbits tied up to their mobile device and it’s pumping down loads of personal data.

And we all know that in the Apple health kits, there is a setting for, um, measuring rectal behavior. For example, you wouldn’t necessarily want somebody to be able to get that information, you probably don’t record much data, much data about your rectum on your desktop device, but your mileage may vary Vadim.

**Vadim:** I see. So like, uh, for example, Apple Watch is on my hand. Uh, it means that it’s super personal and desktop is I use it for, for work. And it’s far away. But why would browsers be regulated in different manner on different platforms? Like if you compare Windows to Android, I know it sounds weird, but still, uh, they have the same freedom in terms of browser engines, but not in Apple case.

**Bruce:** Well, I can’t speak for why Apple would wish to, uh, regulate what browsers can go on their devices. I can hazard a guess and it’s called a very, very large pile of money they get from the app store. Don’t get me wrong, I’m a big fan of very large piles of money. I’ve never seen one. I’ve never certainly never owned one, but I believe that it’d be quite a nice thing to have.

I don’t know that there is a governmental or even a regulatory role in policing exactly which browsers can go on devices. but there is a regulatory role to say you, as a vendor, cannot determine which browsers are allowed. But Alex is the guest, so Alex, what do you think?

**Alex:** Well, I do like the idea that you raised earlier about the kind of thing. I think I mentioned about, for instance, aligning with national policy by critical software to try to make sure that the risks of browser choice are mitigated effectively, because the browsers do need extremely deep access. I don’t think you can make a good browser without a presumption of access to basically everything on the system.

If I just think about the way Chrome, Chromium, and Edge are built for Windows, the bag of tricks is huge, or the way Apple uses internal APIs on Safari to improve power use. The bag of tricks is massive in the browser because we’re building a meta-platform, and it is a historical oddity. Maybe to get to your point that browsers are so effective As a meta platform, Java didn’t make it on the client, and Flash had its day, but here we are.

There was, of course, Silverlight, I guess, for a hot second. So there’s a long history of meta platforms not surviving, and the web is unique and special in a couple of ways. The first is that it’s standards-based, and so it has multiple implementations, which I think has helped its resilience, and the second is that it’s designed to be portable, it’s designed to have that interoperability, again, facilitated by standards.

And that has meant that it is more durable and browsers have grown to do many more things over the years. And so as they grow and grow and grow, I think if you’re an OS vendor, it’s right and proper to think of that as being a risk. So yeah, it’ll be interesting to see where that goes. I don’t have a pat or easy answer, but I can tell you that it’s not fully spurious.

I do think I would take it as a critique or a reason to do one thing or another a little bit more seriously if the people offering the critique were the ones with the best track record, though. There’s a real push and pull there in the conversation.

### Browser engines preparations

**Vadim:** Bruce, I think you mentioned somewhere on Twitter that you were building Chromium for iOS on your machine during the weekend or something like this. I wonder what is happening right now with those engines preparing for a big decision that might happen soon. Do you think it’s actually going to happen or it’s going to be a half a measure and browsers will be limited compared to Safari?

**Bruce:** Well, we know that Firefox are actively working on a port of Gecko, the real Firefox rendering engine to iOS. This will be their third attempt, perhaps even more that we haven’t heard about, but they have demoed it twice before. This is the third time. We’ll put it in the show notes, but I think on Friday, the Chrome team, or A-team inside Google, put a repo up there with some detailed and frankly incomplete instructions on how to build it for iOS.

I say incomplete. probably complete, but I have a mental block when it comes to doing anything with Xcode, because it’s just horrible, isn’t it? Xcode is just horrible and nobody should have to do Xcode. But nevertheless, yeah, there are some Xcode tricks you have to jump through that I haven’t managed yet. But yeah, the repo is there. And I have seen Chromium. It’s not Chrome, It’s chromium with no real UI, but I have seen it running on a on an iPhone. Yeah, I’ve witnessed it.

It is blazing fast I’ve actually you know, I I have tickled it with my own digits. I’m waving my digit listeners I should probably never wash this finger again Because this finger has controlled chromium on iOS. It doesn’t have JIT, but it is amazingly fast and when you go to how Fugu is my browser it has a great many of the Fugu API’s already hooked up.

Not all of them. I can’t remember which ones are not but it’s really fast I can’t speak for its stability because I used it for about 45 seconds until its owner went “that’s Google property, stop it!” and it’s obviously a proof of concept rather than a product Now it reminds me of those builds we used to have in opera Do you remember them Vadim when we had like new new builds of presto, but there was just a minimal UI I forget what we used to call them, but it was basically that but yes, it’s running.

It’s super fast and it is Chromium it’s not yet chrome or or edge or brave or Vivaldi It’s chromium. But yeah, it’s running and if I could manage to say the correct incantations into Xcode, or when I do, it will be running on my test iOS device.

**Vadim:** To me it looks like journalists preparing two press releases for victory and failure at the same time, just in case. To me it doesn’t mean anything right now, I guess, or maybe the situation has changed. Maybe there is something in the air.

**Bruce:** I must admit, Vadim, that when we started our valiant crusade to whine incessantly and regulate us until they told us to shut up, I did worry what would happen if we won. And the regulators said, “Yep, you can have other browsers on iOS and Google and Microsoft.” And Edge went, “Yeah, no, I don’t fancy it actually.” And then nobody actually built of the browser, that would be a pretty hollow victory.

So it is kind of encouraging to see our friends in Firefox and Google actually porting their browsers. Whether, of course, they release them or not is, who knows? It would be kind of weird that they’ve got Chromium-branded web, Chrome-branded webkit, Edge-branded webkit, Firefox-branded webkit on iOS and then didn’t put their own real browsers on there.

But certainly the Google people don’t keep me in the loop. And Firefox management have a long history of completely mad decisions that make no strategic sense at all. So there’s no reason to assume that they’ll make sensible decisions going forward. What about you, Alex? Are you busy compiling Edge on iOS, somewhere in your volcanic lair?

**Alex:** I mean, I have a Mac. I haven’t dusted it off for this purpose recently. But the content shell port, which is what this is referred to in Chromium Speak, is its minimum viable browser, right? It’s not a browser per se. It barely has a URL bar. It has maybe a back and forward button, I don’t remember. But it’s almost always invoked under the test runner. So content shell is the thing that we use to run all of the web tests.

So if you’re going to run Web Platform tests, they’re going to run basically in Content Shell. And so I’m extremely excited to see how much energy is going into this bring up. I don’t know what the eventual disposition will be, but the way I read the CLs, the patches coming through, the folks working on it are not junior. These are seasoned people that you would want to work on a port. And the riskiest parts are getting attention first.

**Bruce:** What do you mean?

**Alex:** Things like process, model, and graphics.

**Bruce:** Would Microsoft release Edge for iOS on Chromium?

**Alex:** I have no idea.

**Vadim:** But would it make sense?

**Alex:** Would it make sense? Look, we want to bring our best browser to every operating system, and a lot of our business users carry iPhones. We’re not able to do that today. Our best browser is reserved for Android, and so that’s uncomfortable. There’s features of Edge that we can’t deploy effectively, or that we have to rebuild in an expensive and less tested way. And then there are platform capabilities. Bruce mentioned Fugu.

Full disclosure, I used to help lead up the Fugu project to Google. But those capabilities matter a lot to our web properties, and so, in a variable way, they don’t all matter, at least not equally, but many of them are important in terms of being able to deliver a capable set of apps to users who use them, incidentally, maybe, on the web. So would we? I don’t know.

I’m certainly not going to break news here, ahead of the rest of the team, but I can tell you that it does not seem to me like it’s out of alignment with things that we care about. I must admit, yeah, I hadn’t joined those dots, but given that a great deal of Microsoft’s revenue comes from corporates, and a great deal of corporates wield iPhones, it would make sense.

**Bruce:** I suppose so Alex, I mean you’re only two promotions away from CEO, so you could always like kill your immediate boss and Become CEO and just make this happen. Listen as he is polishing his gun as we speak

**Alex:** It may be aimed at you Bruce.

**Bruce:** I kid you not folks to the best of my knowledge Alex has never committed a homicide.

### Possibility of malicious compliance

**Vadim:** I wonder if there’s a possibility for a solution on Apple’s side that won’t be as useful as we’re currently thinking. Like for example they would allow different browser engines but it won’t be that useful. Performance wise it would would be worse than using just a wrapper around WebKit?

**Alex:** It’s always a concern. The way iOS is locked down is through a series of what they call entitlements. And the way iOS entitlements work are that Apple has to grant them. These are checked in the kernel. For instance, the reason that WebKit is the only engine today that can do multi-process is because it’s the only, I think it’s maybe the only binary in the system that’s allowed to create a sub-process. And that’s critical for sandboxing.

So could we get to a place where Apple will allow other browser vendors to create sandboxed subprocesses with their own stronger sandboxes? So for instance, on macOS today, Edge uses a stronger sandbox than the default OS sandboxing would normally provide. And I think over time, it may not be today, I haven’t looked recently, but those policies have been stronger than what we thought was provided to Safari and WebKit.

We’d like to be able to differentiate in all of those ways, and it will be hopefully not too hard a slog to get access to all of the necessary APIs that are critical to making a competitive browser in the year 2023. But could there be trench warfare over each of those APIs? Apple has shown a history here of malicious compliance about every step towards a more open, less extractive iOS being challenged tooth and nail.

So I certainly hope that’s not where we go. I certainly hope that the idea of safe browsers, maybe with the policy that Bruce was alluding to, to kind of backstop for some of those risks, creates a space where we can actually just go and take the best versions of our browsers and compete on a level playing field. I think that would be best.

**Bruce:** I agree with Alex and he mentioned a malicious compliance to me a little while ago. And it’s a great phrase because it does perfectly describe what could happen. But we know this, and certainly I can only speak for OWA, but in our meetings with regulators, and this is US, Japanese, Australian, EU, and UK regulators, we have stressed the history of malicious compliance.

And regulators aren’t fools, you know, I mean, they’re not necessarily technical people, but they are economists and lawyers and malicious compliance can happen in all sectors that are regulated, not just IT. And certainly in the case of the UK regulator with whom I’ve had the most conversations, they’re certainly brainy enough and switched on enough to make sure that if they do regulate that they would write the regulations or enforce the regulations in a manner that would make it much harder to do malicious compliance.

So I think if regulators do require Apple to open up iOS, um, within certain territories because obviously the UK cannot regulate the EU and the EU cannot regulate Japan etc. If they require it to be open I don’t see that as a real risk. I can imagine Cupertino dragging its feet, answering emails very late, you know, maybe forgetting to open their post if they get questions, but I can’t imagine them actually breaking the rules.

The DMA, the Digital Markets Act, which comes into force. Well, it exists now in the EU, but there’s a grace period for gatekeepers, they’re called, and that includes Google as well as Apple. There’s time for them to comply with or be enforced, but if you do not do what the the MA says, which is you cannot do self-preferencing, the fine is 10% of worldwide turnover.

10% of Apple’s worldwide turnover, that is even more than Alex’s salary. That is a massive sum of money and repeated infractions of 20%. I can’t believe a lot of companies will look upon regulatory fines as the cost of being naughty. I can’t imagine any company seeing 10% of its global turnover as being a cost of being naughty. I can imagine that being a real deterrence, but then I’m not an economist. Do you broadly think that’s accurate, Alex, or am I talking out of my English bottom?

**Alex:** Regulators have a history of being quite gun-shy about levying any kind of penalties. So, you know, the potential for that seems, I don’t know, interesting. I can tell you that I would be terrified. CEOs have been turfed out for less in terms of revenue loss. So, you know, there’s a… that’s at other companies. That’s not at Apple. Apple is pretty generous as far as as anyone can tell.

So the Dutch experience with regards to dating apps and the fines that had to escalate before that turned into the kind of action where they graciously charged only 27% IP licensing fee versus the 30 that they took to their own in-app payments service. Those are examples that I would suggest should leave us with less than fulsome optimism. Gosh, I don’t want to keep blogging about this. This sucks. This is not how browser engineers should be spending their time, right?

**Bruce:** Yeah, I agree with you. It’s like, I want to whine at different government agencies for a couple of years. Or maybe it’s like, not whine at all.

**Vadim:** Is there a sort of a timeline or a deadline for this process? Or it could last for ages?

**Bruce:** It could last for ages, but the DMA will be in force. I think it’s the middle of next year. They will actually start biting people. And to those people who think that’s really slow, well, that’s 15 months away. I’ve seen web pages with a cute kitten sitting next to the pair of shoes they’re trying to sell take almost 15 months to be made and go live, so opening up an entire…

**Alex:** I’ve seen them take almost that long to load.

**Bruce:** Yeah. So actually re-engineering your entire OS, I think we can allow people a bit of a grace period. With the UK, I don’t know there’s a time period. I do know that the UK government is bumping up the priority of the legislative framework that will give our competition regulator more statutory authority. But it has been delayed several times now.

It has been delayed several times, but for listeners who are not in the UK, our government has long been a cesspit of dysfunctional folly, so everything’s been delayed lots of times. But it’s looking faster. The Japanese government, I have no experience of how long it takes for them to do stuff, but they’re certainly making all the right noises and talking regularly to the UK and the EU and Australia.

The states, of course, who knows, because the states will regulate, it’s far more important in the US to regulate what women can do with their own bodies than guns or browsers, so who can possibly know what’s happening over there? But sorry Alex, bit of politics there folks. But yeah, it smells like changes in the air.

**Alex:** Well I credit you and your merry mates for the diligence and continuing to brief regulators worldwide. You’ve been busy.

**Bruce:** And I credit your angry and voluminous blog posts, Alex, for that. So I think I think death by a thousand footnotes is what has happened to most regulators. I kid you not, folks, if you’ve ever really enjoyed TS Eliot’s Wasteland for the footnotes, you’ll like Alex’s blog posts. They are a veritable modernist smorgasbord of footnotes.

I didn’t expect to be saying the word modernist smorgasbord at 8pm on a Sunday evening. Well, it feels like maybe I should let you go. into the Modernist Smorgasbord sort of hallucination. Well actually I was just thinking Modernist Smorgasbord could be the great name for my next album. I liked it. Thank you.

Yes we will let you go Alex because I know it’s Sunday so you will be doing whatever they do in the States. Hunting some deers and having a barbecue or something. And for Vadim of course Sunday evening in Berlin it’ll be massive quantities of drugs and rock and roll I assume.

**Vadim:** Sounds about right.

**Bruce:** On that note, we want to say a great massive thank you to sinister mastermind Alex Russell for Ambushing him for two episodes when he was only going to do one a massive apology to Francis Berriman, his lovely wife, for depriving her of his time and company this weekend.

**Alex:** Mostly tea. It’s tea I didn’t make so I gotta get back on it.

**Bruce:** In great seriousness, I want to reiterate what Alex said before, none of the stuff we’ve said is meant as a criticism of the fine folks on the WebKit or the Safari team, many of whom are friends of ours or colleagues who do a great job. As you’ll have heard, a lot of the discussion has been about management, politics and lawyers. We lay the blame squarely at Apple management and the Safari team, as far as I know, have no control over that. So, thanks for listening, thanks for coming Alex. See you next time on The F-word.

**Vadim:** Cheers!
