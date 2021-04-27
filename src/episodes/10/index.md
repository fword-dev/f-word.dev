---
number: 10
title: 'Eric in Igalia, what’s coming, CSS Nesting and Cascading Layers'
date: 2021-03-15
hosts:
  - Bruce Lawson
  - Vadim Makeev
  - Eric Meyer
chapters:
  - time: '00:40'
    title: 'Eric in Igalia'
    list:
      - title: 'First Day at Igalia'
        link: 'https://meyerweb.com/eric/thoughts/2021/02/15/first-day-at-igalia/'
      - title: 'Week One'
        link: 'https://meyerweb.com/eric/thoughts/2021/02/22/week-one/'
      - title: 'Igalia'
        link: 'https://www.igalia.com/'
  - time: '07:50'
    title: 'What’s coming'
    list:
      - title: 'Focus-visible in WebKit'
        link: 'https://opencollective.com/open-prioritization/projects/focus-visible-in-webkit'
      - title: 'CSS Working Group Drafts'
        link: 'https://github.com/w3c/csswg-drafts'
  - time: '22:54'
    title: 'CSS Nesting'
    list:
      - title: 'CSS Nesting Module (2020)'
        link: 'https://drafts.csswg.org/css-nesting-1/'
      - title: 'CSS Nesting Module (2015)'
        link: 'https://tabatkins.github.io/specs/css-nesting/'
      - title: 'Chromium issue'
        link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1095675'
  - time: '34:34'
    title: 'Cascading Layers'
    list:
      - title: 'CSS Cascading and Inheritance Level 5'
        link: 'https://www.w3.org/TR/css-cascade-5/#at-ruledef-layer'
tags: episode
layout: episode.njk
---

### Intro

**Vadim:** Hello, welcome to the F-Word.

**Bruce:** The F-Word, of course, stands for “front-end,” the wonderful and wacky wild and crazy world of browsers, web standards, the internet, and everything related to it. I’m Bruce Lawson coming to you from Birmingham, United Kingdom.

**Vadim:** I’m Vadim Makeev from Saint Petersburg, Russia. It’s not just two of us here today, we also have a guest, Eric Meyer.

**Eric:** Hi, I’m Eric Meyer, coming from Cleveland Heights, Ohio, United States.

## Eric in Igalia

**Bruce:** Eric, as long term denizens of the web will know, has been around since dinosaurs stalked the earth, since I had hair that wasn’t silver.

**Eric:** Back when the earth’s crust was cooling.

**Bruce:** Indeed, and taught me CSS, so thanks for that, Eric.

**Eric:** You’re welcome, I guess.

**Bruce:** It was actually your big red book, I can’t remember what it was called.

**Eric:** Oh, yeah.

**Bruce:** What was it, Meyer on CSS?

**Eric:** I believe that one was More Eric Meyer on CSS.

**Bruce:** More Eric Meyer on CSS.

**Eric:** Yeah, more, it was the sequel.

**Bruce:** It was great, because although I knew of CSS and been haranguing people to write it for ages, I hadn’t actually written any of it myself. And then when I came to read the specs, I thought I can’t make head nor tail of this, so of course I’d gone to the Noodle Incident and stole some code, but I didn’t understand how it worked. And Eric’s book basically took existing websites that were made with tables, because those are the kind of things we did back in those days, kids, and CSS-ified them, and that taught me. So thank you, governor.

**Eric:** Well, you’re welcome.

**Vadim:** In my case, I’m not that old. The cover of my book was green. O’Reilly’s Definitive Guide of CSS, or something like this. The fishes on the cover.

**Eric:** The fishes, the two fishes. The salmon.

**Bruce:** Oh, they’re salmon.

**Eric:** Very specifically salmon. They weren’t originally salmon, they were actually originally flying fish, but I talked O’Reilly into changing them, which my editor at O’Reilly was not aware that was a possibility.

**Bruce:** Why, are you particularly a fan of salmon, or…

**Eric:** Well, yes, but also if you think about it, the Pacific Northwest, the salmon swim up the Cascades in the Cascade Mountains, there you go.

**Bruce:** Here you have it, folks, a unique insight into the design of book covers on animal themed tech books, what an insight. But we didn’t just invite Eric on here to spill the beans about his salacious salmon story, oh no. We promised him a ruthless interrogation, because Eric, you have joined Web Standard’s best kept secret, Igalia. Tell us more, what will you be doing for Igalia, and who are Igalia?

