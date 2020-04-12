---
number: 1
title: 'Npm and GitHub, closing HTML tags, disappearing User-Agent, Safari vs PWA'
date: 2020-04-02
hosts:
  - Bruce Lawson
  - Vadim Makeev
chapters:
  - title: 'Npm and GitHub'
    time: '02:02'
    list:
      - title: 'Npm is joining GitHub, Nat Friedman'
        link: https://github.blog/2020-03-16-npm-is-joining-github/
      - title: 'The economics of open source, C J Silverio'
        link: https://youtu.be/MO8hZlgK5zc
      - title: 'The Entropic Package Manager'
        link: https://www.entropic.dev/
  - title: 'Closing HTML tags'
    time: '08:39'
    list:
      - title: 'Stop using closing tags for the HTML elements, Tab Atkins'
        link: https://twitter.com/tabatkins/status/1240027435246051328
      - title: 'HTML Living Standard: Optional Tags'
        link: https://html.spec.whatwg.org/multipage/syntax.html%23optional-tags
      - title: 'The future of loading CSS, Jake Archibald'
        link: https://jakearchibald.com/2016/link-in-body/
  - title: 'Disappearing User-Agent'
    time: '19:19'
    list:
      - title: 'My findings after browsing the web without a UA header for one week, Šime Vidas'
        link: https://webplatform.news/issues/2020-03-19
  - title: 'Safari vs PWA'
    time: '27:36'
    list:
      - title: 'Full Third-Party Cookie Blocking and More, John Wilander'
        link: https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/
      - title: 'Apple just killed Offline Web Apps, Aral Balkan'
        link: https://ar.al/2020/03/25/apple-just-killed-offline-web-apps-while-purporting-to-protect-your-privacy-why-thats-a-bad-thing-and-why-you-should-care/
      - title: 'Apple’s attack on service workers, Jeremy Keith'
        link: https://adactio.com/journal/16619
tags: episode
layout: episode.njk
---

### Intro

**Vadim:** Hello. Welcome to the F-Word.

**Bruce:** And the F-Word of course stands for, front-end, the wonderful world of front-end development, web browsers and web standards. I’m Bruce Lawson, coming to you from Birmingham, UK.

**Vadim:** I’m Vadim Makeev. I’m from Saint Petersburg, Russia.

**Bruce:** So, this is going to be an approximately monthly podcast, discussing web standards and the wider world of web from two grizzled veterans of browsers and standardization. So, let’s introduce ourselves. Who are you Vadim and tell us a war story.

**Vadim:** Well, I don’t have too much to tell, bad memory. But yeah, I used to work as front-end developers for many years, and then I joined Opera, where we used to work together for seven years or so, representing Opera browser for the rest of the world. So, basically a DevRel. And for the last three years I’ve been working in education as a teacher, as someone who teaches mostly beginners, HTML, CSS, some JavaScript accessibility and things like that. So basically I’m a teacher, but like fancy one.

**Bruce:** Yeah, I was front-end tech lead for a big legal organization in the UK. But I’ve been involved in tech since I came back to the UK from Thailand in the year 2000. So, a long time, which is why I look this dreadful. This is why it’s a podcast and not a video cast, everybody. Worked with Vadim in Opera, did some standardization stuff, co-invented the picture element. And now I’m a freelance web standards and accessibility consultant for anybody who wishes to hire me.

**Vadim:** All right, we have some topics to discuss. Let’s see what’s been going on recently.

---

### Npm and GitHub

**Vadim:** First news is a npm and GitHub. Somehow those are related not only in our code, because in a typical environment that are heavily related, you’re using GitHub to store your code, and you’re using npm to get packages from this registry. But now they are connected via Microsoft. So, basically what happened before Microsoft acquired GitHub a year ago already, I think. And then they decided to acquire npm as well. So, they somehow decided to support npm probably. Because, I believe, npm was looking for a way to survive, or maybe a way to support our community and everything we do. Because as front-end developers, we heavily rely on npm registry. It used to be a small thing, when Node.js Started, there was a number of different package managers. And then npm actually won, it’s bundled with Node.js.

