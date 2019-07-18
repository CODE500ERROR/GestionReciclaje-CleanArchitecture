using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Domain;
using BaseProject.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Whoever.Common.Exceptions;
using System.Linq;
using AutoMapper.QueryableExtensions;
using BaseProject.Application.Roles;
using BaseProject.Application.Managers;
using BaseProject.Application.Users.Queries.GetAllUsers;

namespace BaseProject.Application.Separation.Queries
{
    public class GetSeparationDetailQueryHandler : IRequestHandler<GetSeparationDetailQuery, SeparationDetailModel>
    {
        private readonly BaseProjectDbContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager _userMananger;

        public GetSeparationDetailQueryHandler(BaseProjectDbContext db, IMapper mapper, UserManager user)
        {
            _context = db;
            _mapper=mapper;
            _userMananger = user;
        }

        public async Task<SeparationDetailModel> Handle(GetSeparationDetailQuery request, CancellationToken cancellationToken)
        {
            var sep = await _context.Separations.FindAsync(request.SeparationId);            
            if (sep == null)      
                throw new NotFoundException(nameof(BaseProject.Domain.Separation), request.SeparationId.ToString());
            
            return new SeparationDetailModel {
                SeparationId= sep.SeparationId,
                Description= sep.Description,
                ProductId= sep.ProductId,
                Quantity=sep.Quantity,
                MeasuresUnit= sep.MeasuresUnit
            };

        }
    }
}
