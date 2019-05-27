using System;
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

namespace BaseProject.Application.Plant.Commands.DeletePlant
{
    public class DeletePlantCommandHandler :  IRequestHandler<DeletePlantCommand>
    {
        private readonly BaseProjectDbContext _context;

        public DeletePlantCommandHandler( BaseProjectDbContext db)
        {
            _context = db;
        }

        public async Task<Unit> Handle(DeletePlantCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Plants.FindAsync(request.PlantId);
            if (entity == null)         
                throw new NotFoundException(nameof(BaseProject.Domain.Plant.Plant), request.PlantId);           

            entity.IsDeleted = true;
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