**Vadim:** So, every time you install Node.js, you have npm installed. So, basically it’s default. But not like Node.js, npm belongs to actual company. And there’s a story behind this company I heard from CJ Silverio at JSConf Berlin last year. So, there’s a great talk called economics of open source, where she explains how npm works and who owns it and what’s their goals. They were desperately trying to monetize themselves to a return investments for venture capitalists by CJ. it’s a bad thing for the community. And it could ended up in some disaster or we would lose the registry or they would do something terrible as Facebook does with our information and with our source code and everything.

**Vadim:** So, I’m not going to explain to how the he’ll talk to you go and see it. it’s very good. But at the end of the talk she introduced the Entropic package managers, something like npm, but that belongs to everyone, not the single company. And after that, year after, I’m not sure what’s going on with Entropic package manager, but this problem, it’s not like it’s this problem is solved because one company used to own npm, but now the other company owns it. Microsoft. And I wonder, what do you think about it, Bruce? Does it feel safer for you to have our NPN registry in hands of Microsoft instead of, what’s the name of a company that used to own npm? I forgot!

**Bruce:** I don’t know. I don’t actually think I knew it was a company before you mentioned this. I’m going to have a look at that Silverio talk later. But yeah, I mean, I feel more comfortable with Microsoft owning it than a bunch of venture capitalists. Microsoft, at least some parts of Microsoft, seem to be behaving as good stewards of open source. And Microsoft is less likely to be evil than venture capitalists because they have more money. But I remember reading ages ago, that out of the top fortune 500 companies from a hundred years ago, only like 18 still exist now. I can get the exact numbers later. We’ll put them in the show notes. Basically companies do die. I mean, Microsoft is vast, but so was Blackberry. So was Nokia. Who would have thought that they would go away? For like the idea of the Entropic package manager simply because if we’re all self hosting or if there’s multiple mirrors, if one falls apart or goes bankrupt, there are copies.

**Bruce:** So, I’m going to look into that. But broadly speaking, I do trust Microsoft to look after it properly. But given all the unrest or the uncertainty in the world now, who knows what’s going to happen with these big companies once the COVID pandemic is over, nobody knows. So, I prefer it not to be in the hands of any single organization.

**Vadim:** Yeah, I agree. And speaking of CJ Silverio, I haven’t mentioned that, she used to be a CEO of npm. So, she knows the situation very well from inside, so that’s why she did this talk. I wonder if, I haven’t followed her on Twitter yet, but I wonder if she commanded on this acquisition. I think, yeah, it’s a good thing that now it belongs to a company with different strategy I would say. So, they don’t have to squeeze the money out of npm, immediately. There’s a plan to integrate these paid features by npm into GitHub. The npm will stay free for the community. They’re not going to try to monetize it. Instead they will use existing professional or extra features of GitHub to host packages like private registries and things like that. So, it’s going to stay free for all of us, which is good thing. Maybe, I don’t know the specific details, but sounds great.

**Bruce:** Well, I’m glad they’re not charging us. If it was like, one penny per line of code, you do hello world in react and you owe them a $100 000.

**Vadim:** Yeah, that’s true. I’m not sure what’s going to happen next, but so far I’m a bit relieved.

**Bruce:** Yeah. Yeah. Likewise, although I’m a bit of a lefty, I don’t have a problem with companies making money to cover their costs. They’re not trying to screw money out of every developer. it’s mostly enterprise level stuff that’s paid for, I think. And that’s fair enough. I mean, how much money are companies making out of open source software?

**Vadim:** Yeah, yeah. A lot. I think they owe us to invest in open source and are supporting our registries and for us to create more value for them. So, I think we’re working for each other and that should support both companies and our community.

**Bruce:** Yeah. Symbiosis.

**Vadim:** Yeah. That’s the word.

---

### Closing HTML tags

