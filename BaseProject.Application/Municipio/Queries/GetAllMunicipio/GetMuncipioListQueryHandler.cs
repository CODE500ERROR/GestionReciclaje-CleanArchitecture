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

namespace BaseProject.Application.Users.Administrators.Queries.GetAllRoles
{
    public class GetMunicipioListQueryHandler : IRequestHandler<GetMunicipioListQuery, MunicipioLookupModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;

        public GetMunicipioListQueryHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<MunicipioLookupModel> Handle(GetMunicipioListQuery request, CancellationToken cancellationToken)
        {
           
           return new MunicipioLookupModel {
               Municipios = await _context.Municipios.ProjectTo<MunicipioViewModel>(_mapper.ConfigurationProvider).OrderBy(x=>x.Name)
                                            .ToListAsync(cancellationToken)
           };
        }
    }
}