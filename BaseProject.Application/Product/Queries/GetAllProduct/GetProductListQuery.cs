using System.Collections.Generic;
using BaseProject.Application.Common;

using MediatR;

namespace BaseProject.Application.Product.Queries.GetAllProduct
{
    public class GetProductListQuery :FilterBase ,IRequest<ProductListViewModel>
    {
        public string Name { get; set; }

    }
}
