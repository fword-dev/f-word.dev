## Intro

**Bruce:** Hello and welcome to The F-word.

**Vadim:** The F-Word of course stands for frontend the wonderful world of web development, browsers standards, some politics and everything in between.

**Bruce:** I’m Bruce Lawson, coming to you from Birmingham in the United Kingdom.

**Vadim:** I’m Vadim Makeev, coming into you from St. Petersburg, Russia.

**Bruce:** And by popular demand because you get very bored listeners when we don’t have a guest on the show, we have a guest on the show, hurray, and it is Miriam Suzanne. Miriam, please tell us a little bit about yourself.

**Miriam:** Hi, yeah, thanks for having me on. I don’t know, I started back in the day when we were all just web developers, or webmasters?

**Bruce:** Webmasters, yeah. Yeah.

**Miriam:** Somebody emailed me and asked me if I knew any college students who could build them a website cheap. And I said, “I’m not in college anymore, but I could try.” And now I have a career. So yeah, I run an agency and part of the Sass core team, and also now working on the CSS Working Group.

**Bruce:** Welcome, thanks for being here. We’ll get to the CSS stuff in little while. You also do theater and music, so that’s three musicians on the show today. Tell us about your music.

**Miriam:** Yeah. I have a band. Well, when there’s not a pandemic, I have a band. I don’t remember if I still have one, but I play bass and do some vocals and indie rock, something between Modest Mouse and Explosions In The Sky or something. I don’t know if you want references.

**Vadim:** Thank you, Bruce, for calling me musician.

**Bruce:** Well, you’re a drummer, so it’s nearly a musician but I’m rhythm guitarist and a vocalist, so post-pandemic let’s take the world by storm.

**Vadim:** Yeah.

## Susy and Sass

**Bruce:** So the Sass core team, Vadim, you’re big into Sass, aren’t you?

**Vadim:** Well, I used to be. Let me tell you a story. I think exactly 10 years ago, it’s a conference in Moscow. I’m sitting in the first row and at the stage is Andrey Sitnik. Miriam, you probably know this guy, he’s author of PostCSS and Andrey on the stage, selling the audience Sass as a new hope for frontend and super, super new cool automation tool that will make your life easier. I’m sitting in the first row opposing him, telling him, “We don’t need it. We have everything we need,” and blah, blah, blah. Two years later, I’m developing website, Dev.Opera using Sass only, mixings includes everything. It was terrible code, to be honest, I used every possible function available in Sass, including Susy library for layout. That was super cool, before Flexbox was a widely available I was using those isolated floats. That was something. I just recently realized that Susy and this library and Miriam Suzanne have something in common. So tell us your Sass story, Miriam.

**Miriam:** So I started freelancing. I was freelancing a little bit and I was using the layout technique. This was before media queries had really become available widely. I saw the recorded video of a talk by Natalie Downe called CSS Systems. It’s still one of my historically favorite talks that I’ve seen. She just laid out this model for responsive sites. They were responsive both to the viewport and to font sizes, but they had a max width so they weren’t a real long line lengths, just beautiful sites that she was building with the team at Clearleft. This was 2008, something.

**Miriam:** I was using that technique, but it involved a lot of math because everything was done in percentages, but then with a fixed outer width so you were trying to do these calculations, figure out how many percentages will be roughly the pixel count that I want. That math becomes even more complex when you start adding gutters to your grid. I was doing my math by hand and copying in the results, or by hand with a calculator, and then paste the results in my CSS. It’s just this random percentage that makes no sense and maybe I would put a comment beside it, that’s like, “This is two columns of six.” You wouldn’t know that by looking at it.

**Miriam:** Around 2008, 2009, I started forming a more stable agency with my brothers. We all ended up freelancing and we’re like, “Oh, we could do this together.” At our first meeting, I mentioned that I was doing all this math by hand and my brother who’s a backend developer was like, “Well, there’s probably a way we could automate that, write a little script for it.” We looked around and we found Sass. It was right around the time that Sass, there was sort of a video going around, showing off what Sass could do. So it was the first thing we did as a company, was we sat down and looked at Sass and said, “Oh, could we write a little math script that does this weird layout trick of Natalie Downe’s and put it into Sass?” Then my brother was like, “What do you want to call it? We could put this online and other people might find it useful.” So I named it after a character in my novel that I was writing at the time, I was like, “Susy’s a name, right? We can call it Susy.”