**Eric:** Well, so Igalia is an opensource consultancy, they’re headquartered in pretty much the very northwest corner of Spain in a city called A Coruña, which I honestly had not heard of until I heard of Igalia. But it’s the part of Spain that sticks over the top of Portugal, it’s there. They’ve done a lot of open source consulting. They’ve also done a lot of work on browsers, so listeners to the podcast might remember when CSS Grid suddenly became part of browsers, Igalia did the implementation for Chromium and WebKit basically. They were sponsored by Bloomberg, so Bloomberg, the financial business in the United States, wanted Grid layout for various reasons, and they hired Igalia, “Make it happen,” at least in Chrome and Safari. Mozilla did their own implementation. They’ve done other things as well. If you’ve come across the name in this field, that’s probably where you came across it, was associated with one Grid.

**Eric:** So I mean, what I’m going to be doing there, it’s a little bit fluid, at the moment. I mean, I’ve only just started. I think I’m on my third week now as we’re talking, so…

**Bruce:** Senior, then.

**Eric:** Yeah, exactly. And it’s not a hierarchical organization, if I say they have a flight hierarchy that’s going to make it sound like they’ve done this Holacracy thing that was the rage a couple of years ago, that’s not actually the deal. But it’s not a very top-down… it doesn’t look like a DOM tree, let’s put it that way. To some extent it’s things that need doing that other people haven’t had the time or resources to get to, in some cases it’s things that interest me, and we’re figuring that out. So as an example, I’ve committed a few updates to the Mozilla developer network, either correcting or upgrading… correcting typos, upgrading a couple of pages I’m going to continue doing that. I’ll probably branch out into documenting some of the things that Igalia is working on bringing into browsers, but that aren’t well documented in MDN yet, that’s a longer term thing.

**Eric:** I’ve been working on some internal projects, and I’ve written actually a couple of draft articles that cover things that Igalia has added to browsers in the last year or two that once they’re brushed up I’m going to start publishing them in various places. I’m not going to name any of those places, because I haven’t contacted them yet, but the kinds of places you would expect to read articles about CSS features.

**Bruce:** Netflix.

**Eric:** Yeah, right, the Netflix block, 100%. Well, that’ll be part of the viral marketing campaign for Cascading Style Sheets, the Definitive Guide: The Series.

**Bruce:** I’ve heard that, too.

**Eric:** I hear Leonardo DiCaprio is playing me, I heard it from you so, anyway. Things like that there’s other stuff that will be happening, but that’s what I’ve focused on in the first couple of weeks. I mean, of course, besides coming on board, getting all my logins set up, all the stuff that happens when you join a new organization, all that of course had to happen as well, but yeah. I’ve been looking for a way to contribute more to the web documentation, the advancement of the web, that sort of thing, and Igalia turned out to be the right place. It really feels like the kinds of stuff they wanted me to do are the kinds of stuff I love to do.

**Bruce:** Will you be dusting off your C++ compiler and writing code going browsers, or are you more explaining Igalia to the world, or…

**Eric:** Not likely.

**Bruce:** So you’re kind of Devrel-ish.

**Eric:** Yeah, kind of, they don’t call it that, but yeah.

**Bruce:** VP of marketing or something. Outreach synergies.

**Eric:** Yeah, Advanced Junior/Senior Director of Leveraging Devrel synergies.

**Bruce:** I’m going to jot that down, actually, because went perm on Monday, so…

**Eric:** Congratulations.

**Bruce:** Thank you very much, yeah. Logins a bummer, eh, I’ve got 18 million instances of something called Okta on my phone and all this kind of stuff, it’s very weird.

**Eric:** Where did you go perm?

**Bruce:** A healthcare company called Babylon Health who want to make the healthcare affordable and accessible to everybody, so goes with all the stuff I’ve been banging on about.

**Eric:** Yeah, as of this morning as we’re recording, I saw Brad Frost just joined a non-profit as a full-time employee.

**Bruce:** And Vadim bucking the trend, you just left permanent and have gone freelance.

**Vadim:** Yep, I’m trying this for the first time in my life, so that’s going to be interesting.

**Eric:** Well, there are pros and cons on either side.

**Vadim:** Yep, I know.

## What’s coming

**Vadim:** So Eric, why don’t you practice your Devrel on us, why don’t you tell us what’s up related to CSS and Igalia? I heard about focus-visible implementation going on. Anything else, or it’s a big enough thing?

**Eric:** The DIR, the DIR pseudo class just landed in Chromium maybe yesterday, recently. So that’s landing, there’s more work happening. I’m not sure how much of it I can talk about to be honest, part of the being new at the company is that to some extent I don’t know what I’m not supposed to know, as it were, But the DIR pseudo class.

