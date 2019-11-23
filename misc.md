---
layout: page
title: Others
permalink: /misc/

activities:
    - title: "Vice President | Tencent Innovation Club"
      year:  "10/2016 - 07/2019"
      image: "/images/tic.jpg"
      comment: "- 2016-2017, served as the leader of the WeChat team, and was awarded the best team of the year <br/>
                - 2017-2018, served as the director of the club's network advertising department, was awarded the outstanding member of the annual Tencent Innovation Club <br/>
                - Achieved the first place (1/21) in the competition of college clubs affiliated to Tencent Inc in 2017"
                
    - title: "Chief Propagandist & Technical Support | Summer Social Practice Activities"
      year:  "07/2017"
      image: "/images/share.jpg"
      comment: "- Participated in the school-level summer social practice activities <br/> 
                - Research Objective: the current situation and future prospects of Guangzhou's shared economy<br/> 
                - Responsible for advertising, filming and video editing<br/><br/><br/>"

    - title: "Minister of Public Relations Department | Computer Volunteer Service Team"
      year:  "10/2016 - 10/2018"
      image: "/images/volunteer.jpg"
      comment: "- Provided computer maintenance service for students and teachers for free <br/> 
                - Connected community organizations to organize and arrange free computer maintenance activities"
---







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

<!-- 

## Cool hobby to prove you are athletic

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

## Cooler but boring hobby to prove you are smart
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

## Cooler hobby 2
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

## Ancient hobby which is not cool anymore

Consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. -->
