using System;
using System.ComponentModel.DataAnnotations;

namespace Miniblog.Models
{
    public class Review
    {
        public ReviewTypes ReviewType { get; set; }
        public string Title { get; set; }
        public DateTime PublishDate { get; set; } 
        [Required]
        public short GrinderSetting { get; set; }
        [Required]
        public short ElapseTime { get; set; }
        public short ShotWeight { get; set; }
        public short ShotWeightRecommended { get; set; }
        [Required]
        public short Weigth { get; set; }
        public short WeightRecommended { get; set; }
        [Required]
        public short Rating { get; set; }
        [Required]
        public bool DoubleShot { get; set; }
    }
}