**Bruce:** What’s next uncle Vadim?

**Vadim:** HTML.

**Bruce:** Oh, I’ve heard of that.

**Vadim:** Yeah. I saw an announcement that HTML six is coming, but yeah, for all of you that not aware the HTML lost its version. So HTML 5.2 is the last version that there is. I mean with number and currently it’s a HTML living standard by WHATWG. Well, it’s just basics, but we’re not going to discuss it. There was a threat by Tab Atkins, the famous web standardista. The person I admire, the person I respect very much. I saw his talks, I read his specs, like FlexBox and may others and I agree with almost every opinion he express, but…

**Bruce:** But…

**Vadim:** But he expressed an opinion recently.

**Bruce:** Oh.

**Vadim:** That we don’t have to close the tags.

**Bruce:** No.

**Vadim:** And not only that, he encouraged us to stop closing tags, which is, I don’t know, it’s too much. Bruce, what do you think?

**Bruce:** Well, yes and no. I remember in 2010, gosh, 10 years ago now, I did a few talks in Australia with Steve Faulkner. So, he would do a couple of hours on Aria, which was very new at the time. And I did a couple of hours on HTML five as it was called then. And I remember typing into the browse and not having a body element and not having a head element and not closing paragraphs to the horrified looks of the audience. I said no, I told them the guilty secret browsers never cared. Only the XHTML validated it and browsers never really cared about XHTML. I remember one woman actually looking at me like I’d just killed her dog or something like that.

**Bruce:** But it was to make a point that the browsers are very, very forgiving and always will be. But the trouble is, is that it’s not like every tag can remain on closed. There are very, very tight definitions of which tags can be left unclosed in precisely which circumstances. And I just think that requires a level of understanding of the HTML five, sorry, the HTML parser. But I certainly don’t have, and I don’t think, and I’m a web standards, wonk, I don’t think that web developers should be required to have that level of detailed understanding of how the HTML parser works. When they could just close their tags as they’d been doing and as long as you validate your code, then you’re not going to make a mistake anyway. And I disagree with Tab on one thing. I never leave out the HTML elements because accessibility requires that you have a lang attributes to tell the assistive technologies which human language your page is in. Because the string S I X is pronounced six in an English page and six in a French page for example.

**Bruce:** So kids, people at home, friends, Romans, countrymen always have an HTML element and always have a lang attributes hanging off it.

**Vadim:** And apart from a lang attribute, there are many use cases for you to close actual tags. For example, on this. That’s why I replied, Tab Atkins may have added it in a wrong manner. I’m sorry about that. But still…

**Bruce:** I think, leaving that head… That horse’s head in his bed was a bit much, Vadim!

**Vadim:** That was mean. Anyway, I reply him that there are some cases where having HTML and body elements defines what browser are going to do with some tags with some external sources. For example, if you include your script in the body, it will be loaded other way if you would include it in head. The same applies to actual link element. If you have a link rel style sheet, I believe there was an experiment or even implemented feature in Chrome. That Chrome would block the rendering of the page if it’s a style sheet included in head and that will postpone the loading and it will carry on the rendering and everything if it’s in the actual body. So, you would have a chance to load styles right next to the actual module it required. Basically it was a trick to split a style sheet into multiple files and not block rendering because the browser would request each of them.

**Vadim:** There was a trick and if you’re don’t have head and body, how would you split those two use cases? So, browser will have to guess like, okay, here’s the title element, right? We’re still in the head. Okay, here is the link element. How would browser decide if you’re trying to include this link style sheet, in head? Or if it’s already body? Or did the same applies to script? So, to express something a bit more complicated than demos here, Tab Atkins showing like least per paragraphs and titles, you’ll have to include all those tags. And if in some cases you can remove those because you don’t express anything complicated. it’s not for developers to do every time. In most cases you have a template for the all your part of your webpage, universal template for every occasion and it’s stored in one file and in every case for every page, you include some internals for that page.

