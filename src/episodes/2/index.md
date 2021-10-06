---
number: 2
title: 'Chrome 81, Firefox 75, gaps in Safari, webdev glossary, a11y for designers'
date: 2020-04-27
hosts:
  - Bruce Lawson
  - Vadim Makeev
chapters:
  - time: '01:46'
    title: 'Chrome 81: badging, MIDI, Fugu'
  - time: '07:27'
    title: 'Firefox 75: lazy loading, clamp'
  - time: '13:36'
    title: 'The future of HTML forms'
  - time: '25:41'
    title: 'Gaps in Safari release notes'
  - time: '29:56'
    title: 'Webdev glossary, a11y for designers'
notes: |
  ### Chrome 81: badging, MIDI, Fugu
  - [New in Chrome 81](https://developers.google.com/web/updates/2020/04/nic81)
  - [BopPad by Keith McMillen](https://www.keithmcmillen.com/products/boppad/)

  ### Firefox 75: lazy loading, clamp
  - [Firefox 75: Ambitions for April](https://hacks.mozilla.org/2020/04/firefox-75-ambitions-for-april/)

  ### The future of HTML forms
  - [HTML isn’t done! by Nicole Sullivan, Greg Whitworth](https://youtu.be/ZFvPLrKZywA)
  - [Can we please style the `<select>` control?! by Greg Whitworth](https://www.gwhitworth.com/blog/2019/10/can-we-please-style-select/)
  - [Having an open dialog by Scott O’Hara](https://www.scottohara.me/blog/2019/03/05/open-dialog.html)
  - [Polyfill for :focus-visible by Rob Dodson](https://github.com/WICG/focus-visible)

  ### Gaps in Safari release notes
  - [Can I use: Gap in Grid Layout](https://caniuse.com/#feat=mdn-css_properties_gap_grid_context)
  - [WebKit: Rename gutter properties to remove "grid-" prefix](https://bugs.webkit.org/show_bug.cgi?id=180290)
  - [Safari release notes](https://developer.apple.com/documentation/safari_release_notes)

  ### Webdev glossary, a11y for designers
  - [My new book covering about 2,000 key terms for developers by Jens Meiert](https://meiert.com/en/blog/the-web-development-glossary/)
  - [Accessibility for UX designers by Frozen Rockets](https://accessibility-for-teams.com/accessibility-for-ux-designers)
---

### Intro

**Vadim:** Hello. Welcome to The F-Word.

**Bruce:** The F-Word, of course, stands for front end, and the wonderful world of web development, browsers, web standards, and everything in between.

**Bruce:** I’m Bruce Lawson, coming to you from Birmingham, in the United Kingdom.

**Vadim:** And I’m Vadim Makeev from St. Petersburg, Russia.

**Bruce:** This is Episode 2. Since Episode 1, we’ve launched the website. What is the URL, Vadim?

**Vadim:** This is f-word.dev.

**Bruce:** F-word.dev. Be there, or be square. Because there’s show notes, with links to the things we’re mentioning in the show; of course, there’s a transcript, because we’re good web citizens and we believe in accessibility; and links to all the different places where you can download or stream the podcast, including good old marvelous, old-fashioned but still beautiful, RSS. Hurray!

**Vadim:** Yep. And also, please, please forgive us, this site is mobile only. Well, it looks okay on desktop, but we started from mobile, and then we’re planning to develop it further so it would look beautiful on tablets and desktops and everywhere else. But we thought that it’s MVC, or how they call it, in the start-up world?

**Bruce:** Minimum viable product, I believe.

**Vadim:** MVP? MVP, right. So I’m not a start-upper… whatever.

**Bruce:** No. MVC is model view controller, I think. Basically, folks, he’s the geek, and I’m the man who’s making millions from this podcast.

**Vadim:** Okay. Let’s go to the first topic.

## Chrome 81: badging, MIDI, Fugu

**Bruce:** Well, it’s what’s new in Chrome 81? Because Chrome have reestablished their normal release cycle, although I believe they’re going to miss out Chrome 82 and jump straight to 83, something like that. Even given the worldwide quarantine and lockdown, your chums at Google are churning away and making their browser. And there’s lots of interesting things in 81, but the most interesting for me, I think, is the badging API. And you know what that is, Vadders?

**Vadim:** Yeah. Basically, you can put a little red icon, with a number, on your application icon. So it’s mostly relevant to mobile platforms, but it’s also available on desktop, when you install your application, as PWA.

**Bruce:** Yes. Because, of course, PWA isn’t only for mobile, although I think that was the initial use case. But you can install a PWA into the desktop operating system as well, using Chrome as your browser, or a Chromium-based browser.

**Bruce:** But what interests me is that when PWAs were becoming in vogue, there was a lot of interest in push notifications. Now, I don’t know about you, Vadim, but I never let a website send me a push notification, because they’re just so intrusive. But the badging API allows you to give an indicator. And maybe it’s unread emails, maybe it’s telling you that something, a long running process that your PWA’s been doing has finished, maybe it’s converting a video or uploading an image, but these thing don’t interrupt you in the same way that a push notification does. It just sits there, glowing red to tell you that something’s happened, but not actually interrupting your workflow, or making a beep while you’re trying to watch the TV. So I think that’s a good thing.

**Vadim:** Yeah, definitely. And I think that they also integrate it into your operating system well. You don’t even have a choice as a web developer to change them, and it’s a good thing, I think.

**Bruce:** Yeah. Yeah. Basically, it will use whatever your operating system uses. So, for example, on Android, you just get a red dot, you don’t get the opportunity to put any text in there.

**Bruce:** But the wider story behind this what Alex Russell, the sinister mastermind at Google, and a good friend to Web, calls Project Fugu. Which is, basically, folks at Google identifying gaps where PWAs and websites can’t do things that native apps can do, and trying to fill those gaps. And this tight integration, with the badging mechanism and the operating system, has been a gap, as well as thing like WebBluetooth, WebUSB even, WebMIDI. And they’re making APIs, and then origin trialing them, to close those gaps. So there’s an ever decreasing list of reasons why you would automatically try to make a native app these days. And as champions of the Web, I think you and I will both be happy about that?

**Vadim:** Yeah. I actually tried… You would be surprised, probably, but I tried WebMIDI last year. I was really surprised to figure out that it’s actually useful. It sounds like, something like for hardcore musicians, or someone who’s trying to do something related to music, but I’m not a musician myself. But I have a hobby, once in a while I play drums. So I have this drum pad, electronic one, so basically you can connect it to a computer, or your iPad, for example, and connect it to your GarageBand, or applications like that. So you would play with the sticks, just like you would do on regular drums, but then it would send MIDI note to your software, and it would make a sound. And it’s not just a note, but a level of loudness, and everything, so it’s very accurate.

**Vadim:** So I went to manufacturer website, looking for an app to control my drum pad, and I realized they offer a web application for Chrome. So I connected my device to laptop, and then I opened Chrome, and I configured it via browser, via WebMIDI. And was really surprised to see something, not on stage of a conference, not in some silly demo with some Arduino nonsense, but in actual life, you know?

**Vadim:** I was really, really surprised. So I’ll probably give you a link to this drum pad.

**Bruce:** Yeah. Please do. Interesting that you say you’re not a musician, but you play drums. As a guitarist, and a vocalist, yeah, I absolutely concur! it’s that old joke, what do you call an animal that hangs around musicians? A drummer.

**Vadim:** Yeah. I’ve been expecting this joke from you!

**Bruce:** And sorry to our old friend, Chris Mills, as well who is a marvelous drummer. And talking of Chris Mills, he wrote an article about Firefox 75, and their ambitions for April.

**Vadim:** That was very smooth, Bruce. Like, sliding from Chrome to Firefox, via Chris Mills, and… Oh yeah!

**Bruce:** Thank you.

## Firefox 75: lazy loading, clamp

**Vadim:** Anyway, Chris Mills wrote this piece at Mozilla Hacks blog, mentioning Firefox 75. So, basically, the main thing he discusses is developer tools’ additions they introduced in Firefox 75, and some of the new Web platform features as well.

**Vadim:** So I’m not going to go through DevTools in Firefox; they’re just great. So if you haven’t used the ones that related to CSS, you’re missing a lot; they’re very good for debugging phones, and flags, and creating things like that, relating to layout. So they are way ahead of Chrome, and other browsers, in this area.

**Vadim:** But speaking of web platform updates, they finally introduced a loading lady attr… loading lady?

**Bruce:** Loading lady!

**Vadim:** They finally introduced this `loading="lazy"` attribute; it’s the way to load your images; not immediately, while the rest of the page is rendering, but once user gets closer to this image. Not only `<img>` element, but also `<iframe>`. But it’s implemented in Chrome only. So in Firefox case, it’s only for images, which covers most of the use cases I believe?

**Bruce:** Yeah. And to be fair, it hasn’t actually been standardized in Chrome yet, so Firefox are waiting until the spec settles before they implement it for `<iframe>`.

**Bruce:** But it’s generally a good thing. Again, it’s a nice, progressive enhancement. If your browser doesn’t understand loading equals lazy, it just ignores it, and the default is eager, so it will load it immediately. And with my English teacher hat on, because I used to be an English teacher, it annoys me because the antonym of lazy, is not eager, the opposite of lazy is diligent! So it should be `loading="lazy"`, and loading="diligent". Honestly.

**Vadim:** Well, it would be easier for me, with lazy and eager, because I’m not a native English speaker. So I’m sorry Bruce.

**Bruce:** Well, yes. I mean, that ship sailed anyway when, apparently, for the video API, the past tense of seek is seeked, when it is, of course, in English, sought.

**Bruce:** So, yeah, that’s why I’m giving up on HTML now!

**Vadim:** Anyway, but this `loading="lazy"` behavior, if you didn’t know, it’s different from browser to browser. I saw some graphics showing how exactly it’s different. I’m not sure I got the idea but, basically, I wouldn’t expect exactly the same behavior from Chrome and Firefox in this case. And Safari is still behind on this, on this feature, so…

**Bruce:** Really? Safari?

**Vadim:** Yeah.

**Bruce:** Gosh!

**Vadim:** Yeah. Who would have thought?

**Vadim:** So, `loading="lazy"` is an enhancement. Please use it, and use it wisely. I wouldn’t put it everywhere. I would try to optimize the loading so it would work better for end users.

**Bruce:** Yeah. And what I like about it, as well, is it’s one of those things where the browsers are free to apply their own heuristics. So a browser might, for example, if it notices it’s got a really fast connection, it might disregard you saying `loading="lazy"`, and load it anyway because it can. Again, it’s one of those things where you, as a developer, are giving the browser a hint as to what you deem important or not, but it is free to make its decisions based upon what it knows of the device, the current network capabilities, etc. And I like these kind of things because, developers, we are giving hints to the browser, rather than commanding the browser. The browser is a user agent, and it works for the user, not for the developer.

**Vadim:** Yeah. I really like what is happening between us and browsers; like, we’re giving hints to each other. So browsers tell that user prefers reduced motion, and we’re hinting, browser, that we want this image to be loaded lazy. we’re not trying to implement something and hide it from browser. So browser now have an idea that something’s happening, and this is developer’s intention, so they could work around it.

**Vadim:** Again, if it’s a proxy browser, if you’re on major connection, they can just lazy load everything without even asking you. So there are some interventions in browsers that do terrible things, according to developers, but they’re doing this for users, so they have a right to do this.

**Bruce:** Absolutely.

**Bruce:** And there’s a couple of other interesting things, in Firefox, coming up. I like their CSS, `min`, `max` and `clamp`. So you can say, for example, if my viewport is less than this, my `<h1>` can’t go less than `3em`; if my viewport is wider than this, I want my `<h1>` to be `5em`; and if it’s in between, I want it to be `4vh`. It allows for a lot more of a terse syntax, and a lot more understandability, I think. it’s a good thing. it’s not going to change the world, but it makes our life just a little bit easier.

**Vadim:** Not only that, I think there was a trend for developers to use viewport units just as they are, like phone size, like `5vw`, and it would break the zooming, it would make text unreadable at narrow viewports. So we should either use calc to combine viewport units with rems or pixels or whatever you prefer, or, in this case, use this `clamp` function to make minimum and maximum values, and something flexible between them.

**Bruce:** Again, yeah, working for the user.

## The future of HTML forms

**Bruce:** Coming up next is a very interesting collaboration between our chums at Microsoft and our chums at Chrome. I first saw this in a video called “HTML Isn’t Done!” And it’s a collaboration between Greg Whitworth, who worked on the Microsoft Edge team, and Nicole Sullivan, who’s a PM at Google For Chrome. And it’s a video from the Chrome Dev Summit 2019. This is important in and of itself, because it shows that Microsoft is heavily invested in improving Chromium, now that it’s using it for the new Edge browser; they’re not just taking Chrome and skimming it, they are doing a lot of work in Chrome, like we were in Opera, when we initially moved.

**Bruce:** So Greg and Nicole have done a lot of work on looking at forms in HTML, and specifically forms in Chromium; they’re looking at the accessibility of them. And the Microsoft team have made a lot of commits to make the accessibility of the forms better, giving them the right ARIA information, etc. They’ve also revamped them, because the default forms in Chrome were not only butt ugly, but they were butt ugly in different ways; it didn’t look like they had a style guide, so much, as a sort of whirlwind had gone through; and there was different forms, from the late ’90s, through to the early 2010s. So now they’re all looking a bit nicer, although somebody told me that `<datalist>` seems to have been forgotten about, but I’m sure they’ll sort that out.

**Bruce:** But the most interesting thing for me, here, was that Greg and Nicole have been looking at what it is about form controls that are the pain-points for developers. Because we’ve all seen sites where they don’t use real buttons, they’re using nested divs, or they’re basically making a `<select>` control out of nested divs and spans, rather than using the default. And primarily, the reasons that developers do that is because the stylability of forms is so limited.

**Bruce:** So Microsoft and Google have been looking at ways to address that; how to have arbitrary HTML inside `<select>`, so that for example you can have things like an icon inside an `<option>`, rather than just text. And looking at the stylability and the extensibility of the default date picker, file upload picker, radio, and checkbox. And that should allow us to style those things better, to extend them better, so that hopefully people will stop using divs and go back to the native semantics, because the native semantics give us so much for free, in terms of keyboard accessibility, default behaviors, etc.

**Vadim:** I’m not sure. I used to think that browsers gave up on form styling, and there’s no way we can solve this problem by just enhancing existing form controls, or allowing developers to go deeper into Shadow DOM. They consist of something inside, but it’s too complicated, it’s not backward compatible enough, they need to come up with a single solution for every browser.

**Vadim:** Looking at this talk, looking at what they do together, I started to think that it might be possible. I used to think that there’s another way to solve this problem; there is a way to introduce some other form elements, some custom ones, probably based on Custom Elements and Web Components. So they would have all those modern things that you can use to style web components, like slots and…

**Bruce:** Part and theme, isn’t it? Or it was called that.

**Vadim:** Yeah. Yeah, I think, theme, or something like this. Yeah. So I thought that we’re going to go this way.

**Vadim:** And also, I’ve been following updates from Chrome, and they introduced some new events, and some new APIs to form submission, basically, so you would be able to serialize the form and gather the data, even from Custom Elements, not just from inputs and other built-in form elements. I believe, currently, there is a way to make something built of Custom Elements and Web Components, to be submitted as a form. So I thought that was the way to go for browsers. So maybe the direction is changing, or those things could co-exist.

**Bruce:** Maybe the idea is to go hand-in-hand, give us some better default form elements, but allow extensibility with Custom Elements. I know they’re talking about developing a native toggle switch for Chrome. I mean, yes, a checkbox is an off/off thing, but it doesn’t have the `aria-pressed` defaults, and it doesn’t look like a toggle switch.

**Vadim:** And it also conveys a different semantics, even for visual users.

**Bruce:** Yeah. Yeah. And I know they’re also looking at virtual list, aka virtual scroller, also, aka UI table view, which is the big list you can scroll through.

**Vadim:** I’m not exactly sure, but I think they decided to give up on this as well.

**Bruce:** What!

**Vadim:** Well, some of them, that’s for sure, this `<toast>` element, and some others, they definitely decided to stop developing in this direction.

**Bruce:** We’ll see. But I like the way that they’re going, or I like the thought process of extending and allowing us to do this, so that your select will still work in IE6 but in a modern browser, you can have an icon and your options. And I like the fact that Microsoft and Google are collaborating, seemingly, very harmoniously, on Edge, and on Chromium, because I think that is going to be better for us all.

**Vadim:** I think I wrote a blog post on how to style a checkbox into a toggle button. It wasn’t accessible… Yeah, really, it wasn’t, but I wrote it, like, five years ago, or something like this. So it’s not impossible to do. And there are ways to do this using some ARIA roles. And sometimes, even without JavaScript you can achieve some good results. And even for `<select>` and `<option>`, yeah, there is a way to style it before it drops down; it’s not a big deal.

**Vadim:** But as for other elements, UI elements that we use daily in our web interfaces, that’s another question. Do we want them to be implemented in HTML and natively in browsers as well, or are we happy to build them, every time from scratch? I don’t know.

**Bruce:** That’s the question isn’t it? Tabs, and accordions, and that kind of thing?

**Vadim:** Yeah. Remember `<dialog>` element? it’s still floating somewhere, not dead or alive. it’s implemented only in Chrome, but it’s basically unusable from accessibility perspective.

**Bruce:** I think that’s an example of browser engineers not getting accessibility specialists involved early enough. I think Scott O’Hara has an article on why the `<dialog>` element, as implemented in Chrome, doesn’t basically help very much, which is a shame. It’s a shame, because the `<dialog>` element is an excellent idea, and let’s just hope it can be implemented correctly, and repaired in a way that doesn’t break existing implementations of it.

**Vadim:** Speaking of interface problems that are not currently presented within the Web platform. While building our The F-Word website, I used this pattern called tabs. It’s a list of panels, all of them are hidden but the current one. So I put show notes in the first panel, and transcript in another one, so if you have different needs, or different interests, you can choose whatever you want to read. Because transcript is long enough; we were talking for 40 minutes there.

**Vadim:** And I thought, I want to do this in an accessible way. So I went to this WAI-ARIA spec, called WAI-ARIA Authoring Practices. So it’s basically a collection of different UI patterns, like links, menu buttons, sliders, tabs, toolbars, window splitters, alerts, buttons, breadcrumbs. So, not all of them, I think it’s still lacking some of them, but most of them could be freely used by any who wishes to implement accessible solution.

**Vadim:** So basically it’s a list of UI patterns that you can copy; it consists of HTML, CSS, and JavaScript, ready to be implemented on your website. And most of them are based, not on class names, so you could implement your own styling. And they usually use ARIA attributes, in CSS selectors, and JavaScript querySelector calls. So there are pretty much drop in solutions, so you can basically include JavaScript, you can adjust your HTML a bit, and you’re good to go.

**Vadim:** So I just took this tabs pattern, one of them, from this spec, and I adjusted it a bit. I found a bug, and I pull-requested the fix to the GitHub repository. So it works with a strict mode in JavaScript as well. It used to break because of some variables in global scope. Anyway, so now it works, it’s fully keyboard accessible. You can tap, current tab, and then press the arrow key, and press space to activate another tab.

**Vadim:** And also I implemented one trick to this website, one JavaScript polyfill for `:focus-visible` pseudo-class. So there are two scripts behind this website, one of them is tabs.js and the other is focus-visible.js. So what `:focus-visible` does, it hides the focus ring from users that are using the mouse to interact with the website. But once you start tabbing through interface, you get custom blue outlines that are clear enough to understand. They appear only when you need it, and this pseudo-class is not currently implemented in any browser, as far as I know. it’s in the spec, and there is a good polyfill for this. I mean, it’s pretty reliable as far as I know.

**Vadim:** And yeah, try to use our website using mouse, and then try to switch to tab, and shift tab, for navigating it. I think you’ll be surprised to see it works, in a bit different way, but every time it’s good and accessible.

**Bruce:** And yeah, a plus one for the WAI-ARIA Authoring Practices spec. I’ve pointed many teams, that, when I’ve been consulting for them, and saying, “just copy that implementation.” Because not only is it keyboard accessible, but it’s keyboard accessible in the way that a user who needs it, would expect it to work. You’re not having to learn how people use the keyboard, or use their assisted technology, it’s just copy and paste it, it’s from the W3C, so it’s open.

**Bruce:** Talking of open, gaps are open, and there are gaps in Safari release notes. Do you see what I did there, Vadim? Another brilliant segue. Thank you. I’m going to have to lie down after this.

## Gaps in Safari release notes

**Bruce:** Tell us about the Safari release notes? Because I don’t read them. Because I don’t use Safari because it smells.

**Vadim:** I feel bad about it, about this topic, because last time, in our first episode, we said a lot of bad things about Safari, and now I’m about to say some other bad things about Safari. So, should I go?

**Bruce:** Yeah. You go. Because Tim Cook’s going to listen to this, and he’s going to go down to the Safari team and tell them to do better next time.

**Vadim:** All right. So there’s a Grid Layout spec, you know?

**Bruce:** I’ve heard of this.

**Vadim:** Right. And there is a way to specify rows and columns, and spaces between them, called gaps. And in original grid specification, there is a property called `grid-gap`. But then it got renamed from a `grid-gap` to just `gap`. So now we have `gap`, `column-gap`, and `row-gap`, which are the new universal properties that are supposed to work in every modern browser, instead of the old one.

**Vadim:** I always thought that using those unprefixed properties is not compatible with some browsers. And once in a while, I would go to Can I Use… and check if it’s ready to be used. And I think they implemented it somewhere around Chrome 61, so it was released in 2018. And also they implemented in Edge a while ago, and also in… Yeah, it was implemented in Firefox in 61, and in Chrome in 66, so, like, some time ago. I thought that it’s not supported in Safari because, Can I Use… database used to tell that it’s not implemented in Safari, in any version of Safari.

**Vadim:** So I thought, yeah, I want to support Safari. I don’t want Safari users to see no gaps between columns and rows. And I thought, I’m not going to do this auto-prefixing thing that would fix those, I’m going to use the old version of this property. And speaking of old version, it’s supposed to work forever, since it’s been around in the initial version of the spec, and it was implemented in browsers for backward compatibility; it’s supposed to stay.

**Vadim:** And what was the reason for them to remove this grid prefix? Because currently, in Firefox, it’s possible to use this gap property on flexbox as well, and it’s implemented only in Firefox. I think implementation to Chrome and Safari is coming as well, so let’s hope it will come soon because it’s super-useful to have these in flexbox as well.

**Vadim:** And what was the problem with Safari? That, actually, information in Can I Use… database wasn’t correct. I figured out, with Šime Vidas’ help, that they implemented in 2018 somewhere, in Safari 11 or 12. And “somewhere in between” is the most accurate way to describe it, because I have no idea when they implemented it. I went through all of those release notes they used to publish, I went through all Safari technical previews, looking for `grid-gap` property mentioned there: there is nothing. They silently supported this property without letting developers know. And by looking at Can I Use…, and actually it’s based on MDN database. I was thinking that, yeah, it’s not supported, and what can I do? I’m going to keep using the old version of this property. So I was relieved on one hand, and on the other I was disappointed that they, again, let me down.

**Bruce:** Tim Cook, Vadim is feeling let down. I’m just going to give you a moment, Vadim, because I know you can’t see, listeners, but he’s sobbing gently.

## Webdev glossary, a11y for designers

**Bruce:** Before we end today’s show, we’d like to draw your attention to a couple of cool, community resources. there’s a new book by Jens Meiert. Tell us about that, Vadim, after you’ve blown you nose?

**Vadim:** Okay. I’m back.

**Vadim:** So Jens Meiert published a book, it consists of around 2,000 words, words that we, as web developers, use every day, and words that might not be clear to everyone. I’m not talking about your grandparents, but I’m talking about your colleagues; sometimes they’re just beginners, sometimes they have no idea what you’re talking about, and sometimes you want to look up if you’re using this term properly. So there is a book with a very clear explanation of each word, with cross-references between… it’s like proper dictionary.

**Vadim:** And I really recommend this thing. It costs only $5, but you can pay $10 if you’re grateful to Jens. I paid $10, so you can do the same. it’s available in pdf, ePub, or MOBI something… it’s probably for Kindle. I really recommend this one. And it’s also it’s sort of open-sourced, because there is a GitHub repository called Web Development Glossary Forum, which Jens is using to collect the ideas for this dictionary.

**Vadim:** So if you go through this dictionary and you wouldn’t find… Well, he calls it glossary. And what’s the difference between glossary and dictionary, tell us, teacher Bruce?

**Bruce:** They’re different because one begins with a “G” and one begins with a “D”. I think glossary defines terms, and dictionary defines words. I don’t know. I’m making it up!

**Bruce:** But it’s really good. And when Vadim said it’s 2,000 words, it doesn’t mean that the book is only 2,000 words long, there are 2,000 different terms defined in there.

**Vadim:** Yes.

**Bruce:** it’s astonishing to me, that our industry has 2,000 jargon lumps, as I like to call them, but it does. I mean, FOUC, F-O-U-C, I know what I means, but I can perfectly understand that somebody who’s maybe new to CSS…

**Vadim:** Okay, Bruce. Let’s play a game. What is FMP?

**Bruce:** FMP? I don’t know, Vadim, what is it?

**Vadim:** First meaningful paint. it’s a performance…

**Bruce:** Oh yeah! That’s one of those performance things that confuse the life out of me. there’s always a new one, like, “first insightful comment”, and most websites, there’s never one of those! “First meaningful trouser press”, I don’t know!

**Vadim:** So yeah, it’s full of such words. You can read what ECMA means, like ECMAScript. I had no idea.

**Bruce:** What is ECMA? European Computer Manufacturers’ Association, or something?

**Vadim:** You knew that?

**Bruce:** Yeah. Am I right?

**Vadim:** Yeah. Something like this.

**Bruce:** Well, you see, you can keep your first meaningful paint! So that’s Jens Meiert’s The Web Development Glossary. Highly recommended.

**Bruce:** And the last community resource that I want to bring your attention to is a nice little site, I can’t remember where I found it, but it’s Accessibility for UX Designers. It doesn’t go into loads of technical detail, it just tells people who are designing a site, maybe before a developer’s even been engaged or told about it, just telling you the things that you need to take into account of. So, hopefully, by the time you give your sketch prototype over to a developer, you’re not going to have any fights with that developer, who will say, “I can’t possibly implement this.” A nice, simple, clear site by a Dutch web consultancy, accessibility consultancy called Frozen Rocket, about whom I know nothing. But it’s a really cool little site, so take a look at that in the show notes.

**Vadim:** And also, they mention a number of books, they recommend for reading further. And I can definitely recommend two of them, because I’ve read them, it’s Inclusive Components by Heydon Pickering, and Form Design Patterns by Adam Silver; both published by Smashing Magazine. And you can buy these in ePub, or hard copy as well. So read this, give it to your designer, and you can also read those books, because those are written both for developers and designers.

**Bruce:** And oddly enough, I didn’t know this, but I wrote a big article on accessibility, and I recommended those two books. The Adam Silver’s book is particularly excellent because you just take the code and go. Some of the incredibly sophisticated forms that he has implemented, with all the ARIA, with all the keyboard accessibility, you can just take it and go. It will save you many, many hours of work.

**Bruce:** Talking of Adam Silver, I see that the night is falling, the silvery moon is appearing above the horizon, the stars are twinkling, and so it’s time, gentle listeners, for us to say goodbye until next time on The F-Word.

**Vadim:** It’s afternoon, he’s lying!

**Vadim:** See you next time!

**Bruce:** Bye.

**Bruce:** Ruined my segue, there!