**Vadim:** I heard something about this pseudo class from public sources, so it should be fine.

**Eric:** You can select elements, I believe, based on their writing direction. Much of the work that I have seen happening, or that I’ve been talking with people about, seems to be internationalization focused. Some of the stuff that I might end up documenting as a long term plan is internationalization in ECMAScript, some of the internationalization stuff that’s happening there. There does seem to be quite a bit of interest from people who would hire Igalia to do this sort of thing, have more internationalization features, which I think is fantastic. I think it’s great.

**Vadim:** Yeah, in almost every release notes, I see these days from Safari, Google Chrome, Firefox, there’s always this Intel JavaScript API with something. Now it’s easier to show your dates or currencies, dates or something like that. It’s always good to see that native Java Script is actually making good old libraries obsolete.

**Eric:** Yeah, and the other thing that they’re working on right now is time methods and functions, or whatever they’re called, but stuff to make time easier so you don’t have to do all of, “Okay, how many leap years is this,” and “Is one of the years I’m spanning divisible by 400, because if there’s not a leap year,” and et cetera, et cetera, et cetera, right?

**Vadim:** I did this thing just yesterday, so yeah.

**Eric:** Right, you’re trying to bake all of that in. But yeah, and on the CSS front, one of the things that I’ve wrote in one of the articles I’ve written is about the logical properties, like margin block and margin-inline-start, and margin-inline, and all of those writing direction independent properties.

**Vadim:** Regarding that, I have a question for you. I always ask this question, because I’m not convinced yet that it’s a thing that’s deserved a lot of attention, because when I look at the typical design in Figma or somewhere else, when I hear some typical discussion regarding new interfaces or things that we need to implement, I don’t hear a lot of “Let’s put this thing on the inline direction or block direction.” We usually say “Top left, button right,” or something like this. And it’s the way we think, but when we have to localize interfaces, for example, we change the way we see things and then we apply logical properties so they would work universally, I would say.

**Vadim:** But these days a lot of people say the logical properties are supposed to replace those physical ones, or direction related to top right, button left. And I disagree, I think we should keep both of them at the same time, and in most cases we will probably default to the old ones and use new ones in some cases when we need to.

**Eric:** Well, I agree with you that it’s not a matter of replacement. The idea is not to have the logical properties replace what I call cardinal properties, because they point at the cardinal directions. There should be both, and there will certainly be times when you want to always have a margin on the top of a thing. But when it comes to text, and let’s be honest, the vast majority of the web is text. Even if you’re creating “web app,” there’s still going to be text in it, almost certainly, right? And if you want that to be easily localizable, then yeah you want margin block for your paragraphs or your headings, rather than margin top margin bottom, because if you do margin top and bottom and then you switch to a vertically written right to left language, then you have to have these special styles for that particular language that switch around what’s top and what’s bottom and what’s right and what’s left.

**Eric:** With the logical properties you wouldn’t have to do that. But, if you’ve got a box that you’re going to have on the screen, and it’s going to be laid out in a grid, then yeah you’re probably going to use top right, bottom left, because that’s what’s of interest. Another example where there are logical properties coming is with border radius, so rather than border top right radius, is it, then there would be something like border, start, start, radius, which would be the start of the block direction and the start of the inline direction.

**Bruce:** Okay, so top left in most sites I work on, but it could be bottom right on a vertical, right to left language?

**Eric:** Yeah. If you always want it to be at that… What we think of, because those of us who are used to top to bottom left to right languages, if you think, “Okay, well I want this where the writing starts,” that’s not a top left thing, it’s a where the writing starts. So you could have a rounded corner there, no matter what direction the writing ends up going. As simple as you’re switching from top to bottom left to right to top to bottom right to left, like Arabic or Hebrew, right, so if you’ve used the logical border radius to just curve that corner, then you have nothing else to do, all you have to do is switch the writing direction. As opposed to “Oh, now I need to square off the top left, curve the top right, because that’s where the writing is starting now.”

**Eric:** Right, so things like that, if you’re doing writing styles for text, the logical properties make much more sense. If you’re doing component layout, sometimes the logical properties might make sense, but more often you’re going to use top right bottom left, and that’s fine. When we should definitely have both, so yeah to bring it back around to where I started, not a replacement. It’s not a case of throw out top right bottom left, those are terrible and they should never be used by anyone for any reason, no. They will exist side by side.

**Vadim:** Yeah, I hear people say that Grids are going to replace Flexbox. It’s the same thing.

