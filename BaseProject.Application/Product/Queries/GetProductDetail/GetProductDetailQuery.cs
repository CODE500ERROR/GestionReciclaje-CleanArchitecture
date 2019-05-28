using System;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Application.Product.Queries.GetAllProduct;
using MediatR;

namespace BaseProject.Application.Product.Queries.GetProductDetail
{
    public class GetProductDetailQuery :  IRequest<ProductDetailModel>
    {
        public Guid ProductId { get; set; }
    }
}
