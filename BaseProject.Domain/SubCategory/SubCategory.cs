using System;
using System.Collections.Generic;
using System.Text;
using Whoever.Entities.Interfaces;

namespace BaseProject.Domain
{
    public class SubCategory : IHasCreationTime, ISoftDelete
    {
        public Guid SubCategoryId { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreationTime { get; set; }

        public Guid CategoryId   { get; set; }
        public Category Category{ get; set; }
    }
}
