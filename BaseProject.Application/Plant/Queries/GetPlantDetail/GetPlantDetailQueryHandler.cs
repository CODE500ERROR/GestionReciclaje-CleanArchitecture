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

namespace BaseProject.Application.Plant.Queries.GetAllPlant
{
    public class GetFactoryDetailQueryHandler : IRequestHandler<GetPlantDetailQuery, PlantDetailModel>
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

        public async Task<PlantDetailModel> Handle(GetPlantDetailQuery request, CancellationToken cancellationToken)
        {
            var factory = await _context.Plants.FindAsync(request.PlantId);            
            if (factory == null)      
                throw new NotFoundException(nameof(BaseProject.Domain.Plant.Plant), request.PlantId);
            
            return new PlantDetailModel {
                PlantId=factory.PlantId,
                Name=factory.Name,
                Address=factory.Address,
                MunicipioId=factory.MunicipioId
            };

        }
    }
}
