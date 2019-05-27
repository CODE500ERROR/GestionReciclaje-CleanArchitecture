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

namespace BaseProject.Application.Category.Commands.DeleteSubCategory
{
    public class DeleteSubCategoryCommandHandler :  IRequestHandler<DeleteSubCategoryCommand>
    {
        private readonly BaseProjectDbContext _context;

        public DeleteSubCategoryCommandHandler( BaseProjectDbContext db)
        {
            _context = db;
        }

        public async Task<Unit> Handle(DeleteSubCategoryCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.SubCategories.FindAsync(request.SubCategoryId);
            if (entity == null)         
                throw new NotFoundException(nameof(BaseProject.Domain.SubCategory), request.SubCategoryId);           

            entity.IsDeleted = true;
            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }

       
    }
}
