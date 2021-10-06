---
number: 5
title: 'Brian Kardell on Open Prioritization experiment, Igalia, MathML and the Web commons'
date: 2020-07-24
hosts:
  - Bruce Lawson
  - Vadim Makeev
  - Brian Kardell
chapters:
  - time: '00:56'
    title: 'Brian and Igalia'
  - time: '05:42'
    title: 'Features overview'
  - time: '16:27'
    title: 'Why devs should pay'
  - time: '24:07'
    title: 'JavaScript and other ideas'
  - time: '28:25'
    title: 'MathML and corporate support'
notes: |
  ### Brian and Igalia
  - [Open prioritization and advocacy](https://bkardell.com/blog/OpenPrioritization.html)
  - [Crowdfunding Web platform features with Open Prioritization](https://www.smashingmagazine.com/2020/07/crowdfunding-web-platform-features-open-prioritization/)
  - [Contributions to Web platform interoperability](https://blog.amp.dev/2020/07/06/contributions-to-web-platform-interoperability-first-half-of-2020/)

  ### Features overview
  - [Implementing selector list argument of :not() in Chrome](https://blogs.igalia.com/obrufau/2020/07/13/open-prioritization-for-not-selector.html)
  - [Open Prioritization and CSS Containment](https://blogs.igalia.com/mrego/2020/07/13/open-prioritization-and-css-contain/)
  - [Igalia’s contribution to the Mozilla project and Open Prioritization](http://frederic-wang.fr/igalia-contribution-to-mozilla-and-open-prioritization.html)
  - [Unlocking Colors](https://bkardell.com/blog/Unlocking-Colors.html)

  ### Why devs should pay
  - [Picture element implementation in Blink](https://www.indiegogo.com/projects/picture-element-implementation-in-blink/)

  ### JavaScript and other ideas
  - [Compilers and programming languages](https://www.igalia.com/technology/compilers)
  - [TC39](https://tc39.es/)

  ### MathML and corporate support
  - [MathML in Chromium](https://mathml.igalia.com/)
---

### Intro

**Vadim:** Hello, welcome to The F-Word.

**Bruce:** The F-Word, of course, stands for Front-end, the wonderful world of browsers, web standards, and everything in between. I’m Bruce Lawson, coming to you from Birmingham, United Kingdom.

**Vadim:** I’m Vadim Makeev coming from St. Petersburg, Russia.

**Bruce:** And how’s the world for you, Vadim? How’s St. Petersburg?

**Vadim:** It’s nice July here. And what am I doing in my home studio? I have no idea.

**Bruce:** Has it stopped snowing yet?

**Vadim:** Ah, well, just a few days ago.

**Bruce:** Excellent. Anyway, if you’re a first-time listener to The F-Word, welcome, if you’ve listened before we have a change of format this week. Yes, it’s our first guest. We’ve had hundreds of letters saying that, “Vadim and me are just too tedious, the two of us,” so they want somebody exciting.

### Brian and Igalia

**Bruce:** So, friends, Romans and Anoraks, it is my pleasure to introduce the man known internationally as the George Clooney of web standards, all the way from somewhere in America, Brian Kardell. Welcome, Brian.

**Brian:** Hi. Thanks. That’s quite the introduction.

**Bruce:** It’s okay. I’ll expect the cheque in the post.

**Brian:** I am in Pittsburgh, Pennsylvania in the United States, and I work for Igalia. We’re a company that works on all of the browsers. We actually make a WebKit port, WPE, optimized for embedded devices, but we work on all the browsers. We are number two committers to Chromium last year and to WebKit and in the top 10 for Mozilla. That’s what we do.

**Bruce:** You say you work for all the browsers, in what capacity? Do they hire you because you’re better engineers than they’ve got? Do you sneak in and patch things without telling them? How does it work?

**Brian:** We do contract work for hire. A lot of people hire us, and yes, actually the browsers do hire us. But a lot of our funding for making projects move forward is through companies like Bloomberg Tech or Google AMP who fund new features or bug fixes in various browsers.

**Vadim:** I think I heard for the first time about Igalia when you helped to implement CSS Grid Layout in Chromium and WebKit, I think. I saw a number of posts by Manuel Rego, and I was really surprised that some other company would work for a bigger company like Apple or Google, because I thought they have all the resources in the world to do whatever they want. But the reason why we ask you to be our guest today is because, you’ve launched something new. It’s called open prioritization. And can you tell a bit about it?

**Brian:** Yes, by the way, that is also how I learned about Igalia. Interesting. Igalia does most of its work, historically, through single investors, but the web is a commons. And that means it would be great if we could find ways to pull money together. And if we could do that, then we could also allow developers to pull resources together, to get things done. So open prioritization is recognizing the reality of the fact that a lot of things in web standards ultimately boil down to a prioritization problem. They need somebody to fund the work. Lots of companies participate at the spec creation level. They participate in working groups. They go to meetings, they advocate, but when it comes to doing the work, there’s very few companies investing in that. Which means that there’s constantly new work coming in to the queue, but there’s a limited number of people clearing it out and doing the work.

**Brian:** So Igalia helps with that a lot, because you can hire us to help move it along. You don’t have to rely on Google or Apple or Mozilla to decide that now is the time to prioritize this work. But also now developers can do that. So the idea is, we have picked six very carefully selected projects. They have a fixed price tag, which is not a thing that Igalia normally does, but we are willing to do it because we believe in the commons here. And the idea is that the first one to reach its funding goal, we will crowdfund and get that work done on behalf of the people who supported it. And if more than one does, that would be a great outcome. And we would love to do that work if it’s still available.

**Vadim:** I wonder if it will be possible to have my name mentioned in the source code of WebKit for extra fee.

**Brian:** Probably not, but interesting.

**Vadim:** Well, just like on Open Collective for Kickstarter they offer some extra perks for extra money, so I think you should explore this.

**Brian:** Everybody who donates will be mentioned in a blog post, when we… Regardless of how this wraps up, we will have several more blog posts about it, how we want to carry it on. We hope it’s really successful so that we can do lots more of it. But currently, if you donate, we will make sure to give credit to the wall of people who donated.

**Bruce:** So let me get this right, Brian. Igalia is going to do the work that will be crowd funded, but in order to determine which goes first, or which stuff gets done. There’s an open prioritization whereby people pledge money. They’re not giving money as yet to demonstrate that’s what they’re most interested in. And then when something reaches its funding target, your team of C++ ninjas will spring into action and do the work.

**Brian:** That’s correct.

**Bruce:** Interesting.

### Features overview

**Vadim:** It’s done via Open Collective and I have a number of a couple of projects supported there. So I support monthly Stylelint and Eleventy projects. Those are great.

**Vadim:** I use them every day and a few hours ago, I pledged a hundred bucks for :focus-visible feature.

**Brian:** Nice.

**Vadim:** I’m still thinking about inert attributes, but anyway, could you please quickly go through all the features you proposed for the community and tell why those are important and why you chose them?

**Brian:** Yeah, absolutely. So there is a big queue of potential projects. We had to pick a small number. We decided six was a really good number. We needed projects that we believed we could estimate with a fixed price, which means they have to be relatively well known small. We wanted things that were uncontroversial. We talked to the browser vendors first about which ones would be good to add to our list. We want to make sure that we guarantee success and we want to make sure that we get a balance, so that it’s not, “Here’s how we’re going to fund this browser, but we let people choose.” And we wanted to sort of expose different areas of the platform. So some of it is CSS. Some of it is HTML. Some of it is SVG, CSS. Some of it is accessibility related. So we have a nice spectrum and we wanted to vary the price point a little bit because all together, these things largely reflect what browser vendors are faced with when they have to prioritize.

**Brian:** So the six that we chose were lab colors in Firefox, and you can read something about that on my blog. There’s a post in there. If we want to use lots of things that are developing and CSS around colors, having a perceptual uniform color space is really necessary. So the lab color is the way we do that. It’s a necessary prerequisite to colors level five, so that’s, one we chose. It is already implemented in WebKit or it’s being implemented in WebKit. Focus-visible the one Vadim mentioned earlier is another, that is a CSS pseudo class, that is like the :focus pseudo class, except it only matches when a native focus ring would be drawn. So this, this is a big problem historically, because browsers have put a lot of money into UX research and making the interface feel good and be accessible, is a nice balance of things.

**Brian:** And that means that when things get to focus, they don’t always get the focus ring. They use heuristics and other complex rules and things. However, the existing CSS :focus pseudo class doesn’t care about any of that. So :focus-visible is the thing that I championed with Alice Boxhall. It is implemented in Chromium. It is currently being implemented in Firefox and we would like to fund it in WebKit as well. Just,

**Bruce:** Is this is the one where if you using the mouse to focus on something, it doesn’t draw the ring. But if you’re tapping through with a keyboard it will draw the ring?

**Brian:** Yes. That’s a simple way to say it, except it’s not complete. So if you land, for example, if you focus on a password field, regardless of how you landed on that, it’s going to show that focus indicator, because you need to know where your secret characters are going to land. You want to make sure that they’re not accidentally going into some other text field, for example,

**Vadim:** Actually on our website, we have a :focus-visible polyfill. So at [f-word.dev](https://f-word.dev/), we have visible focus that is too aggressive for most users, but totally useful for keyboard users. So we can have both.

**Brian:** Yeah. That polyfill is actually quite popular. I don’t want to name places. It’s used on some pretty major properties. So we were able to iterate on it actually pretty quickly because of that.

**Vadim:** This feature is the most popular so far among developers.

**Brian:** It is.

**Vadim:** I calculated the percentage of funding and it got 3% already.

**Bruce:** Well that’s because people have seen it on the F-word Vadim, and they want to be like us.

**Vadim:** Or maybe because of my hundred dollars.

**Brian:** Percentage wise, it’s more than twice the next closest one, which is lab colors. Now, I guess the next closest one is, well let’s do them out of order, I have them written down here and say SVG D support, which allows you to create paths via CSS, like SVG paths in Firefox, so that is, implemented in Chrome already. And this is an example of one of those things where you have a choice. Maybe you think that this is really, really cool and you want it, but is it the coolest, most wanted one on here and your gratification will be delayed because even once this is done, it’s not in WebKit yet.

**Vadim:** I think, there’s a good use case for these D property to morph between different shapes. And also you can use these attributes to, put some animation on a path, so it will follow this path. There are some good use cases to have something like this in CSS. I really want to invest in every feature, but I think I’m going to choose a couple of them.

**Brian:** Yeah. So actually I invested in every single one a little bit. I gave more help to the ones that I cared about the most. So it’s sort of like a preferential voting. You can read about both the two that are in Firefox on Fred Wang’s blog, a colleague of mine at Igalia, who argues that we should really fund Mozilla things, because Mozilla is very, very open. They don’t get some of the extra investments through other channels that others do, and we believe in their mission statement. That’s a good argument.

**Brian:** Another one is CSS containment in Safari. This is a last implementation. It is implemented in both Firefox and Chrome, but it’s not implemented in WebKit, so we can get the last one for you. My colleague Rego, that you mentioned earlier, wrote a blog post about why this is a good choice and what it is. Do you need me to explain what containment is?

**Bruce:** Yes. Briefly please.

**Brian:** Okay. So CSS containment is a way to specify something about sort of breaking the traditional bit of what CSS does and saying this works a little bit differently. And so you can give information that, for example, you don’t need to worry about the things outside of this because it has no impact going back out. So originally this was conceived basically for performance and it can be really good for performance, especially in really complex cases. But it may also turn out to be useful or even necessary to get a solution for what people talk about as the container queries problem. But that’s a maybe, so we don’t know yet. And that offers another of these sort of tricky sorts of things that browser vendors have to think about when they’re choosing these priorities.

**Brian:** This is the biggest investment in the list. It’s complicated. And we’re like, “What is the payoff?” So even though we might get it done and have it across all the browsers, which is huge win, we don’t know what the ultimate payoff of it is, it might just be performance or it might be a necessary element to get container queries. And we can’t know yet. So do we invest all that money now or not. Selector list arguments for the not pseudo class, so not allows you to say when it does not match this element, and historically that would just take a simple selectors. But there’s a part of selectors level four says that that should allow a selector list, and so we have proposed to implement that in Chromium, because Google has not. My colleague Oriol, wrote a blog post explaining why that’s good and why that would be a good thing. You can take a look at that.

**Brian:** And the last thing is inert, which is, again, something I worked on with Alice Boxhall and Rob Dobson. The easiest way to understand inert, is to think about a dialog. When you open a dialogue, everything that is not the dialog is still there, but it’s not keyboard focusable, you can’t get back to it, it’s as if it does not exist. You can’t select texts, that’s behind the dialog, you can’t click links and fire events on things that are behind the dialog because, it’s inert.

**Brian:** So inert is a necessary thing for dialog and it was added to the HTML spec around the time when we were describing dialog, it’s still in the HTML spec because of that use case. So inert is the ability to add a reflecting attribute, so an attribute or a property that reflects back and forth, that will say this sub tree, everything in here is that, it’s all inert.

**Brian:** And alternatively, what you have to do today is pretty complicated. You have to do all of those things. It’s not a single switch. It’s like many complicated things that you have to take care of with regard to Aria and event handling. We find that most people actually get it wrong. Even popular UI toolkits, don’t get this right.

**Vadim:** This thing reminds me of a hidden attribute, but it won’t hide your element. It will keep it there, but not accessible to anything or maybe disabled attribute on input elements, something like this. It’s strongly connected to, well, mostly connected to accessibility use cases, right?

**Brian:** It makes it easy to get accessibility right. Create a nice UX that also gets accessibility. Right?

**Vadim:** I can explain to you, why I’m still on a fence thinking about supporting this thing or not, because I think it would be better done via CSS property rather than HTML attribute.

**Vadim:** It would be easier for developers probably to, I don’t know, adapt to different screen sizes may be and disabling one part of interface or the other, otherwise you would need to use JavaScript for that. It’s historically there. And it would be great to have it, but I think it won’t solve the problem completely.

**Brian:** So inert is implemented in Chrome. It is implemented in… Sorry. It is being implemented in Firefox also by Igalia. I don’t think it’s likely to change. I don’t think that there is an opportunity to change it to CSS.

### Why devs should pay

**Bruce:** I’ve got a wider question, Brian. All of these things sound great, but apart from Mozilla, WebKit is largely an Apple project. And Apple has at least 4 billion, squillion pounds in the bank. And Blink is largely a Google project and they have almost as many squillion in the bank, so why don’t they just do this stuff? Why do web developers have to put the hand in their pockets?

**Brian:** Web developers don’t have to put their hand in their pocket to be clear. We’re trying to make a larger case that the existing historical model for this is actually not really good for anybody. And while we can be critical of the investment of let’s say Apple, for example. It’s a little bit of a strange commentary to say that Apple doesn’t love the web enough, because by a proof they’re the loved in the top three companies on the whole planet. I don’t know how better to say that, but it… Google puts an amazing amount of money into the web.

**Brian:** Apple puts an amazing amount of money into the web, but it’s not the same level of amazing, there’s no question. And Firefox, but an amazing amount of money into the web. I think we do better when we work together. So in Chrome, now you have Microsoft, Samsung, Igalia, Brave, lots of contributors helping to carry the weight and prioritize, which is nice, because Google can’t manage all of the priorities for all of the voices, so each of them can bring something different to the table.

**Brian:** The same thing is true in Apple. It’s not just Apple, Igalia contributed 11% of the commits last year, but your PlayStation, for example, your PlayStation 4, also used the WebKit browser, not just for the web browser, but for parts of the UI and everything. And millions and millions of embedded systems use WebKit browsers, so there’s lots and lots of downstream of those for sure. And there’s lots of individual contributors to Mozilla itself.

**Bruce:** I’m not arguing that the six projects Igalia have chosen aren’t absolutely necessary and they must have had 26 other ones that you would have liked to put in there. I just don’t understand, why massive industry behemoths like Chrome or Apple, aren’t adding these things themselves?

**Vadim:** Or maybe it may be, have an explanation for you Bruce. The Web is much bigger than Apple and Google, than all of them combined. I think a number of use cases, and I think the number of features that could be implemented is bigger than their budgets.

**Vadim:** It reminds me of this story when the Fronteers decided to send Rachel Andrew, to represent developers into W3C, this is the way we can be represented in the decision making process somehow as developers. We can vote with our money and not just with pluses and stars for some features to be implemented. I think the number of use cases inside of Apple, inside of Google is limited. And we can add our own opinions in use cases to this story. So it will be available for our own projects and it will make our life easier and our users happier.

**Bruce:** Yeah. Okay. I mean, I was playing devil’s advocate with that question, in the same way that, I actually put the money in and then expensed it back to Opera to give a thousand dollars to Yoav to implement the picture element. I really like the idea that, as a web developer, I can vote with my wallet as well as my stars and my plus ones. I am in this sense, a happy capitalist and willing to throw my money.

**Vadim:** So there’s an Indiegogo page, created back in 2014, by Yoav Weiss, so he probably did it first, like Opera used to say, Opera did it first. So in this case, Yoav did it first. So he launched this Crowdfunding Campaign to implement picture element in Blink. And then I think they bark ported to WebKit later or something like this. And Opera pledged some money and Yoav gave us a private masterclass on picture element. And just for, four team members of Opera DevRel, that was nice.

**Bruce:** It was really good. I mean, I think it’s a great idea. Brian, how can Web developers or how can anybody interested take this forward? There’ll be a link to your blog posts, et cetera, in the show notes, but is there a deadline or is it just the first one that gets crowdfunded? You’ll hit the go button and then when the second one meets its pledge, you’ll set that team member on doing that. Is it all in serial, is it in parallel? How’s it going to work?

**Brian:** We have set a sort of internal review after 60 days. After 60 days we’ll review the status of this and if it looks like we’re not getting fairly regular progress on it, that is not going to move, then we will probably back off and try something slightly different. But if it looks like it’s moving, we’ll leave it open for longer.

**Vadim:** I have a silly question. Why wouldn’t any C++ developer start such Indiegogo page and promise implementing something like this to WebKit, Mozilla or Chromium? Is it something very complex and it could be achieved by just a handful of people in the world or?

**Brian:** So it is not trivial, Web browsers are today massively complex. They’re measured in tens of millions of lines of code and thousands of person- years investment, there’s quite a lot to know. And then the Upstreaming process, also the review process and everything can be challenging. We have an advantage in that, we have lots of good relationships. We have respected ownership even, a degree of ownership.

**Brian:** So Rego, who we mentioned is Blink API owner, for example, and we have good relationships like that in levels of responsibility on all of these engines. So we can do it very well, we’ve proven that we can do it very well. As to why other people couldn’t do this, well, there is no reason. I mean, absolutely, if you can contribute to Web browsers and you want to contribute to Web browsers, contributing your labor is another way you can do that.

**Bruce:** Yeah. You mentioned upstreaming Brian, I assume that you and all your chums at are Igalia have discussed this with the people who are actually in charge of deciding what makes it into shipping versions of the browsers. I mean, it would be a shame if we all crowdfunded and you added inert, for example, and then it didn’t actually ever get shipped for reasons beyond anybody’s control or understanding.

**Brian:** Yes, of course. That was a major consideration when we were choosing which projects. And it’s the reason that, for example, even though we have a proposal and we’re currently investing ourselves in research around the container queries problem, we don’t want to crowdfund something like that, which has very low likelihood of… it’s not there yet. But all of these are basically uncontroversial. We spoke to browser vendors before we listed any of these, and told them of our plans and got their basic approval. They are interested in accepting upstreaming for any of these.

**Vadim:** That’s very good to know.

### JavaScript and other ideas

**Vadim:** You mentioned before that you tried to do a diverse list of features to propose to developers, so they could choose something. And it’s not like you’re focusing on CSS only, or on accessibility only. But I don’t see any JavaScript here, what’s the reasons behind this? Or JavaScript is doing just fine and don’t need any help from Igalia, for example?

**Brian:** We do a lot of work in TC39 on JavaScript. We actually are the maintainers of the 32-bit JSC. It is very important and there are things that we have in our list that we did not choose. And the reason that we did not choose them is just because, just like prioritization, you have to make choices and we needed to optimize for certain things. Putting the JavaScript things in there in the end made optimizing for those things in this initial experiment harder. We have things, if this is successful, we’ll definitely be adding some JavaScript things.

**Vadim:** For some reason it seems to me that implementing something like :focus-visible or inert or containment would be so much harder than implementing some new Syntax sugar to JavaScript, so maybe that’s the reason why you need some extra funding or extra interest from community. You need some support.

**Brian:** I think really it was just about balancing all of those factors that we wanted to hit multiple browsers, we wanted a good variety of browsers, we wanted a good variety of areas, a good variety of sort of prices. We wanted this quality where they call it a shovel ready project, ready to go, it just needs somebody to get to work. In the end, we didn’t choose the JavaScript project, but we will in the future, again, if this is successful. If this is not successful, that doesn’t mean we’re done with this as an idea, it just means we need to reformulate because we really believe in the idea. Igalia invests ourselves.

**Brian:** This is an interesting thing that we haven’t talked about, but Igalia is a cooperative, we have a flat structure. Everybody receives the same pay. We have equal say. We choose to invest ourselves because we believe in the commons. We believe in this idea of expanding the number of voices and diversifying the investment in the commons. And we want to find ways to explore it. This is an experiment, if this one doesn’t work, it doesn’t necessarily mean that we’re done with the idea we’re committed toward that larger idea.

**Bruce:** Really cool. Really cool. One last question from me, Brian, for at least 14 years now, and when I collared you in your office at TPAC in Japan, I put to you a small CSS enhancement that I’d been looking for. And I notice that, that’s not in the list. Why isn’t my thing in the list, Brian? Or should I say Judas Kardell?

**Brian:** I think it is not a shovel ready project, getting something to the stage that it is a shovel ready project, is also a prioritization problem. Somebody has to prioritize to invest, to do that work, to get that through the working group, to write the spec techs, to have the debates and the arguments and work out all of the problems involved in that, I think in that particular case, nobody has done that work yet, so it couldn’t be on this list. It is very much probably better than container query’s shape, but still needs some work.

**Vadim:** So Bruce, you need to do your part first, then Brian.

**Bruce:** Mate, I’ve written a blog post. It worked for the picture element, so what more do I need to do? Honestly, Brian, although you’ve repeatedly stabbed me in the back over this one, I forgive you, because you have a jolly nice chap and it sounds like Igalia is basically Woodstock with just loads of hippies making the world a bit better.

**Brian:** I really love Igalia.

**Bruce:** It sounds great, actually. They got any jobs for with people with attractive shirts?

### MathML and corporate support

**Vadim:** And I have got one more topic to discuss. You mentioned HTML, CSS, you have some plans in JavaScript, but another direction that I heard Igalia is very interested in, is MathML, what’s going on there?

**Brian:** Yeah. So when the HTML5 was created, when Hixie and others proposed that we move HTML forward for applications, because it had been stalled and all this other work had been going on in W3C, under XML oriented projects. Along with him, as he translated a lot of those into the HTML specification, like X forms became the basis for a lot of the forms, things. He also took in into things wholesale that are under other embeddable content. Those are SVG and MathML, both of those are specially called out in the HTML specification today. They work a little bit differently, but they have had huge investments and both of them have giant ecosystems. But they are historically weird and a little bit problematic.

**Brian:** We’ve spent a lot of time trying to make them less so. Some of these challenges of its weirdness caused it to not get its final implementation in Chrome. In fact, it was backed out when the Blink code was split because of complexity and what they felt were unanswered questions. We thought that this is important. We think that this is important to society and while it won’t help you sell ads, it won’t improve the ability to stream video or something, it is actually really important, it’s one of the core reasons that the Web was created, was to be able to share research, especially at a time like now. It would be really great to know that world scientists can share like mathematical text, that is the Web superpower.

**Brian:** We think this is really important. So we started a project to get the final implementation and to work out an interoperable MathMl rendering core, that is a subset of what was called MathML3. So we are well, well into that. We did a prototype implementation last year in Chromium, and that allowed us to have a lot of conversations with people on the Chrome team and the Rendering team. And we’re well into the process of upstreaming this, it’s currently in Canary behind the flag and you can see the progress of that. It’s going great.

**Vadim:** Is there any other company supporting you in this MathML journey?

**Brian:** Yes. There are some other companies, we’ve got a grant through the Sloan Foundation and we got some support from Pearson. We got support from the American Physics Institute, and I think that, that’s pretty much it. But you can also donate to that if you are interested in helping advance that, because currently that is largely at this point Igalia investment.

**Vadim:** I think it’ll be good to list MathML, in the same open prioritization.

**Brian:** That is an interesting idea.

**Bruce:** It also goes back to the point that you pulled me up on as well, Brian, that there’s lots of companies that we don’t necessarily think of who are actively investing in Web standards. I didn’t know that Pearson, the Publishers were involved and also Bloomberg the financial people have done a lot of work in supporting some standards, getting done. I don’t know if they’ve been active in actually getting implementation, but a friend of mine, Florian Rivoal, also an ex-Operative for a long time, was working with Bloomberg.

**Bruce:** It’s nice to call out these organizations that are quietly behind the scenes doing some of perhaps the less glamorous work, but it’s important for their businesses and they’re giving it to the commons.

**Vadim:** Now I think, I should personally go from company to company, like where I know some people in Russia and ask them to support this challenge. Maybe our listeners, you should do the same with your company because what is a lot of money for a single person could be not so much for a company. Do you open for a corporate sponsorship of this thing or it’s just?..

**Brian:** Yes, absolutely. The only stipulation that we’ve placed on this, is that, a single company can’t fund the whole entire effort. That’s pretty easy since there’s already some funding toward all of them, any company could sort of step in and fill the gap and get one done. The reason being that, that is our current business model, that is what we do. So if you really want to fund one of these, we feel like that would spoil the experiment, if somebody, one person stepped in and just funded the whole thing. So we said, “If you’re really interested in doing that, just come and talk to us and we’ll do that. We’ll fund that, and that’s not the winner, we’re going to keep going with letting the larger commons choose one.”

**Brian:** But absolutely we want corporate sponsorship. I think for me, actually, a big part of the experiment here is that, I wanted to see if these groups that work on standards, these industry groups that get together and talk a lot in theory, and then wait and focus on, is this thing getting done and why isn’t it getting done? Perhaps sometimes have maybe philosophical arguments that are a little bit, not immediately connected with reality, but they’re okay spending the money on that, why not follow this example of these other things and say, “If the 10 companies in say W3C that are interested in this thing, if they all got together, the same argument holds true.” They can work together and agree. “This is the thing that we’re going to find,” and they can each kick in a 10th of that.

**Brian:** I think this is really only more powerful for developers because developers don’t need to have meetings. They don’t need to, ask for permission from someone. They can go out there and advocate for why they chose the thing and we can get together and do it because our numbers are so great. I don’t know how many Web developers there are. This is an interesting question. If somebody has some data, send it to me.

**Brian:** Just, meetup.com, has 18 million people. I think it is signed up self-identifying as Web developers. So if you take that as a number, which I think is probably way too low, because it’s just the single service, and use that as just a working number 0.38% of them, could get together and just decide to fund the biggest one in here. And that could happen very rapidly, if we advocated and decided to do that, it would only take 0.03% of that number, pledging $2 to close the smallest 0.03, that’s such a tiny number. We have a lot of economic power, if we choose to use-

**Vadim:** I’m going to use every channel of communication I have, to promote this idea. I really love it. Podcasts, news and some media, you should expect some support from Russian community soon.

**Brian:** Excellent.

**Bruce:** Likewise, Brian, this is why we invited you on because we’re both, Vadim and I are both very excited by the idea. I mean, what’s not to love Web developers. You want X or Y to happen, you may or may not know a bit of C++, it’s a long time since I wrote any C++, but I sure as heck don’t know anything about committing to WebKit or building Gecko or how to Upstream into Blink, but I know a person who does. The person I know is Brian, but he lives in a hippie commune called Igalia, where they all take the same amounts, prioritize together, sit on bean bags and they smoke their JavaScript, And they’re devoted to making the commons, the Web that we love better, what’s not to love?

**Bruce:** So if you possibly can please support them and have a chat to your bosses, if that’s possible. All the links will be in the show notes, so you know where to go. I know Brian’s very active on the social media, et cetera, so would almost certainly be delighted to take questions if we haven’t addressed them here.

**Brian:** Absolutely.

**Bruce:** Thank you ever so much, Brian. Thank you for your time and thank you for the clarity of your explanation and the ambition of your vision.

**Brian:** Thank you so much for having me on. I really enjoyed it.

**Vadim:** And once you have some results or maybe you’ll fund the one of the goals, we’ll be glad to have you back and discuss what was the result.

**Bruce:** Absolutely.

**Brian:** Excellent.

**Bruce:** So humble listeners, that’s all we have time for this time, but we could have gone on speaking for ages, but Brian’s got things to do and Vadim’s got things to do. And it’s Gin and Tonic o’clock here in the United Kingdom.

**Bruce:** We hope you enjoyed our experiment with having a guest and we hope you have enjoyed episode five of the F-word. See you soon. Again, Brian, thank you, and thank you everybody for listening. Boomshanka.

**Vadim:** Cheers.

**Brian:** Bye. Bye.
