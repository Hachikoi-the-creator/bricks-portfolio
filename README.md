## TODO
- [ ] Copy the email form from prev portfolio
- [ ] 


## Tricks
### Force dark theme
- Create a new file iside pages
- copy this
```tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### Override Rich Text thingys
```jsx
<RichText
renderHighlight={({ children }) => (
  <span className="px-1 rounded bg-blue-200 text-blue-900">
    {children}
  </span>
)}
/>
```

### Default img - img Component
- Goto Playground, select the component whose img you want to change
- Upload a new image, change the defualt text
- Copy all the new settings inside `getDefaultProps` replacing the old ones

### Minimun Brick content
```jsx
import React from 'react'
import { types } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
  return <div className="p-6 text-center">Thumbnail</div>
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  sideEditProps: [],
}

export default Thumbnail
```


```jsx

```


## Notes
- Changes in new brick's `getDefaultProps` only take effect after an **F5**