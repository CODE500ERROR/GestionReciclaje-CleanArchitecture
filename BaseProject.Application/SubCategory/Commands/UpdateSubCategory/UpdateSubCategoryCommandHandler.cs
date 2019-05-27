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

namespace BaseProject.Application.Category.Commands.UpdateSubCategory
{
    public class UpdateSubCategoryCommandHandler :  IRequestHandler<UpdateSubCategoryCommand>
    {
        private readonly BaseProjectDbContext _context;
        public UpdateSubCategoryCommandHandler( BaseProjectDbContext db)
        {
            _context = db;
        }

        public async Task<Unit> Handle(UpdateSubCategoryCommand request, CancellationToken cancellationToken)
        {
            var subCategory = await _context.SubCategories.FindAsync(request.SubCategoryId);
            if (subCategory == null)
                throw new NotFoundException(nameof(BaseProject.Domain.SubCategory), request.SubCategoryId);

            subCategory.Name = request.Name;
            subCategory.CategoryId = request.CategoryId;           
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
