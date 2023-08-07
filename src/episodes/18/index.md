### Intro

**Bruce:** Hello and welcome to The F-Word, the magical world of web standards, browsers, the internet and everything in between. I’m Bruce Lawson, speaking to you as always from sunny Birmingham in the United Kingdom.

**Vadim:** I’m Vadim Makeev coming to you from Berlin. It’s very sunny here, very hot. 27 degrees already.

**Bruce:** Ha! It’s 30 here, Vadim. You guys don’t know you’re born. And talking of hot, we have another guest this week. The hottest cat who looks a bit like Mark Zuckerberg but isn’t a fascist, in the tech world. Of course, friends, Romans and countrymen. I give you Mr. Jake Archibald. Hello, Jake.

**Jake:** Hello! I’m glad you don’t think I’m a fascist. That’s probably the nicest thing you’ve ever said to me. But I’ll take it because it is true. I want to be clear. It is true.

**Bruce:** You are not a fascist.

**Jake:** Yeah, it is. It’s 30 degrees down here as well or whatever it is and I Had the window behind me open because air is nice, but the neighbors children are playing loudly Which is fine. Like I said, I’m not a fascist, but it means I’ve had to close the window. So I will yeah be sort of losing my energy through throughout the next few minutes as I just sit here and just Ride out the room on a wave of my own sweat. So there’s something to look forward to.

### Cats and View Transitions

**Bruce:** For our regular listeners, you should know that we can see each other on video. So basically I can see if that even starts yawning or anything But I can see there’s a large black cat behind Jake draped on the windowsill So yeah, I assumed you closed the window because didn’t that critter go missing during the lockdown?

**Jake:** That is the one there. Yeah, we have two that look the same and that is but yes, that is that is the tree one He’s far too fat to climb trees now That’s it We kind of we figured out was that that was the best way to stop him climbing trees is feeding until he’s fat But he is yeah, he’s suffering in the in the in the temperatures The reason he’s giving me the evils here is he would normally lie just behind my keyboard He keeps me company, but that’s where the microphone is. So he feels like the machine has taken over his bed. So this is a passive-aggressive thing you see behind me.

**Vadim:** Yeah, we’d better keep this episode short.

**Bruce:** Yeah, yeah. What actually happened to your cat? Didn’t it disappear for days and he got stuck up a tree and the fireman had to get him or something?

**Jake:** Stuck up a tree for six days, yes. We went through emotional turmoil thinking I had lost the cat until we kind of even decided, there’s a cat gone and died and whatever and because I thought I could hear him from a Bedroom because there’s a kind of cemetery in a woodland area and so at nights like on a still night I would sort of call to him and I felt like I could just about hear something and turns out I could thought I was going going mad at the time and yeah this is what I like we’d given up just about given up ever seeing him again and I went into the woodland for at the tenth time and finally just sort of heard some noise and then looked up and saw two, because I had the torch at the time, two little glowing eyes looking back at me. Little prick. So yes, we had to… What’s the rule on swearing in this podcast? I mean, it is The F-Word. Well, I suppose you have censored the name of it though, haven’t you?

**Bruce:** No, there were no rules on swearing. Well, you have to do it in English so I can understand it.

**Jake:** That’s good. Okay. But then, the fire brigade came out and Set some traps for him and then after six days he decided nah he just had enough and made his own way out of the tree. Waste of everyone’s time really.

**Bruce:** Well talking of waiting a long time for something. The reason we got you on here isn’t because we like you because evidently we don’t.

**Jake:** But not a fascist. You hate me for different reasons.

**Bruce:** Not a fascist, yeah. I want to emphasize that. That thing you said to me in the pub that time. Talking about waiting for ages: View Transitions. This is a spec that’s got me very excited. Every spec gets Vadim excited, but he’s a geek. But I just look at the world very jadedly and go, meh. But actually, this thing is dead exciting. And you invented it, didn’t you? Or you’ve been its midwife, its doula.

**Jake:** Well. It’s a team effort, Bruce, right? But it was something that I’d been trying to persuade the big Google house, Chrome specifically, to take seriously for about five years, if not more. Yeah, that was, it was hard work. Uh, but eventually they, they did go, okay, maybe, maybe we should listen and, uh, put a team together. And so yeah, my part in it was, was kind of feature design and spec writing, but yeah, along with others, it’s not just me.

**Bruce:** Yeah. Like, yeah, yeah. The specs get punted around by loads of different people and then loads of C++ minions actually write the stuff, but yeah. All these things need a champion to get them going, and I suppose that’s you. If you want to, you know, big up somebody else’s well, feel free. I just haven’t paid that much attention.

**Jake:** Maybe some people wouldn’t know, but I left the big Google Castle. I know, yeah. Like, did a resignation all over the place. And then, yeah. And so, depending on when this goes out, I’m either between jobs, taking a nice break, or I am an engineer at Shopify joining my old pals, Jason and Surma and a bunch of other people as well.

So yeah, in terms of like championing View Transitions, of course I’m still championing it in spirit, because I, you know, still want it to, because there’s still lots of work to do there. And I know they’re still working on it, and I hope they do a good job of it. But it’s not not me directly anymore. Just me complaining from the sidelines.

**Bruce:** That’s my favorite place to be actually because you can piss and moan but actually you don’t get the blame.

**Jake:** Well this is this is kind of how my Google career started as well is because I was pissing and moaning from the sidelines about AppCache 10 years ago and yeah that’s that’s a lot easier and then I joined Google and they went 'right well you’ve created an uproar now it’s your turn to fix it' which you know became service worker so yeah that was I can get I can get back to just shitposting now, which is much easier.