**Eric:** They work side by side, yeah. There tends to be, and I mean I get why, but there tends to be this feeling of, “Oh, we have new thing, therefore old thing is obsolete and we don’t use it anymore,” and people forget that the web is actually a progressive build. It’s not a case of replacing the old with the new.

**Vadim:** I wouldn’t use tables and floats for layout, but they were hacks, so it works this way for hacks. It’s better to throw them away.

**Bruce:** You sound like the beginning of every movie I ever watch, “You wouldn’t use a table for layout, you wouldn’t steal a policeman’s helmet.”

**Eric:** Well, the ones you were learning now wouldn’t, right? They’re like, “You did what? Why would you do that? You just lay it out, what were you thinking?” It’s because yeah, we had to hack. And to a certain extent, things like having special style sheets based on writing direction, that’s a hack. And where you can drop that hack by using logical properties, 100% do it, but yeah. CSS grows, it does not generally recycle, I mean there are very few things from very early on that basically got replaced, but no it’s, we have this feature, and then we have another feature. Not a new feature that replaces an old feature, now we have this greater, this richer capability.

**Bruce:** I remember explaining to some people who asked, “Why do web standards take so long to make? How difficult is it to define a grid layout system,” it’s not that difficult to define a grid layout system, but you have to define what happens if somebody’s got a grid layout inside a Flexbox, which is inside an HTML table layout that’s absolutely positioned, because somebody somewhere will do that. And all of the mess we got ourselves into before Hixie et al came along and saved us all, was because the specs said very little about what happens in these edge cases. But when you’ve got, and I’ve counted 409 Brazilian websites out there, somebody somewhere is going to be using a grid inside a Flexbox inside a layout table that’s absolutely positioned, because of some mad CMS they can’t change. And that’s what takes the time, it’s working out what happens with a grid layout. With every other thing that we’ve made, many of which are good, but lots of which were inherited from the dark ages when it was Sir Uncle Timbo and Dan Connolly just sitting around making stuff up.

**Vadim:** Speaking of weird combinations and tricks, I really like how grid layout and Flexbox took a shortcut, because inside of Grid and Flexbox they have new rules, like no margin collapsing, no floats, nothing else. Just our new rules, and it’s much easier to implement it that way, I guess.

**Eric:** Yeah, I mean you could have floats inside of Grid items or Flex items, but yes you can’t float a Flex item, you can’t float a Grid item. At least not so far.

**Bruce:** This is the secret plan Igalia’s working on, is it Eric.

**Eric:** Well no, it’s just there are design techniques that would work really well if you could place a thing and then have it act like a float using exclusions is what I’m getting to here, is CSS exclusions where you could put something that straddles the gap between two columns, and then using exclusion say, “Stuff should flow around this,” and it flows around both sides. That’s what exclusions would make possible. Now, I’m not saying “And get ready because exclusions is coming next year,” it might be a while. But the spec is there and it’s being worked on, and I think there’s at least some interest, because Grid lets us do a lot, so much that we couldn’t do before.

**Eric:** But it has its limits so far, and part of the reason that these things take so long, to get back to what Bruce was saying, is not just the “What do you do in all these weird edge cases,” but also because CSS, like HTML, not only has to be backwards compatible, it needs to be as much as possible forwards compatible. It’s one of the amazing things about the web and its core technologies, is that they are designed to be both backwards compatible and forwards compatible. That is not a trivial undertaking, that’s really hard to do. Particularly when you have a language, or in this case a set of languages, that are meant to be as robust as possible, as fail proof as possible, as human readable as possible, and operate in an environment where not every error leads to a complete failure, right?

**Eric:** There’s not compiler to say, “Oh this is wrong, I’m stopping,” right? Like in JavaScript or many other programming languages, right? “Syntax error, we’re done here,” right, “Fix it, or I’m not doing anything,” that’s not how the web is built, on purpose. That’s not how the web is built, that is how it was designed from the get go. And that’s an incredibly challenging environment to work in, particularly as a spec author or an implementer.

**Bruce:** It’s funny, because in my perm job, I was consulting with them for a while, so I know all the people, but I’ve been working with a really brilliant developer, but he’s not particularly a web developer, per say. And I suggested that we use details and summary for FAQs to get rid of a bit of JavaScript. He came back and he said “We can’t, because caniuse says it’s not supported in IE 11, which we have to support.” And I said, “Try it, see what happens in IE 11,” and he went, “Oh, it’s just open.” And I went, “Yeah,” and I said “It’s not supported, therefore you just get the content.”

