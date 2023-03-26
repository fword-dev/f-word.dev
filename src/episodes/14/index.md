**Bruce:** Do I tell you why I’ve got a friend who’s a Hungarian sound engineer. And a Czech one too. A Czech one too.

**Alex:** And we’re off. We’re off to the races.

**Bruce:** You’re welcome.

**Vadim:** I saw it coming, Bruce.

### Intro

**Bruce:** Hello everybody and welcome to The F-Word, the wonderful world of browsers, web standards and everything in between. I’m Bruce Lawson coming to you from Birmingham in the United Kingdom.

**Vadim:** I’m Vadim coming to you from Berlin, Germany.

**Bruce:** Wow! And we haven’t been here for ages, have we, Vadim? It’s been a year and a half, I think, because you’ve been enjoying yourself, moving countries, getting married.

**Vadim:** Yep.

**Bruce:** Congratulations!

**Vadim:** Yeah, I guess we decided that the 13th episode is a good place to stop for a while, take a break, and we’re back with 14th.

**Bruce:** And we’re firing on cylinders folks. We have a luminary guest in The F-Word studio all the way from sunny, California It is Microsoft’s Alex Russell. Hello Alex.

**Alex:** Hello. Good evening.

**Bruce:** Good morning to you.

### Alex at Microsoft

**Bruce:** So Alex we’ve known each other for a while you’re known as many things. Some people call you Big Al, some people refer to you as a sinister mastermind.

**Alex:** That’d be very generous.

**Bruce:** But now you’re at Microsoft, but what do you do for Microsoft?

**Alex:** Mostly, I hold hands and help people come to terms with the technology that they have adopted, and then we find a way together through the thicket and try to make the products better. Which is the long way of saying my job is to help make our web app better. That is at least a full-time job.

**Vadim:** So you’re basically consulting teams.

**Alex:** Yeah, this is a continuation of work that I did at Google for many years, where if you build a platform, it’s natural to maybe start your discovery process with a cadence of meetings with people where you go and you ring them up and you say, “Hello, please tell me what hurts, we’ll fix it.” And then they give you a list of things and then you go off and you spend months and months and months and months, sometimes years, because the standards process can be inscrutably slow sometimes.

And you build a new feature that you think means exactly what they told you in that meeting. And if you get to the end of that, and you deliver a thing and they go, “Eh, but not that,” you now have an existential crisis on your hands. And so that’s a low probability way to learn about the real needs of the folks that you would like to be the consumers of the things that you build.

Another way to phrase that is, there’s kind of no fitness function in the one-off game of telephone. You really do have to be sitting with people for a long time to learn anything about their problems in a deep way, which will allow you to then apply what you know about how the platform works and all the stuff that you… The specific and parochial concerns that you’ve got that they won’t have in order to be able to come to some kind of an understanding about those two sets of things that will let you deliver what they would actually need.

It’s the kind of old, “People would ask for a faster horse” saw. So the way around that is to go sit with them. And the way into that conversation where you don’t get immediately bounced from the room as some wooly browser person who can’t actually deliver anything because you can only affect one small browser, not every browser, certainly in the short run, is, at least in my experience, to help them out in some meaningful way before you really dive into the deep end of, “What are the new APIs that you would want?”

A lot of that turns into performance consulting, at least these days. It does not help that everything is on fire in terms of performance, but that’s kind of the model. I’d like to be getting back to doing the learning about people with the features that they need. That’s kind of what we did with Project Fugu, which is still ongoing, and all that kind of work. But yeah, that’s the model. We try to sit down with people, learn about their actual problems, not the ones that they think they have, and then, you know, in the process of trying to help them out, we now spend a very large fraction of our time on performance consulting.

**Vadim:** So now you’re more of a crisis manager with a deep knowledge of browser guts.

**Alex:** Something like that, yeah.

**Bruce:** Interesting. It sounds to me like this is very much a post-app-cache kind of job because everybody remembers AppCache. It was a thing that Ian Hickson, the erstwhile editor of the HTML spec, spent years and years and years coming up with this excellent solution to people being able to make apps work offline. When he unveiled it and all the browsers implemented it. Everybody went, “Yeah, but that isn’t really what we wanted at all.” And everybody went, “Oh.” And it’s because the great gods of standards actually don’t often make websites, really. And I think they were pretty much out of touch with what real people, like the listeners of our humble podcast, actually do day to day.

**Alex:** And the tragedy of that specific experience was that Ian, for all of his strengths as someone who is, I think, probably the world’s best documentarian of the technology as it exists. That’s a conversation about the details about an observable universe. The skills and techniques that you use to derive that understanding are kind of different to the ones that you would use to derive the other kinds of understanding that you need to kind of learn about this new stuff. And Google internally had the experience of basically using the AppCache design.

I don’t know if you remember Google Gears, back from the stands of time. But Google Gears was built by Boodman and Chris Prince and Mike Sow and a crew of extremely, you know, auspicious people. And there was a mailing list post that was found once upon a time where they had the debate, should we have this thing be a declarative system or should it tie up these kind of worker things that they were inventing at the time, because they were inventing workers, to this new networking system, this new proxy. And they said, “Ah, we’ll try this way, and if it goes the wrong way, we’ll come back.”

