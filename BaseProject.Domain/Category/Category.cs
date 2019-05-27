using System;
using System.Collections.Generic;
using System.Text;
using Whoever.Entities.Interfaces;

namespace BaseProject.Domain
{
    public class Category : IHasCreationTime, ISoftDelete
    {
        public Category()
        {
            SubCategories = new List<SubCategory>();
        }
        public Guid CategoryId { get; set; }
        public string Name{ get; set; }
        public bool IsDeleted { get ; set; }
        public DateTime CreationTime { get ; set; }

        public ICollection<SubCategory> SubCategories { get; set; }
    }
}
