using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BaseProject.Application.Plant.CreatePlant;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Whoever.Common.Exceptions;
using Whoever.Common.Extensions;

namespace BaseProject.Application.Separation.Commands
{
    public class CreateSeparationCommandHandler : IRequestHandler<CreateSeparationCommand, bool>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;
        private readonly IHttpContextAccessor _httpContextAccesor;

        public CreateSeparationCommandHandler(BaseProjectDbContext context, IMapper mapper, IHttpContextAccessor httpContextAccesor)
        {
            _context = context;
            _mapper = mapper;
            _httpContextAccesor = httpContextAccesor;
        }

        public async Task<bool> Handle(CreateSeparationCommand request, CancellationToken cancellationToken)
        {
            
            try
            {
                var userId = Convert.ToInt16(_httpContextAccesor.HttpContext.User.FindFirst("id")?.Value);
                var user = await _context.Users.Where(x=>x.Id==userId).FirstAsync();
                request.PlantId = user.PlantId;

                var separation = new Domain.Separation {
                    Description = request.Description,
                    PlantId = request.PlantId.Value,
                    ProductId = request.ProductId,
                    MeasuresUnit = request.MeasuresUnit,
                    Quantity = request.Quantity
                }; //_mapper.Map<Domain.Separation>(request);
                
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
