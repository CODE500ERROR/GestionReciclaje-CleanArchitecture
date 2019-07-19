using System;
using System.Collections.Generic;
using System.Text;
using Whoever.Entities.Interfaces;

namespace BaseProject.Domain
{
    public class Product : IHasCreationTime, ISoftDelete
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; }
        public string Description{ get; set; }
        public Guid CategoryId{ get; set; }
        public Category Category { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreationTime { get; set; }

        public virtual ICollection<Separation> Separations { get; set; }
    }
}
