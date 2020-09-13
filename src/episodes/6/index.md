---
number: 6
title: 'Mozilla layoffs, modals and focus, AVIF, AdBlock Plus lawsuit'
date: 2020-09-11
hosts:
  - Bruce Lawson
  - Vadim Makeev
chapters:
  - time: '00:58'
    title: 'Mozilla layoffs'
    list:
      - title: 'Changing world, changing Mozilla'
        link: https://blog.mozilla.org/blog/2020/08/11/changing-world-changing-mozilla/
      - title: 'The cult of the free must die'
        link: https://www.quirksmode.org/blog/archives/2020/08/the_cult_of_the.html
  - time: '11:38'
    title: 'Modals and focus'
    list:
      - title: 'Modal by Filament Group'
        link: https://filamentgroup.github.io/fg-modal/demo/
      - title: 'Modal from WAI-ARIA Authoring Practices'
        link: https://w3c.github.io/aria-practices/examples/dialog-modal/dialog.html
      - title: 'Having an open dialog'
        link: https://www.scottohara.me/blog/2019/03/05/open-dialog.html
  - time: '20:34'
    title: 'AVIF image format'
    list:
      - title: 'The new next-gen image compression format'
        link: https://reachlightspeed.com/blog/using-the-new-high-performance-avif-image-format-on-the-web-today/
      - title: 'AVIF support in Chrome 85'
        link: https://developers.google.com/web/updates/2020/08/nic85#more
      - title: 'Squoosh with AVIF support'
        link: https://squoosh.app/
  - time: '29:14'
    title: 'AdBlock Plus lawsuit'
    list:
      - title: 'Inside Axel Springer’s war with AdBlock Plus'
        link: https://digiday.com/media/inside-axel-springers-war-adblock-plus/
      - title: 'Ad Blocker Developer Summit'
        link: https://adblockerdevsummit.com/
tags: episode
layout: episode.njk
---

### Intro

**Vadim:** Hello and welcome to The F Word.

**Bruce:** The F Word of course stands for front end, the wonderful world of web development and web standards, browsers, browser politics and everything in between.

**Vadim:** I’m Vadim Makeev, coming to you from St. Petersburg, Russia.

**Bruce:** And I’m Bruce Lawson, coming to you from my home office in sunny Birmingham in the sunny United Kingdom. How are you this time, Vadim?

**Vadim:** Better, better. I think this COVID thing is going away. I mean psychologically it feels a bit easier here in Russia at least. How about you in UK?

**Bruce:** Well, my son goes back to college on Monday, so that’s going to be a bit of a worry, but let’s see what happens. But if I’m not here next time, it was great knowing you Vadim.

**Vadim:** Likewise.

### Mozilla layoffs

**Bruce:** So the big story of the moment is the sad news about the Mozilla layoffs. Mitchell Baker, the CEO of Mozilla recently announced they were laying off 250 people, which is about 25% of the workforce. And that includes all the MDN writers, except for our old friend, Chris Mills, who was the manager and presumed to be only one on the team now. And many of the dev tools teams, but not apparently all, as I incorrectly tweeted. And also, the Servo and the Rust teams, which is pretty discouraging, because although I have nothing to do with Servo or Rust, those were the main components of the new architecture that was going into Firefox to make it faster and more secure. So that leaves me worrying about the future of Firefox itself.

**Bruce:** And of course, MDN, I don’t think a day goes by that I don’t look at MDN and the dev tools in Firefox have recently been great in my opinion, better than the Chrome dev tools, particularly for editing things like flex box, CSS grid, CSS shapes. And of course, because those dev tools have been so great, a lot of developers have been using Firefox as part of their day-to-day development process, which means, naturally that they’re testing in Firefox and we have better web compatibility. So I feel pretty miserable about this news actually, not just because some of my friends and your friends have been caught up in it, Vadim, but it just makes me worry about the health of the ecosystem.

