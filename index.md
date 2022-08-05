---
layout: page
title: Jiadai Sun 孙家岱
permalink: /

education:
    - title: "School of Electronics and Information @ Northwestern Polytechnical University, China, 09/2020 - 04/2023"
      image: "/images/nwpu.png"
      comment: "-- Master of Engineering | Advisor: [Prof. Yuchao Dai]<br/>
                -- Overall Average: 93.26/100 "
    - title: "School of Computer Science @ Northwestern Polytechnical University, China, 09/2016 - 06/2020"
      image: "/images/nwpu.png"
      comment: "-- Bachelor of Engineering, Outstanding graduate, Computer Science and Technology | Advisor: [Prof. Yuchao Dai]<br/>
                -- Overall Average: 88.28/100 | College Comprehensive Evaluation Ranking: 1/248"

interns:
    - title: "Robotics and Autonomous Driving Lab @ Baidu Research, Beijing, 04/2022 - now"
      image: "/images/baidu_research.png"
      comment: "-- Scene Reconstruction and Novel View Synthesis.<br/>
                -- Mentor: [Dingfu Zhou], [Xibin Song] and [Liangjun Zhang]"
    - title: "Perception Algo. @ Intelligent Algo. Dept. of HAOMO.AI, Beijing, 11/2021 - 04/2022"
      image: "/images/haomo.jpg"
      comment: "-- Online LiDAR-based 3D Moving Object Segmentation.<br/>
                -- Mentor: [Xieyuanli Chen] and Xianjing Zhang"
    - title: "3D&AR Group @ MIG of SenseTime Research, Hangzhou, 10/2019 - 05/2020"
      image: "/images/sensetime.png"
      comment: "-- 3D Scene Reconstruction and Understanding | RGB-D Indoor Scene and Object Reconstruction<br/>
                -- Mentor: [Jiaming Sun] and [Prof. Xiaowei Zhou]"

projects:
    - title: "Rescue Team Leader - NPU Dancing Robot Research & Training Base"
      time:  "07/2017 - 08/2019"
      topic: "Topic: SLAM, Robot Localization and Navigation, Path Planning"
      comment: "Goal: Search for several victims placed in the disaster scene simulation site, find and mark them.<br/>
                My main responsibility is SLAM and auto-navigation, based on Cartographer and Hector SLAM algorithms, combining them with our robots. Thanks to the cooperation of teammates."
      videos:
        - name: "Rescue Team Explorer -- Presentation"
          url: https://www.youtube.com/watch?v=ECkUeVavoEI
        - name: "Autonomous Obstacle Avoidance Control Algo."
          url: https://www.youtube.com/watch?v=hqvpZJrQQSM
      image: "/images/explorer_2.png"

    - title: "Major Member - NPU Peak Experience Program with [Prof. Y. Dai]"
      time:  "10/2018 - 06/2020"
      topic: "Research Topic: Visual Technology of Unmanned System Based on Deep Learning"
      comment: "Topic: Lidar/Visual 3D Reconstruction, Deep ICP, Multi-sensor calibration, Visual SLAM etc.  
                Data acquisition and reconstruction of buildings using 3D Lidar with Cartographer. 
                Calibration of the extrinsic parameters between Camera and Lidar has been achieved."
      duties: " Lidar/Visual 3D Reconstruction, Deep ICP, Multi-sensor calibration, Visual SLAM"
      videos:
        - name: "Velodyne-16+IMU+cartographer"
          url: https://youtu.be/Q-RpD6fszsY
        - name: "Dual Lidar Calibration"
          url: https://youtu.be/eWi_X-0W4QI
      image: "/images/duallidar.png"

    - title: "Intern - Optical Imagery Analysis and Learning Center (OPTIMAL)"
      time:  "12/2018 - 05/2019"
      topic: "Research Topic: Unsupervised Learning Hash Encoding Schemes for Efficient Image Retrieval"
      comment: "Topic: Unsupervised Learning Hash Encoding Schemes for Efficient Image Retrieval. <br/>
                Transform high-dimensional media data into compact binary codes and generate similar binary codes for similar data items, under the supervision of [Dr. Zhanxuan Hu].
                Combine Unsupervised Clustering with Deep Hashing, based on Pytorch, and made a demo using Flask."
      duties: "Combine Unsupervised Clustering with Deep Hashing, based on Pytorch, and made a demo using Flask."
      image: "/images/imageretrival.png"