And so they tried it. And then by the time Hicksy got there, he didn’t realize that there was a thing to be (I don’t know what he realized) but things transpired such that he did not do a new investigation about the state of the world and wrote down what AppCache had done. Now, once Chrome had launched, and it was important to get all the stuff that was in Gears into the HTML5 standard so that we could sunset Gears, right?

And so the process of going back and sitting down is all, it always looks very expensive to sit with a team and try to learn from them directly, but I promise you it is so much cheaper than going the other way.

**Vadim:** I remember a funny story from the time I think Opera implemented Google Gears back in the Presto days, a few months before it switched to Chromium. So it was unfortunate and we spent a lot of resources implementing that, but that was inevitable, I guess.

**Alex:** Sorry.

**Bruce:** To those people who are listening to this who are under 95 years old, Google Gears was a sort of plugin thingy that went into Chrome and enhanced its capabilities. And it was pretty much an incubation ground for things like geolocation and many other things that were subsequently standardized. Chrome Frame wasn’t part of Gears, so was it, Alex?

**Alex:** It was something of a successor. So, Gears was the plugin for Firefox and for IE, where IE was the primary place where it was needed.

**Bruce:** Ah, yes. Yeah, yeah.

**Alex:** And, you know, Google’s apps did use Gears. So, there was Gmail offline at the time, and it did require Gears. So, there was an experience even in the company of using it in anger and then in frustration. And so that model could have been falsified earlier, actually. But the Chrome Frame was a follow-up of sorts, where instead of adding some new things to the existing DOM and getting around behind the networking stack in order to inject a separate caching layer and then adding things like Web SQL, it instead replaced the entire rendering engine in Internet Explorer specifically.

So you could send a header, and we would swap it out. It was basically a Chromeless version of Chrome, so very much like a PDF or a Word doc inside of IE, you could load it up, but it was hopefully transparent to the user. Anyway, all water long under the bridge, which is to say, hopefully we’ve now accelerated the pace at which we can deliver things. And so now the pressing question is, what should we build and how should we build it?

**Bruce:** Maybe you could build IE Frame and put it into Chrome, now that you’re at Microsoft.

**Alex:** When I was at Google, we always joked that it seemed a little bit cruel that we were the ones who had to build Chrome Frame because Microsoft had the code. But thankfully, we’re fully out of the world of closed source browsers, or at least most of the closed source browsers.

**Bruce:** Back to your thing at Microsoft. When you say you sit with teams, do you mean teams within Microsoft?

**Alex:** Yes.

**Bruce:** Okay, not external teams in the world.

**Alex:** I mean, I will do. When I was at Google for the last… I’ve been doing this kind of incidental consulting since we launched PWAs in 2015. And that incidental consulting has kind of run the gamut. I’ll tell you that the challenges that we have inside of Microsoft with regards to delivering minimally acceptable user experiences on the stacks that are now common will keep me busy for many years. Hopefully there’ll be bandwidth for more external folks soon.

**Vadim:** I guess all teams these days, like writing on a modern stack, they are different in many ways. Why would a team invite someone from outside if they have all the knowledge, all the technologies, and all the experience to solve their problems? And what’s the typical problem they invite you to solve?

**Alex:** You know, they may have other problems, but the problem that is easiest for someone in my position to help them address is either, you know, usually sometimes like a small gap in state of the art knowledge. Like what do browsers do now?

It’s a question that if you’ve been living in Win32 land, may not be a fluency that you have. That’s a pretty straightforward conversation with lots of asterisks involved because browsers do things 80% of the way, and then there’s another 20% that we can’t do because of privacy or security or that kind of thing.

The other kind of class of things are places where teams are in trouble and they know it, and they’re hurting for some reason. So this little virtual team that I work with inside of the Edge team, we call ourselves Project Sidecar, because we’re not the experts in anyone’s product. We kind of get attached to somebody else’s ride, and we go wherever they’re going, but our job is to help make it a more entertaining and smooth journey.

**Vadim:** I would call it backseat driver for some reason, not sidecar.

**Alex:** [LAUGHS] Yeah, so most of the time, teams are hurting about performance, which is very frustrating. So you will see in our products publicly that some of our largest brands, something like Outlook, right, are launching new versions, and those new versions are, in some cases, they will have a native app, but that will be a relatively thin wrapper around the existing web experience. So for instance, if you go to outlook.com, then you install the new beta of Outlook, you’ll note more than a glancing similarity in the UI, and that’s just because it’s a WebView2 app.

And what that means is that suddenly, for teams that have decades of experience in building on stacks that they understand and have learned to tune and learned to hold, all of those skills suddenly fail them. Now they’ve got the culture. They understand how to measure. They understand how to remediate. They understand the importance of doing a good job. They understand you don’t block the main thread.

