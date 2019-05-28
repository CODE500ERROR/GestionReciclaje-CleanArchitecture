using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using BaseProject.Application.Common;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Application.Managers;
using BaseProject.Application.Roles;
using BaseProject.Application.Roles.GetAllRoles;
using BaseProject.Application.Users.Queries.GetAllUsers;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BaseProject.Application.Category.Queries.GetAllCategoryParent
{
    public class GetCategoryParentListQueryHandler : IRequestHandler<GetCategoryParentListQuery, CategoryParentListViewModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;

        public GetCategoryParentListQueryHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<CategoryParentListViewModel> Handle(GetCategoryParentListQuery request, CancellationToken cancellationToken)
        {

            var data =  _context.Categories
                                      .OrderByDescending(x => x.CreationTime)
                                      .Where(x => !x.IsDeleted && !x.ParentId.HasValue)                                                         
                                      .AsQueryable().ProjectTo<CatgoryParentLookupModel>(_mapper.ConfigurationProvider);

            return new CategoryParentListViewModel {
                Parents = data.ToList()
            };
        }
    }
}