activities:
    - title: "Vice President | Tencent Innovation Club"
      year:  "10/2016 - 07/2019"
      image: "/images/tic.jpg"
      comment: "-- 2016-2017, served as the leader of the WeChat team, and was awarded the best team of the year <br/>
                -- 2017-2018, served as the director of the club's network advertising department, was awarded the outstanding member of the annual Tencent Innovation Club <br/>
                -- Achieved the first place (1/21) in the competition of college clubs affiliated to Tencent Inc in 2017<br/>"
                
    - title: "Chief Propagandist & Technical Support | Summer Social Practice Activities"
      year:  "07/2017"
      image: "/images/share.jpg"
      comment: "-- Participated in the school-level summer social practice activities <br/> 
                -- Research Objective: the current situation and future prospects of Guangzhou's shared economy<br/> 
                -- Responsible for advertising, filming and video editing<br/>"

    - title: "Minister of Public Relations Department | Computer Volunteer Service Team"
      year:  "10/2016 - 10/2018"
      image: "/images/volunteer.jpg"
      comment: "-- Provided computer maintenance service for students and teachers for free <br/> 
                -- Connected community organizations to organize and arrange free computer maintenance activities"

pubs:
    - title:   "Efficient Spatial-Temporal Information Fusion for LiDAR-based 3D Moving Object Segmentation"
      author:  "**Jiadai Sun**, Yuchao Dai, Xianjing Zhang, Jintao Xu, Rui Ai, Weihao Gu, Cyrill Stachniss, Xieyuanli Chen"
      journal: "Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
      year:    "2022"
      # image:   "/images/no.svg"
      media:
        - name: "Page"
          url:  https://npucvr.github.io/MotionSeg3D/
        - name: "arXiv"
          url: https://arxiv.org/abs/2207.02201
        - name: "Code"
          url: https://github.com/haomo-ai/MotionSeg3D
        - name: "Data"
          url: https://github.com/haomo-ai/MotionSeg3D/blob/master/config/kitti_road_mos.md

    - title:   "MUNet: Motion Uncertainty-aware Semi-supervised Video Object Segmentation"
      author:  "**Jiadai Sun**\\*, Yuxin Mao\\*, Yuchao Dai, Yiran Zhong, Jianyuan Wang (\\* equal contribution)"
      journal: "arXiv preprint arXiv:2111.14646"
      # note:    "in submission"
      year:    "2021"
      # image:   "/images/no.svg"
      media:
        - name: "Page"
          url:  https://npucvr.github.io/MUNet/
        - name: "arXiv"
          url:  "https://arxiv.org/abs/2111.14646"
        - name: "Code"
    - title:   "Neural Deformable Voxel Grid for Fast Optimization of Dynamic View Synthesis"
      author:  "Xiang Guo, Guanying Chen, Yuchao Dai, Xiaoqing Ye, **Jiadai Sun**, Xiao Tan, Errui Ding"
      journal: "arXiv preprint arXiv:2206.07698"
      # note:    "in submission"
      year:    "2021"
      # image:   "/images/no.svg"
      media:
        - name: "Page"
          url:  https://npucvr.github.io/NDVG/
        - name: "arXiv"
          url:  "https://arxiv.org/abs/2206.07698"
        - name: "Code"
    - title:   "End-to-end Learning the Partial Permutation Matrix for Robust 3D Point Cloud Registration"
      author:  "Zhiyuan Zhang, **Jiadai Sun**, Yuchao Dai, Dingfu Zhou, Xibin Song, Mingyi He"
      journal: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)"
      year:    "2022"
      # image:   "/images/no.svg"
      media:
        - name: "Paper"
          url: "https://aaai-2022.virtualchair.net/poster_aaai7418"
        - name: "arXiv"
          url:  "https://arxiv.org/abs/2110.15250"
        - name: "Code"
    - title:   "Self-supervised Rigid Transformation Equivariance for Accurate 3D Point Cloud Registration"
      author:  "Zhiyuan Zhang, **Jiadai Sun**, Yuchao Dai, Dingfu Zhou, Xibin Song, Mingyi He"
      journal: "Pattern Recognition (PR)"
      year:    "2022"
      # image:   "/images/no.svg"
      media:
        - name: "Paper"
          url: "https://doi.org/10.1016/j.patcog.2022.108784"
        - name: "arXiv"
        - name: "Code"

    - title:   "VRNet: Learning the Rectified Virtual Corresponding Points for 3D Point Cloud Registration"
      author:  "Zhiyuan Zhang, **Jiadai Sun**, Yuchao Dai, Bin Fan, Mingyi He"
      journal: "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)"
      year:    "2022"
      doi:     
      # image:   "/images/no.svg"
      media:
        - name: "Paper"
          url:  "https://ieeexplore.ieee.org/abstract/document/9681904/" #"https://doi.org/10.1109/TCSVT.2022.3143151"
        - name: "arXiv"
          url:  "https://arxiv.org/abs/2203.13241"
        - name: "Code"

    - title:   "Learning a Task-specific Descriptor for Robust Matching of 3D Point Clouds"
      author:  "Zhiyuan Zhang, Yuchao Dai, Bin Fan, **Jiadai Sun**, Mingyi He"
      journal: "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)"
      year:    "2022"
      doi:     
      # image:   "/images/no.svg"
      media:
        - name: "Paper"
          url:  "https://ieeexplore.ieee.org/abstract/document/9847261/"
        - name: "arXiv"
        - name: "Code"    

    - title:   "Searching Dense Point Correspondences via Permutation Matrix Learning"
      author:  "Zhiyuan Zhang, **Jiadai Sun**, Yuchao Dai, Bin Fan, Qi Liu"
      journal: "IEEE Signal Processing Letters (SPL)"
      year:    "2022"
      doi:     
      # image:   "/images/no.svg"
      media:
        - name: "Paper"
          url: "https://ieeexplore.ieee.org/abstract/document/9769864"
        - name: "Code"

    - title:   "A Representation Separation Perspective to Correspondences-free Unsupervised 3D Point Cloud Registration"
      author:  "Zhiyuan Zhang, **Jiadai Sun**, Yuchao Dai, Dingfu Zhou, Xibin Song, Mingyi He"
      journal: "IEEE Geoscience and Remote Sensing Letters (GRSL)"
      # note:    "(presented at Oz)"
      year:    "2021"
      # image:   "/images/no.svg"
      media:
        - name: "Paper"
          url:  "https://ieeexplore.ieee.org/abstract/document/9638480" #  "https://doi.org/10.1109/LGRS.2021.3132926"
        - name: "arXiv"
          url:  "https://arxiv.org/abs/2203.13239"
        - name: "Code"

    - title:   "Deep learning based point cloud registration: an overview"
      author:  "Zhiyuan Zhang, Yuchao Dai, **Jiadai Sun**"
      journal: "Virtual Reality & Intelligent Hardware"
      year:    "2020"
      # image:   "/images/no.svg"
      media:
        - name: "Paper"
          url:  "https://www.sciencedirect.com/science/article/pii/S2096579620300383" # "https://doi.org/10.1016/j.vrih.2020.05.002"

