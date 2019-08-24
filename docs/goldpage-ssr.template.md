# Case Study: Goldpage & SSR

> This case study assumes that you know what SSR is.

> If you don't know what SSR is then skip this case study and start writing your prototype instead.

In this case study we show that whether you need SSR is not always clear,
and we how Goldpage can help
you try SSR on one of your page to then
decided whether you want to use SSR for all your pages.

Note that, wiht Goldpage, you don't need to know what SSR is to start writing a prototype.
Later, once your first prototype is finished,
you can learn about SSR and add SSR to one of your pages to see if it works for you.
It's more rewarding to start hacking right away and to take care of problems only once they arise.

As you know, SSR is about rendering your page's content to HTML.
Besides improvements in time-to-print performance,
the main reason for SSR is to ensure that search engines and social sharing sites
can successfully crawl your pages.
For example, the so-called "SSR" technique.
It's a technique mainly used to ensure that search engines can crawl your website.
(The idea is to render your page's content to HTML.)
For example, let's consider the technique called "SSR",
which allows search engines to successfully crawl the content of your pages.
The best way to know whether you need SSR is to try it out.






If you care about having your pages appear in search engines results other than Google (Baidu, DuckDuckGo, ...) or if you care about your app being correctly previewed when someones shares a link of your app, then SSR is necessary and the question whether you need SSR or not is a no-brainer.  But, if you only care about having your pages appear in Google Search, then things are less clear.  
On one hand,
the Google crawler is capable of executing your app's JavaScript and
SSR is not necessary to appear in Google Search.

On the other hand:
- Google crawls content rendered to the DOM much later than content rendered to HTML.
-
Your pages are executed in both the browser and in Node.js,
thus you have to make sure that you code is able to run in both the browser and in Node.js,
which can be problematic with libraries that are not Node.js compatible.
(Note that the two other common problems with SSR, namely routing and data fetching, are mostly not a problem with Goldpage.)
The caveat with that is that Google crawls JavaScript much later than
But SSR often comes with a cost of slower developing time,


so the question arises whether or not you should use SSR.
SSR is still beneficial for Google and the question arises: do I need SSR for Google?
The best way to know is to try.
So whether or not SSR is worth it not always clear.
The best way to know is try and see if SSR works out for you.

You cannot "just try" with the current tools:
if, for example,
you use create-react-app then you'll have to switch to.
Switching from create-react-app to Next.js will require you
to re-write many parts of your apps
(your route logic, your data fetching logic, etc.)

With Goldpage, can try SSR on one of your pages and see it works out for you.
With Goldpage, you can add SSR to one of your page (by setting `renderToHtml: true` to its page config)
and then test if SSR works out for that page.
You can then progressively add SSR to your other pages.

Switching between app types is simply a matter of setting three page configs:
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
`renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
`renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
`renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.
<br/>
These three flags allow you to get any app type.

For SSR this means setting 
Goldpage is the only tool out there that allow you 


With Goldpage, you can add SSR to a page by setting `renderToHtml: true` to its page config
and removing SSR by settting `renderToHtml: false`.

Where trying out SSR means refactoring with other tools, with Goldpage it's only a matter of changing the page config `renderToHtml`.

The best way to know is to try.
And you cannot easily do that with the current existing tools.
Goldpage allows you to without SSR at first and later add SSR to a page,...
With Goldpage you can:
you can start without even knowing what SSR is,
and, if later the need arises,
add SSR to one of your pages,
see whether or not SSR works out for that page,
and, if yes, add SSR to all your other pages.


One thing we care a lot about,
is to allow you to quickly get started without
having to know about all app types out there.
This is a general
Not only do we encourage you to start without SSR and
to try out only once SSR when the need arises.
you don't even have to know the "SSR" technique

That's fine,
you'll eventually get to know SSR and.
And,
not matter what app type you end up needing,
Goldpage's got you back.

Instead of spending time learning about the different kinds of app types,
we encourage you start creating a first prototype.
You'll eventually get familiar with the different kind of app types while developing your app,
and you'll eventually figure out
which app type works best for your app.
