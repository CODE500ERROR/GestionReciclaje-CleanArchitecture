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

namespace BaseProject.Application.Category.Commands.UpdateCategory
{
    public class UpdateCategoryCommandHandler :  IRequestHandler<UpdateCategoryCommand>
    {
        private readonly BaseProjectDbContext _context;
        public UpdateCategoryCommandHandler( BaseProjectDbContext db)
        {
            _context = db;
        }

        public async Task<Unit> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
        {
            var factory = await _context.Categories.FindAsync(request.CategoryId);
            if (factory == null)
                throw new NotFoundException(nameof(BaseProject.Domain.Category), request.CategoryId);

            factory.Name = request.Name;           
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