**Bruce:** And he’s a really great guy, over Zoom I could see the light bulb going off over his head, because that’s antithetical to the way that most not supported in happens for most programmers, and I was inverted commas heavy irony, real programmer, noticing when if something wasn’t supported it was therefore unusable. So this idea of being both backwards compatible and forwards compatible is incredibly powerful if you get it and you relish that, but that means you have to actually love what the web is, rather than treat it as a annoying delivery model for your web assembly blob of crap that only works in Chrome.

**Eric:** I mean, details and summary is great, Vadim has actually seen me use this in that talk, you can load up details and summary in links, just content. I mean, the first browser, you can track down the original Timbo computer and fire up the browser and load up the page that has details and summary, just get the content. It’s amazing to me, it still occasionally makes me stop and just say, “That’s stunning.”

**Bruce:** It is, and I point out, Eric, because I know that you’re an American and therefore in a classless society, but it is “Sir Uncle Timbo”.

**Eric:** Oh excuse me, Sir Uncle Timbo.

**Bruce:** But yeah, back to your original point that is, I mean, Russian is written left to right, albeit with some weird letters that shouldn’t be there.

**Vadim:** Hey, now.

**Bruce:** And English is written left to right, even Americans write left to right, albeit spelled wrong. And so we naturally think left to right, but I’d be interested to hear from Sarah Soueidan whose first language is Arabic but presumably makes a heck of a lot of stuff for left to right languages, or my old friends at Wixwho use Hebrew all the time but there’s bidirectional stuff in the middle of Hebrew signs, because the language is right to left, but dates are left right and times are written left to right embedded in it. And they’re often writing stuff for English language markets, I’m wondering whether they find the logical properties easier to grok, I don’t know. If you’re a listener with Arabic or Hebrew as your first language, let us know on the Twitters.

## CSS Nesting

**Bruce:** Eric?

**Eric:** Yes?

**Bruce:** Presumably, in your first three weeks you have to do all the menial tasks, so do you have to hoover all the beanbags and clean out all the bongs and everything at Igalia?

**Eric:** I mean, we’re all remote, so…

**Bruce:** Okay, everybody cleans their own bong.

**Eric:** Yeah, pretty much.

**Bruce:** Excellent, we’ll be having a good sing song of Kumbaya at the end, listeners, instead of our usual theme music. But yeah, Vadderz, there are more new specs than you can shake a stick at in CSS land, not that I advise shaking sticks at CSS folks, because it’s rude, but some of them are just flat out crazy and none of them actually address my usecase that I wrote about in 2004, and Kardell still hasn’t made happen. So sort him out, please Eric.

**Eric:** Well, can you forward me the latest copy of the Mankinispecification, because I haven’t kept up.

**Bruce:** I will. I think you have, it’s just you keep erasing it from your mind in some sort of PTSD thing, but yeah there’s loads of new specs. And Vadim, you read all these things for bedtime reading, don’t you, so you want to run us through the latest greatest ones?

**Vadim:** Yeah, there’s a lot of things going on in the CSS drafts repository on W3C organization. I just went through some of them this afternoon and I was surprised, I usually follow what’s coming up on Twitter or somewhere else. I’m reading some specs authors to stay informed, but I saw a number of drafts that went under my radar. For example, I heard about this CSS Nesting module from Tab Atkins from 2015 I believe. There is the new version developed in December last year, so it’s CSS Nesting module, editors draft, so it’s Tab Atkins again, and Adam Argyle, from Google, both of them.

**Vadim:** And the main idea behind this spec is to have ampersand selector, that basically works just like in Sass or Less. It’s something inherited from pre-processors. And it makes my head hurt, really. I mean, I used to have two things: the real CSS and that fantasy one. I have two modes in my head, I switch between them. Now I have to merge two of them into single one because of that, that’s my point of view. It just hurts. And what about you?

**Eric:** Well, for me, I’m still getting used to the syntax that’s there, and I will say I haven’t invested a ton of effort into understanding every nuance of nesting, because its current status means it could change completely where it is in the specification process. It’s basically an editors’ draft, more or less.

**Vadim:** Very early days, right.

**Eric:** Yeah, very early days. And so generally when it comes to those sort of things, at most I will try to get my head around, “Okay, what’s the problem they’re solving here,” and maybe not go so far into the syntax, but I have looked at the syntax and occasionally it does make my head hurt a little. Especially since right now it seems like what they’re proposing is, “Oh hey, here’s a pattern where you can take the declaration block of a rule, the part with the curly braces, and put a whole other rule inside of it.” That’s, yikes. And again, people who are listening to this should not say, “Oh my god, we’re going to put rules inside of other rules,” because maybe that’s not how it ends up turning out, that’s why because of where this is, I’m not building test cases for this, and I’m not building parsers or whatever, because the whole thing could change.

