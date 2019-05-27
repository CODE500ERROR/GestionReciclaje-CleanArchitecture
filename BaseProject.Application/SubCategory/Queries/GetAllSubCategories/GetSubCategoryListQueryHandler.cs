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

namespace BaseProject.Application.Category.Queries.GetAllSubCategories
{
    public class GetSubCategoryListQueryHandler : IRequestHandler<GetSubCategoryListQuery, SubCategoryListViewModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;
        public GetSubCategoryListQueryHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<SubCategoryListViewModel> Handle(GetSubCategoryListQuery request, CancellationToken cancellationToken)
        {

            var data = _context.SubCategories
                                      .OrderByDescending(x => x.CreationTime)
                                      .Where(x => !x.IsDeleted &&
                                                         (string.IsNullOrEmpty(request.Name) || x.Name.Contains(request.Name)))
                                      .AsQueryable().ProjectTo<SubCategoryLookupModel>(_mapper.ConfigurationProvider);

            var pageList = await PagedList<SubCategoryLookupModel>.CreateAsync(data, request.PageNumber, request.PageSize);


            return new SubCategoryListViewModel {
                PageNumber = pageList.CurrentPage,
                PageSize = pageList.PageSize,
                PageTotal = pageList.TotalPages,
                TotalRecords = pageList.TotalCount,
                SubCategories = pageList.Entities
            };
        }
    }
}