**Miriam:** I didn’t have a GitHub account or anything like that at the time. So he ended up putting it online and then the Sass community was really small at that point so people started really quickly giving feedback and helping. I learned much from just managing that. It first started out with a couple of mix-ins that do a little bit of math and it quickly became clear that I had built it for exactly the way I do things every single time and that actually, it was probably more generally usable and we should strip out some of my opinions, but it grew. When Sass took off, Susy was the only grid system that had been built specifically for Sass. It wasn’t a port of some other grid system. It was completely native and could get completely out of your way. You could build any grid system with it.

**Miriam:** At that point, a lot of the idea was just doing those math problems and solving those float bugs that we all had to deal with, sub-pixel rounding and double margin hacks and whatever. So, that first mix in spat out 10 lines of code, when now we could do it with a single value, but yeah, it’s what got me active in the community totally by mistake because my brother thought people might like it.

**Vadim:** I wonder if your brother was a Ruby developer because Sass came from Ruby community mostly?

**Miriam:** No, he’s actually a Python developer. He was on the Django core team, still is on the Django core team. So no, we ended up with Ruby in a lot of our projects just for Sass. It was the only thing running in Ruby in most of our code.

**Bruce:** Isn’t Django, wasn’t it kicked off or very influenced by Simon Willison who is Natalie Downe’s husband?

**Miriam:** I know he’s involved with it. I didn’t realize that at the time, that might have been a connection.

**Bruce:** It’s weird isn’t it? I was going to say, did I detect a slight degree of nostalgia there for the old days when communities were so small that people actually knew each other personally, and they helped each other out, rather than just writing appallingly be rude messages to each other on Twitter.

**Miriam:** Well, you can still find some of that at conferences, I like that.

**Bruce:** Yes, me too. Should they ever happen again it’ll be nice to get back to that community. Zoom is good, but you can’t beat the smell of other developers in the flesh, I think. Anyway, back from developers smells to Sass Vadim.

**Vadim:** So what’s the current status for Susy? Well, I guess it’s not quite relevant these days, but when was the last time you committed something to the source code or updated something?

**Miriam:** It’s been a while and over the last summer, I think we officially declared it deprecated, end of life. It is a little bit behind actually, where I am. I mean, there was a point where I was still maintaining Susy, but I had moved on to using flex and grids, not needing that sort of math anymore because I was using a more intrinsic layout approach. Let the elements size themselves and just force some alignment where it’s needed. But I got a sense really, when Susy took off, it became really clear that a lot of people were using it because they were doing backwards compatibility, they were supporting old browsers.

**Miriam:** So it became clear to me that I had to maintain Susy longer than I needed it. It had to live until people were actually dropping. IE7 or 8. There are still a few people who use it. I still occasionally get questions, support requests, but I haven’t updated the code in years.

**Vadim:** In my case, I started to use it because it gave me reliable layout, not just floats, that would jump around when you resized the window, but something first table. I think Susy prepared me for a Flexbox and Grid Layout later, so thank you for that.

**Miriam:** Great.

**Bruce:** There’s a theme isn’t there? It’s like Susy filled a gap that later CSS natively included, and we’ve talked in previous episodes about things like jQuery not necessarily being necessary anymore because JavaScript has taken some of the things in jQuery, like querySelector and querySelectorAll into itself. Has the same thing happened with Sass or is there still a need for CSS pre-processes like Sass and Less, do you think?

**Miriam:** I don’t think that they’ll ever totally disappear. There was a time there where Sass was the standard. If you went to a CSS conference, the majority of speakers would use Sass in their demos and in their talks. I think that’s diversified a bit because of things like Emotion and CSS and JS libraries, people are finding other ways to pre-process and PostCSS has some other features, sort of like when you want something really explicit, Sass is a good place to do it and when you want something implicitly transformed, PostCSS is a good place to do it. So there’s different tools that are solving different parts of the problem.

