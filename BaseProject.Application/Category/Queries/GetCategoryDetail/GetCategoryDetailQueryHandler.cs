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

namespace BaseProject.Application.Category.Queries.GetCategoryDetail
{
    public class GetFactoryDetailQueryHandler : IRequestHandler<GetCategoryDetailQuery, CategoryDetailModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager _userMananger;

        public GetFactoryDetailQueryHandler(BaseProjectDbContext db, IMapper mapper, UserManager user)
        {
            _context = db;
            _mapper=mapper;
            _userMananger = user;
        }

        public async Task<CategoryDetailModel> Handle(GetCategoryDetailQuery request, CancellationToken cancellationToken)
        {
            var cat = await _context.Categories.FindAsync(request.CategoryId);            
            if (cat == null)      
                throw new NotFoundException(nameof(BaseProject.Domain.Category), request.CategoryId);
            
            return new CategoryDetailModel {
                CategoryId= cat.CategoryId,
                Name= cat.Name
            };

        }
    }
}
