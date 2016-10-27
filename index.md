---
layout: page
redirect_from: '/home/'
path: '/'

---

{% assign post = site.posts.first %}
{% assign content = post.content %}

# Ilios: Curriculum Management from UCSF

- [Check out our Wiki](https://github.com/ilios/ilios/wiki){:target="_blank"}
- [Read the FAQs](https://github.com/ilios/ilios/wiki/FAQS){:target="_blank"}
- [Subscribe for Updates](/subscribe)
- [Demo Site Information](/demo)
- [Latest User Guide](https://iliosproject.gitbooks.io/ilios-user-guide/content/){:target="_blank"} *(new!)*
- [Looking for the User Guide for 2.4.8? It's here!](https://www.dropbox.com/sh/3cfxfzdspzf10wp/KbaFS5LKkM){:target="_blank"}

## Latest News

<ul class="post-list">
  {% for post in site.posts  limit:2 %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>

      {{post.excerpt}} <a href="{{ post.url | prepend: site.baseurl }}">...read more</a>

    </li>
  {% endfor %}
</ul>