**Miriam:** But in my mind, it’s a little bit backend, frontend. Backend’s not going to totally go away just because some things are moving onto the frontend. We’re doing more things in JavaScript in the client, but we still need servers, they’re not going to go anywhere. I think the same is true with pre-processors. There’s some things, structured data for example. In Sass, I can create a map of all my colors and it’s meaningful. I can loop over that map. I can generate a design system, documentation style guide from it. That’s not something that’s going to move into CSS. It’s not useful in the browser, in the application, it’s useful as sort a developer side tool. So I think that’s where pre-processors go. Then also they’re a place to experiment. We can play with things in jQuery that end up in the browser. We could play with things in Sass that end up in the browser.

**Vadim:** What’s the current state of Sass? I see in people’s code that they still use Sass on a level that was relevant maybe five years ago even, like some basic inputs, variables, some color functions and that’s it. Since then, Sass has moved forward with modules, you rewrote it using Dart language for some reason, I don’t fully understand why Dart, that’s another topic. It’s something else and it’s still moving forward. Do you think people started to care less about new Sass features or those are just too specific. Yeah, in general, what’s the current state of Sass?

**Miriam:** It did get rewritten in Dart. Part of that was the lead developer on the project, the lead language designer, Natalie, didn’t like writing Ruby and didn’t like maintaining the Ruby code. She was, I think, part of the Dart team at the time and it was a language that she liked using, and she’s writing 95%, 100% of the code. So we picked a language that she would enjoy working in and that’s it. If she enjoys it, then we get features faster and it runs faster than Ruby. It’s easy to port to JavaScript and lots of other places, so it’s working out. But yeah, that means we are developing new features more quickly. Modules, I mean, again, they’re improvements to the developer side of things, which I think is really the focus of where the language is going. It’s not really a new feature in terms of what it exposes to the users of your website, what CSS it lets you write. It’s a new feature in terms of organizing your code and creating a nice architecture and sharing code more easily without naming conflicts, all that developer architecture experience stuff.

**Vadim:** Now, I wonder if it’s widely used these days, this kind of thing, because it’s hard to use just Sass for everything. You’ll need more tools, even PostCSS, like Autoprefixer and some cssnano, or CSS libraries like that to optimize your CSS to pre-process further. Since people have complex tool chains, they probably minimize the role of Sass and use other tools for module systems. So, I wonder if it’s something focused towards library developers or there are people that actively using it, but I’m not seeing those in the community because it’s my bubble.

**Miriam:** Yeah, I mean, the thing is, it’s not trendy anymore. Sass has definitely become just a part of the ecosystem. My experience is that everybody understands it, everybody’s seen it. A lot of people still use it, but it doesn’t get a lot of attention. I think that’s where we are and I think that’s fine. I think there’s a little bit of something that people are missing when they abandon it for storing all their tokens in JSON and YAML and using JavaScript to manage design systems. I think they’re missing the fact that Sass and other languages like it actually understand what a color is and what a length is. They know how to do math and manipulation on these design-specific types and everybody’s obsessed with TypeScript and having types but then they throw all of our design tools into a language where everything is a string and you don’t have a color type. You don’t have a length type, you don’t have understanding of unit math and how that works. So, that’s a little frustrating to me when people don’t see you’re giving up all of this useful type data and useful ability to manipulate colors and lengths in a way that other languages get to do.

## CSS Layers

**Bruce:** So Miriam, as well as being one of the core Sass people, you’ve been cropping up a great deal on www-style, which for listeners everywhere, I know that it’s the thing you look forward most to popping into your inbox. You’ve been involved with container queries and something that I still don’t really understand. Vadim tried to explain it to me, but I wanted it to come from somebody really understood it, CSS Layers. So, what are CSS Layers?

**Miriam:** At this point a year and a half ago, I was working with Jen Simmons on a YouTube channel, teaching CSS, teaching what’s new, teaching what’s old. I was putting together an eight part course on the cascade and inheritance and deep dive into all of this. I know that a lot of the industry has been frustrated with the cascade, people especially coming from other languages that don’t cascade, not sure how to use it. I was trying to figure out where exactly are there problems? I think the cascade is brilliant. I love what it’s intending to do and some of how it goes about doing it. It’s very much built around the idea that we as authors are not the only people on the web, we’re not the only stakeholders here. There are also browsers and there are also users and all three of us get to contribute to the output of a site and the cascade.

