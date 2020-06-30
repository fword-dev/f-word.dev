---
number: 4
title: 'Apple vs. EU, form slappers, where’s Houdini, browser bugs and Web compat'
date: 2020-06-30
hosts:
  - Bruce Lawson
  - Vadim Makeev
chapters:
  - title: 'Apple vs. EU'
    time: '01:20'
    list:
      - title: 'Commission opens investigations into Apple’s App Store rules'
        link: https://ec.europa.eu/commission/presscorner/detail/en/ip_20_1073
      - title: 'EU’s Apple suit bares tech’s global antitrust threat'
        link: https://www.axios.com/eus-apple-suit-bares-techs-global-antitrust-threat-1c377e06-2307-4005-91a1-e9b4f062ec8c.html
      - title: 'Apple threatens to move Basecamp’s new email app to trash'
        link: https://www.wired.com/story/apple-threatens-basecamp-email-app/
  - title: 'News for form slappers'
    time: '17:03'
    list:
      - title: 'The form attribute'
        link: https://funwithforms.com/posts/form-attribute/
      - title: 'Form design patterns'
        link: https://formdesignpatterns.com/
      - title: 'HTML5 Accessibility'
        link: https://www.html5accessibility.com/
  - title: 'Where’s Houdini'
    time: '28:51'
    list:
      - title: 'CSS Houdini'
        link: https://iamvdo.me/en/blog/css-houdini
      - title: 'Is Houdini ready yet‽'
        link: https://ishoudinireadyyet.com/
      - title: 'CSS Canvas Drawing'
        link: https://webkit.org/blog/176/css-canvas-drawing/
  - title: 'Browser bugs and Web compat'
    time: '39:12'
    list:
      - title: 'How to file a good browser bug'
        link: https://web.dev/how-to-file-a-good-bug/
      - title: 'Web Compat'
        link: https://webcompat.com/
tags: episode
layout: episode.njk
---

### Apple vs. EU

**Bruce:** Hello, and welcome to The F-Word.

**Vadim:** And The F-Word of course stands for Front-end, the wonderful world of web development.

**Bruce:** I’m Bruce Lawson coming to you from Birmingham in the United Kingdom.

**Vadim:** I’m Vadim Makeev coming from St. Petersburg, Russia.

**Bruce:** How are you Vadim, how have you been?

**Vadim:** Nothing’s going on, just like for with everyone, but, yeah, Summer’s coming and it’s pretty hot in St. Petersburg; plus 30 yesterday.

**Bruce:** Whoa, we had like a really, really warm May, and then it’s been thundering and lightning for most of June, but heat wave’s are coming, they say. I have to say though, it’s interesting we’re going to talk about browser compatibility, et cetera here. I’ve been working with a client, and doing some accessibility remediation on their website, and browser and compatibility have been so bad. I was ready to give up the world of web development and just make a new career selling John Lennon memorabilia on eBay. Imagine all the PayPal.

**Vadim:** I wasn’t expecting this, clearly.

**Bruce:** Sorry.

**Vadim:** Okay, let’s go to the first topic. All of a sudden you’re going to talk about Apple.

**Bruce:** Well, you probably know everybody that I already love Apple, although I complain about them. I do run a MacBook Air as my main workhorse machine, and I got a MacBook Pro for my music software. So, I’m not a hater, but I do sometimes worry about Apple’s commitment to the open web. And this week, the European Union have announced they’re launching an antitrust investigation into Apple; primarily the App Store, so not necessarily completely related to the web, but I’ve got a feeling that the fallout will impact us web developers.

**Bruce:** So basically the EU are opening an investigation because Apple takes a 30% commission on any in-app sales. And Spotify, which is of course a European company, have complained. Of course, Spotify compete against Apple Music, so Spotify in the App Store if they upsell anything, Apple’s taking 30%. But of course Apple, if it is taking 30% from Apple Music, that’s merely a transfer on paper of funds within one company.

