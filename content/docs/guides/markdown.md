# CMS

Arkhi CMS 是為 Arkhi 所設計的插件，主要是為了讓開發者能更方便地載入和處理 .md 和 .mdx 文件。以下是CMS的主要功能：
1. 將 Markdown 內容轉換為 JSX
2. 解析 Markdown 文件的 front matter 並生成 metadata
3. 生成一個 virtual module，可以導出文件內容和metadata
###### 使用[@mdx-js/mdx](https://github.com/mdx-js/mdx)和[gray-matter](https://github.com/jonschlinkert/gray-matter)輔助完成

## 範例
可以直接在頁面引入文章並使用metadata

```tsx
import Article, { metadata } from "#/content/markdown.md";

export { Page };

function Page() {
	return (
		<p>{metadata.filePath}</p>
		<Article />
	);
}
```
可使用的 `metadata` 如下所列

#### 可自訂：
* `title` : 文件標題
* `author` : 文件的作者名 
* `tags` : 字符串陣列，可用於對內容進行分類
* `description` : 文件的描述或摘要
* `status` : 文件的狀態（例如： ```草稿``` 或 ```已發佈``` ）

<br/>

#### 自動生成：

* `filePath` : 文件的完整路徑
* `fileName` : 文件名稱（包含格式）
* `readTime` : 預估的閱讀時間（單位：秒）
* `atime` : 文件的上次訪問時間
* `mtime` : 文件的上次修改時間
* `ctime` : 文件的創建時間或metadata的最後修改時間
* `createdAt` : 文件的實際創建時間



只要在文件開頭用以下方法就能自訂部分metadata，若沒有內容則默認為空
```markdown
---
title: 
author:
tags:
description:
status:
---
```

## API

CMS主要依靠 `arkhi/plugins` 檔案夾裡的 `cms.ts` 和 `virtual.d.ts` 兩份程式完成功能。

#### arkhi/plugins/cms.ts

使用另外撰寫的 `transformMarkdownContent` 函式轉換 Markdown 文件的內容。函式將會使用 matter 解析文件的 front matter ，分析內容並生成一些額外的metadata，最後使用 @mdx-js/mdx 將文件內容轉換為 JSX，使原本的 Markdown 文件可做為元件被載入。

#### virtual.d.ts
為了使 TypeScript 能夠識別和理解如何處理特定的文件類型的宣告文件，此檔案會告訴 TypeScript 這些文件將導出什麼組件和metadata

* 定義 .md 和 .mdx 文件的metadata結構
* 設定如何導入 .mdx、.md 和其他文件
