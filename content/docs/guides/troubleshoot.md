# Troubleshoot

本章節會說明幾項常見於 Arkhi 的問題，更加詳細內容請訪問 [Vike Documentation](https://vike.dev/)。

## Island 沒有獲得互動性

### 檢查目標 HTML Element 是否有 `_island_id`

檢查該元件在瀏覽器中是否有 `_island_id` 這個 attribute，如果沒有的話，請檢查是否有在 Component 加上 `{...props}`。

```html
<div _island_id="Foo:0ab234"> ... </div>
```

此 ID 適用於尋找島嶼位置，以及對應島嶼與其渲染用 prop 的 ID，如果沒有此 id，很可能是在被轉成島嶼的元件中加上允許加上 prop 的部份。

```tsx
import { Island } from "arkhi/client";

const Foo = Island(FooComponent);

function FooComponent({ ...props }:{}) {
	return <div {...props}> ... </div>
}
```

### 檢查是否有使用正確的元件

一項常見的問題是沒有正確的使用島嶼化的元件，而是不小心使用成島嶼化之前的版本，這會造成元件並沒有被視為島嶼在前端渲染。

修正方式只要確認已經改為使用島嶼化的元件。

## 排版錯亂

### 檢查使否有巢狀 `<a>` tag

因為渲染流程中的一項 Bug，當出現巢狀連結時會出現渲染錯誤。此時需要將該 `<a>` 標籤重新設計，避免著創 anchor 造成渲染問題。

## 打包問題

### fs、path、process

因為嚴格來說，前後端是兩個部份分開打包，容易會出現前端不小心打包到 fs、path 等 node 套件不小心打包到前端，造成錯誤。

這個問題的處理方法有幾個思路

#### 使用 Vite

因為 Vite 本身已經滿足部份這些需求，例如 env 可以[透過 Vite 取得](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes)，或是能夠直接載入 json、css 檔案，可以避免直接操作伺服器端資源的情形。

#### Custom Loader

可以撰寫 Vite 插件，自訂客製化檔案載入流程，載入特定類型的檔案。

諸多相關預寫好的插件可參考 [awesome vite](https://github.com/vitejs/awesome-vite)。