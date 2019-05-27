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

namespace BaseProject.Application.Category.Commands.CreateCategory
{
    public class CreateCategoryCommandHandler : IRequestHandler<CreateCategoryCommand, bool>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;

        public CreateCategoryCommandHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<bool> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
        {

            var cat = new BaseProject.Domain.Category() {                
                Name = request.Name,                
            };


            try
            {

                var result = await _context.Categories.AddAsync(cat);

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