**Bruce:** It is. So for the uninitiated, given that we don’t have recording the audio and there’s no video, so you can’t wave your arms around, tell us what View Transitions is, if you don’t mind.

**Jake:** Right, yeah. So it’s basically page transitions. So let’s say you’ve got a bit of an interface that says the name of the player or the user or something. And at some point it’s going to change from logged out to Samantha or whoever is now the name of the person logged in.

Typically on web development, if you’re a low-level, non-frameworky person, you’re going in and changing that text node or whatever, or if you’re a frameworky person, you’re doing the React thing where you’re re-declaring what the tree should be, and the word in that node is different, but under the hood, React is going to go in and change what’s in that text node.

So over in native apps, a lot of them have these nice looking transitions from one state to another, things slide around, zoom in, zoom out. It looks fancy, but I think it has purpose as well if they’re designed well because it kind of shows you, you get an impression of the structure of the app, something sliding in from the side, if it’s kind of zooming up from the bottom, depending on the kind of menu it is.

**Vadim:** So when my PowerPoint slide goes up in flames, it’s transition as well.

**Jake:** Exactly, yeah. Obviously, that sends a particular message depending on the content as well. But it’s like, “Why can’t we do this on the web?” Because if you’re working in a framework in an SPA kind of environment, sure, you can do what you want.

You can do a crossfade, slide things around, but people still don’t tend to, and the reason for that is it’s actually really difficult because even just a crossfade, you’ve got that state in the middle where you’re going to have both the logged out text and the user’s name, and they have to both exist for you to do even something like a crossfade, but also things like a slide.

So then you’ve created this extra state in your DOM, which is complicated just in general, but particularly complicated in terms of accessibility, because now you’ve got both bits of text there, that’s something a screen reader could pick up on.

If you’ve got interactive parts in the outgoing bit, then the stuff that is notionally going away, that is now clickable still as it’s going away, One of my favorite things to do on, well, not just web apps, but also native apps that have a transition is like, “Can I click that button twice?” Quite often you can, and you can crash the app or create some very, very strange state.

So what we did was, rather than have this system where you have both states alive at the same time, what if we could have, it wasn’t the DOM that was duplicated, but some extra _thing._ So the outgoing thing, it wasn’t the DOM you were animating, but some kind of view of the DOM. So you could just have that single change in the DOM, but the animation was done at some extra level.

And all it took was some clever browser engineers to think that up and go and put it in a browser. And those people were Microsoft, because they did a very similar thing in IE4 back in 1997 or wherever it was, they had this meta element you could put in the page that would trigger a transition between pages.

And it’s a good idea because you don’t have that duplication of DOM during the transition. So we kind of essentially took that concept and thought, well, can we make it do cleverer things? Can we take it through a web standards route? Can we make the animations customizable with CSS? And it turns out, yes, we can. And yes, and that’s View Transitions.

The cat has now jumped up on the desk and is looking very unhappily at the microphone. So we’ll see what happens.

**Vadim:** We have another guest.

**Jake:** Yes, absolutely.

**Bruce:** Don’t worry, Jake. Our listeners are not the kind of intrepid warriors to be put off by the sound of a cat growling into the microphone.

### Design and inspiration

**Bruce:** Interesting because we were talking with Thomas Steiner a couple of editions ago and Vadim was Generally mocking him that half of the things that Fugus tried to do were in IE4.

**Jake:** Hey, and then the other half will be in Flash, right?

**Vadim:** Yeah.

**Jake:** This is where we’re at. We’re still solving some of the problems that Flash solved a long time ago. And in fact, I guess I haven’t really made this connection before, but Flash had this thing where you could take what’s there on the screen and, because obviously Flash is all vector-based, similar to a lot of stuff in the browser, but you could bake it onto a raster-based, let’s call it a canvas, why not call it a canvas, because that’s what the browser equivalent is.

But yeah, you could take what was displayed, bake it onto a canvas, which would let you do similar things. You could take these interactive elements, bake it onto a texture, into a canvas, and then you could move that around, whereas you’ve changed the stuff synchronously in the background, but you’ve got this thing that you can involve in a transition. So yeah, once again, we’re just filling in the blanks that old IE and Flash created when they went away.

**Vadim:** Speaking of influences, I remember at some point when Apple managed to develop some bit more powerful hardware, they started to animate iOS interface And I saw a video of such transitions for the first time, slowed down three or four times. And it was obvious that they’re taking screenshots and then morphing it. And when you look at it at a slow speed, it’s super ugly. But when you look at it at 1x speed, the actual speed of animation, it looks beautiful, like they’re really transitioning from one state to another. Is it the same thing that’s actually happening for View Transitions? Have you looked at transitions at slower speed?

**Jake:** Yes, yes. So it’s a very similar thing because the outgoing thing is essentially a screenshot that is being, as an image, moved around, stretched, if that’s what you choose to do. But certainly rotate to transform all of that sort of stuff from its old position to its new position. The new state is a live screenshot, so you’re still playing around with what feels like an image, but if the underlying thing updates, then your screenshot is updated as well.

But yeah, we took a lot of influence from… I can’t remember what the Apple system is called, but the Google system, the Android system even, is Shared Element Transitions, which was also an earlier name for the thing, only because there was nothing better there. I didn’t like the name at all, but it was kind of like, my view was the name is the last thing we should look at, right?

