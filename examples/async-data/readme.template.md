!MENU_SKIP

This example exhibits how to load and render data.

We define two pages that load data:
 - `html.page.js` - Loads data by using `async getInitialProps()`.
 - `dom.page.js` - Loads data by using a stateful component.


### GameOfThronesPage - Using `async getInitialProps()`

~~~js
!INLINE ./pages/got/html.page.js
~~~

Because `aysnc getInitialProps()` is called and waited for prior to rendering the HTML, our page's HTML `view-source:http://localhost:3000/game-of-thrones` displays the data already.

~~~html
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta charset="utf-8">
    </head>
    <body>
        <div id="root-react">
            <div>
                <h3>Game of Thrones Characters</h3>
                <table border="7" cellPadding="5"><tbody>
                    <tr><td>Daenerys Targaryen</td></tr>
                    <tr><td>Jon Snow</td></tr>
                    <tr><td>Cersei Lannister</td></tr>
                    <tr><td>Petyr Baelish</td></tr>
                    <tr><td>Bran Stark</td></tr>
                    <tr><td>Tyrion Lannister</td></tr>
                    <tr><td>Varys</td></tr>
                    <tr><td>Tormund</td></tr>
                    <tr><td>Samwell Tarly</td></tr>
                </tbody></table>
            </div>
        </div>
    </body>
</html>
~~~

Note that because the HTML already contains the data, we can set `doNotRenderInBrowser: true` for increased performance.




### GameOfThronesPage2 - Using stateful component

~~~js
!INLINE ./pages/got/dom.page.js
~~~

When using such stateful component,
the server renders the HTML before the data is loaded.
In our case,
 this means that the HTML `view-source:http://localhost:3000/game-of-thrones-2`
displays the loading state `<div id="root-react"><div>Loading...</div></div>`.
And the HTML returned by the server is:

~~~html
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta charset="utf-8">
    </head>
    <body>
        <div id="root-react"><div>Loading...</div></div>
        <script src="/commons.hash_451146e5dbcfe0b09f80.js" type="text/javascript"></script>
        <script src="/GameOfThronesPage2.entry.hash_2c79748d10c1e953f159.js" type="text/javascript"></script>
    </body>
</html>
~~~


