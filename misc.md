---
layout: page
title: Others
permalink: /misc/

images:
    # - path: "/images/travel/1_2.jpg"

activities:
    - title: "Vice President | Tencent Innovation Club"
      year:  "10/2016 - 07/2019"
      image: "/images/tic.jpg"
      comment: "-- 2016-2017, served as the leader of the WeChat team, and was awarded the best team of the year <br/>
                -- 2017-2018, served as the director of the club's network advertising department, was awarded the outstanding member of the annual Tencent Innovation Club <br/>
                -- Achieved the first place (1/21) in the competition of college clubs affiliated to Tencent Inc in 2017<br/><br/>"
                
    - title: "Chief Propagandist & Technical Support | Summer Social Practice Activities"
      year:  "07/2017"
      image: "/images/share.jpg"
      comment: "-- Participated in the school-level summer social practice activities <br/> 
                -- Research Objective: the current situation and future prospects of Guangzhou's shared economy<br/> 
                -- Responsible for advertising, filming and video editing<br/><br/><br/>"

    - title: "Minister of Public Relations Department | Computer Volunteer Service Team"
      year:  "10/2016 - 10/2018"
      image: "/images/volunteer.jpg"
      comment: "-- Provided computer maintenance service for students and teachers for free <br/> 
                -- Connected community organizations to organize and arrange free computer maintenance activities"
---


## Interests

I love traveling and photography, and the scenery in northwestern China is usually exciting.<br/>
<!-- But it seems that human figures photography is also very interesting. -->
<!-- {% assign thumbnail="left" %}
{% for pic in page.images %}
{% if pic.path %}
{% include image.html url=pic.path caption="" width="150px" align=thumbnail %}
{% endif %}
{% endfor %}<br/> -->

## Extracurricular Activities

{% assign thumbnail="left" %}
{% for act in page.activities %}
{% if act.image %}
{% include image.html url=act.image caption="" width="250px" align=thumbnail %}
{% endif %}
**{{act.title}}** <br/>
*{{act.year}}* <br/>
{{ act.comment }}
{% endfor %}<br/>