Let’s design the thing, because once we design the thing, maybe the name will become more obvious. So when I gave my first talk on it last year at Google I/O online, it was a pre-recorded talk, but I called it Page Transitions, simply because I don’t want to say Shared Element Transitions, but basically because you’re not animating the elements themselves, and the elements are not shared in any way.

It was just the wrong name other than it was similar to the Android thing with the same name. But yeah, we sat down and thought, “What is it about this system that is different to animating elements around?” And it’s like, “You’re not animating the elements, you’re animating a view of. So there we go, that’s how the name came about.

**Bruce:** So it’s not the platonic element, It’s like the fire shadow in the cave of elements.

**Jake:** Exactly.

**Bruce:** So, yeah, I mean, names are important because it’s not shared and it’s not elements. But View Transitions, does that mean that the purpose of this spec is largely cosmetic? It’s to sexy up stuff? And I don’t think there’s anything wrong with cosmetic.You know, if it makes things feel nice of a punters and makes web developers want to use web rather than native, that for me is a goal in and of itself.

**Jake:** It’s entirely cosmetic and that’s the benefit of it. When you try and do this stuff yourself, you end up having both the old state and the new state around the Nodama at the same time. Now you’ve got a thing that isn’t cosmetic. A screen reader can see it, you’ve got things that can receive focus, things that can be clicked, you’ve created a behavioral difference.

So very explicitly, the idea is to create a cosmetic difference. That’s not to say that it is just like, you know, fancy visual shit. It’s like the idea is that you can communicate, you know, if something slides in from a particular side, that can mean something versus it sliding in from the bottom or the right or wherever. So yeah, this stuff has a purpose in terms of user experience beyond just pretty stuff. But yeah, the effect is deliberately cosmetic.

**Bruce:** It’s baked in, you don’t have to think less, which I thoroughly approve of, particularly in 30 Celsius, but also the more you have to think, the more there is to get wrong, the more there is to accidentally get wrong when you’re copying and pasting. It’s more gatekeeping for junior devs if there’s necromancy just to slide something in.

But it also occurs to me that it’s the kind of thing that in websites, which I believe cool kids are now calling “multi-page apps” and I’m calling them sites, you could actually make things look less website-y and more web-app-y because things are transitioning rather than refreshing. And that could be a great way to at least discourage people from whacking great big SPAs when they could just use a website with some View Transitions. Was that a goal or am I just overthinking that?

**Jake:** Yeah, it really is. I mean, a lot of the stuff that I was interested in and working on standards-wise through my time at Google was about closing the gap to what other platforms can do. If it was to do with performance or something native can do, I was interested in it. Yeah, this was a big part of that. It’s like, can we make web apps feel more like native? And I think these transitions are a key part of that. Like I say, it’s something you could do already in an SPA if you worked at it hard enough, but no one does because it’s just too difficult.

**Vadim:** You mentioned that your role in this spec and this feature was one of the roles was feature design. And how many iterations did you have? Well, as far as I see, at least two, but maybe there were more.

**Jake:** Yeah, it’s difficult to call because there wasn’t… There never felt like a point where it’s like, “Oh, that’s an iteration done.Let’s all go home for the weekend and we’ll do the next iteration next week.” But it was definitely an evolution. A lot of it was kind of coming to a realization that we wanted to make sure we were just enhancing a DOM change. It’s a lot of stuff that feels obvious, speaking about it now, but it took a lot of back and forth at the time.

So when you create a View Transition, there’s a method, a callback you give it, and that’s where you do your DOM change. That lets the feature know, “Okay, we’re currently in the before state, capture everything. We’re now in the after state, we can capture everything.” So knowing that timing, the callback is part of that. So for a while, we didn’t really know what to do if we knew that we couldn’t create a view transition or if you had explicitly skipped the view transition before that.

And that’s when we came down to it, it’s like we always need to call this DOM change callback because even if we know we’re not going to do a transition, a transition is wrapped like an enhancement for a DOM change, we still want the DOM change to happen. So little bits of the API drop out of that. You’ll typically be calling these objects once you create them a transition or a view transition, and then if you want to skip it, it’s.skipTransition, which is something we generally wouldn’t do in API design because it typically creates a tautology, right?

You know what you’ve got, you’re calling skip on it, but we want it to be really explicit that you were just skipping the transition, you are not skipping the DOM change, which you have provided to the view transition thing. So a little bit of that came out. But yeah, we did a few little focus groups or whatever, where we just showed bits of the API to people and said, based on this method name, what do you think it does? What do you think it does in these various states, cases? And we changed the API in response to that.

And also the CSS Working Group had a good hand in it as well, particularly around naming, actually, the CSS Working Group were great. But whenever we had an instance where internally, we didn’t have strong agreements, like we disagreed on something, we were just able to take it to the CSS working group and say, “Look, we’ve got these three ideas, which is it?”

And quite often they’d come up with a fourth which was better than our three ideas, and off we went. So, yeah, it felt pretty collaborative, not just inside Google, but also with between the other browsers and other folks at the CSS working group as well.

**Bruce:** I also like the way that, you know, because it’s web and you’re enhancing stuff, So it uses CSS transitions or CSS animations, doesn’t it?

**Jake:** Yeah, so that was a tricky part of the naming, is it’s CSS animations. And that was another thing that kept getting brought up in the naming. It’s like, does it make sense to call this “few transitions” when the feature actually uses, by default, is CSS animations?

And yeah, we went back and forth on it, and we just thought, “Oh, look, if you ask anyone what this is, they say, like, if it involves the whole page, they’ll say it’s a page transition. If it’s just a part of it then it’s like a you know, it’s still a transition conceptually.

