using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Whoever.Common.Exceptions;
using System.Linq;
using AutoMapper.QueryableExtensions;
using BaseProject.Application.Roles;
using BaseProject.Application.Managers;
using BaseProject.Application.Users.Queries.GetAllUsers;

namespace BaseProject.Application.Product.Queries.GetProductDetail
{
    public class GetProductDetailQueryHandler : IRequestHandler<GetProductDetailQuery, ProductDetailModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager _userMananger;

        public GetProductDetailQueryHandler(BaseProjectDbContext db, IMapper mapper, UserManager user)
        {
            _context = db;
            _mapper=mapper;
            _userMananger = user;
        }

        public async Task<ProductDetailModel> Handle(GetProductDetailQuery request, CancellationToken cancellationToken)
        {
            var product = await _context.Products.Include(x => x.Category).FirstAsync(x=>x.ProductId==request.ProductId);

            if (product == null)      
                throw new NotFoundException(nameof(BaseProject.Domain.Product), request.ProductId);
            
            return new ProductDetailModel {
                ProductId= product.ProductId,
                Name= product.Name,
                Description= product.Description,
                CategoryId= product.CategoryId,
                CategoryParentId=product.Category.ParentId
            };
        }
    }
}