**Vadim:** So, every time you have to decide if you need one template or another. The point is I think it’s work for optimizers. You wouldn’t go through your a CSS removing the very last semi-colon of your CSS property because you don’t need it because there’s a closing curly bracket. You wouldn’t go for that. Right? Because it’s doesn’t make sense. If you want to type another property on the next line, you have to put it, the semi-column and then, yeah, if you want to sort properties, you also need to put it back and remove him. Yeah. it’s basically like trailing comma and JavaScript. The same for HTML. it’s easier to always have close tags. it’s easier to have important tags like Head and body. it’s easier to have quotes in attributes because right now, you have just a single value and in a few minutes you’ll have two classes, for example, inside of your attributes.

**Vadim:** Two values who are separated by space and you have to put those quotes back and every time you have to think, I need it? No, I don’t need it anymore. And you have to carry these cognitive load on you every time. it’s much easier to have something reliable that would work in every case, than to decide every time what I’m going to do. it’s for automated optimization tools to decide if you’re to have just a single value inside of your class. Yeah, I’m going to strip those double quotes. If you have two values, I’m going to keep them. it’s not for developer to decide. So, the same way CSS optimizers work the same way GS optimizers work. They analyze your code and they remove things that browsers don’t need. I’m not suggesting that you have to put like `<thead>` and `<tbody>` — in your tables.

**Vadim:** Sometimes it’s useful, but in most cases it’s useless because they just wrapped the data into parts, but for table cells and table rows, it’s kind of easier to parse, like visually parse your code. If you have those tags, in my opinion. Maybe it’s just an old habit. I still have this… If you remember or not, A List Apart, the T-shirts. I still have this A List Apart T-shirt with a fist with six fingers and XHTML written on them.

**Bruce:** Yeah, I remember that.

**Vadim:** it’s full of holes and it’s very old. But sometimes I wear it just for fun. And I used to be a big HTML deliverer for a while, but then HTML five came and I thought, yeah, it probably makes sense to stop playing XML and just let’s write the actual code the browser understand. And that’s easier to write, but I kept this idea that closing tags and closing attributes, it’s a reliable thing to do. Basically. We’re relying on both on forgiving HTML parsers and codes that’s strict enough to be easy to read, to be easy to maintain. That’s my point.

**Bruce:** Yeah, totally agree. Yeah. I mean, in production code, I always quote attributes, even if it’s a single attribute and I’ll close tags and have a body and a head, et cetera. And like you, I still have a little bit of residual XHTML about me, don’t tell anybody, but I still feel a bit sick if I see upper case tags.

**Vadim:** Yeah. Yeah. When I see it, it feels like… it’s like Gothic a font. it’s like from old days.

**Bruce:** Yes. That’s true. If I see an upper case tag, I think, okay, I’m looking at geocities.

**Vadim:** Or like the first HTML spec or something like this.

**Bruce:** When I was in Australia, I remember that I did… I wrote head with alternating uppercase and lowercase letters and that’s when the lady looked at me like I’d killed her dog. Good times.

**Vadim:** Yeah, it was, it’s SpongeBob case. Right?

**Bruce:** I was just taking a sip of coffee there, listeners, and I very nearly sprayed it all over my screen, so thanks for that Makeev.

**Vadim:** You’re welcome Bruce.

---

### Disappearing User-Agent

**Bruce:** Moving on. What do we have? Oh, user agent strings. How we love user agent strings, Vadim.

**Vadim:** Very much. We used to, yeah, play a lot of games with user agent at Opera, right?

**Bruce:** Oh. Yes, yes. The browser sniffers. For those who don’t know, listeners, the user agent string is something that your browser sends when it sends a request and it is extensively to identify what the browser is and its version number. But the trouble is, is that every browser claims to be itself plus every other browser. So, it’s an incredibly brittle method of identifying which browsers coming.

**Vadim:** I would say in other words it’s total garbage.

