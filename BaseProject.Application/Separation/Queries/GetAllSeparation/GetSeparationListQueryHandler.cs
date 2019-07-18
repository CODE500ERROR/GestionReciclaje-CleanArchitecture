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

namespace BaseProject.Application.Separation.Queries
{
    public class GetSepartionListQueryHandler : IRequestHandler<GetSeparationListQuery, SeparationListViewModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;
        public GetSepartionListQueryHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<SeparationListViewModel> Handle(GetSeparationListQuery request, CancellationToken cancellationToken)
        {

            var data = _context.Separations
                                      .OrderByDescending(x => x.CreationTime)
                                      .Where(x => !x.IsDeleted &&
                                                         (string.IsNullOrEmpty(request.Description) || x.Description.Contains(request.Description)))
                                      .AsQueryable().ProjectTo<SeparationLookupModel>(_mapper.ConfigurationProvider);

            var pageList = await PagedList<SeparationLookupModel>.CreateAsync(data, request.PageNumber, request.PageSize);


            return new SeparationListViewModel {
                PageNumber = pageList.CurrentPage,
                PageSize = pageList.PageSize,
                PageTotal = pageList.TotalPages,
                TotalRecords = pageList.TotalCount,
                Separations = pageList.Entities
            };
        }
    }
}