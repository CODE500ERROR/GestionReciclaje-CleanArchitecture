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

namespace BaseProject.Application.Separation.Commands
{
    public class CreateSeparationCommandHandler : IRequestHandler<CreateSeparationCommand, bool>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;

        public CreateSeparationCommandHandler(BaseProjectDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<bool> Handle(CreateSeparationCommand request, CancellationToken cancellationToken)
        {
            request.PlantId =Guid.Parse("A4EF3853-760B-4D59-51FD-08D70C659891");
            
            try
            {
                var separation = _mapper.Map<Domain.Separation>(request);
                var result = await _context.Separations.AddAsync(separation);
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