They actually have a fluency in performance as a discipline that many teams that I’ve worked with in the outside world on the web kind of have not had, which has been wonderful. But there’s a translation problem in some cases, explaining how browsers think about your content and then explaining how the stacks that the less, I would say, less senior people may have been building with and how that has gotten them into trouble.

You have to carefully unpick each of these messes. The Gordian knot does not cut itself. And so we have to go through and analyze the system and then learn about the underlying system. A lot of this is about learning about how browsers work, and then learning about how the systems that they’ve built actually work with regards to how browsers work.

So it is a co-learning experience. We learn a lot about their systems, we learn a lot about their problems, which is extremely valuable for those of us building browsers. And hopefully we’re able to help them out as more and more of our products move towards being web-based.

**Bruce:** Interesting. So, whereas people like me who go into teams, who build things on the web, but don’t necessarily know how to think about performance or accessibility, you’re almost going the opposite side. You’re going to people who understand performance, but don’t necessarily know how to translate that knowledge to a web-based stack.

**Alex:** I don’t mean to be too categorical about it, but I would say the difference between the internal soft culture and other cultures that I’ve intersected with in the web development community is that you’re not starting at zero in terms of, “Is performance important?” The answer is yes. And then the question is, “Why is it so bad?”

### Dojo history lesson

**Bruce:** To the question then about performance,

**Alex:** You are on record as occasionally not being the biggest fan of some popular web frameworks. Heaven forfend.

**Bruce:** A few people have noticed that your praise has been somewhat lackluster. It could even be characterized as lukewarm. I believe you are the man who said, “React. I would rather smash my own kneecap several times with a massive sledgehammer than ever use React”.

**Alex:** That may be a paraphrase. I just want to highlight that that may be a paraphrase, yes.

**Bruce:** But yet, you first came to prominence, or first came to my attention, which is basically the only definition of prominence that I care about, because you invented Dojo, which is basically a framework. So how can you hate frameworks now, Alex?

**Alex:** It’s curious that I also participate in society, isn’t it?

**Bruce:** Yeah.

**Alex:** I will say that Dojo was a learning experience in a lot of ways. We were probably one of the very first frameworks to implement ARIA. You know, that was being built and defined at the time. We had a lot of support from enterprise users, specifically IBM. And that was also a formative learning experience for an open source hippie like myself. What I’ll say is, now if I go to a meeting with someone from IBM, I will still kind of lead the meeting with an apology for Dojo. A not insignificant fraction of the time that will lead to someone kind of like, you know, a real lessening of tensions, let’s put it that way.

**Vadim:** Is it still used anywhere?

**Alex:** Dojo will be serviced by IBM for enterprise customers for probably another 10 years.

**Vadim:** But not for the new projects, for existing ones?

**Alex:** I don’t think so, but that’s the lifetime of an enterprise system.

**Vadim:** Yeah.

**Alex:** So I will say, in my defense, which is not a strong defense, I was not going to need the money, no. The source of enterprise situations that we were using it for were extremely desktop-oriented. We did not have the mobile problem yet. It was something that we were, towards the end of my time working on that specific set of problems, we were looking at. We were starting to think about reindeer. We were starting to think about Series 60, Series 90 browsers because they were finally porting WebKit over.

We were looking at what was the Win CE, the Windows CE browser actually, and which ActiveX controls were actually there, what could we cobble together? Because it seemed clear that something would happen about these weird pocket computers that really only fit in cargo pants. But the end of that conversation was not, “Wow, mobile doesn’t matter.” It was, “Ooh, this is going to suck.”

Because our expectations were wrong. And I would say that the jQuery folks and the MooTools folks, who are, I think, at the moment, the more popular frameworks, significantly more popular, in part because they were appealing to a different cohort of developers.

Dojo had been specifically built for people who had problems and knew it, not for people who didn’t know which problems they were going to solve. And I would say that to the extent that there is a problem with the frameworks that we are deploying at scale today, and Dojo, where things go off the rails looks very similar. When people begin to believe that they need to make everything in the framework.

We made Dojo extremely granular. You could take pieces of it and leave the rest. It was layered to the hilt, you didn’t get all of it. We actually worked very hard against that. You had to go make a custom build. All the stuff that would make sense now from the current world of, “Oh, I guess I need to tree shake,” we didn’t have that technology yet, but that was the thinking behind it.

And it was the same style of thinking that has worked out in the places where there is what I’ve come to call high performance management maturity. So Google, at the same time that we were building Dojo, was building something called the Closure JavaScript Library.

And Closure and Dojo basically smell the same. Like you can look at our class hierarchy, you can look at our styling systems, our theming systems, everything will kind of like squint and line up because we all came from the same school of hard knocks, the dozen people who were building frameworks back in the day of that scale, because we were building things that, Dojo powered the AOL Mail client for a bunch of years, and an email client and PIM and calendar solution that Sun used forever, and was embedded in dozens of enterprise products, things like business intelligence dashboards.

