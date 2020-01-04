namespace Miniblog
{
    public class BlogSettings
    {
        public string Name { get; set; } = "Chefdog blog";
        public string SubTitle { get; set; } = "Chefdog's koffie hoekje";
        public string Description { get; set; } = "Koffie & Techologie";
        public string Owner { get; set; } = "Chefdog";
        public int PostsPerPage { get; set; } = 16;
        public int CommentsCloseAfterDays { get; set; } = 10;
        public string DefaultFeaturedPreviewImageUrl { get; set; } = "/img/featuredDefault.jpg";
        public string DefaultPreviewImageUrl { get; set; } = "/img/postDefault.jpg";
    }
}
