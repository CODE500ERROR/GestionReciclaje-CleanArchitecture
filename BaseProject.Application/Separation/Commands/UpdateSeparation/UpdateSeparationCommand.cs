﻿using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Separation.Commands
{
    public class UpdateSeparationCommand : UpdateCommand, IRequest
    {
        public Guid SeparationId { get; set; }
        public string Description { get; set; }
        public Guid? PlantId { get; set; }
        public Guid ProductId { get; set; }
        public double Quantity { get; set; }
        public string MeasuresUnit { get; set; }


    }
}