**Bruce:** Oh, it’s evidently, it’s evidently a transition but it’s more I’m enjoying the fact that we’ve got all these part of these Lego bricks (other plastic building bricks are available) In in the specifications that we can you know… we didn’t design CSS animations with a view to View Transitions in the future but because they were designed well, they are plug-in-able.

**Jake:** We didn’t have to reinvent that bit of the wheel. Yeah, and when it came to the DevTools, the actual view transition parts, these screenshots, they all live in pseudo-elements, which is how they don’t mess too much with screen readers or certainly shouldn’t if everything’s working correctly.

So in DevTools, we already have ways of exposing pseudo-elements. That’s how you can style before and after. So, okay, we’ve already got that part, And it was like, “Okay, what I’d really like is to be able to, when a view transition happens, to be able to debug it, to be able to pause it and maybe scrub through it.” And someone on the team said, “Well, we already have that, but not for View Transitions, we’ve got it for just all animations.”

And it’s like, “Oh, I never noticed that panel before, but oh, that’s perfect, we’ve already got debugging tools because we haven’t invented anything incredibly novel.” That was always the plan. But the idea of using pseudo elements for storing all of this stuff, I can’t take any credit for that. That was Kushal on the engineering team said, why don’t we use pseudo elements for it? And that kind of really unlocked the whole design, I think.

### Browser support

**Bruce:** Just the last question about the historic or the heuristicity of the design. You mentioned you got inspiration from IE4. Was it actually somebody looked at IE4 and thought, “Ah, they are taking effectively screenshots and moving those around.” Or did somebody come up with the idea independently and somebody else go, “I bet that’s how it was in IE4.”

**Jake:** It was closer to, we looked at what iOS and Android were doing, and it was screenshots. And then as we were discussing the idea, it’s like, this is the same pattern that IE4 used, animating independently. But they didn’t use pseudo elements. It wasn’t customizable other than picking some things off a shelf. Actually, there was a super early iteration of few transitions where it was just picking from a menu of a few different transition styles.

It wasn’t a design I was fond of because of the lack of customization. It was a case where I made it known quite internally that I thought this was the wrong way, but I got a bit overruled. And so my plan there was if they’re not going to listen to me, maybe they’ll listen to developers externally. So I wrote this article about that iteration of the design. Here’s an origin trial for it, here’s a few demos I built, and I was very careful to speak very neutrally about the feature.

And then, you know, the article goes out and everyone’s like, “Well, this is dumb. It doesn’t let me do what I do. Jake, what are you doing? You’re ruining everything”. And I’m like, “Yeah, okay, thank you very much.” And it’s like, I could just go then with this big bag of letters internally saying, “Look, it’s not just me. I’m not just making this up. Please listen to me on this.” And they did. So that’s how we got the customizable version that we have today.

**Vadim:** There’s a huge two-part article published in Smashing Magazine in October last year. And it’s still there. I think I should probably ask someone to add a banner, like it’s deprecated, it’s not going to work anymore. It’s called “Delightful UI Animations with Shared Element Transitions API”. It uses the previous iteration, I believe.

**Jake:** Oh, interesting. Ah, okay. I mean, I know there was definitely a Smashing article that used the new system, but just with old naming, I guess. But yes, maybe they did one on the old system as well. Yeah, definitely, it’s not in Chrome anymore.

**Vadim:** I mean, there is an old name, but I’m not 100% sure they’re using the old API, so it’s hard to tell. It looks a bit different from the modern demos.

**Jake:** That’s the whole thing about stuff that’s behind the flag in Chrome, is it’s not ready and it’s liable for change. Actually, it’s an argument that I have with a lot of people who champion JPEG XL, which I’m sort of indifferent to. But I like JPEG XL for progressive rendering stuff, I like it for the high end, in terms of if you want something that’s visually lossless, but uses a bit more data, it’s better at that than AVIF, which I find works a lot better for acceptable loss, much lower file size.

But the JPEG XL folks, and I think they know what they’re doing, but they spin a story like that Chrome removed JPEG XL, but it was only ever behind a flag. And I don’t think it counts as removing it from Chrome when it was never shipped.

**Vadim:** But now Safari’s shipped, JPEG XL, I wonder what’s going to happen next.

**Jake:** So the way Safari works with image formats is it just defers to the operating system. Safari can block formats that the operating system supports, but it will always be using the operating system version of the codec. So that’s what we’re seeing here is its support for JXL is landing in macOS and Safari is going to allow that through, along with HEIF, that kind of stuff.

Now, there’s actually a weird thing, and I don’t know if it’s still true in Safari, it was last time I looked. So they would allow list which codecs on the operating system they wanted to use for decoding. But with encoding, they just let everything through. So, and this might still be true, that when you, on the Canvas element, tell it to encode and you pass a MIME type, you can actually encode to formats that Safari cannot actually decode.

**Vadim:** Oh, that’s funny.

**Jake:** Just down to that asymmetry. Kind of weird formats like PDF, you can encode to using a Canvas and all the formats like GIF, but also, yeah, HEIF, that kind of stuff as well. But I suspect what will happen now is we’ll probably see the other browsers at JPGXL since Safari is.

**Vadim:** So View Transfusions API is shipped in Chrome 111. So it’s been three months already.

**Jake:** Yes, that’s the SPA side of it. So this is like between two DOM changes, but they’re currently working on the version that works between pages, which was designed to do from the start. It was just, you know, the idea was just to ship incrementally. So I think keeping an eye on the GitHubs and providing bits of advice where I feel enabled to, for how the cross document version of the API will come about.

