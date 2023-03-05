### Intro

**Bruce:** Hello, and welcome to the F-Word.

**Vadim:** The F-Word of course stands for frontend. The wonderful world of web development.

**Bruce:** Browsers, web standards, and everything in between.

**Vadim:** Yeah, yeah, yeah. I’m Vadim Makeev.

**Bruce:** And I’m Bruce Lawson and I’m coming to you from Birmingham in the UK, where it’s cold and dark. What about you Vadim?

**Vadim:** Yeah, it’s snowy cold and dark in St. Petersburg, I think we’re just across the road from each other.

**Bruce:** Actually I’m waving from my window. Can you see me?

**Vadim:** Yeah.

**Bruce:** Throw me some flowers. So, how’s tricks with you?

**Vadim:** Actually tomorrow, there’s going to be an illegal protest going on in Russia.

**Bruce:** A legal protest or illegal protest?

**Vadim:** Illegal one.

**Bruce:** Okay.

**Vadim:** I think I’m planning to attend it. So yeah, very interesting stuff going on in Russia these days, but we agreed not to talk about the politics. So, let’s move on, I guess.

### Safari extensions model

**Bruce:** It is time for the news. What’s happening, Mr. Pepelsbey.

**Vadim:** Well, I’ve seen the news that there are some developers not happy with browser editing stuff. Can you imagine that?

**Bruce:** That’s amazing. What are they not happy about?

**Vadim:** There was news last year already around September or even earlier, the Safari edit web extension support. And there’s an interesting question at a website called Six Colors. Where are those extensions? Because they introduced their model based on something similar to Chrome’s model.

**Bruce:** Do you mean that your standard has been retroactively made that happens to codify what Google do?

**Vadim:** Sort of, the same thing and Firefox did a while ago.

**Bruce:** Mm-hmm (affirmative).

**Vadim:** So, they removed their XUL based non-standard model and in favor to Google one, also non-standard, but much more common. And that was a success, and the similar thing did Safari, they just ditched their own software based model and introduced the one that’s based on web technologies, but also with some little details, that made everything worse. First of all, you need to use Mac software to develop it, and you have to write some native code using Xcode. Also, you need to have active developer account, which costs around $99 per year, to be able to do that.

**Vadim:** I’m not sure about you, but apart from those ad blocking extensions and some major companies, the rest of the extensions are just personal projects of developers. They’re developing their own tools and they rarely make money out of them. Well, there is a modal. You can sell your extensions to some shady companies, but it’s not the good model, I would suggest. So, to be able to not make money on your extensions, you need to spend some money, to publish it to Apple Store and have a software based wrapper around your extension to be able to install it in Safari.

**Vadim:** They did the right thing, moving their extension model to web technologists, but they somehow failed to implement it. There is an interesting article I mentioned before by Jason Snell, he asked a number of developers if they’re happy, if they’re planning to port their extensions to Safari. And yeah, I see a number of different answer to this question. Some of them are planning to do so, some of them couldn’t be bothered.

**Bruce:** I completely understand that, with the client I’ve been working with since September, I’ve been making an extension mostly for in-house use, but because we forked an existing project, my bosses said, “We’ve made it better. Let’s put it back. And if anybody wants it, they can have it.” But even though they’re not short of money, the extra step of paying $99 to be an Apple developer, and little old me and my lunch hour, learning how to bake a little bit of special Apple code with Xcode, just ain’t going to happen. Why would I do it?

**Vadim:** Yeah. I’ve seen a number of people from developer community trying to port their extensions to Safari model. One of them is from Chrome Dev Rel, I forgot his name. I think he ported his extension that mimics this behavior. So you can link to any text on a page, it’s a built in functionality in Chromium and he ported it to Safari.

**Bruce:** What is the extra step you have to do? Given web extensions is using web technologies. What is the purpose of this extra weird wrapper that you have to do?

**Vadim:** I guess they don’t have a proper store for extensions. They only have a store for applications. So they use probably the same platform both for iOS and Mac. They decided to use the same platform. So, to be able to publish something on this platform, it has to be an application, native one. So, you have to basically write an application as a wrapper to your extension. That’s how it works. Probably there is a reason for that concern in security and some other issues probably, or maybe helps with the review process. I don’t know.