**Miriam:** So I can see why that’s frustrating for authors. Saying, “I’m sorry, you are only one third of this equation. You don’t get control.” But that’s important. That’s an important part of this platform, but I was looking at it and cascade origins, that’s the first level of the cascade and why it exists, that’s where do the styles come from? Who wrote them? Is it authors, users or browsers? But then we’re mostly dealing with specificity, which is that next layer in and within specificity, we get three basic layers. We get IDs, which we’re supposed to use only once on a page and then they are very specific. We get this heuristic, where we’re like, probably when you’re being specific, it’s more important. That’s an assumption, but it relatively works in a lot of cases so we build a cascade around it.

**Miriam:** So IDs we can use once, they have to be unique, they’re very specific. Then we get classes and attributes and we can make them up and use them however we want to, and they’re very powerful and very flexible. Then at the bottom layer, we get element types. Is it a link? Is it a dev? Those, we can’t create new ones. Well, maybe we can now, but we couldn’t create new ones so they were general, not in our control. It struck me that only that middle layer we have full control over and that a lot of the quote, best practices now, are to stay in that middle layer forever and then fight over how many classes or attributes are we allowed to use? Do we need to make sure that everything is always only one of them so that we’ve never used any specificity differences at all?

**Miriam:** I thought, “Well, what if we went the other direction?” What if fixing the cascade, instead of narrowing down to everything should be exactly equal,, we spread it back out? We said, “Let’s control it. Let’s give authors more ability to say what the layers are in a way that’s very similar to origins.” So with origins, we assume that the browser is providing readable defaults, so they’ll go first. Then the user is setting preferences. What do they want? Do they need a bigger font size across the whole web? How do they want things to be universal? Then we’re coming along and we’re giving the details, so they layer in that way and then `!important` flips the layers. I don’t know if people realize that importance is part of origins more than it is part of specificity. It’s there to flip those layers and say, “Sure, we override the browser and user in the default case, but the user can insist that they know better than we do, because they do, about what’s going to be readable for them.”

**Miriam:** So, there’s certain things they can insist on. The browser actually knows what the device is capable of, what the browser is capable of, so it can make some final decisions. So we reversed the order. We have similar things within author styles. We have defaults, we have preferences, themes, and we have things that are important to the workings of the component, or the workings of the page. What if we could layer them and what if we didn’t predetermine exactly what those layers have to be, but we left it open to authors? How do you layer the pieces of your site? Where do you layer in your design system? Do you use a third-party tool? Do you end up fighting the specificity of that third-party tool? Where would like to layer it, say between your defaults and your overrides? So CSS Layers are just that. They’re a tool for authors to say, “How do I want the cascade to work for me before specificity gets involved?”

**Bruce:** This isn’t a mechanism of pre or post-processing, this is going to be part of CSS. So this is with a CSS Working Group and a browser vendors are on board?

**Miriam:** Yeah. It’s actually been really surprising to me how fast this one has moved and several experienced spec writers, I am not an experienced spec writer. I made this rough proposal to the working group and they said, “We want it. Come, help write the spec.” So I got to join the working group and yeah, it’s been moving very quickly with lots of support, which is fun to see.

**Vadim:** Yeah, I was about to ask a question, how one becomes a spec writer and you just explained.

**Miriam:** Yeah, accidentally.

**Vadim:** Yeah, you’re just writing just some rough draft and if CSS Working Group likes it, you’re on board.

**Miriam:** Yeah. And even in my initial proposal there, I did not lay out a syntax at all. I explained the problem and said, “What if we had layers? What if we had some way of layering?” I think that’s actually a good way to approach the working group. If you have an idea, it’s best to come not with a fully fleshed out solution because people like brainstorming the directions it could go before you flesh it out.

**Vadim:** They probably were honestly surprised that you were the only person asking not to throw the cascade under the bus, but actually enhance it.

**Miriam:** Yeah, it was one of my favorite comments was something like, “So you’ve taken what everybody hates and you’re doubling down on it and that’s your solution?” I was like, “Yep.” I like that.

## CSS compatibility

**Vadim:** So, in previous episode, we had Eric Meyer as a guest and we were discussing some of your drafts. I have this tweet in my favorites where your proposed three different CSS enhancement in forms of drafts in a single tweet. Do you often do this, or it was just a coincidence to have just the three specs at the same time?

