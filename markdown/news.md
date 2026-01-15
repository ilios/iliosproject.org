---
layout: page
title: News
permalink: /news/
topLevel: true
---
<!-- markdownlint-disable MD033 -->

<div class="subscribe-for-updates">
  <a href="/subscribe">Subscribe for Updates</a>
</div>
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>

      {{post.excerpt}}
    </li>
  {% endfor %}
</ul>