news:
    shown:
      - time: Jun 30, 2022
        note: <a href="https://github.com/haomo-ai/MotionSeg3D" target="_blank">MotionSeg3D</a> accepted to IROS 2022 &#127867;&#127881; 
      - time: May 07, 2022
        note: One paper accepted to Pattern Recognition (PR) &#128079; 
      - time: Apr 30, 2022
        note: One paper accepted to SPL
      - time: Apr 27, 2022
        note: Start a new internship at RA-Lab @ Baidu Research &#127881;&#128526; <span id="points">...</span>

    hidden:
      - time: Jan 10, 2022
        note: One paper accepted to TCSVT &#128079; 
      - time: Dec 01, 2021
        note: One paper accepted to AAAI 2022 &#128079; 
      - time: Nov 29, 2021
        note: One paper accepted to GRSL
      - time: Nov 26, 2021
        note: Start a internship at Perception Group @ HAOMO.AI &#128526;
      - time: May 11, 2020
        note: One survey paper accepted to VR&IH
      - time: Oct 14, 2019
        note: Start a internship at MIG-3D&AR Group @ SenseTime Research &#128526;
---

<!-- About me -->
{% include image.html url="images/person3.jpg" caption="" width="190px" align="right" %}

I am currently a second-year (2020- ) graduate student of Northwestern Polytechnical University ([NWPU]) with the supervision of [Prof. Yuchao Dai], and I received my Bachelor's degree in July 2020 from the [School of Computer Science] of NWPU, with the honor of Outstanding Graduate.