**Vadim:** When I first heard the news, I thought Mozilla is going this upper way by just producing browser for consumers. And for that matter, they could just switch to Chromium and then there are many good browsers that are not following the same Google Chrome paths with the same engine, because they have different views and different policies, and they serve users a different kind of browser. And this thing is also possible if company is committed to, I don’t know, the values that Mozilla is committed to, privacy and security and things like that. So it’s possible for Mozilla to serve users and to provide users a good browser, secure and private, but it wouldn’t be Mozilla anymore. It would be just another browser company.

**Vadim:** And we value Mozilla not because of its browser, well, partially because of its browser, but because their role in the standards world, in keeping the web free and safe, and providing browser that’s just yet another browser engine, and we have some diversity in standards and implementation world. So that was my main concern, but then they announced that it’s not that terrible. Yeah, they are laying off a lot of good people, and I see a lot of people are finding their new jobs in Microsoft, in Google, companies that still have some ideas how to develop their browsers, and some exciting new plans. They’ll be fine I guess, most of them.

**Vadim:** But still, they’re going to be committed to dev tools, to MDN, to other parts related to developers. I guess not the 100% as they used to, but maybe they’ll keep like 20 or 10% of their effort. Well, that would be better than nothing, that what Opera did for example, and it will still be possible for them in the future to scale it back to where it was. That’s my hope.

**Bruce:** Yeah, I take some encouragement from what you’re saying, and you’re right, we need Mozilla to continue being Mozilla. One of the many of times that I was interviewing for Firefox, and it always went wrong, they were just about to hire me every time and then they had budget cuts or layoffs, but anyway. I was very impressed by something one of the people who interviewed me said, is that Mozilla’s product is a free and open internet, Firefox is just one manifestation of that. Firefox isn’t the product. And that struck me at the time.

**Bruce:** And I supposed it would be possible, as you say, particularly with Mozilla’s mind share and install base, if they move to Chromium but continued with their mission for privacy and security, that they could do it and remain the voice of conscious on the web. So that would be a good side, but the loss of the last big non-web kit blink rendering engine would be sad. I don’t think we’re getting there, but when developers don’t test in an engine and compatibility slides, you and me both know what happened with Opera there, and it would be a huge money saver for Firefox to take Chromium and develop on top of it. There’s no doubt about that, same as there was for Opera. So we’ll have to see.

**Bruce:** But I know a lot of people speculate that they were doing it because the search deal with Google was going to expire this year, and they weren’t sure whether it’d be renewed.

**Vadim:** But they renewed it.

**Bruce:** Yeah, yeah. But Brian Cardall made an interesting point to me. He said, “Basically, if you’re funding a browser on search revenue, you’re basically funding it on advertising revenue because advertisers pay Google and Google pay Firefox.” In a time of massive, massive commercial and economic uncertainty, in COVID, apparently, organizations have just really tightened their advertising belts because they don’t know what the hell is going to happen with the pandemic. And that has had the knock-on effect that search revenues go down. And somebody from Firefox tweeted to me that’s what’s happened, it’s not really about the Google deal.

**Bruce:** So an unexpected victim of the pandemic there, that sounds like a plausible reason. Plus the fact they pissed up millions of dollars again the war with the Firefox OS, everybody has their Opera Unite moments.

**Bruce:** And before anybody writes in to tell me that Firefox OS was ripped, forked and branded as KaiOS, and it’s the second biggest OS in India. Yes, I know, technically Firefox OS is a great product, but Firefox as an organization just didn’t know what to do with it, and the people in India who forked it did know what to do with it. So that’s that. I will not be swayed from that view.

**Vadim:** Speaking of the announcement itself, I was kind of glad to read it. It wasn’t as terrible as it used to be in previous layoffs for other companies. I can see that Mozilla desperately needs to find a way to make money on something, on their products, on their vision. And I’m pretty sure there are people in the world willing to pay Mozilla for their secure and high quality and independent services, but they still haven’t figured out the way to do this. And if they could stream their resources into figuring this out and trying new things, that would be a good thing.

**Vadim:** I mean if I would be the person they laid off, I wouldn’t say it like this, and I wouldn’t say this as calm as I’m saying this, but still, if you look at it from outside, it looks like something that could actually help them. I would really love to see that.

