# Server-Side Rendering (SSR)

## 為什麼需要 SSR

島嶼架構的一項缺陷，就是不適用於對內容高度動態要求的使用場景。在 Arkhi 我們使用 SSR 的方式，透過先在伺服器端先行渲染一次的方法來產生動態內容。

## SSR 實做方式

Arkhi 本身不負責 SSR，這項工作會交由 [Vike](https://vike.dev) （原 vite-plugin-ssr 專案） 提供，於此之上再修改渲染流程。詳情可見 `renderer/_default.page.server.tsx` 和 `renderer/_default.page.client.tsx`的內容。在 `server.tsx` 中我們會呼叫渲染，並針對頁面需求注入其他內容到模板中。

如果有頁面個別需求，例如需要修改頁面渲染流程，也可以直接在各頁面的路徑之下用同樣方式撰寫渲染流程，覆蓋全域的 `_default.page.server.tsx` 或是 `_default.page.client.tsx`

延伸閱讀：[Multiple `renderer/` - Vike](https://vike.dev/multiple-renderer)

### 恢復一般的渲染流程

```tsx
// 舉例：page/foo/render/_default.page.client.tsx
export { render }

import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const root = document.getElementById('react-root')
  if (!root) throw new Error('DOM element #react-root not found')
  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

// 本範例取自 Vike 生成之模板
```

以上的範例會套用到 `example.com/foo` 下所有的路徑，會恢復該頁面使用一般的 React 渲染流程。