Currently, I am a Research Intern at the [Robotics and Autonomous Driving Lab] of Baidu Research, and working very closely with [Xibin Song] and [Dingfu Zhou] on a research topic about Scene Reconstruction and Novel View Synthesis.
Before that, I have been working very closely with [Xieyuanli Chen] on a research topic about LiDAR-Based Moving Object Segmentation at Haomo.AI.
I used to be a Research Intern on topics related to 3D Scene Reconstruction and Understanding at 3D&AR Group @ MIG of [SenseTime] Research supervised by [Jiaming Sun] and [Prof. Xiaowei Zhou] (CAD&CG, ZJU) from October 2019 to May 2020.
During my undergraduate study, I worked in [CVR-Lab] supervised by [Prof. Yuchao Dai] as a Research Assistant on Lidar/Visual 3D Registration and Reconstruction, Dual Lidar calibration, etc.
I've served in the NWPU Dancing Robot Research And Training Base - Rescue Robot Group [Team - Explorer] for two years as a Robot Software Engineer and Team Leader since July, 2017. 
As usual, we participate in *RoboCup Rescue Robot League Regional Open Competitions*, and my main contribution is about SLAM, Robot Localization and Navigation, Path Planning, etc.

Github: [MaxChanger] \| [Google Scholar] \| Email: [sunjiadai AT foxmail dot com], [sunjiadai AT mail.nwpu.edu.cn]

<font color='#318CE7'><b>- I am looking for a job opportunity about 3DVision, free to contact me if you think we are a good match.</b></font>


## Research Interest
3D Vision, Robotics, SLAM, Autonomous Driving, Point Cloud Understanding, Motion Understanding
<!-- 3D Visual Perception, 3D Vision, Robotics, SLAM, Deep Learning, Autonomous Driving & Video Object Segmentation <br /> -->


## Recent News
<ul>
  {% for new in page.news.shown %}
    <li> [{{new.time}}] {{new.note}} </li>
  {% endfor %}
  
  <span id="moreText"> 
    {% for new in page.news.hidden %}
      <li> [{{new.time}}] {{new.note}} </li>
    {% endfor %}
  </span>
</ul>
<!-- Trigger toggleText() when the  button is clicked -->
<button onclick="toggleText()" id="textButton" class="showbutton"> Show More </button>

## Education & Intern Experience

{% assign thumbnail="left" %}
{% for edu in page.education %}
{% if edu.image %}
{% include image.html url=edu.image caption="" width="70px" align=thumbnail %}
{% endif %}
**{{edu.title}}** <br/>
{{ edu.comment }}
{% endfor %}

{% for intern in page.interns %}
{% if intern.image %}
{% include image.html url=intern.image caption="" width="70px" align=thumbnail %}
{% endif %}
**{{intern.title}}** <br/>
{{ intern.comment }}
{% endfor %}<br/>


## Publications
<!-- Will upload soon... -->
This part will be updated as soon as my on-going projects are approved to be made public which should be quite exciting.<br/>

{% assign thumbnail="left" %}
{% for pub in page.pubs %}
{% if pub.image %}
{% include image.html url=pub.image caption="" height="100px" align=thumbnail %}
{% endif %}
<!-- [**{{pub.title}}**]({% if pub.internal %}{{pub.url | prepend: site.baseurl}}{% else %}{{pub.url}}{% endif %})<br /> -->
- **{{pub.title}}**<br />
{{pub.author}}<br />
*{{pub.journal}}* {% if pub.note %} *({{pub.note}})* {% endif %} {% if pub.year %} *{{pub.year}}* {% endif %} {% if pub.doi %}[[doi]({{pub.doi}})]{% endif %}
{% if pub.media %} {% for item in pub.media %} {% if item.url %} [[{{item.name}}]({{item.url}}){:target="_blank"}] {% else %} [{{item.name}}] {% endif %}
{% endfor %}
{% endif %}
{% endfor %}


## Projects
{% for pro in page.projects %}
{% if pro.image %}{% include image2.html url=pro.image caption="" align=thumbnail %}{% endif %}
**{{pro.title}}**  *{{pro.time}}* 
<!-- {% if pro.topic %}<br/>**{{pro.topic}}**{% endif %} -->
{% if pro.comment %}<br/>{{ pro.comment }}{% endif %}
<!-- {% if pro.duties %}<br/>{{ pro.duties }}{% endif %} -->
{% if pro.videos %}<br/>**Video:** {% for video in pro.videos %}[[{{video.name}}]({{video.url}}){:target="_blank"}]{% endfor %}{% endif %}
{% endfor %}