**Vadim:** On one hand, there is a huge problem in extensions world. It’s full of crap, really. Some fraudulent extensions, some authors trying to trick you, or steal your money or passwords, or show you ads. Yeah, a lot of extensions doing weird things if you install them. It’s really hard to regulate the huge number of extensions. So Google is trying to do so, but it’s not like they’re failing to do so, but they’re definitely struggling. On the other hand, you can regulate everything, and you can put a lot of barriers in front of developers and you’ll have it a 100 extensions, not 10,000. And you’ll have much easier life and you won’t have to automate it and hope for the best.

**Bruce:** Now I understand. So, extensions are full of evil people who are scraping your data.

**Vadim:** Yap.

**Bruce:** Giving you nonsense and subverting your security and selling your information, and so are apps. So, it’s entirely understandable why Safari treat them the same.

**Vadim:** No. Safari is trying to play this, well, Apple is trying to play this role in the community that they care about security and they care about their users, and if they collect information, they collect it anonymously and only for themselves. They’re not selling this information. That’s a lot these days really, because I think the main problem is not the collecting information, but selling to third parties. Well, it’s the biggest part of the problem.

**Vadim:** And Apple is just keeping it for themselves or they’re just keeping it on your device, like they’re advertising in their announcements. We have a lot of information, but we’re keeping it in this secure enclave on your iPhone. It sounds legit to me and people tend to trust Apple on security, but in this case, they’re also limiting the possibilities because it’s not just a market full of crappy extensions. There are many valuable developer tools built as extensions to dev tools in Chromium or just to overlay a layout, or multi-screen testing, utilities and things like that. They really help.

**Vadim:** So to be able to use them developers, install Chromium or Firefox. It’s the same story. Again, Apple don’t care about the web, I guess. Over and over again, they decided to go with software many years ago and they’re still pushing this agenda. That’s what’s going on over and over again.

**Bruce:** You’ve thought more deeply about it than I have because when I read that article, I just thought, well, presumably extensions on Safari don’t work on the iPhone. Who uses Safari when they’re not on an iPhone? I’ve got a Mac, and I only ever fire up Safari if I want to briefly test something. All of my development is done using Firefox and Chromium. Because is there anybody who’s doing development who has a Mac and uses Safari as their predominant browser? I suspect not.

**Vadim:** Well, I know close friends of mine, two of them are using Safari as their main browser. Well, they enjoy using Safari as their browser, not developer tool, but once they are doing actual work, they have to use either Firefox or Chrome or both of them for different kinds of tasks. So it’s not that simple. As a user I also enjoy using Safari on my phone or maybe it’s just Stockholm syndrome because I don’t have a choice really.

**Vadim:** And personally I would use Safari. I don’t have a problem with Safari on desktop for example, but I’m a developer and I need more from browser in terms of APIs, in terms of tools, in terms of extensions that I can install. Also, since I’m a developer for many years, I also developed a number of extensions for myself and I always try to port those extensions to different platforms.

**Vadim:** I have five or six extensions for different use cases. And I usually test them in those browsers. And then I just keep supporting two versions for Chrome and then Firefox, since they have some differences. But for Safari, I don’t think I’m going to spend the extra, almost $100 per year, and a few weeks of work to just support Safari. Because even if I do support Safari, I don’t have users in Safari for my extensions, because there are not developers. I don’t see many developers using Safari for developer needs. They use it just a regular users.

**Vadim:** So I guess they decided not to spend too much time on developers needs for Safari. So they have developer tools. I always say that I’m enjoying dev tools in Safari, and I genuinely do, but they’re so limited compared to other browsers. So it’s not a surprise for me to see that their extension model is failing. That’s the word.

**Bruce:** No, I completely agree. Safari is a bloody good browser for a consumer, which is the vast majority of people who use the web and the people who our websites serve. But when I’m actually doing development work, I can’t only do development work in Safari, even if I wish to. I have to use Chrome and Firefox because parts of Firefox dev tools are better, parts of Chrome dev tools are better.