**Bruce:** They’re also pointing out that because Apple, and the phrase is an ugly phrase, but it disintermediates an organization from their audience. So, you get this weird situation in Apple actually has loads of user stats about Spotify’s customers that Spotify doesn’t have access to, and Apple has access to, and yet is competing in the same marketplace. So, I think it’s going to be a really interesting question because it seems to me just pretty damn obvious that Apple’s stranglehold on who can go into the App Store, what can go into the App Store, what you’re allowed to run, are you allowed to run a browser engine or not is anti-competitive, AKA monopolistic.

**Bruce:** And I’m hopeful that the EU will tell them to stop doing this, and I know the EU is not the world but the EU, even without the United Kingdom, is a vast and important and lucrative market. And I have a feeling that this could have ramifications both back in the US and about Apple’s approach to the open web in general.

**Vadim:** For me, it sounds way too complicated to understand probably to see the whole picture because probably law is a bit different here in Russia, and also it’s quite different there in US, because I don’t think they have a chance filing a suit like this in U.S; I mean, Spotify. It’s probably something about European Union that stand out, like they have different kind of view on this problem, on the competitive market. They support companies like Spotify, the smaller ones.

**Bruce:** Well, I think (without wishing to get all Brexit-y on you) one of the great things about the EU is that it has always tried to make a level playing field for both the migration of people and the ability of companies to do business with each other. And Spotify have not sued Apple in the same way as in the olden days, Opera did not sue Microsoft. Spotify, amongst other companies who are based in the EU, have asked the EU to investigate because the EU has a vested interest in making sure that, not a vested interest, the EU, its whole purpose is to ensure equality of competition and equality of access to markets. And if an EU company asks it to investigate a company that’s external to the EU, it will still do so because it’s restricting that EU company’s ability to compete in our own market.

**Bruce:** And they can really do stuff. I mean, they could say all the Apple Stores have to close, or they could say we are imposing a punitive tax on any sales of Apple products in the EU. If Apple don’t change this business model, and, yeah, the EU is 500 million people in a world of seven billion, but proportionally citizens of the EU have a very large discretionary income, which is why of course comparatively expensive Apple products sell very well here. So, if the EU find Apple have been behaving anti-competitively, it could very much change the rules of the game, and in my opinion for the better.

**Vadim:** I mean, you’re sounding a bit like a lawyer now. The difference between some company suing another company or some company reporting to authorities that other companies are doing something wrong. It’s a very small difference, so it’s similar in my world.

**Bruce:** I’m not a lawyer, but I used to be a front end lead for a massive legal organization in the UK. There’s not a trial and there’s no testifying. I don’t know the exact details of Spotify’s involvement, but I can remember just before I joined Opera in 2008, there was a huge tech press who are suggesting that Opera had sued Microsoft. Opera never sued Microsoft. Opera said to the EU commission, “We believe that Microsoft is behaving anti-competitively, could you please look?” And the EU commission did look, and decided that Microsoft were behaving anti-competitively by bundling IE in Windows and not giving people a real choice. If you knew what a browser was and you knew where to download one, you could do.

**Bruce:** But they didn’t make that clear to the vast majority of consumers. We all remember the days when a blue E was synonymous with the internet. And Opera not complained, Opera said to the EU, “Please investigate this.” And of course, everybody said, ”Opera sued Microsoft.” We didn’t, and it’s very notable that the day after the EU launched this investigation, Mozilla and Google also asked to be able to contribute their thoughts because basically we’d all had enough of Microsoft’s behavior. But Opera was the only browser based in the EU and therefore was the only browser eligible to make a complaint to the EU commission.

**Vadim:** All right, that’s my Spotify.

**Bruce:** Yes, but it’s by no means the only organization that is hurt by Apple’s behavior here. I don’t know if you’ve been following, but there’s a new email system called HEY.

**Vadim:** Yeah, just yesterday, I got the invite, so I haven’t tried it yet, but, yeah, I know the company behind this service, and I know their products, so, yeah, it’s something great. Something web based supported by native applications.

**Bruce:** Yeah, and I’m just enjoying the fact that you’ve mentioned that you got an invite and I didn’t, so listeners, Vadim is the coolest person that you know, and the coolest person I know. And you got an invite and you haven’t tried it yet, my God, you’re hard to get.