And the key part of advice that I’ve given them or requirements, and I don’t think they should deviate from this requirement is that you should be able to use the same animation definitions for the SPA version as the cross-document version. And I think a part of that reason is just to make sure that the API is similar to use. It’s basically the same feature, so it should feel similar, but also allows you to share bits of transition code between cross document and same document transitions.

**Bruce:** Isn’t that a no brainer? I mean, under what circumstances would you not be able to? Would you name them differently so that something that you worked SPA wouldn’t work across documents?

**Jake:** Yeah, there was one engineer who seemed to be going in that direction for a bit. I think I’ve talked him around. One example I use is on Twitter, a number of web apps, I’ll use Twitter as an example, but a number of web apps use this technique where if you click a link, it will do an SPA navigation to the next state, except if they know that there’s been an update to the app in the background.

Because that’s something that these long running web apps, like your Gmails, like Twitters, these things that people keep open for a long time, they care about this. So they’ll take the opportunity when you’ve clicked something, it’s like, “Oh, this is a good opportunity to reload.” So instead of doing the usual SPA thing, we’ll do the MPA thing and reload as we’re going there. So I keep saying that, “Well, it would be nice if you still get a transition.” And it’s the same code, the developer hasn’t had to rewrite the code.

But with the SPA thing, advice so far has been like, if you want to create a particular animation, a particular transition between two particular states or a different transition because it’s a back transition versus forward. The advice is, well, you’re in JavaScript land anyway, figure out in JavaScript and put a class name on the document elements, and then you can hook into that with CSS to do different CSS things.

That’s not going to fly cross-document, or it shouldn’t, it’d be nice to see if we can do it declarative way, all the way through. So that might mean you end up with something like a media query that tells you this was a back traversal, so you can customize your transition during that. But that also means like, oh, hang on, we’ve now created a high level way to do this, we should make sure this high level way is available for SPA as well.

Like we didn’t have to do it for SPA at the time, we could ship without it because you’re in JavaScript-land anyway. But if we’re adding nice high level, convenient ways to do this stuff, because we have to for cross-document transitions, we’ve got to make sure it works for the same document as well. Anyway, that’s the requirements I’ve been giving them. And we heard similar advice from Mozilla as well when we were talking to them about the API.

**Bruce:** And you talked the engineer down, yeah. You taught them around. Did you stick them up a tree for six days until they promised to?

**Jake:** Look, API design in the browsers is hard, and I feel like I can whinge about this now. I don’t have skin in the game. Compared to other systems, you don’t get second chances very often, right? We kind of did with Service Worker being the second thing of AppCache. We kind of did with the Navigation API being the second version of the History API, but those opportunities don’t come around often. It needs to be a huge overhaul to be able to make those changes. So you got to get it right first time, really, or it’s going to be 10 years before you get another go at it, at least.

**Vadim:** Like Web Components v0, v1.

**Jake:** Exactly, exactly. It took a while. Yeah, and it’s also it’s hard to get developer feedback on this stuff. And I think this is something that I would like the browsers, I guess particularly Google Chrome, because they tend to be leading the way on these features, to find out a better way of getting developer feedback. Because we put this stuff behind a flag, no one really uses it. Like, very, very few, so you don’t get a lot of feedback.

Origin trials are okay. So for anyone who doesn’t know, this is a way that you can use a special meta tag to unlock these features before they’re ready, and then these features will expire, which is kind of the way of preventing the old vendor prefix CSS stuff of Yesteryear, that just resulted in a similar lock-in. The Origin Trial stuff works really well if there’s a subjective measure, like did this thing make the page run faster? Did this lazy load work? It’s really good for that because you get to use field data.

It’s less good for the more subjective stuff because Chrome will be working with one or two large partners on an experiment, and then it’s either the partner makes it work or they don’t. And there’s a kind of an incentive that if the partner, and it will tend to be like a big web company full of geniuses who are able to work around a bad API, if they get it to work, they are incentivized to say, “This is great, ship it so we can use it proper across all of our users, not just a section or whatever.”

They’re not incentivized to say, there are some problems with this, please spend another six months getting it right. So, yeah, I think there’s a better way out there. I just don’t know what it is, but there are problems with the current system.

### Use cases and future proofing

**Vadim:** I remember when some browsers shipped, maybe Chrome or some other browser, shipped the first implementation of Grid layout.

**Jake:** Hmm, it was Internet Explorer or Edge I believe.

**Vadim:** Oh my, yeah, yeah, yeah. True. It was like the previous version of the spec, like the one in the first, it was a bit different syntactically. But still, people would say “this thing is designed for the whole page layouts,” like 12 column layout or something like this, to align your header, footer, your side column and everything. And when I would use it for, I don’t know, aligning an icon inside of a button, people would say like you’re misusing this feature. Use a flex instead. Don’t use it on such small thing like a button.

Going back to View Transitions, do you think it is possible to use it like for tiny interactions? Like you’re pressing a purchase button and your thing goes inside of a cart across the page or for tiny things, is it possible, is it actually possible? Does it make sense?

**Jake:** First off, with Grid and Flexbox, I am all in on Grid. My attitude now, it just seems like a much simpler system to me. I will use Grid for everything except the stuff I literally can’t do with Grid. So like Flexbox, you need wrapping. It’s a single dimension, but it wraps.like, okay, you need to use Flexbox for that. And there’s some complicated distribution of spacing that I’m not sure you can do with Grid. You can only do with Flexbox, but yeah, anyway, I’m all in on Grid no matter the size of the UI component.

