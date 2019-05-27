using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BaseProject.Application.Plant.CreatePlant;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Whoever.Common.Exceptions;
using Whoever.Common.Extensions;

namespace BaseProject.Application.Category.Commands.CreateSubCategory
{
    public class CreateSubCategoryCommandHandler : IRequestHandler<CreateSubCategoryCommand, bool>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;

        public CreateSubCategoryCommandHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<bool> Handle(CreateSubCategoryCommand request, CancellationToken cancellationToken)
        {

            var subCat = new BaseProject.Domain.SubCategory() {                
                Name = request.Name,            
                CategoryId=request.CategoryId
            };
            try
            {

                var result = await _context.SubCategories.AddAsync(subCat);
                await _context.SaveChangesAsync(cancellationToken);
                return true;
            }
            catch (Exception ex)
            {
                ex.ReThrow();
                return false;
            }
        }
    }
}