**Vadim:** Well, yeah, I’m not that interested.

**Bruce:** Yeah, but DHH, who is the CTO of Hey, and who people might know because he came from 37signals, so things like Basecamp, for example. Apple refused to allow Hey into the App Store allegedly because Hey were not giving them enough opportunity to take 30% cut from the in-app sales. So, yeah, Spotify may be leading the charge because they’re an EU company, but I will be willing to bet all the exclusive invitations that I never receive, that there will be more and more organizations joining in on this complaint. And if the EU finds that Apple are behaving anti-competitively and for the life of me, I think I’ve never seen such an obvious case, then Apple will have to change its behavior at least in the EU.

**Vadim:** When you look at it from person to person perspective, Apple created the ecosystem, and they spent a lot of money supporting this platform and creating this platform. And it seems to me that they have a right to create their own rules inside of this platform, like by paying 30% tax on your purchases inside of your app, you’re supporting the distribution and development of our platform. And it sounds fair, but if you look at it from the perspective that a lot of people using iOS and Apple products, and they’re probably dominating in some markets; not sure about Europe, but definitely in us.

**Vadim:** And from this perspective, yeah, it sounds like they’re owning a big part of the market and that’s why they need to be regulated. So, there would be a competition going on. So, it’s a bit complicated because we are as regular people, we look at this from person to person perspective, but it’s different. That’s why it’s really important to change the optics of how you look at it.

**Bruce:** It is. I mean, imagine if in 1906, Henry Ford had offered to build roads in Russia and subsequently anybody who was driving a non-Ford car was charged 30% to drive on those roads. That would be ridiculous because at some point these things become not just a business, but an actual public utility. And I think much as I dislike apps as opposed to open websites, it is so pervasive and important to people’s lives that it can’t be purely in the hands of one company. And I don’t hate Apple, I dislike the way they do business. I think many of their products are absolutely magical. I mentioned before, I love my Macbook Air. I can’t imagine going to a Microsoft or an Ubuntu machine now, but so many people depend for business. So many companies exist only as apps or the web that it ceases to be a case of one company generating legitimate profits and becomes a case of price gouging.

**Bruce:** It’s like medication. If you invent a drug that cures, I don’t know, COVID. For how long should you be allowed to be the only player in the market charging whatever you want, and when does it become legitimate for other organizations to say, this thing is so important that it has to be opened up. It’s not about punishing or shutting a business down, it’s about regulating it to make sure that everybody’s able to play fairly. And the US has form for this as well. I mean, Bell, who invented the telephone and they were broken up by the US government into AT&T and Bell Labs, precisely because they were exercising too much control on the market. And actually, now I’m thinking about it, that’s quite a good parallel because that’s the tech world as well, but they’ve made a brilliant product. They grew and grew, and they took over the markets so much that nobody was able to compete. And when nobody can compete, nothing gets better. We saw that in the IE 6 days.

**Vadim:** And this nonsense is happening in the native and the application world on native platforms like iOS, Android and Windows and MacOS. But is there anything similar happening on the web? Chromium, taking the most of the market as a browser engine; not really. It’s different. They’re not charging 30% of every e-commerce going through their browser, so.

**Bruce:** Well, that would be the perfect analogy. Actually, it’s like you ship loads of Chromium browsers and any e-commerce transaction that goes through, you charge 30% and you say to people, “Well, okay.” Then we would just wouldn’t tell people who try to navigate to your URL in one of our browsers we’ll 404 it. Yes, that gives you inverted commas, “choice”, but actually it’s no choice at all. I do think that Google, not Chromium, but Chrome, they’re pushing Chrome from major Google properties like YouTube and Google search, and they’re making sure that every Google web property works perfectly in Chrome while forgetting about Firefox, which I know is your default browser as it is mine.

**Vadim:** They’re not launching their services like cross-browser, they launch it and test it; Chromium first and then the others.