With View Transitions, right now, the scope of the transition is the whole document, `document.start.ViewTransition`. Now you can say, by default, the HTML element, the root is involved in the transition. You can tell it not to be, and you can focus it on a more, like a specific component, but you can still only have one transition going on at a time.

**Vadim:** Right. It might be enough.

**Jake:** I don’t think it is. It might be enough for particular use cases, but not for all of them.

**Bruce:** When you say one transition, do you just mean one element can do a thing?

**Jake:** No, one transition. So your transition can involve as many elements as it wants, but that one transition that starts, if you try and start another transition before that one is finished, the old one will skip to the end. One of the things that I was really happy with that we did as part of the feature design for this, and I was glad that folks at Chrome gave us the time to do it, we stopped and we went and half-designed some future features. Because I started to get worried that. I’m worried we’ll make a decision now that will stop us doing some stuff in the future. So let’s stop and let’s think about some of these future features we might want.

One of them was… So right now, when you do a view transition, and you get these screenshots, these screenshots are all siblings of each other in the pseudo tree, which tends to work pretty well because it means you can move things visually from one container to another without worrying about clipping because they’re actually siblings in the transition.

But there are cases where you want them to be nested. So you’re like, “Okay, let’s sketch that out, let’s sketch what that looks like.” And we did, and that actually influenced some of the design of the feature that is shipped now to enable us to do that in the future. And the other thing we looked at is, what if we want to run multiple independent animations at the same time? And that’s why we’ve got `document.start.ViewTransition` because it leaves the door open for `element.start.ViewTransition`.

And that will be a transition that is routed to a particular element rather than the whole document. And that will let you have two transitions operating independently as long as the trees of the elements are separate. And we sketched all that out, and I’m sure this sketch is half baked and it’s full of unanswered questions, but it gave us enough to go on to design the system that we released with confidence that we’ve got a good chance of being able to actually ship the multiple elements thing.

**Bruce:** At least there’s room for extensibility. We don’t exactly know what that extensibility looks like right now.

**Jake:** Exactly, yeah. And so we did that for a bunch of other features as well. And again, because we don’t get second chances, so unlike a lot of other systems people listening to this might be used to designing, it’s like, oh, you realize, oh, we need this to be a different shape to accommodate this other thing. You just change the shape of the thing. You just, you know, ship an incremental update or whatever. Um, if for compatibility reasons, we knew we don’t get to do that. So got to think of it all in advance and hope we get it right.

**Bruce:** Yeah. As Jake Archibald says, folks, you heard it here first. Web API design is like life.

**Jake:** Yeah. There’s no rehearsals. You only get one go at it. And if you mess it up, people will hate you forever.

**Bruce:** I think there’s a country and western song in the writing here and there. I’ll just go get my guitar.You guys talk amongst yourself. Where is this, by the way? Is it only in Chrome? Is it only available for SPA’s right now? Is it in coming to other browsers?

**Jake:** So the cross document version is behind a flag in Chrome. Obviously, I can’t speak for the shipping dates for other browsers. All I can say is they were very well engaged in the CSS Working Group, which is something I’m really thankful for because a lot of the input went into making the feature as it is now. It felt collaborative. The CSS Working Group does have a little funny thing where when something gets to go into the spec, it’s not because it was universally agreed on, it’s because no one objected, which is different.

But folks in the other browsers know that if they want to disagree with something or they don’t like it, then objecting is the right route. So I think they’re fine with what we’ve got. I don’t expect a major redesign once other browsers start looking at it. I’ve got my fingers crossed that it will be in next year’s interop, but it’s nothing to do with me anymore. I just have to sit on the sidelines and have my fingers crossed like everyone else.

**Bruce:** But nobody said they hate it. There’s been people from other browsers contributing and collaborating on it, which is always a good sign.

**Jake:** Yeah, certainly contributions in terms of discussions and I think on some of the GitHub issues as well. It’s only been Google folks on the spec, I believe.

**Bruce:** But that’s not abnormal, is it? It’s perfectly normal for it only to be people in one team writing the spec, but with collaboration and interest from other people. I remember that from my days.

**Jake:** Exactly. Look, I am actually positive about other browsers shipping this. I’m just trying not to, I don’t know.

**Bruce:** You don’t want to jinx it.

**Jake:** Yeah, not that I believe in that, but I guess I’m careful not to speak for them either.

**Bruce:** Very, very statesmanlike.

**Vadim:** I just got back from CSS Day in Amsterdam and I met Miriam Suzanne at CSS Cafe event on Saturday. She quoted some folks from Mozilla objecting scoping in CSS because why would we need scoping in CSS? Because we already have Shadow DOM. That kind of feedback sometimes happens, like you develop a feature, you’re ready to ship and then other browsers just deny the possibility or like they’re just against it.

**Bruce:** I can trump that when I was trying to persuade people that the picture element was a good idea, so you could, you know, send really nice high res images to retina displays but not send loads of bytes down the wire to somebody with a small black and white Nokia. A few luminaries and friends of of mine from the web standards world, the WHATWG said, “We don’t really need that, do we? Because soon everybody’s going to have super fast broadband and super fast processors.”

**Vadim:** Bruce, I just wanted to mention I’m still waiting for my broadband in 2023 in the middle of Berlin.

**Bruce:** Really?