**Bruce:** I’m not surprised that people like you and me and certainly people in countries with less income are not paying a $100 a year for the privilege of porting their stuff to Safari, when it’s probably not going to be used anyway. Apart from the ad blockers and the big consumer extensions of course.

**Vadim:** Yeah. There’s another problem these days, to be able to test in Safari, you need to have a Mac. Well, there are tricky ways to launch Safari on Windows, but all of them are giving you just a part of Safari, not the whole picture from Mac OS. As for mobile Safari, you don’t have a choice. You need to have a mobile device. So yeah, that’s another problem. So yeah, let’s stop blaming Apple for everything. They do a lot of good stuff, but apparently not for a web developers.

**Bruce:** Indeed, I was going to say that I’ve heard there are ways of installing Mac on non Mac machines, but that’s illegal. And I wouldn’t want to tell a man who is going on an illegal march tomorrow to further lengthen his prison sentence.

### Cascading layers of CSS

**Bruce:** So what’s next, Vadim, on the news?

**Vadim:** I saw Miriam Suzanne posted this at the end of December, I believe. She posted a number of drafts that improve CSS for developer’s needs, and one of them just hit the W3C official draft.

**Bruce:** Mm-hmm (affirmative). The first public working draft of CSS, Cascading and Inheritance, which is quite the title.

**Vadim:** Oh yeah. So as you know, CSS is cascading style sheets. So the first C is a important one. And the cascading nature of CSS, it’s always that drives developers crazy. Because the only sane way to do to deal with cascade is to either put something later in your code, so it will take precedence. Or to fight the specific… I’m not going to able to say this word.

**Bruce:** Even native English speakers find it difficult, specificity.

**Vadim:** Just like you said. And to find this thing with some important or some extra selectors, and that waits more-

**Bruce:** I’m going to stop and disagree with you there. The only sane way to deal with the cascade is to understand the cascade. Most people don’t understand it, so they’re fighting something that they don’t adequately comprehend, but nevertheless, carry on.

**Vadim:** That’s true. But I was explaining the way the regular people solve this problem, not just W3C members. And so the solution is to introduce a new At-layer thing. I don’t know what’s the proper name for this thing? At-rule, maybe.

**Bruce:** There is a posh name, but I can’t remember what it is and everybody calls it an At-rule. So let’s go with that.

**Vadim:** Well, let’s call it At-rule, trouble because it starts with at, and there’s a new At-rule called layer, and that will allow you to introduce your own layer, or they used to be called origins before. And these spec decided to rename it to layer. So imagine that you have some plain HTML opened in your browser. And usually it looks absolutely naked, but not fully naked because there are some styles already applied to it, styles from the browser. And the browser styles is one origin of styles that you’re getting. When you’re applying some of your code, including some CSS to your page, you’re applying a CSS from another origin. Or in the future, we will call it from another layer

**Bruce:** Because they’re not origin. They’ve nothing to do with cause for example, which is cross origin, it’s not origins in that specific sense.

**Vadim:** Yeah. It’s rather a source, different source of styles. Source or origin, or layer is a better word. When you apply those styles over browser styles, you’re going to have to fight specific… This thing.

**Bruce:** Specificity. What we’ll do, is we’ll just make a little audio snap of me saying specificity, and then you can just press the button, have a big red button on your desk.

**Vadim:** Like real podcasters. Right?

**Bruce:** Exactly.

**Vadim:** So, yeah. So you don’t have to fight. It will take precedence over a user agents tiles. The same happens when you use some third-party library. For example, you’re including some Bootstrap code and you’re including it at the head of your document. And to be able to modify those styles you’ll have to specify your own styles later in the code. So they will take precedence over Bootstrap’s styles. And this solution to specify something later, so it could overwrite some previous styling, it’s fragile.

**Vadim:** And this Cascading and Inheritance Level 5 spec allows you to specify the order of importance, you might say, manually. So you can include your origins or your layers in any way you want. You can mix them if they wrapped into layer At-rule. And if you have those names of those layers specified in specific order previously. So you can specify that your styles take precedence over Bootstrap’s styles. Even if a Bootstrap’s styles go later in your code.

