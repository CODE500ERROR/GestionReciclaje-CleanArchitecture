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

namespace BaseProject.Application.Product.Commands.UpdateProduct
{
    public class UpdateProductCommandHandler :  IRequestHandler<UpdateProductCommand>
    {
        private readonly BaseProjectDbContext _context;
        private readonly UserManager _userManager;
        public UpdateProductCommandHandler( BaseProjectDbContext db , UserManager userManager)
        {
            _context = db;
            _userManager  =userManager;
        }

        public async Task<Unit> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            var prod = await _context.Products.FindAsync(request.ProductId);
            if (prod == null)
                throw new NotFoundException(nameof(BaseProject.Domain.Product), request.ProductId);

            prod.Name = request.Name;
            prod.CategoryId = request.CategoryId;
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }

       
    }
}