**Jake:** Well, we heard the same about service worker stuff for the offline use cases as well. It’s like, you know, is this a problem anymore? And that kind of thing. And Chrome objected to pointer events when it first came out. So yeah, it’s not the end of the road just if a browser objects to it as well.

**Bruce:** I thought Rick Byers invented pointer events.

**Jake:** No, he was one of the key objectors initially. It was, I believe, Jacob Rossi who worked for Edge at the time.

**Bruce:** Oh, Status Quo bloke.

**Jake:** Is he a Status Quo bloke?

**Bruce:** Isn’t he the guitarist?

**Jake:** Is he a guitarist? That’s cool.

**Bruce:** Fucking crappy old 1970s rock band mate, it was Francis Ross who wasn’t it?

**Jake:** Oh Francis, I did not, I know, I know Status Quo, like the three-chords, I just, look here’s the thing, I’m just not such, I’m just not as big a fan as you Bruce, so I don’t know their individual names. I don’t, you know, pray to the shrine of Status Quo.

**Bruce:** Whatever you want.

### Shopify and cake jokes

**Bruce:** So you mentioned that you’re out of this world now, and you’ve told us that…

**Jake:** I’m going to put that on the poster. Bruce Lawson says Jake Archibald is out of this world.

**Bruce:** Oh yeah, you put a five stars out of this world.So yeah, you’re out of the world of web speccing. Are you really? I mean, what are you going to be doing at Spotify?

**Jake:** Shopify…

**Vadim:** What’s the difference anyway?

**Bruce:** What’s the difference? Aren’t you like chief exec of fun at Spotify in Sweden?

**Jake:** So, do you know what? This is the thing. It’s a little bit. Um…

**Bruce:** You haven’t started yet, right? You’re in your break.

**Jake:** I haven’t started yet. So I do think it’s a little… Well, and this is what happened when I joined Google as well. This is kind of like you start there and then I’m like, well, what do I do now? and they’re like, “Oh, just have a look around and see something that needs done.” I do know that Shopify are looking at View Transitions, so I guess if I want it to be productive very quickly, then I guess I go talk to that team.

But I am also seeing it as an opportunity to go and do something a little bit different. I won’t be sad if I get to do Web Standard stuff again. Obviously, it will be a different shape because it will be pleading with the browsers from the outside rather than having a little bit more power and control, I guess, by being within a particularly big browser.

But I don’t know for sure exactly what I’ll be working on It’s kind of scary and exciting at the same time. But, I don’t know. Even at Google, when people asked me what I was going to be working on in the next six months, I never really knew. Something always came up, just as View Transitions did.

**Bruce:** So basically, Bob Shopify just came along and went, “Get me Jake Archibald. We need a Jake Archibald.” And you just sit on a velvet cushion on a granite throne surrounded by statues of Anubis?

**Jake:** Let’s go with that story rather than me going to them and saying “Please, please get a have a job, I think I need to work somewhere different and you seem pretty good, you know?” I mean, it’s true, I was just missing Surma too much. Gotta get the band back together. It’s gonna be a real change of pace, maybe? I don’t know.Yeah, it’s gonna be fun.

**Vadim:** It’s been how many years?

**Jake:** Ten years at Google.

**Vadim:** Oh wow.

**Jake:** Yeah, I don’t know. Part of the furniture, mate. It’s a bit. Well, I tell you what, actually, the weirdest bit was interviewing. You know, because like I said, I did interview at Shopify and I did interview other places as well. And let me tell you, I did not like sitting on the other side of the table. You know, I did a lot of interviewing folks during my time at Google. It’s much easier interviewing people, turns out.

I hadn’t done a code interview for 10 years. Yeah, here’s an insight. Sometimes, you know, I talk about my employer, like I just did. or my previous employer, like I just did. And that causes a certain number of devices to think I’m talking to them. And that’s what happened there, and it stole away the focus of my earphones at the time. So I was like, “Something’s all going wrong,” but I looked around to see my phone displaying the previous three sentences I’d said. So that’s what was happening there.

**Bruce:** Well, that’s interesting because my Android device just fell on the floor and pulled out my headphone cable. So obviously my Android device had been controlled by your voice. I knew, I knew there was a sinister plot.

**Jake:** It’s trying to get away from you, Bruce. That’s you should take that personally, I think.

**Bruce:** Yeah. At least it’s my, my phone rather than my cat that hates me.

**Jake:** He loves me. He’s here purring.

**Bruce:** He’s snarling, he’s snarling. So, so it’s not like you’ve got bored of the merry world of web standards and want out.

**Jake:** No, it’s, it’s actually one of the bits I expect. I’m going to miss most. There’s a lot of reasons for leaving Google, ranging from long-term to short-term things. There was no one single reason.

**Bruce:** Ten years is a long time to be in one place.

**Jake:** Oh, exactly. A lot of time to get jaded in particular. But I looked at other roles where I would be doing web standard stuff directly, and I do think Google Chrome is the best place to be doing browser based web standards work. And I did worry that if I look to go somewhere else, assuming they would give me a job, I think it would just be a shitter version to the job I already had.

And I think that would make me much sadder than going and doing something, you know, taking the opportunity to do something a bit different. So yeah, so 10 years of doing web standards, doing DevRel. And so I’m moving to a role that’s kind of more engineering focused. But yeah, if it involves bits of web standards stuff, I won’t be sad.

**Bruce:** You’re gonna be writing code?!

