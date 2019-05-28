using System;
using System.Collections.Generic;
using System.Text;

namespace BaseProject.Domain.Product
{
    public class Product
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; }
        public Guid CategoryId{ get; set; }
    }
}
