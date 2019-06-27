import React from 'react';

export default {
  route: '/',
  view: () => <div>
    <Link href="/product/123"/>
    <Link href="/products/123?productColor=blue#reviews"/>
    <Link href="/about"/>
  </div>,
}

function Link({href}) {
  return (
    <div>
      <a href={href}>{href}</a>
    </div>
  );
}
