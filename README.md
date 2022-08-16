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