Those were, at the time, what I think we would have thought of as handling a lot of data on the client. We’re only talking about thousands of rows of data at a time. We’re not talking about tens of millions of points of data. But we were trying to push the boat out a little bit on what could be done, and that meant that the people that could actually hold it well were organizations that were going to be staffed and have the people who understood the system more or less end to end. This is the kind of narrow organization which both appreciates the problem and is willing to put infrastructure in place to kind of cordon it off, because it is, I don’t want to say radioactive, But JavaScript is a potentially hazardous material to the experiences of your users.

And so you really do need infrastructure to make sure that it’s handled with care, that it’s not spilled everywhere, that it’s transported under supervision, and that it’s not applied too liberally in the cases where it might be appropriate. And so that discipline requires managers who understand the risks. It requires TLs and PMs who can rise to the occasion and be willing to mark the results to market.

The teams that do good work are the ones that do bake-offs. The teams that do good work are the ones that are willing to cut against the grain of the general consensus when it’s not working for them, where they understand their users, where they understand… If they don’t understand their users, they’re willing to be conservative about what they don’t understand.

So all of those properties are the same properties today that we saw in teams that were succeeding and failing with Dojo back in the day. And I would say that was formative. And then mobile happened. Mobile is a wrench in the works. It’s a whole new day. And we still don’t have our hands around it as a community.

### The case against React

**Bruce:** So would it be a mischaracterization to say that your anger towards the current prevalence of frameworks, and of course I mean React, isn’t that you find React itself to be particularly more problematic than anything else, but it’s actually that it’s a perfectly excellent sharp screwdriver, but unfortunately it’s been wielded by five-year-olds who’ve been at the whiskey and are waving it around.

**Alex:** Or I don’t want people to think that I’m talking down to them about their experiences with React, because they all have their own products and their own use cases. And obviously, again, As you mentioned, it isn’t just React.

I was looking at my wife, we got a catalog in the mail yesterday, and I was like, “Oh, I kind of like…” Francis was saying, “I kind of like some pants that I got from these folks.” And so I went to their website and immediately had to view source.

It was a Nuxt website, so it was a Vue site. And we’ve been making online shopping websites, which are basically companion sites to glossy printed ads on the back of a seasonal photo shoot for a fashion brand for 25 years. Nothing about this is new. And I don’t want to call out the developers, but the developers are new to this, actually, in many cases, and so they pick up the tools of the day, and whether or not the tools of the day serve you or don’t serve you is a question that, as a group, it shouldn’t be quite so hard to tease that out.

Like, if I’m cheesed about anything, It is that these good engineers, engineers who are no better, probably better, but definitely not worse than I was when I was working on the first e-commerce site that I ever slung code in in 1999, that those folks are being let down by tools in ways that we hadn’t been. We are, to some extent, we’re not sending it over a 336 modem anymore. We’re not sending it to a web TV. We’re not sending it to Netscape 4 or 3.2 gold, or whatever, right?

Like, everything got better, and the results are not. What happened? Like, I think this is a reasonable kind of conversation for us to be having. Like, why was the HTML in this page, the HTML sent down the wire for this one web page? And this is not the worst of it, by the way. This is just like a random one. They’re not even high traffic. 800K gzip, 5 megabytes unzipped.

That’s just the HTML. Nothing paints out of just the HTML. Then there’s all the JavaScript. “What is going on? Why are we regressing?” is a question that I think is important for us to be putting front and center.

**Vadim:** Sometimes user experience suffers from new technologies. I guess I don’t have a specific example in mind, but probably sometime during the Industrial Revolution, there were some cases when user experience or product quality suffered from new technologies because they were building new factories, new ways of building things.

**Alex:** But the thing we should have gotten in the Industrial Revolution was mass manufacturing. Right? Like the thing that we would get on the other side of it was plenty. It was a dramatic reduction in the cost of goods sold at the point of sale. Right? The idea that textiles went from being a personally handcrafted item on a loom to being industrially produced, yes, had absolute major quality issues.

We’re, I think we haven’t quite reckoned with all of those today. And it has had, you know, extreme externalities. And as we’ve put a couple more billion people on the planet that has, you know, scaled as well. But what we got for it at the moment was easily identifiable. We got cheaper products which on average were better, and if you were going to buy one it would be on average better. Are we even getting that? My argument is that we’re not. We’re not getting better.

**Vadim:** But it might be easier to produce complex websites these days than it was before.

**Alex:** It used to be a handcraft. Absolutely. It might be easier. That’s a falsifiable thesis. That’s a question that we can answer and it should have a way to measure a solution about it. And when I talk with teams, what I hear are individuals in the organization who are not, let’s say, leaders, who are happy to tell everyone about how much faster they’re going, and then those same organizations and those same teams end up beached. They end up absolutely unable to move for various reasons.

Some of them are related to the speed of their new tools. I’ve seen websites in the last couple of years where the build times for a website are worse than the J2EE data warehouse business intelligence dashboards that we used to build in 2004. Things that are eventually going to end up with a static HTML are taking 40, 50 minutes, a couple of hours sometimes that are trying to have to scale them out to multiple build machines. Computers, of all the things that got better in life, if you are a developer, your computer is so much faster than anything you previously owned.