**Bruce:** Well, I mean it will help Mozilla because Mozilla has got 25% less of a staff bill to pay. So it’s not going to go bankrupt next month, because it’s got a huge staff bill. So where there’s life, there’s hope but if you’ve read that article by PPK, the Cult of Free, it’s very interesting because he’s absolutely right, we’ve trained not only consumers but we as web developers to believe that everything comes for free. So you can get great services like the G-Suite etc. for free and therefore it’s hard for commercial organizations to charge…

**Vadim:** But it’s slowly changing.

**Bruce:** It is slowly changing, yes, because people realize that free doesn’t necessarily mean free, you’re basically bartering it for your personal data.

**Vadim:** Or something else, or the quality or yeah, you’re looking at ads constantly. I see a lot of people around me using free apps and they have blind spots, the upper part of their screen and the bottom part of their screen is just a blinking banner. And I can’t live like that. So I would rather pay for this app, like even monthly if it’s something that I use every day. But I see a lot of people struggling, I see a lot of people are totally fine with it, but I think in Russia for example, where we used to use every app and listen to music for free for decades, and these days, like almost every person I know, they pay for some music subscription, for YouTube for example, for Google and Apple services. And it became already a thing that people are okay with. And maybe this thing could work with browsers and some other services that we used to take for granted and then we can decided if it’s something that we really need and pay for it, for better quality or for privacy or things like that.

**Bruce:** I would certainly pay $5 a month or whatever, as a subscription to Firefox, it’s my main browser for personal use. Obviously, I tested all browsers as so should you listeners, but I don’t surf around and visit my bank on a rotating browser router because that would just be too dull.

### Modals and focus

**Bruce:** Oh well, you’ve cheered me up there, Vadim. So what’s next?

**Vadim:** Another good company, Filament Group, released something interesting, they did something that I’ve been looking for, for a while, to use myself and recommend. They built a model, a model dialogue, a thing that opens when you click something, usually a button.

**Vadim:** And it’s a very simple interface that’s everywhere, on almost every site, there is a model dialogue. But on almost every site, it’s inaccessible and it’s poorly implemented. They offered a bit unusual way to do this, they decided to wrap it into web component. So basically they have custom tag, a custom element FG model, with some API that you could just put on your page and then put some content inside, and use some extra JavaScript and CSS to make it work. I’m not sure what’s going behind this thing. You know what, I don’t care, I don’t want to know.

**Vadim:** It feels like they did it right, because focus inside of this thing is locked. It’s the most important thing for accessibility regarding this model dialogues because if you’re able to navigate outside of model dialogue, it’s not model anymore, even if it’s visually hidden and the content behind it is blurred and things like that. Content behind this thing is accessible, which makes it just a pop-up if you’re logging in or registering or, I don’t know, putting some in your basket, it should be clearly model, not only for sighted users, not only for mouse user, but for everybody.

**Vadim:** And they did everything right. They use inert attribute and some polyfill for it. I think it’s still behind a flag.

**Vadim:** Anyway, this inert attribute, it’s basically a way to disable something. Imagine disabled attribute that you could apply not only to form elements but to parts of an interface. And by applying thins attribute, you’re making it inert. So we’re saying this thing is not active. It’s rendered, it’s there, but it’s not active. So you cannot interact with it, from keyboard, from mouse.

**Vadim:** So it’s like pointer events and disabled put together into a single attribute. I would prefer to have it as a CSS property to be honest because in some cases, you need to adapt interface, not just switch attributes.

**Vadim:** Imagine one interface on mobile and a completely different one at desktop and you would want to have something different disabled here and there. But still, it’s a good solution, they use it. And I have another question regarding this model dialogue. In Filament Group case, in the case of their model dialogue, they lock the focus inside of this model dialogue, but it’s still possible to tap through this model dialogue and go into a browser’s interface.

**Vadim:** And I have another example of the accessible model dialogue. It’s this RO practice spec, where I usually look for good accessible examples. In their case, it’s locked inside of this model dialogue so you cannot go to a browser interface out of it. So it’s just locked inside of the browser context.