**Bruce:** Is it only later? Am I saying, even if the Bootstrap’s style are later, I want the At-Bruce layer to take precedence, or am I saying, I want the At-Bruce level layer to take precedent over everything, regardless of whether it’s later or more specific.

**Vadim:** Yeah. Both the order and…

**Bruce:** Specificity.

**Vadim:** I’ll make it my homework for the next episode, really. So yeah, that’s how it works. You’ll be able to specify the actual order. It’s good for theming your website, to have different styles included over at some previously declared styles. And there is another use case I just remembered. And you can refactor old code for this. So if you wrap your legacy code, written like 10 years ago into layer At-rule, and you call it legacy, for example, you can make sure that any style that you are right outside of this legacy layer will take precedence over your legacy code.

**Vadim:** You don’t have to fight nesting IDs, you don’t have to use important to override those styles. Super useful.

**Bruce:** That does sound to me good, actually. No, I was put off because when he said, take back control, that’s been such a terrible thing for the UK and the US over the last few years that, that immediately upset me. But now you’ve given me a concrete use case without the quarter right-wing populism then, yeah, I’m behind it.

**Vadim:** I’m not going to say, to make cascade great again or nonsense like that to further offend you, so…

**Bruce:** This sounds like something to keep an eye on. It’s a first public working draft and therefore by no means folks should you be typing in, if you want to call things At-Vadim and At-Bruce, we wouldn’t be sad, but even so don’t because this is by no means in browsers yet, this is really the very, very first draft of something. It’s going to take time to come to browsers. But the fact that as a first public working draft is indicative that it’s going to get there at some point, things that are in first public working draft are generally considered by all to be not stupid and needs more work before it hits you. So yeah, consider it like CSS Grid or something. It’s on it’s way, which is a good thing.

### What’s new in WCAG 3

**Bruce:** And talking of on it’s way, and talking of a good thing, the first public super, super, super rough draft I’ve written on the back of my envelope in crayon, draft of the web content accessibility guidelines three is out. Which is yes, the W3C guidelines for making things accessible. And WCAG three is out for comment. If these things matter to you, stay tuned. If you are somebody who works with this stuff day to day, don’t just stay tuned, get commenting, because it’s an entirely different model. It’s an entirely different way of thinking. It only came out yesterday, so I haven’t really looked at it in great detail, but the man who knows everything, Patrick Lauke, has already put his Lauke seal of disapproval on it.

**Vadim:** Patrick is grumpy again?

**Bruce:** Patrick is grumpy again. Yeah. I don’t even think it’s called WCAG, I think it’s just called WCAG this web accessibility guidelines, because it is designed to encompass apps, internal tools, extensions, et cetera. But it’s going on a points based system, where you can say, “I’m WCAG 3, Bronze, 72%” or “I’m WCAG 3 Silver, 64%.”

**Vadim:** Let take a step back. You said that it’s not web content accessibility guidelines anymore. And I also saw they said that W3C accessibility guidelines, W-C-A-G 3.0 working draft, blah, blah, blah. And it used to be web content accessibility guidelines, but it’s now something different. So they decided to rename it and keep the same abbreviation or what?

**Bruce:** Well, as far as I understand WCAG 2.1 or 2.2, whatever it is now will not be deprecated. That will still be your guidelines for web content. But it’s acknowledging that not everything we consume over the internet is the web as we know it.

**Vadim:** Right.

**Bruce:** And certainly in the current contract I’m working on, we’re doing, forgive me Vadim for I have sinned, react native staff that compiles down to iOS and Android. And it’s like, "Well, the only standards that we can sensibly apply to this are the WCAG guidelines, even though technically this isn’t web content. Because although it might’ve been authored using web stuff. It’s compiled down to whatever actually lurks behind the scene in Android, I don’t know, is it C, is it Swift or Swivel or…

**Vadim:** It’s Java probably. So yeah, they usually compile it into native code, but they control it via JavaScript. So they have JavaScript core form web kit running inside of it and controlling everything. So yeah, basically it’s not web anymore.