**Bruce:** Yeah. And then to me, that feels a similar distortion of the market. I’m aware now, listeners, that I sound like the world’s most Thatcherite person. I’m not. I’m a lefty, but I do believe that markets work well when companies can compete, but they have to be regulated by the government. And it’s not Apple’s fault either. I mean, the laws of economics dictate that any company tends to ward monopoly. Every company rejoices in increasing its market share, and thus every company aspires to a hundred percent of the market. That’s easy. You can’t blame a company doing what companies do. It’s like trying to blame a snake for biting things. Snakes bite things. Companies gobble up competitors and take over the market, but that’s why we need people like the EU commission to stand between monopolistic companies and the rights of consumers. And more importantly, the wider ecosystem.

### News for form slappers

**Vadim:** Let’s go back to web technologies. In Russia, we have a word, I tried to translate it to English, and it sounds _formoshlep_ in Russian, which is something like form slapper, like to slap things together, quickly and dirty. Basically, you’re calling the _formoshlep_ a person who would do some simple tasks using HTML forms and nothing too fancy. Of course this _formoshlep_ or form slapper is a bit offensive because we do so much more than just creating simple forms on the web, but still, it’s a funny name. And I’m still laughing when I’m hearing it. And there’s a nice article about forms. Well, more than that, there’s a new, website called fun with forms. It’s the website created by Michelle or Michael or Mikael. No, not sure.

**Bruce:** Mickey?

**Vadim:** Mickey. Yeah. And there’s only one article on it called the form attribute. And, Michelle is reminding us that there is a form attribute, not just a form tag. So, basically, to send some data from a web page to the server, not via JavaScript, but via native and put tags, you would need to create tech form, add some action attribute with the actual URL that will be used to send this data and then submit it in some way by providing input type submit or button type submit, or just by pressing enter key in any input field, for example. This would work without JavaScript and without any additional code, which is wonderful because it’s perfectly available to any user on any platform in any browser, especially when this form is logging form or search form, if you’re like search engine or a catalog or something like this.

**Vadim:** So, please do like this instead of waiting for your JavaScript to load to enable some input to become a form like fake one, but there is… Apparently, there is a form attribute that would allow you to put some button outside of this form, not just inside, because when something is inside form, something like button or input type submit inside a form, you can submit it without JavaScript. But if you have something outside of form, personally, I would use JavaScript to find this form, and emit this submit event. But after reading this article, I realized that there is a form attributes, so basically you can target any input or button elements to submit any form you want. Why would you need this? You might ask. Well, sometimes you need to put elements outside of form element. For example, if you’re have some greed or flags going on, sometimes you want to put tags in unusual places because things happening inside of this greed or flags context.

**Vadim:** So, sometimes it’s necessary, sometimes it’s much easier to do. So, you don’t have to do this via JavaScript. You can use this form attribute. And sometimes you want to submit some small parts of the form. For example, if you have some options on your, or preferences on your website, and every part of this thing have its own save button, for example. So, you can create the whole form or put it somewhere outside of this thing. Basically, you can create a form with just inputs, so they would be serialized and collected by this form, but you can put all the buttons you need outside of this form.

**Vadim:** Sometimes you even have form without any data. There’s a good example in Mikael’s article, something like, like or a retweet buttons on Twitter. You’re not actually sending any data like you would do when you input something, but you can still do this via forms, because it would work without JavaScript. So, in this case, you can put form somewhere in one place and buttons in the other, and you can link them together via form attribute. All of a sudden, new attribute in my dictionary. Well, what about you, Bruce? Have you heard about this attribute before.

**Bruce:** I’ll be honest Vadim, although I’m not the kind of person that gets invited to special betas of cool things. I had actually heard of this. I knew about this, and I’ve actually used it in real life.

**Vadim:** Well, I heard about form action attributes, meaning that you can use different action on a button you press to submit a form to some other location, for example, but I didn’t know that you can actually connect a button outside of form via form attribute. It reminds me how label element works. You can connect input and label via four attributes and ID, they will be connected via the common name. But you can also nest input text or input type checkbox, they will be connected automatically by nesting. So, in form case, every button is connected to form via nesting, but you can take it out and connect it via form attribute. It would be good to have, not form, but four attribute for that. But, yeah, it’s a different case.