**Bruce:** it’s total garbage. Yes. And also, these days there is no necessity to sniff a browser or a browser version. Everything should be feature detection. Yeah. By all means, say a message saying this is a video conferencing website that uses webRTC. You do not have webRTC, sorry. But don’t say, hello, you’re using Firefox, therefore, you can’t come in, simply because you only you’re only interested in Chrome because that way is wrong and evil.

**Vadim:** Well, yeah and sometimes developers do some guesses based on user agent and wrong ones. So, in Opera’s case, they would think that Opera is Opera Mini and they would give you on desktop like optimized and stripped down version of their desktop website because they would see Opera in there.

**Bruce:** But good news because the browser experimenting with freezing the user agent strings, so that browser sniffing won’t be needed anymore. In theory.

**Vadim:** Safari started freezing their user agent string, some time ago and then, also, Chrome introduced this idea. So, they had to have the whole blog post regarding that. So, I think, there was a plan to freeze it to completely by September this year, 2020. I’m not sure if it’s the plan, still, considering everything that’s going on around. Since they are changing the release schedule for their browser. I’m not sure if it’s going to happen in September, but still there is a plan and they all have to be prepared. And I believe Šime Vidas, the wonderful person that I follow on Twitter and author of Web Platform News. One of the best news sources for the web platform, I recommend everyone subscribing to it on Twitter, at least. So, basically what he did, he tried to browse the web for a week without user agent header, not just freezed one, not just a random one, but without one.

**Vadim:** And he saw very interesting results. Most of the websites were fine. They were trying to break some features they have. They were trying to tell that your browser is not supported and show some popups but in most cases they were working fine. But in some cases they would just say, here’s the capture for you and your browser is not supported. And in some cases, even some error codes, 307, 403, 401 and many others. And I believe those server errors were caused by, they were trying to prevent DDoS attacks or some unknown or shady browsers or like agents, I would say, accessing their website and trying to put some pressure on their servers and it’s totally fine thing to do to protect your users, protect your servers from unknown user agents. But I don’t think the web should work without a user agent checking at all because we used to have it for a while, like from the very beginning. But it was an interesting experiment, to see if the web is actually ready for this.

**Bruce:** Well, I think there’s a big difference between using the web with the frozen but known UA string and no UA string at all. I think it’s completely legitimate for site owners to say this actually doesn’t look like a browser, which is why some of them pop up a capture to check whether it’s a distributed denial of service attack. But I imagine that, if we’re all surfing with the same frozen UA string, those sites would still work. But who knows. But I think it’s generally a good idea for the longterm health of the web and the health of niche browsers, smaller browsers. Things like Opera, things like Vivaldi, Brave, et cetera. We know from our time of Opera, even after we move to be using exactly the same code base as Chrome, that sites would say, usually, you’re not supported. And we knew we were.

**Vadim:** And there was no Opera word in our user agent. There was a OPR word which was enough for them to serve weird things to us.

**Bruce:** And it has to be said: One of the main offenders for doing that, were Google’s web properties. Google’s web properties were telling Opera users that Opera, which is the same code base as Chrome wasn’t supported. It’ll be interesting to see because, like any company above a certain size, probably 10 people is that certain size. Google is a… Hydra has many heads and different teams do different things. There’s not sort of a great master plan that they all work to apart from making money. So, it will be interesting to see whether the Google web properties find another way to a gently nudge people to download Chrome.

**Vadim:** Well, the Šime’s experiment shows that Google is kind of fine with empty user agent. So, most of their services were working as they used to work with the user agent string. And I can tell by my experience, I’ve been using Firefox as my main browser for a year or maybe more already. And it used to work terribly and when I tried it, a couple years ago, but these days it works totally fine, in my case. So, probably Google decided to stop playing around with serving websites and there are services only for Chrome. Well, they changed something. But for Apple, for some other sites, like Twitch blocks it, like Facebook trying to tell you that you’re using the wrong browser. Ars Technica and some others. So yeah, the web is not fully ready for empty user agents strings and it’s probably going to be a ready for the frozen one. But we’ll see. We’ll see.

