var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>
                                        &quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
                    </b:loop></b:if>];
                                        var relatedPostConfig = {
                                        homePage: &quot;<data:blog.homepageUrl/>&quot;,
                                        widgetTitle: &quot;&lt;p&gt;Related Post:&lt;/p&gt;&quot;,
                                        numPosts: 10,
                                        containerId: &quot;related-post&quot;,
                                        newTabLink: false,
                                        widgetStyle: 1,
                                        callBack: function() {}
                                        };