**Bruce:** What you shouldn’t do is nest the input inside the label.

**Vadim:** Why?

**Bruce:** This confused me as well, because I’ve always done this on the grounds that if you’re using four equal something ID, and people are copying and pasting it, the next developer after, they might not change the ID, or they might’ve changed the ID in two places; on the label and the form, on the label and the input.

**Vadim:** Yeah, they need to be unique, yeah.

**Bruce:** But apparently, with some assistive technologies, Dragon, which is a voice browser, that it just doesn’t see an input, if it’s nested inside a label. So, it’s one of those things where sadly the HTML is perfectly valid and fine, but some crappy assistive technology that lots of people rely upon doesn’t understand it.

**Vadim:** Yeah, it’s just, we have cross-browser problems in actual browsers, but we also have cross-screen reader problems, and this is, yeah, I haven’t seen any, can I use database for screen readers, but I would love to. So, if you know one, please, our listeners or you Bruce, please send it our way.

**Bruce:** Listeners, please do send it our way, because there’s html5accessibility.com, which Steve Faulkner of the Paciello Group maintains. And he looks at HTML5 elements and attributes to work how well they work in different screen readers. I always have a philosophical worry about this because I, personally, I think like accessibility is a two way street. As a developer, I should make sure that the stuff I’m writing is valid, accessible, but if you come to my website with IE 5 and JAWS 2, and you can’t use my website, that is kind of your fault.

**Bruce:** I shouldn’t be held responsible for you using apocalyptically out of date tech. I mean, yeah, if you’re using IE 11, my website should be accessible to you, but if you’re using something absolutely creaky and shit, should my website accommodate you? I don’t know. Personally, I think not, and that’s because I’m a lazy person and I prefer dealing with modern browsers that are evergreen and IE 11, maybe IE 10 a pinch, but whatevs.

**Vadim:** In my case, the browser support, at least, consists of two parts. First part is basically stats. You collect statistics on your existing website or on your previous projects or on competitor’s websites. Sometimes they publish statistics. Sometimes you can, yeah, you can probably guess what’s going on. Or you can just collect the statistics for the market you’re targeting. That’s the first part. The second part is when you add some responsibility to your browser list. Basically, you’re adding support for screenwriters, some LTS versions or some popular devices that are still you can see people use it on the streets or sometimes in metros, sometimes your grandmother uses some old iPad, which does not support ECMAScript. So, every code with let and const will just break and will show your grandmother a blank page. Yeah, you can take some responsibility and extend your browser support list based on that. So, statistics and some responsibility. I think that’s the perfect combo.

**Bruce:** But then that’s the thing. There are no stats, so there’s no, can I use for assistive technologies, and there are assistive technologies that I didn’t know existed. It didn’t occur to me that this Dragon voice browser would even recognize a label that had an input nested inside it, because that obviously seems the best way to go. But back to the form attribute, it’s one of the very few things in HTML that is both an element name and an attribute name. The only one I can think of is cite because there’s a cite element and there’s a cite attribute on blockquote, but I can’t think of many others.

**Vadim:** Well, there’s img tag and img value for the role attributes.

**Bruce:** That’s a value, not an attribute. Well done, actually, I hadn’t thought of that, yeah.

**Vadim:** Title attribute and title tag.

**Bruce:** You win Vadim. This is why you get invites to cool services, and I don’t.

**Vadim:** No, I just recently gave a talk. Well, recently, a few months ago, I gave a talk called HTML, the good parts. So, I just read the whole spec through.

**Bruce:** What are the good parts? For me, it’s just the pointy brackets. All the rest of the stuff is shit.

**Vadim:** I have a tendency to make funny titles and descriptions for my talks, and this time I chose this one, and I have a cover of my talk, which is basically mimicking O’Reilly’s book; Black and White Animal and the rest. And as a description of my talk, I have just the least of all HTML elements.

**Bruce:** I hope your black and white animal was that attractive Russian bear like that mug that we bought in the Moscow Metro that time.

**Vadim:** No, it was just a squirrel.

