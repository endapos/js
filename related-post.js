var labelArray = [];
                                        var relatedPostConfig = {
                                        homePage: "https://www.tirinfo.com/",
                                        widgetTitle: "<p>Related Post:</p>",
                                        numPosts: 10,
                                        containerId: "related-post",
                                        newTabLink: false,
                                        widgetStyle: 1,
                                        callBack: function() {}
                                        };
//<![CDATA[
                      /*! Creator JS Related Post Widget for Blogger by Taufik Nurrohman => https://gplus.to/tovic */
                      /*! Telah dimodifikasi oleh you w4hyou => https://info-kmu.blogspot.com/ */
                      var randomRelatedIndex,showRelatedPost;(function(e,t,n){var r={widgetTitle:"<h4>Artikel Terkait:</h4>",homePage:"https://www.tirinfo.com",numPosts:7,titleLength:"auto",callBack:function(){}};for(var i in relatedPostConfig){r[i]=relatedPostConfig[i]=="undefined"?r[i]:relatedPostConfig[i]}var s=function(e){var r=t.createElement("script");r.type="text/javascript";r.src=e;n.appendChild(r)},o=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u=function(e){var t=e.length,n,r;if(t===0){return false}while(--t){n=Math.floor(Math.random()*(t+1));r=e[t];e[t]=e[n];e[n]=r}return e},a=typeof labelArray=="object"&&labelArray.length>0?"/-/"+u(labelArray)[0]:"",f=function(e){var t=e.feed.openSearch$totalResults.$t-r.numPosts,n=o(1,t>0?t:1);s(r.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+a+"?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+r.numPosts+"&callback=showRelatedPost")},l=function(e){var t=document.getElementById(r.containerId),n=u(e.feed.entry),i=r.widgetStyle,s=r.widgetTitle+"<ul>",o=r.newTabLink?' target="_blank"':"",a='<span style="display:block;clear:both;"></span>',f,l,c,h,p;if(!t){return}for(var v=0;v<r.numPosts;v++){if(v==n.length){break}l=n[v].title.$t;c=r.titleLength!=="auto"&&r.titleLength<l.length?l.substring(0,r.titleLength)+"&hellip;":l;for(var m=0,g=n[v].link.length;m<g;m++){f=n[v].link[m].rel=="alternate"?n[v].link[m].href:"#"}s+='<li><a title="'+l+'" href="'+f+'"'+o+">"+c+"</a></li>"}t.innerHTML=s+="</ul>"+a;r.callBack()};randomRelatedIndex=f;showRelatedPost=l;s(r.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+a+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0])
                      //]]>