**Miriam:** Well, so what happened is I was brought onto the working group, but as Rachel Andrews calls it, being in an invited expert on the working group is an expensive hobby. Nobody’s paying you to do it. I’m lucky that the agency I helped start, they’re very supportive of me doing this work and they chip in some, but I was putting in very part-time trying to work on this one spec that I was brought in to do. Nicole Sullivan reached out and Google has this fund where they help fund open source, open web projects. She said, “If we helped pay you for your work on the working group, could you also look at container queries and scope? I said, “Are you serious? Those are the biggest problems over the last 10 years that nobody’s solved, but sure, I’ll give it a shot.”

**Vadim:** And also the best job for a person like you, I guess?

**Miriam:** It’s worked out for me. I’m happy with it, I’m enjoying it. So I got to spend basically the fall deep diving into all three of these issues and fleshing out proposals for them. I didn’t really know how that would go because people have been working on it for 10 years. Layers, I came up with. These other ones, so many other people have put so much time and effort into them and really gotten us to the place where they’re possible. Two years ago, container queries would not have been possible, but a lot of people put in a lot of work. In the end, my proposal is basically, take David Barron’s proposal and make a few tweaks.

**Vadim:** But it’s a still important role to play.

**Miriam:** Yeah and on the working group, because it’s an expensive hobby, things can just sit for five years, even though people want it, because nobody has the time or the energy to focus on it. So even just saying, “I’ll be the advocate for this. I’ll keep pushing on it,” even though it’s not fundamentally my work.

**Vadim:** So back to Eric Meyers’ appearance in our previous episode, we were discussing your proposals and Eric said that he is still going back and forth on layer one because of the backward compatibility and the overall approach to the spec. Because in short, you’re proposing wrapping huge parts of your code in a new at-rule called `@layer`, meaning that old browsers wouldn’t see a thing in your typical CSS. This is something interesting because previous specs ideas, the ones that are in CSS Working Group, are trying to improve existing CSS in a way that would be backward and forward compatible. This thing says, “Let’s introduce some breaking changes into CSS.”

**Miriam:** Yeah. I mean, it’s interesting because the question is what do we mean by backwards and forwards compatible? Because when we introduced say media queries in 2010, is when it took off I think, the browsers don’t understand them. It’s not backwards compatible in that sense. The same is true here, where the only difference is maybe more things disappear into that hidden part. But the real rule is that we can’t break the existing web. So there is nothing in layers that would break existing websites. It’s just that new CSS, as with many new features, new CSS would not be available. I mean, I think he’s right. I think there’s an issue there. It’s not ideal, but as soon as you start messing with cascade, with selectors, I don’t see a way around it.

**Miriam:** So I think what we’re at instead is how do we make this slow transition, this migration to it, as smooth as we can for authors? So we do have ways to polyfill it. There will be polyfills. Those polyfills still will only work back a certain distance, but it’ll be interesting to think too, are there ways that we can make sure that the interaction between layered styles and unlayered styles is such that you can slowly start adding layers? That’s something that we’re paying attention to and trying to make sure is in there

**Bruce:** I’m siding with our guest here Vadim, and not just because I’m a courteous host, but I was thinking when you said about backwards compatibility, @media, and of course @supports does exactly the same thing. I haven’t seen any examples of websites that basically all of the styles a lurking in @supports and if you don’t have a browser that supports @supports, you just get browser defaults. I mean, maybe there are some somewhere because the web’s a big place and there’s a world full of mad people out there, but I haven’t seen any of those.

**Miriam:** We’re also just moving out of the phase where browsers linger for a long time. I mean, once IE11 is gone, that’s the final one that’s lagging because it had a user base from before evergreen browsers. So I think that also changes a little bit how things will work moving forward.

**Vadim:** In case of @media, if you’re going this mobile-first approach and you’re opening your website somewhere, I don’t know in IE6, I don’t remember if IE6 supports @media, probably not, not sure, and you’re seeing basic mobile website and this is totally fine. But one of the use cases for @layer, I remember explaining this to Bruce, one of the use cases is to wrap around your legacy code base and move your layers of your existing code and new code around to isolate it somehow. In this case, you’re hiding almost everything from browser, not just showing mobile version, but everything. It’s not the only use case, but yeah, it’s still different.