**Bruce:** A squirrel?

**Vadim:** Yeah, just the funniest animal I could find in black and white,

**Bruce:** This isn’t a psychiatric podcast, so I’m not going to ask you why you think the squirrel is a funny animal, because I have a feeling that we’ll be here A, all night and B, I would learn more about you than I want to.

**Vadim:** Yeah, so to the next topic then.

### Where’s Houdini

**Bruce:** Indeed. It astonishes me, listeners, that we haven’t actually discussed this next topic yet in the three previous episodes of The F-Word, because it probably one of the most exciting areas of standardization that’s happening right now, and that is called Houdini. Houdini started off with a bunch of people from the CSS working group and a bunch of people from the TAG, which is the Technical Architecture Group of the W3C. Its aim is not so much to invent new stuff as give web developers access to stuff that’s been in browsers for years. So, for example, to you something that everybody knows; service worker. Now, the browser has always been able to talk to the network and the browser always known if the network is down and has shown you some kind of a default can’t connect right now page. But you, as a developer, never had access to that mechanism.

**Bruce:** And service worker gives you basically the intermediate layer between the HTML of your page and the network. So, you can say, “Hey, you seem to be offline. Would you like to do X, would you like to do Y?” Houdini’s like service work in that it sits between the CSS pausing box inside the browser and your webpage through JavaScript. So, if you wanted, for example, to invent a new mechanism to do layouts, and for the sake of it, I’m going to say masonry layout, even though that’s coming really soon in CSS grid.

**Bruce:** If you said display colon layout in your CSS, what you would have to do as a developer is basically re-implement CSS parser in your JavaScript to trap that. What Houdini gives you is the ability to hook into the CSS parser black boxes. Inside your browser, the work’s brilliantly that has 20 years worth of the best C++ minds on the planet optimizing it and say, “CSS, do your absolute normal thing, but if you see this, hand control to me, I will do whatever it is I want to do.” And then seed control back to the built in parser. So, you get the best of all worlds. You get the hugely optimized, highly performance behavior of the browser, but the ability to just to hook in.

**Vadim:** It will probably make things a bit slower, but not that slow in case you would want to do this manually, like the whole thing. Like parse CSS yourself, find the things that you want and the create it via canvas or some other ways, or, yeah, manipulate them and things like that. In this case, you’re just sending instructions to browser, what to draw and what to render. And it should be so much faster. It’s fine that you mentioned masonry layout that we discussed before, because I’m currently looking at the implementation of masonry layout using Houdini, which is just 40 lines of JavaScript long, which is amazing.

**Bruce:** And of course, because it’s just CSS, you can say, display colon block and give whatever fallback you want. And then you can say display colon, paint, (masonry). And you get the cascade and you get the fallback. It’s the best of all worlds. And you said, Vadim, well, it’s going to slow things down. Basically, anything you do in JavaScript slows things down.

**Vadim:** Well, the fastest page is empty page, right?

**Bruce:** Exactly, but this gives you the ability to hook into the native behavior of the browser and tweak it, which is just marvelous. There’s only one downside that I can see.

**Vadim:** There is a brilliant post by Vincente De Oliveira. He used to publish some post on CSS Houdini, and I think this time he combined everything together in the long post, probably it’s based on some talk or something like this. So, it’s full of code samples, links and everything. It’s very dense and full of a lot of interesting information. And the funny thing I found at the very end of this article, so if you read through and you’ll find this thing as well. Actually, something similar to Houdini, Apple invented in 12 years ago or something like this. On April 17th, 2008, there was a post published in WebKit blog called CSS canvas drawing. They actually invented property called WebKit canvas or just canvas with WebKit prefix. Basically, you would specify ID of your canvas elements registered somewhere in your JavaScript and you would draw this anywhere.

**Vadim:** You would put background image. So, yeah, invented by Apple as well. Well, at least paint part of the Houdini spec. And the sad thing about this, that it’s mostly Chrome thing or Chromium thing because there is a website called Is Houdini Ready Yet? I think there is a website like this for every technology we have. So, there’s one for Houdini as well, and it’s full of green boxes, but mostly for browsers based on Chromium. But in Firefox and Safari cases, there are some things going on. For example, properties and values API, it’s basically the way to register your custom CSS properties as real properties with types.

