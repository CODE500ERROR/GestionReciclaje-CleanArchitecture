using System;
using System.Threading;
using System.Threading.Tasks;
using BaseProject.Application.Separation.Commands;
using BaseProject.Persistence;
using MediatR;
using Whoever.Common.Exceptions;

namespace BaseProject.Application.Separtion.Commands
{
    public class DeleteSepartionCommandHandler :  IRequestHandler<DeleteSeparationCommand>
    {
        private readonly BaseProjectDbContext _context;

        public DeleteSepartionCommandHandler( BaseProjectDbContext db)
        {
            _context = db;
        }

        public async Task<Unit> Handle(DeleteSeparationCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Separations.FindAsync(request.SeparationId);
            if (entity == null)         
                throw new NotFoundException(nameof(Separtion), request.SeparationId);           

            entity.IsDeleted = true;
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
