---
title: Create a custom page on hexo
date: 2017-03-02 09:43:03
tags:
  - reading list
  - hexo
  - custom page
  - style
---

My catch on creating a custom page on hexo
------------

Create a directory under the source directory named `reading-list` and under that create an `index.md` file within the above directory.

index.md content:
```
title: "Reading List"
layout: "page"
---

```

We'll add more to this file later.


At this point, the URL `/reading-list` should be pointing to `reading-list/index.md` that we created just now.

If you want to use a custom template for your reading-list page, you would have to create a separate layout file for it. For this, create an [ejs](http://www.embeddedjs.com/) file  `layout/reading-list.ejs` in your theme's directory:

```
<article class="article">
    <div class="article-entry">
        <div class="reading-list">
            <%- page.content %>
        </div>
    </div>
</article>
```

I had to add a div with class "article" because the CSS for markdown was available only for the class `article` from the theme I'm using([icarus](https://github.com/ppoffice/hexo-theme-icarus)).


Next comes styles. You have two options here:

1. Add your styles in the themes style using stylus, which gets compiled to CSS and is then used in all the pages

  Pros:
    - Style in stylus
    - Import existing block's styles from stylus(basically the advantage of using stylus)

  Cons:
    - Would be added across all the pages, even if you require it only for a single page. I'm not sure about this, but that's what I think.

2. Add your style in a separate css file under `themes/icarus/source/libs/reading-list-style.css`(This path changes based on your theme).

  Pros and cons: just the reverse of #1.


I decided to go with approach #2 here. So, I created a file `themes/icarus/source/libs/reading-list-style.css` with the below content:

```
#sidebar {
    display: none;
}

#main {
    width: 75%;
}
```

The above CSS is to hide the sidebar on the reading list page(Yea, I'm not very good at CSS).


Now, we need to add the above CSS file to our layout. Add the below line in the `layout/reading-list.ejs` file:

```
<link rel="stylesheet" href="/libs/reading-list-style.css">
```


At last, we have the custom page ready. All you need to do now is to add content to your `reading-list/index.md` file you created earlier.

Now, generate the templates by `hexo generate` command and goto the URL `/reading-list`. It should load your new custom page "Reading List".
