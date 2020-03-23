using System;
using System.Linq;
using System.Security.Claims;
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
                var userId = _httpContextAccesor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
                var user = await _context.Users.Where(x=>x.Id==1).FirstAsync();
                request.PlantId = user.PlantId;

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