**Vadim:** So in @media and @support cases, it’s enhancement in a way. In this case, it’s the architectural change, but I agree with you that we weren’t able to afford it. These days with evergreen browsers, with this four weeks schedule for chromium, it’s insane. It’s like once a month, new version of a browser and yes, Sapphire is still slower than other browsers, but still, it’s keeping up.

**Miriam:** I agree, it is different. I mean, it’s the first time that we’ve fundamentally walked in and said, “What if we changed the cascade? Just fundamentally changed how the cascade works?” We’ve made small adjustments. I mean, we slipped web components, shadow DOM into the cascade in its own little way, but it wasn’t a fundamental change to how the whole thing works. This is, you’re right, probably the first time that we’re trying that. It will be interesting to see how it goes. I hope that we can make that transition smooth and I imagine for some sites, some people, it will take another five years before they’re comfortable with it, but for that, we have to get it in browsers right away, right?

**Vadim:** Yeah.

**Miriam:** So that in five years they have that backwards compatibility. So I’m hoping that we can do that, get in browsers right away. I mean, I remember when we were all learning to drop IE6. The mobile-first approach did some things, but for IE6, you needed more than that. I mean, you also couldn’t handle transparency in any way, half of your colors stopped working in IE6.

**Vadim:** Don’t remind me.

**Miriam:** So there was a lot more than just that, what’s in the media query will be hidden and everything else works. There were a lot bigger issues and a lot of people doing, here’s a really basic default fallback. Like, “What if we basically had browsers tiles and made them look nice and then newer browsers will get the real thing?” I think that might happen some and I think for some people it might take a while.

**Bruce:** Also, I think that not everybody is going to need a CSS Layers. My day-to-day experience of writing CSS tends to be on my personal blog and I see no reason that I would want to use CSS Layers there. I can understand in a big multi-stakeholder, lots of different people contributing code like the one I do at work, but I do tend to stay out of the CSS there on the grounds that therein, the designers, reign supreme and they don’t trust me.

**Miriam:** It is unlike media queries. It’s not a user-facing feature really. It is again, a developer tooling, so it’s going to be most useful for those companies that are using third-party tools. I think it’ll make it much easier to integrate third-party tools in ways that you feel like you can control without throwing importance around and teams that have a design system team and product team, and they’re not always on the same page about specificity, those are the places it’s going to help the most.

**Bruce:** Yep, agreed. So, when are we going to see it in browsers, Thursday?

**Miriam:** Thursday.

**Vadim:** What year?

**Miriam:** Yeah, Thursday, 2025. I expect some browsers will start implementing it this year. The spec is already fairly stable and moving towards candidate recommendation. A lot of browsers don’t announce very far in advance what they’re going to do, but the interest has been there and I expect we’ll start to see it rolling out later this year.

**Vadim:** You said that it would be possible to polyfill it somehow. What would be the basic principle of polyfilling it?

**Miriam:** Right. So it’s a layer above specificity, so you can imagine a specificity hack basically of basically adding ID selectors to things.

**Vadim:** Or multiple classes.

**Miriam:** Right. So, I mean, it looks ugly, but especially using the is selector, you can get the specificity of an ID without even having to match the ID. So you can just throw some random IDs in there, bump up the specificity. It’s a weird hack. It will only work in browsers that support is, you would have to take it out a little farther to support browsers further back, but you could do it. But yeah, basically if you add enough IDs to be higher than any other specificity on the page, now you’re controlling the layering through those IDs.

**Vadim:** Yeah, it reminds me of `z-index`, that’s worse, but yeah.

**Bruce:** So basically it looks ugly, but it works. I’ve made a career out of that.

## Container Queries

**Vadim:** Speaking of polyfills, just a few days ago, Jonathan Neal posted a very early polyfill for container queries. I still have no idea how this thing works, but it looks complicated. Have you managed to go into details on that and what do you think about it?

**Miriam:** Yeah, I’m very excited about that. I mean, I think there are probably some Edge cases of container queries that we might not be able to polyfill perfectly, but even with the current prototype in Chrome of container queries, I was really expecting that we would get janky partial, something that didn’t really feel very good. Even though I was pretty happy with the approach we had come up with, I wasn’t sure it would work very well, but they released that first draft of the prototype in Chrome Canary, and I loaded it up on a site and it did exactly what I wanted, exactly what I expected and I was, “Okay.” The Edge cases aren’t solved, we still have to do that. We can’t really release this until we’ve managed all those Edge cases, but they’re not common and the basics are working.