Now, this isn’t true for people who are on budget devices, although, in a way of speaking, it’s true. So on these devices, things are not getting that much better. But for a developer, oh my goodness. Oh my goodness, the tools have never been better. It’s never been easier to quantify. It’s never been easier to test. It’s never been easier to move code from point A to point B. It’s never been faster. Disk got a thousand times faster. Do you remember when seeks were like 9 to 14 milliseconds?

You could spend an entire frame just getting a single word off a platter. Never mind processing it and doing anything else with it. We talk about thousands of IOPs now. Like, thousands of IOPs, not hundreds. It’s a miracle, right? Not 60, thousands. Tens of thousands in some cases, if you’re on a fast MacBook Pro. So I hear what you’re saying, and then I zoom back out just a little bit and ask, “Okay, did anything else actually change that would cause us to have not been reaping the benefits of all of that hardware progress along the way?”

And the thing that seems to have changed is developers got more expensive. So that is to say, if you hired someone expensively to sling HTML and CSS, build semantic markup, style it well, build a little component, put it inside your PHP management system, and teach a somewhat smaller team of people how to build with it, that might have seemed expensive at the time, but I’ll tell you that the teams that I’ve talked with, they’re not spending less on developers now that everyone has moved to JavaScript as the only language in their stack.

No one’s getting paid less to do the same work, to put at the same marketing website. In fact, there’s a fire sale on the extremely talented people who would rather be writing semantic markup and styling with a little bit of CSS. We are paying an extremely large amount relative to the old way of building for people who are spending a lot of their time creating problems in JavaScript rather than solving them with HTML and CSS.

So I really am looking for data. And it does not seem to me that the burden of proof is on me to prove this out. It does seem to me that my conversations are indicative of a large question that I would have thought that the JS industrial complex would have been drowning me in white papers with at this point. Like for the amount of money being spent, the amount of VC going into it, the amount of enthusiasm and ardor for this style of building, it should be absolutely indisputable that teams move faster, deliver better products, and that they’re doing it at lower cost if that was what we’re getting in return.

**Vadim:** From my point of view, we’re at the point when we did a lot of stupid things, getting to where we are, in terms of complex interfaces and modern solutions. It wouldn’t be possible to build Outlook five years ago using web technologies. Maybe it would be, but not that efficient.

**Alex:** We need to stop. I’m sorry. Let’s just hold that thought.

**Vadim:** Right.

**Alex:** Outlook on the web, no offense to my colleagues, is not significantly more sophisticated in terms of the UI components that it’s presenting than Gmail was 15 years ago, or the AOL Mail client that I witnessed to the building of in 2006 and 2007, or the PIM suites that we worked on at the same time. And so I hear the theory, but every time I try to mark this to market, like my question is, what is more sophisticated now? What is more complex? And I remember we were building data caching layers and virtualizing scrollers with ARIA hinting the whole time. What, 2008?

**Vadim:** It was a very custom thing back then.

**Alex:** You say custom, it just wasn’t… Everyone didn’t think they had to do it. I’m not sure it was custom. We were making this stuff as open source. Teams today still have to go search around for a scroller. If they want to get a scrolling list, they still have to go do a bunch of research to find one. It wouldn’t have actually been materially more difficult to do this in the era of Scriptaculous and Dojo and Ext JS. Those components were available.

**Vadim:** I just kind of imagine, like 10 years, given 10 years ago, Microsoft betting on web technologies, betting on these kind of frameworks to build the whole UI of their own products.

**Alex:** So that’s a change.

**Vadim:** What happened?

**Alex:** Well, Google was doing it.

**Vadim:** All right.

**Alex:** And it works. If you do it well, and I will go and credit my former Google colleagues to the heavens for proving that a team, and again, remember that when Gmail was being built, when Google Docs was being built, spreadsheets, those were being built to the constraints of IE6. I just can’t stress that enough. That’s how ambitious they were. They were being built to the constraints of IE6.

So they succeeded not because they were the fastest way to put a pixel on screen. So this is part of the critique that I wish I was hearing people make, which is to say, “Oh, maybe it doesn’t matter quite so much if it’s not quite as good because there is some other model advantage.” But I’m a believer in the web, and I understand that the web has a model advantage, which is to say it’s more frictionless.

When you deliver an experience through the web, it happens that you can go to it from any device anywhere, it doesn’t require a specific client, it often works acceptably in all kinds of situations, at least HTML and CSS do. It’s kind of the cockroach of technology. You can take some HTML, you can write it down on the back of a napkin, you can put it in your pocket, you can put it in the wash, grab it out of the dryer, uncrumple a little bit, type it back in with a bunch of typos, and it’ll probably render something, and probably not something that’s super different to what you meant.

And so that survivability is a big environmental advantage for the web ecosystem. JavaScript doesn’t express that same kind of resilience, unfortunately. I’m sure Bruce would be happy to tell us all about that. But the community has shifted its focus, I would say, more than the tools have changed, at least from my perspective.

