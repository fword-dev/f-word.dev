### Intro

**Bruce Lawson:** Hello and welcome to the F-Word.

**Vadim Makeev:** The F-Word of course, stands for frontend, the wonderful world of web development. I’m Vadim Makeev.

**Bruce Lawson:** And I’m Bruce Lawson, coming to you from Birmingham, UK. Where are you these days Vadim?

**Vadim Makeev:** Well at my apartment for a month already. I’m in St. Petersburg, Russia.

**Bruce Lawson:** Excellent. So this is Entente Cordiale of web podcasts. So let’s kick straight in. I don’t know if you’ve heard Vadim, but there’s this thing called COVID-19 going around. Do you know actually? I heard a really interesting podcast about mental health and COVID, by the president of the Flat Earth Society. Apparently, they’re really worrying that social distancing is going to push people over the edge.

### Resilience in the time of COVID

**Bruce Lawson:** I’m sorry. Talking of COVID, there’s been a few blog posts going around recently, about the importance of resilience. Now that we’re all doing work at home or over the web or we’re getting information or collaborating over the web, it’s as important now that as it’s ever been, that website be lean and mean, so everybody can access them and access them fast and be accessible.

**Bruce Lawson:** Of course, these things have always been important but they’re particularly important now and a good friend of mine from Birmingham, a guy called Matthew Somerville, wrote a really interesting blog post about [coronavirus.data.gov.uk](https://coronavirus.data.gov.uk/), which is a website that the government here in Britain released, to allow scientists, journalists and other interested parties to get information about the COVID pandemic.

**Bruce Lawson:** And he noticed that it was basically just vomiting loads of JSON and JavaScript down the wire, which then you know, old framework thing had to be assembled, parsed, executed and then a DOM assembled. So Matthew being Matthew, spent a few hours to remake this website, using good of fashioned semantic HTML, CSS and JavaScript to enhance it, so the graphs are still interactive.

**Bruce Lawson:** And it’s a fraction of the size and it loads in a fraction of the time. But he wrote a really great blog post about how to do this, which you will find in the show notes and I advise everybody to have a look because it’s really interesting.

**Vadim Makeev:** I was really surprised to see the actual source code of this site available on GitHub. So people could actually go there and see how it works and propose some changes even or maybe improve some things. You don’t have to reverse engineer it in the browser, so you can actually help government to make better websites and services.

**Bruce Lawson:** Don’t they do that in Russia?

**Vadim Makeev:** They usually pay some company huge amount of money. They hire another company for 10% of it and they steal the rest of it. So that’s how things works in Russia. It’s not on GitHub, in short.

**Bruce Lawson:** Well weirdly, a previous government of the UK, a right wing government (and I’m not usually a fan of right wing governments), but we had a cabinet secretary called, Francis Maude and he basically hired loads of great people from our industry to work in something called, Government Digital Services and by cajoling, begging, constructing arguments that you couldn’t defeat, managed to persuade all the different government departments to let them unify all of the government services under the domain, gov.uk.

**Bruce Lawson:** The source code is all on GitHub and there are design systems about accessibility, internationalization, usability, etc. And basically, now in the UK, everything’s public, everything’s opensource, unless there’s a demonstrable reason why it shouldn’t be. You can’t make a native app, unless you can show that the web cannot do this stuff that government buys. Should be open source, unless it isn’t available, except proprietary and source code should be put on GitHub.

**Bruce Lawson:** So if you’re nice Mr. Putin wants, he’s welcome to fork gov.uk and make gov.ru and hire you, when you can stick some nice CSS on hit and charge him 20 million roubles.

**Vadim Makeev:** Yeah. In your case, it sounds like communism, really. Everything open and free for everyone, it’s… wow.

**Bruce Lawson:** But I thought your Mr. Putin worked for the communists?

**Vadim Makeev:** Well, he used to.

**Bruce Lawson:** In his youth. But yeah, have a read of the coronavirus.data.gov.uk blog post folks because there’s lots of actionable things you can do there. And then looking at the wider discussion, another friend of Matthew and mine, called Stuart Langridge, also in Birmingham. Move to Birmingham folks, it’s where the web happens in the UK.

**Bruce Lawson:** Stuart Langridge wrote a really nice blog post called, [Hammer and Nails](https://www.kryogenix.org/days/2020/05/06/hammer-and-nails/). And you said you really liked the analogy, Vadim. Do you want to talk us through what Stewart wrote?

**Vadim Makeev:** Well first, I was really surprised to see that Gentoo is a penguin. Had no idea what Gentoo is and that was-

**Bruce Lawson:** And not only a penguin.

**Vadim Makeev:** Well yeah, it’s an operating system, it’s like distribution of Linux and what’s the point behind his post that, by serving everything client side like this coronavirus data website did, we’re basically asking our users to compile everything on installation. And not only once but every time they load our website, basically what Gentoo does, when you want to install an application, it downloads the source code it compiles somewhere in the background.

**Vadim Makeev:** Theoretically, you can change the compilation process and do something else with your software. But a small amount of people actually does it. Basically, you’re spinning your laptop fans for nothing because you can just download ready made binary from their servers. So this Gentoo approach is what’s happening these days on the web with those single page applications.

**Vadim Makeev:** Every time a client or user loads your website, basically you’re doing this Gentoo thing, which is unnecessarily in most cases.

**Bruce Lawson:** Stuart is a flame-haired FOSS Adonis. He used to work for Canonical who make Ubuntu.

**Vadim Makeev:** Oh.

**Bruce Lawson:** He consistently tells me off because I run a Mac, rather than a Linux box. And he’s a huge Linux fan but even he says, even most Linux fans think the Gentoo bunch are sort of slightly crazy because they want to compile everything from source code.

**Bruce Lawson:** But they compile it once and then they’ve got a self-compiled binary on their machine, by sending down a metric shit ton of React/Angular to everybody’s client and you’re making them compile it, every time they go to your website. Which as Matthew Somerville showed, isn’t the most performant approach.

**Vadim Makeev:** But let’s take a step back. If your interface is highly dynamic, it consists of data and data is changing all the time, it probably makes sense to build some sort of a shell and then fill it with data and it will be rendering on the fly and making your interface. It’s probably a good fit for such interfaces.

**Bruce Lawson:** Yes but most websites are not that. Going back to the coronavirus data site, even their “about” page took 20 seconds to load or something like that because it’s just text and even so, that was all compiled on the fly.

**Vadim Makeev:** As for static text pages or some sort of landing pages for your website, it’s definitely not required to have everything based on React but as every developer wants the same technology used everywhere, it probably makes your life easier. So you start every project with the same create-react-app package or something like this and it’s easier for you to write code because you’re using the same approach over and over again.

**Vadim Makeev:** And it’s easier for you to hire people these days probably, if your project featuring React as the main technology behind it. And yeah, maybe the battle is lost already. What do you think? Is it something that we have to deal with and we have to optimize those single page applications, instead of trying to yell at those developers and say, “Let’s get back to good old HTML.”

**Bruce Lawson:** It feels to me like the… I mean, it’s a pendulum, isn’t it? It feels to me like it’s starting to swing the other way. Even Dan Abramov of React said, we need to rethink our approach, the vast majority of normal websites. Not these highly dynamic things that you mentioned.

**Vadim Makeev:** Yeah.

**Bruce Lawson:** But it’s always good fun to shout at developers, I’m not going to stop. On the subject of resilience and doing things the right way, my chum, Adrian Roselli had a good point. A lot of people argue that they don’t need to have an accessible website because people can go into a physical shop and buy whatever it is they need. But in these unprecedented times, of course, physical shops are shut.

**Bruce Lawson:** So if your only presence is on the web, where does that leave your defence, that you don’t need an accessible website? I don’t know because I’ve committed many terrible acts in my life, but at least I’m not a lawyer. So I don’t know what the answer is but in the US, where I think there is like an ADA law suite every few minutes on average, against inaccessible websites, I’d be wondering what’s the legal situation would be, if my website were inaccessible and that was people’s only way to do business with me.

**Vadim Makeev:** Yeah. I think there’s a saying in Russia, you can only know a person in the time of crisis or something like this, really know someone. And also interesting, a situation here. Let’s say there is a restaurant and usually, it’s 100% or 90% offline. Basically, you can go there, order your food, wait for it to be delivered on your table and just enjoy it. These days, I do not go crazy not to cook too much at home.

**Vadim Makeev:** I usually and also help some small restaurants in my area. I order food from them and sometimes I go to pick it up myself. Sometimes I order delivery and during this crisis, they realized that the quality of their website actually matters. So it’s not enough to publish PDF or Excel with prices. You have to actually build a decent interface, so the audience could actually see what they’re ordering and they can actually load your webpage.

**Vadim Makeev:** So it wouldn’t be like a white text on white background and 10 megabytes background image that makes it readable. It’s interesting times. You can actually see what’s behind and how good their websites were. It makes a difference now, for some companies, for some restaurants, for some small businesses. It’s just a matter of surviving, if their website is good.

**Vadim Makeev:** They have to invest in it somehow or maybe it will improve the quality of small businesses websites in the future, once this pandemic situation is over. You know, we’re desperately to find something good, that will comes out of this situation. Maybe it will make something better on the web. I don’t know.

**Bruce Lawson:** I don’t know. But the old Russian proverb, folks, you don’t know the man till the shit hits the fan. And that’s Chekov, that. Isn’t that from the Cherry Orchard or is it?..

**Vadim Makeev:** Something like this.

### HTML nesting rules

**Vadim Makeev:** Most of my life, I’ve been using HTML spec to just check the list of HTML tags and see what’s the rules of using HTML tags and is there any good example of using, I don’t know, marquee Tag. But a couple of years ago, I started using HTML spec to check if it’s allowed to nest one element into the other. And as a developer with 15 years of experience of using HTML, I don’t usually need an answer to this question.

**Vadim Makeev:** I somehow know what could go where. I wouldn’t nest H1 into a paragraph. But a couple of years ago, I had no idea why. It would just feel wrong to me. Is it similar to you Bruce?

**Bruce Lawson:** It is. Yes. You sort of develop a gut feeling about them, without really knowing the rules. Kind of in the same way as, I don’t have to think, I’m talking about an event that started in the past but it’s still continuing, therefore I will use the present perfect tense. HTML is like a native language to us. By God, listeners, we’re so clever.

**Vadim Makeev:** Oh yeah. But I thought that the only thing that could go wrong when your nest elements wrong way, is HTML validator saying that you’re a naughty boy and giving you some errors and mistakes and warnings. But it wasn’t like that. I realized that some elements break the nesting and they jump out of improper nesting. I’m still figuring out the actual list of elements that would jump out of wrong nesting.

**Vadim Makeev:** But the thing is, it could actually break your interfaces and could break your accessibility because they will be not that list of elements you would expect to check what elements you could actually nest into the other element. That you can go to the spec, to the description of an element and there are a number of fields. And two of them are important in our case.

**Vadim Makeev:** The first one is category, for example, P element, paragraph, it listed in two categories. It’s flow content and palpable content. I’m still not sure what palpable content is and it’s not relevant in our case but the most important is that, it’s flow content. And its content model is phrasing content. Basically, content model means that you can nest phrasing content into a paragraph and category means that, paragraph could be nested into flow content context, into the element that has content model of flow.

**Vadim Makeev:** For example, P elements content model is phrasing content. If you want to nest H1, you have to check the category of the H1 tag and its flow content as well and it’s also heading and it’s also palpable. So it’s not phrasing, so by putting H1 into P element, you will get problems, at least with validator. But not only that, it will jump out of P. For example, you have some text and then heading and then another part text.

**Vadim Makeev:** So you’ll have paragraph opened and closed, then you’ll have heading element and then you’ll have the second paragraph opened and closed. Basically, you will have three elements on one level, instead of two elements, one and nested into the other. If you wrap your heading into a link and you’ll nest it into paragraph, you’ll have much worse situation. You’ll have some weird empty tags lying around and it might be a big problem because some parts of your interface could become links without your intention.

**Vadim Makeev:** So it’s a big problem and it seems like the problem is serious enough and the way you could actually check if your elements are allowed to be nested, is checking the actual rendering in the browser and it’s a good thing that browsers these days actually render HTML by the spec, so they do it in the same way. You can check your browser rendering, you can put your web page into HTML validator but HTML validator, apparently it’s not up to date with the actual WHATWG spec.

**Vadim Makeev:** So in some cases, you will get some errors which are not errors, because according to spec. So it’s not unfortunately up to date but I think they’re getting there. Every time they introduce some updates, one day they will probably be compatible, 100% compatible with the current spec. But it’s really hard to do because it’s ever green. It’s living standard. Maybe it was easier back in W3C times but since it could actually break your interface, I think there should be an easier way to check if some elements could be nested or not.

**Vadim Makeev:** And there is one, some developer I know, he used to be a student in HTML academy. He built a service called, Can I Include? Something like, Can I use but can I include in this case? There are two fields and that’s it, that’s the whole interface. You put child tag name and you put parent tag name in the second field. How it works, it parses HTML specification and not every time in the browser but I think it pre-parsed.

**Vadim Makeev:** It parses HTML specification and it builds a table of all elements and their content models and their categories. And it compares, so it does it for you.

**Bruce Lawson:** That’s pretty good and it’s also worth noting that these things do change. I think only recently, there was a change to allow a heading element, about which I mean, H1 to H6 inside a legend element.

**Vadim Makeev:** Oh yeah. Yeah.

**Bruce Lawson:** Because people were asking for it. It works the same in each browser. It was just not allowed, according to spec, so they changed the spec.

**Vadim Makeev:** I think there are at least three cases of proper or improper nesting. In first case, it’s just not allowed by the spec and a validator will say that you’re doing something wrong. For example, if you nest a paragraph into unordered list for example, it will just stay there but you will do the wrong thing, according to the spec, according to validator.

**Vadim Makeev:** Here’s another example. If you put an address tag into paragraph, which I tried to do a couple of weeks ago. It will… Come on, I thought it’s phrasing content.

**Bruce Lawson:** Vadim.

**Vadim Makeev:** I thought it’s some sort of span or something. Yeah, I know I’m stupid. But still, I tried to do this and it just jumped out of paragraph and my paragraph became two paragraphs, with address tag in the middle. So the second case, it’s when they jump out. It’s like oil and water, you cannot mix them sort of thing.

**Vadim Makeev:** And there’s another case, you mentioned when everything works fine and it’s just a edge case that no-one ever thought of. For example, this H in the legend tag or I remember another change in the spec, when they allowed div element inside of definition list.

**Bruce Lawson:** Oh, yes.

**Vadim Makeev:** You can actually group your DTs and DDs into a group by div element. So it wasn’t allowed, it wasn’t jumping out but it wasn’t valid. So these days, it’s totally fine, both in browsers and according to validator and the spec itself. So there are used cases when they change it but I don’t think they’re planning… Well at least I hope, they’re not planning to introduce changes in this jumping algorithm because it might break some website.

**Vadim Makeev:** And I would really like to know what’s the list of tags that will jump out because I don’t see it anywhere in the spec. Well it’s huge but I haven’t read through the whole spec looking for it but I tried to look for some words and some parts of it but I haven’t found the rule of jumping out. I don’t know, there should be a section like jumping text or something like this.

**Bruce Lawson:** Have you checked, doesitjump.com?

**Vadim Makeev:** Yeah. I should register this domain.

**Bruce Lawson:** I don’t know that there’s a list but it’s a function of the HTML5 parser, isn’t it? That will decide whether…

**Vadim Makeev:** Yeah. So it should be described in the spec but I haven’t found the part of it.

**Bruce Lawson:** We’ll have to send a tweet to Tab Atkins but I’ll do it Vadim, Because when Tab hears this and realizes that you don’t know what palpable content is, he’s going to unfollow you.

**Vadim Makeev:** It’s this weird category that doesn’t really matter, if you think about it. I’ve read the description of palpable content. It makes sense but it doesn’t matter in my daily workflow and it’s just there. I don’t know, maybe it matters for someone but I still struggle to understand what it’s for.

**Bruce Lawson:** Oh, I’ve got no idea at all. No idea. I understood when things were out of the block or inline but now, no, it’s like naughty content, jumping content, palpable content.

**Vadim Makeev:** Oh yeah. I actually remember the fourth use case. It’s when the content model of an element is transparent. For example, a link. If you nest something inside of link, there’s no way to check if it’s okay or not because link got this whatever content model. So you have to ask the outer element if it’s possible to nest something.

**Vadim Makeev:** Basically, if you have link around your H1 element, is it fine or not? Who knows, until you check the outer element. If it’s paragraph, it’s not allowed to have H1 nested into link, that’s nested into paragraph. If it’s something like article or section element or just body, it’s fine.

**Bruce Lawson:** And there’s things like ins and del, which can be “block level” (in inverted commas) or “inline”, depending on how you want.

**Vadim Makeev:** That’s the other idea that’s gone from the current version of the spec, there’s no block and inline elements anymore. I think the last time they used those terms, it was HTML 4.1 or something. If someone would tell you, “Those element cannot be nested because one of them is block and one of them is inline,” don’t listen to them because it’s an old idea.

**Vadim Makeev:** And so, basically, you have to check content model and category of a tag, instead of trying to remember what’s the default display value in a browser.

**Bruce Lawson:** Yeah. I mean, they were presentational because it was about how they get displayed in a browser and not a lot of people know this but all elements are inline by default.

**Vadim Makeev:** Oh, so without browser style sheets, they are inline?

**Bruce Lawson:** Exactly.

**Vadim Makeev:** Oh, I didn’t know that.

**Bruce Lawson:** Exactly. It’s in the CSS specs. Everything’s inline, unless otherwise declared as either display:none for things like title and meta charset and things. Or they’re defined as block.

**Vadim Makeev:** So yeah, dear listeners, please check if your HTML is valid. I think it’s the easiest way to check if you nested your elements properly. Otherwise, if you see some elements jumping out, you’ll know why. It’s not just a dark or some black magic, it’s actual spec, saying those elements, what to do.

**Bruce Lawson:** Yeah. I mean, although we have the HTML5 parser, which means that every browser’s going to give you the same DOM from your markup, validation still is a really useful debugging aid.

### Masonry layout

Okay. So recently, auntie Rachel or Rachel Andrew as many people know her, wrote a blog post called, Does Masonry Belong in the CSS Grid Specification?

**Bruce Lawson:** The reason for this is that, Firefox has an experimental implementation behind a flag of an extension to this CSS grid spec, which allows masonry layouts. If you don’t know what masonry layout is, go and look at Pinterest. If you do know, don’t go and look at Pinterest because it’s rubbish. Developers want to do masonry layouts. Developers want to do lots of mad things and they should be allowed to do them.

**Bruce Lawson:** So it’s good news that this has been implemented and it was a really well thought out suggestion from Mats Palmgren, whoever he is, on the GitHub repo, where things are discussed. Rachel asks, does masonry belong in CSS Grid or does it belong in Flex? I am (unusually for me) not particularly ideological about this. It doesn’t matter to me, whether it’s in Grid or Flex.

**Bruce Lawson:** It just matters to me, that we have the ability and it looks like we’re going to have the ability. And it’s good that we haven’t had to invent a new display model, so it’s not display:masonry. It’s an extension to the existing CSS Grid spec. Vadim, how many masonry layouts have you done for Mr. Putin recently?

**Vadim Makeev:** Not a single one but in 2013, I did my last masonry layout. I remember it exactly because I did it for Opera website. It was [Dev.Opera](https://dev.opera.com/) and it’s still up and running, based on Jekyll, I believe, and it’s hosted on GitHub, so you can go and check. It’s funny to see that it’s still up and the latest article published is June 16th, 2016 by Andreas Bovens and Bruce Lawson.

**Bruce Lawson:** Is it really? Good Lord.

**Vadim Makeev:** Yeah. Well they still publish once in a while, some updates on Opera Chromium engine but otherwise, nothing’s going on. But I designed and built this website back in 2013 and I used masonry layout on the main page. Main page is full of recent articles, like small previews and some pictures, some text and so, it’s like three column layout. I tried to use multi-column layout for this and it was totally fine.

**Vadim Makeev:** But I realized that implementations in Safari and Chrome are buggy. And sometimes, I would get 200 or 300 pixel gap out of nowhere, at the bottom of the multi-column list. So I thought, I need to do some other way. Plus, if you use multi-column layout and the content goes down, the first column and only then it gets to the second one, if your content is very long, you want to probably feature the latest articles on top.

**Vadim Makeev:** So you’ll need some sort of different order. So I implemented this masonry layout script. I think it’s based on multi-column layout but when the page loads, it applies some JavaScript magic and it becomes the truly masonry layout. Basically what it does is, it replaces some elements and it rearranges those elements. And it’s a very clever script and it was a really nice thing to do and easy thing to do. I don’t think it impacts the rendering too much.

**Vadim Makeev:** Yeah, it was a nice thing to do and I never even dreamed of having something like this native and recently, I went to Rachel Andrew’s and Jen Simmon’s demos and I enabled this flag in Firefox Nightly, that’s my main browser these days. And I was really surprised to see how well it works in Grid layout but then I thought I should probably go deeper because they have huge discussion going on in CSS WG repository on GitHub.

**Vadim Makeev:** And it started on January 6th from the actual proposal, by Mats Palmgren and it’s still going on. I think the latest comment is posted yesterday by a friend of mine, Ilya Streltsyn. He’s from Belarus and he’s active part of this discussion. Even Eric Meyer said, “You convinced me. I was wrong at some point”. Ilya is doing well.

**Vadim Makeev:** Yeah and I think I agree with Rachel and Fantasai and some other people on this thread that, it definitely does not belong into a multi-column spec, it does not belong into grid layout. It could be hacked into Flexbox but it also might be a problem. It’s quite different, so it probably makes sense to make display masonry, that would be a nice thing to do.

**Vadim Makeev:** And I really like that the Firefox did this Chrome thing, shipped something without asking anyone and disabled it by default. It’s not like they didn’t know how to discuss things, without actual implementation in CSS WG. It’s not like it was necessary but it was necessary to promote it among developers, to force them to test it and think about it. And it was really, really helpful for the discussion.

**Vadim Makeev:** So it started in January and it stopped and then after Firefox implementation, it started over again and it’s really going somewhere. They’re going to decide soon on the next CSS Working Group meeting or somewhere later this year, how it’s going be implemented. I have no idea what it’s going to be but probably Grid level three or masonry layout level one or something like this but I would really like to see it shipping to browsers.

**Bruce Lawson:** Yeah. I mean, we’ll put the link to Rachel’s article and the CSS Working Group discussion in the show notes but for those of you who have time and inclination, the CSS Working Group would really like to know what you think.

**Bruce Lawson:** So give it a whirl and tell them Vadim sent you because he was implementing masonry layouts seven years ago, folks. That’s just how ahead of the curve the man is.

**Vadim Makeev:** Oh yeah, with JavaScript, right.

### Web We Want

**Bruce Lawson:** Talking of trend setters, let’s talk about the Spice Girls. Vadim, tell me what you want, what you really, really want for the web to do next because Stephanie Stimac and Aaron Gustafson have been asking developers about the web they want.

**Vadim Makeev:** I think I want so many things, so it’s pretty hard to pick one. Most of the things I would love to see, related not to the web or specs themselves but rather to browsers, implementing some cross browser implementations, rather than…

**Vadim Makeev:** So we have a lot of ideas implemented in one browser or maybe in two browsers. I would love them to be implemented across all the browsers. That’s the main problem with the current web for me but it’s so much better than it used to be, that I cannot complain.

**Bruce Lawson:** No. Well The Web We Want survey, was something done by .. I don’t know where Stephanie works but Aaron definitely works for Microsoft on the Edge team and they asked developers to rank things they wanted. So for example, they were things like, most developers, 48% wanted accessibility tools front and center, in devtools. Only 1.6% said they want a source order view of a rearranged content, for example.

**Bruce Lawson:** They also asked about what you want from browsers. 29% said their first choice was browsers to localize data like dates and numbers. 38% wanted browsers to automatically fix accessibility problems. 32% wanted a standard API for event throttling and debouncing. I’m not sure I know what debouncing is. Maybe it’s to do with those elements jumping out, that we talked about first.

**Bruce Lawson:** But interestingly from HTML and CSS, the runaway first choice, by 67% was better HTML forms. After that, it was better justification, with 12.5% saying it was their first choice. SVG to be fully stylable from SCSS, that was the first choice of 9.6%. And interestingly, the ability to flow content dynamically from one container to another using CSS, was only the first choice of 8.6%.

**Bruce Lawson:** So that suggests to me that CSS Regions isn’t nearly as important as work on better form controls and certainly more stylable form controls.

**Vadim Makeev:** I don’t really impressed by the results, to be honest. Imagine you would ask developers, which you like to have something like grid layout, five years ago? The native and great way of laying out elements on the page. They would say no, we have Flexbox. We have floats, we’re good but these days, we’re all super happy that we have Grid layout. The same applies to flowing content from one tag to another. It’s a brilliant idea.

**Vadim Makeev:** It’s available in InDesign or PageMaker, on all those publishing tools, for years, for decades even and it’s super useful. And it would be useful for the web as well but it doesn’t sound sexy. I think the only thing here you mentioned that’s really important is, having SVG as the first class citizen on the web. Because it’s still lacking some features and it’s still half way there.

**Bruce Lawson:** Mm-hmm (affirmative). Mm-hmm (affirmative). Living on a prayer.

**Vadim Makeev:** Just this morning, I tried to include external sprite with SVG that contains gradient. So basically, it’s a external symbol that I used inlined in my HTML and it contains gradient. And gradients in SVG should be defined in def’s tag.

**Vadim Makeev:** But you cannot include def’s into symbol, so you have to put it one level up and when it’s one level up, it doesn’t render in Chrome and Safari. But it renders in Firefox, so you cannot use external SVG with gradient, only flat ones. Minor problem but there are hundreds of them.

**Bruce Lawson:** Interesting you said that though, because you said you didn’t believe these numbers because web developers don’t ask for useful things, they ask for sexy things. To me, the CSS Region is a sexy thing but few people ask for that and better form controls is enormously dull and un-sexy.

**Vadim Makeev:** Yeah but I think the problem is that the level of noise in such polls, is very high. You should probably make the questions good enough or accurate enough, so it wouldn’t affect the answers. Or you should rely on empty inputs, where they would type their own ideas or you should suggest something yourself, instead of relying on user input. But otherwise, if you see 65 or a 80% of interest, it means something.

**Vadim Makeev:** But in most cases, it’s just a noise and it’s just random thoughts and it’s just the actual wording of the question, that probably doesn’t look interesting to developers. So I don’t buy all the results but I definitely see some trends and I would really love to see the forms improved. They already shipped it, together with Chrome and Edge and other chromium based browsers, they’ll get it as well. It depends on who you are.

**Vadim Makeev:** If you’re practicing code every day, it’s one thing. If you’re teaching code, that’s the other thing. If you’re just, I don’t know, a dreamer, you can dream of anything. If you’re a designer, for example, you need some other things. So in your case Bruce, forms. What else?

**Bruce Lawson:** When I was in Japan last year at TPAC, I was bugging people from the CSS Working Group for something I’ve wanted now, I think since about 2011, which is the ability to style poetry and song lyrics properly on the web.

**Vadim Makeev:** Really?

**Bruce Lawson:** Because okay, not everybody’s interested in poetry but there’s a heck of a lot of song lyrics on the web and the majority of them are marked up, usually with one verse or one stanza of being a paragraph and then using the BR tag for line breaks and that’s entirely legitimate because those line breaks are not decorative. They are there because that’s either where the vocals stop or the author meant there to be a breath pause there.

**Vadim Makeev:** But what’s there to be improved?

**Bruce Lawson:** Well the trouble is, is that if you have long lines and lots of poetry does have long lines, on a narrow screen, obviously the line wraps. And you can’t see whether the line has wrapped because the author put a line break there or because the browser put a line break. There’s a long standing typographical convention.

**Bruce Lawson:** Because I’m an English literature grad, I’ve got a 1911 book of pre-Shakespearean, Elizabethan poetry and for some reason, each page is two columns of text. And the typographical conventions is, if because the column width has caused a line to break, the remained of the line is justified right. So you can see that that is a line break caused by the constraints of the medium, rather than authorial.

**Bruce Lawson:** And that matters because if you’re an actor, the authorial line breaks tend to be where you took a breath.

**Vadim Makeev:** So basically, you want to align right the line that’s wrapped?

**Bruce Lawson:** Well not necessarily align right. I want some ability to put something there because another typographical convention is to indent it slightly from the left, so I want the ability… And the browser knows where the first line is because if you do in paragraph, colon, colon, first line and set it red and then amend the width of the browser window, the amount of lineage that is colored red, changes.

**Bruce Lawson:** So the browser knows but I don’t get the opportunity to say, if you have broken the line, please either put this content before it or align it right or indent it left by one em. And it doesn’t matter because where the author put a line break, is actually part of the semantic of poetry.

**Vadim Makeev:** Yeah. I’m trying to figure out the way to solve it via CSS. So I’m not sure if, for the first line, so the element, text alignment and support it but I would go, P text align right and P first line text to line left, so everything would be aligned right, apart from the first line, that would be aligned left, for example. But I don’t think that alignment works in such suite of elements.

**Bruce Lawson:** But what happens if the third line of the stanza is particularly wrong, so gets broken on a narrow screen?

**Vadim Makeev:** Well it goes right as well.

**Bruce Lawson:** It’s a tricky one but luckily of course, the CSS Working Group always say, “Don’t bring us syntax, tell us your problem.” So I’ve told them the problem and they all went, ”Oh yeah, that’s an interesting one. We should be able to fix that relatively easily,” like they’ve been saying for seven or eight bloody years.

**Vadim Makeev:** That’s number one on your wish list, right?

**Bruce Lawson:** It’s number zero on my wish list because it’s basically, secret cabal of scientists, if you like “Big CSS” discriminating against those of us with an arts degree.

**Vadim Makeev:** All right.

**Bruce Lawson:** So come the end of COVID, CSS Working Group, I’m taking you to the Hague.

**Vadim Makeev:** Well it’s not a problem for drummers, you know, they don’t have lyrics.

**Bruce Lawson:** Yes but I’m talking about artists.

**Vadim Makeev:** Yeah.

**Bruce Lawson:** And there’s no art in drums mate. It’s thrashing about.

**Vadim Makeev:** Yeah. We discussed in previous episodes. Yeah.

**Bruce Lawson:** We did.

**Vadim Makeev:** I know my place.

**Bruce Lawson:** So listeners, thank you very much for listening to me and Vadim, who’s come from the future to tell you all about stuff, like he did with his masonry layout in 2013. I’ve come from the past to grumble about old fashioned things like poetry. But there we are, the old and the new. All wrapped together in one podcast. Please tune in next time. Until then, stay safe and wash your hands.

**Vadim Makeev:** Yeah. See you soon. Cheers.

**Bruce Lawson:** Bye-bye.
