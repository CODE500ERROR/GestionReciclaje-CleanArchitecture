using System;
using System.Collections;
using System.Collections.Generic;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Separation.Queries
{
    public class SeparationDetailModel
    {
        public Guid SeparationId { get; set; }
        public Guid? ProductId { get; set; }
        public string Description { get; set; }
        public double Quantity { get; set; }
        public string MeasuresUnit { get; set; }
    }
}
