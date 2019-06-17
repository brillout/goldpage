<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.






-->

This example exhibits how to use CSS and static assets.

Some excerpts:

~~~js
// ./pages/glitter/views/Glitter.js

import React from 'react';
import '../style.css';
import diamondUrl from '../assets/diamond.png';

const Center = ({children, style}) => (
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', ...style
      }}
    >
        {children}
    </div>
);

const Diamond = () => <div className="diamond diamond-background"/>;

const Glitter = () => (
    <Center style={{fontSize: '2em'}}>
        <Diamond/>
        Shine
        <img className='diamond' src={diamondUrl}/>
    </Center>
);

export {Glitter};
~~~

~~~js
// ./pages/glitter/style.css

body {
    background-color: pink;
    font-family: 'Tangerine';
    font-size: 2em;
}
.diamond-background {
    background-image: url('./assets/diamond.png');
    background-repeat: no-repeat;
    background-size: contain;
}

.diamond {
    width: 80px;
    height: 47px;
    margin: 25px;
    display: inline-block;
}

@font-face {
    font-family: 'Tangerine';
    src: url('./assets/Tangerine.ttf') format('truetype');
}
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/examples/static-assets/readme.template.md` instead.






-->
