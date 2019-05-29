using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Whoever.Common.Exceptions;
using Whoever.Common.Extensions;

namespace BaseProject.Application.Product.Commands.CreateProduct
{
    public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, bool>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;

        public CreateProductCommandHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<bool> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {

            var prod = new BaseProject.Domain.Product() {                
                Name = request.Name,
                Description=request.Description,
                CategoryId= request.CategoryId
            };
            try
            {

                var result = await _context.Products.AddAsync(prod);
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
