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

namespace BaseProject.Application.Category.Commands.DeleteCategory
{
    public class DeleteCategoryCommandHandler :  IRequestHandler<DeleteCategoryCommand>
    {
        private readonly BaseProjectDbContext _context;

        public DeleteCategoryCommandHandler( BaseProjectDbContext db)
        {
            _context = db;
        }

        public async Task<Unit> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Categories.FindAsync(request.CategoryId);
            if (entity == null)         
                throw new NotFoundException(nameof(BaseProject.Domain.Category), request.CategoryId);           

            entity.IsDeleted = true;
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
