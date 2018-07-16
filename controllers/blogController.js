const Event = require ('../models/event');
const eventUtils = require ('../utils/utils.js');
const posts = require('../config/posts').posts;

numberOfRecentPosts=5;
const recentPosts=posts.slice(0,numberOfRecentPosts);


module.exports = {
    getRecentAndAll:(req,res)=>{
        res.status(200).render('index',{recentPosts:recentPosts,posts:posts});

    },
    getPost:(req,res)=>{

        wantedName=req.params.name;
        wantedPost={};
        postNum=posts.length;
        
        for(i=0;i<postNum;i++)
        {
            if(posts[i].name===wantedName){
                wantedPost=posts[i];
            }
        }
        res.status(200).render('post',{recentPosts:recentPosts,wantedPost:wantedPost});

    },
    getProjects:(req,res)=>{

        projects=[];

        postNum=posts.length;
        
        for(i=0;i<postNum;i++)
        {
            if(posts[i].isProject==="true")
            {
                projects.push(posts[i]);
            }
        }
        res.render('projects',{projects,recentPosts});
    },
    getAbout:(req,res)=>{
        res.status(200).render('about',{recentPosts});
    },
    search:(req,res)=>{
        
        searchString=req.body.search;
        searchWords=searchString.split(" ");
        foundPosts=[];
        
        for(i=0; i<searchWords.length;i++)
        {
            for(j=0; j<posts.length; j++){
                

                words=JSON.stringify(posts[j]).toLowerCase().match(/(\w+)/g);
                

                if(words.indexOf(searchWords[i].toLowerCase())!=-1)
                {
                    foundPosts.push(posts[j]);
                }
            }
        }
        res.status(200).render('search',{foundPosts,recentPosts});
    },
    contact:(req,res)=>{
        res.status(200).render('contact',{recentPosts});
    }
    
}

getRecentPosts=function(posts){
    numberOfRecentPosts=5;
    recentPosts=posts.slice(0,numberOfRecentPosts);
    return recentPosts;

}

