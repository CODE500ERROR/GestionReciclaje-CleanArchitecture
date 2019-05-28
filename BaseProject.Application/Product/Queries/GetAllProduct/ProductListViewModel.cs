using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Product.Queries.GetAllProduct
{
    public class ProductListViewModel : FilterBase
    {
        public List<ProductLookupModel> Products { get; set; }
    }
}