**Jake:** I know, I know. I hope I can remember how. I mean, it’s the sort of like the brackets, but the wibbly brackets, right? It involves a lot of the wibbly parentheses and sometimes like numbers that start with like letters. I don’t know, it’s all very confusing, but I’m hoping I can remember some of my. I was going to say computer science background. I don’t have a computer science background, I have a multimedia background. My Flash background. See if I can remember how to code.

**Bruce:** I think you’re doing yourself an injustice because only recently, I think on the Twitters, we’ve seen a picture of you as looking very young, being given some award or something by a luminary for something computer-related.

**Jake:** Yeah, I think I won a website building competition when I was at school of the age of 15 or something. And yes, I guess we’ll put it in the show notes.

**Bruce:** Yes, that needs to live forever. You said that you were a bit worried that you wouldn’t have any power in web standards anymore because you won’t be working for Chrome, you won’t be working for a browser vendor. Does that really matter? I mean, yeah, if you are, you know, Bob Heffelump from Idaho who just comes onto GitHub, you might not be listened to immediately. But if you’re Jake Archibald, who everybody knows and presumably somebody loves, people will listen to you. Even if you’re not actually employed by Google, because your bona fides are known? Or does it actually depend upon working for a company that actually might put the money into writing this?

**Jake:** Well, I mean, maybe. It’s something I hadn’t considered actually, but, you know, it took. I hate referring to myself in the third person, but I think it’s required here. Jake Archibald, Google Chrome DevRel, took five years to convince Google Chrome that page transitions were required. Maybe, maybe Jake Archibald of Shopify will be listened to more. Wouldn’t that be silly? Wouldn’t that be very silly? Well, we’ll see. We’ll see.

**Vadim:** I’m pretty sure they hired a talented front-end engineer, but everything comes with Jake, and it’s going to be useful at some point.

**Bruce:** They’ve hired somebody who knows his way around a bit of JavaScript, and you’ve got that lovely sort of Jake glazing as well.

**Jake:** Because it’s 30 degrees here! That’s what the glazing’s all about.

**Bruce:** No, no, no, I’m thinking like a nice Eccles cake with like, whoops, glazing on the top.

**Jake:** Never been described as a cake before. I’ll take it.

**Bruce:** Do you know, I went to a cake shop the other day and there was a sign saying “All cakes £1” so I said to the bloke, I said “Can I have that one?” He went “That’s £2” and I went “What are you talking about?” He said, oh that’s Madeira cake.

**Jake:** Oh my word.

**Bruce:** See Jake, I’m gonna have to be the internet’s funny man now, you’re all corporate and wearing a presumably a white coat like Ronnie Barker in 'Open all Hours behind a… Sorry, this is very Anglo-centric all these references.Eccles cakes and Ronnie Barker.

**Jake:** Oh mate. Yeah, yeah, yeah very good. I was trying desperately to remember a cake based joke that only works in a northern accent but yeah I can’t remember. Let me just see if I can power through it. A guy goes into a cake shop in the North (let’s say the North, because I don’t think I’m gonna do a specific accent) and he points to the cake behind the counter and goes “hey is that Madeira cake or meringue?” And he replies “well you know it’s not meringue it’s Madeira cake”.

**Bruce:** We can edit Jake’s one out later.

**Vadim:** I need a page long explanation.

**Jake:** Yeah I mean it really hooks on the thing of like in the North you would you might say a meringue to actually mean “am I wrong?”

**Bruce:** When I first knew you we were conferencing together you were all around the place saying waving your arms around behind a microphone saying “use fucking service workers, man!”. Would you mind signing off at the zenith of your web standards career by telling everybody say “use fucking View Transitions, man!”

**Jake:** Oh okay I could do it in Carlisle if you want?

**Bruce:** Yes please.

**Jake:** Alright mate just fucking use View Transitions like.

**Bruce:** There we have it everybody.

**Jake:** Just fucking use them I mean come on man like don’t be a fucking dick about it just use the View Transitions you know I mean like what’s the point of not what’s the point of not just go yam, open your laptop and do some View Transitions. Yam is “home”.

**Bruce:** Oh really?

**Jake:** In “me home” language, yeah.

**Bruce:** You’re getting a bit Kinlan there at one point.

**Jake:** [In a broad Scouse accent] What the fuck are you talking about ? Oh my god, it’s a snack.

**Bruce:** [In a terrible Scouse accent] Use your view transition’s, ya great big… I can’t do scouse.

So, it’s a sad day, potentially, as Jake leaves Google. But I’m sure it’s not gonna be the end of an era as Jake leaves the loving embrace of Messrs. Bryn and Paige and goes to Shopify, where I have no doubt his reuniting with Surma will be emotional and lovely, and possibly the subject of a mini-series on HBO in the not-too-distant future.

**Jake:** Oh, that’d be nice.

**Bruce:** So, yeah, out with the old and in with the new. Hurrah for Jake and View Transitions.

**Jake:** Yeah, hang on. Am I the old going out and it’s someone else the new? What’s the. Like, wait, wait, you know, what am I. Cause I, you know, I’m feeling, like, older these days and…

**Bruce:** It’s a metaphor! Don’t interrogate a metaphor, it’s not a bleeding promise. On that note, I’m going for a bit of a lie down and some…

**Jake:** Yeah, I think I need a lie down as well. But I’ll be thinking of you.

**Bruce:** …and some counseling after speaking to Jake for an hour. Good luck, thank you for joining us, Jake.

**Jake:** Thank you very much for having me.

**Bruce:** Until next time, folks, it’s goodbye from me.

**Vadim:** Okay, see you in the next episode.

**Bruce:** Hang loose and be groovy.

**Jake:** Bye bye!
