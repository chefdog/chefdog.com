namespace Miniblog
{
    public class BlogSettings
    {
        public string Name { get; set; } = "Coffee blog";
        public string Description { get; set; } = "Coffee reviews and taste sessions";
        public string Owner { get; set; } = "Chefdog";
        public int PostsPerPage { get; set; } = 16;
        public int CommentsCloseAfterDays { get; set; } = 10;
        public string DefaultFeaturedPreviewImageUrl { get; set; } = "/img/featuredDefault.jpg";
        public string DefaultPreviewImageUrl { get; set; } = "/img/postDefault.jpg";
    }
}