**Vadim:** And I wonder which way to do this is right. What do you think Bruce?

**Bruce:** My gut feeling is that you should never prevent people from actually going to the browser interface. You mean like the back button and the menu?

**Vadim:** Yeah, yeah, and URL bar.

**Bruce:** Yeah, you shouldn’t stop people going there. I mean it might be a modal dialogue that’s asking them enter your credit card number or something or enter a password, and you might want to go to the URL bar to verify that you are actually on the URL you think you are.

**Vadim:** I think there is a way to exit browser area and go back to the software you’re using browser or any other agent. I’m not very good at screen readers, but I know at voice over, there is a way to just go back from the view port, come back from the actual page to browser interface.

**Vadim:** And in this case, if you know this shortcut, you can just go back to the browser. But if you’re just tabbing through and expecting at the end of the page to go back to the browser, that breaks this workflow.

**Vadim:** So I’m not sure which one is correct. But in case of Filament Group model dialogue, they did it right in my opinion and yours too. But in this area practice spec, we’ll give the link to both of them, they just completely locked the focus. So I’m sure.

**Bruce:** Be a bit careful with the REO practices spec because while I was doing the consultancy I’ve just finished, I was looking at some of the… like you, I was looking at the examples in there, and I thought, “There was a website navigation and they’d marked it up with an REO role of menu.” And that didn’t ring true to me because a role of menus to go on like if you’ve made G docs and you’ve got the file for save as and import, that’s an application menu, you’ll basically nav on a website, home, about, contact, shouldn’t be marked up liked that. So I investigated a bit more, and my accessibility guru, Mr. Adrian Roselli has written extensively about this and there’s a lot of pool request on the REO practices spec, which isn’t a spec, it’s a note, rather than a kind of a recommendation or anything, because basically the workflow that’s proposed there is something that very very high end screen reader users might find normal. But it wouldn’t be normal for the vast majority of screen reader users.

**Bruce:** And there’s a few things in that spec that are really great and there’s a few things in there which smell a bit funny, which is a shame. Because recently, a couple of months I go, I wrote a massive article on accessibility checklist and I was recommending take the examples out of that spec, because that’s what the W3C say, and now I feel a bit less inclined to recommend people that spec.

**Vadim:** It’s the reason why there’s no good way to automatically test accessibility. It’s much more complicated than that. It’s different from person to person even. Not just from screen reader to a screen reader, because for some person it’s totally fine to have an interface like that. For the other, it’s something completely unknown, it’s a moving target in a way. There’s no way to say like it’s the perfect interface and it would work for everyone. That’s why I encourage big companies to invest in some real user testing instead of just following the books.

**Bruce:** It’s why I always advise people that if you’re thinking of hiring an accessibility consultant or a bit of software that guarantees AAA compliance, not to hire them because you ain’t going to get AAA compliance, it’s seeking perfection. You should strive for it, but you’ll never going to get there, present company excepted of course, Vadim, because you are, as we know, perfect.

**Bruce:** But I mean yay to the Filament Group, they did great work, but isn’t it time that Chrome just fixed its own dialogue elements to be accessible and we have it added to the spec. I mean you’re right, a modal dialogue is on almost every web page you ever see, it obviously should have its own dedicated element so the browser can take care of making sure everything else is inert, trapping focus, returning focus to where you were before. These are all things that the browser is good at doing and should do.

**Vadim:** Do I do a very good job at those focus visible thing? They have a very complicated heuristics on how to draw this outline or not, and they should have a lot of things behind the dialogue, but it’s just not ready, I guess.

**Bruce:** Well, yeah, I mean it’s in the browsers but Scott O’Hara, Paciello Group, did some tests on it, and it doesn’t manage focus properly in Chrome so even though there was an HTML 5 element and even though it’s implemented in the biggest browser in the world, we still need the Filament Group to write a web component which then needs a web component polyfill for IE 11 and the inert polyfill. So sort it out Chrome.

