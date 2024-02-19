---
layout: page
---

На этой странице Вы можете ознакомиться с приммерами выполненных мной работ.

{%- assign projects = site.projects | where_exp: 'project', 'project.category == tech' -%}
<div uk-filter="target: .js-filter">

<ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control><a href="#">All</a></li>
        {% for project in site.categories.tech %}
        <li uk-filter-control="[data-color='white']"><a href="#">{{tech}}</a></li>
        <li uk-filter-control="[data-color='blue']"><a href="#">{{tech}}/a></li>
        <li uk-filter-control="[data-color='black']"><a href="#">{{tech}}</a></li>
        {% endfor %}
</ul>

<ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        {% for project in site.projects %}
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item = {{project.title}}</div>
            <p>{{ project.description }}</p>
        </li>
        {% endfor %}
 </ul>

</div>
