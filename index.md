---
layout: page
---

{% assign post = site.posts.first %}
{% assign content = post.content %}

# Ilios: Curriculum Management from UCSF

- [Check out our Wiki](https://github.com/ilios/ilios/wiki){:target="_blank"}
- [Read the FAQs](https://github.com/ilios/ilios/wiki/FAQS){:target="_blank"}
- [Subscribe for Updates](http://iliosproject.org/DadaMail/dada/mail.cgi/){:target="_blank"}
- [Demo Site Information](https://www.dropbox.com/s/pwqihqb9todkqw6/DemoSite.pdf?dl=0){:target="_blank"}
- [Latest User Guide](https://www.dropbox.com/sh/3cfxfzdspzf10wp/KbaFS5LKkM){:target="_blank"}

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