**Bruce:** Yes, I know, I normally have a gripe at Apple during episodes of the F Word, but I’m turning my attention to you, Chrome. So Larry and Sergei if you’re listening, sort it out.

### AVIF image format

**Bruce:** You had one more bits of standards in use.

**Vadim:** Oh yeah, in the new new Chrome 85 and the latest Squoosh App, there is a new format support. The new format that will probably become the most popular format, even better and full of features than Web P. So there is a new AV format. How would you read it, Bruce?

**Bruce:** AVIF, I don’t know, AVIF, I don’t know, oh my god. Let’s sort it out now, otherwise the GIF/GIF thing would reign forever.

**Vadim:** Someone have to.

**Bruce:** Yeah, it’s AVIF. But this is an image format, isn’t it?

**Vadim:** You’re sounding like a French, but AVIF.

**Bruce:** There’s nothing wrong with French.

**Vadim:** I didn’t-

**Bruce:** What have you got against the French?

**Vadim:** Nothing, nothing.

**Bruce:** Okay.

**Vadim:** So yeah, it’s a new, I would call it container, because inside of this thing, there is a video codec. So basically there is a container that contains just a single frame or a number of frames if you want to have an animated picture, which is just a single frame of a video that’s compressed with those video codecs. And it’s amazing thing because it’s even better than JPEG, even better than WEBP in terms of compression. And it’s interesting thing that when it degrades quality, it makes image not just blocky and ugly, it makes it blurry. So if you have low quality image, it’s just blurry, it’s not degrades, it just a bit softens.

**Bruce:** Oh, okay.

**Vadim:** That’s a really nice feature.

**Bruce:** So it softens rather than gets horrible blocky art all over it.

**Vadim:** And the thing behind this algorithm behind this codec is that when you’re using JPEG for example, it breaks your image down into squares and inside of every square, it optimizes it.

**Vadim:** And in JPEG for example and in WEBP as well I believe. All squares are the same, 32 by 32 or 16 by 16, I don’t remember the exact number. In this format, during coding, it analyzes your image. And if it’s just a blurred background, it makes the square bigger. If it’s text or if it’s straight edge or something like this, it makes those squares smaller. So it adaptively changes the size of those squares and it makes encoding so much efficient and nice looking compared to WEBP and JPEG. So it’s the new generation of a format I would say.

**Bruce:** Oh wow, does it take like half an hour to encode an image or something like that?

**Vadim:** Yeah, it takes longer to encode I believe than WEBP or than JPEG but it’s all right in decoding which is the most important part.

**Vadim:** So I wouldn’t recommend anyone encoding those images manually, exporting them one by one, you should probably automate it somehow or put it into continuous delivery pipeline that will do this for you. But if you want to do this or if you just want to try it, there is a beautiful Squoosh App by Chrome DevRel team, and it now supports AVIF, so you can just go there, put your JPEG or any other image and export it as AVIF.

**Bruce:** AVIF.

**Vadim:** AVIF, all right, AVIF. So you can export it as a JPEG, you can export it as a JPEG with alpha transparency, you can export SPNG and lossless, and there are so many options, and in almost every case, you’ll have a smaller image.

**Vadim:** So it will be… It’s already support, I think, Chromium and all Chromium-based browsers, and it’s already supported in Firefox but behind a flag. And you can just use it as you use WEBP. You can add extra source element in your picture stack, it will just work with image AVIF mine type. So please build this into your automation pipeline, and you’ll have a much smaller image and graphics footprint for your web pages.

**Bruce:** And that’s more performant. I’ve heard of this picture stack, this picture element, it sounds like a good idea. Maybe we’ll just give an example in the show notes, because for those of you who don’t know, you can use the picture element, you can say, “If my browser supports AVIF, give it AVIF, if it supports WEBP, give it WEBP, if it doesn’t, fall back to JPEG.”

**Bruce:** I’ve realized now why you are so anti calling it AVIF, because you think it sound French because the previous latest greatest container format was Matryoshka, which is a Russian thing, and so you’re patriotically hating on the French for superseding the Matryoshka format. Am I right?

