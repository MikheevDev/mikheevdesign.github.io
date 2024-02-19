---
layout: default
---

{%- assign portfolios = site.portfolios | where_exp: 'portfolio', 'portfolio.category == web-development' -%}
<div uk-filter="target: .js-filter">
  
<ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                      {% for portfolio in portfolios %}
                          <li>
                              <a>{{portfolio.title}}</a>
                          </li>
                      {% endfor %}
</ul>
</div>