**Miriam:** That’s been my experience so far with, I mean, two or three days of playing with Jonathan Neal’s prototype of a polyfill, is he hasn’t solved all those Edge cases. He’s still dealing with performance issues. There’s lots more for him to work on there and I’m very excited that he’s doing it. Maybe some of those Edge cases he’ll have to solve in a different way than the browser can. It won’t be as performant as the browser will be, but it doesn’t need to be, it’s a polyfill. I’m just really excited. So far, I threw it onto a few of my demos just for testing and suddenly they all worked in Firefox and Safari. That’s pretty exciting to me.

**Bruce:** Isn’t it a great feeling when a spec that you’ve had a hand in writing gets in a browser and it works how you wanted?

**Miriam:** It’s mindblowing. I never expected, I never thought this would.

**Bruce:** I know, when the picture element and responsive images ended up in Safari, which was the last browser to ship, I must admit, I did get a bit of a feeling of like the monkey at the beginning of 2001, when he throws the bone up in the air and it turns around and turns it to a spaceship. Then the feeling went away really fast obviously, I just ended up looking like a monkey waving a bone around, but yeah, it’s a great feeling.

**Vadim:** Yeah. I think it was the most magical thing I tried in the last five years or so. I mean, I just opened Chrome, enabled the flag and it worked in completely different way that we used to have in my whole career actually. So, it’s historical moment really, it’s a lot of things happening at the same time, right now, a lot of specs. Do you have a explanation, why is it so a lot of new specs that actually trying to change the way we work with CSS?

**Miriam:** Yeah, I don’t know because I wasn’t involved with the working group before last year. I don’t have a lot of that history, but I think they have made intentional efforts at becoming more public about how they work. Everything is now on GitHub, all the discussions are on GitHub. All the transcripts from our phone calls also get posted into the GitHub issues.

**Vadim:** It’s so much better than the mailing lists, so much better.

**Miriam:** Yeah, and I think more people are paying attention and that means more people getting involved. I think the browsers also understand that they compete on these features and they need to also collaborate on these features. I mean, they need to show that they can keep developers happy and keep pushing and part of that is collaborating and all shipping the same thing. So there’s this competition and collaboration that is happening.

**Bruce:** Cooperatition, I heard somebody call it.

**Miriam:** Oh yeah.

**Bruce:** Yeah, obviously I had to beat them to death for inventing that word, but it is sensible. I mean, I see a trajectory from when AppCache got invented and Hixie just sat in a room and invented AppCache, and everybody went... For the sake of listeners, I’m doing a meh face, because what it did, it did fabulously elegantly. It just didn’t do what anybody wanted it to do and it was unable to be tweaked to what people wanted it to do. It was a great example of actually, it was the last gasp of people in ivory towers, not that Hicksy is an ivory tower, but people inventing something in isolation and it being implemented without really consulting with developers.

**Bruce:** I think after that, service worker started, and I think Andrew Betts invited lots of stakeholders and said, “We really need service workers at the Financial Times. Let’s sit in a room and think up something.” I think the browser vendors realize that you don’t get very far if you don’t include, or at least invite, developers into the discussions early on. Then I think the CSS grid was another watershed moment, when all of the browsers held off and released within the same quarter.

**Vadim:** During the summer of 2017, I believe.

**Bruce:** Was it that long ago? God. But yeah, it’s like instead of things getting dribbled out over years, everybody did it together, but everybody did it right so there was the compatibility story. So I see this as not so much a step change, as just a continuation of that process that began back then.

**Miriam:** There’s a clear sense in the working group that the entire ecosystem is too big for any one person to have in their head. But all of us in the group come with different specialized areas of knowledge. There’s a lot of stuff in CSS that I don’t understand because I’m not dealing with CJK languages very much. I’m not dealing with print styles a lot. I’m not working with publishers, but there are people doing those things and they’re there too, and every feature has to get batted around by all of us because CSS, it’s one of the strengths of CSS, is that it’s so interconnected, it’s systemic. It’s like things relate to each other, that’s powerful. Font sizes impact layout, that’s both how you get the, “CSS is awesome,” meme and it’s also a really powerful feature. We understand that everything is tied together like that, and that we don’t have the full picture and that it takes all of us batting it around to figure out something that’ll work.