**Eric:** And I like the idea to some extent, and what I really like is that it comes from pre-processors. This is why I like pre-processors, especially in the CSS space, because they let authors experiment, right? They let authors, in effect, create new CSS features, which they they then have to write some code to do a transpile or a compile or super pile or a dog pile, I don’t know, whatever, to turn this thing that they’ve dreamed up in Less or Sass or whatever, turn it into regular CSS. But then, if something that these authors are experimenting with becomes popular, the working group now is able to look at that and say, “You know, a lot of people are doing this, a lot of people want this,” and it would be a win for the web if we could make that native to browsers, to make it native to browsers, right?

**Eric:** So CSS variables, or custom properties, by their formal name, is another example of this where people have been asking since CSS was invented, “Hey can we have variables,” and the working group for a long time would say, “No, for that use a pre-processor.” Years before Less or Sass were even thought of, let alone deployed, right? Years before that, they would say, “Well, use a pre-processor” in the era when you would literally have to write your own pre-processor. And there was a feeling that there wasn’t that demand for that sort of thing. People would ask, and they would say, “Well, if you need it, you can write it.

**Eric:** You can use a pre-processor, we don’t see that much interest.” Then Less and Sass became popular and other such pre-processors, and so far as they can tell, approximately 50% of people who first install something like Sass do it because they want variables, right? They find out that that’s how you do CSS variables, they’re like “All right, I’m installing that, I’ll figure out how to do that,” and they became so widely used that the community was able to come back to the working group and say, “Yeah, that thing that you said there wasn’t a whole lot of demand for, everybody uses this,” right, just about. And it became a thing in specifications. I love pre-processors for that, because they let authors experiment, they let authors extend CSS, and if something is sufficiently powerful, and solves enough use cases that actual authors have, the working group will now do their best to bring that into specifications.

**Eric:** The color module, CSS Colors, they’ve been trying to figure out the best way, in a backwards and forwards compatible way, to let people do things like just tint a color. Rather than having to define a whole new color that’s a tint of another color, they can just say, “Use the current color except 30% lighter, or 20% darker.” They can tint or shade it, which is a thing that pre-processors do, there are mix-ins or extensions or whatever to do that. So the working groups try to make that happen. Their challenge, the reason they haven’t immediately done it, is because again they need to be able to do it in a way that those values don’t break pages in older browsers and don’t close too many doors for future browsers.

**Vadim:** Speaking of that, we have just discussed in previous chapter that we need to keep the web forward and backward compatible, and the way the browser is implemented custom properties, or success variables I prefer the first name, is not really solves all the problems we saw with CSS pre-processors. You cannot use property inside of Media Query, for example, because it’s not a property there, it’s a custom media feature or something like this. The question is, what should we do when the developers demand to break the web?

**Eric:** So when I say backwards compatible, I don’t mean that these things are written in such a way that suddenly IE 11 will support whatever the latest browsers do. What I mean is that it won’t break, right? The same way in HTML, you can use details and summary, and it won’t break pages in IE 11 or links, or WWW, or whatever, that the user gets something, and the user gets something comprehensible, right? Now, it is possible to use CSS in ways that makes things much more difficult for people in older browsers, but they should still get the content. They might not get every last bell and whistle, but they should get the content. And if you’re smart about how you approach your styling, it won’t even be that particularly broken, maybe it’ll be all black text, or whatever their default color is, as opposed to all of the cool colors that you added.

**Eric:** And so as long as you’re not writing your copy to depend on them being able to see those colors, which you shouldn’t do because some people can’t see colors.

**Bruce:** Preach it, Eric.

**Eric:** Yeah, so there are some people who are fully colorblind, there are other people who are red green colorblind, which is actually something I need to deal with the web platform tests.

**Vadim:** Oh yeah, they show green or red.

**Eric:** Now, part of the deal of those tests, from what I can tell, is they’re supposed to automated, and a computer can tell the difference between green and red, but it’s still something I want to look at and think about now that I have the resources and the time, thanks to Igalia, to maybe change that to, I don’t know, green and blue.

**Vadim:** Or add some texts inside of those blocks.

**Eric:** Right. Or black and white, or whatever, right? Something that is as useful as possible. But yes, that’s what I mean by back wards compatible, not breaking things for earlier browsers.