And I realize my perspective is not shared, it’s not common. Most people working in the industry today weren’t there when we were building the Gmails and business intelligence dashboards of the early 2000s. But I’m looking, I’m honestly and very insistently looking for evidence that what we’re doing now is more complex in ways that should not also be benefiting from the extreme improvement in CPU, disk, and networking.

Or at least for users at the margins who have not experienced those improvements, at least equally good. Life should not be regressing for them. Why is it getting worse? Are we doing that much more that requires it?

**Vadim:** So I was meaning to ask that we got to this point doing a lot of stupid stuff and using probably wrong technologies for the wrong tasks, but do you think that it was natural for us to try stuff, come to this point, and then start to change something? You definitely see a trend of even building on the React stack but with zero JavaScript served to users. So people try to use the convenience of modern frameworks to build something much more usable.

**Alex:** I get a little hung up on the “more usable” phrase. I really kind of have to stop and take a beat every time someone tells me that one of these experiences is more usable, because the question is, of course, usable for whom? And that, to me, seems to implicate the privilege bubble that, I would say, modern Silicon Valley consensus has become a vocal. And the privilege bubble is sustained by the idea that it is impolite to point out that there is a privilege bubble.

And my response to that is: bullshit. Absolute bullshit. It’s complete bullshit. The fact that most of your customers are not on MacBook Pros and iPhones in most of the world, or even much of the e-commerce sort of folks that I’ve collaborated with over the years, there’s only so many folks who are making their bones every day selling product handbags.

There’s a lot of people selling fast fashion to people who don’t have a ton of money or who are selling comparison shopping goods for, I don’t know, power services, especially now, or attempting to help people save money on, I don’t know, car insurance. There are just so many businesses in the world that achieve scale rather than margin. And when they move to the digital world, they need to achieve scale. And that means that they’re trying to reach people who are, by definition, not at least by their own local perspective, super wealthy.

They may be world historically wealthy, right? We all kind of are, but at least those of us probably listen to this podcast. But the perspective that these businesses have is when you talk to the managers, it’s that they just expected that the next cohort of engineers that they hired as their last crew either sort of moved on to greener pastures or became management in this same organization or whatever, that the next crew would embody the same values and the technology that they proposed, the expensive technologies.

By the way, it’s super expensive. None of these projects that are React projects now were React projects before. And most of the projects that I’ve been lucky to be an engaged person on have been redevelopment. There is some greenfield in the world. There are some people who are doing startups and building new things, but they’re generally not building entirely new classes of applications.

There are some, but there aren’t many. And most of the teams are redeveloping existing products and services. They’re not starting fresh. So they actually know something about their users. So the tragedy is that they have spent more to hire new people under the assumption that they would hold the same values, principles, and outcomes dear. And what has happened instead is that they have gotten this new cohort in who may not know any other way, so I’m willing to hold them blameless to a large degree, but the results are not what they would have gotten if they had simply run the same job advert five or ten years later than the last time they ran it.

The results are actually getting worse for the same kinds of sites. So this is the root of my deep concern, is that sitting with these teams, those managers, they didn’t think that they were buying lemons. They didn’t think that they were getting a dud. They didn’t know that what was going to happen on the other side of it was that they would need to be chatting with someone like me to help them carefully unpick the mess that they had meticulously built one transpiler at a time.

### Why companies choose React

**Vadim:** Last year, I’ve been a part of a team that was rewriting totally viable and totally fine code on web components into React. It felt wrong, but they had a reason.

**Alex:** What was the reason?

**Vadim:** I have no idea, to be honest. But probably it was easier to hire people to do this job, or maybe the client just approached this agency with this task without asking any questions. Just rewrite it in React, just because.

**Bruce:** A friend of mine and a friend of Stuart Langridge, he has a digital agency here in Birmingham. I know 20 people, something like that. And he said, quite often new clients come over and say, “Can you do React?” And he says, my friend Dan says, “Well, why do you want React?” And they say, “I don’t know. It’s just our developers like it or we’d heard of it.” and Dan runs a Laravel PHP shop and often manages to persuade people to have a tiny sprinkling of React stuff and just build everything else on good old fashioned, well, not good old fashioned PHP because it’s full of Laravel sparkliness, but it’s effectively good old fashioned PHP.

But it’s kind of a feeling in the market, you know, like nobody ever got fired for buying IBM. It’s like nobody ever gets fired for hiring React developers. It seems to be the default. And I work in, at the moment I’m doing accessibility consulting. And part of my personal definition of accessibility is that people on lower spec devices, on congested networks in Mumbai or Lagos can also access these websites. They might not have a physical impairment.

They might not be blind or something, but they have an impairment in the sense that they are significantly worse off than a Silicon Valley coder on $200,000 a year because they’re coming with a Windows 7 machine that they inherited from… I don’t know where they inherited from, but it’s a well-known fact that the machines that businesses throw out as pass-a-sell-by dates in the West end up in Cambodia and India and Indonesia and often get converted to Linux machines and live happy lives for another half a decade.