**Vadim:** Yeah, I guess that’s the case. Speaking of grade picture element, and the inventor of it-

**Bruce:** What a guy.

**Vadim:** What a guy. Why there’s no way to save an image in the format that you prefer? We all know that performance is good and everyone loves saving money and time on loading pages. And all those new shiny formats are great and wonderful. So you can just… But if your browser support WEBP for example, it will switch to WEBP source in this picture stack and it will use it. And once you have it, image loaded in your browser, you probably want to save it. And if you save it into WEBP on your desktop, you have a problem, because on Mac there’s no way to open a WEBP image. On Windows, there’s no way to open WEBP images as far as I know without extra software. And you can open it in a browser, but who would open their images in a browser, I mean from desktop?

**Vadim:** It’s a big problem because I’m pretty sure that in every picture stack, there is a JPEG, at least in IMG as a a fallback, but would browsers expose it?

**Vadim:** In every browser, there is a context menu saying, “Save this image.” And it saves the current source, not the one that users actually prefer. So why wouldn’t you, Bruce, invent another attribute for IMG or some other source option so that it would allow users to save images in the formats that they prefer?

**Bruce:** It sounds to me like a job for an extension, just add something to the context menu, and it just goes through, walks through the dome and grabs the fallback JPEG from the IMG and then allows you to save it using the download attribute so it gives you a link with an attribute to download. I mean I’m not going to write it because I’m stupid, but you could write it, and I’ll make millions.

**Vadim:** Yeah, sounds like a plan, or we can ask browsers to implement it. If in the save image dialogue, there will be a way to select the format you prefer, like on YouTube, you can select the quality or speed of your video, it would be great to be able to select the actual image format you’re saving.

**Vadim:** Or, even if you store the actual source of your image on your server, you wouldn’t include it as a fall back, because it would be a bad thing to do because it’s source image, it’s not optimized.

**Vadim:** What if I want to save this image? What if it’s some image stock? Okay, where people saving those images? They usually don’t have a choice but still some are trying to forbid me from saving images like Instagram or other platforms. What if they want to provide source image not just highly optimized and resized for the exact window size images? But if they want to provide the actual source, 12 megapixel super TIFF image with some color space built into it, there should be a way for them to do this, apart from extra link under this picture. I think it’s something that’s worth investigating.

**Bruce:** I’d be willing to bet that if browsers hadn’t been invented and were being invented now, that they wouldn’t allow you to save images, because it’s one of those things that everybody expects now but you’re not really supposed to be saving images off the web, are you? I mean I never would because they’re copyrighted.

### AdBlock Plus lawsuit

**Bruce:** Which brings me to my next story about a lawsuit that’s going on between Axel Springer, which is the media company that owns, I believe, The Bild newspaper in Germany against Eyeo who are the people who make the Adblock Plus extension. And full disclosure, both Vadim and I used to work with Shwetank Dixit, who is a VP at Eyeo and I spoke at the Adblocker Dev Summit last year. But this lawsuit is particularly troublesome because it has far-reaching ramifications for the web as a whole.

**Bruce:** In short, Eyeo are claiming that Adblock Plus violates their copyright because it interferes with a computer program. And they’re saying that HTML constitutes a computer program.

**Bruce:** Now, I mean I know there’s Twitter arguments about whether HTML or CSS is programming and is it deserving of attention and payment, the same as people who write C++, but this isn’t that conversation.

**Bruce:** But in German law, and I’ll read out a translation I’ve got, a computer program is defined as, “A sequence of commands which when recorded on a machine-readable medium are capable of causing a machine with information processing capabilities to display, execute or achieve a specific functio or task or a result.” And Springer has got an expert testimony who says that HTML 5 is a programming language whereas HTML 4 wasn’t. And the reason that HTML 5 is allegedly a programming language is because there are control statements or commands which calls the computer with a browser to maintain certain priorities when processing programs, block, default only at the very end, defer, or parallel, async, this means that the requirements for computer programs such as mentioned in the response to claim are met.

