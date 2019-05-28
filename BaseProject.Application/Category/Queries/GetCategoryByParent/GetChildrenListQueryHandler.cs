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
using Whoever.Common.Exceptions;

namespace BaseProject.Application.Category.Queries.GetCategoryByParent
{
    public class GetChildrenListQueryHandler : IRequestHandler<GetChildrenListQuery, ChildrenListViewModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;

        public GetChildrenListQueryHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ChildrenListViewModel> Handle(GetChildrenListQuery request, CancellationToken cancellationToken)
        {
            if(request.ParentId == null) throw new NotFoundException(nameof(BaseProject.Domain.Category), request.ParentId);
            var data =  _context.Categories
                                      .OrderByDescending(x => x.CreationTime)
                                      .Where(x => !x.IsDeleted && x.ParentId==request.ParentId)                                                         
                                      .AsQueryable().ProjectTo<ChildrenLookupModel>(_mapper.ConfigurationProvider);

            return new ChildrenListViewModel {
                Children = data.ToList()
            };
        }
    }
}