**Bruce:** Yeah. But nevertheless, the best guidelines that we have are things like, is everything focusable from any modality. So we’re trying to squeeze WCAG guidelines onto things that are not web content anymore. So I think it’s legitimate to widen the guidelines. Basically, are things perceivable, operable, understandable, and robust. Those are legitimate things to ask of any platform. The question is how do you frame those and give success criteria in a manner which can be tested on the web, and on Android, and iOS, and on Vadim OS when you launch your own company, and whatever’s coming next. And the problem is at the moment, and I’m channeling my inner Patrick here. I’m going to try and not too much longer because it’s Friday night. So I don’t want to be grumpy all evening, but the trouble is with WCAG.

**Bruce:** It is now been enshrined into law, in many countries WCAG 2.1 is effectively law. And therefore you can’t change it because legislation sits upon it. If not written down, defacto legislation sits upon WCAG 2.1. So they can’t change that. So WCAG or WCAG 3.0 attempts to be wide ranging, but then are the success criteria so hand wavy that they can’t actually be sensibly implemented by a developer. I’m not talking about a massive company who has hundreds of lawyers. I’m talking about a conscientious developer working on her own, who wants to do the right thing?

**Vadim:** Isn’t it why they call it guidelines, not rules?

**Bruce:** In the same way as they call W3C standards… They call them recommendations when we call them standards. So I hate to say that, but you’re playing with semantics there. But again, it’s super early days, they’ve said this isn’t even a first public working draft. This is a back of an envelope sketch of what we’re thinking it might be. And you’re invited to not only critique individual guidelines of which there are a few, but you’re invited to critique the whole approach. But if you are somebody whose job or livelihood depends upon accessibility, or auditing or legislating. If you’re that high level, you should probably get involved now. If you’re somebody who is like most of us, is ultimately just to be told, meet these criteria. I suggest you wait a little while, but it’s up for grabs now. And it’s worth having a look at if that’s your thing.

**Vadim:** Yeah. I actually found the explanation of this WCAG 3 and 2 differences. So yeah, WCAG 2 is web content accessibility guidelines. WCAG 3 Is W3C accessibility guidelines. So they explained it on this page. I wonder if they’re going to develop this WCAG 2 line further, or they’re just going to stick to line 3 as default for every platform.

**Bruce:** Well the thing is with WCAG 2, it’s subversions is actually, nobody really looks at that. Everybody looks at the techniques for meeting the criteria because that’s where you actually get the stuff that you can implement. So I imagine that there’ll be a WCAG 3 stuff you could implement, and Android stuff you could implement, and iOS stuff you can implement, and Vadim OS and stuff you can implement in HTML. And that’s okay. That’s not a bad thing. It just means that those of us who are doing contracts in which we’re obliged to look at, react, naive things in iOS and Android, we at least have some guidelines that we’re sure apply to us. Because at the moment it’s a very gray area, it’s like, “Does this meet accessibility criteria?” Well, I don’t know. Because I’m looking at the web content accessibility guidelines, but the stuff I’m looking at is now actually native code.

**Vadim:** Yeah, that’s true.

**Bruce:** I can only assume that adhering to the spirit of web content, accessibility guidelines will get me in the right place, but I have no guarantee thereof. I don’t think it’s a bad thing. And I hear Patrick’s grumpiness, but I’ve heard Patrick’s grumpiness for a decade, but it’s early days. So if you have opinions folks, get involved and tell them Vadim sent you.

**Vadim:** And once this thing becomes a bit more solid, we can invite Patrick and talk about it.

**Bruce:** Absolutely. But we won’t do it on a Friday night. Because otherwise we’ll be grumpy the whole weekend. So once again, dear friends, we sail away on the good ship, Bruce and the good ship Vadim. He will be going up on the… what’s the river that goes through St. Petersburg?

**Vadim:** Neva.

**Bruce:** Okay. He’s never going up on the river that’s going through St. Petersburg ship. I shall go through the river Brum on my little ship. I’m going to be watching interesting telly, what’s your plan for the weekend, Vadim? Rock and roll, women, wine and song?

**Vadim:** Trying not to get to jail. For example.

**Bruce:** Well, you try not to go to jail. I shall try not to get COVID. And if both of our plans succeed, dear listeners, we shall speak to you next time. Thank you for being with us. This was The F-word.

**Vadim:** Goodbye.

**Bruce:** Bye.
