using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

using BaseProject.Application.Users.Commands.UpdateUser;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Whoever.Common.Exceptions;
using Whoever.Common.Extensions;

namespace BaseProject.Application.Separation.Commands
{
    public class UpdateSepartionCommandHandler :  IRequestHandler<UpdateSeparationCommand>
    {
        private readonly BaseProjectDbContext _context;
        public UpdateSepartionCommandHandler( BaseProjectDbContext db)
        {
            _context = db;
        }

        public async Task<Unit> Handle(UpdateSeparationCommand request, CancellationToken cancellationToken)
        {
            var separation = await _context.Separations.FindAsync(request.SeparationId);
            if (separation == null)
                throw new NotFoundException(nameof(Separtion), request.SeparationId);

            separation.Description = request.Description;
            separation.Quantity= request.Quantity;
            separation.ProductId = request.ProductId;
            separation.MeasuresUnit = request.MeasuresUnit;
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