**Vadim:** In case of custom properties, they introduced something different from what we have in Sass, for example. Those were not variables, those were custom properties. And I thank them for that, because in my world, they made it better, but in case of this nesting module, I think they’re just trying to implement the thing literally.

**Eric:** Yeah I mean, the goal is… Well, I can’t speak to the goal, I don’t speak for the working group or any member thereof, but I think the goal is always to, if they can, just reproduce what’s being done, right? So with nesting, if they can reproduce the syntax, great. And if they could’ve done that for variables, they probably would’ve, but because of that need to think both backwards and forwards, they probably realized, “Okay, we can’t do it exactly that way, but how close can we get? How can we do that in a way that won’t close a lot of doors to us in the future?” Because sometimes that’s one of the concerns, it can be as simple as, “What naming pattern can we allow for these that won’t mess up other possible naming patterns for things in the future?”

**Bruce:** Well I really hope that they do implement the nesting, because I had to do some work with Less recently, and I’ve never used Less, but I could figure out what was going on, it was an inherited project. And this will shock you, right, but sometimes my CSS doesn’t always work first go and I have to debug it, I know, newb. And the annoying thing is with Less, is when I’m looking at something in the devtools, and I copy a class name or something, and then search the source code, you don’t necessarily find it, that class name isn’t in the source code, because it might’ve been concatenated from the nesting rules, which made it a heck of a lot more difficult to debug, because I could see what it had transpired to, but that didn’t necessarily bear any resemblance to the less source. So presumably if they do make it native, then there’ll be some way of actually tracking back rather than trying to reverse engine the other less spec on the fly while trying to debug stuff.

**Eric:** Yeah, ideally, and that’s probably part of what they’re trying to figure out is, “Okay, we could do this, but then how will devtools handle it,” right? I mean, spec authors have to think about that, they have to think about all of these ramifications, so yeah. I mean, I think nesting is pretty cool, certainly I have had situations where I’ve had to do the, “Great, now I have to prefix every single one of these rules with a class name, because they’ve been shifted into this class name, but they can only move to the right,” it can be a pain, I get it. And so nesting is really cool for that, but we’ll see.

## Cascading Layers

**Vadim:** This nesting thing is just a syntactic sugar, you can write your CSS the way it is. You can use a pre-processor or your code will be just repetitive too much. But there’s another spec which changes a lot. It is Cascade at inheritance level five, we’ve discussed it in previous episodes. Basically, it allows you to control the way the Cascade is applied, from external sources, from your own sources, to make sure that your code is not being overwritten by some external CSS. Or you can manage your legacy code by overwriting anything that contains it without important IDs and things like that. So what do you think about this cascading enhancement of CSS? CSS is cascading a styling language already, but finally we can manage this cascade.

**Eric:** Yeah, I go back and forth on that one. I get the desire, my concern is that if there are these at layer blocks, which is how the current specification is written, so you have app layer “my cool styles”, and then you open a curly bracket and then you have all your rules inside it, and then the closing curly bracket. Older browsers are not going to parse anything in there, the same way they don’t parse `@media` if they don’t understand `@media`. If they don’t understand that layer, they’re just going to skip it, which means all of the stuff you put in your at layer, gets ignored by those browsers. And I mean, I am not the smartest person in the room by any stretch when it comes to these sorts of things, but the much smarter people in the room I’m sure are thinking about that.

**Eric:** Because I can easily see authors saying, “Oh, well I put everything in a layer and then I have full control over everything,” but in literally the versions of Chrome that are shipping right now, if you start doing that in two years, the versions of Chrome that are shipping right now would see no styles if you put everything in an at layer. Which, of course, part of that is don’t put everything in an at layer, only use it when you really need to, but we all know that people will just slap everything in layers, because now they have much more control over everything. Now, users will still get all the content. It’ll be unstyled text, well un-author-styled text, will be just default browser style text. And that’s, in some cases, going to be fine, but in other cases I can see where that would come close to breaking the experience for users of links or a two generations old iPhone that’s a hand-me-down, that they bought for five bucks, because that’s literally the only internet they have. So we’ll see where that goes.

**Bruce:** The problem will be of course is that the developers won’t see this because they’ll be using the latest version of Chrome that it works in, and will assume that all of their users are as well. I just want to point out, by the way, to the listeners that we can all see each other, because we’re on Zoom, and when Eric points out that he’s not the smartest person in the room, from what I can tell he’s the only person in his room, so I’m not quite sure what that’s saying, Eric.

**Eric:** Well, there’s probably a cat in here somewhere.

**Bruce:** Fair enough. But yeah, I get what you’re saying, because it is rumored that there are one or two developers who seem only to think about the browser that they themselves use, and don’t necessarily think about people on older devices or older browsers.