**Bruce:** But it does seem to me that since you and Rachel and Jen Simmons arrived on the working group, there’s been a real momentum. Is there any truth to the rumor that all three of you dash into a phone box and quickly get changed into some elaborate costume and come out and just save the web?

**Miriam:** I don’t want to reveal their secrets, only to say that I am riding on their coattails. I’m just here following their lead. But I think it is true that the position, that particularly Rachel and I have as invited experts, I think that’s a fairly new thing. That’s a fairly new role in the working group that is designed specifically to bring in developers. So that represents part of it. There’s more web developers. I don’t know that for sure, but that’s my sense, there’s more representation of web developers who are in the field actively working on client projects because of that role. Otherwise, a lot of it is vendors and other interested stakeholders in the W3C.

**Bruce:** Yeah. Let’s not a bash on vendors or interested stakeholders either, we need all parties involved. I just think there wasn’t a sufficient balance before, but it’s not like a vendor shouldn’t be involved, it just needs everybody.

**Miriam:** No, they’re absolutely essential.

**Bruce:** Totes, totes, totes, totes. But yeah, I mean, anybody listening, particularly people who are fluent in right-to-left languages, or CJK, or something like that, get involved because Miriam hadn’t done it until a year ago and now she’s putting out specs faster than I was going to put out a metaphor like Britney Spears putting out records, but actually I’ve got no idea about modern music. She putting out specs faster than Mozart wrote sonatas, that’s about as modern as I get. But yeah, mad props as well to Google for funding people, to allow them to participate because like you said, it’s an expensive hobby. I could do it because Opera were paying my salary, but now they ain’t. So I don’t have time to devote to it as much as I wish I could.

**Miriam:** It’s a complex thing because it would be nice if the funding were more evenly distributed for different parties, if Google didn’t have control of the whole purse, but it’s also great that Google is sharing the purse on some of these things. So, capitalism is weird.

**Vadim:** We still have one super spec from this favorite Tweety person, but I think we’ll keep it for another time. We’ll be glad to talk to you some other time about scoping in CSS, another holy grail that developer is dreaming about.

**Bruce:** Oh yes.

**Miriam:** It is the farthest behind of the specs, so fine to put it off.

**Bruce:** Excellent. When are we going to see container queries in browsers, Friday?

**Miriam:** Yeah, I think the day after layers. No, it’s interesting. So it’s built on top of containment, which is still not implemented everywhere, but my understanding is there are people working on getting containment into all the browsers right now, and then container queries can be built on top of that. So Chrome has the prototype. There’s a lot of Edge cases to work out, so this one’s going to move a bit slower, but there will be a prototype to play with that keeps getting better and better. Then at some point we’ll see the specification itself calm down and stabilize. That’s when I expect browsers will start releasing.

**Bruce:** Amazing. I’m going to have to teach myself a whole new vocabulary because containers, containment, containing the blocks, it’s all getting a lot for my brain to handle.

**Miriam:** Yeah, the glossary’s going to be important on that one.

**Bruce:** Too right, too right. Thank you so much for taking the time to come on and tell us all about them because I’ve publicly had to have these things explained to me twice now, once by Vadim and once by you. So thanks for helping me out and thanks ever so much for all the work you’ve done as well. We, Vadim and I, and community really appreciate it.

**Miriam:** Thank you. It’s fun to work on and always happy for feedback, so go play with it and see what you think.

**Bruce:** All the links, folks, will be in the show notes as will the transcript as soon as we’ve done the editing and got the transcript, so you can get involved. If you feel like getting involved in standards, please do, we need more developers involved.

**Miriam:** Absolutely.

**Vadim:** I think it’s time for me and Bruce to finally record episode with some news, not just guests. I hope some listeners will enjoy that next time, but until then, goodbye and thank you Miriam again, for being with us.

**Miriam:** Thank you.

**Bruce:** Thank you all for listening from Denver and Birmingham and St. Petersburg. Stay well, stay groovy. See you next time, bye.

**Vadim:** Bye-bye.
