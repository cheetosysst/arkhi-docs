# Markdown demo

This is a demo of markdown render result.

## Headings 2

Enim pariatur aliqua dolor pariatur do esse esse duis ullamco. In duis quis ut elit elit occaecat nulla enim sint amet. Duis aliqua incididunt minim dolore proident velit minim duis.

### Headings 3

Pariatur veniam reprehenderit sint do velit proident quis fugiat sit exercitation non laborum. Irure id labore non sit est aliqua excepteur cupidatat consequat anim amet eu culpa et. Duis elit consectetur voluptate id labore tempor pariatur labore. Amet eiusmod ullamco consequat esse ullamco amet occaecat irure sunt exercitation adipisicing tempor occaecat quis. Pariatur laboris qui ea officia incididunt veniam mollit labore cillum minim est ullamco reprehenderit proident. Consectetur deserunt ipsum deserunt eiusmod qui in magna anim duis.

#### Headings 4

Enim irure non Lorem excepteur magna esse eu sunt est do ex voluptate culpa. Aliquip ex deserunt nisi ut. Aliquip dolore Lorem mollit veniam sunt ut sit mollit excepteur laborum aliqua amet. Mollit est culpa et pariatur ut sunt tempor sunt esse ut. Non non voluptate do excepteur exercitation consequat eu minim. Exercitation nulla velit officia et duis.

##### Headings 5

Sunt aute anim ea consequat do cupidatat deserunt enim sint irure qui consequat ea. Eiusmod ipsum sunt ipsum non ipsum. Eu consectetur anim incididunt commodo pariatur quis. Cupidatat incididunt nostrud ad ut pariatur nulla culpa. Cupidatat anim eiusmod id ex voluptate. Minim consectetur occaecat nulla qui ipsum cillum aliqua id anim proident.

## Image

![alt](/Maraho.png)

## Lists

### List with "-"

- Never
  - Never gonna
  - Give you
  - Up
- What is love?
  - Baby don't hurt me
  - no more

### List with "*"

- Never
  - Never gonna
  - Give you
  - Up
- What is love?
  - Baby don't hurt me
  - no more

### List with "+"

- Never
  - Never gonna
  - Give you
  - Up
- What is love?
  - Baby don't hurt me
  - no more

### Ordered list

1. Never gonna
2. Give you
3. Up

### Link

Links are converted to [next/link](https://nextjs.org/docs/api-reference/next/link)

[This](/) link connects to the index page.

Sections is not implemented, yet.

### Code

You can use `InlineCode()`.

Or a code block with highlighted text.

```js
export async function getStaticPaths() {
	const pathCategory = path.join(process.cwd(), "content");
	const categories = fs.readdirSync(pathCategory);

	let paths = [];
	categories.map((category) => {
		const articles = fs.readdirSync(path.join(pathCategory, category));

		articles.map((article) => {
			paths.push({
				params: {
					article,
					category,
				},
			});
		});
	});

	return {
		paths,
		fallback: false,
	};
}
```


### Horizontal Line

---

---

### Table

| | Lawful | Neutral | Chaotic |
|-|-|-|-|
| Good | Lawful Good | Neutral Good | Chaotic Good |
| Neutral | Lawful Neutral | True Neutral | Chaotic Neutral |
| Evil | Lawful Evil | Neutral Evil | Chaotic Evil |

### Checkbox

- [ ] Buy eggs
- [x] Buy milk
- [x] Buy toothbrush

These are not aligned properly

### Blockquotes

> This is a blockquote.
> > This is a blockquote inside a blockquote.
>
> #### you can even use header here
>

