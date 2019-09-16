# Polymer

https://github.com/Polymer/polymer-library-docs/tree/master/templates

Uses page includes.

#### Edit on github link

```javascript
 {% if edit_on_github %}
    <a class="edit-on-github" target="_blank"
        href="{{{edit_on_github_path}}}">
    Edit on GitHub
    </a>
{% endif %}
```

site-nav.html

Drawer component

```javascript
<div class="site-nav" slot="site-nav">
  <img src="/images/logos/p-logo.png" alt="Polymer Logo">
  {% if versioned_paths %}
    <pw-version-selector
        active-docs-version="{{{polymer_version_dir}}}"
        v1-page-link="{{{versioned_paths[0]}}}"
        v2-page-link="{{{versioned_paths[1]}}}"
        v3-page-link="{{{versioned_paths[2]}}}"></pw-version-selector>
    {% else %}
    <pw-version-selector></pw-version-selector>
  {% endif %}

  {% if site_nav %}
    {% for section in site_nav %}
      <a class="level-1"
         href="{{{section.path}}}"
         name="{{{section.path}}}"
         data-version="{{{section.version}}}">
         <span>{{{section.section}}}</span>

         {% if 'items' in section %}
         <paper-icon-button icon="icons:expand-more"
            onclick="_expandClicked(event)">
         </paper-icon-button>
         {% endif %}
       </a>

      {% if 'items' in section %}
        <iron-collapse class="">
          {% for item in section['items'] %}
            {% if 'header' in item %}
              <a class="level-2" onclick="_expandClicked(event)">
                 <span>{{{item.header}}}</span>
                 <paper-icon-button icon="icons:expand-more"></paper-icon-button>
              </a>
              <iron-collapse>
            {% elif 'endheader' in item %}
              </iron-collapse>
            {% elif 'title' in item %}
              <a class="level-2 {{{item.indent}}}"
                 href="{{{item.path}}}"
                 name="{{{item.path}}}">
                 <span>{{{item.title}}}</span>
              </a>
            {% endif %}
          {% endfor %}
        </iron-collapse>
      {% endif %}
    {% endfor %}
  {% endif %}
</div>

<script>
function _expandClicked(event) {
  var navLink = event.target.parentNode;
  var navCollapse = navLink.nextElementSibling;

  document.querySelector('pw-shell').styleLinkPath(navLink, !navCollapse.opened);

  // Don't actually click the link.
  event.preventDefault();
  event.stopImmediatePropagation();
}
</script>
```

```html
<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/Organization" lang="en">
    <head>
        <title>{% block title %}{% endblock %} - Polymer Project</title>
        {% include 'templates/head-meta.html' %}
    </head>
    <body>
        <pw-shell server-rendered>
            {% include 'templates/site-nav.html' %}

            <div class="devguide-main">
                <nav>
                    <pw-version-selector
                        active-docs-version="{{{polymer_version_dir}}}"
                        v1-page-link="{{{versioned_paths[0]}}}"
                        v2-page-link="{{{versioned_paths[1]}}}"
                        v3-page-link="{{{versioned_paths[2]}}}"
                    ></pw-version-selector>

                    {% if section_nav %}
                    <div class="sidenav">
                        {% for item in section_nav %} {% if 'header' in item %}
                        <div class="sidenav-content sidenav-header">
                            {{{item.header}}}
                        </div>
                        {% elif 'endheader' in item %}
                        <div class="sidenav-content sidenav-endheader"></div>
                        {% else %}
                        <a
                            class="sidenav-content {{{item.indent}}} {{{ 'iron-selected' if path == item.path }}}"
                            name="{{{item.path}}}"
                            href="{{{item.path}}}"
                        >
                            {{{item.title}}}
                        </a>
                        {% endif %} {% endfor %}
                    </div>
                    {% endif %}
                </nav>

                <div class="content-container">
                    {% if markdown %}
                    <header
                        id="header"
                        data-version="{{{polymer_version_dir}}}"
                    >
                        <p>{{{subtitle}}}</p>
                        <h1>{{{title}}}</h1>

                        {% if edit_on_github %}
                        <a
                            class="edit-on-github"
                            target="_blank"
                            href="{{{edit_on_github_path}}}"
                        >
                            Edit on GitHub
                        </a>
                        {% endif %}
                    </header>

                    {% if polymer_version_dir != '3.0' %}
                    <p class="version-alert">
                        <img src="/images/alerts/warning.svg" />
                        You're viewing an older version of Polymer. Please see
                        <a href="{{{versioned_paths[2]}}}">Polymer 3.0</a> for
                        the latest.
                    </p>
                    {% endif %} {% endif %}

                    <main>
                        {% block content %}{% endblock %}
                    </main>
                </div>
            </div>
        </pw-shell>
        <pw-footer></pw-footer>
        <script src="/js/app.js"></script>
    </body>
</html>
```