**Bruce:** Well that’s the good thing. I suppose, if Chrome and Safari are doing it, that is enough of a percentage of the population. That the websites will probably have to take heed. And I know Safari isn’t a great percentage of the web, but we know that everybody fetishizes their iPhone users more than anybody else.

**Vadim:** Well, I believe on mobile, the Safari’s very strong. Well, at least in US and most businesses are targeting their interests to US. So, but I believe it’s also.

**Vadim:** Firefox’s planning to do something like this. So, it’s not just firing Chrome, it’s Firefox. So, basically every browser… Well, not sure about Edge, but, I think, they’re also follow. So, basically user agent string is going away. Well, at least in form it used to work for us.

**Bruce:** Good. RIP user agent strings.

---

### Safari vs PWA

**Bruce:** Talking of Safari. What’s our last topic Mr Makeev?

**Vadim:** The latest news and the latest scandal, I would say, it’s not just news. it’s that Safari is planning to freeze… Well, it’s already froze the third party cookies. On March 24th, they announced that they’re going to block cookies by default and more. More on that later, but so they used to have this intelligent tracking prevention algorithm built into iOS and macOS and other platforms. They have, basically, it was the way for them to decide if this third party cookie is going to track you or if it’s there for a reason. For a reason that useful, for the actual user. But then they realized that there is a way to trick this ITP thing and there is a way to fingerprint it based on that behavior as well and some other problems. So, they decided to just completely turn off the third party cookies.

**Vadim:** I agree with community that it’s bad timing for this because it’s always good to work towards security and privacy of our users and as web user I feel that it’s a good thing to do. But timing, I’m not just a user, I’m a developer. These days Chrome is trying to freeze their release schedule or at least really is only security updates, not new features. So, developers would have some time to help their companies or to help their families to overcome this problem. We have this coronavirus situation, but Safari, yeah, decided to release it immediately and the timing is really off with this thing. What do you think Bruce?

**Bruce:** Any kind of major change at the moment is a bit off, but there’s also the Progressive Web Apps story.

**Vadim:** Oh yeah. Somewhere along the lines, somewhere at the last third of their blog posts they said, Oh yeah, by the way, we’re also going to disable JavaScript storage for websites that weren’t interacted with by user for seven days. So, it’s IndexedDB, local storage, media keys, session storage and Service Workers registrations. Basically every thing that you can set locally or store locally would go away, if user wouldn’t interact with your website for seven days. Which is, well, it’s not something that you would rely on, on a typical website. If you’re storing your information only locally, you’re going to lose it because browsers, they have limited memory, they have limited storage on mobile. it’s always full of photos, applications and things like that. So, it’s not a reliable storage. So, the typical thing for developers to do is to have a local copy in your browser storage and to synchronize it on server.

**Vadim:** Every time you have network connection, don’t wait, just synchronize it on server and you’ll be fine. But it’s not the case for PWAs or it’s not the case for the modern approach. We decided that we need to compete with native applications. That’s where this web manifest and PWA thing came and the Service Workers and things like that. So, we decided with that we need offline storage that we need to rely on extra proxy, saving between the website and the server and taking care of having resources. And Safari haven’t implemented it immediately. It took them a couple of years to decide if they’re needed or not. And we thought… Yeah, they totally fine with offline web. And they also upgraded their PWA implementation in iOS, which is not PWA, but they’re using some parts of it. And also they are also afraid of the word itself. In every Apple communication, you wouldn’t find in PWA words. Why is it so, Bruce, do you have an idea?

**Bruce:** Why are they so anti saying PWA?

**Vadim:** Yeah.

**Bruce:** I think they, my big conspiracy theory, Apple have a vested interest in not making people aware that you can have web apps that compete with native apps because they make a considerable amount of money with their app store.

**Vadim:** So does the Google.

**Bruce:** Yes, Google has a vested interest in the web being able to do all the things that apps can do because they want the information not to be siloed in apps, so they can do the search and then monetize it. Apple have no interest in the open web being able to do the things that apps can do because otherwise they might not be able to sell as many apps.