But I see a lot of teams move very quickly using React, but they end up with an MVP, a minimally violent product, which, okay, they’ve made it fast, and then I go through and I say, “Yeah, but this is completely inaccessible, and here’s why.” This component here needs to have an ARIA live region to tell the user that it’s been updated, or this drag and drop widget is completely inaccessible from the keyboard. And if I had a pound for every developer who said to me, “Well, I don’t know how to change that because I got the component from this or that library,” I would be a wealthy man.

And the trouble is that the expenditure comes in after somebody’s hired me and then somebody has to go through and basically pay me to go through and look at loads of horrific components, all of which claim to be excellent and only one of which actually can do the job properly, which then has to be slotted in. And that’s at the end of the process, and the deadline is probably bust already, and I’m tearing out my hair because the poor organization that’s got me in has promised to deliver tomorrow and the stuff isn’t passing.

**Alex:** Yeah, this has extreme resonance with my experience working with more than 100 organizations over the last six or seven years, which is that everyone buys the idea of speed, which has been defined by the people with power, which is to say the coders, as how fast can I write some code and do I feel like I understand it? Those are not tested assertions about the world.

And so when things are aggregated together into the final experience, because everyone assumed that their budget was so much larger than it actually was, and because the technology itself is so much more complex, what happens is inevitably there’s a crash. And when that crash happens, it can be for many reasons.

It can be that some executive goes on holiday to their ancestral home, and they try the shiny new product that they’re happy to show their family, and they’re like, “Well, why is it slow?” And it’s just because they’re on a normal link. They’re just on a normal PC or a normal phone. Or it can be that maybe the organization has good performance culture, and they get this thing up into the initial rings, the initial A/B tests, and they come back extremely poorly.

This happens a lot. It can also be that they launch and then I’ve had businesses, I’ve been in the room because businesses are losing person-sized bails of 100-pound bills every day because suddenly their revenue is in the toilet. There was an acquaintance who shared with me that they thought that Their mid-market, I want to say not wealthy, customers specifically, e-commerce site was paying something in the order of revenue of about $100,000 per kilobyte of JavaScript per year.

They thought that that’s what it cost for the incremental kilobyte of JavaScript. And then they ran a test, and what they found was that it was $700,000 of revenue per kilobyte per year. There were many hundreds of kilobytes of JavaScript on the site. It’s still there. We are collectively lighting money on fire to keep ourselves warm and slightly hallucinate the belief that we can afford to continue to do this.

And so the question, I think we’ve just had this conversation about, “Well, why does this happen?” There’s an enthusiasm, and it’s not marked to market. And this is where I’m extremely grateful for Annie Sullivan and her team and the folks at Google who’ve worked on the Chrome User Experience Report, as well as the Corevitals pile of measurements, because Corevitals are one of the first things, thanks to the… What do they call it? The Page Experience Report. I can’t remember the exact name.

But basically, the problem has been there has been a lack of connection between these two populations. The developers want one thing, and the businesses want something else, and they think they’re getting it. I sort of used the analogy a couple weeks ago that it’s as if you hired a troop of clowns to do bricklaying.

You’ll be entertained the whole time, but it may be slower and it may not actually deliver what you thought it was going to at the level of quality that you were hoping for, because they think that the job is to entertain you, not to lay bricks. And so we have not really had a language that joins these two up, but Core Vitals are finally providing that because it’s providing a clearly legible monetary incentive to people who understand SEO means money, who are then the people who pay the engineers who have, and always do, and always will, and I don’t blame engineers for this, right?

I’m an engineer. They have their own parochial interests, their own educational interests, their own desires and wants and enthusiasms, and that’s just being a human in the world. But our professional responsibilities are slightly different to our personal ambitions in many cases, and we haven’t connected them because it hasn’t been visible. Because I can tell you for a fact that C-suite doesn’t know how to run a Lighthouse test.

They don’t have a benchmark of the site speed of their property versus their competitors unless they’re extremely sophisticated. And so the top e-commerce retailers do have that stuff. And sometimes they find out that’s how their set of engineers have totally sold them up the river or are planning to with some new rewrite that they expensively put in the world. but it’s often cheaper to scupper that entire effort than to launch the React thing.

And so this is a story that is not told. We don’t have this conversation because I think we have a toxic positivity thing going on in front-end where we can’t ever talk about our failures as if it would harm our job prospects, it would harm our future potential. And by the way, that was a business problem, it wasn’t a technology problem, and I’m going to be onto the next thing anyway. I don’t think that those are all everyone’s internal narratives, but there’s certainly a lack of candor in aggregate about how it’s going that I think is particularly problematic.

And what I like about what Corevitals is doing is that it’s starting to price this stuff. It’s starting to actually put a price on the idea that you got what you wanted out of the stack that you liked rather than the stack that worked for the business. Honestly, I think that’s why we’re having this conversation right now, because Core Vitals is starting to bite. Interaction to Next Paint as the next core vital metric is, I think, probably pushing a good chunk of this because INP is starting to really show in a more direct way than we’ve ever seen before just how bad for the user a lot of these choices are. And so I’m grateful to the team at Google that’s been pushing this because they’re literally changing the industry.