**Vadim:** But the same thing applies to Grid layout, for example.

**Eric:** It can.

**Vadim:** If you’re sticking only to Grid layout, you’re content is… I wouldn’t say it’s unreadable, but it’s not as good as it might be.

**Eric:** But you can, because of the way Grid was designed and CSS was designed, you can have your float-based layout, and add Grid that overrides effectively the float-based layout so that people in older browsers get… It might not be as wizzy, perfectly laid out as the Grid version, but things are still roughly where they’re supposed to be. And then with Grid you have more control. The at layer, from my reading, they’ve done their best to preserve that, my concern is in how it will be used.

**Eric:** And I do, I have concerns about Grid sometimes, people say, “You know what, I’m just doing all Grid, and I’m not even going to think about older browsers, and that’s just how it’s going to be.” Sometimes that works, I can get away with that on my blog or my website, because my website is all text, right? But there are other situations, news sites, medical information, emergency services, where you would hope people wouldn’t take that perspective, but I’m sure it’s happening.

**Bruce:** It is, I mean I was reading a blog post probably about six months ago now, pointing out how many governmental COVID information sites were not accessible. And this isn’t reading my latest genius blog post, this is stuff of actual vital importance, and if people are posting that as text and images and no alt-text, they’re unlikely to be thinking about the fallback for their layers, which is woeful. But this is human nature, something new has come along and therefore everything old is laughable and should be retired immediately.

**Eric:** Yeah.

**Vadim:** Yeah, I had a plan to invite Miriam Suzanne on this podcast and discuss, it’s basically her idea, discuss this topic further, because yeah it’s a very good question. I’m not sure if we are actually going to be able to progress without breaking a thing or two. I’m not talking about breaking the web as a whole, but some things might look ugly in older browsers but still readable.

**Eric:** Yeah, and Miriam is absolutely… I’m glad you’re going to have her on, hopefully she will have an answer to my question and will not laugh at me too hard for…

**Vadim:** She’s not informed yet of my decision to invite her.

**Eric:** I know, that’s why I’m saying I’m hoping that works out.

**Bruce:** Me, too.

**Eric:** So funny, I got your invite to The F-Word, I accidentally put it on the family calendar before I switched it to work, and my 17 year old daughter showed up at my office, she was like, “What was that?” I said, “What was what?” “You put ’F-Word’ on the calendar and then took it away,” I was like, “Oh, yeah, that’s the name of the podcast.” She was like, “I thought something really awful was happening on Friday and you were really upset about it and put ’F-Word.’” And I was like, “No, no, no, I’m talking to a couple of people, it will be fine.” It was a moment of confusion.

**Bruce:** Thank you very much, Eric, for putting some of Igalia’s time into talking to two non-celebs like Vadim and I. Good luck with Igalia, because I know what it’s like when you’ve just joined, it can be intimidating. And I know Cardell can be quite a terrifying figure.

**Eric:** Yeah, actually shout out to Brian Kardell, who has actually made my entry into Igalia a lot easier. I mean I talked with him, I talked with other people, and one of the things I said joining was, “I will need direction. If you bring me in and tell me, ’Do what you want to do,’ I mean, I’m going to do what I want to do, but that might have nothing to do with what anyone else wants or needs,” right, “I need direction. When we get started, please give it to me,” and he totally has. He’s kept me out of things that would be too distracting, and he’s said, “Hey, here’s a thing that we could really use,” so yeah, thank you, Brian. Big shout out for that, because that’s been a huge help.

**Bruce:** Yay, Brian. He’s like a general internet avuncular figure, isn’t he, just helps people around the sidelines but doesn’t implement my CSS thing, Kardell where is it?

**Eric:** Like I said, send me the Mankini as a service spec and I’ll see what I can make happen.

**Bruce:** You’re a mensch, I believe they say. So, fair listeners: We’ll wrap this up, for this episode of the F-Word. Episode 10, we’re now in double figures. Thank you very much to Eric Meyer, thank you very much to Mrs. Meyer for letting him out to come and talk to us, thank you to your daughter for checking that you were okay when you put that on the calendar, and thank you all for listening. The transcript and the show notes will be on the site from the moment we publish, as always, see you next time.

**Vadim:** Thank you for coming to F-Word, Eric.

**Eric:** Oh, thank you having me, I had a good time.

**Bruce:** Cheers.

**Eric:** Cheerio, pip pip.

**Vadim:** That’s what young people say, right?

**Eric:** I guess.
