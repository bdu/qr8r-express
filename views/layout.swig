<!doctype html>
<html><head>
  <meta charset="utf-8">
  <title>{{pagetitle}}</title>

  {% block head %}
  <link rel="stylesheet" href="main.css">
  {% endblock %}

</head><body>

  <h1>{{pagetitle}}</h1>

  {% block content %}
  {% endblock %}

</body></html>
