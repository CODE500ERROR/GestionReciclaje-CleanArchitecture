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
using System.Collections.Generic;

namespace BaseProject.Application.Separation.Queries.GetSeparationByPlant
{
    public class GetSeparationByPlantHandler : IRequestHandler<GetSeparationByPlantQuery, List<GetSeparationByPlantModel>>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager _userMananger;

        public GetSeparationByPlantHandler(BaseProjectDbContext db, IMapper mapper, UserManager user)
        {
            _context = db;
            _mapper=mapper;
            _userMananger = user;
        }

        public async Task<List<GetSeparationByPlantModel>> Handle(GetSeparationByPlantQuery request, CancellationToken cancellationToken)
        {
            var result = new List<GetSeparationByPlantModel>();
            var separation = await _context.Separations.Where(x=>!x.IsDeleted).Include(x => x.Plant).GroupBy(x=>x.PlantId).ToListAsync();
            foreach (var item in separation)
            {
                var sepItem = new GetSeparationByPlantModel() {
                    Quantity = (item.Sum(x => x.Quantity)),
                    PlantName = item.Select(x=>x.Plant.Name).First()
                };
                result.Add(sepItem);
            }
            return result;

        }
    }
}