**Vadim:** So, you can say if it’s color or a string, or some number, so it will allow you to animate those properties, for example. So, this thing is in development and some other things like layout API and paint API and typed object model for CSS, those are intent to implement in server engine. So, something’s going on. And even in Safari, they have Paint API and Typed Object Model in development and some partial support of Properties and Values API in Safari technology preview, so something’s going on.

**Bruce:** I’m going to jump in and say, it’s not only Chromium. I went to a Houdini meetup. It was attached to the CSS working group meet up in Paris in 2018, I think. And there were people from Microsoft, a lot of people from Google, got people from Firefox. In fact, it was being hosted in the Firefox office in… A Mozilla office in Paris. And there was Dean Jackson, who was like Lord of WebKit, and Simon Fraser who’s very active and influential in the WebKit community there. And they were not just observing, they were vigorously contributing. It was really good to see.

**Vadim:** I mean, if you’re just a regular developer or you’re just interested in Houdini, you would know that, because it’s implemented and available in Chrome cases and other companies there. They’re try not to announce anything before it’s shipped somewhere in Nighly at least. So, yeah, if you didn’t know, it’s happening in other browsers too, so there is a chance for almost every technology under Houdini umbrella to be available for developers via JavaScript.

**Bruce:** I think a lot of the, not the objections that Apple had, a lot of the things they were anxious not to do was not to allow developers to shoot themselves in the foot And I’ve been a coder myself, so when I say it’s trivial to expose functionality that already exists, yeah, you’d have to write stuff. You have to give an API into it, but you also have to acknowledge that letting people get into an infinite loop with CSS, which is possible, is actually a shit idea because people will do it and they will blame the browser rather than the developer. So, Apple are taking very good care that they can’t allow developers to do catastrophically crap things. And given that what you and I saw about WebKit prefixes, Vadim, I’m quite happy that Apple are making sure that they won’t let web developers do catastrophically shit things.

**Vadim:** Well, sometimes they are overcautious, but I think they’re just supporting their users. That’s the reason.

**Bruce:** Yeah. And to sound like an entirely different person than I was at the top of the podcast, Apple has its own business imperatives, and they have a right to guard those and make sure that their particular users are protected in a way that Apple sees best. So, but I’m hopeful that we’re going to see Houdini trickle across all the browsers. It’s not going to be a big _ta-da_ like CSS grid was, because it’s not that nature of a technology, but we’re going to see a great deal, more ability to hook into CSS from JavaScript than we were before. And the only thing that worries me is that it’s going to be another reason that developers can say, “Well, everybody has JavaScript, so I’m going to do this stuff.” And if you don’t have JavaScript, tough shit. But ultimately, it’s CSS. So, if your Houdini thing doesn’t work, just use a fallback. It’s classic CSS.

**Vadim:** So your next Macbook Pro is on its way, Bruce. And hopefully my invitation to Hey as well.

### Browser bugs and Web compat

**Vadim:** Well, we have covered some browser APIs, and let’s talk about the browser compatibility and how to file browser bug, because even for big companies like Apple, Google and Mozilla, it’s very important for developers to file bugs and report problems that they have, because the platform has a huge number of technologies and variation and use cases. If you have something’s wrong with your code in some browser, don’t just blame it on browser or don’t blame it on spec, you can do some steps to report it and then have it fixed sooner or later. It depends on how important this thing to the company or how good is your bug report, but it’s possible. And we should probably promote this idea among developers more. And that’s what Robert Nyman and Pete Le Page did in Web dev blog. They wrote a really nice instruction, how to submit a browser bug.

**Vadim:** Basically, you verify that it’s an actual bug. So, you go to the spec and see if this behavior is intentional, or you just haven’t read the spec properly, and you can try to test in a different browser because sometimes when I find bug and I test it in some canary or nightly builds, it’s just not there anymore, because the chances that you found something unique are, well, they’re not big. They probably know about it already. So, you’re making sure that it’s an actual bug and you’re testing it in some nightly or beta

