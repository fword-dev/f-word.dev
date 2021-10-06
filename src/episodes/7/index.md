---
number: 7
title: 'We’re back, Chrome 88 beta, and The grand unification proposal'
date: 2020-12-15
hosts:
  - Bruce Lawson
  - Vadim Makeev
chapters:
  - time: '00:34'
    title: 'We’re back'
  - time: '03:41'
    title: 'Chrome 88 beta'
  - time: '17:36'
    title: 'The grand unification'
notes: |
  ### We’re back
  - [YaTalks 2020](https://yatalks.yandex.ru/)

  ### Chrome 88 beta
  - [Chrome 88 beta release notes](https://blog.chromium.org/2020/12/chrome-88-digital-goods-lighting.html)
  - [Declarative Shadow DOM at Web.Dev](https://web.dev/declarative-shadow-dom/)
  - [Vadim’s Declarative Shadow DOM demo](https://pepelsbey.github.io/playground/38/)

  ### The grand unification
  - [The Grand Unification Proposal (CSSWG)](https://github.com/w3c/csswg-drafts/issues/5743)
  - [The Grand Unification of Web Technologies (full version)](https://docs.google.com/document/d/1Ys-2Pb6PUVl8-5BMhM770trKNp_DmGrfskDlp-L_WSs/view)
  - [Why it’s good for users that HTML, CSS and JS are separate languages](https://hiddedevries.nl/en/blog/2020-11-25-why-its-good-for-users-that-html-css-and-js-are-separate-languages/)
---

### Intro

**Vadim:** Hello and welcome to the F-Word.

**Bruce:** The F-Word of course stands for frontend, the wonderful world of web standards, browsers, JavaScript, CSS, SVG, and everything in between and beyond. I’m Bruce Lawson, coming to you from Birmingham in the United Kingdom.

**Vadim:** I’m Vadim Makeev, from St. Petersburg, Russia.

### We’re back

**Bruce:** I’m going to ask you, Vadim, because I have a letter here and it reads, “Dear F-Word, bring back Vadim Makeev, he’s the best. Signed, the St. Petersburg web standard’s posse.” And actually, the signature reads, “Madim Vakeev”. So, where have you been?

**Vadim:** Well, I’ve been learning how to write again to actually send you this letter. Well, no, I’ve been busy with multiple projects. I just recently got back from Moscow where Yandex invited me to take part in their conference. And I have a weird experience just yesterday, I took part in debates for the first time. The real ones with cameras and studio, and two teams fighting each other over some idea.

**Vadim:** We’re actually fighting over idea that we should go back from quarantine to offices when it’s over, or just stay as remote workers. I’ve been defending remote work, but it’s really interesting to fight or just to discuss or argue about something. But they asked us to actually fight, not looking for middle ground or not trying to agree with each other, but actually fight. And I didn’t like it because it’s like box where audience is waiting for some blood and tears and tragedy.

**Bruce:** Was it for TV, or what was it for?

**Vadim:** It was live streaming at the end of the conference. So, it felt like TV because of those cameras and studio and everything.

**Bruce:** Number one, can I have your autograph because you’re obviously a massive star. But yeah, I mean that’s entertainment, isn’t it? They want the blood. They want the knockdown punch. Lots of people are saying, “Yes, you’ve got a good point.” That might make a web standard, but it doesn’t actually make entertainment. I thought about you. I mean, I’ve been working at home for 12 years, which is… I mean, it’s great now because my life, okay, my social life has been disrupted, but my actual work has continued much as before. And even before COVID, I couldn’t imagine working in an office environment again, it sounds like hell to me, but I can imagine that some people miss it.

**Vadim:** I tried to defend this idea, and I’m not 100% remote worker myself. It was a game for me, try to defend this idea. And I think I succeeded, but overall score was against our team. So…

**Bruce:** I can understand. I mean, you’ve got the kind of face that people want in their office. I’ve definitely got a face for remote working. So-

**Vadim:** Anyway, it’s good that we have this podcast where we can be reasonable not to fight each other, but actually-

**Bruce:** Bullshit!

**Vadim:** Really?

**Bruce:** No, I just wanted to have a bit of entertainment there.

**Vadim:** No, not for us.

**Bruce:** Okay. I agree.

### Chrome 88 beta

**Bruce:** So, tell me what is new in the merry world of browser development and standards?

**Vadim:** Yeah, we have announcement of Chrome 88 Beta. It’s usually a huge blog post full of everything they come up with starting from little CSS properties to huge origin trials. This time, I think they tried to hide the most important thing at the end of the blog post. They actually finally removed Web Components v0. It was the first implementation they shipped. How many years ago? At least five years ago.

**Bruce:** Oh, ages ago.

**Vadim:** Yeah. And they tried to remove it a few years back and they couldn’t because they realized that their own YouTube is written on Web Components v0 and many other projects out there using Polymer or just plain JavaScript, or maybe some less known frameworks. And they just couldn’t and for a while it stayed as reversed origin trial. They removed it, but they made a mechanism to enable it back if you need it. So, you could use meta tag with some key to enable it. But in the Chrome 88, they’re going to remove it completely. And maybe it will be a few megabytes smaller because of that. I didn’t know actually.

**Bruce:** Are you seeing much use of Web Components in any project you’re working on. I haven’t seen any W3C Web Components in the wild on stuff I’m on. I’ve seen React components, et cetera, but not the original vision of the W3C Web Components. I just don’t see them happening. Maybe I’m looking in the wrong places.

**Vadim:** Here and there, I see some trace of it. Mostly when you browse the web, you don’t see if it’s Web Component or just a div with some classes. But when you explore websites, when you open source code, here and there you can see custom elements and usually it’s a sign that there is a shadow root inside and some things are going on. But even without custom elements, you can have shadow root. And it’s really hard to detect it. Even via exploring source code.

**Vadim:** It could be just hidden somewhere inside of it. So if it’s custom elements plus shadow root, or without it, it’s easier to spot, but otherwise it’s really hard to see. But in projects that I’m working on, I don’t see it in source code. I mean, during development, I don’t see it’s… I don’t have a chance to work with.

**Vadim:** Recently, I actually had a chance to experiment with declarative shadow Dom. That was interesting.

**Bruce:** Okay.

**Vadim:** So, it’s just a way to enable shadow root without using JavaScript by just shadow root’s attribute with the value open. So, it will isolate your CSS, JavaScript and everything inside of a shadow root without using JavaScript. I think it was… They announced it somewhere in August maybe, or September—around that time. And I was really, really surprised to see it. And I tried it and it worked beautifully for my use cases because I’m still missing this style scoped thing.

**Vadim:** So you can, you can scope your styles inside of the element not globally. So, it would be a good thing to have. And I heard they’re planning to get it back, but in some other shape or form. So, these declarative shadow DOM it’s not a replacement for it, though it might work this way. I can probably add some links to show notes to my declarative shadow DOM demos. So our listeners could explore this thing or I think that they have a couple articles on web dev.

**Bruce:** Please post the links Vadim because, listeners at home, of course, you can’t see, but Vadim and I are also talking on Zoom. And what you can’t see is actually the back of my brain is splattered against my rear office wall, because I’d seen that there was discussion of declarative shadow DOM, but I didn’t realize it was actually in the wild because I’ve got to say, it’s scoped styles is what I wanted in a project for a big client three clients ago. And it had been deprecated and I didn’t know that declarative shadow DOM was actually a thing that existed. I thought it was only in discussion. So, it’s actually there in browsers now, like not behind a flag.

**Vadim:** It’s in Chromium, it’s unstable. You can use it without flags, but it’s not compatible. But there is a polyfill that would just look for this attribute and enable it via JavaScript. So there’s a way to use it in other browsers. So yeah, it will definitely help with modern frameworks and then server-side rendering for modern single page applications. It was their main goal. They weren’t trying to recreate this style scoping. They were mostly trying to make a server-side rendering work, otherwise for web components it’s really hard to… it’s impossible to make them work immediately after they delivered from server. You’ll have to get the HTML and then enable a shadow root via JavaScript only after some time.

**Bruce:** If you could hear a squishy noise folks, that’s the remnants of my hippocampus deliquescing through my ear.

**Vadim:** Don’t try to imagine it, don’t.

**Bruce:** Never go to Moscow again, Vadim because I’ve just missed the memo because you weren’t here to tell me. What else is in this blog post hiding away, that’s going to presumably make my spinal column disintegrate?

**Vadim:** I’m not sure if it’s going to do something to you, but no one knew that FTP existed in Chromium, but they actually removed it from Chromium 88. So, if you navigate FTP link in Chrome 88, it won’t even try to open it. Before, it used to show you the list of files and a name of folder, but they started to slowly remove it. And in the Chromium 88, they’re going to remove it altogether. And I would keep something even for navigating folders in Chromium, but it’s not my call to make such decisions. So, it would be easier for them to remove it since they don’t have a FTPS support. So, it wasn’t secure and it was some vector for an attack.

**Bruce:** Anybody under 50 who’s listening, by the way, FTP stands for “FileZilla, trust me please”.

**Vadim:** Yeah, something like that. So I used to deploy websites using FTP and you probably you too.

**Bruce:** Used to? I did that about a week ago.

**Vadim:** No, I mean for the last five years, I’ve been using SSH and some rsync for deploying files to a web servers. Not FTP because it’s outdated, it’s… There are problems. There are security issues connected to it. Even if you’re using FTP over SSH, even though. So, it was easier to just use SSH for me. So I won’t miss it. Not sure about you.

**Bruce:** No, I won’t. I suppose it’s one of those things, it’s like one of those artifacts of the early web, I mean, I can remember sitting there on a Friday night at midnight, pressing a button to deploy our production website, hoping, hoping that everything went right. And that was, I don’t know, 2006. Not that long ago, 14 years ago. Okay. Maybe a long time ago in internet terms, but, yeah, you’ll be telling me next gopher is removed from Chrome as well.

**Vadim:** This little animal or what they’re talking about?

**Bruce:** Now, really am showing my age. For me, the most interesting thing in that Chromium Blog is actually now you can use target=_blank and it’ll not be a vulnerability in Chrome. Finally, only are that how many years since our old Mathias Bynens discovered and proved the vulnerability. Finally, Chrome has sorted that one out.

**Vadim:** I think it was one of the few times where Chromium was the last.

**Bruce:** Opera was the first.

**Vadim:** Well, it’s, opera is always the first. But I remember Firefox implemented it a while ago and then Safari or vice versa, but Chromium took them a while to disable this. And it’s weird because it’s a security problem. And they usually respond to security issues fairly quickly. I think they might’ve found some compatibility problems or it would hurt their advertising business, or I don’t know why I would love to know. So, if your listeners know what was the reason behind it, please tell us what some on Twitter, for example.

**Bruce:** Yeah. And it wasn’t trivial or a particularly arcane vulnerability problem, which required a ludicrously unlikely set up. It’s basically, if you opened a link with target_blank, as lots of people like to do for inexplicable reasons, you were vulnerable to hijacking. It was as simple as that. It was plainly obvious security flow.

**Bruce:** And again, listeners if you believe that any of your sites are being used by people who aren’t on the most up-to-date Chromium. If you are opening a link in a new tab, you need to have no referrer and no opener in your rel tag or your rel attribute, sorry. That’s me hitting myself for calling an attribute a tag. After telling people there’s no such thing as alt tags, but yeah. Yeah. If you’re doing target equals blank, use rel equals no open and no referrer.

**Vadim:** So, I guess after this Chrome release, you can stop doing this because it will be defaulted behavior.

**Bruce:** Not everybody updates Chromium all the time.

**Vadim:** It tries to stay evergreen, but yeah, it’s not always enabled by default, by your admin or someone. And probably the last thing I want to mention today is aspect ratio of property. It’s now available in Chromium, and it’s going to allow you to make things like iframe, for example, or just a simple div to behave like an image. I imagine you have a image with width equals 100% and height auto. If you have it try to resize a window with such an image, you would notice that it keeps the aspect ratio based on the aspect ratio in the image itself. But if you want to have 16 by nine video, that’s responsive, it was really hard for you to have this video to keep it’s ratio based on the content.

**Bruce:** Oh, Yeah.

**Vadim:** They used to be this padding hack-

**Bruce:** This horrendous hack, yes. I use that on my sites.

**Vadim:** Well, it’s not a hack. It’s just, you would have your padding button calculated based on the width, not the height of an element sensor like this. And people used to have like outer element with a hide zero and panning button like 52.6 something to have 16 by nine. And in this case, you can just have any block with 100% and height auto plus aspect ratio property with 16 by nine. So, you can actually specify the ratio in this property. And the block will stay in this ratio.

**Bruce:** That’s good to know because for years, whenever I was embedding a YouTube video on my blog, I was going to a website called Embed Responsibly. And you type in the YouTube link, and it would vomit out some div soup with all these inline styles. And then that I discovered a WordPress plug-in that would do the same. And it’s one of those things you think, CSS is so unbelievably powerful in some ways and then you’re reduced to… not reduced to, but then you have to do some sort of weird casting of the chicken bones and some incantations to do something as trivial as that.

**Vadim:** If you use just an image or a video. I mean, the actual video element or actual image element, it works.

**Bruce:** Yeah, but it was iframing stuff in from YouTube, which everybody does.

**Vadim:** I’ll start replacing my padding hacks for such response videos soon. But not tomorrow because I think it’s supported in Firefox already. Not 100% sure, but it’s definitely going to be supported in a Chromium 88. Let’s see how Safari goes.

**Bruce:** Yeah, I was going to ask about the cross-browser stuff. I should keep my padding hacks for a little while.

**Vadim:** So we’ll have to wait for a while, but it’s a good sign. It’s there, it’s in a stable browser. It’s well, it will be stable soon. So yeah, another developer’s need solved.

**Bruce:** Good, and the moment that Brian Kardell can be bothered to implement Houdini we’ll be able to polyfill CSS as well. So make it happen, Kardell.

**Vadim:** Well, I think I would even pledge some money for this feature to be implemented in Safari.

**Bruce:** Why not indeed.

### The grand unification

**Bruce:** Talking of developer’s needs or lack of them. The world of… Actually I’m going to do a special voice here. _The world web standards was rocked by an email to the CSS Working Group. Only one man can save us now, Vadim Makeev._

**Vadim:** No, I’m not going to save you.

**Bruce:** Well, at least you can explain it to us.

**Vadim:** Yeah, I’m going to try it. So, there is a W3C organization on GitHub where they moved all the web specification development recently and there is CSS Working Group drafts repository. And there is an issue called The Grand Unification Proposal. Very pretentious I would say.

**Bruce:** Einsteinian.

**Vadim:** Not just unification proposal, but _The Grand_ one. Wow, I saw someone mentioned it on Twitter and I went to… Yeah, I like the web to be unified, universal, and good and available to everybody. Yeah, it’s for everyone. One famous person said it a while ago. And there’s a guy who proposed with all the etiquette it requires with all the story and the reasoning and everything. And it was very polite and nicely formulated idea to take everything and throw it out… out the window.

**Bruce:** What could you possibly replace it with?

**Vadim:** Just to try to guess.

**Bruce:** Could it be JavaScript?

**Vadim:** Yes.

**Bruce:** Gosh, there we are.

**Vadim:** I didn’t expect that. Seriously, I mean, I would expect it to be something new, Swift by Apple or Dart by Google or some other language with some completely different way of doing things. I would even consider it as a good idea or just idea worth discussing. But it’s just some person familiar with JavaScript and less familiar with HTML and CSS, trying to make his life easier. And that’s the main problem of this proposal. So in this issue, you’ll find just a couple of paragraphs explaining the very rough idea, but there is a Google document explaining everything.

**Bruce:** In great depth.

**Vadim:** Yeah, yeah. Super complicated document explaining how everything should be changed and replaced. It’s an interesting read actually. If you don’t have strong opinion about the web, if you’re just interested in such proposals or maybe in some good reading, it’s an interesting document full of ideas. And it definitely reflects these persons’… It’s not just a single person, it’s a team of colleagues that were trying to recreate the web in the shape or form they would enjoy writing and developing. And it’s totally fine to, to propose such things to be implemented because after all we’re listening, we’re trying to listen.

**Vadim:** I’m talking like I’m spec editor, I’m not. I mean the W3C and people around it or like some working groups and people developing browsers and web standards, they’re desperately trying to improve the process. They’re trying to listen to developers. But when your feedback is not trying to improve certain things, but trying to replace how things actually work without backward compatibility, without any attempts to understand how it works already and why is that. Without trying to understand how it became to be, without the knowledge of the history, it becomes not a feedback, it becomes something that you would close with a single comment like Tab Atkins did. “This is not an appropriate venue to discuss replacing the entire web stack”, period, closed. Closed and locked.

**Bruce:** It’s true. I had many complex thoughts when I read this and Vadim knows me personally, so knows that complex thoughts are not things that happen regularly to me. Usually it’s like food, beer, sleep. But I read it and first of all, I thought this is fascinating. It’s fascinating to see the mindsets of traditional programmer as I was before the web. I was a programmer. I worked on one environment and I could guarantee everything worked. There were limitations. You only have 8K in memory at any one time. But I knew that anything I wrote would work anywhere.

**Bruce:** And I knew that language and I knew that everybody was using the same kind of terminal and the same kind of video display. And I was happy as Larry, not Larry Page obviously, just any old Larry. So, I could understand the frustration of somebody coming from a traditional program environment to the web and hating it because of all the American politician would say, “All the unknown unknowns,” that we have to deal with.

**Bruce:** And it’s a schism of mindset if you like. It’s whereas those of us who grown up with the web or those of us whose professional lives have grown up with the web, we understand that the best thing about the web is that everybody can access it regardless of what device they’re on, et cetera. That’s the very worst thing in the world for somebody coming from this perspective.

**Bruce:** And there was a bit of a pile-on, which I lament because a lot of people were rude to the person suggesting it was going to make that person never, ever want to engage with the web standards community again, which is never a good thing. I mean, Tab’s comment was entirely correct and that wasn’t rude at all. It was not the venue to discuss that. But other people who commented in the Google Doc, I thought were unnecessarily rude.

**Bruce:** I hope they don’t do that again to somebody who comes with a more viable proposal, but from an equally naive perspective. I hope they don’t get subject to that kind of dismissiveness again, because it’s not what we want or need as a community. But yeah, so I confess, I also rolled my eyes and tutted a little bit when I was reading it. I have no wish to name or shame people, whoever they were. They meant it in the best possible way and I couched it incredibly, as you said, courteously and politely and answered the rudest questions politely and said, “Thank you for your feedback.”

**Bruce:** But they were saying, “It’s really hard to center things in CSS.” So obviously their knowledge of CSS was old anyway. It demonstrated once again, it’s almost the web’s become a victim of its own success and that now so many people are coming from other environments and wanting to program for the web without understanding why it is what it is that they hate it.

**Bruce:** And of course say like anybody else, they want it to be like what they know. And I really don’t know how to bridge that gulf of saying, “This is what it is because of these great reasons and yes, I know that it makes your life harder, but this is the web.” And then just thinking that I’ve got this bloody app, I want to deploy and it will be a piece of cake in JavaScript. And of course then they go to React or something like that and just vomit out div soup because it seems to work for them. I just don’t know how we bridge the gap, but you will know Vadim.

**Vadim:** I have no idea actually.

**Bruce:** What?

**Vadim:** Wait for it. Other than education, we have to talk about it more. Just like we’re doing right now. Bruce just finished his beer actually. So you probably heard it.

**Bruce:** I finished *a* beer, not all my beer.

**Vadim:** Yeah, sure.

**Bruce:** Well, that’s why there was that great blog posts by Hidde de Vries.

**Vadim:** That was a good reply. It actually highlighted one of the main reasons or main principles and a foundation of the web. It’s user faced.

**Bruce:** Yes.

**Vadim:** And your user always go first and there should be control over your medium, how you consume it. These days, every restaurant, every little shop, they have their menus published on their web page. And in most cases it’s just a PDF. Do you do enjoy those A4 format PDFs on the screen of your phone? I don’t think so. And the same for web. If there is no way for you to adjust it or to use it the way you want, but it’s really hard for web to still be the same universal medium.

**Vadim:** And even the preparing this discussion on my iPad, I try to open this Google Groups interface on my iPad and it’s not ready to be opened on iPad. It’s ready to be opened on desktop or mobile phone. And when it’s somewhere in the middle, it’s just fails miserably. So, I had to enable reader mode to actually read the first and the most important part of it. And it was the only way for me to actually read it.

**Bruce:** So, you used a different user agent for reader mode.

**Vadim:** It wasn’t even user agent. It’s basically a special mode in Safari browser that takes content from your page and renders in a subsense separate view. So no author styling, only user styling.

**Bruce:** So that old thing of people reformatting content for their own particular needs. That is so 1996, you use today to read a document about web standards.

**Vadim:** That’s why we need to have separate content, styling and behavior. It’s not the only reason. So, you would be able to read Google Groups poorly developed in some ways. There are many, many good arguments in Hidde’s article. Please go read it, because as developers we always think about developer experience and forget about user experience and Hitter tries to put it back in our perspective and make it first in our list of priorities.

**Vadim:** I think it’s really important. And it’s really good answer to this unification proposal. One of the main ideas behind this, a unification proposal, is to have JavaScript for everything. Not just declarative JavaScript for markup or declarative JavaScript for CSS. You could probably write it this way, but not. There was an idea not to have outwardly out, for example, or out auto centering or auto positioning, but to specify it in JavaScript like something, something.style.top 100 pixels.

**Vadim:** And if you need to resize your window, you’ll have to recalculate it manually, no browser magic, everything you do, you do it manually in imperative language like JavaScript. And it was so far away from what we have right now. And forward was so far away from this separation of content styling and behavior. And yeah, that was it. That was it just unify everything in a single language, no declarative things, no layers of content styling and behavior.

**Vadim:** Just everything under control of developers and developers tend to forget things if there’s no built-in accessibility. If there’s no built in cascade and a built-in way to replace styling and change styling based on user preferences, then developers won’t implement it and it will be unusable and it will break everything.It won’t be web anymore. It will be just a bunch of interactive PDF.

**Bruce:** Exactly, it’d be PDF. I just going to say that.

**Vadim:** It’s already there. Let’s just use it for poorly designed menus on the web.

**Bruce:** Absolutely agree. One of the things I’ve been doing with my current client this week is helping a new person on the team, who’s not terribly technical, learn the rudiments of accessibility. And the moment I saw Hidde’s blog post, I sent it to her. It’s like, this is why it’s good for users. The Grand Unification Theory was all about why it’s better for developers and I’m a developer.

**Bruce:** In some ways I would love it if I could just check something in one browser on my desktop and know it worked and I hit the pull request button. But he’d quite rightly said, that the web is for users as the HTML dev design principles say, “The priority of constituents is consider users over authors, over specifiers, over philosophical purity.” And that’s got to be the way we have a mechanism for delivering content from anybody to anybody. And that’s too important to sacrifice.

**Vadim:** I think even if you’re not a developer or if your desire or manager or someone just listening to this podcast, without any reason, even you can understand us. Every time I choose English as the main language for a certain interface, in 90% cases, it switches to American week where the first day is Sunday, because who else speaks English language in this world really? They do it all the time. And those are their point of view.

**Vadim:** I’m a developer in US and every other person in the world, speaking English, looks like me behaves like me, expect things like I do. And that’s the problem. So we need to have smart defaults at least in browsers. We need to have a way to change things for our needs. Every time I see it, I try to switch to English, a UK version, but then it starts to suggest weird UK words that I’m not used to.

**Bruce:** And of course in the UK, the week starts on Thursday and ends on Friday. So it’s actually better for you in many ways.

**Vadim:** So, in most cases I’m pretending like I’m British. That’s weird, because of you, developers; because of you.

**Bruce:** Anyway, Vadim. Oh, what’s this? Oh, I’ve got a new letter here from the postman, “Dear F-word. Thank you for bringing the intelligent guy back. Love St. Petersburg web standards people, Madim Fakeev.” Glad we could help St. Petersburg web standards people. Until next time I’ve been Bruce Lawson.

**Vadim:** I’m Vadim Makeev or Fadim Makeev, what was the name?

**Bruce:** No, you mean it was you?

**Vadim:** No, next time your turn. Write me a silly email or I mean, snail mail, what was the name of this thing?

**Bruce:** Letter.

**Vadim:** Letter, right? See your next time.

**Bruce:** See you next time, thank you for listening everybody. And all the links will be in the show notes. We’re very glad you listened. And please tune in again when Vadim’s busy social life allows.
