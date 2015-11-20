---
layout: page
---

{% assign post = site.posts.first %}
{% assign content = post.content %}
<h1>Ilios: Curriculum Management from UCSF</h1>

- [Check out our Wiki](https://github.com/ilios/ilios/wiki)
- [Read the FAQs](https://github.com/ilios/ilios/wiki/FAQS)
- [Subscribe for Updates](http://iliosproject.org/DadaMail/dada/mail.cgi/)

<h2>Latest News</h2>

<div class="post">

  <header class="post-header">
    <h3 class="post-title">{{ post.title }}</h3>
    <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.author %} • {{ post.author }}{% endif %}{% if post.meta %} • {{ post.meta }}{% endif %}</p>
  </header>

  <article class="post-content">
    {{ content }}
  </article>

</div>