**Vadim:** And when once this bug is reported, well, make sure that you have some code samples and you have some demos attached to it and just follow and answer the questions. And try to, if it’s standing still and nothing’s going on, try to nudge browser developers on Twitter. Sometimes it helps. I remember being nudged by Lea Verou to implement, what was it, like conical gradient or something like this. Yeah, we used to work in Opera Devrel team, and then Lea Verou used to Cc every browser DevRel account to ask them if they’re going to implement this conical gradient feature in CSS. And it was super annoying, but it made some companies to change their priorities. It’s like this Shawshank movie.

**Bruce:** Yes. Yeah, it’s exactly like the Shawshank Redemption, but it’s true. I mean, people who make browsers are, to some degree, human beings, so, yes, we can be annoyed as well. And then that’s why where Vadim said, “Don’t file the same bug again.” I would say, file the same bug again, because if I’m seeing 700 and squillion people filing the same bug, human nature is like, ”Okay, this is obviously a problem.”

**Vadim:** But if you’re a kind person, just press star button on the back in Chromium, or subscribe to this bug or leave your use case in a comment. If you found something similar, make sure that your voice is registered somewhere, that you’re subscribed to this bug and that you’re following it because sometimes it’s important, but developers, they’re too lazy to make a few steps to promote it and to let browser developers know that they actually need it. So, make sure that they know. That would be the most important thing you can do.

**Bruce:** I’m going to agree with Vadim in a rather unusual show of a solidarity here, having both been working for browser vendors. We actually do care about what developers think. We do listen to what developers want and people who work for browsers are human beings. If all of their friends are saying, “Man, I wish browser did this.” You’re going to go to your boss and say, I wish browsers did this. If a thousand developers wish browsers did that, but haven’t told me, I can’t go to my boss and say, “Let’s go for this.” Yeah and of course, if you notice something that doesn’t seem to be working across browsers, our good chums at Mozilla, and I mean our actual good chums because ex colleagues of Vadim and mine, Mr. Mike “Chicken killer” Taylor and Mr. Karl Dubost amongst others have Web Compat, which is a website where you can go in, you can indicate something that’s not working cross-browser and the Mozilla team will investigate it and file all the bugs for you.

**Vadim:** Basically, it’s just an interface to file a GitHub issue. So, using this interface, you can file a bug and then follow it on GitHub. And you cannot just file a bug, but you can go through all issues they have in their repository and help them solve it. We used to do this work for a while in Opera days. And there’s a big team in Mozilla doing the same thing for Firefox because while it’s not number one browser market-wise, but it’s still good and it deserve all the quality we have for Chromium. So, if you go through those bugs, you can actually support the Firefox in a way and support the web compatibility. So, file a bug at least or if you see something going on wrong in Firefox, or Chrome, or in Safari, it’s not limited by Firefox issues. And if you feel adventurous, just go through all issues and try to solve them.

**Bruce:** Yeah, exactly. It’s a Mozilla initiative, but it’s not only a place to file Mozilla bugs. It’s a place to file anything you found that breaks web compatibility. You know what we should do Vadim? We should ask Mike Taylor to come on the show one time, because he’s comedy gold.

**Vadim:** Yeah, we should. Well, at least, I miss him, so, yeah, it would be a good chance to talk.

**Bruce:** Yeah, hang out with a mate and then throw in a difficult question about Flexbox.

**Vadim:** Sounds like a plan.

**Bruce:** That dear listeners brings us to the end of F-Word, episode four. There’s been tears, there’s been laughter, there’s been joy, there’s been misery. In web compatibility, there’s been interminable discussion about legal issues, but we hope you enjoyed it. Please, let us know. Some of you have been telling us you quite like it, which we like because ultimately Vadim and I are just old friends having a chat. So, if you like listening, we’re very grateful. Until next time, please don’t touch your face, wash your hands and validate your code.

**Vadim:** Yep, stay safe. See you in the fifth episode.

**Bruce:** Bye!
