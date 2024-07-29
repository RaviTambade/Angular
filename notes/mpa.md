
# Web Application  Architectures

<img src="/images/spa_mpa.png"/>


## Multi Page Applications (MPA)

<p>MPA's are web applications that consist of a large number of HTML pages. Each page displays different content that has to be refreshed each time a user interacts with it.</p>
<p>MPAs have been around since the early days of the web and are still widely used today. They are especially common in content-heavy websites, such as news sites or e-commerce sites, where each page represents a different piece of content or product.</p>
<p>Some of the most popular MPAs include; Amazon, The New York Times, Wikipedia, and eBay.</p>

### Advantages of MPAs
- <b>Better for SEO</b>
<p>MPAs tend to rank well in search engine results since each page has a unique URL and can be indexed separately. This means that each page in an MPA can rank independently in search results, potentially driving more traffic to the site.</p>
<p>As we mentioned in the SPA section, this is more of an issue for young applications. Once a SPA receives hundreds of thousands of views a month, it becomes irrelevant because Google will prioritize the reindexing of the app.</p>
- <b>Secure</b>
<p>Since MPAs send separate requests for each page, it is easier to implement security measures such as authentication and authorization. In contrast, SPAs can be more vulnerable to security threats since much of the content is loaded dynamically and may not be subject to the same security checks as traditional web pages.</p>
- <b>Faster initial load time</b>
<p>While SPAs offer better performance once the initial page has loaded, the initial load time of an MPA is often faster since the browser only needs to load the content for the current page rather than all the content for the entire application.</p>
- <b>Compatible with older browsers</b>
<p>MPA is a classic way of building web pages, so it's compatible with most older browsers and legacy systems. This compatibility is important in situations where users may be accessing the application from a variety of devices or platforms.</p>


### Disadvantages of MPAs

- <b>Outperformed by SPAs</b>
<p>Since MPAs require a full page reload when a user interacts with the app, they offer poor performance, which negatively impacts the user experience.</p>

- <b>Complex to develop and maintain</b>
<p>MPAs are larger than SPAs and as such, take more time to develop since they consist of multiple pages. Also, MPAs require more complex server-side logic compared to SPAs, as each page needs to be designed and developed separately. This can result in more code to maintain and a higher risk of bugs and errors.</p>

<b>Higher server load</b>
<p>MPAs require the server to handle more requests, as each page requires a separate request to load. This can lead to higher server load and slower response times, especially for applications with a large number of users.</p>

### Which one should you choose? -SPAs vs MPAs

<p>Ideally, SPAs are used to build dynamic platforms with small data volumes, while MPAs are best suited for large applications with high-volume data. But there’s more to choosing between the two than just considering the amount of data your app will handle.  Here are some more crucial factors to keep in mind:</p>
- <b>Complexity of your application</b>
<p>SPAs are well-suited for complex applications that require a high level of interactivity and real-time updates. They can be particularly useful for applications with a lot of user input or content that needs to be updated frequently. With a SPA, users can interact with the application without needing page refreshes, providing a more seamless experience.</p>
<p>On the other hand, MPAs may be a better choice for simpler applications that do not require as much client-side processing. In an MPA, each page is separate, which can make it easier to manage and navigate for smaller applications. If your application is relatively simple and does not require a high degree of interactivity or real-time updates, then an MPA may be a better choice.</p>

- <b>Performance requirements</b>
<p>If performance is a top priority for your application, then SPAs may be the way to go. SPAs are designed to load content dynamically without requiring a full page refresh. This means that users can interact with the application more quickly and efficiently. Additionally, SPAs can reduce server load, which can improve overall performance.</p>
<p>However, MPAs may be better suited for applications that require fast initial load times, as well as applications that rely heavily on caching to improve performance. Each page in an MPA is separate, which means that they can be cached independently. This can help to improve load times and reduce server load, particularly for static content.</p>

- <b>SEO requirements</b>
<p>As a business owner, you probably want your app to rank high on search engines to increase brand visibility and conversion rate. You can achieve this with an MPA since each page has its own unique URL, title, and metadata, making it easier for search engines to index the content and rank it accordingly.<p/>

<p>Nonetheless, SPAs can be optimized for search engines. But it requires additional effort and knowledge of SEO best practices, such as using hashbang URLs, implementing server-side rendering, and making use of metadata tags. If you are willing to put in the extra effort, then a SPA can still be an excellent choice for an application that requires SEO.</p>

- <b>Time to market</b>
<p>SPAs are easier and faster to build and as such, enable businesses to launch their products faster. MPAs tend to take a lot of time and even cost more since they involve building multiple pages. However, SPAs rely heavily on advanced JavaScript frameworks and tools, so you might have a problem finding the right talent to build your SPA.</p>


<p>Ultimately, the choice between a SPA and an MPA should be based on the specific needs and requirements of your application. If your application requires a high degree of interactivity and real-time updates, then a SPA may be the better choice despite the added complexity. However, if your application is relatively simple and does not require a lot of client-side processing, then an MPA may be the simpler and more practical choice.</p>