## Honors & Awards
- **Outstanding Graduate Students** (First-class Academic Scholarship) \| Northwestern Polytechnical University, 2020-2021
- **Third Prize** \| 16th China Postgraduate Electronic Design Competition, Shaoxing, 08/2021
- **Outstanding Graduate** and **Excellent Graduation Projects** \| Northwestern Polytechnical University, 06/2020
- **Outstanding Students** \| Northwestern Polytechnical University (top 14.7%), 2016-2019, three consecutive years
- Aviation Industry Special Scholarship (first-class  top 0.5%), 2018-2019
- Aviation Industry Special Scholarship (second-class top 2.0%), 2017-2018
- Wu Yajun's Special Scholarship (third-class top 4.6%), 2016-2017
- **International First Prize** \| Meritorious Winner, International University Interdisciplinary Contest in Modeling (ICM), 02/2018
- **Silver Award** \| RoboCup Rescue Robotic Tournament - Divisional Competition, Zhejian, 04/2018
- **Champion** \| RoboCup Rescue, Divisional Competition-Independent Ability Challenge, Zhejiang, 04/2018
- **Champion** \| China Robot Competition - Environmental Autonomous Exploration Project, Sichuan, 08/2018
- **First Prize** \| Zhonghangzhi Technology Co., Ltd. "Lianfei Cup" Challenge Result Presentation, 11/2018
- **First Prize** \| National Undergraduate Mathematical Modeling Competition (Shaanxi Province), 09/2017
- **Second Prize** \| The 11th National University Student Technology Contest on Energy-saving, Wuhan, 08/2018
- **Third Prize** \| National University Cloud Computing Application Innovation Competition, Nanjing, 04/2018
- **Silver Award** \| "Internet +" College Student Innovation and Entrepreneurship Competition, Shaanxi, 10/2018
- **Silver Award** \| The 11th "Creating Youth" College Entrepreneurship Competition, NWPU, 04/2018
- **Excellent Project** \| University Student Innovation and Entrepreneurship Training Program, 2017-2018
- **Good Project** \| University Student Innovation and Entrepreneurship Training Program, 2017-2018

## Misc.
<!-- - Rejected list: [AAA21, CVPR21, ICCV21, BMVC21, CVPR22, ECCV22] &#129318; -->
- I love traveling and photography, and the scenery in northwestern China is usually exciting. (13/34 provinces) [**[500px]**]<br/>
- In the past I used to use Hexo and Markdown to make some records. It is written in Chinese. **[Click &rArr;BLOG-LINK](https://sunjiadai.xyz/blog){:target="_blank"}** <br/>
- Some meaningful extracurricular activities during my undergraduate: <br/>
Vice President of Tencent Innovation Club \| *10/2016 - 07/2019* \| [[Image]](/images/tic.jpg){:target="_blank"} <br/>
Chief Propagandist & Technical Support of Summer Social Practice Activities \| *07/2017* \| [[Image]](/images/share.jpg){:target="_blank"} <br/>
Minister of Public Relations Department of Computer Volunteer Service Team \| *10/2016 - 10/2018* \| [[Image]](/images/volunteer.jpg){:target="_blank"} <br/>


<!--Hyperlinks -->
[Prof. Xiaowei Zhou]: http://xzhou.me/
[Prof. Yuchao Dai]: https://scholar.google.com/citations?user=fddAbqsAAAAJ&hl=en
[Prof. Y. Dai]: https://scholar.google.com/citations?user=fddAbqsAAAAJ&hl=en
[Jiaming Sun]: https://jiamingsun.ml/
[MaxChanger]: https://github.com/MaxChanger
[sunjiadai AT foxmail dot com]: mailto:sunjiadai@foxmail.com
[sunjiadai AT mail.nwpu.edu.cn]: mailto:sunjiadai@mail.nwpu.edu.cn
[Team - Explorer]: https://github.com/team-explorer-rescue-robot/
[School of Computer Science]: https://jsj.nwpu.edu.cn/en/Home.htm
[NWPU]: https://en.nwpu.edu.cn/
[SenseTime]: https://www.sensetime.com/en
[Dr. Zhanxuan Hu]: https://kdd-code.github.io/
[Google Scholar]: https://scholar.google.com/citations?user=GNe24ewAAAAJ&hl=en
[Xieyuanli Chen]: https://scholar.google.com/citations?user=DvrngV4AAAAJ&hl=en
[CVR-Lab]: http://npu-cvr.cn/
[Dingfu Zhou]: https://scholar.google.com/citations?user=pfBeKioAAAAJ&hl=en
[Xibin Song]: https://scholar.google.com/citations?user=2gudyEQAAAAJ&hl=en
[Liangjun Zhang]: https://www.cs.unc.edu/~zlj/
[Robotics and Autonomous Driving Lab]: http://research.baidu.com/Research_Areas/index-view?id=58
[500px]: https://500px.com/p/changersunjd?view=photos