---
layout: page
---

На этой странице Вы можете ознакомиться с приммерами выполненных мной работ.



<ul class="uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        {% for project in site.projects %}
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item = {{project.title}}</div>
            <p>{{ project.description }}</p>
        </li>
        {% endfor %}
 </ul>

</div>
