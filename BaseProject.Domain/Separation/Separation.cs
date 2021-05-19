
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseProject.Domain
{
    public class Separation
    {
        public Guid SeparationId { get; set; }
        public string Description { get; set; }
        public Guid ProductId { get; set; }
        public Guid PlantId { get; set; }
        public double Quantity { get; set; }
        public string MeasuresUnit { get; set; }
        public DateTime CreationTime { get; set; }

        //public DateTime SeparationDate { get; set; }
        public bool IsDeleted { get; set; }


        public virtual Plant Plant { get; set; }
        public virtual Product Product { get; set; }

    }
}
