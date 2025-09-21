hexo.extend.generator.register('post_data_exporter', function(locals) {
    console.log("Exporting post data for external scripts...");

    // Filter for only posts that have a city and country
    const postsWithLocation = locals.posts.filter(p => p.city && p.country);

    const postData = postsWithLocation.map(post => ({
        title: post.title,
        author: post.author,
        city: post.city,
        country: post.country,
        path: post.path // The crucial, accurate path from Hexo
    }));

    console.log(`Found ${postData.length} posts with location data to export.`);

    return {
        path: 'post_data.json',
        data: JSON.stringify(postData, null, 2)
    };
});
