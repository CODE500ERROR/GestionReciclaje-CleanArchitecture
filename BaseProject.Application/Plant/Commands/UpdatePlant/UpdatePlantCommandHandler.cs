using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Managers;
using BaseProject.Application.Users.Commands.UpdateUser;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Whoever.Common.Exceptions;
using Whoever.Common.Extensions;

namespace BaseProject.Application.Plant.Commands.UpdatePlant
{
    public class UpdatePlantCommandHandler :  IRequestHandler<UpdatePlantCommand>
    {
        private readonly BaseProjectDbContext _context;
        private readonly UserManager _userManager;
        public UpdatePlantCommandHandler( BaseProjectDbContext db , UserManager userManager)
        {
            _context = db;
            _userManager  =userManager;
        }

        public async Task<Unit> Handle(UpdatePlantCommand request, CancellationToken cancellationToken)
        {
            var factory = await _context.Plants.FindAsync(request.PlantId);
            if (factory == null)
                throw new NotFoundException(nameof(BaseProject.Domain.Plant), request.Id);

            factory.Address = request.Address;
            factory.Name = request.Name;
            factory.MunicipioId = request.MunicipioId;
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
