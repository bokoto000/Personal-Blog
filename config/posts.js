module.exports={
    posts:
        [
            {
                "name":"zumo",
                "header":"Zumo 32u4 kit",
                "date":"15.07.2018",        
                "headerDesc":"A robot kit that can be used in competitions.",
                "isProject":"false",
                "previewPicture":"iot",
                "githubLink":"",
                "tags":[
                    {"tag":"IoT"},
                    {"tag":"C++"},
                    {"tag":"Arduino"},
                    {"tag":"Kit"}
                ],
                "headerPic":"zumoHeader.jpg",
                "descParagraphs":[
                    {"paragraph":"The Zumo 32u4 robot comes as a kit which a friend and I assembled. The robot uses an ATmega32U4 microcontroller ( the same one as Arduino Uno/Nano). "+
                    "All the pins are taken so making modification to the hardware is a bit tricky. You should normally choose if you want to use it for sumo battles or linetracing/"+
                    "mazesolving. It's better to choose before you start assembling because changing parts is harder after that. The API "+"for the motors and sensors "+
                    "is straightforward so all that's left is "+
                    "programming the algorithms. There are many examples but they have to be configured for the motors(not included in kit) that you use. While it won't win against a "+
                    "well-made robot which are not kits It will be equal to the rest. It's great for testing strategies or other sumo robots. It's perfect for beginners without "+
                    "experience in robot design."},
                ],
                "pictures":[
                    {
                        "description":"",
                        "picture":"zumo.jpg"
                    },
                    {
                        "description":"",
                        "picture":"zumo1.jpg"
                    },
                    {
                        "description":"",
                        "picture":"zumo2.jpg"
                    },
                ]
            },
            {
                "name":"myFirstInterview",
                "header":"My first interview!",
                "date":"15.07.2018",        
                "headerDesc":"The robotics club got interview by local news!",
                "isProject":"false",

                "previewPicture":"web",
                "tags":[
                    {"tag":"Web"},
                    {"tag":"Interview"},
                    {"tag":"News"},
                ],
                "headerPic":"",
                "descParagraphs":[
                    {"paragraph":"The robotics club at school got interviewed by local news. As I am a part of the club I also got interviewed and I look better in real life "+
                    "than on those pictures."},
                ],
                "link":"http://www.bgsever.info/news/2018/06/25/%D0%B1%D1%8A%D0%B4%D0%B5%D1%89%D0%B8-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B5%D1%82%D0%B0%D1%82%D0%B5%D0%BB%D0%B8-%D0%BE%D1%82-%D0%BC%D0%B3-%D0%BF%D0%BB%D0%B5%D0%B2%D0%B5%D0%BD-%D1%81%D0%B5/",
                "pictures":[
                ]
            },
            {
                "name":"calendarWebApp",
                "header":"Calendar Web App",
                "date":"15.07.2018",        
                "headerDesc":"A calendar web app from a hackathon.",
                "isProject":"true",
                "githubLink":"https://github.com/bokoto000/Personal-Blog",
                "previewPicture":"web",
                "tags":[
                    {"tag":"Web"},
                    {"tag":"Node Js"},
                    {"tag":"Express"},
                    {"tag":"MongoDB"},
                    {"tag":"HTML"},
                    {"tag":"CSS"}
                ],
                "headerPic":"calendarHeader.jpg",
                "descParagraphs":[
                    {"paragraph":"I participated in Softuni Fest 2018, where I had to make a calendar and then present it as a part of the competition. "+
                    "After the competition I worked a little on it. The Calendar does not use bootstrap but It's still responsive. As my free hosting only allows one "+
                    "project, I am hosting it with the blog. Users are not yet implemented because of the new GDPR laws. Chat with us is not implemented either."},
                ],
                "link":"/calendar",
                "pictures":[
                    {
                        "description":"",
                        "picture":"calendar.jpg"
                    }
                ]
            },
            {
                "name":"roboticPlantCare",
                "header":"Robotic Plant Care",
                "date":"15.07.2018",        
                "headerDesc":"A robot that cares for your plants at home while you're on a trip.",
                "isProject":"true",
                "previewPicture":"iot",
                "githubLink":"https://github.com/bokoto000/RoboticPlantCare",
                "tags":[
                    {"tag":"IoT"},
                    {"tag":"Python"},
                    {"tag":"Tensorflow"},
                    {"tag":"AI"},
                    {"tag":"Raspberry Pi"}
                ],
                "headerPic":"roboticPlantCareHeader.jpg",
                "descParagraphs":[
                    {"paragraph":"This is my most serious robotics project till now. The project consists of a dekstop application and a robot. "+
                    "The dekstop application is used to gather user input and send some options to the robot and it can also be used to manually "+
                    "control the robot's movements and watch the stream from the camera. The robot uses a camera to get video feed and artificial "+ 
                    "intelligence to detect the position of the plants. It uses a moisture sensor to get information about the moisture "+
                    "before watering. The whole project is written in Python 3 and the robot is using the Raspberry Pi 3 to operate. The chassis and the parts "+
                    "for the robot arm are cutted by a laser by my design."},
                ],
                "pictures":[
                    {
                        "description":"",
                        "picture":"roboticPlantCare.jpg"
                    },
                    {
                        "description":"",
                        "picture":"roboticPlantCare1.jpg"
                    },
                    {
                        "description":"",
                        "picture":"roboticPlantCare2.jpg"
                    },
                    {
                        "description":"Pictures from SAP Geeky Camp 4.0 Finals:",
                        "picture":"roboticPlantCare3.jpg"
                    },
                    {
                        "description":"",
                        "picture":"roboticPlantCare4.jpg"
                    },
                    {
                        "description":"",
                        "picture":"roboticPlantCare5.jpg"
                    },
                    {
                        "description":"",
                        "picture":"roboticPlantCare6.jpg"
                    }
                ]
            },
            {
                "name":"computerVision",
                "header":"Computer Vision",
                "date":"15.07.2018",        
                "headerDesc":"Computer vision with Tensorflow and OpenCV",
                "isProject":"false",
                "previewPicture":"ai",
                "tags":[
                    {"tag":"AI"},
                    {"tag":"Python"},
                    {"tag":"Tensorflow"},
                    {"tag":"OpenCV"},
                    {"tag":"Computer Vision"}
                ],
                "headerPic":"roboticPlantCareHeader.jpg",
                "descParagraphs":[
                    {"paragraph":"Tensorflow is an open source library for machine learning. I used it for object detection and the results I got from training a neural network to detect pots is amazing. "+
                     "I've got high accuracy without using too much input data. OpenCV is an open source computer vision library but I did not get such good results with it. "+
                     "I used haar and cascade classifiers with about the same data input. It did not do so well and it did not have such high accuracy. Maybe the deep learning module will do better but "+
                     "I have not yet tested it. "+
                     "Tensorflow's accuracy was so good that I used it for my project Robotic Plant Care. The pictures below are pot detection with Tensorflow."},
                ],
                "pictures":[
                    {
                        "description":"At home",
                        "picture":"computerVision.jpg"
                    },
                    {
                        "description":"At school",
                        "picture":"computerVision1.jpg"
                    }
                ]
            },
            {
                "name":"bearAndMeat",
                "header":"Bear And Meat game!",
                "date":"15.07.2018",
                "headerDesc":"A game made for about one night as homework for SAP Geeky Camp. (It's kinda good tho)",
                "isProject":"true",
                "previewPicture":"pc",
                "githubLink":"https://github.com/bokoto000/BearAndMeat",
                "tags":[
                    {"tag":"PC"},
                    {"tag":"C#"},
                    {"tag":"Unity"}
                ],
                "headerPic":"bearAndMeatHeader.jpg",
                "descParagraphs":[
                    {"paragraph":"We had a lecture on video games in Sap Geeky Camp and after every lecture there is homework. We had to make a platform game where you fight a bear. "+
                    "The Bear had to shoot bees and bear traps. The way you deal damage to the bear is by destroying his beeboxes ( go through them). There are 4 beeboxes behind the bear and 1 hidden "+
                    "somewhere in the map (somewhere high). Consuming ( going through) the meat heals you for 5 health. More information in the How To Play file in the github repository. "+
                    "Moving the mouse while playing is under development. The idea was that you can look around but It messes up your movements."},
                ],
                "pictures":[
                    {
                        "description":"",
                        "picture":"bearAndMeat.jpg"
                    },
                    {
                        "description":"This is the map. The red are where the beeboxes are hidden",
                        "picture":"bearAndMeat1.jpg"
                    },
                    {
                        "description":"This is what you look like",
                        "picture":"bearAndMeat2.jpg"
                    }
                ]
            },
            {
                "name":"welcomeToMyBlog",
                "header":"Welcome to my blog!",
                "date":"15.07.2018",
                "headerDesc":"This is my first blog!",
                "isProject":"true",
                "previewPicture":"web",
                "githubLink":"https://github.com/bokoto000/Personal-Blog",
                "link":"/",
                "tags":[
                    {"tag":"Web"},
                    {"tag":"Node Js"},
                    {"tag":"Express"},
                    {"tag":"Bootstrap"},
                    {"tag":"HTML"},
                    {"tag":"CSS"}
                ],
                "headerPic":"blogHeader.jpg",
                "descParagraphs":[
                    {"paragraph":"This is my blog and It's the second web project I've been working on. "+
                    "The technologies I've used are Express, Boostrap, HTML, CSS. "+
                    "I will blog about projects I am working on, frameworks, libraries, IoT stuff and researchs."},
                ],
                "pictures":[
                    {
                        "description":"",
                        "picture":"blog.jpg"
                    }
                ]
            },
        ]
}