**Vadim:** Right. So, they’re trying to hide this information from app developers, so they wouldn’t run away from app store to the web.

**Bruce:** Well, app developers have a vested interest in not selling through the app store because Apple take 30%. On the other hand, how do you monetize a web app? Nobody really knows.

**Vadim:** Well, there are ways, but yeah, it mostly involves ads and some other, not direct in income sources.

**Bruce:** But yeah, I personally think, and this is not me being rude to the WebKit Team because the WebKit Team want their product to be the best in the world, obviously, but these are decisions that Apple makes. And Apple is not WebKit and WebKit is not Apple. I think they want the browser to be good enough that people don’t hurl their iPhones out of the window and go to Android, but they don’t want this to be good enough that it can compete with native apps.

**Vadim:** Yeah, it’s probably the case, but for this problem with JavaScript storage, I think they’re trying to protect users. But they’re going too far, I think. Well, it would definitely protect users, but it would make their lives not as good as it would be with offline capabilities. You might say, seven days, it’s enough for browsers to decide that you don’t need this storage anymore, but it’s not the case with a Chrome. it’s not the case with other browsers. They wouldn’t clear the storage and I think developers would be discouraged to compete with native applications. They would keep on doing regular websites. Like all of the companies trying to put some new features, some new technologies and APIs on the web. This is very good for us as a community, as like front-end community, but in some cases Apple is making some steps back and which is very, very, very bad for the platform. I think

**Bruce:** I agree. I mean they did caveat it, by saying, the seven day limit doesn’t apply, if it’s been installed to homescreen, but installing to home screen is quite tricky, I’m told on iOS. I don’t have an iOS device, but you have to hunt through the many options. There’s not an easy way and they don’t do ambient badging, which is a horrible phrase, but that’s when the browser can say, Hey, you can install me if you want to. The thing is, is not every progressive web app is designed to installed to home screen and not every Service Worker is to make a progressive web app. There’s a legitimate use case for Service Workers to enhance performance, which benefits us all. Arguably, iOS users are less concerned about performance because their phones are whizzer and faster, but they still can be on bad networks.

**Vadim:** And the native apps have their limitations. They used to be limited to a single form factor of a device, but these days apps they can adapt to your device, which is a good thing, but still native apps are created only for this platform, only for this device, in most cases. And as for the web, it can take a lot of shapes and forms. It can be opened and e-ink reader, it can be printed, it can be exported to PDF, it can be projected on the wall. It can be installed as application, that would mimic the native application behavior. Apple is trying to limit this behavior, so they wouldn’t compete with native apps, I think, or they’re trying to care about security and privacy too much and I’m not sure if there’s too much for security and privacy. I don’t know. I’m a bit confused by the situation.

**Vadim:** I think they’re priorities somewhere in the wrong place. Considering our background and experience in the web, I think, they’re not too much in love, in the web. They’re in love with their users. They’re trying to protect them, but they’re not seeing the perspective. They see the web as a threat for their app store. That’s the problem I think.

**Bruce:** I agree. So, Tim Cook, I know you’re listening, Vadim and I say stop it. If you want some advice Tim, pop on our conference call with me and Vadim, just a million dollars for our consultant fee.

**Vadim:** I’m willing to do this for free and pay all the money to Bruce.

**Bruce:** Sounds good. So, I think we’ve covered our topics for this month. Mr Makeev.

**Vadim:** I wouldn’t call it monthly podcasts. I think we should just record it any time we have something to discuss.

**Bruce:** Sounds good to me.

**Vadim:** Flexible schedule is always better.

**Bruce:** Indeed flexible, just like the web. Anyway, folks, thanks for listening. You’ve been listening to Bruce Lawson.

**Vadim:** And Vadim Makeev.

**Bruce:** Now wash your hands.

**Vadim:** See you soon.

**Bruce:** Bye.
