using System;
using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Product.Queries.GetAllProduct
{
    public class ProductLookupModel
    {
        public Guid ProductId{ get; set; }
        public string Name{ get; set; }
        public string Description{ get; set; }
        public string CategoryName{ get; set; }
    }
}