**Bruce:** Here, here. There’s a really good website made by Tim Kadlec called What Does My Site Cost or something like that. We’ll put it in the show notes. And you can give it a URL and it’ll tell you how much that would cost a user on pay-as-you-go networks in various countries, how much the data would cost just to get that page. And it’s eye-opening.

**Vadim:** I wonder why the market is not regulating itself, why slow websites aren’t going out of a business? Or is it happening just very slowly and you want to speed it up?

**Alex:** So remember that developers make choices. They have authority, so they have power but not authority, right? So in many organizations developers can propose something, they can put something on the agenda, the collective consciousness that they exhibit outward to the rest of the organization defines the technology Destiny inside of that company. That happens all the time.

Everyone thinks they’re just an individual and they have no influence, but I can tell you that if you’re a developer, when you come to some sort of harmonized opinion with the rest of your community inside of your company, it’s going to have an impact. You’re probably going to get your way in many ways. You won’t like everything about it, but you have that authority because you move the code and the other people in the organization don’t.

Your hand is on the switch, you are swinging the shovel. Whereas the organization has authority about this. They can say yes or no to the result, but that is a very slow process. And in order to understand anything about it, you have to detangle all of the very technical language that comes with the internal debates that developers have about all of these properties.

I mean, just think of the alphabet soup of metrics: FID, TTI, CLF, TTFB, INP. And those are just the good ones. Never mind all the other ones. Timed Visually Ready, PSI, you just keep going and going. Imagine you are a non-technical manager who just would like to see the cute kitten sitting next to the shoes that you sell on the website that you paid a lot of money for, because it’s expensive to do this. You want to trust the people in your organization that they are making good calls, that their values are aligned with your success, and that they think that they’re doing what is best for you.

I believe that most of these folks think that they are doing what is best for the client, but the problem we’ve got is a management class that has not decided to put any constraints on the developers. They think that those implied constraints about, “Well, we expect this to work for all of those users everywhere that Bruce talked about. We think that this is going to be accessible to everyone on whatever kind of network connection or that it’s going to perform well on everyone’s devices.”

They just bake all of that into the cake of expectation, And it’s very rarely made text, it’s always subtext. And as a result of that mismatch in expectations, we have kind of failed to teach management how to price the market for these technologies. And so we have a management class failure. I think our product managers in Silicon Valley and beyond are bad at managing web products. I think that’s not an overstatement. We’re not doing a good job of putting the products that we make under management, or at least any kind of effective management.

And what that leads to is the enthusiasms and appetites of interested engineers jumping to the next thing that they think is going to help their career, can dominate the conversation much more than the situated needs of the identifiable users of the product. So this is a product management problem in the kind of local texture of how it gets transmitted into the world.

And I would put much of the blame on a product management class for failing to manage their own products. So will it continue? Well, I kind of am in the “any trend that can’t continue won’t” camp but I’m also keenly aware that I had hoped that the fever would break many years ago, and it has still not broken, and the results are still terrible, and these organizations are still hurting, and we’re still not talking about it.

I can tell you, these organizations are hurting. they’re hurting, the people inside them are hurting. When the product launched, you mentioned, we talked a little bit about that kind of sugar high of going fast in the initial moment and then getting to the end where you find yourself in the ditch. Your speed is zero for every minute that you’re in the ditch. So when teams say that they’re going fast, it’s kind of like, no, they’re just externalizing a bunch of these costs, and they’re going to pay for them eventually.

And maybe they roll out of the car before it rolls into the ditch and they can keep running, maybe, as individuals. But the cars are still in the ditch, and so pulling them back out, putting boards under the wheels, getting a tow, inspecting them for damage in the undercarriage, making sure the axle isn’t broken, and then starting to set off slowly, all of that is dead time.

I believe that it is unfortunate but probable that we are going to teach a generation of product managers not to trust engineers, because at the end of this experience, Why would you? Engineers have demonstrably been misleading people about the values that they hold.

We will say, “Oh, we’re going to do X, Y, and Z, and it’s going to be a better user experience.” And then it turns into a terrible user experience, and we go, “Oh, well, it doesn’t matter.” That’s bullshit. That is straight up bullshit. And if you’re a manager, it’s your job, maybe not to second-guess the technology choice, but to call bullshit when you smell it. And so we have a problem.

We’re growing a credibility problem in front-end. And the sooner we turn away from technology that’s not appropriate for customers for whom it’s not working, I think the better off we’ll all be.

**Bruce:** I’m just taking a moment to enjoy your Homerian level of metaphors going on here. And I just want to point out to the listeners that you’ve heard basically a guy who was born in the Soviet Union expressing a belief in the invisible hand of the market, sorting everything out. And a man who works for a mega corp in Silicon Valley advocating lining up the Intelligentsia product manager class and shooting them all against the wall.

**Alex:** So Bruce, that may also be a paraphrase. I just want to…

**Bruce:** There’s definitely, I can see your Trotsky beard growing as we speak here, Alex. So we meet again. communist Alex Russell and the arch capitalist Vadim Makeev and myself got clowns to the left, bricklayers on the right and I’m stuck in the middle with them.