**Bruce:** So what they’re doing is they’re trying to stop Adblock Plus doing display none on adverts or not fetching certain requests to ad networks using their filter list by claiming that any browser extension that interferes with the way that Springer want the website to look are basically hacking a computer program. And they’re saying, “Well, HTML is now a computer program because of the defer and async attributes on the script tag.”

**Bruce:** The problem with this of course is that it doesn’t just interfere with ads. Like you were saying with the new Chromium preference that says, “Even if the developer has said outline none on focus,” force it to have a focus ring, that would be illegal in Germany because if the developer has decided not to allow a focus ring, the browser or a browser extension should not override that. And if they do, it is hacking the computer program, the HTML.

**Bruce:** And it has all sorts of ramifications. An anti-virus software that stops you downloading bad stuff, things like overriding sites who said, “User scalable equals none.” Now, that’s been in Opera and Firefox for ages, I don’t know about mobile Chrome.

**Vadim:** You know what Safari does, it protects users from third-party scripts and services that are trying to spy on Safari users, so they’re doing the same thing. They’re blocking some resources, they’re not allowing them to store some data, to footprint their users, so they’re also modifying programs.

**Vadim:** So it’s not just against ad blocking industry. It’s not about the author of Greasemonkey scripts, it’s against the whole nature of the browser.

**Bruce:** Well, yes, that’s why I’m bringing it up, I mean, like everybody listening to this, I use Adblocker. We were at Opera when Opera introduced ad blocking, not that I have a moral problem with the ad blocking industry, but yes, it gets to the very heart of who controls the web that you consume. Your browser in W3C language is a user agent. It is an agent for you, it is doing your command, and if you tell it, “I don’t want this light gray font on a white background, override the CSS.”

**Vadim:** And how about reader mode?

**Bruce:** Well, exactly, exactly. Although of course this sounds like massive bullshit and complete nonsense, we’re technologists and the people who are going to decide this will presumably be the jury and the judge in the German court system. And one of my old friends is a judge, and I love him to bits, and he’s very intelligent, but he doesn’t have the technical knowledge to actually make a ruling on this. So we went to court on August 18th, and it was adjourned I think until the New Year, but I’ll keep my eye on it and report back, folks, because it could be that this small case in Germany could have many many unintended consequences that could be bad for us all.

**Bruce:** And quick plug, if you’re interested, next Thursday, I’m speaking at an online conference that usually takes place in Birmingham, my home city, but it’s online, free. It’s called Fusion, and under the talk called Who’s Web Is It Anyway? Which will be about this and lots of other stuff where companies want to decide what we can see, the method we should consume it and our continuing fight for the web to be as we want it, extra big font size, Braille or vocal, yeah, it’ll probably be quite boring because I’m boring but if you’re doing nothing else next Thursday, tune in, we’ll stick it in the show notes.

**Vadim:** And a bit more, you mentioned this Adblocker dev summit, it’s going to happen this year, so if you’re interested in this topic, it’s going to be online on October 21st, please join. I see a number of talks related to what we discussed with Bruce and related to the future of the web in general and ad blocking industry in particular. So please, please join, I think it’s going to be interesting.

**Bruce:** Yeah, I’m going to be there, I accepted the invitation last year because it was Shwetank, and I haven’t seen him for ages, and I was working for a client who have an interest in the space, and I wasn’t really expecting to get much out of it myself other than meet up with a friend and have a Belgium Beer in Amsterdam, but actually they are really interesting talks about, a lot of them, the wider aspects of the web, so yeah, come along.

**Bruce:** So folks, that was The F Word, was that the sixth edition? I think it was.

**Vadim:** I guess, I guess. Yeah, we should invite another guest next time because yeah, one episode with just two of us is enough.

**Bruce:** Yes, enough for anybody. Well, we’ll see if we can find somebody credulous enough to come and join us on the next edition. But with that, gentle, humble listeners, we bid you farewell, thank you very much for listening. Vadim, would you like to care to say goodbye, even to the French people? Be nice now.

**Vadim:** Au revoir.

**Bruce:** Dosvidania. Au revoir, à bientôt. Bye-bye.

**Vadim:** Cheers.
