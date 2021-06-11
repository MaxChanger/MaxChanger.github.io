---
layout: page
permalink: /experience/
title: Experiences
edus:
    - title:   "Northwestern Polytechnical University, China, 09/2016 - 06/2020"
      image: "/images/nwpu.png"
      comment: "-- Bachelor of Engineering, Computer Science and Technology<br/>
                -- Overall Average: 88.28/100<br/>
                -- College Comprehensive Evaluation Ranking: 1/248<br/>
                -- Advisor: [Prof. Yuchao Dai]<br/>"

interns:
    - title:   "3D Vision Group of SenseTime Research, Hangzhou, 10/2019 - 05/2020"
      image: "/images/sensetime.png"
      comment: "-- 3D Scene Reconstruction and Understanding<br/>
                -- RGBD Indoor Scene and Object Reconstruction<br/>
                -- Advisor: [Prof. Xiaowei Zhou] and [Jiaming Sun]<br/>"

projects:
    - title: "Leader of Rescue Team -- NWPU Dancing Robot Research And Training Base"
      time:  "07/2017 - 08/2019"
      topic: "Research Topic: SLAM, Robot Localization and Navigation, Path Planning"
      comment: "In the Rescue Robot League, robots search for several victims placed in a simulated field of a disaster site and discover and rescue them. These robots have mechanisms for both operator control and autonomous operation. 
                They are also equipped with devices such as a camera, a temperature sensor, and a carbon dioxide sensor."
      duties: " SLAM and Autonomous Navigation, using Lidar and Hector Slam or Cartographer algorithms, combined with projects based on some open source algorithms, then optimize and adapt them to our robots."
      videos:
        - name: "Rescue Team Explorer -- Result Presentation"
          url: https://www.youtube.com/watch?v=ECkUeVavoEI
        - name: "Autonomous Obstacle Avoidance Control Algorithms Show"
          url: https://www.youtube.com/watch?v=hqvpZJrQQSM
      image: "/images/explorer_1.jpg"

    - title: "Major Member -- NWPU Peak Experience Program Supervised By Prof. Yuchao Dai"
      time:  "10/2018 - present"
      topic: "Research Topic: Visual Technology of Unmanned System Based on Deep Learning"
      comment: "Lidar/Visual 3D Reconstruction, Deep ICP, Multi-sensor calibration, Visual SLAM such as ORB_SLAM etc.<br/>  
                Achievement: Data acquisition and reconstruction of buildings using 3D Lidar and Cartographer has been implemented. Calibration of the extrinsic parameters between Camera and Lidar has been achieved."
      duties: " Lidar/Visual 3D Reconstruction, Deep ICP, Multi-sensor calibration, Visual SLAM"
      videos:
        - name: "Velodyne-16+IMU+cartographer"
          url: https://youtu.be/Q-RpD6fszsY
        - name: "Dual Lidar Calibration"
          url: https://youtu.be/eWi_X-0W4QI
      image: "/images/duallidar.png"

    - title: "Junior Intern -- NWPU Center for Optical Imagery Analysis and Learning (OPTIMAL)"
      time:  "12/2018 - 05/2019"
      topic: "Research Topic: Unsupervised Learning Hash Encoding Schemes for Efficient Image Retrieval"
      comment: "Transform high-dimensional media data into compact binary codes and generate similar binary codes for similar data items, under the supervision of Dr. Zhanxuan Hu."
      duties: " Combine Unsupervised Clustering with Deep Hashing, Implementation based on Pytorch"
      image: "/images/imageretrival.png"

    - title: "Group Leader & Programming Member -- NWPU Mathematical Modeling Base"
      time:  "08/2017 - 03/2018"
      topic: "Research Topic: Solving real-life problems using mathematical modeling"
      comment: "Won the Meritorious Winner International First Prize in 2018 MCM/ICM (Problem D: Out of Gas and Driving on Electric) and won the Provincial First Prize in 2017 National Mathematical Modeling Competition. <br/>
      Invited to instruct the team of college to participate in the mathematical modeling competition organized by the school in May 2019."
      image: "/images/mcm.jpg"

---

## Education

{% assign thumbnail="left" %}
{% for edu in page.edus %}
{% if edu.image %}
{% include image.html url=edu.image caption="" height="100px" align=thumbnail %}
{% endif %}
**{{edu.title}}** <br/>
{{ edu.comment }}
{% endfor %}<br/>

## Intern Experience

{% assign thumbnail="left" %}
{% for intern in page.interns %}
{% if intern.image %}
{% include image.html url=intern.image caption="" height="100px" align=thumbnail %}
{% endif %}
**{{intern.title}}** <br/>
{{ intern.comment }}
{% endfor %}<br/>

## Projects

{% assign thumbnail="left" %}
{% for pro in page.projects %}
{% if pro.image %}{% include image.html url=pro.image caption="" width="150px" align=thumbnail %}{% endif %}
**{{pro.title}}**  *{{pro.time}}* 
{% if pro.topic %}<br/>**{{pro.topic}}**{% endif %}
{% if pro.comment %}<br/>{{ pro.comment }}{% endif %}
{% if pro.duties %}<br/>**Main Duties:**{{ pro.duties }}{% endif %}
{% if pro.videos %}<br/>**Video:** {% for video in pro.videos %}[[{{video.name}}]({{video.url}})]{% endfor %}{% endif %}
{% endfor %}<br/>


## Honor & Awards
- **Outstanding Students** \| Northwestern Polytechnical University (top 14.7%), 2016-2019, Three years in a row
- Aviation Industry Special Scholarship (first-class  top 0.5%), 2018-2019
- Aviation Industry Special Scholarship (second-class top 2.0%), 2017-2018
- Wu Yajun's Special Scholarship (third-class top 4.6%), 2016-2017
- **International First Prize** \| International University Interdisciplinary Contest in Modeling, 02/2018
- **Silver Award** \| RoboCup Rescue Robotic Tournament - Divisional Competition, Zhejian, 04/2018
- **Champion** \| RoboCup Rescue, Divisional Competition-Independent Ability Challenge, Zhejiang, 04/2018
- **Champion** \| China Robot Competition - Environmental Autonomous Exploration Project, Sichuan, 08/2018
- **First Prize** \| Zhonghangzhi Technology Co., Ltd. "Lianfei Cup" Challenge Result Presentation, 11/2018
- **First Prize** \| National Undergraduate Mathematical Modeling Contest (Shaanxi Province), 09/2017
- **Second Prize** \| The 11th National University Student Technology Contest on Energy-saving, Wuhan, 08/2018
- **Third   Prize** \| National University Cloud Computing Application Innovation Competition, Nanjing, 04/2018
- **Silver Award** \| "Internet +" College Student Innovation and Entrepreneurship Competition, Shaanxi, 10/2018
- **Silver Award** \| The 11th "Creating Youth" College Entrepreneurship Competition, NWPU, 04/2018
- **Excellent Project** \| University Student Innovation and Entrepreneurship Training Program, 2017-2018
- **Good Project** \| University Student Innovation and Entrepreneurship Training Program, 2017-2018



[Prof. Yuchao Dai]: https://scholar.google.com/citations?user=fddAbqsAAAAJ&hl=en
[Prof. Xiaowei Zhou]: http://www.cad.zju.edu.cn/home/xzhou
[Jiaming Sun]: https://jiamingsun.ml/
