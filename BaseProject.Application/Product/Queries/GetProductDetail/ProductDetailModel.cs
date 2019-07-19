using System;
using System.Collections;
using System.Collections.Generic;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Product.Queries.GetProductDetail
{
    public class ProductDetailModel
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; }
        public string Description{ get; set; }
        public Guid CategoryId { get; set; }
        public Guid? CategoryParentId { get; set; }
    }
}
