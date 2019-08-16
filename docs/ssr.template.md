By setting `renderToHtml: true` and `renderToDom: true` you get:
- SEO
  Rendering your page's content 
  Content that are accessible only over the DOM:
  <br/>
  - Google-only
    <br/>
    The Google crawler is the only one that executes JavaScript and only Google will know about content that are only rendered to the DOM.
    if you want your page's content to be crawled by all other search engines (Bing, Baidu, DuckDuckGo, etc.) then you need to render your page's content to HTML.
  - Delay on Google
    <br/>
    The Google crawler first crawls your page without executing JavaScript
  and re-crawls your page after [~1 week](https://twitter.com/Paul_Kinlan/status/1039852756113080320)
  with executing JavaScript.
  This means that content accessible only over the DOM appear later than content
  This means that if your page's content is rendered to the DOM and not to HTML then it will appear only one week later
  (for popular sites, Google manages to track HTML changes almost instantly)
  Rendering your page to HTML solves these problems.
  Rendering your page to both HTML to the DOM is not difficult but to entirely trivial either:
   - 
  We recommend to first experiment if Google's crawler exectuing works out for you first.
  And only after you realize is not an option to render your page to HTML.
  And only if the result to resort ;
  see "slightly increased dev cost".
- Slightly 
- Social sharing
  <br/>
  When someone shares your page on social sites, such as Facebook or Twitter, a preview of your content is shown: the HTML of your page is (Your page's title
- Slightly increased dev cost
  <br/>
  Rendering your page to both HTML and the DOM means that your page's code will run in both Node.js and the browser:
  - Your libraries need to be able to run in Node.js.
    <br/>
    Certain libraries expect to be run in the browser and will crash when run in Node.js.
    You can often solve this by lazy loading your library loading it with `require('a-library-that-works-only-in-the-browser')` only after the React/Vue component is mounted. That way the libray is loaded only in the browser.
  - Only the inital state of your React/Vue components are rendered to HTML.
    <br/>
    You'll have to make sure that your content is available.
    But thanks to !VAR|LINK ASYNC_DATA this is often easy to achieve.
- Faster time-to-first-paint
  <br/>
  The user can see your page's content rendered to HTML before the browser loads any JavaScript and before your pages is rendered in the browser.
  This results the user being able to see the page's content faster.
  Keep in mind that 
  Note that sites, e.g. Hacker News with only ~150 LOC.
- Slower time-to-first-interaction
  <br/>
  On the other hand, rendering your page to HTML slows down the initial HTML download
  and, before the user is able to interact with your page, the JavaScript needs to be loaded and your page rendered to the DOM.

By setting `renderToHtml: true` and `renderToDom: false` you get:
- SEO
  <br/>
  You have full control
- No interactive page
  all the aforementioned benefits without the dr

So, if your page is non-interactive we recommend to render it only to HTML.
Also note that interactive (i.e. stateful) views are more time consuming to implement.
It is often underestimated.
Using React/Vue as HTML template engine is a wonderful experience (using JavaScript to generate HTML is neat)
Using 

