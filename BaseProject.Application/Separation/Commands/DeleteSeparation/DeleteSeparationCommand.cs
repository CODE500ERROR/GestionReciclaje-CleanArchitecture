using System;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Separation.Commands
{
    public class DeleteSeparationCommand : IRequest
    {
        public Guid SeparationId { get; set; }
    }
}
